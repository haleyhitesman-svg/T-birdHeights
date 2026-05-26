import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-logo">
              <img src="/TBirdHeights.png" alt="T-Bird Heights" style={{ height: 44, width: 'auto' }} />
              <span className="footer-brand-name">T-Bird Heights</span>
            </div>
            <p className="footer-tagline">
              Private rooms, private baths, and all-inclusive pricing — student housing
              built around the way you actually live.
            </p>
            <p className="footer-address">
              354 S 300 W<br />Cedar City, UT 84720
            </p>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <Link to="/"        className="footer-col-link">Home</Link>
            <Link to="/about"   className="footer-col-link">The Unit</Link>
            <Link to="/gallery" className="footer-col-link">Photo Gallery</Link>
            <Link to="/contact" className="footer-col-link">Contact</Link>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <a href="tel:4352630677"                    className="footer-col-link">(435) 263-0677</a>
            <a href="mailto:pm@stratumrealestate.com"   className="footer-col-link">pm@stratumrealestate.com</a>
            <p className="footer-col-link" style={{ cursor: 'default' }}>
              365 S Main St<br />Cedar City, UT 84720
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">© 2026 T-Bird Heights. All rights reserved.</p>
          <p className="footer-managed">Managed by Stratum Real Estate</p>
        </div>
      </div>
    </footer>
  )
}
