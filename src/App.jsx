import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Component/Car'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
    <h2>Sunil k</h2>
    <Car name="Dhruv" age="20"/>
    <Header/> 
    
     </>
  
  )
}

export default App
