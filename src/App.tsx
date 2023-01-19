import { useState, useEffect, useLayoutEffect } from 'react'
import './App.css'
import axios from 'axios'
import { countries } from './Interfaces'
import { Homepage } from './pages/Homepage'
import { Routes, Route, Link } from 'react-router-dom'
import { Country } from './pages/Country'
import styled, { ThemeProvider } from 'styled-components'


function App() {

  const [data, setData] = useState<countries[]>([])
  const [dark, setDark] = useState<boolean>(false)

  const darkTheme = {
    text: '#fff',
    header: '#2B3844',
    body: '#202C36',
    svg: 'brightness(100%)'
  }

  const lightTheme = {
    text: '#111517',
    header: "#fff",
    body: '#f2f2f2',
    svg: 'brightness(10%)'

  }

  useLayoutEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setData(res.data)
      })
  }, [])



  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage dark={dark} setDark={setDark} data={data} />} />
          <Route path="/country/:countryName" element={<Country dark={dark} setDark={setDark} data={data} />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App

const Container = styled.div`
    background-color: ${props => props.theme.body};
    transition: .5s;
`
