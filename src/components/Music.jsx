import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
} from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple'
import HeadphonesIcon from '@mui/icons-material/Headphones'

const Music = () => {
  const videos = [
    { id: 'i8pk65jrAr4' },
    { id: 'diNFHbWtF6o' },
    { id: 'Twa7DHyG81A' }
  ]

  return (
    <Box
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
            href="#"
            target="_blank"
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
            startIcon={<AppleIcon />}
            href="#"
            target="_blank"
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
            Apple Music
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Music

