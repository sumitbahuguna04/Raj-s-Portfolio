import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Section/Navbar";
import Hero from "./components/Section/Hero";
import Events from "./components/Section/Events";
import Certification from "./components/Section/Certification";
import Contact from "./components/Section/Contact";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <div id="home">
        <Hero lang={lang} />
      </div>
      <div id="events">
        <Events lang={lang} />
      </div>
      <div id="awards">
        <Certification lang={lang} />
      </div>
      <div id="contact">
        <Contact lang={lang}/>
      </div>
    </>
  );
}

export default App;
