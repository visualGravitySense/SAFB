import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Alert,
  CircularProgress,
  Paper,
  Grid,
  LinearProgress,
  Chip,
  Stack,
  Fade,
  Grow,
  InputAdornment,
  Tooltip,
  IconButton,
  Divider,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PeopleIcon from '@mui/icons-material/People'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import EventIcon from '@mui/icons-material/Event'
import InfoIcon from '@mui/icons-material/Info'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarIcon from '@mui/icons-material/Star'
import VerifiedIcon from '@mui/icons-material/Verified'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import GroupsIcon from '@mui/icons-material/Groups'
import GroupIcon from '@mui/icons-material/Group'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Booking = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    location: '',
    format: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const eventTypes = [
    { value: 'corporate', label: 'Korporatiiv', icon: <EventIcon /> },
    { value: 'wedding', label: 'Pulmad', icon: <StarIcon /> },
    { value: 'festival', label: 'Festival', icon: <MusicNoteIcon /> },
    { value: 'private', label: 'Eraüritus', icon: <PeopleIcon /> },
    { value: 'club', label: 'Klubi/Kontsert', icon: <EventIcon /> },
    { value: 'other', label: 'Muu', icon: <EventIcon /> },
  ]

  const formatOptions = [
    { 
      value: 'premium', 
      label: 'PREMIUM', 
      subtitle: '7 muusikut', 
      description: 'Täielik koosseis, kõige eredam show',
      icon: <GroupsIcon />,
      color: '#D4AF37',
      recommended: false
    },
    { 
      value: 'standard', 
      label: 'STANDARD', 
      subtitle: '4-5 muusikut', 
      description: 'Optimaalne valik',
      icon: <GroupIcon />,
      color: '#F46733',
      recommended: true
    },
    { 
      value: 'duo', 
      label: 'DUO', 
      subtitle: '2 solisti', 
      description: 'Kamberlik formaat',
      icon: <PeopleIcon />,
      color: '#8B6F47',
      recommended: false
    },
  ]

  // Intersection Observer for animations - PROMPTS
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

    const element = document.getElementById('broneeri')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Calculate form completion progress - ABILITY
  const calculateProgress = () => {
    const fields = ['eventType', 'eventDate', 'location', 'format', 'name', 'email', 'phone']
    const filledFields = fields.filter(field => formData[field] && formData[field].trim() !== '').length
    return Math.round((filledFields / fields.length) * 100)
  }

  const formProgress = calculateProgress()

  // Real-time validation - ABILITY
  const validateField = (name, value) => {
    const errors = { ...fieldErrors }
    
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (value && !emailRegex.test(value)) {
          errors.email = 'Palun sisestage kehtiv e-maili aadress'
        } else {
          delete errors.email
        }
        break
      case 'phone':
        const phoneRegex = /^[\d\s\-\+\(\)]+$/
        if (value && !phoneRegex.test(value) || (value && value.replace(/\D/g, '').length < 7)) {
          errors.phone = 'Palun sisestage kehtiv telefoninumber'
        } else {
          delete errors.phone
        }
        break
      case 'format':
        if (!value || value.trim() === '') {
          errors.format = 'Palun valige koosseisu formaat'
        } else {
          delete errors.format
        }
        break
      case 'eventDate':
        if (value) {
          const selectedDate = new Date(value)
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          if (selectedDate < today) {
            errors.eventDate = 'Kuupäev ei saa olla minevikus'
          } else {
            delete errors.eventDate
          }
        }
        break
      default:
        if (value && value.trim() === '') {
          errors[name] = 'See väli on kohustuslik'
        } else {
          delete errors[name]
        }
    }
    
    setFieldErrors(errors)
  }

  const isFormValid = () => {
    const requiredFields = ['eventType', 'eventDate', 'location', 'format', 'name', 'email', 'phone']
    const allFilled = requiredFields.every(field => formData[field] && formData[field].trim() !== '')
    const noErrors = Object.keys(fieldErrors).length === 0
    return allFilled && noErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Mark field as touched - ABILITY
    setTouchedFields({
      ...touchedFields,
      [name]: true
    })
    
    // Real-time validation - ABILITY
    validateField(name, value)
    
    // Сбрасываем сообщения об ошибке при изменении
    if (error) setError('')
    if (success) setSuccess(false)
  }

  const handleFormatSelect = (formatValue) => {
    setFormData({
      ...formData,
      format: formatValue
    })
    
    setTouchedFields({
      ...touchedFields,
      format: true
    })
    
    validateField('format', formatValue)
    
    if (error) setError('')
    if (success) setSuccess(false)
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouchedFields({
      ...touchedFields,
      [name]: true
    })
    validateField(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Проверяем, что EmailJS настроен
      if (
        !EMAILJS_CONFIG.SERVICE_ID ||
        !EMAILJS_CONFIG.TEMPLATE_ID ||
        !EMAILJS_CONFIG.PUBLIC_KEY ||
        EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key'
      ) {
        throw new Error('EmailJS не настроен. Пожалуйста, настройте конфигурацию в src/config/emailjs.js')
      }

      // Отправляем email через EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          eventType: eventTypes.find(t => t.value === formData.eventType)?.label || formData.eventType,
          eventDate: formData.eventDate,
          location: formData.location,
          format: formatOptions.find(f => f.value === formData.format) ? `${formatOptions.find(f => f.value === formData.format).label} (${formatOptions.find(f => f.value === formData.format).subtitle})` : formData.format,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || '(Puudub)',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      // Проверяем успешную отправку (EmailJS возвращает status 200 или text: 'OK')
      if (result.status === 200 || result.text === 'OK') {
        setSuccess(true)
        // Сброс формы
        setFormData({
          eventType: '',
          eventDate: '',
          location: '',
          format: '',
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setTouchedFields({})
        setFieldErrors({})
      } else {
        throw new Error('Viga päringu saatmisel. Palun proovige uuesti.')
      }
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError(
        err.message || 
        'Viga päringu saatmisel. Palun proovige uuesti või võtke otse ühendust.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      id="broneeri"
      sx={{
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 1, sm: 2 },
        background: 'linear-gradient(180deg, #FAF8F3 0%, #F5F3ED 100%)',
        color: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 20px, #1A1A1A 20px, #1A1A1A 40px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 20px, #1A1A1A 20px, #1A1A1A 40px)',
        },
      }}
    >
      {/* Art Deco Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, #D4AF37 10px, #D4AF37 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, #1A1A1A 10px, #1A1A1A 20px)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 6 }, position: 'relative' }}>
            {/* Art Deco Decorative Lines */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 2, md: 3 },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: { xs: '40px', md: '60px' },
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #D4AF37)',
                }}
              />
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  background: '#D4AF37',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                }}
              />
              <CalendarMonthIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#D4AF37', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' }} />
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  background: '#D4AF37',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                }}
              />
              <Box
                sx={{
                  width: { xs: '40px', md: '60px' },
                  height: '3px',
                  background: 'linear-gradient(90deg, #D4AF37, transparent)',
                }}
              />
            </Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "'Righteous', cursive",
                fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                color: '#D4AF37',
                textTransform: 'uppercase',
                letterSpacing: { xs: '0.05em', md: '0.15em' },
                mb: { xs: 1, md: 2 },
                px: { xs: 1, sm: 0 },
                lineHeight: 1.2,
                textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: '-30px', md: '-50px' },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: '20px', md: '30px' },
                  height: { xs: '20px', md: '30px' },
                  border: '3px solid #D4AF37',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: { xs: '-30px', md: '-50px' },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: '20px', md: '30px' },
                  height: { xs: '20px', md: '30px' },
                  border: '3px solid #D4AF37',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
                },
              }}
            >
              Broneeri Bänd Oma Üritusele
            </Typography>
            <Box
              sx={{
                position: 'relative',
                maxWidth: '700px',
                mx: 'auto',
                mb: { xs: 3, md: 4 },
                px: { xs: 2, sm: 0 },
              }}
            >
              {/* Decorative Quote Icons */}
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  left: { xs: '-15px', md: '-25px' },
                  top: '-15px',
                  fontSize: '3.5rem',
                  color: 'rgba(212, 175, 55, 0.15)',
                  transform: 'rotate(180deg)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  right: { xs: '-15px', md: '-25px' },
                  bottom: '-25px',
                  fontSize: '3.5rem',
                  color: 'rgba(212, 175, 55, 0.15)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  color: '#555',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Täida lihtne vorm ja saame sinuga ühendust 24 tunni jooksul!
              </Typography>
            </Box>
          </Box>
        </Fade>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {/* MOTIVATION: Social Proof & Benefits - Left Side */}
          <Grid item xs={12} md={4}>
            <Fade in={isVisible} timeout={1000}>
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  borderRadius: 0,
                  height: '100%',
                  background: '#FFFFFF',
                  border: '3px solid #D4AF37',
                  position: { xs: 'static', md: 'sticky' },
                  top: { md: 100 },
                  mb: { xs: 3, md: 0 },
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'visible',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  zIndex: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '8px',
                    background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, #FFFFFF 8px, #FFFFFF 16px)',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
                    '& .art-deco-corner': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Art Deco Corner Decorations */}
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderRight: 'none',
                    borderBottom: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-2px',
                      left: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderRight: 'none',
                      borderBottom: 'none',
                    },
                  }}
                />
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderLeft: 'none',
                    borderBottom: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderLeft: 'none',
                      borderBottom: 'none',
                    },
                  }}
                />
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderRight: 'none',
                    borderTop: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      left: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderRight: 'none',
                      borderTop: 'none',
                    },
                  }}
                />
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderLeft: 'none',
                    borderTop: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderLeft: 'none',
                      borderTop: 'none',
                    },
                  }}
                />
                {/* Social Proof - MOTIVATION */}
                <Box sx={{ mb: { xs: 2, md: 4 }, position: 'relative', zIndex: 1 }}>
                  <Stack spacing={{ xs: 1.5, md: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, md: 1.5 },
                        p: 2,
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        borderLeft: '4px solid #D4AF37',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          bottom: 0,
                          width: '2px',
                          background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                        },
                      }}
                    >
                      <CheckCircleIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.5rem', md: '2rem' }, flexShrink: 0, filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))' }} />
                      <Box>
                        <Typography variant="h6" sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.25rem' }, fontFamily: "'Righteous', cursive" }}>
                          200+ Õnnestunud Üritust
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, color: '#666' }}>
                          Professionaalne teenus
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, md: 1.5 },
                        p: 2,
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        borderLeft: '4px solid #D4AF37',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          bottom: 0,
                          width: '2px',
                          background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                        },
                      }}
                    >
                      <StarIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.5rem', md: '2rem' }, flexShrink: 0, filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))' }} />
                      <Box>
                        <Typography variant="h6" sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.25rem' }, fontFamily: "'Righteous', cursive" }}>
                          4.9/5 Keskmine Hinnang
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, color: '#666' }}>
                          Kõrge kvaliteet
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, md: 1.5 },
                        p: 2,
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        borderLeft: '4px solid #D4AF37',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          bottom: 0,
                          width: '2px',
                          background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                        },
                      }}
                    >
                      <VerifiedIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.5rem', md: '2rem' }, flexShrink: 0, filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))' }} />
                      <Box>
                        <Typography variant="h6" sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.25rem' }, fontFamily: "'Righteous', cursive" }}>
                          100% Rahulolu
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, color: '#666' }}>
                          Tagatud kvaliteet
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>

                {/* Art Deco Divider */}
                <Box
                  sx={{
                    my: { xs: 2, md: 3 },
                    height: '2px',
                    background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, transparent 8px, transparent 16px)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '12px',
                      height: '12px',
                      border: '2px solid #D4AF37',
                      background: '#FFFFFF',
                      borderRadius: '50%',
                    },
                  }}
                />

                {/* Benefits - MOTIVATION */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1A1A1A',
                      mb: { xs: 1.5, md: 2 },
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontFamily: "'Righteous', cursive",
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      position: 'relative',
                      pl: 2,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '4px',
                        height: '60%',
                        background: '#D4AF37',
                        boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                      },
                    }}
                  >
                    Mis saad?
                  </Typography>
                  <Stack spacing={{ xs: 1, md: 1.5 }}>
                    <Chip
                      icon={<AccessTimeIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#D4AF37' }} />}
                      label="Kiire vastus 24h jooksul"
                      sx={{
                        bgcolor: 'rgba(212, 175, 55, 0.1)',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        height: { xs: '32px', md: '36px' },
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        '&:hover': {
                          bgcolor: 'rgba(212, 175, 55, 0.2)',
                        },
                      }}
                    />
                    <Chip
                      icon={<TrendingUpIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#D4AF37' }} />}
                      label="Tasuta konsultatsioon"
                      sx={{
                        bgcolor: 'rgba(212, 175, 55, 0.1)',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        height: { xs: '32px', md: '36px' },
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        '&:hover': {
                          bgcolor: 'rgba(212, 175, 55, 0.2)',
                        },
                      }}
                    />
                    <Chip
                      icon={<CheckCircleIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#D4AF37' }} />}
                      label="Kohandatud pakkumine"
                      sx={{
                        bgcolor: 'rgba(212, 175, 55, 0.1)',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        height: { xs: '32px', md: '36px' },
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        '&:hover': {
                          bgcolor: 'rgba(212, 175, 55, 0.2)',
                        },
                      }}
                    />
                  </Stack>
                </Box>
              </Paper>
            </Fade>
          </Grid>

          {/* Form - Right Side */}
          <Grid item xs={12} md={8}>
            <Grow in={isVisible} timeout={1200}>
              <Paper
                elevation={8}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  borderRadius: 0,
                  position: 'relative',
                  background: '#FFFFFF',
                  border: '3px solid #D4AF37',
                  overflow: 'visible',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '8px',
                    background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 8px, #FFFFFF 8px, #FFFFFF 16px)',
                  },
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
                    '& .art-deco-corner': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Art Deco Corner Decorations */}
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderRight: 'none',
                    borderBottom: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-2px',
                      left: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderRight: 'none',
                      borderBottom: 'none',
                    },
                  }}
                />
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderLeft: 'none',
                    borderBottom: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderLeft: 'none',
                      borderBottom: 'none',
                    },
                  }}
                />
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderRight: 'none',
                    borderTop: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      left: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderRight: 'none',
                      borderTop: 'none',
                    },
                  }}
                />
                <Box
                  className="art-deco-corner"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    width: '40px',
                    height: '40px',
                    border: '2px solid',
                    borderColor: '#D4AF37',
                    borderLeft: 'none',
                    borderTop: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      border: '2px solid',
                      borderColor: '#D4AF37',
                      borderLeft: 'none',
                      borderTop: 'none',
                    },
                  }}
                />
                {/* Progress Bar - ABILITY (Art Deco Style) */}
                <Box sx={{ mb: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, fontSize: { xs: '0.75rem', md: '0.875rem' }, color: '#1A1A1A', fontFamily: "'Righteous', cursive", textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Vormi täitmine
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#D4AF37', fontWeight: 700, fontSize: { xs: '0.875rem', md: '1rem' }, fontFamily: "'Righteous', cursive" }}>
                      {formProgress}%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: '10px', md: '12px' },
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '2px solid #D4AF37',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'repeating-linear-gradient(180deg, #D4AF37 0px, #D4AF37 4px, transparent 4px, transparent 8px)',
                      },
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={formProgress}
                      sx={{
                        height: '100%',
                        bgcolor: 'transparent',
                        '& .MuiLinearProgress-bar': {
                          background: formProgress <= 30
                            ? 'repeating-linear-gradient(45deg, #C41E3A 0px, #C41E3A 4px, #E04A5A 4px, #E04A5A 8px)'
                            : 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 4px, #E5BF50 4px, #E5BF50 8px)',
                          transition: 'width 1s ease',
                        },
                      }}
                    />
                  </Box>
                </Box>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
                    {/* Event Type */}
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Ürituse Tüüp *"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={touchedFields.eventType && !!fieldErrors.eventType}
                        helperText={touchedFields.eventType && fieldErrors.eventType}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EventIcon sx={{ color: formData.eventType ? '#D4AF37' : '#999', fontSize: { xs: '1rem', md: '1.25rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                          },
                          '& .MuiFormHelperText-root': {
                            fontSize: { xs: '0.65rem', md: '0.7rem' },
                            mt: 0.5,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>Vali ürituse tüüp</em>
                        </MenuItem>
                        {eventTypes.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              {option.icon}
                              {option.label}
                            </Box>
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    {/* Event Date */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="date"
                        label="Kuupäev *"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        error={touchedFields.eventDate && !!fieldErrors.eventDate}
                        helperText={touchedFields.eventDate && fieldErrors.eventDate}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarMonthIcon sx={{ color: formData.eventDate ? '#D4AF37' : '#999', fontSize: { xs: '1rem', md: '1.25rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                          },
                          '& .MuiFormHelperText-root': {
                            fontSize: { xs: '0.65rem', md: '0.7rem' },
                            mt: 0.5,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      />
                    </Grid>

                    {/* Format Selection */}
                    <Grid item xs={12}>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                            color: '#666',
                            mb: 1,
                            fontWeight: 500,
                          }}
                        >
                          Koosseisu formaat *
                        </Typography>
                        <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                          {formatOptions.map((option) => {
                            const isSelected = formData.format === option.value
                            return (
                              <Grid item xs={12} sm={4} key={option.value}>
                                <Box
                                  onClick={() => handleFormatSelect(option.value)}
                                  sx={{
                                    position: 'relative',
                                    p: { xs: 1.5, sm: 2 },
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    border: isSelected ? `2px solid ${option.color}` : '2px solid rgba(212, 175, 55, 0.2)',
                                    background: isSelected
                                      ? `linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(244, 103, 51, 0.05) 100%)`
                                      : 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                      transform: 'translateY(-3px)',
                                      borderColor: option.color,
                                      boxShadow: `0 8px 24px rgba(212, 175, 55, 0.2), 0 0 0 1px ${option.color}40`,
                                    },
                                    ...(isSelected && {
                                      boxShadow: `0 8px 24px ${option.color}40, 0 0 0 1px ${option.color}60`,
                                    }),
                                  }}
                                >
                                  {/* Recommended Badge */}
                                  {option.recommended && (
                                    <Chip
                                      icon={<LocalOfferIcon sx={{ fontSize: '0.875rem !important' }} />}
                                      label="Soovitame"
                                      size="small"
                                      sx={{
                                        position: 'absolute',
                                        top: -10,
                                        right: 8,
                                        height: '22px',
                                        fontSize: '0.65rem',
                                        fontWeight: 600,
                                        background: 'linear-gradient(135deg, #D4AF37 0%, #F46733 100%)',
                                        color: '#fff',
                                        boxShadow: '0 2px 8px rgba(212, 175, 55, 0.4)',
                                        '& .MuiChip-icon': {
                                          color: '#fff',
                                        },
                                      }}
                                    />
                                  )}
                                  
                                  {/* Icon */}
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: { xs: '40px', sm: '48px' },
                                      height: { xs: '40px', sm: '48px' },
                                      borderRadius: '50%',
                                      mb: 1,
                                      background: isSelected
                                        ? `linear-gradient(135deg, ${option.color}20 0%, ${option.color}10 100%)`
                                        : 'rgba(212, 175, 55, 0.1)',
                                      transition: 'all 0.3s ease',
                                      ...(isSelected && {
                                        boxShadow: `0 0 20px ${option.color}40`,
                                      }),
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        color: isSelected ? option.color : '#999',
                                        fontSize: { xs: '1.5rem', sm: '1.75rem' },
                                        transition: 'all 0.3s ease',
                                        filter: isSelected ? 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))' : 'none',
                                      }}
                                    >
                                      {option.icon}
                                    </Box>
                                  </Box>

                                  {/* Label */}
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                                      fontWeight: 700,
                                      color: isSelected ? option.color : '#1A1A1A',
                                      mb: 0.5,
                                      transition: 'color 0.3s ease',
                                    }}
                                  >
                                    {option.label}
                                  </Typography>

                                  {/* Subtitle */}
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      fontSize: { xs: '0.75rem', sm: '0.85rem' },
                                      fontWeight: 600,
                                      color: '#666',
                                      mb: 0.5,
                                    }}
                                  >
                                    {option.subtitle}
                                  </Typography>

                                  {/* Description */}
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                      color: '#888',
                                      lineHeight: 1.4,
                                    }}
                                  >
                                    {option.description}
                                  </Typography>

                                  {/* Selection Indicator */}
                                  {isSelected && (
                                    <Box
                                      sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${option.color} 0%, ${option.color}dd 100%)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: `0 0 10px ${option.color}60`,
                                        transition: 'all 0.3s ease',
                                        animation: 'funkPulse 2s ease-in-out infinite',
                                        '@keyframes funkPulse': {
                                          '0%, 100%': {
                                            transform: 'scale(1)',
                                            boxShadow: `0 0 10px ${option.color}60`,
                                          },
                                          '50%': {
                                            transform: 'scale(1.15)',
                                            boxShadow: `0 0 20px ${option.color}80`,
                                          },
                                        },
                                      }}
                                    >
                                      <CheckCircleIcon
                                        sx={{
                                          fontSize: '0.875rem',
                                          color: '#fff',
                                        }}
                                      />
                                    </Box>
                                  )}
                                </Box>
                              </Grid>
                            )
                          })}
                        </Grid>
                        {touchedFields.format && fieldErrors.format && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: '#d32f2f',
                              fontSize: { xs: '0.65rem', md: '0.7rem' },
                              mt: 0.5,
                              display: 'block',
                            }}
                          >
                            {fieldErrors.format}
                          </Typography>
                        )}
                      </Box>
                    </Grid>

                    {/* Location */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Asukoht *"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Linn, koht (nt. Tallinn, Saku Suurhall)"
                        required
                        error={touchedFields.location && !!fieldErrors.location}
                        helperText={touchedFields.location && fieldErrors.location}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationOnIcon sx={{ color: formData.location ? '#D4AF37' : '#999', fontSize: { xs: '1rem', md: '1.25rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                          },
                          '& .MuiFormHelperText-root': {
                            fontSize: { xs: '0.65rem', md: '0.7rem' },
                            mt: 0.5,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Teie Nimi *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Ees- ja perekonnanimi"
                        required
                        error={touchedFields.name && !!fieldErrors.name}
                        helperText={touchedFields.name && fieldErrors.name}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ color: formData.name ? '#D4AF37' : '#999', fontSize: { xs: '1rem', md: '1.25rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                          },
                          '& .MuiFormHelperText-root': {
                            fontSize: { xs: '0.65rem', md: '0.7rem' },
                            mt: 0.5,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="email"
                        label="E-mail *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="teie@email.ee"
                        required
                        error={touchedFields.email && !!fieldErrors.email}
                        helperText={touchedFields.email ? (fieldErrors.email || 'Kasutame seda sinuga ühenduse võtmiseks') : ''}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: formData.email && !fieldErrors.email ? '#D4AF37' : '#999', fontSize: { xs: '1rem', md: '1.25rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                          },
                          '& .MuiFormHelperText-root': {
                            fontSize: { xs: '0.65rem', md: '0.7rem' },
                            mt: 0.5,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      />
                    </Grid>

                    {/* Phone */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="tel"
                        label="Telefon *"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+372 5XXX XXXX"
                        required
                        error={touchedFields.phone && !!fieldErrors.phone}
                        helperText={touchedFields.phone ? (fieldErrors.phone || 'Võimalusel jäta kontaktnumber') : ''}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon sx={{ color: formData.phone && !fieldErrors.phone ? '#D4AF37' : '#999', fontSize: { xs: '1rem', md: '1.25rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                          },
                          '& .MuiFormHelperText-root': {
                            fontSize: { xs: '0.65rem', md: '0.7rem' },
                            mt: 0.5,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      />
                    </Grid>

                    {/* Message */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        label="Lisainfo / Soovid"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Kirjeldage oma üritust ja ootusi... (valikuline)"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: { xs: 0.75, md: 0.5 } }}>
                              <InfoIcon sx={{ color: '#999', fontSize: { xs: '0.9rem', md: '1rem' } }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.8rem', md: '0.875rem' },
                          },
                          '& .MuiOutlinedInput-input': {
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            py: { xs: 0.75, md: 1 },
                            lineHeight: 1.4,
                          },
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#D4AF37',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#D4AF37',
                            },
                          },
                        }}
                      />
                    </Grid>

                    {/* Success Message */}
                    {success && (
                      <Grid item xs={12}>
                        <Fade in={success}>
                          <Alert
                            severity="success"
                            onClose={() => setSuccess(false)}
                            icon={<CheckCircleIcon />}
                            sx={{
                              bgcolor: 'rgba(76, 175, 80, 0.1)',
                              border: '2px solid rgba(76, 175, 80, 0.3)',
                              '& .MuiAlert-icon': {
                                color: '#4CAF50',
                              },
                            }}
                          >
                            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 700 }}>
                              Täname! Päring saadetud
                            </Typography>
                            <Typography variant="body2">
                              Võtame sinuga ühendust 24 tunni jooksul!
                            </Typography>
                          </Alert>
                        </Fade>
                      </Grid>
                    )}

                    {/* Error Message */}
                    {error && (
                      <Grid item xs={12}>
                        <Fade in={!!error}>
                          <Alert severity="error" onClose={() => setError('')}>
                            {error}
                          </Alert>
                        </Fade>
                      </Grid>
                    )}

                    {/* Submit Button - PROMPTS (Art Deco Style) */}
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />}
                        disabled={loading || !isFormValid()}
                        sx={{
                          py: { xs: 1.25, md: 1.5 },
                          minHeight: { xs: '42px', md: '48px' },
                          bgcolor: isFormValid() ? '#D4AF37' : '#ccc',
                          color: '#1A1A1A',
                          fontWeight: 700,
                          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                          textTransform: 'uppercase',
                          letterSpacing: '0.15em',
                          borderRadius: 0,
                          fontFamily: "'Righteous', cursive",
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          touchAction: 'manipulation',
                          border: '3px solid #1A1A1A',
                          boxShadow: isFormValid() ? '0 4px 20px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)' : 'none',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            transition: 'left 0.5s ease',
                          },
                          '&:hover': {
                            bgcolor: isFormValid() ? '#E5BF50' : '#ccc',
                            transform: isFormValid() ? 'translateY(-3px)' : 'none',
                            boxShadow: isFormValid() ? '0 8px 30px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)' : 'none',
                            '&::before': {
                              left: '100%',
                            },
                          },
                          '&:active': {
                            transform: 'translateY(-1px)',
                          },
                          '&:disabled': {
                            bgcolor: '#ccc',
                            color: '#666',
                            borderColor: '#999',
                          },
                        }}
                      >
                        {loading ? 'Saadetakse...' : isFormValid() ? 'Saada Päring' : 'Täida kõik väljad'}
                      </Button>
                    </Grid>

                    {/* Trust Indicator - MOTIVATION */}
                    <Grid item xs={12}>
                      <Box sx={{ textAlign: 'center', mt: { xs: 1.5, md: 2 } }}>
                        <Stack 
                          direction={{ xs: 'column', sm: 'row' }} 
                          spacing={{ xs: 0.5, sm: 1 }} 
                          justifyContent="center" 
                          alignItems="center" 
                          flexWrap="wrap"
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <VerifiedIcon sx={{ color: '#D4AF37', fontSize: { xs: '1rem', md: '1.2rem' } }} />
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}>
                              Teie andmed on turvalised
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mx: { xs: 0, sm: 1 }, display: { xs: 'none', sm: 'block' } }}>
                            •
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.85rem' } }}>
                            Vastame 24h jooksul
                          </Typography>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Booking

