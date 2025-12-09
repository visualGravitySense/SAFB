import { useState } from 'react'

const Music = () => {
  const [playingTrack, setPlayingTrack] = useState(null)

  const tracks = [
    { title: 'Respect The Funk', album: 'Blind Date' },
    { title: 'We Need To Talk', album: 'We Need To Talk' },
    { title: 'Groove Station', album: 'Blind Date' }
  ]

  const handlePlay = (index) => {
    if (playingTrack === index) {
      setPlayingTrack(null)
    } else {
      setPlayingTrack(index)
    }
  }

  return (
    <section className="section-dark" id="muusika">
      <h2>🎵 Kuula Meie Muusikat</h2>
      
      <div className="video-container">
        <div 
          className="video-placeholder" 
          onClick={() => alert('Siin oleks YouTube/Vimeo video embedded')}
        >
          ▶️
        </div>
      </div>

      <div className="music-player">
        <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Populaarsed Palad</h3>
        <div className="track-list">
          {tracks.map((track, index) => (
            <div key={index} className="track">
              <div>
                <div style={{ fontWeight: 'bold' }}>{track.title}</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Album: {track.album}</div>
              </div>
              <button 
                className="play-btn" 
                onClick={() => handlePlay(index)}
              >
                {playingTrack === index ? '⏸ Pause' : '▶ Play'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="#" className="btn btn-primary">🎧 Kuula Spotifys</a>
        <a href="#" className="btn btn-secondary">🍎 Apple Music</a>
      </div>
    </section>
  )
}

export default Music

