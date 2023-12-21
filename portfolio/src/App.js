import React from 'react'
import { About, Achievements, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'
import './App.scss'
import FooterBottom from './container/Footer/FooterBottom'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Achievements />
      <Footer />
      <FooterBottom />
    </div>
  )
}

export default App
