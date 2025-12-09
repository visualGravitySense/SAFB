import { useState, useEffect } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Button, 
  ButtonGroup, 
  IconButton, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  useTheme,
  Chip,
  Badge,
  Slide,
  Fade,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import EventIcon from '@mui/icons-material/Event'
import PhoneIcon from '@mui/icons-material/Phone'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PeopleIcon from '@mui/icons-material/People'
import HomeIcon from '@mui/icons-material/Home'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InfoIcon from '@mui/icons-material/Info'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const Navigation = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('avaleht')
  const theme = useTheme()

  // Track scroll for header styling - PROMPTS
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Track active section for navigation highlighting - PROMPTS
      const sections = ['avaleht', 'kontserdid', 'muusika', 'meist', 'broneeri', 'galerii', 'kontakt']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const languages = ['EST', 'ENG', 'RUS']

  const navLinks = [
    { label: 'Avaleht', href: '#avaleht', icon: <HomeIcon fontSize="small" /> },
    { label: 'Kontserdid', href: '#kontserdid', icon: <CalendarMonthIcon fontSize="small" /> },
    { label: 'Muusika', href: '#muusika', icon: <MusicNoteIcon fontSize="small" /> },
    { label: 'Meist', href: '#meist', icon: <InfoIcon fontSize="small" /> },
    { label: 'Broneeri', href: '#broneeri', icon: <EventIcon fontSize="small" />, isCTA: true },
    { label: 'Galerii', href: '#galerii', icon: <PhotoLibraryIcon fontSize="small" /> },
    { label: 'Kontakt', href: '#kontakt', icon: <ContactMailIcon fontSize="small" /> },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update active section immediately
      const sectionId = href.replace('#', '')
      setActiveSection(sectionId)
    }
  }

  return (
    <>
      <Slide direction="down" in={true} timeout={500}>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: scrolled 
              ? 'rgba(10, 10, 10, 0.98)' 
              : 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: scrolled 
              ? `3px solid #D4AF37` 
              : `2px solid #D4AF37`,
            boxShadow: scrolled 
              ? '0 4px 20px rgba(212, 175, 55, 0.3)' 
              : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Toolbar 
            sx={{ 
              maxWidth: '1400px', 
              width: '100%', 
              margin: '0 auto', 
              justifyContent: 'space-between',
              py: 1,
            }}
          >
            {/* Logo - Enhanced MOTIVATION */}
            <Button
              href="#avaleht"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#avaleht')
              }}
              sx={{
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                fontWeight: 'bold',
                color: '#D4AF37',
                textDecoration: 'none',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#E5BF50',
                  transform: 'scale(1.05)',
                  background: 'transparent',
                },
              }}
            >
              SAFB
            </Button>

            {/* Desktop Navigation - Enhanced ABILITY */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '0.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                const isCTA = link.isCTA
                
                return (
                  <Button
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    startIcon={link.icon}
                    variant={isCTA ? 'contained' : 'text'}
                    sx={{
                      color: isActive && !isCTA ? '#D4AF37' : isCTA ? '#0A0A0A' : '#FFFFFF',
                      fontWeight: isActive || isCTA ? 700 : 500,
                      fontSize: isCTA ? '0.95rem' : '0.9rem',
                      px: isCTA ? 2.5 : 1.5,
                      py: isCTA ? 1 : 0.5,
                      bgcolor: isCTA ? '#D4AF37' : 'transparent',
                      textTransform: 'none',
                      borderRadius: isCTA ? '8px' : '4px',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&::after': isActive && !isCTA ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '3px',
                        bgcolor: '#D4AF37',
                        borderRadius: '2px',
                      } : {},
                      '&:hover': {
                        color: isCTA ? '#0A0A0A' : '#D4AF37',
                        bgcolor: isCTA ? '#E5BF50' : 'rgba(212, 175, 55, 0.1)',
                        transform: isCTA ? 'translateY(-2px)' : 'none',
                        boxShadow: isCTA ? '0 4px 12px rgba(212, 175, 55, 0.4)' : 'none',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                )
              })}
            </Box>

            {/* Mobile/Tablet Navigation - Simplified */}
            <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, gap: '1rem', alignItems: 'center' }}>
              <Button
                variant="contained"
                startIcon={<EventIcon />}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#broneeri')
                }}
                sx={{
                  bgcolor: '#D4AF37',
                  color: '#0A0A0A',
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': {
                    bgcolor: '#E5BF50',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
                  },
                }}
              >
                Broneeri
              </Button>
              <IconButton
                sx={{
                  color: '#D4AF37',
                }}
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Right Side Actions - MOTIVATION & PROMPTS */}
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {/* Quick Contact - MOTIVATION (Social Proof) */}
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                <Fade in={scrolled} timeout={300}>
                  <Chip
                    icon={<PhoneIcon sx={{ color: '#D4AF37 !important', fontSize: '1rem' }} />}
                    label="+372 5XXX XXXX"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#kontakt')
                    }}
                    sx={{
                      display: scrolled ? 'flex' : 'none',
                      bgcolor: 'rgba(212, 175, 55, 0.15)',
                      color: '#D4AF37',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      height: '32px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(212, 175, 55, 0.25)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Fade>
              </Box>

              {/* Language Selector */}
              <ButtonGroup
                variant="outlined"
                size="small"
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  '& .MuiButton-root': {
                    borderColor: '#D4AF37',
                    color: '#D4AF37',
                    minWidth: 'auto',
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#E5BF50',
                      bgcolor: 'rgba(212, 175, 55, 0.1)',
                    },
                    '&.active': {
                      background: '#D4AF37',
                      color: '#0A0A0A',
                      borderColor: '#D4AF37',
                      '&:hover': {
                        background: '#E5BF50',
                        borderColor: '#E5BF50',
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

              {/* Mobile Menu Button */}
              <IconButton
                sx={{
                  display: { xs: 'block', md: 'none', lg: 'none' },
                  color: '#D4AF37',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(90deg)',
                    bgcolor: 'rgba(212, 175, 55, 0.1)',
                  },
                }}
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer - Enhanced ABILITY */}
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={toggleMenu}
        sx={{
          display: { xs: 'block', md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            marginTop: scrolled ? '76px' : '70px',
            borderBottom: '2px solid #D4AF37',
            pt: 2,
            pb: 3,
          },
        }}
      >
        <List sx={{ px: 2 }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            const isCTA = link.isCTA
            
            return (
              <ListItem key={link.href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    borderRadius: '8px',
                    bgcolor: isCTA ? '#D4AF37' : isActive ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                    color: isCTA ? '#0A0A0A' : isActive ? '#D4AF37' : '#FFFFFF',
                    fontWeight: isCTA || isActive ? 700 : 500,
                    py: 1.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: isCTA ? '#E5BF50' : 'rgba(212, 175, 55, 0.15)',
                      transform: 'translateX(5px)',
                      color: isCTA ? '#0A0A0A' : '#D4AF37',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    {link.icon}
                    <ListItemText 
                      primary={link.label} 
                      primaryTypographyProps={{
                        fontSize: isCTA ? '1.1rem' : '1rem',
                        fontWeight: 'inherit',
                      }}
                    />
                    {isCTA && (
                      <Chip 
                        label="Tähtis" 
                        size="small" 
                        sx={{ 
                          bgcolor: '#0A0A0A',
                          color: '#D4AF37',
                          fontSize: '0.7rem',
                          height: '20px',
                        }} 
                      />
                    )}
                  </Box>
                </ListItemButton>
              </ListItem>
            )
          })}
          
          {/* Quick Contact in Mobile */}
          <ListItem sx={{ mt: 2, mb: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<PhoneIcon />}
              onClick={() => {
                handleNavClick('#kontakt')
                setMenuOpen(false)
              }}
              sx={{
                borderColor: '#D4AF37',
                color: '#D4AF37',
                fontWeight: 600,
                py: 1.5,
                borderRadius: '8px',
                '&:hover': {
                  borderColor: '#E5BF50',
                  bgcolor: 'rgba(212, 175, 55, 0.1)',
                },
              }}
            >
              Helista Nüüd
            </Button>
          </ListItem>
          
          {/* Language Selector */}
          <ListItem sx={{ justifyContent: 'center', gap: '0.5rem', padding: '1rem 0' }}>
            {languages.map(lang => (
              <Button
                key={lang}
                variant={language === lang ? 'contained' : 'outlined'}
                size="small"
                onClick={() => {
                  setLanguage(lang)
                  setMenuOpen(false)
                }}
                sx={{
                  minWidth: '60px',
                  bgcolor: language === lang ? '#D4AF37' : 'transparent',
                  color: language === lang ? '#0A0A0A' : '#D4AF37',
                  borderColor: '#D4AF37',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: language === lang ? '#E5BF50' : 'rgba(212, 175, 55, 0.1)',
                    borderColor: '#E5BF50',
                  },
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

