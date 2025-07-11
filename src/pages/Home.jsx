import React from 'react'
import Features from './Features'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
<Hero />
      <Features />
      <About />
      <Footer />
    </div>
  )
}

export default Home