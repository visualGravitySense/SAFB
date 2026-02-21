import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { ContentProvider } from './context/ContentContext'
import { useButtonClickTracker } from './hooks/useButtonClickTracker'
import { usePageVisitTracker } from './hooks/usePageVisitTracker'
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
import FloatingTelegramButton from './components/FloatingTelegramButton'

function App() {
  useButtonClickTracker()
  usePageVisitTracker()

  return (
    <ContentProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <FloatingTelegramButton />
        <Hero />
        <Stats />
        {/* <Events /> */}
        <Music />
        <About />
        {/* <Testimonials /> */}
        <Booking />
        <Gallery />
        <Footer />
      </ThemeProvider>
    </ContentProvider>
  )
}

export default App

