import React from "react"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Footer from "./components/Footer.jsx"
import Skills from "./components/Skills.jsx"
import Contact from "./components/Contact.jsx"





function App() {
  

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
