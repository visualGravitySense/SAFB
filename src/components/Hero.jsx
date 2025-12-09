import { useState, useEffect } from 'react'
import { Box, Button, Typography, Stack, Chip, Fade } from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EventIcon from '@mui/icons-material/Event'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PeopleIcon from '@mui/icons-material/People'
import heroImage from '../img/images-1.jpg'

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="avaleht"
      sx={{
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: '70px',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
          zIndex: 1,
        },
      }}
    >
      <Box 
        sx={{ 
          maxWidth: '900px', 
          px: 3, 
          position: 'relative', 
          zIndex: 2,
        }}
      >
        <Fade in={fadeIn} timeout={1000}>
          <Box>
            {/* Social Proof Badge - MOTIVATION */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Chip
                icon={<PeopleIcon sx={{ color: '#D4AF37 !important' }} />}
                label="50K+ Õnnestunud Üritust"
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.2)',
                  color: '#D4AF37',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  backdropFilter: 'blur(10px)',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': {
                      transform: 'scale(1)',
                    },
                    '50%': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              />
              <Chip
                icon={<TrendingUpIcon sx={{ color: '#D4AF37 !important' }} />}
                label="8+ Aastat Kogemust"
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.2)',
                  color: '#D4AF37',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  backdropFilter: 'blur(10px)',
                }}
              />
            </Stack>

            {/* Main Headline - Enhanced MOTIVATION */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                marginBottom: '1rem',
                textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(212, 175, 55, 0.3)',
                lineHeight: 1.1,
                animation: fadeIn ? 'slideDown 0.8s ease-out' : 'none',
                '@keyframes slideDown': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(-20px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              SIIM AIMLA FUNK BAND
            </Typography>

            {/* Value Proposition - Enhanced MOTIVATION */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.6rem' },
                marginBottom: '1rem',
                fontWeight: 500,
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                color: 'rgba(255, 255, 255, 0.95)',
              }}
            >
              Funk, mis paneb sind tantsima
            </Typography>
            
            {/* Sub-value Proposition */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                marginBottom: '3rem',
                fontWeight: 400,
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Tipptasemel live-muusika, mis loob unustamatu elamuse teie üritusele
            </Typography>

            {/* CTA Buttons - Enhanced ABILITY & PROMPTS */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              {/* Primary CTA - Most Prominent */}
              <Button
                variant="contained"
                size="large"
                startIcon={<EventIcon />}
                onClick={() => handleScrollTo('#broneeri')}
                sx={{
                  px: { xs: 4, md: 6 },
                  py: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 700,
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
                  textTransform: 'none',
                  borderRadius: '8px',
                  minWidth: { xs: '100%', sm: '240px' },
                  transition: 'all 0.3s ease',
                  animation: fadeIn ? 'bounceIn 1s ease-out 0.5s both' : 'none',
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'translateY(-3px) scale(1.02)',
                    boxShadow: '0 12px 32px rgba(212, 175, 55, 0.5)',
                  },
                  '&:active': {
                    transform: 'translateY(-1px) scale(0.98)',
                  },
                  '@keyframes bounceIn': {
                    '0%': {
                      opacity: 0,
                      transform: 'scale(0.3) translateY(50px)',
                    },
                    '50%': {
                      opacity: 1,
                      transform: 'scale(1.05) translateY(-10px)',
                    },
                    '70%': {
                      transform: 'scale(0.9) translateY(0)',
                    },
                    '100%': {
                      transform: 'scale(1) translateY(0)',
                    },
                  },
                }}
              >
                Broneeri Nüüd
              </Button>
              
              {/* Secondary CTA - Clear Alternative */}
              <Button
                variant="outlined"
                size="large"
                startIcon={<MusicNoteIcon />}
                onClick={() => handleScrollTo('#muusika')}
                sx={{
                  px: { xs: 4, md: 6 },
                  py: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 600,
                  borderColor: '#FFFFFF',
                  borderWidth: '2px',
                  color: '#FFFFFF',
                  textTransform: 'none',
                  borderRadius: '8px',
                  minWidth: { xs: '100%', sm: '240px' },
                  backdropFilter: 'blur(10px)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  animation: fadeIn ? 'fadeInUp 1s ease-out 0.7s both' : 'none',
                  '&:hover': {
                    borderColor: '#D4AF37',
                    bgcolor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37',
                    transform: 'translateY(-3px)',
                    borderWidth: '2px',
                  },
                  '@keyframes fadeInUp': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(30px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                Kuula Muusikat
              </Button>
            </Stack>

            {/* Trust Indicator - Additional MOTIVATION */}
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                mt: 2,
              }}
            >
              ✨ Vabalt broneerimine · Tasuta konsultatsioon · 200+ õnnestunud üritust
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  )
}

export default Hero

