import { useState, useEffect } from 'react'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'
import { countries } from './Interfaces'

function App() {

  const [data, setData] = useState<countries[]>([])

  // const fetchData = () => {
  //   axios.get('https://restcountries.com/v3.1/all')
  //     .then(res => {
  //       setData(res.data)
  //     })
  // }

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setData(res.data)
      })
  }, [])

  return (
    <Wrapper>
      {/* <Card>
        <img />
        <h4>name</h4>
        <h6>Population</h6>
        <h6>region</h6>
        <h6>capital</h6>
      </Card> */}


      {data.map((item) => {
        return (<Card>
          <img src={item.flags.svg} />
          <h4>{item.name}</h4>
          <h6>{item.capital}</h6>
          <h6>{item.population}</h6>
          <h6>{item.region}</h6>
        </Card>)
      })}

    </Wrapper>
  )
}

export default App

const Square = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`
const Wrapper = styled.div`
  flex-wrap: wrap;
`

const Card = styled.div`
  border: 2px solid red;
`

