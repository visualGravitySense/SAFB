import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Fade,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const reviews = [
  {
    quote: 'Meie firmaüritusel tekkis tantsupõrand juba kolmanda looga. HR juht helistab mulle siiamaani ja küsib sama bändi järgmiseks aastaks.',
    author: 'KRISTJAN M.',
    event: 'Tallink, firmaüritus 200 inimesele',
  },
  {
    quote: 'Olime mitu bändi kuulanud, aga Siim Aimla Funk Band oli tase hoopis teises liigas. Pulmakülalised küsisid kontakti — kõik tahtsid sama bändi enda pulmadesse.',
    author: 'LIISA JA MART',
    event: 'Pulm, august 2024',
  },
  {
    quote: 'Professionaalsus algab juba esimesest emailist ja lõpeb alles siis, kui viimane külaline lahkub. Soovitan kõigile.',
    author: 'ANNIKA T.',
    event: 'Eraüritus, 80 inimest',
  },
]

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <Box
      ref={ref}
      id="arvustused"
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        background: 'linear-gradient(180deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)',
        color: '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in={isVisible} timeout={600}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'inline-block',
                px: 2,
                py: 0.75,
                mb: 2,
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textTransform: 'uppercase',
                }}
              >
                Miks meie?
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              Sinu üritust mäletatakse
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              aastaid hiljem
            </Typography>

            <Typography
              sx={{
                maxWidth: 640,
                mx: 'auto',
                mt: 3,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Hea bänd mängib õigeid noote.{' '}
              <Box component="strong" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                Siim Aimla Funk Band
              </Box>{' '}
              loob momendid, millest inimesed räägivad järgmisel hommikul, järgmisel nädalal — ja järgmisel aastal. See on funk, mis ei lase istuda.
            </Typography>
          </Box>
        </Fade>

        {/* Review Cards */}
        <Grid container spacing={3}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in={isVisible} timeout={{ enter: 500 + index * 100 }}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'rgba(30, 30, 30, 0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                      boxShadow: '0 8px 32px rgba(212, 175, 55, 0.15)',
                    },
                  }}
                >
                  <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{ fontSize: '1.4rem', color: '#D4AF37' }}
                      />
                    ))}
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontStyle: 'italic',
                      mb: 2,
                    }}
                  >
                    "{review.quote}"
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.05em',
                      mb: 0.5,
                    }}
                  >
                    {review.author}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {review.event}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Reviews
