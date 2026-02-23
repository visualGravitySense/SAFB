import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import { ContentProvider } from './context/ContentContext'
import { QuoteRequestProvider } from './context/QuoteRequestContext'
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
import CtaBlock from './components/CtaBlock'
import FloatingTelegramButton from './components/FloatingTelegramButton'
import StickyCta from './components/StickyCta'

function App() {
  useButtonClickTracker()
  usePageVisitTracker()

  return (
    <ContentProvider>
      <ThemeProvider theme={theme}>
        <QuoteRequestProvider>
          <CssBaseline />
          <Navigation />
          <FloatingTelegramButton />
          <StickyCta />
          <Box sx={{ pb: { xs: '76px', md: 0 } }}>
            <Hero />
            {/* <Stats /> */}
            {/* <Events /> */}
            <Music />
            <CtaBlock />
            <About />
            <CtaBlock />
            <Booking />
            <Gallery />
            <CtaBlock />
            <Footer />
          </Box>
        </QuoteRequestProvider>
      </ThemeProvider>
    </ContentProvider>
  )
}

export default App

