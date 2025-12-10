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
  Chip,
  Tooltip,
  LinearProgress,
  Fade,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PeopleIcon from '@mui/icons-material/People'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Motivation: Social Proof Data
  const socialStats = {
    subscribers: 1250,
    facebookFollowers: 3400,
    instagramFollowers: 5200,
    youtubeSubscribers: 2100,
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    
    // Валидация email
    if (!email || !email.includes('@')) {
      setError('Palun sisestage kehtiv e-maili aadress')
      return
    }

    setIsSubmitting(true)
    setError('')
    
    // Имитация загрузки для лучшего UX
    setTimeout(() => {
      // Здесь можно добавить интеграцию с EmailJS или другим сервисом
      console.log('Newsletter subscription:', email)
      
      setIsSubmitting(false)
      setSuccess(true)
      setEmail('')
      
      // Скрыть сообщение об успехе через 5 секунд
      setTimeout(() => setSuccess(false), 5000)
    }, 1000)
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
        background: 'linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 50%, #0F0F0F 100%)',
        color: 'var(--white)',
        pt: 8,
        pb: 3,
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `
            radial-gradient(circle at 20% 50%, rgba(244, 103, 51, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: "'Righteous', cursive",
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'rgba(212, 175, 55, 0.9)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Siim Aimla Funk Band
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              Tipptasemel live-muusika<br />teie üritusele
            </Typography>
            
            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
              <Tooltip title={`${socialStats.facebookFollowers.toLocaleString()} jälgijat`} arrow>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{
                    background: 'rgba(244, 103, 51, 0.15)',
                    color: 'rgba(244, 103, 51, 0.9)',
                    border: '1px solid rgba(244, 103, 51, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(244, 103, 51, 0.25)',
                      borderColor: 'rgba(244, 103, 51, 0.4)',
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={`${socialStats.instagramFollowers.toLocaleString()} jälgijat`} arrow>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    color: 'rgba(212, 175, 55, 0.9)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(212, 175, 55, 0.25)',
                      borderColor: 'rgba(212, 175, 55, 0.4)',
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={`${socialStats.youtubeSubscribers.toLocaleString()} tellijat`} arrow>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{
                    background: 'rgba(196, 30, 58, 0.15)',
                    color: 'rgba(196, 30, 58, 0.9)',
                    border: '1px solid rgba(196, 30, 58, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(196, 30, 58, 0.25)',
                      borderColor: 'rgba(196, 30, 58, 0.4)',
                    },
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Kuula Spotifys" arrow>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{
                    background: 'linear-gradient(135deg, #D4AF37, #C41E3A)',
                    color: '#0A0A0A',
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #E5BF50, #D42E4A)',
                      transform: 'scale(1.2) rotate(-15deg) translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(212, 175, 55, 0.6)',
                      animation: 'funkBounce 0.6s ease',
                    },
                  }}
                >
                  <MusicNoteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: "'Righteous', cursive",
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'rgba(212, 175, 55, 0.9)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
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
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s ease',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    color: 'rgba(212, 175, 55, 0.9)',
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
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  py: 0.5,
                  display: 'block',
                  '&:hover': {
                    color: 'rgba(212, 175, 55, 0.9)',
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
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  py: 0.5,
                  display: 'block',
                  '&:hover': {
                    color: 'rgba(212, 175, 55, 0.9)',
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
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  py: 0.5,
                  display: 'block',
                  '&:hover': {
                    color: 'rgba(212, 175, 55, 0.9)',
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
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  py: 0.5,
                  display: 'block',
                  '&:hover': {
                    color: 'rgba(212, 175, 55, 0.9)',
                  },
                }}
              >
                Galerii
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: "'Righteous', cursive",
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'rgba(212, 175, 55, 0.9)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Kontakt
            </Typography>
            <Stack spacing={1.5}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  py: 0.75,
                }}
              >
                <EmailIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  info@safunkband.ee
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  py: 0.75,
                }}
              >
                <PhoneIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  +372 5XXX XXXX
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  py: 0.75,
                }}
              >
                <LocationOnIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  Tallinn, Estonia
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: "'Righteous', cursive",
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'rgba(212, 175, 55, 0.9)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Uudiskiri
            </Typography>
            

            <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, fontSize: '0.85rem' }}>
              Saa infot uute kontsertide, albumite ja eriürituste kohta esimesena
            </Typography>

            {/* Ability: Simplified Form with Progress */}
            <Box component="form" onSubmit={handleNewsletter}>
              <Stack spacing={2}>
                <TextField
                  type="email"
                  placeholder="teie@email.ee"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                    if (success) setSuccess(false)
                  }}
                  required
                  size="small"
                  disabled={isSubmitting}
                  InputProps={{
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.3)',
                        borderWidth: '1px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                        borderWidth: '1px',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                      opacity: 1,
                    },
                  }}
                />
                
                {/* Ability: Loading Progress */}
                {isSubmitting && (
                  <LinearProgress
                    sx={{
                      height: 3,
                      borderRadius: 1,
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#D4AF37',
                      },
                    }}
                  />
                )}

                {/* Prompts: Enhanced CTA Button with FUNK Style */}
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={success ? <CheckCircleIcon /> : <SendIcon />}
                  fullWidth
                  disabled={isSubmitting || success}
                  sx={{
                    background: success 
                      ? 'rgba(76, 175, 80, 0.2)' 
                      : 'rgba(212, 175, 55, 0.2)',
                    color: success ? 'rgba(76, 175, 80, 0.9)' : 'rgba(212, 175, 55, 0.9)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    py: 1.2,
                    textTransform: 'none',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.02em',
                    borderRadius: '6px',
                    border: `1px solid ${success ? 'rgba(76, 175, 80, 0.3)' : 'rgba(212, 175, 55, 0.3)'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: success 
                        ? 'rgba(76, 175, 80, 0.25)' 
                        : 'rgba(212, 175, 55, 0.25)',
                      borderColor: success ? 'rgba(76, 175, 80, 0.4)' : 'rgba(212, 175, 55, 0.4)',
                    },
                    '&:disabled': {
                      background: 'rgba(76, 175, 80, 0.2)',
                      color: 'rgba(76, 175, 80, 0.9)',
                    },
                  }}
                >
                  {success ? 'Täname!' : isSubmitting ? 'Saadan...' : 'Telli Uudiskiri'}
                </Button>

                {/* Prompts: Success/Error Messages */}
                <Fade in={success}>
                  <Alert 
                    severity="success" 
                    icon={<VerifiedUserIcon />}
                    onClose={() => setSuccess(false)}
                    sx={{
                      bgcolor: 'rgba(76, 175, 80, 0.15)',
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      color: '#4CAF50',
                    }}
                  >
                    Täname! Teie e-mail on lisatud uudiskirja nimekirja. Saadame teile uudised esimesena!
                  </Alert>
                </Fade>
                <Fade in={!!error}>
                  <Alert 
                    severity="error" 
                    onClose={() => setError('')}
                    sx={{
                      bgcolor: 'rgba(196, 30, 58, 0.15)',
                      border: '1px solid rgba(196, 30, 58, 0.3)',
                    }}
                  >
                    {error}
                  </Alert>
                </Fade>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            my: 5,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Footer Bottom with FUNK Style */}
        <Box 
          sx={{ 
            textAlign: 'center',
            py: 2,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.05em',
              '&::before': {
                content: '"🎸"',
                marginRight: '8px',
              },
              '&::after': {
                content: '"🎷"',
                marginLeft: '8px',
              },
            }}
          >
            &copy; 2024 Siim Aimla Funk Band. Kõik õigused kaitstud.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

