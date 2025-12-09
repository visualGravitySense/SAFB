import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Stack,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import AppleIcon from '@mui/icons-material/Apple'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import HeadphonesIcon from '@mui/icons-material/Headphones'

const Music = () => {
  const [playingTrack, setPlayingTrack] = useState(null)

  const tracks = [
    { title: 'Respect The Funk', album: 'Blind Date' },
    { title: 'We Need To Talk', album: 'We Need To Talk' },
    { title: 'Groove Station', album: 'Blind Date' }
  ]

  const handlePlay = (index) => {
    if (playingTrack === index) {
      setPlayingTrack(null)
    } else {
      setPlayingTrack(index)
    }
  }

  const handleVideoClick = () => {
    alert('Siin oleks YouTube/Vimeo video embedded')
  }

  return (
    <Box
      id="muusika"
      sx={{
        py: 8,
        px: 2,
        background: 'var(--black)',
        color: 'var(--white)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 5 }}
        >
          🎵 Kuula Meie Muusikat
        </Typography>

        {/* Video Container */}
        <Box
          sx={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            background: 'var(--gray)',
            borderRadius: 2,
            mb: 4,
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.9,
            },
          }}
        >
          <Box
            onClick={handleVideoClick}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, secondary.main, primary.main)',
              color: 'white',
              fontSize: '4rem',
            }}
          >
            <PlayArrowIcon sx={{ fontSize: '5rem' }} />
          </Box>
        </Box>

        {/* Music Player */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 4,
            background: 'var(--gray)',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <MusicNoteIcon />
            Populaarsed Palad
          </Typography>

          <List sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
            {tracks.map((track, index) => (
              <ListItem
                key={index}
                sx={{
                  mb: 1,
                  borderRadius: 1,
                  bgcolor: 'background.paper',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight="bold">
                      {track.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      Album: {track.album}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label={playingTrack === index ? 'pause' : 'play'}
                    onClick={() => handlePlay(index)}
                    color="primary"
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    {playingTrack === index ? (
                      <PauseIcon />
                    ) : (
                      <PlayArrowIcon />
                    )}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Streaming Links */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<HeadphonesIcon />}
            href="#"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              bgcolor: '#1DB954',
              '&:hover': {
                bgcolor: '#1ed760',
              },
            }}
          >
            Kuula Spotifys
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<AppleIcon />}
            href="#"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Apple Music
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Music

