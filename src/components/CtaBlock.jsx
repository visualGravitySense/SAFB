import { Box, Button, Typography } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import { useQuoteRequest } from '../context/QuoteRequestContext'

const CtaBlock = () => {
  const { openQuotePopup } = useQuoteRequest()
  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        px: 2,
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(26, 15, 26, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Righteous', cursive",
          color: '#FFFFFF',
          mb: 2,
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        Broneeri bänd oma üritusele
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          size="medium"
          startIcon={<EventIcon />}
          onClick={() => handleScrollTo('#broneeri')}
          data-button-label="CTA Block Broneeri"
          sx={{
            px: 3,
            py: 1.4,
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            fontWeight: 700,
            fontFamily: "'Righteous', cursive",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            background: 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)',
            color: '#FFFFFF',
            borderRadius: '10px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 24px rgba(244, 103, 51, 0.5)',
            },
          }}
        >
          Broneeri Nüüd
        </Button>
        <Button
          variant="outlined"
          size="medium"
          startIcon={<RequestQuoteIcon />}
          onClick={openQuotePopup}
          data-button-label="CTA Block Küsi pakkumist"
          sx={{
            px: 3,
            py: 1.4,
            fontSize: { xs: '0.85rem', md: '0.9rem' },
            fontWeight: 700,
            fontFamily: "'Righteous', cursive",
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            borderColor: '#F46733',
            borderWidth: '2px',
            color: '#FFFFFF',
            borderRadius: '10px',
            background: 'rgba(244, 103, 51, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#D4AF37',
              background: 'rgba(244, 103, 51, 0.2)',
              color: '#FFFFFF',
              transform: 'translateY(-2px)',
              borderWidth: '2px',
            },
          }}
        >
          Küsi pakkumist
        </Button>
      </Box>
    </Box>
  )
}

export default CtaBlock
