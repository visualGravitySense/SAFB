import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Rating,
  Chip,
  Stack,
  Fade,
  Grow,
  Divider,
} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import StarIcon from '@mui/icons-material/Star'
import VerifiedIcon from '@mui/icons-material/Verified'
import BusinessIcon from '@mui/icons-material/Business'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const testimonialsRef = useRef(null)

  const testimonials = [
    {
      text: "Siim Aimla Funk Band muutis meie korporatiivi absoluutselt fenomenaalseks! Energia, mida nad laval loovad, on lihtsalt uskumatu. Kõik külalised tantsisid!",
      author: "Maria Kask",
      company: "TechCorp Estonia",
      role: "Event Manager",
      rating: 5,
      date: "Detsember 2024",
      initials: "MK",
      verified: true,
      eventType: "Korporatiiv",
    },
    {
      text: "Professionaalsus ja muusikaline tase on tippklassi. Soovitan soojalt kõigile, kes otsivad kvaliteetset live-muusikat oma üritusele.",
      author: "Toomas Sepp",
      company: "Baltic Events OÜ",
      role: "Juhataja",
      rating: 5,
      date: "November 2024",
      initials: "TS",
      verified: true,
      eventType: "Event Management",
    },
    {
      text: "Parim valik, mida oleme teinud oma pulmade jaoks! Atmosfäär oli täiuslik ja kõik külastajad ütlesid, et see oli parim pulmabänd, mida nad on näinud.",
      author: "Kristiina Tamm",
      company: "Private Event",
      role: "Pruut",
      rating: 5,
      date: "Oktoober 2024",
      initials: "KT",
      verified: true,
      eventType: "Pulmad",
    },
    {
      text: "Suurepärane koostöö algusest lõpuni. Bänd oli väga professionaalne ja kohandus meie vajadustele. Soovitan kindlasti!",
      author: "Andres Mägi",
      company: "Tallinn Music Festival",
      role: "Festivali Organisaator",
      rating: 5,
      date: "September 2024",
      initials: "AM",
      verified: true,
      eventType: "Festival",
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
      { threshold: 0.1 }
    )

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current)
      }
    }
  }, [])

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <Box
      ref={testimonialsRef}
      sx={{
        py: 12,
        px: 2,
        background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 20px, #1A1A1A 20px, #1A1A1A 40px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 20px, #1A1A1A 20px, #1A1A1A 40px)',
        },
      }}
    >
      {/* Art Deco Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 15px, #D4AF37 15px, #D4AF37 30px),
            repeating-linear-gradient(-45deg, transparent, transparent 15px, #1A1A1A 15px, #1A1A1A 30px)
          `,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg">
        {/* Art Deco Header Section - MOTIVATION */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 10, position: 'relative' }}>
            {/* Decorative Lines Above */}
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
                  width: '80px',
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #D4AF37)',
                }}
              />
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  border: '2px solid #D4AF37',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
                }}
              />
              <Box
                sx={{
                  width: '150px',
                  height: '4px',
                  background: '#D4AF37',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: '-15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid #D4AF37',
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: '-15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid #D4AF37',
                    borderRight: '10px solid transparent',
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                  },
                }}
              />
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  border: '2px solid #D4AF37',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
                }}
              />
              <Box
                sx={{
                  width: '80px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, transparent)',
                }}
              />
            </Box>

            {/* Title with Art Deco Style */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                position: 'relative',
                display: 'inline-block',
                mb: 4,
                textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-40px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '30px',
                  height: '30px',
                  border: '3px solid #D4AF37',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: '-40px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '30px',
                  height: '30px',
                  border: '3px solid #D4AF37',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
                },
              }}
            >
              Mida Kliendid Ütlevad
            </Typography>

            {/* Art Deco Social Proof Stats - MOTIVATION */}
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              sx={{ mt: 6, flexWrap: 'wrap', gap: 4, position: 'relative' }}
            >
              {[
                { value: '4.9/5', label: 'Keskmine hinnang', icon: <StarIcon /> },
                { value: '200+', label: 'Õnnestunud üritust' },
                { value: '100%', label: 'Rahulolu' },
              ].map((stat, idx) => (
                <Box
                  key={idx}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '3px solid #D4AF37',
                    background: 'rgba(212, 175, 55, 0.05)',
                    position: 'relative',
                    minWidth: '150px',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '20px',
                      width: '40px',
                      height: '3px',
                      background: '#D4AF37',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-3px',
                      right: '20px',
                      width: '40px',
                      height: '3px',
                      background: '#D4AF37',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#D4AF37',
                      fontWeight: 700,
                      fontFamily: "'Righteous', cursive",
                      fontSize: '2rem',
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  {stat.icon && (
                    <Box sx={{ mb: 1 }}>
                      <Rating value={5} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: '#D4AF37' } }} />
                    </Box>
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: '#999',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Fade>

        {/* Testimonials Grid - ABILITY & PROMPTS */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Grow
                in={isVisible}
                timeout={600 + index * 200}
                style={{ transformOrigin: 'center' }}
              >
                <Card
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    height: '100%',
                    background: '#FFFFFF',
                    color: '#333',
                    border: '3px solid',
                    borderColor: '#C41E3A',
                    borderRadius: 0,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: hoveredIndex === index
                      ? '0 20px 60px rgba(212, 175, 55, 0.4)'
                      : '0 8px 30px rgba(0, 0, 0, 0.3)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '-3px',
                      right: '-3px',
                      bottom: '-3px',
                      background: 'linear-gradient(45deg, #D4AF37, #E5BF50, #F4D03F, #D4AF37)',
                      backgroundSize: '400% 400%',
                      animation: hoveredIndex === index ? 'gradientShift 3s ease infinite' : 'none',
                      zIndex: -1,
                      opacity: hoveredIndex === index ? 0.4 : 0,
                      transition: 'opacity 0.4s ease',
                      '@keyframes gradientShift': {
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
                      background: 'repeating-linear-gradient(90deg, #C41E3A 0px, #C41E3A 8px, #FFFFFF 8px, #FFFFFF 16px)',
                      opacity: 1,
                    },
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      borderColor: '#D4AF37',
                      '& .quote-icon': {
                        transform: 'scale(1.3) rotate(15deg)',
                        color: '#D4AF37',
                        filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))',
                      },
                      '& .art-deco-corner': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Art Deco Corner Decorations */}
                  <Box
                    className="art-deco-corner"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      width: '50px',
                      height: '50px',
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
                        width: '16px',
                        height: '16px',
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
                      top: 12,
                      right: 12,
                      width: '50px',
                      height: '50px',
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
                        width: '16px',
                        height: '16px',
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderLeft: 'none',
                        borderBottom: 'none',
                      },
                    }}
                  />
                  <CardContent sx={{ p: 5, position: 'relative', zIndex: 1, pt: 6 }}>
                    {/* Art Deco Quote Icon - PROMPTS */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: '80px',
                        height: '80px',
                        border: '3px solid #D4AF37',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(45deg)',
                        opacity: 0.1,
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          opacity: 0.2,
                          transform: 'rotate(45deg) scale(1.1)',
                        },
                      }}
                    >
                      <FormatQuoteIcon
                        className="quote-icon"
                        sx={{
                          fontSize: '2.5rem',
                          color: '#D4AF37',
                          transform: 'scaleX(-1) rotate(-45deg)',
                          transition: 'all 0.4s ease',
                        }}
                      />
                    </Box>

                    {/* Art Deco Rating - MOTIVATION */}
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                        },
                      }}
                    >
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        size="medium"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: '#D4AF37',
                            filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.5))',
                          },
                        }}
                      />
                    </Box>

                    {/* Art Deco Testimonial Text - ABILITY */}
                    <Box
                      sx={{
                        position: 'relative',
                        mb: 4,
                        pl: 3,
                        borderLeft: '4px solid',
                        borderLeftColor: '#D4AF37',
                      }}
                    >
                      {/* Decorative Quote Icon */}
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          left: '-30px',
                          top: '-15px',
                          fontSize: '5rem',
                          color: 'rgba(212, 175, 55, 0.15)',
                          transform: 'rotate(180deg)',
                          zIndex: 0,
                          pointerEvents: 'none',
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '1.15rem',
                          lineHeight: 1.9,
                          color: '#333',
                          fontStyle: 'italic',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      >
                        {testimonial.text}
                      </Typography>
                    </Box>

                    {/* Art Deco Divider */}
                    <Box
                      sx={{
                        my: 4,
                        height: '2px',
                        background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, transparent 8px, transparent 16px)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '12px',
                          height: '12px',
                          border: '2px solid #D4AF37',
                          background: '#FFFFFF',
                          borderRadius: '50%',
                        },
                      }}
                    />

                    {/* Art Deco Author Info - MOTIVATION */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        p: 2,
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                        border: '2px solid',
                        borderColor: '#D4AF37',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: '-6px',
                            border: '2px solid',
                            borderColor: '#D4AF37',
                            borderRadius: '50%',
                            opacity: hoveredIndex === index ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            animation: hoveredIndex === index ? 'ripple 1.5s ease-out infinite' : 'none',
                            '@keyframes ripple': {
                              '0%': { transform: 'scale(1)', opacity: 1 },
                              '100%': { transform: 'scale(1.3)', opacity: 0 },
                            },
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 70,
                            height: 70,
                            bgcolor: '#D4AF37',
                            color: '#1A1A1A',
                            fontWeight: 700,
                            fontSize: '1.4rem',
                            border: '4px solid',
                            borderColor: hoveredIndex === index ? '#E5BF50' : '#C41E3A',
                            transition: 'all 0.4s ease',
                            boxShadow: hoveredIndex === index
                              ? '0 8px 25px rgba(212, 175, 55, 0.5)'
                              : '0 4px 15px rgba(0, 0, 0, 0.2)',
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          {testimonial.initials || getInitials(testimonial.author)}
                        </Avatar>
                      </Box>

                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: '#C41E3A',
                              fontSize: '1.2rem',
                              fontFamily: "'Righteous', cursive",
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {testimonial.author}
                          </Typography>
                          {testimonial.verified && (
                            <VerifiedIcon
                              sx={{
                                fontSize: '1.4rem',
                                color: '#D4AF37',
                                filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.5))',
                              }}
                            />
                          )}
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            mb: 0.5,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          <BusinessIcon sx={{ fontSize: '1rem', color: '#D4AF37' }} />
                          {testimonial.role}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: '#888',
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                          }}
                        >
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Art Deco Event Type & Date - MOTIVATION */}
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ mt: 3, flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}
                    >
                      <Chip
                        label={testimonial.eventType}
                        size="small"
                        sx={{
                          bgcolor: '#D4AF37',
                          color: '#1A1A1A',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          height: '32px',
                          borderRadius: 0,
                          border: '2px solid #1A1A1A',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontFamily: "'Righteous', cursive",
                          boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
                        }}
                      />
                      <Chip
                        label={testimonial.date}
                        size="small"
                        sx={{
                          bgcolor: 'transparent',
                          color: '#666',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          height: '32px',
                          borderRadius: 0,
                          border: '2px solid',
                          borderColor: '#666',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontFamily: "'Righteous', cursive",
                        }}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Art Deco Trust Indicator - Additional MOTIVATION */}
        <Fade in={isVisible} timeout={1500}>
          <Box sx={{ textAlign: 'center', mt: 10, position: 'relative' }}>
            {/* Decorative Lines */}
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
                  width: '10px',
                  height: '10px',
                  border: '2px solid #D4AF37',
                  transform: 'rotate(45deg)',
                }}
              />
              <Box
                sx={{
                  width: '100px',
                  height: '3px',
                  background: '#D4AF37',
                }}
              />
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  border: '2px solid #D4AF37',
                  transform: 'rotate(45deg)',
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
                maxWidth: '700px',
                mx: 'auto',
                p: 4,
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                border: '3px solid #D4AF37',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-3px',
                  left: '30px',
                  width: '60px',
                  height: '3px',
                  background: '#D4AF37',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-3px',
                  right: '30px',
                  width: '60px',
                  height: '3px',
                  background: '#D4AF37',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
                <StarIcon sx={{ fontSize: '2rem', color: '#D4AF37', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))' }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: '#D4AF37',
                    fontWeight: 700,
                    fontFamily: "'Righteous', cursive",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '1.2rem',
                  }}
                >
                  Kõik testimoniaalid on päriselt meie klientidelt
                </Typography>
                <StarIcon sx={{ fontSize: '2rem', color: '#D4AF37', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))' }} />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#CCC',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  letterSpacing: '0.05em',
                }}
              >
                Meie klientid jagavad oma kogemusi, et aidata teid teha õige otsus
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Testimonials

