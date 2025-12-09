import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Link,
  IconButton,
  Divider,
  Alert,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleNewsletter = (e) => {
    e.preventDefault()
    
    // Валидация email
    if (!email || !email.includes('@')) {
      setError('Palun sisestage kehtiv e-maili aadress')
      return
    }

    // Здесь можно добавить интеграцию с EmailJS или другим сервисом
    console.log('Newsletter subscription:', email)
    
    setSuccess(true)
    setError('')
    setEmail('')
    
    // Скрыть сообщение об успехе через 5 секунд
    setTimeout(() => setSuccess(false), 5000)
  }

  const handleScrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="footer"
      id="kontakt"
      sx={{
        background: 'var(--black)',
        color: 'var(--white)',
        pt: 6,
        pb: 2,
        borderTop: '2px solid',
        borderTopColor: '#D4AF37',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37' }}>
              Siim Aimla Funk Band
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              Tipptasemel live-muusika<br />teie üritusele
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <MusicNoteIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37' }}>
              Kiirlingid
            </Typography>
            <Stack spacing={1}>
              <Link
                href="#kontserdid"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('#kontserdid')
                }}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D4AF37',
                  },
                }}
              >
                Kontserdid
              </Link>
              <Link
                href="#muusika"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('#muusika')
                }}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D4AF37',
                  },
                }}
              >
                Muusika
              </Link>
              <Link
                href="#meist"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('#meist')
                }}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D4AF37',
                  },
                }}
              >
                Bändist
              </Link>
              <Link
                href="#broneeri"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('#broneeri')
                }}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D4AF37',
                  },
                }}
              >
                Broneeri
              </Link>
              <Link
                href="#galerii"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('#galerii')
                }}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#D4AF37',
                  },
                }}
              >
                Galerii
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37' }}>
              Kontakt
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" sx={{ color: '#D4AF37' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  info@safunkband.ee
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" sx={{ color: '#D4AF37' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +372 5XXX XXXX
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ color: '#D4AF37' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Tallinn, Estonia
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#D4AF37' }}>
              Uudiskiri
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              Saa infot uute kontsertide kohta
            </Typography>
            <Box component="form" onSubmit={handleNewsletter}>
              <Stack spacing={2}>
                <TextField
                  type="email"
                  placeholder="Teie e-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                    if (success) setSuccess(false)
                  }}
                  required
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#D4AF37',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D4AF37',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  fullWidth
                  sx={{
                    bgcolor: '#D4AF37',
                    color: '#0A0A0A',
                    '&:hover': {
                      bgcolor: '#E5BF50',
                    },
                  }}
                >
                  Telli
                </Button>
                {success && (
                  <Alert severity="success" onClose={() => setSuccess(false)}>
                    Täname! Teie e-mail on lisatud uudiskirja nimekirja.
                  </Alert>
                )}
                {error && (
                  <Alert severity="error" onClose={() => setError('')}>
                    {error}
                  </Alert>
                )}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            &copy; 2024 Siim Aimla Funk Band. Kõik õigused kaitstud.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

