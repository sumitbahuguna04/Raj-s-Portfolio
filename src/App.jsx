import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Section/Navbar'
import Hero from './components/Section/Hero'
import Events from './components/Section/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Events/>
    </>
  )
}

export default App
