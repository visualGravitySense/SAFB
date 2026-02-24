import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Chip,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EventIcon from '@mui/icons-material/Event'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import bandHero from '../img/band-hero-1.jpg'
import { useQuoteRequest } from '../context/QuoteRequestContext'

const POPUP_DELAY_MS = 30000 // 30 секунд
const STORAGE_KEY = 'safb_leadmagnet_popup_shown'

const LeadMagnetPopup = () => {
  const { openQuotePopup } = useQuoteRequest()
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), POPUP_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!ready) return
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY)
    if (alreadyShown) return
    setOpen(true)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }, [ready])

  const handleCta = () => {
    setOpen(false)
    openQuotePopup()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
          background: '#0F0F0F',
          border: '2px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(244, 103, 51, 0.15)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 140,
          backgroundImage: `url(${bandHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(15,15,15,0.95) 100%)',
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'rgba(255,255,255,0.8)',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ position: 'absolute', bottom: 12, left: 20, right: 20 }}>
          <Chip
            icon={<CardGiftcardIcon sx={{ fontSize: '0.9rem !important' }} />}
            label="Kink: DJ Set"
            size="small"
            sx={{
              bgcolor: 'rgba(212, 175, 55, 0.3)',
              color: '#D4AF37',
              fontWeight: 700,
              border: '1px solid rgba(212, 175, 55, 0.6)',
            }}
          />
          <Chip
            icon={<ScheduleIcon sx={{ fontSize: '0.9rem !important' }} />}
            label="48 tundi"
            size="small"
            sx={{
              ml: 1,
              bgcolor: 'rgba(244, 103, 51, 0.3)',
              color: '#F46733',
              fontWeight: 700,
              border: '1px solid rgba(244, 103, 51, 0.6)',
            }}
          />
        </Box>
      </Box>

      <DialogContent sx={{ pt: 2, pb: 1 }}>
        <Typography
          sx={{
            fontFamily: "'Righteous', cursive",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#FFFFFF',
            mb: 1.5,
          }}
        >
          Terve õhtu võtme all: Live funk + DJ kingiks!
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}
        >
          Broneerige SA Funk Band esinemise kuupäev 48 tunni jooksul pärast esimest päringut ja saate täispika DJ-seti vaheaegadeks tasuta.
        </Typography>
        <Typography
          sx={{
            fontSize: '0.7rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
            mt: 1,
          }}
        >
          * Pakkumine kehtib täisprogrammi broneerimisel.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          variant="contained"
          size="medium"
          startIcon={<EventIcon />}
          onClick={handleCta}
          data-button-label="Lead Magnet Popup - Tea vaba kuupäev"
          sx={{
            px: 3,
            py: 1.2,
            fontWeight: 700,
            fontFamily: "'Righteous', cursive",
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #F46733, #D4AF37)',
            color: '#FFFFFF',
            borderRadius: '10px',
            '&:hover': {
              background: 'linear-gradient(135deg, #FF7744, #E5BF50)',
            },
          }}
        >
          Tea vaba kuupäev
        </Button>
        <Button onClick={handleClose} sx={{ color: 'rgba(255,255,255,0.6)' }}>
          Hiljem
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LeadMagnetPopup
