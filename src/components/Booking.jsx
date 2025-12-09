import { useState } from 'react'
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
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Booking = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    location: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const eventTypes = [
    { value: 'corporate', label: 'Korporatiiv' },
    { value: 'wedding', label: 'Pulmad' },
    { value: 'festival', label: 'Festival' },
    { value: 'private', label: 'Eraüritus' },
    { value: 'club', label: 'Klubi/Kontsert' },
    { value: 'other', label: 'Muu' },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Сбрасываем сообщения об ошибке при изменении
    if (error) setError('')
    if (success) setSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Проверяем, что EmailJS настроен
      if (
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
          guests: formData.guests,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || '(Puudub)',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (result.status === 200) {
        setSuccess(true)
        // Сброс формы
        setFormData({
          eventType: '',
          eventDate: '',
          location: '',
          guests: '',
          name: '',
          email: '',
          phone: '',
          message: ''
        })
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
        py: 8,
        px: 2,
        background: 'var(--light-gray)',
        color: 'var(--gray)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          📅 Broneeri Bänd Oma Üritusele
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Event Type */}
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Ürituse Tüüp *"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    <em>Vali ürituse tüüp</em>
                  </MenuItem>
                  {eventTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
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
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              {/* Number of Guests */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Eeldatav külaliste arv *"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="nt. 150"
                  required
                  inputProps={{ min: 1 }}
                />
              </Grid>

              {/* Location */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Asukoht *"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Linn, koht"
                  required
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
                  placeholder="Ees- ja perekonnanimi"
                  required
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
                  placeholder="teie@email.ee"
                  required
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
                  placeholder="+372 5XXX XXXX"
                  required
                />
              </Grid>

              {/* Message */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Lisainfo / Soovid"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Kirjeldage oma üritust ja ootusi..."
                />
              </Grid>

              {/* Success Message */}
              {success && (
                <Grid item xs={12}>
                  <Alert severity="success" onClose={() => setSuccess(false)}>
                    Täname! Teie päring on saadetud. Võtame teiega ühendust peagi.
                  </Alert>
                </Grid>
              )}

              {/* Error Message */}
              {error && (
                <Grid item xs={12}>
                  <Alert severity="error" onClose={() => setError('')}>
                    {error}
                  </Alert>
                </Grid>
              )}

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  disabled={loading}
                  sx={{ py: 1.5 }}
                >
                  {loading ? 'Saadetakse...' : 'Saada Päring'}
                </Button>
              </Grid>

              {/* Required Fields Note */}
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  * Kohustuslikud väljad
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  )
}

export default Booking

