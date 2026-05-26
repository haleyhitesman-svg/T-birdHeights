import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',    to: '/' },
  { label: 'The Unit', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  const navBg = scrolled
    ? 'rgba(13, 43, 69, 0.97)'
    : isHome
      ? 'transparent'
      : 'var(--navy)'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '18px 0',
      background: navBg,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      backgroundImage: (!scrolled && isHome) ? 'linear-gradient(to bottom, rgba(13,43,69,0.7) 0%, transparent 100%)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">T</div>
            <span className="navbar-logo-text">T-Bird Heights</span>
          </Link>

          <div className="navbar-links">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className="navbar-link"
                style={({ isActive }) => ({
                  color: isActive ? 'white' : 'rgba(255,255,255,0.75)',
                  fontWeight: isActive ? 600 : 500,
                  borderBottom: isActive ? '2px solid var(--orange)' : '2px solid transparent',
                  paddingBottom: '2px',
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              Schedule a Tour
            </Link>
          </div>

          <button className="navbar-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar-mobile-menu">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="navbar-mobile-link"
              style={({ isActive }) => ({ color: isActive ? 'white' : 'rgba(255,255,255,0.75)', fontWeight: isActive ? 600 : 400 })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12, textAlign: 'center' }}>
            Schedule a Tour
          </Link>
        </div>
      )}
    </nav>
  )
}
