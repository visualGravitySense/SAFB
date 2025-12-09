import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Fade,
  Grow,
} from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const galleryRef = useRef(null)

  const galleryItems = ['🎸', '🎺', '🥁', '🎷', '🎹', '🎤']

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current)
      }
    }
  }, [])

  return (
    <Box
      ref={galleryRef}
      id="galerii"
      sx={{
        py: 10,
        px: 2,
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <PhotoLibraryIcon sx={{ fontSize: '3rem', color: '#D4AF37', mb: 2 }} />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Galerii
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={3}>
          {galleryItems.map((item, index) => (
            <Grid item xs={6} sm={4} md={4} key={index}>
              <Grow
                in={isVisible}
                timeout={600 + index * 150}
                style={{ transformOrigin: 'center' }}
              >
                <Card
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    height: '300px',
                    background: `linear-gradient(135deg, #D4AF37, #C41E3A)`,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0, 0, 0, 0.3)',
                      opacity: hoveredIndex === index ? 0 : 1,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'scale(1.05) rotate(2deg)',
                      boxShadow: '0 20px 60px rgba(212, 175, 55, 0.4)',
                      '&::before': {
                        opacity: 0,
                      },
                      '& .gallery-emoji': {
                        transform: 'scale(1.3) rotate(-5deg)',
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      p: 0,
                    }}
                  >
                    <Box
                      className="gallery-emoji"
                      sx={{
                        fontSize: '6rem',
                        transition: 'transform 0.4s ease',
                        zIndex: 1,
                        position: 'relative',
                      }}
                    >
                      {item}
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PhotoLibraryIcon />}
              sx={{
                bgcolor: '#D4AF37',
                color: '#0A0A0A',
                fontWeight: 700,
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#E5BF50',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)',
                },
              }}
            >
              Vaata Rohkem Fotosid
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Gallery

