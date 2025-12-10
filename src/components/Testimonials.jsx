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
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A0F1A 50%, #0A0A0A 100%)',
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
      {/* FUNK Background Pattern with diagonal stripes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.08,
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, #F46733 10px, #F46733 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, #D4AF37 10px, #D4AF37 20px)
          `,
          pointerEvents: 'none',
        }}
      />
      
      {/* FUNK Radial Gradients */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(244, 103, 51, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                  background: 'linear-gradient(90deg, transparent, #F46733, #D4AF37)',
                }}
              />
              <Box
                sx={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 20px rgba(244, 103, 51, 0.7)',
                }}
              />
              <Box
                sx={{
                  width: '150px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #F46733, #D4AF37, #F46733)',
                  backgroundSize: '200% 100%',
                  animation: 'funkShimmerLine 3s ease infinite',
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
                    borderRight: '10px solid #F46733',
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
                  '@keyframes funkShimmerLine': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              />
              <Box
                sx={{
                  width: '14px',
                  height: '14px',
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, #D4AF37, #F46733) 1',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.7)',
                }}
              />
              <Box
                sx={{
                  width: '80px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, #F46733, transparent)',
                }}
              />
            </Box>

            {/* Title with FUNK Style */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #F46733 0%, #D4AF37 30%, #FFFFFF 50%, #D4AF37 70%, #F46733 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                position: 'relative',
                display: 'inline-block',
                mb: 4,
                fontWeight: 700,
                textShadow: '0 0 30px rgba(244, 103, 51, 0.3)',
                animation: 'funkGradientText 4s ease infinite',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '35px',
                  height: '35px',
                  border: '3px solid',
                  borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(244, 103, 51, 0.6)',
                  animation: 'funkPulseCircle 2s ease infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '35px',
                  height: '35px',
                  border: '3px solid',
                  borderImage: 'linear-gradient(135deg, #D4AF37, #F46733) 1',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
                  animation: 'funkPulseCircle 2s ease infinite 1s',
                },
                '@keyframes funkGradientText': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
                '@keyframes funkPulseCircle': {
                  '0%, 100%': {
                    transform: 'translateY(-50%) scale(1)',
                    opacity: 1,
                  },
                  '50%': {
                    transform: 'translateY(-50%) scale(1.2)',
                    opacity: 0.8,
                  },
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
                    p: 3.5,
                    border: '3px solid',
                    borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                    background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.1), rgba(212, 175, 55, 0.1))',
                    position: 'relative',
                    minWidth: '160px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 30px rgba(244, 103, 51, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.05)',
                      boxShadow: '0 12px 40px rgba(244, 103, 51, 0.4)',
                      borderImage: 'linear-gradient(135deg, #FF7744, #E5BF50) 1',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '20px',
                      width: '50px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #F46733, #D4AF37)',
                      boxShadow: '0 0 10px rgba(244, 103, 51, 0.5)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-3px',
                      right: '20px',
                      width: '50px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #D4AF37, #F46733)',
                      boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 700,
                      fontFamily: "'Righteous', cursive",
                      fontSize: '2.2rem',
                      mb: 1,
                      textShadow: '0 0 20px rgba(244, 103, 51, 0.3)',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  {stat.icon && (
                    <Box sx={{ mb: 1 }}>
                      <Rating 
                        value={5} 
                        readOnly 
                        size="small" 
                        sx={{ 
                          '& .MuiRating-iconFilled': { 
                            background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 8px rgba(244, 103, 51, 0.6))',
                          } 
                        }} 
                      />
                    </Box>
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
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
                    borderTop: '3px solid #C41E3A',
                    borderBottom: '3px solid #C41E3A',
                    borderLeft: '3px dashed #C41E3A',
                    borderRight: '3px dashed #C41E3A',
                    borderRadius: 0,
                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: hoveredIndex === index
                      ? '0 25px 70px rgba(196, 30, 58, 0.5), 0 0 40px rgba(244, 103, 51, 0.3)'
                      : '0 8px 30px rgba(196, 30, 58, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '-3px',
                      right: '-3px',
                      bottom: '-3px',
                      background: 'linear-gradient(45deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
                      backgroundSize: '400% 400%',
                      animation: hoveredIndex === index ? 'funkGradientCard 3s ease infinite' : 'none',
                      zIndex: -1,
                      opacity: hoveredIndex === index ? 0.5 : 0,
                      transition: 'opacity 0.4s ease',
                      '@keyframes funkGradientCard': {
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
                      transform: 'translateY(-15px) scale(1.02)',
                      borderTopColor: '#F46733',
                      borderBottomColor: '#F46733',
                      borderLeftColor: '#F46733',
                      borderRightColor: '#F46733',
                      '& .quote-icon': {
                        transform: 'scale(1.4) rotate(20deg)',
                        background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 20px rgba(244, 103, 51, 0.8))',
                      },
                      '& .art-deco-corner': {
                        opacity: 1,
                        borderColor: '#F46733',
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
                          borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                          borderRight: 'none',
                          borderBottom: 'none',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                          boxShadow: '0 0 15px rgba(244, 103, 51, 0.4)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-2px',
                            width: '16px',
                            height: '16px',
                            border: '2px solid',
                            borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
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
                          borderImage: 'linear-gradient(135deg, #D4AF37, #F46733) 1',
                          borderLeft: 'none',
                          borderBottom: 'none',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                          boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            right: '-2px',
                            width: '16px',
                            height: '16px',
                            border: '2px solid',
                            borderImage: 'linear-gradient(135deg, #D4AF37, #F46733) 1',
                            borderLeft: 'none',
                            borderBottom: 'none',
                          },
                        }}
                      />
                  <CardContent sx={{ p: 5, position: 'relative', zIndex: 1, pt: 6 }}>
                    {/* FUNK Quote Icon - PROMPTS */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: '80px',
                        height: '80px',
                        border: '3px solid',
                        borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(45deg)',
                        opacity: 0.15,
                        boxShadow: '0 4px 20px rgba(244, 103, 51, 0.3)',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          opacity: 0.25,
                          transform: 'rotate(45deg) scale(1.15)',
                          boxShadow: '0 8px 30px rgba(244, 103, 51, 0.5)',
                        },
                      }}
                    >
                      <FormatQuoteIcon
                        className="quote-icon"
                        sx={{
                          fontSize: '2.5rem',
                          color: '#D4AF37',
                          transform: 'scaleX(-1) rotate(-45deg)',
                          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        }}
                      />
                    </Box>
                    
                    {/* FUNK Dotted Line on Left */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: 16,
                        bottom: 16,
                        width: '4px',
                        background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 8px, transparent 8px, transparent 16px)',
                        opacity: 0.7,
                        zIndex: 0,
                      }}
                    />

                    {/* FUNK Rating - MOTIVATION */}
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        border: '2px solid',
                        borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        position: 'relative',
                        background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.05), rgba(212, 175, 55, 0.05))',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          background: 'repeating-linear-gradient(180deg, #F46733 0px, #F46733 4px, #D4AF37 4px, #D4AF37 8px)',
                        },
                      }}
                    >
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        size="medium"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 2px 6px rgba(244, 103, 51, 0.6))',
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
                      {/* FUNK Decorative Quote Icon */}
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          left: '-30px',
                          top: '-15px',
                          fontSize: '5rem',
                          background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          transform: 'rotate(180deg)',
                          zIndex: 0,
                          pointerEvents: 'none',
                          filter: 'drop-shadow(0 0 10px rgba(244, 103, 51, 0.3))',
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
                            background: 'linear-gradient(135deg, #C41E3A, #F46733)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
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
                            background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            height: '32px',
                            borderRadius: 0,
                            border: '2px solid #1A1A1A',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontFamily: "'Righteous', cursive",
                            boxShadow: '0 4px 15px rgba(244, 103, 51, 0.4)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: '0 6px 20px rgba(244, 103, 51, 0.6)',
                            },
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
                background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.1))',
                border: '3px solid',
                borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                position: 'relative',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 40px rgba(244, 103, 51, 0.2)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-3px',
                  left: '30px',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #F46733, #D4AF37)',
                  boxShadow: '0 0 10px rgba(244, 103, 51, 0.5)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-3px',
                  right: '30px',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, #F46733)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
                <StarIcon 
                  sx={{ 
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 15px rgba(244, 103, 51, 0.7))',
                    animation: 'starTwinkle 3s ease-in-out infinite',
                  }} 
                />
                <Typography
                  variant="h6"
                  sx={{
                    background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 700,
                    fontFamily: "'Righteous', cursive",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '1.2rem',
                  }}
                >
                  Kõik testimoniaalid on päriselt meie klientidelt
                </Typography>
                <StarIcon 
                  sx={{ 
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.7))',
                    animation: 'starTwinkle 3s ease-in-out infinite 1.5s',
                  }} 
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  letterSpacing: '0.05em',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
                Meie klientid jagavad oma kogemusi, et aidata teid teha õige otsus
              </Typography>
              <style>
                {`
                  @keyframes starTwinkle {
                    0%, 100% {
                      transform: scale(1);
                      filter: drop-shadow(0 0 15px rgba(244, 103, 51, 0.7));
                    }
                    50% {
                      transform: scale(1.2);
                      filter: drop-shadow(0 0 25px rgba(244, 103, 51, 1));
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

export default Testimonials

