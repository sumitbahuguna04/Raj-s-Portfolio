import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Section/Navbar'
import Hero from './components/Section/Hero'
import Events from './components/Section/Events'
import Certification from './components/Section/Certification'
import Contact from './components/Section/Contact'

function App() {
   const [lang, setLang] = useState("en");
  return (
    <>
      <Navbar lang={lang} setLang={setLang}/>
      <Hero lang={lang}/>
      <Events lang={lang}/>
      <Certification lang={lang}/>
      <Contact/>
    </>
  )
}

export default App
