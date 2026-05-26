const perks = [
  {
    title: 'Walking Distance to SUU',
    desc: 'Steps from Southern Utah University — no car needed to get to class.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z"/>
      </svg>
    ),
  },
  {
    title: 'Off Dewey Avenue',
    desc: 'Convenient access to restaurants, grocery stores, and everything Cedar City has to offer.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Quiet Neighborhood',
    desc: 'Tucked in a calm residential area — perfect for studying and recharging between classes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
]

export default function Location() {
  return (
    <div className="location-section">
      <div className="container">
        <div className="location-wrap">
          <div className="location-map">
            <iframe
              title="T-Bird Heights location"
              src="https://maps.google.com/maps?q=354+S+300+W+Cedar+City+Utah+84720&output=embed&z=15"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="location-info">
            <div className="section-tag">Location</div>
            <h2>Steps from Southern Utah University</h2>
            <p>
              T-Bird Heights sits right off Dewey Avenue in Cedar City — close enough
              to campus to walk, far enough to feel like home.
            </p>

            <div className="location-perks">
              {perks.map(p => (
                <div key={p.title} className="location-perk">
                  <div className="location-perk-icon">{p.icon}</div>
                  <div>
                    <div className="location-perk-title">{p.title}</div>
                    <div className="location-perk-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="location-address-box">
              <div className="location-perk-icon" style={{ flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z"/>
                </svg>
              </div>
              <div className="location-address-text">
                <strong>T-Bird Heights</strong>
                354 S 300 W<br />
                Cedar City, UT 84720
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
