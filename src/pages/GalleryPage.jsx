import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Photo Gallery | T-Bird Heights Student Housing Cedar City"
        description="Browse photos of T-Bird Heights student housing in Cedar City, Utah — bedrooms, private bathrooms, kitchen, living areas, and the exterior."
      />

      <PageHeader
        tag="Photo Gallery"
        title="See It For Yourself."
        subtitle="Browse all 19 photos of T-Bird Heights — bedrooms, bathrooms, common areas, and the exterior."
      />

      <Gallery />

      <section style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Like What You See?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 420, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Schedule an in-person tour and see it for yourself.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
            Schedule a Tour
          </Link>
        </div>
      </section>
    </>
  )
}
