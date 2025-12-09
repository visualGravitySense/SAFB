const Testimonials = () => {
  const testimonials = [
    {
      text: "Siim Aimla Funk Band muutis meie korporatiivi absoluutselt fenomenaalseks! Energia, mida nad laval loovad, on lihtsalt uskumatu. Kõik külalised tantsisid!",
      author: "Maria Kask",
      company: "Event Manager, TechCorp Estonia"
    },
    {
      text: "Professionaalsus ja muusikaline tase on tippklassi. Soovitan soojalt kõigile, kes otsivad kvaliteetset live-muusikat oma üritusele.",
      author: "Toomas Sepp",
      company: "Juhataja, Baltic Events OÜ"
    }
  ]

  return (
    <section className="section-dark">
      <h2>💬 Mida Kliendid Ütlevad</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-text">"{testimonial.text}"</div>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="testimonial-company">{testimonial.company}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

