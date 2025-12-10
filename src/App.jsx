import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Hero />
      <Stats />
      <Events />
      <Music />
      <About />
      <Testimonials />
      <Booking />
      <Gallery />
      <Footer />
    </ThemeProvider>
  )
}

export default App

