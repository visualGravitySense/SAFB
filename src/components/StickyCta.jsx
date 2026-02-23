import { Box, Button } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import { useContent } from '../context/ContentContext'
import { useQuoteRequest } from '../context/QuoteRequestContext'

const StickyCta = () => {
  const { content } = useContent()
  const { openQuotePopup } = useQuoteRequest()
  const heroData = content?.hero || {
    ctaPrimary: 'Broneeri Nüüd',
    ctaQuote: 'Küsi pakkumist',
  }

  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        px: 2,
        py: 1.5,
        gap: 1,
        background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 15, 26, 0.98) 100%)',
        backdropFilter: 'blur(12px)',
        borderTop: '2px solid rgba(244, 103, 51, 0.5)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.4)',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        pr: 9, // Space for FloatingTelegramButton
      }}
    >
      <Button
        variant="contained"
        size="medium"
        startIcon={<EventIcon />}
        onClick={() => handleScrollTo('#broneeri')}
        data-button-label="Sticky CTA Broneeri"
        sx={{
          flex: 1,
          py: 1.5,
          fontSize: '0.95rem',
          fontWeight: 700,
          fontFamily: "'Righteous', cursive",
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          background: 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)',
          backgroundSize: '200% 200%',
          color: '#FFFFFF',
          boxShadow: '0 4px 16px rgba(244, 103, 51, 0.4)',
          borderRadius: '10px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          minHeight: 44,
          '&:hover': {
            background: 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(244, 103, 51, 0.5)',
          },
        }}
      >
        {heroData.ctaPrimary}
      </Button>
      <Button
        variant="outlined"
        size="medium"
        startIcon={<RequestQuoteIcon />}
        onClick={openQuotePopup}
        data-button-label="Sticky CTA Küsi pakkumist"
        sx={{
          flex: 1,
          py: 1.5,
          fontSize: '0.9rem',
          fontWeight: 700,
          fontFamily: "'Righteous', cursive",
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderColor: '#F46733',
          borderWidth: '2px',
          color: '#FFFFFF',
          borderRadius: '10px',
          minHeight: 44,
          background: 'rgba(244, 103, 51, 0.15)',
          '&:hover': {
            borderColor: '#D4AF37',
            background: 'rgba(244, 103, 51, 0.25)',
            color: '#FFFFFF',
            transform: 'translateY(-2px)',
            borderWidth: '2px',
          },
        }}
      >
        {heroData.ctaQuote}
      </Button>
    </Box>
  )
}

export default StickyCta
