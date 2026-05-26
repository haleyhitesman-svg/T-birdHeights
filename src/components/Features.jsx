const features = [
  {
    title: 'Private Bedroom',
    desc: 'Your own room with a built-in desk, storage, and bed. Study, sleep, and relax without sharing your space.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Private Bathroom',
    desc: 'Your own bathroom — no waiting, no sharing. Shower on your schedule and keep your things exactly where you left them.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h4M20 12v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4"/>
        <path d="M8 4v4M12 2v10"/>
      </svg>
    ),
  },
  {
    title: 'Fully Furnished',
    desc: 'Move in with just your bags. Every bedroom comes with a bed, desk, chair, and dresser — ready from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 00-4 0v2M2 12h20"/>
      </svg>
    ),
  },
  {
    title: 'Free Parking',
    desc: 'On-site parking is included with every unit at no extra charge. No permits, no fees, no stress.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="12" rx="2"/>
        <path d="M5 15v4M19 15v4M1 8h22"/>
      </svg>
    ),
  },
  {
    title: 'WiFi & Utilities Included',
    desc: 'High-speed WiFi, electricity, water, and gas are all bundled into your $550/month rent. No surprise bills.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0114.08 0"/>
        <path d="M1.42 9a16 16 0 0121.16 0"/>
        <path d="M8.53 16.11a6 6 0 016.95 0"/>
        <circle cx="12" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Laundry On-Site',
    desc: 'Convenient laundry access right on the property. No more hunting for a laundromat across town.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <circle cx="12" cy="13" r="5"/>
        <path d="M5 6h1M8 6h1"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Why T-Bird Heights</div>
        <h2 className="section-title">Everything You Need,<br />Nothing You Don't</h2>
        <p className="section-subtitle">
          Built for students who want privacy, comfort, and convenience — all in one affordable package.
        </p>
      </div>

      <div className="features-grid">
        {features.map(f => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
