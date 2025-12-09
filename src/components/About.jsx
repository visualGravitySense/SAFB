const About = () => {
  const members = [
    { name: 'Siim Aimla', instrument: 'Saksofon', emoji: '🎷' },
    { name: 'Jason Hunter', instrument: 'Trompet', emoji: '🎺' },
    { name: 'Sten Valdmaa', instrument: 'Tromboon', emoji: '🎺' },
    { name: 'Artis Boriss', instrument: 'Klahvpillid', emoji: '🎹' },
    { name: 'Paul Daniel', instrument: 'Kitarr', emoji: '🎸' },
    { name: 'Roland Jairus', instrument: 'Basskitarr', emoji: '🎸' },
    { name: 'Karl-Juhan Laanesaar', instrument: 'Trummid', emoji: '🥁' }
  ]

  return (
    <section className="section-light" id="meist">
      <h2>🎺 Bändist</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center', fontSize: '1.1rem' }}>
        <strong>Siim Aimla Funk Band</strong> – tipptasemel muusika, mis loob elamuse. 
        Kui otsite bändi, kes paneb iga publiku tantsima ja toob lavale muusika, 
        mis hingab energiat ja emotsioone, siis Siim Aimla Funk Band on õige valik.
      </p>

      <div className="band-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-photo">{member.emoji}</div>
            <div className="member-name">{member.name}</div>
            <div className="member-instrument">{member.instrument}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About

