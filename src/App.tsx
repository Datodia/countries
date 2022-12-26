import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Square />
    </div>
  )
}

export default App

const Square = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`
