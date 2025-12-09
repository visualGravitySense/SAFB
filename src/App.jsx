import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Events from './components/Events'
import Music from './components/Music'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('EST')

  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero />
      <Stats />
      <Events />
      <Music />
      <About />
      <Testimonials />
      <Booking />
      <Gallery />
      <Footer />
    </>
  )
}

export default App

