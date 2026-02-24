import { Box, Button, Typography, Chip, Stack } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import ScheduleIcon from '@mui/icons-material/Schedule'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import bandHero from '../img/band-hero-1.jpg'
import { useQuoteRequest } from '../context/QuoteRequestContext'

const LeadMagnetBlock = () => {
  const { openQuotePopup } = useQuoteRequest()

  const handleCta = () => {
    openQuotePopup()
  }

  return (
    <Box
      id="lead-magnet"
      sx={{
        py: { xs: 4, md: 5 },
        px: 2,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { xs: 0, md: 3 },
        mx: { xs: 0, md: 2 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bandHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(105deg, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.75) 45%, rgba(26, 15, 26, 0.6) 100%),
              radial-gradient(circle at 85% 50%, rgba(244, 103, 51, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 15% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 50%)
            `,
          },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 900,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Left: Text content */}
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
            <Chip
              icon={<CardGiftcardIcon sx={{ fontSize: '1rem !important' }} />}
              label="Kink: DJ Set"
              size="small"
              sx={{
                bgcolor: 'rgba(212, 175, 55, 0.25)',
                color: '#D4AF37',
                fontWeight: 700,
                border: '1px solid rgba(212, 175, 55, 0.5)',
                '& .MuiChip-icon': { color: '#D4AF37' },
              }}
            />
            <Chip
              icon={<ScheduleIcon sx={{ fontSize: '1rem !important' }} />}
              label="48 tundi"
              size="small"
              sx={{
                bgcolor: 'rgba(244, 103, 51, 0.25)',
                color: '#F46733',
                fontWeight: 700,
                border: '1px solid rgba(244, 103, 51, 0.5)',
                '& .MuiChip-icon': { color: '#F46733' },
              }}
            />
            <Chip
              label="Kokkuhoid kuni 200€"
              size="small"
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                bgcolor: 'rgba(212, 175, 55, 0.2)',
                color: '#D4AF37',
                fontWeight: 700,
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            />
          </Stack>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Righteous', cursive",
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Terve õhtu võtme all: Live funk + DJ kingiks!
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Broneerige SA Funk Band esinemise kuupäev 48 tunni jooksul pärast esimest päringut ja saate täispika DJ-seti vaheaegadeks täiesti tasuta.
          </Typography>

          <Typography
            component="span"
            sx={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.6)',
              fontStyle: 'italic',
            }}
          >
            * Pakkumine kehtib täisprogrammi broneerimisel.
          </Typography>

          <Box sx={{ mt: 2.5 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EventIcon />}
              onClick={handleCta}
              data-button-label="Lead Magnet - Uudista vaba kuupäev"
              sx={{
                px: 3,
                py: 1.5,
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 700,
                fontFamily: "'Righteous', cursive",
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                color: '#FFFFFF',
                borderRadius: '10px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(244, 103, 51, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #FF7744, #E5BF50)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 28px rgba(244, 103, 51, 0.5)',
                },
              }}
            >
              Tea vaba kuupäev
            </Button>
          </Box>
        </Box>

        {/* Right: Savings badge (desktop) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              px: 3,
              py: 2,
              borderRadius: 2,
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 103, 51, 0.15))',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              textAlign: 'center',
            }}
          >
            <MusicNoteIcon sx={{ fontSize: 2.5, color: '#D4AF37', mb: 0.5 }} />
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#D4AF37',
                fontFamily: "'Righteous', cursive",
              }}
            >
              Kokkuhoid kuni 200€
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LeadMagnetBlock
