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
import siimPhoto from '../img/siim.jpg'
import jasonPhoto from '../img/jason.jpg'
import stenPhoto from '../img/sten.jpg'
import artisPhoto from '../img/artis.jpg'
import paulPhoto from '../img/paul.jpg'
import rolandPhoto from '../img/roland.jpg'
import karlPhoto from '../img/karl.jpg'

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
      experience: '15+ aastat',
      highlight: 'Eesti funk-ikoon',
    },
    { 
      name: 'Jason Hunter', 
      instrument: 'Trompet', 
      emoji: '🎺',
      photo: jasonPhoto,
      role: 'Brass sektsioon',
      experience: '12+ aastat',
      highlight: 'Internatsionaalne kogemus',
    },
    { 
      name: 'Sten Valdmaa', 
      instrument: 'Tromboon', 
      emoji: '🎺',
      photo: stenPhoto,
      role: 'Brass sektsioon',
      experience: '10+ aastat',
      highlight: 'Eesti muusikakooli vilistlane',
    },
    { 
      name: 'Artis Boriss', 
      instrument: 'Klahvpillid', 
      emoji: '🎹',
      photo: artisPhoto,
      role: 'Rütmi sektsioon',
      experience: '14+ aastat',
      highlight: 'Multi-instrumentalist',
    },
    { 
      name: 'Paul Daniel', 
      instrument: 'Kitarr', 
      emoji: '🎸',
      photo: paulPhoto,
      role: 'Rütmi sektsioon',
      experience: '11+ aastat',
      highlight: 'Ekspert funk-stiilis',
    },
    { 
      name: 'Roland Jairus', 
      instrument: 'Basskitarr', 
      emoji: '🎸',
      photo: rolandPhoto,
      role: 'Rütmi sektsioon',
      experience: '13+ aastat',
      highlight: 'Groove meister',
    },
    { 
      name: 'Karl-Juhan Laanesaar', 
      instrument: 'Trummid', 
      emoji: '🥁',
      photo: karlPhoto,
      role: 'Rütmi sektsioon',
      experience: '16+ aastat',
      highlight: 'Energeetiline rütm',
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
              variant="body1"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.95)',
                mb: 2,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <strong style={{ 
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Siim Aimla Funk Band</strong> – tipptasemel muusika, mis loob elamuse.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                px: { xs: 2, sm: 0 },
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.8)',
                fontStyle: 'italic',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Kui otsite bändi, kes paneb iga publiku tantsima ja toob lavale muusika, 
              mis hingab energiat ja emotsioone, siis Siim Aimla Funk Band on õige valik.
            </Typography>

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
              <Chip
                icon={<StarIcon sx={{ color: '#F46733 !important', filter: 'drop-shadow(0 0 8px rgba(244, 103, 51, 0.6))' }} />}
                label="7 Professionaalset Muusikut"
                sx={{
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                  color: '#F46733',
                  fontWeight: 700,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                  py: { xs: 1.5, sm: 2, md: 2.5 },
                  px: { xs: 1, sm: 1.5, md: 2 },
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                  boxShadow: '0 4px 20px rgba(244, 103, 51, 0.3)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-3px)',
                    boxShadow: '0 8px 30px rgba(244, 103, 51, 0.5)',
                  },
                }}
              />
              <Chip
                icon={<MusicNoteIcon sx={{ color: '#D4AF37 !important', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))' }} />}
                label="100+ Koosseisust Kontsert"
                sx={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 103, 51, 0.2))',
                  color: '#D4AF37',
                  fontWeight: 700,
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                  py: { xs: 1.5, sm: 2, md: 2.5 },
                  px: { xs: 1, sm: 1.5, md: 2 },
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, #D4AF37, #F46733) 1',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-3px)',
                    boxShadow: '0 8px 30px rgba(212, 175, 55, 0.5)',
                  },
                }}
              />
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
                      ? 'linear-gradient(135deg, rgba(40, 32, 24, 0.98), rgba(30, 24, 18, 0.98))'
                      : 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(40, 30, 40, 0.95))',
                    border: '2px solid',
                    borderColor: hoveredMember === index 
                      ? 'rgba(212, 175, 55, 0.6)' 
                      : 'rgba(244, 103, 51, 0.15)',
                    borderRadius: '16px',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'visible',
                    backdropFilter: 'blur(15px)',
                    boxShadow: hoveredMember === index 
                      ? '0 20px 60px rgba(212, 175, 55, 0.25), 0 0 80px rgba(184, 134, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-2px',
                      left: '-2px',
                      right: '-2px',
                      bottom: '-2px',
                      background: hoveredMember === index
                        ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.4), rgba(184, 134, 11, 0.5), rgba(212, 175, 55, 0.4))'
                        : 'transparent',
                      backgroundSize: '200% 200%',
                      borderRadius: '16px',
                      zIndex: -1,
                      opacity: hoveredMember === index ? 1 : 0,
                      transition: 'opacity 0.6s ease',
                      animation: hoveredMember === index ? 'softGlow 4s ease-in-out infinite' : 'none',
                      filter: 'blur(8px)',
                      '@keyframes softGlow': {
                        '0%, 100%': { 
                          backgroundPosition: '0% 50%',
                          opacity: 0.6,
                        },
                        '50%': { 
                          backgroundPosition: '100% 50%',
                          opacity: 0.9,
                        },
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '16px',
                      background: hoveredMember === index
                        ? 'radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%)'
                        : 'transparent',
                      pointerEvents: 'none',
                      transition: 'all 0.6s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.03)',
                      borderColor: 'rgba(212, 175, 55, 0.8)',
                      '& .member-emoji': {
                        transform: 'scale(1.05)',
                        filter: 'drop-shadow(0 8px 24px rgba(212, 175, 55, 0.4))',
                      },
                      '& .member-name': {
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(255, 215, 0, 0.9))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transform: 'scale(1.05)',
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
                        width: { xs: '90px', sm: '110px', md: '150px' },
                        height: { xs: '90px', sm: '110px', md: '150px' },
                        borderRadius: '50%',
                        margin: '0 auto',
                        mb: { xs: 1, sm: 1.25, md: 1.5 },
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        border: '3px solid',
                        borderColor: hoveredMember === index 
                          ? 'rgba(212, 175, 55, 0.7)' 
                          : 'rgba(244, 103, 51, 0.2)',
                        boxShadow: hoveredMember === index
                          ? '0 12px 48px rgba(212, 175, 55, 0.3), 0 0 60px rgba(184, 134, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                          : '0 4px 20px rgba(244, 103, 51, 0.15)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: '-6px',
                          borderRadius: '50%',
                          border: '1px solid',
                          borderColor: 'rgba(212, 175, 55, 0.5)',
                          opacity: hoveredMember === index ? 1 : 0,
                          transition: 'opacity 0.6s ease',
                          zIndex: 1,
                        },
                        '&:hover': {
                          transform: 'scale(1.02)',
                          borderColor: 'rgba(212, 175, 55, 0.9)',
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
                          transition: 'transform 0.6s ease, filter 0.6s ease',
                          transform: hoveredMember === index ? 'scale(1.03)' : 'scale(1)',
                          filter: hoveredMember === index 
                            ? 'brightness(1.08) contrast(1.05) saturate(1.1)' 
                            : 'brightness(0.95) contrast(1)',
                        }}
                      />
                      {/* Gradient overlay on hover */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          background: hoveredMember === index
                            ? 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(184, 134, 11, 0.1) 50%, transparent 100%)'
                            : 'transparent',
                          transition: 'all 0.6s ease',
                          pointerEvents: 'none',
                        }}
                      />
                    </Box>

                    {/* Member Name - ABILITY */}
                    <Typography
                      className="member-name"
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.3rem' },
                        fontWeight: 700,
                        color: '#FFFFFF',
                        mb: 0.5,
                        transition: 'all 0.3s ease',
                        fontFamily: "'Righteous', cursive",
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {member.name}
                    </Typography>

                    {/* Member Instrument - ABILITY */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.95rem' },
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: { xs: 1, sm: 1.5, md: 2 },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
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
                      <Stack spacing={1} sx={{ mt: 1 }}>
                        <Chip
                          label={member.role}
                          size="small"
                          sx={{
                            background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                            color: '#F46733',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            height: '24px',
                            border: '1px solid',
                            borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                          }}
                        >
                          {member.experience} kogemust
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
                maxWidth: '600px',
                mx: 'auto',
                px: { xs: 2, sm: 0 },
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                lineHeight: 1.7,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Iga meeskonnaliige toob endaga kaasa aastatepikkuse kogemuse ja sügava armastuse funk-muusika vastu. 
              Koos loome midagi erilist.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default About

