const Events = () => {
  const events = [
    {
      date: '15. DETS 2024',
      title: 'Jõulukontsert',
      location: '📍 Saku Suurhall, Tallinn',
      soldOut: false
    },
    {
      date: '31. DETS 2024',
      title: 'Aastavahetuse Pidu',
      location: '📍 Privaat Üritus',
      soldOut: true
    },
    {
      date: '20. JAAN 2025',
      title: 'Jazz Funk Night',
      location: '📍 Philly Joe\'s, Tallinn',
      soldOut: false
    }
  ]

  return (
    <section className="section-light" id="kontserdid">
      <h2>🎪 Tulevased Kontserdid</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date">{event.date}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-location">{event.location}</div>
            {event.soldOut ? (
              <button className="btn btn-secondary" style={{ width: '100%' }}>Välja müüdud</button>
            ) : (
              <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Osta Piletid</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events

