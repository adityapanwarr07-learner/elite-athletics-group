import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css";
import Hero from "./Components/Hero";
import Courses from './Components/Courses'
import Students from './Components/Students'
import Callback from './Components/Callback'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses/>
      <Students />
      <Callback />
      <Footer/>
    </div>
  )
}

export default App