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
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A0F1A 50%, #0A0A0A 100%)',
        color: 'var(--white)',
        pt: 8,
        pb: 3,
        position: 'relative',
        overflow: 'hidden',
        borderTop: '4px solid transparent',
        borderImage: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733) 1',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `
            radial-gradient(circle at 20% 50%, rgba(244, 103, 51, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(196, 30, 58, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
          backgroundSize: '200% 100%',
          animation: 'funkShimmer 3s ease-in-out infinite',
          '@keyframes funkShimmer': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
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
                background: 'linear-gradient(135deg, #F46733 0%, #D4AF37 50%, #F46733 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'funkGradient 3s ease infinite',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textShadow: '0 0 30px rgba(244, 103, 51, 0.5)',
                '@keyframes funkGradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              }}
            >
              Siim Aimla Funk Band
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              Tipptasemel live-muusika<br />teie üritusele
            </Typography>
            
            {/* Motivation: Social Proof - Followers Count */}
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<PeopleIcon sx={{ fontSize: '1rem', animation: 'pulse 2s ease-in-out infinite' }} />}
                label={`${socialStats.subscribers.toLocaleString()}+ Jälgijat`}
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                  color: '#F46733',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                  boxShadow: '0 0 15px rgba(244, 103, 51, 0.3)',
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-2px)',
                    boxShadow: '0 5px 20px rgba(244, 103, 51, 0.5)',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                  },
                }}
              />
            </Box>

            <Stack direction="row" spacing={1.5}>
              <Tooltip title={`${socialStats.facebookFollowers.toLocaleString()} jälgijat`} arrow>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{
                    background: 'linear-gradient(135deg, #F46733, #C41E3A)',
                    color: '#FFFFFF',
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    boxShadow: '0 4px 15px rgba(244, 103, 51, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #FF7744, #D42E4A)',
                      transform: 'scale(1.2) rotate(15deg) translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(244, 103, 51, 0.6)',
                      animation: 'funkBounce 0.6s ease',
                    },
                    '@keyframes funkBounce': {
                      '0%, 100%': { transform: 'scale(1.2) rotate(15deg) translateY(-5px)' },
                      '50%': { transform: 'scale(1.25) rotate(20deg) translateY(-8px)' },
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
                    background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                    color: '#0A0A0A',
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #E5BF50, #FF7744)',
                      transform: 'scale(1.2) rotate(-15deg) translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(212, 175, 55, 0.6)',
                      animation: 'funkBounce 0.6s ease',
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
                    background: 'linear-gradient(135deg, #C41E3A, #F46733)',
                    color: '#FFFFFF',
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #D42E4A, #FF7744)',
                      transform: 'scale(1.2) rotate(15deg) translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(196, 30, 58, 0.6)',
                      animation: 'funkBounce 0.6s ease',
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
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                    color: '#F46733',
                    transform: 'translateX(10px) scale(1.05)',
                    '& .MuiSvgIcon-root': {
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      color: '#F46733',
                    },
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: '1rem', opacity: 0, transition: 'all 0.3s ease', transform: 'rotate(-45deg)' }} />
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2), rgba(244, 103, 51, 0.2))',
                    color: '#D4AF37',
                    transform: 'translateX(10px) scale(1.05)',
                    '& .MuiSvgIcon-root': {
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      color: '#D4AF37',
                    },
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: '1rem', opacity: 0, transition: 'all 0.3s ease', transform: 'rotate(-45deg)' }} />
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(244, 103, 51, 0.2), rgba(196, 30, 58, 0.2))',
                    color: '#F46733',
                    transform: 'translateX(10px) scale(1.05)',
                    '& .MuiSvgIcon-root': {
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      color: '#F46733',
                    },
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: '1rem', opacity: 0, transition: 'all 0.3s ease', transform: 'rotate(-45deg)' }} />
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2), rgba(244, 103, 51, 0.2))',
                    color: '#D4AF37',
                    transform: 'translateX(10px) scale(1.05)',
                    '& .MuiSvgIcon-root': {
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      color: '#D4AF37',
                    },
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: '1rem', opacity: 0, transition: 'all 0.3s ease', transform: 'rotate(-45deg)' }} />
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  py: 0.5,
                  px: 1,
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(196, 30, 58, 0.2), rgba(212, 175, 55, 0.2))',
                    color: '#C41E3A',
                    transform: 'translateX(10px) scale(1.05)',
                    '& .MuiSvgIcon-root': {
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      color: '#C41E3A',
                    },
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: '1rem', opacity: 0, transition: 'all 0.3s ease', transform: 'rotate(-45deg)' }} />
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
                background: 'linear-gradient(135deg, #C41E3A, #F46733)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.1), rgba(212, 175, 55, 0.1))',
                  border: '1px solid rgba(244, 103, 51, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                    background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                    borderColor: '#F46733',
                    boxShadow: '0 4px 15px rgba(244, 103, 51, 0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #F46733, #C41E3A)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(244, 103, 51, 0.4)',
                  }}
                >
                  <EmailIcon sx={{ color: '#FFFFFF', fontSize: '1.2rem' }} />
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', fontWeight: 500 }}>
                  info@safunkband.ee
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(244, 103, 51, 0.1))',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 103, 51, 0.2))',
                    borderColor: '#D4AF37',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(212, 175, 55, 0.4)',
                  }}
                >
                  <PhoneIcon sx={{ color: '#0A0A0A', fontSize: '1.2rem' }} />
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', fontWeight: 500 }}>
                  +372 5XXX XXXX
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.1), rgba(244, 103, 51, 0.1))',
                  border: '1px solid rgba(196, 30, 58, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                    background: 'linear-gradient(135deg, rgba(196, 30, 58, 0.2), rgba(244, 103, 51, 0.2))',
                    borderColor: '#C41E3A',
                    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #C41E3A, #F46733)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(196, 30, 58, 0.4)',
                  }}
                >
                  <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: '1.2rem' }} />
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', fontWeight: 500 }}>
                  Tallinn, Estonia
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                  animation: 'funkPulse 2s ease-in-out infinite',
                  '@keyframes funkPulse': {
                    '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)' },
                    '50%': { transform: 'scale(1.1)', boxShadow: '0 6px 20px rgba(212, 175, 55, 0.6)' },
                  },
                }}
              >
                <NotificationsActiveIcon sx={{ color: '#0A0A0A', fontSize: '1.5rem' }} />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: "'Righteous', cursive",
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #D4AF37, #F46733)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Uudiskiri
              </Typography>
            </Stack>
            
            {/* Motivation: Social Proof */}
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<TrendingUpIcon sx={{ fontSize: '0.9rem' }} />}
                label={`${socialStats.subscribers.toLocaleString()}+ Tellijat`}
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                  color: '#F46733',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: '2px solid',
                  borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                  boxShadow: '0 0 15px rgba(244, 103, 51, 0.3)',
                }}
              />
            </Box>

            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.6 }}>
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
                    startAdornment: (
                      <Box
                        sx={{
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                          borderRadius: '6px',
                          mr: 1,
                          boxShadow: '0 2px 8px rgba(244, 103, 51, 0.3)',
                        }}
                      >
                        <EmailIcon sx={{ color: '#FFFFFF', fontSize: '1rem' }} />
                      </Box>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(244, 103, 51, 0.4)',
                        borderWidth: '2px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#F46733',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D4AF37',
                        borderWidth: '3px',
                        boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
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
                      ? 'linear-gradient(135deg, #4CAF50, #45A049)' 
                      : 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)',
                    backgroundSize: '200% 200%',
                    color: success ? '#FFFFFF' : '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1rem',
                    py: 1.4,
                    textTransform: 'uppercase',
                    fontFamily: "'Righteous', cursive",
                    letterSpacing: '0.1em',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    border: '2px solid transparent',
                    boxShadow: success 
                      ? '0 4px 15px rgba(76, 175, 80, 0.4)' 
                      : '0 4px 15px rgba(244, 103, 51, 0.5)',
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    animation: success ? 'none' : 'funkGradientMove 3s ease infinite',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      transition: 'left 0.6s ease',
                    },
                    '&:hover': {
                      background: success 
                        ? 'linear-gradient(135deg, #4CAF50, #45A049)' 
                        : 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)',
                      transform: 'translateY(-4px) scale(1.02)',
                      boxShadow: success
                        ? '0 8px 25px rgba(76, 175, 80, 0.6)'
                        : '0 8px 30px rgba(244, 103, 51, 0.7)',
                      '&::before': {
                        left: '100%',
                      },
                    },
                    '&:active': {
                      transform: 'translateY(-1px) scale(0.98)',
                    },
                    '&:disabled': {
                      background: 'linear-gradient(135deg, #4CAF50, #45A049)',
                      color: '#FFFFFF',
                    },
                    '@keyframes funkGradientMove': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
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

        {/* FUNK Divider */}
        <Box
          sx={{
            my: 5,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733, transparent)',
            backgroundSize: '200% 100%',
            animation: 'funkShimmer 3s ease-in-out infinite',
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

