// Photos are served from /public/images/
// Note: "Shower/Bath.jpg" must be renamed to "Shower-Bath.jpg" before adding to the folder.

const photos = [
  // Hero wide shot — spans 2 columns
  { src: '/images/Outside-View.jpg',    label: 'Exterior' },
  // Regular grid
  { src: '/images/Living%20Room.jpg',   label: 'Living Room' },
  { src: '/images/Tv-LivingRoom.jpg',   label: 'Living Room' },
  { src: '/images/Kitchen-1.jpg',       label: 'Kitchen' },
  { src: '/images/Kitchen-2.jpg',       label: 'Kitchen' },
  { src: '/images/Bedroom-1.jpg',       label: 'Bedroom' },
  { src: '/images/Bedroom-2.jpg',       label: 'Bedroom' },
  { src: '/images/Bedroom-3.jpg',       label: 'Bedroom' },
  { src: '/images/Bathroom-1.jpg',      label: 'Private Bathroom' },
  { src: '/images/Bathroom-2.jpg',      label: 'Private Bathroom' },
  { src: '/images/Shower-Bath.jpg',     label: 'Shower & Bath' },
  { src: '/images/BathroomVanity.jpg',  label: 'Bathroom Vanity' },
  { src: '/images/BathroomStorage.jpg', label: 'Bathroom Storage' },
  { src: '/images/DownStairs1.jpg',     label: 'Downstairs' },
  { src: '/images/DownStairs2.jpg',     label: 'Downstairs' },
  { src: '/images/UpStairs.jpg',        label: 'Upstairs' },
  { src: '/images/OutsideDeck.jpg',     label: 'Outdoor Deck' },
  { src: '/images/Outside-View2.jpg',   label: 'Exterior' },
  { src: '/images/Outside-View3.jpg',   label: 'Exterior' },
]

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
              <img src={photo.src} alt={photo.label} />
              <div className="gallery-overlay">
                <span className="gallery-overlay-label">{photo.label}</span>
              </div>
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
