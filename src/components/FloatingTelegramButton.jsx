import { useState } from 'react'
import {
  Box,
  IconButton,
  Tooltip,
  Popover,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material'
import { TelegramService } from '../services/telegramService'

// Telegram logo SVG
const TelegramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    sx={{ width: 28, height: 28 }}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const FloatingTelegramButton = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setEmail('')
    setError('')
    setSuccess(false)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setEmail('')
    setError('')
    setSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@')) {
      setError('Palun sisestage kehtiv e-maili aadress')
      return
    }

    setLoading(true)
    try {
      await TelegramService.notifySiteContact(email)
      setSuccess(true)
      setEmail('')
      setTimeout(handleClose, 2000)
    } catch (err) {
      setError(err.message || 'Viga saatmisel. Palun proovige uuesti.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1400,
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-6px)' },
          },
          animation: 'float 2.5s ease-in-out infinite',
        }}
      >
        <Tooltip title="Võta ühendust" arrow placement="left">
          <IconButton
            onClick={handleClick}
            sx={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #0088cc 0%, #229ED9 100%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(0, 136, 204, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #229ED9 0%, #0088cc 100%)',
                boxShadow: '0 6px 28px rgba(0, 136, 204, 0.6)',
                transform: 'scale(1.08)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: -2,
              mr: 2,
              p: 2.5,
              minWidth: 280,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            },
          },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontFamily: "'Righteous', cursive",
            color: '#1A1A1A',
          }}
        >
          Võta ühendust
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
          Sisesta oma e-mail ja võtame ühendust
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            type="email"
            placeholder="teie@email.ee"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            fullWidth
            size="small"
            disabled={loading || success}
            error={!!error}
            helperText={error}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(0,0,0,0.02)',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading || success}
            sx={{
              background: 'linear-gradient(135deg, #0088cc 0%, #229ED9 100%)',
              fontWeight: 600,
              py: 1.2,
              textTransform: 'none',
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : success ? (
              'Saadetud!'
            ) : (
              'Saada'
            )}
          </Button>

          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Täname! Võtame peagi ühendust.
            </Alert>
          )}
        </Box>
      </Popover>
    </>
  )
}

export default FloatingTelegramButton
