import { Box, Button, Typography } from '@mui/material'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { useQuoteRequest } from '../context/QuoteRequestContext'

const Pricing = () => {
  const { openQuotePopup } = useQuoteRequest()

  return (
    <Box
      id="hinnad"
      sx={{
        py: { xs: 5, md: 6 },
        px: 2,
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A0F1A 50%, #0A0A0A 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 50%, rgba(244, 103, 51, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Righteous', cursive",
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 700,
            color: '#D4AF37',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            mb: 2,
          }}
        >
          Hinnad
        </Typography>
        {/* <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 3,
            px: 3,
            py: 1.5,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(244, 103, 51, 0.1))',
            border: '2px solid rgba(212, 175, 55, 0.4)',
          }}
        >
          <LocalOfferIcon sx={{ color: '#D4AF37', fontSize: '1.5rem' }} />
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              fontFamily: "'Righteous', cursive",
            }}
          >
            Alates 990€
          </Typography>
        </Box> */}
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 3,
            fontSize: { xs: '0.95rem', md: '1rem' },
          }}
        >
          Tasuta konsultatsioon · Kohandatud pakkumine
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<RequestQuoteIcon />}
          onClick={openQuotePopup}
          data-button-label="Pricing Küsi pakkumist"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 700,
            fontFamily: "'Righteous', cursive",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            background: 'linear-gradient(135deg, #F46733, #D4AF37)',
            color: '#1A1A1A',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #FF7744, #E5BF50)',
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 30px rgba(244, 103, 51, 0.5)',
            },
          }}
        >
          Küsi pakkumist
        </Button>
      </Box>
    </Box>
  )
}

export default Pricing
