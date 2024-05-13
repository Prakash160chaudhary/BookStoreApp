import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen container mx-auto md:px-20 px-4 pt-28">
    <h1>Hello this is About Section</h1>
    </div>
    <Footer />
    </>
  )
}

export default About