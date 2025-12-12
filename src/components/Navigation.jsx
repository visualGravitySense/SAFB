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
  const [isNavVisible, setIsNavVisible] = useState(true)
  const theme = useTheme()

  // Generate snowflakes for Christmas animation in header
  const snowflakes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 5 + Math.random() * 7,
    size: 8 + Math.random() * 10,
    opacity: 0.4 + Math.random() * 0.4,
  }))

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

  // Track navigation visibility to disable snowflake animation when not visible
  useEffect(() => {
    const navElement = document.querySelector('[role="banner"]') || document.querySelector('header')
    if (!navElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Disable animation when navigation is not visible (scrolled down)
          setIsNavVisible(entry.isIntersecting || window.scrollY < 200)
        })
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px', // Consider nav visible if within 100px from top
      }
    )

    observer.observe(navElement)

    // Also check on scroll for better performance
    const handleScrollCheck = () => {
      setIsNavVisible(window.scrollY < 200)
    }
    window.addEventListener('scroll', handleScrollCheck, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollCheck)
    }
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
            overflow: 'visible',
            // Christmas snowflakes animation keyframes
            '@keyframes snowfallHeader': {
              '0%': {
                transform: 'translateY(0) translateX(0) rotate(0deg)',
                opacity: 0,
              },
              '5%': {
                opacity: 0.9,
              },
              '50%': {
                transform: 'translateY(60px) translateX(10px) rotate(180deg)',
                opacity: 0.8,
              },
              '95%': {
                opacity: 0.2,
              },
              '100%': {
                transform: 'translateY(100px) translateX(-5px) rotate(360deg)',
                opacity: 0,
              },
            },
            // Christmas snowflakes animation in header
            '& .snowflake': {
              position: 'absolute',
              top: '-10px',
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '1.2rem',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 100,
              textShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(212, 175, 55, 0.6)',
              willChange: 'transform, opacity',
              lineHeight: 1,
              display: 'block',
            },
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
          {/* Christmas Snowflakes in Header - Only animate when visible */}
          {isNavVisible && snowflakes.map((snowflake) => (
            <Box
              key={snowflake.id}
              className="snowflake"
              component="span"
              sx={{
                position: 'absolute',
                left: `${snowflake.left}%`,
                top: '-10px',
                animation: isNavVisible 
                  ? `snowfallHeader ${snowflake.duration}s linear ${snowflake.delay}s infinite`
                  : 'none',
                fontSize: `${snowflake.size}px`,
                filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))',
                zIndex: 100,
                display: isNavVisible ? 'block' : 'none',
              }}
            >
              ❄
            </Box>
          ))}

          <Toolbar 
            sx={{ 
              maxWidth: '1400px', 
              width: '100%', 
              margin: '0 auto', 
              justifyContent: 'space-between',
              py: 1,
              position: 'relative',
              zIndex: 1,
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
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {/* Glow effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #F46733, #D4AF37, #F46733)',
                      backgroundSize: '200% 200%',
                      opacity: 0.4,
                      filter: 'blur(6px)',
                      zIndex: 0,
                      animation: 'elegantPhoneGlow 3s ease-in-out infinite',
                      '@keyframes elegantPhoneGlow': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                    }}
                  />
                  <Chip
                    icon={<PhoneIcon sx={{ 
                      color: '#D4AF37 !important', 
                      fontSize: '1.1rem !important',
                      filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.6))',
                      transition: 'all 0.3s ease',
                    }} />}
                    label="+372 511 8528"
                    component="a"
                    href="tel:+3725118528"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(135deg, rgba(20, 18, 16, 0.95), rgba(30, 25, 20, 0.95))',
                      color: '#D4AF37',
                      border: '1.5px solid',
                      borderColor: 'rgba(212, 175, 55, 0.4)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      height: '40px',
                      px: 2,
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '20px',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                      letterSpacing: '0.03em',
                      '& .MuiChip-label': {
                        px: 1,
                        fontWeight: 600,
                      },
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(30, 25, 20, 0.98), rgba(40, 32, 24, 0.98))',
                        borderColor: 'rgba(212, 175, 55, 0.7)',
                        color: '#FFD700',
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                        '& .MuiChip-icon': {
                          color: '#FFD700 !important',
                          filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))',
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  />
                </Box>
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
            background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.9), rgba(26, 15, 26, 0.9))',
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
              component="a"
              href="tel:+3725118528"
              onClick={() => {
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

