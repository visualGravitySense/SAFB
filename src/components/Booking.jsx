import { useState } from 'react'

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking form submitted:', formData)
    alert('Täname! Teie päring on saadetud. Võtame teiega ühendust peagi.')
    // Reset form
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

  return (
    <section className="section-light" id="broneeri">
      <h2>📅 Broneeri Bänd Oma Üritusele</h2>
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventType">Ürituse Tüüp *</label>
            <select 
              id="eventType" 
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Vali ürituse tüüp</option>
              <option value="corporate">Korporatiiv</option>
              <option value="wedding">Pulmad</option>
              <option value="festival">Festival</option>
              <option value="private">Eraüritus</option>
              <option value="club">Klubi/Kontsert</option>
              <option value="other">Muu</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="eventDate">Kuupäev *</label>
            <input 
              type="date" 
              id="eventDate" 
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Asukoht *</label>
            <input 
              type="text" 
              id="location" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Linn, koht" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Eeldatav külaliste arv *</label>
            <input 
              type="number" 
              id="guests" 
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="nt. 150" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Teie Nimi *</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ees- ja perekonnanimi" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="teie@email.ee" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+372 5XXX XXXX" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Lisainfo / Soovid</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Kirjeldage oma üritust ja ootusi..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            📨 Saada Päring
          </button>

          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
            * Kohustuslikud väljad
          </p>
        </form>
      </div>
    </section>
  )
}

export default Booking

