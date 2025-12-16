import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Grow,
  Fade,
  Chip,
  Stack,
} from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import StarIcon from '@mui/icons-material/Star'
import siimPhoto from '../img/siim.png'
import jasonPhoto from '../img/jason.png'
import stenPhoto from '../img/sten.png'
import artisPhoto from '../img/artis.png'
import paulPhoto from '../img/paul.png'
import rolandPhoto from '../img/roland.png'
import karlPhoto from '../img/karl.png'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState(null)
  const aboutRef = useRef(null)

  const members = [
    { 
      name: 'Siim Aimla', 
      instrument: 'Saksofon', 
      emoji: '🎷',
      photo: siimPhoto,
      role: 'Bändiliider',
      experience: '',
      highlight: '',
    },
    { 
      name: 'Jason Hunter', 
      instrument: 'Trompet', 
      emoji: '🎺',
      photo: jasonPhoto,
      role: '',
      experience: '',
      highlight: '',
    },
    { 
      name: 'Sten Valdmaa', 
      instrument: 'Tromboon', 
      emoji: '🎺',
      photo: stenPhoto,
      role: '',
      experience: '',
      highlight: '',
    },
    { 
      name: 'Artis Boriss', 
      instrument: 'Klahvpillid', 
      emoji: '🎹',
      photo: artisPhoto,
      role: '',
      experience: '',
      highlight: '',
    },
    { 
      name: 'Paul Daniel', 
      instrument: 'Kitarr', 
      emoji: '🎸',
      photo: paulPhoto,
      role: '',
      experience: '',
      highlight: '',
    },
    { 
      name: 'Roland Jairus', 
      instrument: 'Basskitarr', 
      emoji: '🎸',
      photo: rolandPhoto,
      role: '',
      experience: '',
      highlight: '',
    },
    { 
      name: 'Karl-Juhan Laanesaar', 
      instrument: 'Trummid', 
      emoji: '🥁',
      photo: karlPhoto,
      role: '',
      experience: '',
      highlight: '',
    }
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <Box
      ref={aboutRef}
      id="meist"
      sx={{
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 1, sm: 2 },
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
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(244, 103, 51, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
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
        },
        '@keyframes funkShimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section - MOTIVATION with FUNK */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1, sm: 1.5, md: 2 }, mb: { xs: 2, sm: 2.5, md: 3 } }}>
              <Box
                sx={{
                  width: { xs: '40px', sm: '50px', md: '60px' },
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #F46733, #D4AF37)',
                }}
              />
              <MusicNoteIcon 
                sx={{ 
                  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                  background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 15px rgba(244, 103, 51, 0.6))',
                }} 
              />
              <Box
                sx={{
                  width: { xs: '40px', sm: '50px', md: '60px' },
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, #F46733, transparent)',
                }}
              />
            </Box>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: { xs: 2, sm: 2.5, md: 3 },
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #F46733 0%, #D4AF37 30%, #FFFFFF 50%, #D4AF37 70%, #F46733 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                textShadow: '0 0 30px rgba(244, 103, 51, 0.3)',
                animation: 'funkGradientText 4s ease infinite',
                '@keyframes funkGradientText': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              }}
            >
              Bändist
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.95)',
                mb: 3,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                fontWeight: 700,
                fontFamily: "'Righteous', cursive",
              }}
            >
              <span style={{ 
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Siim Aimla Funk Band</span> – Bänd, mis paneb publiku tantsima (isegi neid, kes "ei oska")
            </Typography>

            <Box
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                px: { xs: 2, sm: 3, md: 0 },
                mb: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.9,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 2.5,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
                Siim Aimla Funk Band on see, mis muudab iga ürituse peoks. James Brown'i energia, Michael Breckeri vibe ja eesti popiklassika, mida keegi ei oska oodata – kõik ühes paketis. Alates <strong style={{ color: '#D4AF37' }}>2017. aastast</strong> on see ansambel tõestanud, et funk ei küsi luba – ta lihtsalt võtab lava üle.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.9,
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 2.5,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
                Eesti jazz'i särav nimi <strong style={{ 
                  background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Siim Aimla</strong> juhib bändi, mis ei tea sõna "igav". Lavale tõusevad ka Eesti ja rahvusvahelised vokalistid nagu <strong style={{ color: '#D4AF37' }}>Sofia Rubina-Hunter</strong>, <strong style={{ color: '#D4AF37' }}>Rita Ray</strong>, <strong style={{ color: '#D4AF37' }}>Kristel Aaslaid</strong> ja Rootsi jazzidiiva <strong style={{ color: '#D4AF37' }}>Viktoria Tolstoy</strong>. Tulemus? Muusika, mis jääb kõlama veel kaua pärast viimast nooti.
              </Typography>

            </Box>

            {/* Social Proof - MOTIVATION */}
            <Stack
              direction="row"
              spacing={{ xs: 1.5, sm: 2 }}
              justifyContent="center"
              sx={{ 
                mt: { xs: 3, sm: 3.5, md: 4 }, 
                flexWrap: 'wrap', 
                gap: { xs: 1.5, sm: 2 },
                display: { xs: 'none', sm: 'flex' }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                  transition: 'transform 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '-3px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #F46733, #D4AF37, #F46733)',
                    backgroundSize: '200% 200%',
                    opacity: 0.6,
                    filter: 'blur(8px)',
                    zIndex: 0,
                    animation: 'funkChipGlow 3s ease-in-out infinite',
                    '@keyframes funkChipGlow': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                />
                <Chip
                  icon={<StarIcon sx={{ 
                    color: '#F46733 !important', 
                    fontSize: '1.5rem !important',
                    filter: 'drop-shadow(0 0 10px rgba(244, 103, 51, 0.8)) drop-shadow(0 0 20px rgba(244, 103, 51, 0.4))',
                  }} />}
                  label="7 Professionaalset Muusikut"
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'linear-gradient(135deg, rgba(30, 20, 15, 0.95), rgba(40, 25, 18, 0.95))',
                    color: '#F46733',
                    fontWeight: 800,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    py: { xs: 2, sm: 2.5, md: 3 },
                    px: { xs: 2, sm: 2.5, md: 3 },
                    border: '2px solid',
                    borderColor: 'rgba(244, 103, 51, 0.5)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(244, 103, 51, 0.4), 0 0 0 1px rgba(244, 103, 51, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.02em',
                    '&:hover': {
                      borderColor: 'rgba(244, 103, 51, 0.8)',
                      boxShadow: '0 12px 40px rgba(244, 103, 51, 0.5), 0 0 60px rgba(244, 103, 51, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                      transform: 'scale(1.03)',
                      color: '#FF6B42',
                    },
                    '& .MuiChip-label': {
                      px: { xs: 1, sm: 1.5 },
                    },
                  }}
                />
              </Box>
              
              <Box
                sx={{
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                  transition: 'transform 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '-3px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37)',
                    backgroundSize: '200% 200%',
                    opacity: 0.6,
                    filter: 'blur(8px)',
                    zIndex: 0,
                    animation: 'funkChipGlow2 3s ease-in-out infinite',
                    '@keyframes funkChipGlow2': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                />
                <Chip
                  icon={<MusicNoteIcon sx={{ 
                    color: '#D4AF37 !important', 
                    fontSize: '1.5rem !important',
                    filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.8)) drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))',
                  }} />}
                  label="100+ Koosseisust Kontsert"
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'linear-gradient(135deg, rgba(35, 28, 18, 0.95), rgba(45, 35, 22, 0.95))',
                    color: '#D4AF37',
                    fontWeight: 800,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    py: { xs: 2, sm: 2.5, md: 3 },
                    px: { xs: 2, sm: 2.5, md: 3 },
                    border: '2px solid',
                    borderColor: 'rgba(212, 175, 55, 0.5)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.02em',
                    '&:hover': {
                      borderColor: 'rgba(212, 175, 55, 0.8)',
                      boxShadow: '0 12px 40px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                      transform: 'scale(1.03)',
                      color: '#FFD700',
                    },
                    '& .MuiChip-label': {
                      px: { xs: 1, sm: 1.5 },
                    },
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Fade>

        {/* Band Members Grid - ABILITY & PROMPTS */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {members.map((member, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Grow
                in={isVisible}
                timeout={600 + index * 150}
                style={{ transformOrigin: 'center' }}
              >
                <Card
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    background: hoveredMember === index
                      ? 'linear-gradient(135deg, rgba(30, 24, 18, 0.98), rgba(40, 28, 20, 0.98))'
                      : 'linear-gradient(135deg, rgba(20, 18, 16, 0.95), rgba(26, 22, 20, 0.95))',
                    border: '2px solid',
                    borderColor: hoveredMember === index 
                      ? 'transparent'
                      : 'rgba(244, 103, 51, 0.2)',
                    borderRadius: '20px',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'visible',
                    backdropFilter: 'blur(20px)',
                    boxShadow: hoveredMember === index 
                      ? '0 25px 70px rgba(244, 103, 51, 0.35), 0 0 100px rgba(212, 175, 55, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.05)' 
                      : '0 8px 30px rgba(0, 0, 0, 0.4)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '-3px',
                      right: '-3px',
                      bottom: '-3px',
                      background: hoveredMember === index
                        ? 'linear-gradient(135deg, #F46733, #D4AF37, #F46733, #D4AF37)'
                        : 'linear-gradient(135deg, rgba(244, 103, 51, 0.3), rgba(212, 175, 55, 0.3))',
                      backgroundSize: hoveredMember === index ? '300% 300%' : '200% 200%',
                      borderRadius: '20px',
                      zIndex: -1,
                      opacity: hoveredMember === index ? 1 : 0.5,
                      transition: 'all 0.5s ease',
                      animation: hoveredMember === index ? 'funkBorderGlow 3s ease-in-out infinite' : 'none',
                      filter: hoveredMember === index ? 'blur(1px)' : 'blur(2px)',
                      '@keyframes funkBorderGlow': {
                        '0%': { 
                          backgroundPosition: '0% 50%',
                        },
                        '50%': { 
                          backgroundPosition: '100% 50%',
                        },
                        '100%': { 
                          backgroundPosition: '0% 50%',
                        },
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '20px',
                      background: hoveredMember === index
                        ? 'radial-gradient(circle at 50% 0%, rgba(244, 103, 51, 0.15) 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)'
                        : 'transparent',
                      pointerEvents: 'none',
                      transition: 'all 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.04)',
                      '& .member-emoji': {
                        transform: 'scale(1.08) rotate(2deg)',
                        filter: 'drop-shadow(0 12px 32px rgba(244, 103, 51, 0.5)) drop-shadow(0 0 40px rgba(212, 175, 55, 0.3))',
                      },
                      '& .member-name': {
                        background: 'linear-gradient(135deg, #F46733, #D4AF37, #FFD700)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transform: 'scale(1.08)',
                        filter: 'drop-shadow(0 0 8px rgba(244, 103, 51, 0.6))',
                      },
                      '& .member-info': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
                    {/* Member Photo - PROMPTS */}
                    <Box
                      className="member-emoji"
                      sx={{
                        width: { xs: '100px', sm: '120px', md: '160px' },
                        height: { xs: '100px', sm: '120px', md: '160px' },
                        borderRadius: '50%',
                        margin: '0 auto',
                        mb: { xs: 1.5, sm: 2, md: 2.5 },
                        position: 'relative',
                        overflow: 'visible',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '4px solid',
                        borderColor: hoveredMember === index 
                          ? 'transparent'
                          : 'rgba(244, 103, 51, 0.3)',
                        boxShadow: hoveredMember === index
                          ? '0 0 0 4px rgba(244, 103, 51, 0.4), 0 0 0 8px rgba(212, 175, 55, 0.2), 0 20px 60px rgba(244, 103, 51, 0.4), 0 0 80px rgba(212, 175, 55, 0.3)'
                          : '0 8px 30px rgba(244, 103, 51, 0.2)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: '-8px',
                          borderRadius: '50%',
                          background: hoveredMember === index
                            ? 'linear-gradient(135deg, #F46733, #D4AF37, #F46733, #D4AF37)'
                            : 'linear-gradient(135deg, rgba(244, 103, 51, 0.4), rgba(212, 175, 55, 0.4))',
                          backgroundSize: hoveredMember === index ? '300% 300%' : '200% 200%',
                          opacity: hoveredMember === index ? 1 : 0.6,
                          transition: 'all 0.5s ease',
                          animation: hoveredMember === index ? 'funkPhotoGlow 3s ease-in-out infinite' : 'none',
                          zIndex: -1,
                          filter: 'blur(4px)',
                          '@keyframes funkPhotoGlow': {
                            '0%': { 
                              backgroundPosition: '0% 50%',
                              transform: 'scale(1)',
                            },
                            '50%': { 
                              backgroundPosition: '100% 50%',
                              transform: 'scale(1.05)',
                            },
                            '100%': { 
                              backgroundPosition: '0% 50%',
                              transform: 'scale(1)',
                            },
                          },
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: '-4px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: hoveredMember === index 
                            ? 'rgba(212, 175, 55, 0.6)' 
                            : 'transparent',
                          opacity: hoveredMember === index ? 1 : 0,
                          transition: 'opacity 0.5s ease',
                          zIndex: 1,
                          pointerEvents: 'none',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={member.photo}
                        alt={member.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          transition: 'transform 0.5s ease, filter 0.5s ease',
                          transform: hoveredMember === index ? 'scale(1.05)' : 'scale(1)',
                          filter: hoveredMember === index 
                            ? 'brightness(1.15) contrast(1.1) saturate(1.2)' 
                            : 'brightness(0.9) contrast(1) saturate(0.95)',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      />
                      {/* Gradient overlay on hover */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          background: hoveredMember === index
                            ? 'radial-gradient(circle, rgba(244, 103, 51, 0.2) 0%, rgba(212, 175, 55, 0.15) 50%, transparent 100%)'
                            : 'transparent',
                          transition: 'all 0.5s ease',
                          pointerEvents: 'none',
                          zIndex: 3,
                        }}
                      />
                    </Box>

                    {/* Member Name - ABILITY */}
                    <Typography
                      className="member-name"
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.15rem', md: '1.4rem' },
                        fontWeight: 800,
                        color: hoveredMember === index ? '#FFFFFF' : '#F46733',
                        mb: 0.75,
                        transition: 'all 0.4s ease',
                        fontFamily: "'Righteous', cursive",
                        textShadow: hoveredMember === index 
                          ? '0 0 20px rgba(244, 103, 51, 0.8), 0 4px 15px rgba(0, 0, 0, 0.6)' 
                          : '0 2px 10px rgba(0, 0, 0, 0.5)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {member.name}
                    </Typography>

                    {/* Member Instrument - ABILITY */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        color: hoveredMember === index 
                          ? 'rgba(212, 175, 55, 0.95)' 
                          : 'rgba(255, 255, 255, 0.7)',
                        mb: { xs: 1.5, sm: 2, md: 2.5 },
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        textShadow: hoveredMember === index 
                          ? '0 0 15px rgba(212, 175, 55, 0.6), 0 2px 8px rgba(0, 0, 0, 0.5)' 
                          : '0 2px 10px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {member.instrument}
                    </Typography>

                    {/* Additional Info - MOTIVATION (appears on hover) */}
                    <Box
                      className="member-info"
                      sx={{
                        opacity: hoveredMember === index ? 1 : 0,
                        transform: hoveredMember === index ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.4s ease',
                        height: hoveredMember === index ? 'auto' : 0,
                        overflow: 'hidden',
                      }}
                    >
                      <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                        <Chip
                          label={member.role}
                          size="small"
                          sx={{
                            background: hoveredMember === index
                              ? 'linear-gradient(135deg, rgba(244, 103, 51, 0.3), rgba(212, 175, 55, 0.3))'
                              : 'linear-gradient(135deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.15))',
                            color: hoveredMember === index ? '#FFD700' : '#F46733',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            height: '28px',
                            border: '2px solid',
                            borderColor: hoveredMember === index 
                              ? 'rgba(212, 175, 55, 0.6)' 
                              : 'rgba(244, 103, 51, 0.4)',
                            boxShadow: hoveredMember === index 
                              ? '0 4px 15px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                              : 'none',
                            transition: 'all 0.4s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                          }}
                        >
                          {member.experience} 
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 600,
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                            fontStyle: 'italic',
                          }}
                        >
                          {member.highlight}
                        </Typography>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Trust Indicator - Additional MOTIVATION */}
        <Fade in={isVisible} timeout={1500}>
          <Box sx={{ textAlign: 'center', mt: { xs: 4, sm: 6, md: 8 } }}>
            <Typography
              variant="h6"
              sx={{
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                mb: { xs: 1.5, md: 2 },
                fontFamily: "'Righteous', cursive",
                letterSpacing: '0.05em',
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
              }}
            >
              ✨ Professionaalsus ja Passioon
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                px: { xs: 2, sm: 0 },
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                mb: 2,
              }}
            >
              Iga meeskonnaliige toob endaga kaasa aastatepikkuse kogemuse ja sügava armastuse funk-muusika vastu. 
              Koos loome midagi erilist.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                px: { xs: 2, sm: 0 },
                color: 'rgba(212, 175, 55, 0.9)',
                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                lineHeight: 1.7,
                fontStyle: 'italic',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              🎤 Lavale tõusevad ka meie vokalistid: Sofia Rubina-Hunter, Rita Ray, Kristel Aaslaid ja Rootsi jazzidiiva Viktoria Tolstoy.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default About

