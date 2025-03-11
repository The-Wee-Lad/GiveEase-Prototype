import About from './components/About'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Review from './components/Review'
import './index.css'
import React from 'react'
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Carousel/>
      <About/>
      <Review/>
      <Footer/>
    </div>
  )
}
export default App