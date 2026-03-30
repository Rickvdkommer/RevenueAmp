import { Link } from 'react-router-dom'
import { Mail, Linkedin, Globe } from 'lucide-react'

export default function Footer({ children }) {
  return (
    <>
      <div className="footer-accent-line" />
      <footer className="footer">
        {children}
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
          <span>&copy; {new Date().getFullYear()} RevAmp Consulting. All rights reserved.</span>
          <Link to="/privacy" className="footer-privacy-link">Privacy Policy</Link>
        </div>
      </footer>
    </>
  )
}
