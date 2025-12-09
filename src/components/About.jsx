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

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState(null)
  const aboutRef = useRef(null)

  const members = [
    { 
      name: 'Siim Aimla', 
      instrument: 'Saksofon', 
      emoji: '🎷',
      role: 'Bändiliider',
      experience: '15+ aastat',
      highlight: 'Eesti funk-ikoon',
    },
    { 
      name: 'Jason Hunter', 
      instrument: 'Trompet', 
      emoji: '🎺',
      role: 'Brass sektsioon',
      experience: '12+ aastat',
      highlight: 'Internatsionaalne kogemus',
    },
    { 
      name: 'Sten Valdmaa', 
      instrument: 'Tromboon', 
      emoji: '🎺',
      role: 'Brass sektsioon',
      experience: '10+ aastat',
      highlight: 'Eesti muusikakooli vilistlane',
    },
    { 
      name: 'Artis Boriss', 
      instrument: 'Klahvpillid', 
      emoji: '🎹',
      role: 'Rütmi sektsioon',
      experience: '14+ aastat',
      highlight: 'Multi-instrumentalist',
    },
    { 
      name: 'Paul Daniel', 
      instrument: 'Kitarr', 
      emoji: '🎸',
      role: 'Rütmi sektsioon',
      experience: '11+ aastat',
      highlight: 'Ekspert funk-stiilis',
    },
    { 
      name: 'Roland Jairus', 
      instrument: 'Basskitarr', 
      emoji: '🎸',
      role: 'Rütmi sektsioon',
      experience: '13+ aastat',
      highlight: 'Groove meister',
    },
    { 
      name: 'Karl-Juhan Laanesaar', 
      instrument: 'Trummid', 
      emoji: '🥁',
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
        py: 10,
        px: 2,
        background: 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)',
        color: '#333333',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section - MOTIVATION */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
              <Box
                sx={{
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, #D4AF37)',
                }}
              />
              <MusicNoteIcon sx={{ fontSize: '2.5rem', color: '#D4AF37' }} />
              <Box
                sx={{
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #D4AF37, transparent)',
                }}
              />
            </Box>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
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
                color: '#555',
                mb: 2,
              }}
            >
              <strong style={{ color: '#D4AF37' }}>Siim Aimla Funk Band</strong> – tipptasemel muusika, mis loob elamuse.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                fontStyle: 'italic',
              }}
            >
              Kui otsite bändi, kes paneb iga publiku tantsima ja toob lavale muusika, 
              mis hingab energiat ja emotsioone, siis Siim Aimla Funk Band on õige valik.
            </Typography>

            {/* Social Proof - MOTIVATION */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 4, flexWrap: 'wrap', gap: 2 }}
            >
              <Chip
                icon={<StarIcon />}
                label="7 Professionaalset Muusikut"
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.15)',
                  color: '#D4AF37',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  py: 2.5,
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                }}
              />
              <Chip
                icon={<MusicNoteIcon />}
                label="100+ Koosseisust Kontsert"
                sx={{
                  bgcolor: 'rgba(212, 175, 55, 0.15)',
                  color: '#D4AF37',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  py: 2.5,
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                }}
              />
            </Stack>
          </Box>
        </Fade>

        {/* Band Members Grid - ABILITY & PROMPTS */}
        <Grid container spacing={4}>
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
                    background: '#FFFFFF',
                    border: '3px solid',
                    borderColor: hoveredMember === index ? '#D4AF37' : 'transparent',
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: hoveredMember === index 
                      ? '0 12px 40px rgba(212, 175, 55, 0.3)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.05)',
                      borderColor: '#D4AF37',
                      '& .member-emoji': {
                        transform: 'scale(1.2) rotate(10deg)',
                        filter: 'drop-shadow(0 8px 20px rgba(212, 175, 55, 0.6))',
                      },
                      '& .member-name': {
                        color: '#D4AF37',
                        transform: 'scale(1.1)',
                      },
                      '& .member-info': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Member Photo/Emoji - PROMPTS */}
                    <Box
                      className="member-emoji"
                      sx={{
                        width: { xs: '120px', md: '150px' },
                        height: { xs: '120px', md: '150px' },
                        borderRadius: '50%',
                        background: hoveredMember === index
                          ? 'linear-gradient(135deg, #D4AF37, #E5BF50)'
                          : 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1))',
                        margin: '0 auto 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '4rem', md: '5rem' },
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '4px solid',
                        borderColor: hoveredMember === index ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)',
                        boxShadow: hoveredMember === index
                          ? '0 8px 30px rgba(212, 175, 55, 0.4)'
                          : '0 4px 15px rgba(0, 0, 0, 0.1)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: '-8px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: '#D4AF37',
                          opacity: hoveredMember === index ? 1 : 0,
                          transition: 'opacity 0.4s ease',
                          animation: hoveredMember === index ? 'ripple 1.5s ease-out infinite' : 'none',
                          '@keyframes ripple': {
                            '0%': {
                              transform: 'scale(1)',
                              opacity: 1,
                            },
                            '100%': {
                              transform: 'scale(1.2)',
                              opacity: 0,
                            },
                          },
                        },
                      }}
                    >
                      {member.emoji}
                    </Box>

                    {/* Member Name - ABILITY */}
                    <Typography
                      className="member-name"
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                        fontWeight: 700,
                        color: '#333',
                        mb: 0.5,
                        transition: 'all 0.3s ease',
                        fontFamily: "'Righteous', cursive",
                      }}
                    >
                      {member.name}
                    </Typography>

                    {/* Member Instrument - ABILITY */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.95rem',
                        color: '#666',
                        mb: 2,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
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
                            bgcolor: 'rgba(212, 175, 55, 0.15)',
                            color: '#D4AF37',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            height: '24px',
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#888',
                            fontSize: '0.8rem',
                          }}
                        >
                          {member.experience} kogemust
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#D4AF37',
                            fontWeight: 600,
                            fontSize: '0.8rem',
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
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#D4AF37',
                fontWeight: 700,
                mb: 2,
                fontFamily: "'Righteous', cursive",
                letterSpacing: '0.05em',
              }}
            >
              ✨ Professionaalsus ja Passioon
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                color: '#666',
                fontSize: '1rem',
                lineHeight: 1.7,
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

