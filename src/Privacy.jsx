import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Linkedin, Globe } from 'lucide-react'

function Privacy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/">
            <img src="/favicon.png" alt="RevAmp" className="nav-logo" />
          </Link>
          <div className="nav-links">
            <div className="nav-pill" style={{ opacity: 0 }} />
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#proof-points">Track Record</Link>
            <Link to="/#process">How I Work</Link>
          </div>
        </div>
        <div>
          <Link to="/#lets-talk" className="btn-primary">
            Book a Call
          </Link>
        </div>
      </nav>

      <section className="privacy-page">
        <div className="privacy-content">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">RevAmp Revenue Consulting Privacy Policy</p>

          <h2>1. Our contact details</h2>
          <p>Name: Paul Albert</p>
          <p>E-mail: <a href="mailto:paul.albert@revampconsulting.co.uk">paul.albert@revampconsulting.co.uk</a></p>

          <h2>2. Publication date</h2>
          <p>This privacy notice was first published on the 7th of May 2024.</p>

          <h2>3. The type of personal information we collect</h2>
          <p>We currently collect and process the following information:</p>
          <ul>
            <li>Personal identifiers, contacts and characteristics (for example, name and contact details)</li>
          </ul>

          <h2>4. How we get the personal information and why we have it</h2>
          <p>Most of the personal information we process is provided to us directly by you for one of the following reasons:</p>
          <ul>
            <li>To enquire about our services</li>
          </ul>

          <h2>5. How we use your information</h2>
          <p>We use the information that you have given us in order to:</p>
          <ul>
            <li>Maintain an ongoing business relationship with you</li>
            <li>To ensure that we can advertise our business appropriately to interested parties</li>
          </ul>
          <p>We will not share this information with other third parties.</p>

          <h2>6. Lawful bases</h2>
          <p>Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for processing this information are:</p>
          <ul>
            <li><strong>(a) Your consent.</strong> You are able to remove your consent at any time. You can do this by contacting Paul Albert on <a href="mailto:paul@revampconsulting.co.uk">paul@revampconsulting.co.uk</a></li>
            <li><strong>(b) We have a legitimate interest.</strong></li>
          </ul>

          <h2>7. How we store your personal information</h2>
          <p>Your information is securely stored, with access restricted to username, password and two-factor authentication security.</p>
          <p>We keep your contact details for as long as there is legitimate interest to do so. We will then dispose your information securely.</p>

          <h2>8. Your data protection rights</h2>
          <p>Under data protection law, you have rights including:</p>
          <ul>
            <li><strong>Your right of access</strong> — You have the right to ask us for copies of your personal information.</li>
            <li><strong>Your right to rectification</strong> — You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
            <li><strong>Your right to erasure</strong> — You have the right to ask us to erase your personal information in certain circumstances.</li>
            <li><strong>Your right to restriction of processing</strong> — You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li>
            <li><strong>Your right to object to processing</strong> — You have the right to object to the processing of your personal information in certain circumstances.</li>
            <li><strong>Your right to data portability</strong> — You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li>
          </ul>
          <p>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>
          <p>Please contact us at <a href="mailto:paul@revampconsulting.co.uk">paul@revampconsulting.co.uk</a> if you wish to make a request.</p>

          <h2>9. How to complain</h2>
          <p>If you have any concerns about our use of your personal information, you can make a complaint to us at <a href="mailto:paul@revampconsulting.co.uk">paul@revampconsulting.co.uk</a>.</p>
          <p>You can also complain to the ICO if you are unhappy with how we have used your data.</p>
          <div className="privacy-ico">
            <p><strong>The ICO's address:</strong></p>
            <p>Information Commissioner's Office<br />
            Wycliffe House<br />
            Water Lane<br />
            Wilmslow<br />
            Cheshire<br />
            SK9 5AF</p>
            <p>Helpline number: 0303 123 1113</p>
            <p>ICO website: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">https://www.ico.org.uk</a></p>
          </div>
        </div>
      </section>

      <div className="footer-accent-line" />
      <footer className="footer">
        <div className="footer-top">
          <div className="foot-brand">
            <img src="/logo-horizontal.png" alt="RevAmp — Revenue Amplified" className="foot-logo-img" />
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Navigate</h4>
              <Link to="/">Home</Link>
              <Link to="/#about">About</Link>
              <Link to="/#proof-points">Track Record</Link>
              <Link to="/#about-me">About Me</Link>
              <Link to="/#process">How I Work</Link>
              <Link to="/#lets-talk">Contact</Link>
              <Link to="/webinar">Webinar</Link>
            </div>
            <div className="foot-col">
              <h4>Connect</h4>
              <a href="mailto:info@revampconsulting.co.uk">
                <Mail size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />
                Email
              </a>
              <a href="#">
                <Linkedin size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />
                LinkedIn
              </a>
              <a href="#">
                <Globe size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />
                Website
              </a>
            </div>
          </div>
        </div>
        <div className="foot-divider" />
        <div className="footer-bottom">
          <span>&copy; 2026 RevAmp Consulting. All rights reserved.</span>
          <Link to="/privacy" className="footer-privacy-link">Privacy Policy</Link>
        </div>
      </footer>
    </>
  )
}

export default Privacy
