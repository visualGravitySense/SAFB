import { createContext, useContext, useState, useCallback } from 'react'
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Box,
  Stack,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { TelegramService } from '../services/telegramService'

const QuoteRequestContext = createContext(null)

export const useQuoteRequest = () => {
  const ctx = useContext(QuoteRequestContext)
  if (!ctx) {
    throw new Error('useQuoteRequest must be used within QuoteRequestProvider')
  }
  return ctx
}

export const QuoteRequestProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const openQuotePopup = useCallback(() => {
    setOpen(true)
    setName('')
    setContact('')
    setError('')
    setSuccess(false)
  }, [])

  const closePopup = useCallback(() => {
    setOpen(false)
    setName('')
    setContact('')
    setError('')
    setSuccess(false)
  }, [])

  const parseContact = (value) => {
    const v = (value || '').trim()
    if (!v) return { email: undefined, phone: undefined }
    if (v.includes('@')) {
      return { email: v, phone: undefined }
    }
    return { email: undefined, phone: v }
  }

  const validate = () => {
    const n = (name || '').trim()
    const c = (contact || '').trim()
    if (!n || n.length < 2) {
      setError('Palun sisestage oma nimi')
      return false
    }
    if (!c) {
      setError('Palun sisestage telefon või e-mail')
      return false
    }
    if (c.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(c)) {
        setError('Palun sisestage kehtiv e-maili aadress')
        return false
      }
    } else if (c.replace(/\D/g, '').length < 7) {
      setError('Palun sisestage kehtiv telefoninumber')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!validate()) return

    setLoading(true)
    try {
      const { email, phone } = parseContact(contact)
      await TelegramService.notifyQuoteRequest({
        name: name.trim(),
        request: 'Kuupäeva kontrollimine',
        email: email || undefined,
        phone: phone || undefined,
      })
      setSuccess(true)
      setTimeout(closePopup, 2500)
    } catch (err) {
      setError(err.message || 'Viga saatmisel. Palun proovige uuesti.')
    } finally {
      setLoading(false)
    }
  }

  const benefits = [
    'Vastame 24h jooksul',
    'Ilma kohustuseta',
    'Tasuta hinnapakkumine',
  ]

  return (
    <QuoteRequestContext.Provider value={{ openQuotePopup }}>
      {children}
      <Dialog
        open={open}
        onClose={closePopup}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(180deg, #2C2419 0%, #1A1510 100%)',
            borderRadius: 3,
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
            overflow: 'visible',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* Music note decoration */}
          <MusicNoteIcon
            sx={{
              position: 'absolute',
              top: 16,
              right: 24,
              fontSize: 48,
              color: 'rgba(212, 175, 55, 0.12)',
              pointerEvents: 'none',
            }}
          />

          <form onSubmit={handleSubmit}>
            <DialogContent sx={{ pt: 4, pb: 2, px: 4 }}>
              {/* Red urgency badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  mb: 2,
                  borderRadius: 2,
                  bgcolor: '#C41E3A',
                  color: '#FFFFFF',
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: '#FFFFFF',
                  }}
                />
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                  2026 KALENDER TÄITUB KIIRESTI
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                sx={{
                  fontFamily: "'Righteous', cursive",
                  fontSize: { xs: '1.5rem', sm: '1.8rem' },
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Kas sinu kuupäev on veel vaba?
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Jäta oma kontakt — vastame{' '}
                <Box component="strong" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                  24 tunni jooksul
                </Box>{' '}
                koos hinnapakkumise ja vabade kuupäevadega. Ilma kohustuseta.
              </Typography>

              {/* Input fields - side by side */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Teie nimi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading || success}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(60, 50, 40, 0.6)',
                      borderRadius: 2,
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.15)' },
                      '&:hover fieldset': { borderColor: 'rgba(212, 175, 55, 0.4)' },
                      '&.Mui-focused fieldset': { borderColor: '#D4AF37', borderWidth: 1 },
                      '& input': { color: '#FFFFFF', '&::placeholder': { opacity: 0.7 } },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Telefon või e-mail"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  disabled={loading || success}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(60, 50, 40, 0.6)',
                      borderRadius: 2,
                      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.15)' },
                      '&:hover fieldset': { borderColor: 'rgba(212, 175, 55, 0.4)' },
                      '&.Mui-focused fieldset': { borderColor: '#D4AF37', borderWidth: 1 },
                      '& input': { color: '#FFFFFF', '&::placeholder': { opacity: 0.7 } },
                    },
                  }}
                />
              </Stack>

              {/* CTA Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={loading ? <CircularProgress size={22} color="inherit" /> : <ArrowForwardIcon />}
                disabled={loading || success}
                sx={{
                  py: 1.75,
                  borderRadius: 2,
                  fontSize: '1rem',
                  fontWeight: 700,
                  fontFamily: "'Righteous', cursive",
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                  color: '#1A1510',
                  boxShadow: '0 4px 20px rgba(244, 103, 51, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FF7744, #E5BF50)',
                    boxShadow: '0 6px 24px rgba(244, 103, 51, 0.5)',
                  },
                }}
              >
                {loading ? 'Saadetakse...' : success ? 'Saadetud!' : 'Kontrolli kuupäeva'}
              </Button>

              {/* Benefit checkmarks */}
              <Stack
                direction="row"
                flexWrap="wrap"
                spacing={{ xs: 1, sm: 2 }}
                sx={{ mt: 3, justifyContent: 'center', gap: 1 }}
              >
                {benefits.map((text, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: '1rem', color: '#4CAF50' }} />
                    <Typography component="span" sx={{ fontSize: '0.8rem' }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {error && (
                <Alert severity="error" sx={{ mt: 2 }} onClose={() => setError('')}>
                  {error}
                </Alert>
              )}
              {success && (
                <Alert severity="success" sx={{ mt: 2 }} icon={<CheckCircleIcon />}>
                  Täname! Võtame peagi ühendust.
                </Alert>
              )}
            </DialogContent>
          </form>
        </Box>
      </Dialog>
    </QuoteRequestContext.Provider>
  )
}
