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
import Reviews from './components/Reviews'
import Stats from './components/Stats'
import Events from './components/Events'
import Music from './components/Music'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import CtaBlock from './components/CtaBlock'
import LeadMagnetBlock from './components/LeadMagnetBlock'
import LeadMagnetPopup from './components/LeadMagnetPopup'
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
          <LeadMagnetPopup />
          <Box sx={{ pb: { xs: '76px', md: 0 } }}>
            <Hero />
            <Reviews />
            {/* <Stats /> */}
            {/* <Events /> */}
            <Music />
            <CtaBlock />
            <About />
            <Pricing />
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

