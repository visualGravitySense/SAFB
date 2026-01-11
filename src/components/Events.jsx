import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Fade,
  Grow,
  Stack,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EventIcon from '@mui/icons-material/Event'
import TicketIcon from '@mui/icons-material/ConfirmationNumber'
import BlockIcon from '@mui/icons-material/Block'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PeopleIcon from '@mui/icons-material/People'
import WarningIcon from '@mui/icons-material/Warning'
import StarIcon from '@mui/icons-material/Star'
import bandHero2 from '../img/band-hero-2.jpg'
import { useContent } from '../context/ContentContext'

const Events = () => {
  const { content } = useContent()
  const [isVisible, setIsVisible] = useState(false)
  const eventsRef = useRef(null)

  // Default events as fallback
  const defaultEvents = [
    {
      date: '15. DETS 2024',
      title: 'Jõulukontsert',
      location: 'Saku Suurhall, Tallinn',
      soldOut: false,
      ticketLink: '#',
      price: 'Alates 25€',
      ticketsLeft: 23, // Процент оставшихся билетов
      popularity: 'high', // high, medium, low
      time: '19:00',
      duration: '2h 30min',
      attendees: 847, // Количество заинтересованных
    },
    {
      date: '31. DETS 2024',
      title: 'Aastavahetuse Pidu',
      location: 'Privaat Üritus',
      soldOut: true,
      price: 'Kutse põhine',
      ticketsLeft: 0,
      popularity: 'high',
      time: '22:00',
      duration: '5h',
      attendees: 1200,
    },
    {
      date: '20. JAAN 2025',
      title: 'Jazz Funk Night',
      location: 'Philly Joe\'s, Tallinn',
      soldOut: false,
      ticketLink: '#',
      price: '15€',
      ticketsLeft: 67, // Процент оставшихся билетов
      popularity: 'medium',
      time: '20:00',
      duration: '3h',
      attendees: 342,
    },
  ]

  // Use events from API if available, otherwise use defaults
  const events = (content?.events && content.events.length > 0) 
    ? content.events 
    : defaultEvents

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
      { threshold: 0.1 }
    )

    if (eventsRef.current) {
      observer.observe(eventsRef.current)
    }

    return () => {
      if (eventsRef.current) {
        observer.unobserve(eventsRef.current)
      }
    }
  }, [])

  const handleTicketClick = (event) => {
    if (!event.soldOut && event.ticketLink) {
      // Здесь можно добавить логику перехода на страницу покупки билетов
      window.open(event.ticketLink, '_blank')
    }
  }

  const getPopularityChip = (popularity, soldOut) => {
    if (soldOut) return null
    
    if (popularity === 'high') {
      return (
        <Chip
          icon={<TrendingUpIcon sx={{ fontSize: '1rem' }} />}
          label="Populaarne"
          size="small"
          sx={{
            bgcolor: '#D4AF37',
            color: '#1A1A1A',
            fontWeight: 700,
            fontSize: '0.7rem',
            height: '28px',
            borderRadius: 0,
            border: '2px solid #1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontFamily: "'Righteous', cursive",
            '& .MuiChip-icon': {
              color: '#1A1A1A',
            },
          }}
        />
      )
    }
    return null
  }

  const getTicketsLeftChip = (ticketsLeft, soldOut) => {
    if (soldOut) return null
    
    if (ticketsLeft <= 30) {
      return (
        <Chip
          icon={<WarningIcon sx={{ fontSize: '1rem' }} />}
          label={`Jäi ainult ${ticketsLeft}%!`}
          size="small"
          sx={{
            bgcolor: '#C41E3A',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '0.7rem',
            height: '28px',
            borderRadius: 0,
            border: '2px solid #1A1A1A',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontFamily: "'Righteous', cursive",
            animation: 'pulse 2s ease-in-out infinite',
            '& .MuiChip-icon': {
              color: '#FFFFFF',
            },
            '@keyframes pulse': {
              '0%, 100%': {
                opacity: 1,
                transform: 'scale(1)',
                boxShadow: '0 0 0 0 rgba(196, 30, 58, 0.7)',
              },
              '50%': {
                opacity: 0.9,
                transform: 'scale(1.05)',
                boxShadow: '0 0 0 8px rgba(196, 30, 58, 0)',
              },
            },
          }}
        />
      )
    }
    return null
  }

  return (
    <Box
      ref={eventsRef}
      id="kontserdid"
      sx={{
        py: 10,
        px: 2,
        backgroundImage: `url(${bandHero2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
          backgroundSize: '200% 100%',
          animation: 'funkShimmerBorder 3s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
          backgroundSize: '200% 100%',
          animation: 'funkShimmerBorder 3s ease-in-out infinite',
        },
        '@keyframes funkShimmerBorder': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      {/* Background Overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(180deg, rgba(10, 10, 10, 0.75) 0%, rgba(26, 15, 26, 0.8) 50%, rgba(10, 10, 10, 0.75) 100%),
            radial-gradient(circle at 20% 30%, rgba(244, 103, 51, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
            {/* Art Deco Decorative Lines */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 3,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #F46733, #D4AF37)',
                }}
              />
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 12px rgba(244, 103, 51, 0.6)',
                }}
              />
              <Box
                sx={{
                  width: '120px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #F46733, #D4AF37, #F46733)',
                  backgroundSize: '200% 100%',
                  animation: 'funkShimmerSubtle 3s ease infinite',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid #F46733',
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid #D4AF37',
                    borderRight: '8px solid transparent',
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                  },
                  '@keyframes funkShimmerSubtle': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              />
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
                }}
              />
              <Box
                sx={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, #F46733, transparent)',
                }}
              />
            </Box>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2,
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #1A1A1A 0%, #D4AF37 30%, #F46733 50%, #D4AF37 70%, #1A1A1A 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                position: 'relative',
                display: 'inline-block',
                animation: 'funkGradientSubtle 5s ease infinite',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-30px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  border: '3px solid #F46733',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(244, 103, 51, 0.5)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: '-30px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  border: '3px solid #D4AF37',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
                },
                '@keyframes funkGradientSubtle': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              }}
            >
              TULEVASED KONTSERDID
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '600px',
                mx: 'auto',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
                mt: 2,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Valige oma täiuslik muusikaline elamus
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow
                in={isVisible}
                timeout={600 + index * 200}
                style={{ transformOrigin: 'center' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 251, 240, 0.95) 100%)',
                    border: '3px solid',
                    borderColor: event.soldOut ? '#C41E3A' : '#F46733',
                    borderRadius: 0,
                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: event.soldOut 
                      ? '0 4px 20px rgba(196, 30, 58, 0.2)' 
                      : '0 4px 20px rgba(244, 103, 51, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '-3px',
                      right: '-3px',
                      bottom: '-3px',
                      background: event.soldOut 
                        ? 'linear-gradient(45deg, #C41E3A, #E04A5A, #D42E4A, #C41E3A)' 
                        : 'linear-gradient(45deg, #F46733, #D4AF37, #E5BF50, #F46733)',
                      backgroundSize: '400% 400%',
                      animation: event.soldOut ? 'funkGradientSoldOut 3s ease infinite' : 'funkGradientCard 3s ease infinite',
                      zIndex: -1,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '@keyframes funkGradientCard': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                      '@keyframes funkGradientSoldOut': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '8px',
                      background: event.soldOut 
                        ? 'repeating-linear-gradient(90deg, #C41E3A 0px, #C41E3A 8px, #FFFFFF 8px, #FFFFFF 16px)' 
                        : 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, #FFFFFF 8px, #FFFFFF 16px)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.02)',
                      borderColor: event.soldOut ? '#E04A5A' : '#FF7744',
                      boxShadow: event.soldOut 
                        ? '0 25px 70px rgba(196, 30, 58, 0.5), 0 0 40px rgba(196, 30, 58, 0.3)' 
                        : '0 25px 70px rgba(244, 103, 51, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                      '&::before': {
                        opacity: 0.5,
                      },
                      '&::after': {
                        opacity: 1,
                        background: event.soldOut 
                          ? 'repeating-linear-gradient(90deg, #C41E3A 0px, #C41E3A 8px, #FFFFFF 8px, #FFFFFF 16px)' 
                          : 'repeating-linear-gradient(90deg, #F46733 0px, #F46733 8px, #D4AF37 8px, #D4AF37 16px, #FFFFFF 16px, #FFFFFF 24px)',
                      },
                      '& .art-deco-corner': {
                        opacity: 1,
                        borderColor: event.soldOut ? '#E04A5A' : '#FF7744',
                      },
                      '& .event-price': {
                        transform: 'scale(1.15)',
                      },
                    },
                  }}
                >
                  {/* Art Deco Corner Decorations */}
                  <Box
                    className="art-deco-corner"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      width: '40px',
                      height: '40px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderRight: 'none',
                      borderBottom: 'none',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-2px',
                        left: '-2px',
                        width: '12px',
                        height: '12px',
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderRight: 'none',
                        borderBottom: 'none',
                      },
                    }}
                  />
                  <Box
                    className="art-deco-corner"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      width: '40px',
                      height: '40px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderLeft: 'none',
                      borderBottom: 'none',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '12px',
                        height: '12px',
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderLeft: 'none',
                        borderBottom: 'none',
                      },
                    }}
                  />
                  <Box
                    className="art-deco-corner"
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      left: 8,
                      width: '40px',
                      height: '40px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderRight: 'none',
                      borderTop: 'none',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-2px',
                        left: '-2px',
                        width: '12px',
                        height: '12px',
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderRight: 'none',
                        borderTop: 'none',
                      },
                    }}
                  />
                  <Box
                    className="art-deco-corner"
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      width: '40px',
                      height: '40px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderLeft: 'none',
                      borderTop: 'none',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-2px',
                        right: '-2px',
                        width: '12px',
                        height: '12px',
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderLeft: 'none',
                        borderTop: 'none',
                      },
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 2.5, 
                    position: 'relative', 
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}>
                    {/* Art Deco Date Header - PROMPTS */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      mb: 1.5,
                      position: 'relative',
                      pb: 1,
                      flexWrap: 'wrap',
                      gap: 0.75,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #F46733, #D4AF37, #F46733)',
                        backgroundSize: '200% 100%',
                        animation: 'funkShimmerLine 2s ease infinite',
                        '@keyframes funkShimmerLine': {
                          '0%': { backgroundPosition: '0% 50%' },
                          '50%': { backgroundPosition: '100% 50%' },
                          '100%': { backgroundPosition: '0% 50%' },
                        },
                      },
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: '32px',
                            height: '32px',
                            border: '2px solid',
                            borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            boxShadow: '0 0 15px rgba(244, 103, 51, 0.4)',
                            transition: 'all 0.3s ease',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              width: '18px',
                              height: '18px',
                              border: '1px solid',
                              borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                            },
                            '&:hover': {
                              transform: 'scale(1.1) rotate(5deg)',
                              boxShadow: '0 0 25px rgba(244, 103, 51, 0.6)',
                            },
                          }}
                        >
                          <EventIcon sx={{ 
                            background: 'linear-gradient(135deg, #C41E3A, #F46733)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontSize: '0.85rem !important', 
                            zIndex: 1,
                            filter: 'drop-shadow(0 0 5px rgba(244, 103, 51, 0.5))',
                          }} />
                        </Box>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            background: 'linear-gradient(135deg, #C41E3A, #F46733, #C41E3A)',
                            backgroundSize: '200% 200%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 700,
                            fontSize: { xs: '0.75rem', sm: '0.85rem' },
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            fontFamily: "'Righteous', cursive",
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            animation: 'funkGradientDate 3s ease infinite',
                            '@keyframes funkGradientDate': {
                              '0%': { backgroundPosition: '0% 50%' },
                              '50%': { backgroundPosition: '100% 50%' },
                              '100%': { backgroundPosition: '0% 50%' },
                            },
                          }}
                        >
                          {event.date}
                        </Typography>
                      </Box>
                      {getPopularityChip(event.popularity, event.soldOut)}
                    </Box>

                    {/* Art Deco Title with FUNK */}
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 1.5,
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.3rem' },
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #F46733 30%, #D4AF37 50%, #F46733 70%, #FFFFFF 100%)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1.2,
                        fontFamily: "'Righteous', cursive",
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        position: 'relative',
                        animation: 'funkGradientTitle 4s ease infinite',
                        '@keyframes funkGradientTitle': {
                          '0%': { backgroundPosition: '0% 50%' },
                          '50%': { backgroundPosition: '100% 50%' },
                          '100%': { backgroundPosition: '0% 50%' },
                        },
                        pl: 2,
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '4px',
                          height: '60%',
                          background: '#D4AF37',
                          boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                        },
                      }}
                    >
                      {event.title}
                    </Typography>

                    {/* Location & Time - ABILITY (Clear Information) */}
                    <Stack spacing={1} sx={{ mb: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <LocationOnIcon fontSize="small" sx={{ color: 'text.secondary', flexShrink: 0 }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ 
                            fontSize: '0.85rem',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                          }}
                        >
                          {event.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeIcon fontSize="small" sx={{ color: 'text.secondary', flexShrink: 0 }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.9rem' }}
                        >
                          {event.time} · {event.duration}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Art Deco Price - MOTIVATION (Value Proposition) */}
                    <Box sx={{ 
                      mb: 1.5,
                      position: 'relative',
                      py: 1.5,
                      px: 2,
                      background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.08) 0%, rgba(212, 175, 55, 0.1) 50%, rgba(244, 103, 51, 0.08) 100%)',
                      border: '2px solid',
                      borderColor: '#F46733',
                      borderLeft: 'none',
                      borderRight: 'none',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                      },
                    }}>
                      <Typography
                        className="event-price"
                        variant="h6"
                        sx={{
                          background: 'linear-gradient(135deg, #F46733, #D4AF37, #F46733)',
                          backgroundSize: '200% 200%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontWeight: 700,
                          fontSize: { xs: '1.2rem', sm: '1.3rem' },
                          transition: 'all 0.3s ease',
                          textAlign: 'center',
                          letterSpacing: '0.1em',
                          textShadow: '0 2px 4px rgba(212, 175, 55, 0.3)',
                          animation: 'funkGradientSubtlePrice 4s ease infinite',
                          '@keyframes funkGradientSubtlePrice': {
                            '0%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' },
                          },
                        }}
                      >
                        {event.price}
                      </Typography>
                    </Box>

                    {/* Social Proof - MOTIVATION */}
                    {!event.soldOut && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                        <PeopleIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: '0.85rem' }}
                        >
                          {event.attendees} inimest huvitatud
                        </Typography>
                      </Box>
                    )}

                    {/* Art Deco Tickets Availability - PROMPTS (Urgency) */}
                    {!event.soldOut && event.ticketsLeft > 0 && (
                      <Box sx={{ mb: 1.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: '#666',
                              fontWeight: 600,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              fontSize: '0.75rem',
                            }}
                          >
                            Saadaval
                          </Typography>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: '#D4AF37',
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              fontSize: '0.75rem',
                            }}
                          >
                            {event.ticketsLeft}%
                          </Typography>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                          <Box
                            sx={{
                              height: '12px',
                              bgcolor: '#F0F0F0',
                              border: '2px solid #D4AF37',
                              position: 'relative',
                              overflow: 'hidden',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: `${event.ticketsLeft}%`,
                                background: event.ticketsLeft <= 30 
                                  ? 'repeating-linear-gradient(45deg, #C41E3A 0px, #C41E3A 4px, #E04A5A 4px, #E04A5A 8px)' 
                                  : 'repeating-linear-gradient(45deg, #F46733 0px, #F46733 4px, #D4AF37 4px, #E5BF50 4px, #E5BF50 8px)',
                                transition: 'width 1s ease',
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    )}

                    {/* Status Chips - PROMPTS */}
                    <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap', gap: 1 }}>
                      {event.soldOut && (
                        <Chip
                          icon={<BlockIcon />}
                          label="Välja müüdud"
                          color="error"
                          size="small"
                          sx={{ fontWeight: 700 }}
                        />
                      )}
                      {getTicketsLeftChip(event.ticketsLeft, event.soldOut)}
                    </Stack>
                  </CardContent>

                  {/* Art Deco CTA Button - ABILITY & PROMPTS */}
                  <CardActions sx={{ p: 2, pt: 1.5 }}>
                    {event.soldOut ? (
                      <Button
                        fullWidth
                        variant="outlined"
                        disabled
                        startIcon={<BlockIcon />}
                        sx={{
                          py: 1.5,
                          borderWidth: '3px',
                          borderColor: '#C41E3A',
                          color: '#C41E3A',
                          fontWeight: 700,
                          fontSize: '1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          borderRadius: 0,
                          fontFamily: "'Righteous', cursive",
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '-3px',
                            top: '-3px',
                            right: '-3px',
                            bottom: '-3px',
                            border: '1px solid #C41E3A',
                          },
                        }}
                      >
                        Välja müüdud
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<TicketIcon />}
                        onClick={() => handleTicketClick(event)}
                        sx={{
                          py: 1.5,
                          background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                          backgroundSize: '200% 200%',
                          color: '#1A1A1A',
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          textTransform: 'uppercase',
                          letterSpacing: '0.15em',
                          borderRadius: 0,
                          fontFamily: "'Righteous', cursive",
                          boxShadow: '0 4px 20px rgba(244, 103, 51, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                          border: '3px solid #1A1A1A',
                          position: 'relative',
                          overflow: 'hidden',
                          animation: 'funkGradientButton 3s ease infinite',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                            transition: 'left 0.5s ease',
                          },
                          '&:hover': {
                            background: 'linear-gradient(135deg, #FF7744, #E5BF50)',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 8px 30px rgba(244, 103, 51, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                            '&::before': {
                              left: '100%',
                            },
                          },
                          '&:active': {
                            transform: 'translateY(-1px)',
                          },
                          '@keyframes funkGradientButton': {
                            '0%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' },
                          },
                        }}
                      >
                        {event.ticketsLeft <= 30 ? 'Osta Kohe!' : 'Osta Piletid'}
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Art Deco Trust Indicator - Additional MOTIVATION */}
        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ textAlign: 'center', mt: 8, position: 'relative' }}>
            {/* Decorative Elements */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 4,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #D4AF37)',
                }}
              />
              <Box
                sx={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid #D4AF37',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                }}
              />
              <Box
                sx={{
                  width: '120px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, #F46733, #D4AF37)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) rotate(45deg)',
                    width: '10px',
                    height: '10px',
                    border: '2px solid #D4AF37',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                  },
                }}
              />
              <Box
                sx={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid #D4AF37',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                }}
              />
              <Box
                sx={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, transparent)',
                }}
              />
            </Box>

            <Box
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                p: 5,
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(20, 15, 20, 0.9) 100%)',
                border: '3px solid #D4AF37',
                borderRadius: '4px',
                position: 'relative',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(212, 175, 55, 0.1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  borderRadius: '4px',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2.5, position: 'relative', zIndex: 1 }}>
                <StarIcon 
                  sx={{ 
                    color: '#D4AF37',
                    fontSize: '2.5rem',
                    filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))',
                    animation: 'starTwinkle 3s ease-in-out infinite',
                  }} 
                />
                <Typography 
                  variant="h3" 
                  component="h3"
                  sx={{ 
                    background: 'linear-gradient(135deg, #D4AF37, #F4D03F, #D4AF37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontFamily: "'Righteous', cursive",
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
                    lineHeight: 1.2,
                  }}
                >
                  GARANTII
                </Typography>
                <StarIcon 
                  sx={{ 
                    color: '#D4AF37',
                    fontSize: '2.5rem',
                    filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))',
                    animation: 'starTwinkle 3s ease-in-out infinite 1.5s',
                  }} 
                />
              </Box>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    letterSpacing: '0.02em',
                    lineHeight: 1.8,
                    mb: 3,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  ✨ <strong style={{ 
                    background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>Live'esitus</strong> on see, kus juhtub päris maagia. Argipäev muutub pidupäevaks, jalg hakkab ise taktis käima ja isegi kõige vaoshoitum publik kaotab kontrolli (heas mõttes).
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    px: 3,
                    py: 2.5,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.15))',
                    border: '2px solid',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Kohtumine Siim Aimla Funk Bandiga = päris muusika, päris emotsioonid, pidu, mis jääb meelde.
                </Typography>
              </Box>
              <style>
                {`
                  @keyframes starTwinkle {
                    0%, 100% {
                      transform: scale(1);
                      filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.8));
                    }
                    50% {
                      transform: scale(1.2);
                      filter: drop-shadow(0 0 25px rgba(212, 175, 55, 1));
                    }
                  }
                `}
              </style>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Events

