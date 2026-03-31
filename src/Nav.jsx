import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

export default function Nav({ cta, scrolled: controlledScrolled }) {
  const [internalScrolled, setInternalScrolled] = useState(false)
  const navScrolled = controlledScrolled !== undefined ? controlledScrolled : internalScrolled

  useEffect(() => {
    if (controlledScrolled !== undefined) return
    const handleScroll = () => setInternalScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controlledScrolled])

  return (
    <nav className={`nav${navScrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-left">
        <Link to="/">
          <img
            src={navScrolled ? '/favicon-white.png' : '/favicon.png'}
            alt="RevAmp"
            className="nav-logo"
          />
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
        {cta || (
          <a href="https://app.onecal.io/b/paul-albert/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Call <Calendar size={20} />
          </a>
        )}
      </div>
    </nav>
  )
}
