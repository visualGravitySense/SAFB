import { useState, useEffect } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Button, 
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

const Navigation = () => {
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
              ? 'linear-gradient(180deg, rgba(10, 10, 10, 0.98), rgba(26, 15, 26, 0.98))' 
              : 'linear-gradient(180deg, rgba(10, 10, 10, 0.95), rgba(26, 15, 26, 0.95))',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            borderBottom: 'none',
            boxShadow: scrolled 
              ? '0 4px 20px rgba(244, 103, 51, 0.3)' 
              : 'none',
            transition: 'all 0.3s ease',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: scrolled ? '4px' : '3px',
              background: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A, #D4AF37, #F46733)',
              backgroundSize: '200% 100%',
              animation: 'funkShimmer 3s ease-in-out infinite',
            },
            '@keyframes funkShimmer': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 0%, rgba(244, 103, 51, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
              `,
              pointerEvents: 'none',
            },
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
            {/* Logo - Enhanced MOTIVATION with FUNK Style */}
            <Button
              href="#avaleht"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#avaleht')
              }}
              sx={{
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                fontFamily: "'Righteous', cursive",
                fontWeight: 700,
                background: 'linear-gradient(135deg, #F46733 0%, #D4AF37 50%, #F46733 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                position: 'relative',
                animation: 'funkGradient 3s ease infinite',
                textShadow: '0 0 30px rgba(244, 103, 51, 0.5)',
                '&:hover': {
                  transform: 'scale(1.1) rotate(2deg)',
                  animation: 'funkPulse 0.6s ease',
                },
                '@keyframes funkGradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
                '@keyframes funkPulse': {
                  '0%, 100%': { transform: 'scale(1.1) rotate(2deg)' },
                  '50%': { transform: 'scale(1.15) rotate(-2deg)' },
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
                      color: isCTA 
                        ? '#FFFFFF' 
                        : isActive 
                          ? '#F46733' 
                          : '#FFFFFF',
                      fontWeight: isActive || isCTA ? 700 : 500,
                      fontSize: isCTA ? '0.95rem' : '0.9rem',
                      px: isCTA ? 2.5 : 1.5,
                      py: isCTA ? 1 : 0.5,
                      background: isCTA 
                        ? 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)'
                        : isActive
                          ? 'linear-gradient(90deg, rgba(244, 103, 51, 0.15), rgba(212, 175, 55, 0.15))'
                          : 'transparent',
                      backgroundSize: isCTA ? '200% 200%' : 'auto',
                      textTransform: 'none',
                      borderRadius: isCTA ? '8px' : '4px',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      animation: isCTA ? 'funkGradientMove 3s ease infinite' : 'none',
                      boxShadow: isCTA 
                        ? '0 4px 15px rgba(244, 103, 51, 0.4)'
                        : 'none',
                      '&::after': isActive && !isCTA ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '3px',
                        background: 'linear-gradient(90deg, #F46733, #D4AF37)',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(244, 103, 51, 0.5)',
                      } : {},
                      '&:hover': {
                        color: isCTA ? '#FFFFFF' : '#F46733',
                        background: isCTA 
                          ? 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)'
                          : 'linear-gradient(90deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                        transform: isCTA ? 'translateY(-3px) scale(1.05)' : 'translateY(-2px)',
                        boxShadow: isCTA 
                          ? '0 8px 25px rgba(244, 103, 51, 0.6)'
                          : '0 4px 12px rgba(244, 103, 51, 0.3)',
                      },
                      '@keyframes funkGradientMove': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                )
              })}
            </Box>

            {/* Mobile/Tablet Navigation - Simplified with FUNK */}
            <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' }, gap: '1rem', alignItems: 'center' }}>
              <Button
                variant="contained"
                startIcon={<EventIcon />}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#broneeri')
                }}
                sx={{
                  background: 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)',
                  backgroundSize: '200% 200%',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                  textTransform: 'uppercase',
                  fontFamily: "'Righteous', cursive",
                  letterSpacing: '0.05em',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(244, 103, 51, 0.5)',
                  animation: 'funkGradientMove 3s ease infinite',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)',
                    transform: 'translateY(-3px) scale(1.05)',
                    boxShadow: '0 8px 25px rgba(244, 103, 51, 0.7)',
                  },
                  '@keyframes funkGradientMove': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },
                }}
              >
                Broneeri
              </Button>
              <IconButton
                sx={{
                  color: '#F46733',
                  background: 'rgba(244, 103, 51, 0.1)',
                  border: '2px solid rgba(244, 103, 51, 0.3)',
                  width: { xs: '40px', sm: '40px', md: '40px' },
                  height: { xs: '40px', sm: '40px', md: '40px' },
                  minWidth: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                    borderColor: '#F46733',
                    transform: 'rotate(90deg) scale(1.1)',
                    boxShadow: '0 4px 15px rgba(244, 103, 51, 0.4)',
                  },
                  '& svg': {
                    fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem' },
                  },
                }}
                onClick={toggleMenu}
              >
                <MenuIcon sx={{ fontSize: '1.5rem !important' }} />
              </IconButton>
            </Box>

            {/* Right Side Actions - MOTIVATION & PROMPTS */}
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {/* Quick Contact - MOTIVATION (Social Proof) with FUNK */}
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                <Fade in={scrolled} timeout={300}>
                  <Chip
                    icon={<PhoneIcon sx={{ color: '#F46733 !important', fontSize: '1rem' }} />}
                    label="+372 5XXX XXXX"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#kontakt')
                    }}
                    sx={{
                      display: scrolled ? 'flex' : 'none',
                      background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                      color: '#F46733',
                      border: '2px solid',
                      borderImage: 'linear-gradient(135deg, #F46733, #D4AF37) 1',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      height: '36px',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      boxShadow: '0 2px 8px rgba(244, 103, 51, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.3), rgba(212, 175, 55, 0.3))',
                        transform: 'scale(1.1) translateY(-2px)',
                        boxShadow: '0 4px 15px rgba(244, 103, 51, 0.5)',
                      },
                    }}
                  />
                </Fade>
              </Box>

              {/* Mobile Menu Button with FUNK */}
              <IconButton
                sx={{
                  display: { xs: 'flex', md: 'none', lg: 'none' },
                  color: '#F46733',
                  background: 'rgba(244, 103, 51, 0.1)',
                  border: '2px solid rgba(244, 103, 51, 0.3)',
                  width: { xs: '40px', sm: '40px' },
                  height: { xs: '40px', sm: '40px' },
                  minWidth: '40px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                    borderColor: '#F46733',
                    transform: 'rotate(90deg) scale(1.1)',
                    boxShadow: '0 4px 15px rgba(244, 103, 51, 0.4)',
                  },
                  '& svg': {
                    fontSize: '1.5rem',
                  },
                }}
                onClick={toggleMenu}
              >
                <MenuIcon sx={{ fontSize: '1.5rem !important' }} />
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
            background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.98), rgba(26, 15, 26, 0.98))',
            backdropFilter: 'blur(20px)',
            marginTop: scrolled ? '76px' : '70px',
            borderBottom: '3px solid transparent',
            borderImage: 'linear-gradient(90deg, #F46733, #D4AF37, #C41E3A) 1',
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
                    background: isCTA 
                      ? 'linear-gradient(135deg, #F46733, #D4AF37, #C41E3A)'
                      : isActive 
                        ? 'linear-gradient(90deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))'
                        : 'transparent',
                    backgroundSize: isCTA ? '200% 200%' : 'auto',
                    color: isCTA ? '#FFFFFF' : isActive ? '#F46733' : '#FFFFFF',
                    fontWeight: isCTA || isActive ? 700 : 500,
                    py: 1.5,
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    animation: isCTA ? 'funkGradientMove 3s ease infinite' : 'none',
                    boxShadow: isCTA 
                      ? '0 2px 8px rgba(244, 103, 51, 0.4)'
                      : 'none',
                    '&:hover': {
                      background: isCTA 
                        ? 'linear-gradient(135deg, #FF7744, #E5BF50, #D42E4A)'
                        : 'linear-gradient(90deg, rgba(244, 103, 51, 0.25), rgba(212, 175, 55, 0.25))',
                      transform: 'translateX(8px) scale(1.02)',
                      color: isCTA ? '#FFFFFF' : '#F46733',
                      boxShadow: isCTA 
                        ? '0 4px 15px rgba(244, 103, 51, 0.6)'
                        : '0 2px 8px rgba(244, 103, 51, 0.3)',
                    },
                    '@keyframes funkGradientMove': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
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
                borderColor: '#F46733',
                borderWidth: '2px',
                color: '#F46733',
                fontWeight: 700,
                py: 1.5,
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                '&:hover': {
                  borderColor: '#D4AF37',
                  background: 'linear-gradient(135deg, rgba(244, 103, 51, 0.2), rgba(212, 175, 55, 0.2))',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(244, 103, 51, 0.4)',
                },
              }}
            >
              Helista Nüüd
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navigation

