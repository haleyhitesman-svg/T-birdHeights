export default function Hero() {
  return (
    <div className="hero">
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
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              Schedule a Tour
            </a>
            <a href="#gallery" className="btn btn-outline-white" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              View Photos
            </a>
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
  )
}
