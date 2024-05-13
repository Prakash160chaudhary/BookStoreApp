import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Cources from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Cources />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App

