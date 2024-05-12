import React from "react"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Footer from "./components/Footer.jsx"
import Skills from "./components/Skills.jsx"
import Contact from "./components/Contact.jsx"
import Project from "./components/Projects.jsx"





function App() {
  

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
