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
  Chip,
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import CategoryIcon from '@mui/icons-material/Category'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import creativeGallery1 from '../img/creative-gallery-1.webp'
import creativeGallery2 from '../img/creative-gallery-2.jpg'
import creativeGallery3 from '../img/creative-gallery-3.jpg'
import creativeGallery4 from '../img/creative-gallery-4.jpg'
import creativeGallery5 from '../img/creative-gallery-5.png'

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const galleryRef = useRef(null)

  // Gallery items with metadata for Fogg's Model
  const galleryItems = [
    { image: creativeGallery1, category: 'events', views: 1250, likes: 89, title: 'Live Performance' },
    { image: creativeGallery2, category: 'instruments', views: 980, likes: 72, title: 'Stage Moments' },
    { image: creativeGallery3, category: 'events', views: 1100, likes: 95, title: 'Energy & Rhythm' },
    { image: creativeGallery4, category: 'instruments', views: 1350, likes: 102, title: 'Solo Performance' },
    { image: creativeGallery5, category: 'events', views: 920, likes: 68, title: 'Keyboard Magic' },
  ]

  const categories = [
    { id: 'all', label: 'Kõik', count: galleryItems.length },
    { id: 'instruments', label: 'Instrumendid', count: galleryItems.filter(item => item.category === 'instruments').length },
    { id: 'events', label: 'Üritused', count: galleryItems.filter(item => item.category === 'events').length },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <PhotoLibraryIcon sx={{ fontSize: '3rem', color: '#D4AF37', mb: 2, filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' }} />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 2,
              }}
            >
              Galerii
            </Typography>
            
            {/* Motivation: Social Proof - Statistics */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center" 
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Chip
                icon={<PhotoLibraryIcon />}
                label={`${galleryItems.length}+ Fotosid`}
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.15)',
                  color: '#D4AF37',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              />
              <Chip
                icon={<VisibilityIcon />}
                label={`${galleryItems.reduce((sum, item) => sum + item.views, 0).toLocaleString()} Vaatajat`}
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.15)',
                  color: '#D4AF37',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Populaarne"
                sx={{
                  bgcolor: 'rgba(196, 30, 58, 0.2)',
                  color: '#F46733',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(196, 30, 58, 0.3)',
                }}
              />
            </Stack>

            {/* Ability: Category Filters */}
            <Stack 
              direction="row" 
              spacing={1} 
              justifyContent="center" 
              flexWrap="wrap"
              sx={{ mb: 4 }}
            >
              {categories.map((category) => (
                <Chip
                  key={category.id}
                  icon={<CategoryIcon />}
                  label={`${category.label} (${category.count})`}
                  onClick={() => setSelectedCategory(category.id)}
                  sx={{
                    bgcolor: selectedCategory === category.id 
                      ? '#D4AF37' 
                      : 'rgba(255, 255, 255, 0.1)',
                    color: selectedCategory === category.id 
                      ? '#0A0A0A' 
                      : '#FFFFFF',
                    fontWeight: selectedCategory === category.id ? 700 : 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: selectedCategory === category.id 
                      ? '2px solid #D4AF37' 
                      : '2px solid transparent',
                    '&:hover': {
                      bgcolor: selectedCategory === category.id 
                        ? '#E5BF50' 
                        : 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Fade>

        <Grid container spacing={3}>
          {filteredItems.map((item, index) => (
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
                    borderRadius: '12px',
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
                      background: 'rgba(0, 0, 0, 0.4)',
                      opacity: hoveredIndex === index ? 0 : 1,
                      transition: 'opacity 0.4s ease',
                      zIndex: 1,
                    },
                    '&:hover': {
                      transform: 'scale(1.08) translateY(-8px)',
                      boxShadow: '0 25px 70px rgba(212, 175, 55, 0.5)',
                      '&::before': {
                        opacity: 0.2,
                      },
                      '& .gallery-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .gallery-overlay': {
                        opacity: 1,
                        transform: 'translateY(0)',
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
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      className="gallery-image"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        zIndex: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    />

                    {/* Prompts: Hover Overlay with Info */}
                    <Box
                      className="gallery-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        p: 2,
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.4s ease',
                        zIndex: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#D4AF37',
                          fontFamily: "'Righteous', cursive",
                          fontSize: '1.1rem',
                          mb: 1,
                          textAlign: 'center',
                        }}
                      >
                        {item.title}
                      </Typography>
                      
                      <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                        <Tooltip title="Vaata">
                          <Chip
                            icon={<VisibilityIcon sx={{ fontSize: '0.9rem' }} />}
                            label={item.views.toLocaleString()}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(212, 175, 55, 0.2)',
                              color: '#D4AF37',
                              fontSize: '0.75rem',
                              height: '24px',
                            }}
                          />
                        </Tooltip>
                        <Tooltip title="Meeldib">
                          <Chip
                            icon={<FavoriteIcon sx={{ fontSize: '0.9rem', color: '#C41E3A' }} />}
                            label={item.likes}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(196, 30, 58, 0.2)',
                              color: '#F46733',
                              fontSize: '0.75rem',
                              height: '24px',
                            }}
                          />
                        </Tooltip>
                      </Stack>

                      <IconButton
                        sx={{
                          bgcolor: '#D4AF37',
                          color: '#0A0A0A',
                          '&:hover': {
                            bgcolor: '#E5BF50',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <ZoomInIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Prompts: Clear CTA with Enhanced Visual Appeal */}
        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Stack spacing={2} alignItems="center">
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  mb: 1,
                }}
              >
                Avasta rohkem hetki meie kontsertidelt ja üritustelt
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  px: { xs: 3, md: 5 },
                  py: 1.5,
                  textTransform: 'none',
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s ease',
                  },
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'translateY(-3px) scale(1.02)',
                    boxShadow: '0 12px 30px rgba(212, 175, 55, 0.5)',
                    '&::before': {
                      left: '100%',
                    },
                    '& .MuiButton-endIcon': {
                      transform: 'translateX(5px)',
                    },
                  },
                  '&:active': {
                    transform: 'translateY(-1px) scale(0.98)',
                  },
                  '& .MuiButton-endIcon': {
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                Vaata Rohkem Fotosid
              </Button>

              {/* Trust Indicator */}
              <Chip
                icon={<PhotoLibraryIcon sx={{ fontSize: '1rem' }} />}
                label="Uuendatud iga nädal"
                size="small"
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.1)',
                  color: '#D4AF37',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              />
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Gallery

