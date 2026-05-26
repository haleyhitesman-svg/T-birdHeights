import { useState } from 'react'

// Contact form uses Web3Forms — free, no account required.
// Setup: go to https://web3forms.com, enter pm@stratumrealestate.com, copy the access key.
// Then create a .env file with: VITE_WEB3FORMS_KEY=your_key_here
// Or replace the ACCESS_KEY constant below directly.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', moveIn: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New Inquiry from ${form.firstName} ${form.lastName}`,
          from_name: `${form.firstName} ${form.lastName}`,
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="container">
      <div className="contact-wrap">
        <div>
          <h2 className="contact-form-title">Ready to Make It Home?</h2>
          <p className="contact-form-sub">
            Fill out the form and the team at Stratum Real Estate will get back to you within one business day.
          </p>

          {status === 'success' ? (
            <div className="form-success">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Thanks! We'll be in touch within one business day.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="form-error">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a href="mailto:pm@stratumrealestate.com">pm@stratumrealestate.com</a>.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" type="text" required value={form.firstName} onChange={set('firstName')} placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" type="text" required value={form.lastName} onChange={set('lastName')} placeholder="Smith" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="jane@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="(435) 555-0100" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="moveIn">When are you looking to move in? *</label>
                <select id="moveIn" required value={form.moveIn} onChange={set('moveIn')}>
                  <option value="">Select a move-in date</option>
                  <option value="ASAP">As soon as possible</option>
                  <option value="Fall 2026">Fall 2026 Semester</option>
                  <option value="Spring 2027">Spring 2027 Semester</option>
                  <option value="Fall 2027">Fall 2027 Semester</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Questions or Comments</label>
                <textarea id="message" value={form.message} onChange={set('message')} placeholder="Tell us anything else we should know..." />
              </div>

              <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ width: '100%', fontSize: '1rem', padding: '16px' }}>
                {status === 'loading' ? 'Sending…' : 'Send My Inquiry'}
              </button>
            </form>
          )}
        </div>

        <div className="contact-sidebar">
          <div className="contact-info-card">
            <h3>Stratum Real Estate</h3>
            <p className="contact-managed">Property Manager for T-Bird Heights</p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">
                    <a href="tel:4352630677">(435) 263-0677</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href="mailto:pm@stratumrealestate.com">pm@stratumrealestate.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Office</div>
                  <div className="contact-info-value">365 S Main St<br />Cedar City, UT 84720</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-hours-card">
            <h4>Office Hours</h4>
            <div className="contact-hours-row">
              <strong>Monday – Friday</strong>
              <span>9:00 AM – 5:00 PM</span>
            </div>
            <div className="contact-hours-row">
              <strong>Saturday</strong>
              <span>By appointment</span>
            </div>
            <div className="contact-hours-row">
              <strong>Sunday</strong>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
