import { useState, useEffect } from 'react'
import { Box, Button, Typography, Stack, Fade } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import heroImage from '../img/band-hero-1.jpg'
import { useContent } from '../context/ContentContext'

const Hero = () => {
  const { content, loading } = useContent()
  const [fadeIn, setFadeIn] = useState(false)
  
  // Get hero data from API or use defaults
  const heroData = content?.hero || {
    title: 'SIIM AIMLA FUNK BAND',
    subtitle: 'Funk, mis paneb sind tantsima',
    description: 'Tipptasemel live-muusika, mis loob unustamatu elamuse teie üritusele',
    ctaPrimary: 'Broneeri Nüüd',
    ctaQuote: 'Küsi pakkumist',
    ctaSecondary: 'Kuula Muusikat',
  }

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
        minHeight: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        pt: '70px',
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
            linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(26, 15, 26, 0.5) 50%, rgba(10, 10, 10, 0.7) 100%),
            radial-gradient(circle at 20% 30%, rgba(244, 103, 51, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)
          `,
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
          backgroundSize: '200% 100%',
          animation: 'funkShimmer 3s ease-in-out infinite',
          zIndex: 2,
        },
        '@keyframes funkShimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
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
            {/* Main Headline - Enhanced MOTIVATION with FUNK Style */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
                fontFamily: "'Righteous', cursive",
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                background: 'linear-gradient(135deg, #F46733 0%, #D4AF37 30%, #FFFFFF 50%, #D4AF37 70%, #F46733 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(244, 103, 51, 0.5), 0 0 80px rgba(212, 175, 55, 0.3)',
                animation: fadeIn 
                  ? 'slideDown 0.8s ease-out, funkGradientText 4s ease infinite' 
                  : 'none',
                position: 'relative',
                '@keyframes slideDown': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(-30px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
                '@keyframes funkGradientText': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              }}
            >
              {heroData.title}
            </Typography>

            {/* Value Proposition - Enhanced MOTIVATION with FUNK */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.4rem', md: '1.9rem' },
                fontFamily: "'Righteous', cursive",
                marginBottom: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'linear-gradient(135deg, #D4AF37, #FFFFFF, #D4AF37)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                animation: fadeIn 
                  ? 'fadeInUp 1s ease-out 0.3s both, funkGradientText 3s ease infinite 1s' 
                  : 'none',
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(20px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              {heroData.subtitle}
            </Typography>
            
            {/* Sub-value Proposition */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                marginBottom: '4rem',
                fontWeight: 400,
                textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(244, 103, 51, 0.3)',
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                animation: fadeIn ? 'fadeInUp 1s ease-out 0.5s both' : 'none',
              }}
            >
              {heroData.description}
            </Typography>

            {/* CTA Buttons - Enhanced ABILITY & PROMPTS */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              {/* Primary CTA - Most Prominent with FUNK Style */}
              <Button
                variant="contained"
                size="large"
                startIcon={<EventIcon />}
                onClick={() => handleScrollTo('#broneeri')}
                sx={{
                  px: { xs: 5, md: 7 },
                  py: 2.5,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 700,
                  fontFamily: "'Righteous', cursive",
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)',
                  backgroundSize: '200% 200%',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 30px rgba(244, 103, 51, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  minWidth: { xs: '100%', sm: '280px' },
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  animation: fadeIn 
                    ? 'bounceIn 1s ease-out 0.7s both, funkGradientMove 3s ease infinite 2s' 
                    : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transition: 'left 0.6s ease',
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)',
                    transform: 'translateY(-5px) scale(1.05)',
                    boxShadow: '0 12px 40px rgba(244, 103, 51, 0.7), 0 0 60px rgba(212, 175, 55, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                  '&:active': {
                    transform: 'translateY(-2px) scale(1.02)',
                  },
                  '@keyframes bounceIn': {
                    '0%': {
                      opacity: 0,
                      transform: 'scale(0.3) translateY(50px)',
                    },
                    '50%': {
                      opacity: 1,
                      transform: 'scale(1.1) translateY(-15px)',
                    },
                    '70%': {
                      transform: 'scale(0.95) translateY(0)',
                    },
                    '100%': {
                      transform: 'scale(1) translateY(0)',
                    },
                  },
                  '@keyframes funkGradientMove': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              >
                {heroData.ctaPrimary}
              </Button>
            </Stack>

            {/* Trust Indicator - Additional MOTIVATION with FUNK */}
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                mt: 3,
                fontWeight: 500,
                textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(212, 175, 55, 0.3)',
                animation: fadeIn ? 'fadeInUp 1s ease-out 1.1s both' : 'none',
                '&::before': {
                  content: '"🎸"',
                  marginRight: '8px',
                  fontSize: '1.2em',
                },
                '&::after': {
                  content: '"🎷"',
                  marginLeft: '8px',
                  fontSize: '1.2em',
                },
              }}
            >
              Vabalt broneerimine · Tasuta konsultatsioon · 200+ õnnestunud üritust
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  )
}

export default Hero

