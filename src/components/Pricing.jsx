const includes = [
  'Private furnished bedroom',
  'Private bathroom — yours alone',
  'High-speed WiFi',
  'All utilities (electric, water, gas)',
  'Free on-site parking',
  'Laundry access on property',
  'Shared kitchen & living room',
]

function CheckIcon() {
  return (
    <div className="pricing-check">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="container">
      <div className="pricing-wrap">
        <div className="pricing-card">
          <div className="pricing-label">Monthly Rent</div>
          <div className="pricing-amount">
            <span className="pricing-dollar">$</span>
            <span className="pricing-number">550</span>
            <span className="pricing-per">/mo</span>
          </div>
          <p className="pricing-note">Per bedroom — all-inclusive, no hidden fees</p>
          <hr className="pricing-divider" />
          <div className="pricing-includes-title">Everything included</div>
          <ul className="pricing-includes-list">
            {includes.map(item => (
              <li key={item} className="pricing-includes-item">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
            Apply Now
          </a>
        </div>

        <div className="pricing-right">
          <div className="section-tag">Simple Pricing</div>
          <h2>One price.<br />No surprises.</h2>
          <p>
            At T-Bird Heights, $550 covers everything — your room, your bathroom,
            WiFi, utilities, parking, and laundry. Pay one amount each month and
            focus on school, not bills.
          </p>

          <div className="pricing-highlight-row">
            <div className="pricing-highlight">
              <div className="pricing-highlight-val">$550</div>
              <div className="pricing-highlight-lbl">per month</div>
            </div>
            <div className="pricing-highlight">
              <div className="pricing-highlight-val">10</div>
              <div className="pricing-highlight-lbl">residents per unit</div>
            </div>
          </div>

          <a href="#contact" className="btn btn-navy" style={{ fontSize: '1rem', padding: '14px 28px' }}>
            Get More Info
          </a>
        </div>
      </div>
    </div>
  )
}
