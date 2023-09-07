import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick() {
    alert('clicked')    
  }
  const handleClick2 = () =>{
    alert('clicked')
  }
  const handleClick3 = (num) =>{
    alert('Number is: '+num)
  }


  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={handleClick}>click here</button>
      <button onClick={handleClick2}>click here 2</button>
      <button onClick={() =>{alert('clicked')}}>click here 3</button>
      <button onClick={() => handleClick3(5)}>click here 4</button>
    </>
  )
}

export default App
