import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AvailabilityBanner from '../components/AvailabilityBanner'

const highlights = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Private Bedroom & Bath',
    desc: 'Your own room AND your own bathroom. No sharing, no waiting.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: '$550 / Month All-In',
    desc: 'WiFi, utilities, parking, laundry — all included. One payment, no surprises.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z"/>
      </svg>
    ),
    title: 'Steps from SUU',
    desc: 'Walk to Southern Utah University. No car, no commute, no hassle.',
  },
]

const previewPhotos = [
  { src: '/images/Outside-View.jpg',  label: 'Exterior' },
  { src: '/images/Bedroom-1.jpg',     label: 'Bedroom' },
  { src: '/images/Bathroom-1.jpg',    label: 'Private Bathroom' },
  { src: '/images/Kitchen-1.jpg',     label: 'Kitchen' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="T-Bird Heights | Student Housing Near SUU — Cedar City, UT"
        description="Private bedrooms with private bathrooms near Southern Utah University. Fully furnished, all-inclusive student housing for $550/month. Now enrolling for Fall 2026."
      />

      {/* Hero */}
      <div className="hero" id="home">
        <div className="hero-bg-shape" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Now Enrolling — Fall Semester
            </div>
            <h1 className="hero-title">
              Your Room.<br />
              Your Bath.<br />
              <span>Your Space.</span>
            </h1>
            <p className="hero-subtitle">
              Private bedrooms with private bathrooms, fully furnished and steps from
              Southern Utah University. All-inclusive student housing for just $550/month.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
                Schedule a Tour
              </Link>
              <Link to="/gallery" className="btn btn-outline-white" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
                View Photos
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">$550</div>
                <div className="hero-stat-label">per month, all-inclusive</div>
              </div>
              <div>
                <div className="hero-stat-value">10</div>
                <div className="hero-stat-label">private beds &amp; baths per unit</div>
              </div>
              <div>
                <div className="hero-stat-value">SUU</div>
                <div className="hero-stat-label">minutes from campus</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AvailabilityBanner />

      {/* 3 Key Highlights */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why T-Bird Heights</div>
            <h2 className="section-title">Built for Students</h2>
            <p className="section-subtitle">Privacy, convenience, and value — all in one place near SUU.</p>
          </div>
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {highlights.map(h => (
              <div key={h.title} className="feature-card" style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ margin: '0 auto 20px' }}>{h.icon}</div>
                <h3 className="feature-title">{h.title}</h3>
                <p className="feature-desc">{h.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/about" className="btn btn-navy">See All Amenities</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Photo Gallery</div>
            <h2 className="section-title">Take a Look Inside</h2>
            <p className="section-subtitle">Modern, clean spaces designed for the way students actually live.</p>
          </div>
          <div className="home-preview-grid">
            {previewPhotos.map((p, i) => (
              <div key={i} className={`gallery-item home-preview-item${i === 0 ? ' home-preview-wide' : ''}`}>
                <img src={p.src} alt={p.label} />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-label">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/gallery" className="btn btn-primary">View All 19 Photos →</Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ background: 'rgba(240,92,34,0.2)', color: '#FF8A5C' }}>Limited Availability</div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: 'white', margin: '16px 0' }}>
            Ready to Secure Your Room?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Units are available now and filling fast for Fall 2026. Reach out to Stratum Real Estate today.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              Contact Us
            </Link>
            <a href="tel:4352630677" className="btn btn-outline-white" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              (435) 263-0677
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
