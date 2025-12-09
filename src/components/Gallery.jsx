const Gallery = () => {
  const galleryItems = ['🎸', '🎺', '🥁', '🎷', '🎹', '🎤']

  return (
    <section className="section-dark" id="galerii">
      <h2>📸 Galerii</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">{item}</div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="#" className="btn btn-primary">Vaata Rohkem Fotosid</a>
      </div>
    </section>
  )
}

export default Gallery

