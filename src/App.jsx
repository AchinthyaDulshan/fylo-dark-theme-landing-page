import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import StayProductive from './components/StayProductive'
import Testamonial from './components/Testamonial'
import GetEarlyAccess from './components/GetEarlyAccess'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <StayProductive/>
      <Testamonial/>
      <GetEarlyAccess/>
      <Footer/>
    </div>
  )
}

export default App