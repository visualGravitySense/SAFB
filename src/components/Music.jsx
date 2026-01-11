import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Fade,
} from '@mui/material'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useState, useEffect, useRef } from 'react'
import { useContent } from '../context/ContentContext'

const Music = () => {
  const { content } = useContent()
  const [isVisible, setIsVisible] = useState(false)
  const musicRef = useRef(null)

  // Get music data from API or use defaults
  const musicData = content?.music || {
    videos: [
      { id: 'i8pk65jrAr4' },
      { id: 'diNFHbWtF6o' },
      { id: 'Twa7DHyG81A' }
    ],
    albums: [],
    spotifyLink: '',
    youtubeLink: ''
  }

  const videos = musicData.videos && musicData.videos.length > 0 
    ? musicData.videos 
    : [
        { id: 'i8pk65jrAr4' },
        { id: 'diNFHbWtF6o' },
        { id: 'Twa7DHyG81A' }
      ]

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

    if (musicRef.current) {
      observer.observe(musicRef.current)
    }

    return () => {
      if (musicRef.current) {
        observer.unobserve(musicRef.current)
      }
    }
  }, [])

  return (
    <Box
      ref={musicRef}
      id="muusika"
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
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ 
            mb: 5,
            position: 'relative',
            zIndex: 1,
            fontFamily: "'Righteous', cursive",
            fontSize: { xs: '2.5rem', md: '3.5rem' },
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
          🎵 Kuula Meie Muusikat
        </Typography>

        {/* Introduction Text - MOTIVATION */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 5, px: { xs: 2, sm: 3, md: 0 }, position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                fontWeight: 700,
                mb: 3,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'Righteous', cursive",
                letterSpacing: '0.05em',
              }}
            >
              Siim Aimla Funk Band – Eeskujudest omaloominguni
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                lineHeight: 1.9,
                color: 'rgba(255, 255, 255, 0.95)',
                mb: 3,
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              🎺 Kui funk kohtub jazzi ja eesti muusikalise meisterlikkusega, sünnib midagi erilist.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                lineHeight: 1.9,
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 3,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <strong style={{ 
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
              }}>Siim Aimla</strong>, Eesti jazz'i kvaliteedimärk juba paarkümmend aastat, lõi <strong style={{ color: '#D4AF37' }}>2017. aastal</strong> bändi, mis kannab tema isikupärast käekirja. Inspiratsioon tuleb <strong style={{ color: '#D4AF37' }}>James Brownilt</strong>, <strong style={{ color: '#D4AF37' }}>Michael Breckerilt</strong> ja <strong style={{ color: '#D4AF37' }}>Nils Landgrenilt</strong>, aga tulemus on 100% oma.
            </Typography>

            {/* Albums Section */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  mb: 2.5,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.15))',
                  border: '2px solid',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(212, 175, 55, 0.5)',
                    boxShadow: '0 8px 30px rgba(244, 103, 51, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    fontWeight: 700,
                    mb: 1.5,
                    color: '#D4AF37',
                    fontFamily: "'Righteous', cursive",
                  }}
                >
                  📀 "We Need To Talk" (2019)
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.9)',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  – dünaamiline, mitmekihiline, sügav. Mõjutused <strong style={{ color: '#D4AF37' }}>John Scofieldi</strong>, <strong style={{ color: '#D4AF37' }}>Jaco Pastoriouse</strong> ja <strong style={{ color: '#D4AF37' }}>Bob Mintzerist</strong>, aga käekiri puhtalt Aimla oma.
                </Typography>
              </Box>

              <Box
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.15))',
                  border: '2px solid',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(212, 175, 55, 0.5)',
                    boxShadow: '0 8px 30px rgba(244, 103, 51, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    fontWeight: 700,
                    mb: 1.5,
                    color: '#D4AF37',
                    fontFamily: "'Righteous', cursive",
                  }}
                >
                  📀 "Blind Date" (2021)
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.9)',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                    mb: 1,
                  }}
                >
                  – album, mis muudab iga kuulamise reedeõhtuseks peoks. Muusika, mis ei jää kõrvu – see läheb otse naha alla.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontStyle: 'italic',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Külalisvokalistid <strong style={{ color: '#D4AF37' }}>Sofia Rubina-Hunter</strong>, <strong style={{ color: '#D4AF37' }}>Rita Ray</strong>, <strong style={{ color: '#D4AF37' }}>Marvi Vallaste</strong>, <strong style={{ color: '#D4AF37' }}>Kalle Sepp</strong> ja Rootsi jazzidiiva <strong style={{ color: '#D4AF37' }}>Viktoria Tolstoy</strong> lisavad särtsu.
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.95)',
                textAlign: 'center',
                fontStyle: 'italic',
                px: 3,
                py: 2.5,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                border: '2px solid',
                borderColor: 'rgba(212, 175, 55, 0.4)',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              ✨ <strong style={{ 
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Tulemus?</strong> Muusika, mis vallutab nii südame kui ka meeled. Funk, jazz ja loomeenergia, mis ei küsi luba – ta lihtsalt juhtub. 🎶
            </Typography>
          </Box>
        </Fade>

        {/* YouTube Videos Grid with FUNK */}
        <Grid container spacing={3} sx={{ mb: 5, position: 'relative', zIndex: 1 }}>
          {videos.map((video, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: 2,
                  border: '3px solid transparent',
                  backgroundClip: 'padding-box',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-3px',
                    left: '-3px',
                    right: '-3px',
                    bottom: '-3px',
                    background: 'linear-gradient(45deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
                    backgroundSize: '400% 400%',
                    borderRadius: 2,
                    zIndex: -1,
                    animation: 'funkGradientBorder 4s ease infinite',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 60px rgba(244, 103, 51, 0.5)',
                    '&::before': {
                      animation: 'funkGradientBorder 2s ease infinite',
                    },
                  },
                  '@keyframes funkGradientBorder': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Streaming Links with FUNK */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ position: 'relative', zIndex: 1 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<HeadphonesIcon />}
            href="https://open.spotify.com/artist/21qqplNYBXQBFtm3kqqo09"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.8,
              background: 'linear-gradient(135deg, #1DB954, #1ed760)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: "'Righteous', cursive",
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(29, 185, 84, 0.4)',
              border: '2px solid transparent',
              transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              '&:hover': {
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 8px 30px rgba(29, 185, 84, 0.6)',
                background: 'linear-gradient(135deg, #1ed760, #1DB954)',
              },
            }}
          >
            Kuula Spotifys
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<PlayArrowIcon />}
            href={musicData.youtubeLink || "https://www.youtube.com/@siimaimlafunkband3223"}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.8,
              border: '3px solid',
              borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
              background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.1), rgba(212, 175, 55, 0.1))',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: "'Righteous', cursive",
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(244, 103, 51, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              '&:hover': {
                transform: 'translateY(-3px) scale(1.05)',
                borderImage: 'linear-gradient(135deg, #FF7744, #E5BF50) 1',
                background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                boxShadow: '0 8px 30px rgba(244, 103, 51, 0.5)',
                color: '#F46733',
              },
            }}
          >
            Vaata Rohkem Videoid
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Music

