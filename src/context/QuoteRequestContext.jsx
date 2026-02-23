import { createContext, useContext, useState, useCallback } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  InputAdornment,
} from '@mui/material'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import SendIcon from '@mui/icons-material/Send'
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
  const [request, setRequest] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const openQuotePopup = useCallback(() => {
    setOpen(true)
    setRequest('')
    setEmail('')
    setPhone('')
    setError('')
    setSuccess(false)
  }, [])

  const closePopup = useCallback(() => {
    setOpen(false)
    setRequest('')
    setEmail('')
    setPhone('')
    setError('')
    setSuccess(false)
  }, [])

  const hasContact = () => {
    const e = (email || '').trim()
    const p = (phone || '').replace(/\D/g, '')
    return (e && e.includes('@')) || p.length >= 7
  }

  const validate = () => {
    const r = (request || '').trim()
    if (!r || r.length < 3) {
      setError('Palun kirjeldage oma päringut lühidalt (vähemalt 3 tähemärki)')
      return false
    }
    if (!hasContact()) {
      setError('Palun sisestage e-mail või telefon (vähemalt üks kontakt)')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.trim() && !emailRegex.test(email.trim())) {
      setError('Palun sisestage kehtiv e-maili aadress')
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
      await TelegramService.notifyQuoteRequest({
        request: request.trim(),
        email: email.trim() || undefined,
        phone: phone.trim() || undefined,
      })
      setSuccess(true)
      setTimeout(closePopup, 2000)
    } catch (err) {
      setError(err.message || 'Viga saatmisel. Palun proovige uuesti.')
    } finally {
      setLoading(false)
    }
  }

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
            background: 'linear-gradient(180deg, #1A0F1A 0%, #0A0A0A 100%)',
            border: '2px solid rgba(244, 103, 51, 0.4)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'Righteous', cursive",
            color: '#D4AF37',
            fontSize: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            pb: 2,
          }}
        >
          Küsi pakkumist
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ pt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Lühike päring *"
              placeholder="Kirjeldage oma üritust ja soove lühidalt..."
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              required
              disabled={loading || success}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.4)' },
                  '&:hover fieldset': { borderColor: '#D4AF37' },
                  '&.Mui-focused fieldset': { borderColor: '#F46733' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#D4AF37' },
              }}
            />
            <TextField
              fullWidth
              type="email"
              label="E-mail (valikuline)"
              placeholder="teie@email.ee"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading || success}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'rgba(212, 175, 55, 0.6)', fontSize: '1.2rem' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.4)' },
                  '&:hover fieldset': { borderColor: '#D4AF37' },
                  '&.Mui-focused fieldset': { borderColor: '#F46733' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#D4AF37' },
              }}
            />
            <TextField
              fullWidth
              type="tel"
              label="Telefon (valikuline)"
              placeholder="+372 5XXX XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading || success}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: 'rgba(212, 175, 55, 0.6)', fontSize: '1.2rem' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.4)' },
                  '&:hover fieldset': { borderColor: '#D4AF37' },
                  '&.Mui-focused fieldset': { borderColor: '#F46733' },
                },
                '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#D4AF37' },
              }}
            />
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', mt: 1, display: 'block' }}>
              * Vähemalt üks kontakt (e-mail või telefon) on vajalik
            </Typography>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }} onClose={() => setError('')}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Täname! Võtame peagi ühendust.
              </Alert>
            )}
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
            <Button onClick={closePopup} disabled={loading} sx={{ color: 'rgba(255,255,255,0.8)' }}>
              Tühista
            </Button>
            <Button
              type="submit"
              variant="contained"
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              disabled={loading || success}
              sx={{
                background: 'linear-gradient(135deg, #F46733, #D4AF37)',
                color: '#1A1A1A',
                fontWeight: 700,
                fontFamily: "'Righteous', cursive",
                '&:hover': {
                  background: 'linear-gradient(135deg, #FF7744, #E5BF50)',
                },
              }}
            >
              {loading ? 'Saadetakse...' : success ? 'Saadetud!' : 'Saada päring'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </QuoteRequestContext.Provider>
  )
}
