import { useState } from 'react'

const Navigation = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const languages = ['EST', 'ENG', 'RUS']

  return (
    <nav>
      <div className="container">
        <a href="#avaleht" className="logo">SAFB</a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#avaleht" onClick={() => setMenuOpen(false)}>Avaleht</a></li>
          <li><a href="#kontserdid" onClick={() => setMenuOpen(false)}>Kontserdid</a></li>
          <li><a href="#muusika" onClick={() => setMenuOpen(false)}>Muusika</a></li>
          <li><a href="#meist" onClick={() => setMenuOpen(false)}>Meist</a></li>
          <li><a href="#broneeri" onClick={() => setMenuOpen(false)}>Broneeri</a></li>
          <li><a href="#galerii" onClick={() => setMenuOpen(false)}>Galerii</a></li>
          <li><a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a></li>
        </ul>
        <div className="lang-switch">
          {languages.map(lang => (
            <button
              key={lang}
              className={language === lang ? 'active' : ''}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <button className="mobile-menu" onClick={toggleMenu}>☰</button>
      </div>
    </nav>
  )
}

export default Navigation

