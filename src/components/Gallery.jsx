// To add real photos: place your images in /public/images/ and update the `src` values below.
// Example: src="/images/bedroom-1.jpg"
// The first slot (Exterior) spans 2 columns and looks best as a wide landscape shot.

const photos = [
  { label: 'Exterior', src: null },
  { label: 'Bedroom', src: null },
  { label: 'Private Bathroom', src: null },
  { label: 'Shared Kitchen', src: null },
  { label: 'Living Room', src: null },
  { label: 'Furnished Room', src: null },
]

function PlaceholderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  )
}

export default function Gallery() {
  return (
    <div className="gallery-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Photo Gallery</div>
          <h2 className="section-title">Take a Look Inside</h2>
          <p className="section-subtitle">
            Modern, clean spaces designed for the way students actually live.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <div key={i} className="gallery-item">
              {photo.src ? (
                <>
                  <img src={photo.src} alt={photo.label} />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-label">{photo.label}</span>
                  </div>
                </>
              ) : (
                <div className="gallery-placeholder">
                  <PlaceholderIcon />
                  <span className="gallery-placeholder-label">{photo.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="gallery-note">
          Want to see it in person?{' '}
          <a href="#contact">Schedule a tour</a> and we'll show you around.
        </p>
      </div>
    </div>
  )
}
