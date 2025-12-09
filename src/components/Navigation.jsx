import { useState } from 'react'
import { AppBar, Toolbar, Button, ButtonGroup, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Navigation = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useTheme()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const languages = ['EST', 'ENG', 'RUS']

  const navLinks = [
    { label: 'Avaleht', href: '#avaleht' },
    { label: 'Kontserdid', href: '#kontserdid' },
    { label: 'Muusika', href: '#muusika' },
    { label: 'Meist', href: '#meist' },
    { label: 'Broneeri', href: '#broneeri' },
    { label: 'Galerii', href: '#galerii' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', width: '100%', margin: '0 auto', justifyContent: 'space-between' }}>
          <Button
            href="#avaleht"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              textDecoration: 'none',
              '&:hover': {
                background: 'transparent',
              },
            }}
          >
            SAFB
          </Button>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 500,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    background: 'transparent',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <ButtonGroup
              variant="outlined"
              size="small"
              sx={{
                display: { xs: 'none', sm: 'flex' },
                '& .MuiButton-root': {
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  minWidth: 'auto',
                  padding: '0.3rem 0.8rem',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&.active': {
                    background: theme.palette.primary.main,
                    color: theme.palette.background.default,
                    '&:hover': {
                      background: theme.palette.primary.dark,
                    },
                  },
                },
              }}
            >
              {languages.map(lang => (
                <Button
                  key={lang}
                  className={language === lang ? 'active' : ''}
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </Button>
              ))}
            </ButtonGroup>

            <IconButton
              sx={{
                display: { xs: 'block', md: 'none' },
                color: theme.palette.primary.main,
              }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={toggleMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            background: theme.palette.background.default,
            marginTop: '70px',
          },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemText primary={link.label} sx={{ color: '#FFFFFF' }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}>
            {languages.map(lang => (
              <Button
                key={lang}
                variant={language === lang ? 'contained' : 'outlined'}
                size="small"
                onClick={() => {
                  setLanguage(lang)
                  setMenuOpen(false)
                }}
              >
                {lang}
              </Button>
            ))}
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navigation

