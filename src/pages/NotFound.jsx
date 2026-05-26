import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | T-Bird Heights" description="" />
      <div style={{
        minHeight: '100vh',
        background: 'var(--navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '40px 24px',
        gap: 16,
      }}>
        <div style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--orange)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', margin: 0 }}>Page Not Found</h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: 360, lineHeight: 1.7 }}>
          Looks like this room doesn't exist. Head back home to find what you're looking for.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 8, padding: '14px 28px' }}>
          Back to Home
        </Link>
      </div>
    </>
  )
}
