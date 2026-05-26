import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Location from '../components/Location'

export default function About() {
  return (
    <>
      <SEO
        title="The Unit | T-Bird Heights Student Housing Cedar City"
        description="Fully furnished private bedrooms with private bathrooms near SUU. See all amenities, pricing, and location details for T-Bird Heights in Cedar City, Utah."
      />

      <PageHeader
        tag="The Unit"
        title="Everything Included."
        subtitle="Private bedroom, private bathroom, WiFi, utilities, parking, laundry — all for $550/month near Southern Utah University."
      />

      <section>
        <Features />
      </section>

      <section style={{ background: 'var(--gray-50)', padding: '96px 0' }}>
        <Pricing />
      </section>

      <section>
        <Location />
      </section>

      <section style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Sounds Like Home?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Schedule a tour or reach out to Stratum Real Estate to get started.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>Schedule a Tour</Link>
            <Link to="/gallery" className="btn btn-outline-white" style={{ padding: '14px 28px' }}>View Photos</Link>
          </div>
        </div>
      </section>
    </>
  )
}
