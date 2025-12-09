import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EventIcon from '@mui/icons-material/Event'
import TicketIcon from '@mui/icons-material/ConfirmationNumber'
import BlockIcon from '@mui/icons-material/Block'

const Events = () => {
  const events = [
    {
      date: '15. DETS 2024',
      title: 'Jõulukontsert',
      location: 'Saku Suurhall, Tallinn',
      soldOut: false,
      ticketLink: '#',
    },
    {
      date: '31. DETS 2024',
      title: 'Aastavahetuse Pidu',
      location: 'Privaat Üritus',
      soldOut: true,
    },
    {
      date: '20. JAAN 2025',
      title: 'Jazz Funk Night',
      location: 'Philly Joe\'s, Tallinn',
      soldOut: false,
      ticketLink: '#',
    },
  ]

  const handleTicketClick = (link, soldOut) => {
    if (!soldOut && link) {
      // Здесь можно добавить логику перехода на страницу покупки билетов
      window.open(link, '_blank')
    }
  }

  return (
    <Box
      id="kontserdid"
      sx={{
        py: 8,
        px: 2,
        background: 'var(--light-gray)',
        color: 'var(--gray)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 5 }}
        >
          🎪 Tulevased Kontserdid
        </Typography>

        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '4px solid',
                  borderLeftColor: 'primary.main',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                    <EventIcon color="secondary" fontSize="small" />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                      }}
                    >
                      {event.date}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      fontSize: '1.3rem',
                      color: 'text.primary',
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <LocationOnIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: '0.9rem' }}
                    >
                      {event.location}
                    </Typography>
                  </Box>

                  {event.soldOut && (
                    <Chip
                      icon={<BlockIcon />}
                      label="Välja müüdud"
                      color="error"
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  )}
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  {event.soldOut ? (
                    <Button
                      fullWidth
                      variant="outlined"
                      disabled
                      startIcon={<BlockIcon />}
                      sx={{
                        py: 1.2,
                        borderColor: 'error.main',
                        color: 'error.main',
                      }}
                    >
                      Välja müüdud
                    </Button>
                  ) : (
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<TicketIcon />}
                      onClick={() => handleTicketClick(event.ticketLink, event.soldOut)}
                      sx={{ py: 1.2 }}
                    >
                      Osta Piletid
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Events

