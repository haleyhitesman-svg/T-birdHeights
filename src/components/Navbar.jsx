import { useState, useEffect } from 'react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">
            <div className="navbar-logo-icon">T</div>
            <span className="navbar-logo-text">T-Bird Heights</span>
          </a>

          <div className="navbar-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              Schedule a Tour
            </a>
          </div>

          <button className="navbar-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar-mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar-mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 12, textAlign: 'center' }} onClick={() => setOpen(false)}>
            Schedule a Tour
          </a>
        </div>
      )}
    </nav>
  )
}
