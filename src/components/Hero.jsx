import { useState, useEffect } from 'react'
import { Box, Button, Typography, Stack, Fade } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StarIcon from '@mui/icons-material/Star'
import heroImage from '../img/band-hero-1.jpg'
import { useContent } from '../context/ContentContext'

const Hero = () => {
  const { content, loading } = useContent()
  const [fadeIn, setFadeIn] = useState(false)

  const heroData = content?.hero || {}
  const tagline = heroData.tagline ?? 'EESTI PARIM FUNK-BÄND'
  const slogan = heroData.slogan ?? 'Funk, mis paneb publiku tantsima — garanteeritud'
  const ctaPrimary = heroData.ctaPrimary ?? 'BRONEERI BÄND OMA ÜRITUSELE'
  const ctaSecondary = heroData.ctaSecondary ?? 'KUULA MEIE MUUSIKAT'
  const defaultStats = [
    { value: '200+', label: 'Üritust aastas' },
    { value: '15 a.', label: 'Laval' },
    { value: '4.98', label: 'Kliendihinne', withStar: true },
  ]
  const stats = Array.isArray(heroData.stats) ? heroData.stats : defaultStats

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
          <Box
            sx={{
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(15px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {/* Tagline - EESTI PARIM FUNK-BÄND */}
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                color: 'rgba(255, 255, 255, 0.95)',
                fontStyle: 'italic',
                fontWeight: 500,
                letterSpacing: '0.05em',
                mb: 1,
                animation: fadeIn ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none',
              }}
            >
              {tagline}
            </Typography>

            {/* Main Headline - SIIM AIMLA + FUNK BAND */}
            <Box sx={{ mb: 2 }}>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                  fontFamily: "'Righteous', cursive",
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1.1,
                  animation: fadeIn ? 'slideDown 0.7s ease-out 0.2s both' : 'none',
                }}
              >
                SIIM AIMLA
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
                  fontFamily: "'Righteous', cursive",
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  lineHeight: 1.05,
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F46733 50%, #D4AF37 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: fadeIn
                    ? 'slideDown 0.8s ease-out 0.3s both, funkGradientText 4s ease infinite 1s'
                    : 'none',
                  '@keyframes slideDown': {
                    from: { opacity: 0, transform: 'translateY(-20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                  '@keyframes funkGradientText': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              >
                FUNK BAND
              </Typography>
            </Box>

            {/* Slogan - Benefit-oriented */}
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.35rem' },
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 500,
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.5,
                animation: fadeIn ? 'fadeInUp 0.7s ease-out 0.5s both' : 'none',
              }}
            >
              {slogan}
            </Typography>

            {/* Social Proof - Stats */}
            <Stack
              direction="row"
              spacing={{ xs: 3, md: 5 }}
              justifyContent="center"
              flexWrap="wrap"
              sx={{
                mb: 4,
                gap: { xs: 2, md: 0 },
                '@keyframes statFadeIn': {
                  from: { opacity: 0, transform: 'translateY(15px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              {stats.map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: 'center',
                    animation: fadeIn ? `statFadeIn 0.6s ease-out ${0.6 + i * 0.1}s both` : 'none',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                      fontWeight: 800,
                      color: '#FFFFFF',
                      fontFamily: "'Righteous', cursive",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.5,
                    }}
                  >
                    {stat.withStar && <StarIcon sx={{ color: '#D4AF37', fontSize: '1.4rem' }} />}
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<MicIcon />}
                onClick={() => handleScrollTo('#broneeri')}
                data-button-label="Hero - Broneeri bänd"
                sx={{
                  px: { xs: 4, md: 5 },
                  py: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 700,
                  fontFamily: "'Righteous', cursive",
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  minWidth: { xs: '100%', sm: 320 },
                  boxShadow: '0 6px 24px rgba(212, 175, 55, 0.4)',
                  transition: 'all 0.3s ease',
                  animation: fadeIn ? 'fadeInUp 0.8s ease-out 0.9s both' : 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #E5BF50, #FF7744)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 32px rgba(212, 175, 55, 0.5)',
                  },
                }}
              >
                {ctaPrimary}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrowIcon />}
                onClick={() => handleScrollTo('#muusika')}
                data-button-label="Hero - Kuula muusikat"
                sx={{
                  px: { xs: 4, md: 5 },
                  py: 2,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  fontWeight: 700,
                  fontFamily: "'Righteous', cursive",
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderColor: 'rgba(255, 255, 255, 0.7)',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  minWidth: { xs: '100%', sm: 280 },
                  transition: 'all 0.3s ease',
                  animation: fadeIn ? 'fadeInUp 0.8s ease-out 1s both' : 'none',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {ctaSecondary}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Box>
    </Box>
  )
}

export default Hero

