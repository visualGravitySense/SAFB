import { Box, Button, Typography, Stack } from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EventIcon from '@mui/icons-material/Event'

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="avaleht"
      sx={{
        height: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\"><rect fill=\'%23C41E3A\' width=\'1200\' height=\'800\'/><circle fill=\'%23D4AF37\' opacity=\'0.3\' cx=\'600\' cy=\'400\' r=\'300\'/></svg>")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: '70px',
      }}
    >
      <Box sx={{ maxWidth: '800px', px: 2 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3.5rem' },
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          SIIM AIMLA FUNK BAND
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.5rem' },
            marginBottom: '2rem',
            fontWeight: 400,
          }}
        >
          Funk, mis paneb sind tantsima. Tipptasemel live-muusika teie üritusele.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<MusicNoteIcon />}
            onClick={() => handleScrollTo('#muusika')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Kuula Muusikat
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<EventIcon />}
            onClick={() => handleScrollTo('#broneeri')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              '&:hover': {
                borderColor: '#FFFFFF',
                background: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Broneeri Bänd
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero

