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
        background: 'var(--black)',
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
          background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
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
                      background: `linear-gradient(135deg, ${stat.color}15, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.05)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .stat-icon': {
                        transform: 'scale(1.2) rotate(5deg)',
                        filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))',
                      },
                      '& .stat-number': {
                        transform: 'scale(1.1)',
                        textShadow: '0 0 30px rgba(212, 175, 55, 0.8)',
                      },
                      '& .stat-label': {
                        color: stat.color,
                      },
                    },
                  }}
                >
                  {/* Icon - MOTIVATION (Visual Appeal) */}
                  <Box
                    className="stat-icon"
                    sx={{
                      color: stat.color,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: 'drop-shadow(0 4px 8px rgba(212, 175, 55, 0.3))',
                    }}
                  >
                    {stat.icon}
                  </Box>

                  {/* Number - PROMPTS (Animated Count-up) */}
                  <Typography
                    className="stat-number"
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                      fontWeight: 'bold',
                      color: stat.color,
                      mb: 1,
                      fontFamily: "'Righteous', cursive",
                      textShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      lineHeight: 1,
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

                  {/* Decorative Line - PROMPTS (Visual Interest) */}
                  <Box
                    sx={{
                      mt: 2,
                      height: '3px',
                      width: '40px',
                      background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                      margin: '12px auto 0',
                      borderRadius: '2px',
                      transition: 'all 0.4s ease',
                      opacity: 0.6,
                    }}
                  />
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Trust Indicator - Additional MOTIVATION */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                fontStyle: 'italic',
              }}
            >
              ⭐ Usaldatud kümnete ürituste korraldajate poolt
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Stats

