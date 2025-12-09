import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e) => {
    e.preventDefault()
    alert(`Täname! Teie e-mail ${email} on lisatud uudiskirja nimekirja.`)
    setEmail('')
  }

  return (
    <footer id="kontakt">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Siim Aimla Funk Band</h3>
          <p>Tipptasemel live-muusika<br />teie üritusele</p>
          <div className="social-links" style={{ marginTop: '1rem' }}>
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">YT</a>
            <a href="#" className="social-icon">SP</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Kiirlingid</h3>
          <a href="#kontserdid">Kontserdid</a>
          <a href="#muusika">Muusika</a>
          <a href="#meist">Bändist</a>
          <a href="#broneeri">Broneeri</a>
          <a href="#galerii">Galerii</a>
        </div>

        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>📧 info@safunkband.ee</p>
          <p>📱 +372 5XXX XXXX</p>
          <p>📍 Tallinn, Estonia</p>
        </div>

        <div className="footer-section">
          <h3>Uudiskiri</h3>
          <p>Saa infot uute kontsertide kohta</p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input 
              type="email" 
              placeholder="Teie e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Siim Aimla Funk Band. Kõik õigused kaitstud.</p>
      </div>
    </footer>
  )
}

export default Footer

