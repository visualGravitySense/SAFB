import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Fade,
  Grow,
} from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import PeopleIcon from '@mui/icons-material/People'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AlbumIcon from '@mui/icons-material/Album'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countedValues, setCountedValues] = useState({
    events: 0,
    viewers: 0,
    years: 0,
    albums: 0,
  })
  const statsRef = useRef(null)

  const stats = [
    {
      icon: <EventIcon sx={{ fontSize: '3rem' }} />,
      value: 200,
      suffix: '+',
      label: 'Üritust',
      description: 'Õnnestunud kontserti',
      color: '#D4AF37',
      duration: 2000,
    },
    {
      icon: <PeopleIcon sx={{ fontSize: '3rem' }} />,
      value: 50,
      suffix: 'K+',
      label: 'Vaatajat',
      description: 'Rõõmsaid külalisi',
      color: '#D4AF37',
      duration: 2500,
    },
    {
      icon: <CalendarTodayIcon sx={{ fontSize: '3rem' }} />,
      value: 8,
      suffix: '',
      label: 'Aastat',
      description: 'Professionaalset kogemust',
      color: '#D4AF37',
      duration: 1500,
    },
    {
      icon: <AlbumIcon sx={{ fontSize: '3rem' }} />,
      value: 2,
      suffix: '',
      label: 'Albumit',
      description: 'Välja antud albumid',
      color: '#D4AF37',
      duration: 1800,
    },
  ]

  // Intersection Observer for scroll-triggered animations - PROMPTS
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  // Count-up animation - PROMPTS & MOTIVATION
  useEffect(() => {
    if (!isVisible) return

    const animations = stats.map((stat, index) => {
      const duration = stat.duration
      const steps = 60
      const increment = stat.value / steps
      const stepDuration = duration / steps
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(
          Math.floor(increment * currentStep),
          stat.value
        )

        setCountedValues((prev) => {
          const keyMap = ['events', 'viewers', 'years', 'albums']
          return {
            ...prev,
            [keyMap[index]]: currentValue,
          }
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)

      return timer
    })

    return () => {
      animations.forEach((timer) => clearInterval(timer))
    }
  }, [isVisible])

  const formatValue = (stat, value) => {
    if (stat.suffix === 'K+') {
      return `${value}${stat.suffix}`
    }
    return `${value}${stat.suffix}`
  }

  const getCountedValue = (index) => {
    const keyMap = ['events', 'viewers', 'years', 'albums']
    return countedValues[keyMap[index]]
  }

  return (
    <Box
      ref={statsRef}
      sx={{
        py: 8,
        px: 2,
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A0F1A 50%, #0A0A0A 100%)',
        color: 'var(--white)',
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
            radial-gradient(circle at 20% 50%, rgba(244, 103, 51, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
          backgroundSize: '200% 100%',
          animation: 'funkShimmer 3s ease-in-out infinite',
        },
        '@keyframes funkShimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Grow
                in={isVisible}
                timeout={600 + index * 200}
                style={{ transformOrigin: 'center' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 3,
                    px: 2,
                    borderRadius: '16px',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.15), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.08)',
                      boxShadow: '0 20px 40px rgba(244, 103, 51, 0.3)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .stat-icon': {
                        transform: 'scale(1.25) rotate(8deg)',
                        filter: 'drop-shadow(0 0 25px rgba(244, 103, 51, 0.8))',
                      },
                      '& .stat-number': {
                        transform: 'scale(1.15)',
                        textShadow: '0 0 40px rgba(244, 103, 51, 0.8), 0 0 60px rgba(212, 175, 55, 0.6)',
                      },
                      '& .stat-label': {
                        color: '#F46733',
                      },
                      '& .stat-line': {
                        width: '60px',
                        background: 'linear-gradient(90deg, #F46733, #D4AF37, #F46733)',
                        backgroundSize: '200% 100%',
                        animation: 'funkShimmerLine 2s ease infinite',
                      },
                    },
                    '@keyframes funkShimmerLine': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                >
                  {/* Icon - MOTIVATION (Visual Appeal) with FUNK */}
                  <Box
                    className="stat-icon"
                    sx={{
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      filter: 'drop-shadow(0 4px 12px rgba(244, 103, 51, 0.4))',
                      '& svg': {
                        background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 15px rgba(244, 103, 51, 0.5))',
                      },
                    }}
                  >
                    {stat.icon}
                  </Box>

                  {/* Number - PROMPTS (Animated Count-up) with FUNK */}
                  <Typography
                    className="stat-number"
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                      fontWeight: 'bold',
                      mb: 1,
                      fontFamily: "'Righteous', cursive",
                      background: 'linear-gradient(135deg, #F46733, #D4AF37, #F46733)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 4px 20px rgba(244, 103, 51, 0.4)',
                      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      lineHeight: 1,
                      animation: isVisible ? 'funkGradientMove 4s ease infinite' : 'none',
                      '@keyframes funkGradientMove': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                    }}
                  >
                    {isVisible ? formatValue(stat, getCountedValue(index)) : '0'}
                  </Typography>

                  {/* Label - ABILITY (Clear Communication) */}
                  <Typography
                    className="stat-label"
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.9)',
                      mb: 0.5,
                      transition: 'color 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </Typography>

                  {/* Description - MOTIVATION (Additional Value) */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontStyle: 'italic',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    {stat.description}
                  </Typography>

                  {/* Decorative Line - PROMPTS (Visual Interest) with FUNK */}
                  <Box
                    className="stat-line"
                    sx={{
                      mt: 2,
                      height: '3px',
                      width: '40px',
                      background: `linear-gradient(90deg, transparent, #F46733, #D4AF37, transparent)`,
                      margin: '12px auto 0',
                      borderRadius: '2px',
                      transition: 'all 0.4s ease',
                      opacity: 0.8,
                      boxShadow: '0 0 10px rgba(244, 103, 51, 0.4)',
                    }}
                  />
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Trust Indicator - Additional MOTIVATION with FUNK */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 4,
                py: 2,
                borderRadius: '12px',
                background: 'rgba(26, 20, 20, 0.9)',
                border: '2px solid',
                borderColor: 'rgba(244, 103, 51, 0.4)',
                boxShadow: '0 4px 20px rgba(244, 103, 51, 0.2), 0 0 30px rgba(244, 103, 51, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(244, 103, 51, 0.1), transparent)',
                  transition: 'left 1s ease',
                },
                '&:hover': {
                  borderColor: 'rgba(244, 103, 51, 0.6)',
                  boxShadow: '0 6px 30px rgba(244, 103, 51, 0.4), 0 0 40px rgba(244, 103, 51, 0.2)',
                  transform: 'translateY(-2px)',
                  '&::before': {
                    left: '100%',
                  },
                  '& .trust-star': {
                    transform: 'scale(1.2) rotate(15deg)',
                    filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.9))',
                  },
                },
              }}
            >
              <Box
                className="trust-star"
                component="span"
                sx={{
                  fontSize: '1.8rem',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.7))',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  animation: 'starPulse 2s ease-in-out infinite',
                  '@keyframes starPulse': {
                    '0%, 100%': {
                      transform: 'scale(1)',
                      filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.7))',
                    },
                    '50%': {
                      transform: 'scale(1.1)',
                      filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.9))',
                    },
                  },
                }}
              >
                ⭐
              </Box>
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                Usaldatud kümnete ürituste korraldajate poolt
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Stats

