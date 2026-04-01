import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import {
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Menu,
  X,
  Play,
} from 'lucide-react'
import Footer from './Footer.jsx'

/* ── Count-Up Hook ── */

function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { value, ref }
}

function CountStat({ target, prefix = '', suffix = '', label }) {
  const { value, ref } = useCountUp(target)
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-value">{prefix}{value}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

/* ── Motif SVG Components ── */

function MotifPulse({ id = 'mp', h = 680, opacity = 0.12 }) {
  return (
    <div className="motif animate animate-fade-up" aria-hidden="true">
      <svg viewBox={`0 0 1440 ${h}`} preserveAspectRatio="none" fill="none" style={{ opacity }}>
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        {[0.15, 0.3, 0.45, 0.6, 0.75].map((r) => (
          <line key={`h${r}`} x1="0" y1={h * r} x2="1440" y2={h * r} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        ))}
        {[200, 500, 800, 1100].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2={h} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        ))}
        <path d={`M0,${h * 0.88} C360,${h * 0.66} 720,${h * 0.37} 1440,${h * 0.12}`} stroke="#10B98130" strokeWidth="8" />
        <path d={`M0,${h * 0.88} C360,${h * 0.66} 720,${h * 0.37} 1440,${h * 0.12}`} stroke={`url(#${id}-g)`} strokeWidth="2" />
        <circle cx="0" cy={h * 0.88} r="4" fill="#2563EB" />
        <circle cx="400" cy={h * 0.66} r="4" fill="#10B981" />
        <circle cx="800" cy={h * 0.37} r="4" fill="#2563EB" />
        <circle cx="1200" cy={h * 0.12} r="4" fill="#10B981" />
      </svg>
    </div>
  )
}

function MotifNetwork({ id = 'mn', h = 715, opacity = 0.06 }) {
  return (
    <div className="motif animate animate-fade-up" aria-hidden="true">
      <svg viewBox={`0 0 1440 ${h}`} preserveAspectRatio="none" fill="none" style={{ opacity }}>
        <circle cx="180" cy={h * 0.17} r="25" fill="#2563EB" />
        <circle cx="520" cy={h * 0.39} r="30" fill="#10B981" />
        <circle cx="900" cy={h * 0.21} r="22" fill="#2563EB" />
        <circle cx="1200" cy={h * 0.49} r="28" fill="#10B981" />
        <circle cx="350" cy={h * 0.7} r="20" fill="#2563EB" />
        <circle cx="1050" cy={h * 0.77} r="25" fill="#10B981" />
        <line x1="205" y1={h * 0.2} x2="495" y2={h * 0.37} stroke="#E5E7EB" strokeWidth="1.5" />
        <line x1="550" y1={h * 0.43} x2="875" y2={h * 0.24} stroke="#E5E7EB" strokeWidth="1.5" />
        <line x1="922" y1={h * 0.24} x2="1175" y2={h * 0.47} stroke="#E5E7EB" strokeWidth="1.5" />
        <line x1="370" y1={h * 0.73} x2="1025" y2={h * 0.77} stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="700" cy={h * 0.28} r="7" fill="#E5E7EB" />
        <circle cx="150" cy={h * 0.56} r="8" fill="#E5E7EB" />
        <circle cx="1300" cy={h * 0.25} r="6" fill="#E5E7EB" />
        <circle cx="600" cy={h * 0.84} r="9" fill="#E5E7EB" />
        <circle cx="980" cy={h * 0.59} r="7" fill="#E5E7EB" />
      </svg>
    </div>
  )
}

function MotifStaircase({ id = 'ms', h = 683, opacity = 0.08 }) {
  const bars = [
    { x: 310, h: 80 },
    { x: 490, h: 140 },
    { x: 670, h: 210 },
    { x: 850, h: 300 },
    { x: 1030, h: 400 },
  ]
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="motif" ref={ref} aria-hidden="true">
      <svg viewBox={`0 0 1440 ${h}`} preserveAspectRatio="none" fill="none" style={{ opacity }}>
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={h}
            width="100"
            height={b.h}
            rx="6"
            fill={`url(#${id}-bg)`}
            style={{
              transition: `y 1.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.25}s, height 1.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.25}s`,
              ...(visible ? { y: h - b.h, height: b.h } : { y: h, height: 0 }),
            }}
          />
        ))}
      </svg>
    </div>
  )
}

/* ── Proof Points Data ── */

const proofPoints = [
  {
    company: 'Element Human',
    role: 'Fractional Sales Leadership',
    period: '2024\u2013Present',
    headline: 'A cancelled anchor account and a burning cash runway. Here\u2019s what happened next.',
    paragraphs: [
      'Paul came in when we were a struggling business. He professionalised our revenue motion, brought energy the team desperately needed, and gave me \u2014 as a founder \u2014 the air cover to actually step back and think about the product and business holistically. I\u2019d never had that in 13 years.',
      'He pointed us toward a brand new customer base that replaced a very fickle engine \u2014 trading a one-propeller prop plane for two jets. I don\u2019t think we would have seen the bottom of the hockey stick without him.',
      'What sets Paul apart is simple: he actually gets it done. When the lift needs to happen, his sleeves are rolled up and he makes it happen \u2014 even when nobody\u2019s watching. I\u2019ve worked with a lot of expensive people over the years. Very few can say that and mean it. Paul can.',
    ],
    pullQuote: 'I don\u2019t think we would have seen the bottom of the hockey stick without him.',
    quoteAuthor: 'Matt Celuszak, CEO, Element Human',
    metrics: [
      { value: '330%', label: 'Bookings growth Y1' },
      { value: '3x', label: 'Tracking Y2' },
    ],
  },
  {
    company: 'Payhawk',
    role: 'SVP Global Sales',
    period: '2022',
    headline: 'Hired to build. Fired for not hitting 10x. Here\u2019s what we actually did in 12 months.',
    paragraphs: [
      'I was brought in to professionalise a sales, success and support organisation that was essentially one team doing everything badly. I split them into distinct functions, hired 90 people in 9 months, opened Netherlands, France and the US, built out a new Salesforce instance from scratch and laid the foundations for a revenue operations data model that could actually scale.',
      'Revenue grew 4x (\u20AC3M to \u20AC12M ARR) in a single year.',
    ],
    pullQuote: 'It wasn\u2019t the 10x the Series B demanded. But 4x from a standing start, across six markets, while building the entire infrastructure underneath it. I\u2019ll take that story any day.',
    metrics: [
      { value: '4x', label: 'Revenue growth' },
      { value: '90', label: 'Hires in 9 months' },
      { value: '6', label: 'Markets opened' },
    ],
  },
  {
    company: 'Freespee',
    role: 'SVP Global Sales',
    period: '2019\u20132021',
    headline: 'The problem wasn\u2019t the product. It was that they were selling it to everyone.',
    paragraphs: [
      'When I arrived, Freespee was saying yes to any deal that came through the door. The numbers told a different story. CAC was identical whether you were landing a small brand or an enterprise, but LTV for smaller accounts barely covered the cost of winning them. It was growth that was quietly bleeding the business.',
      'I stopped it. Closed unprofitable offices in Germany and Spain, right-sized the team and refocused the entire organisation around four verticals where the economics actually worked: Automotive, Luxury, Marketplace and Travel.',
      'It worked. MSC Cruises landed at \u00A3400k and Richemont was next in line.',
      'Then Covid hit. Every vertical we\u2019d built around (travel, luxury, automotive) shut down overnight. We shifted to protecting the base and rode it out.',
    ],
    pullQuote: 'Sometimes you build the right machine at exactly the wrong moment.',
    metrics: [
      { value: '125%', label: 'NRR' },
      { value: '9x', label: 'ACV' },
    ],
  },
  {
    company: 'Zappi',
    role: 'VP EMEA',
    period: '2015\u20132018',
    headline: 'A Google Sheet, less than \u00A3100k in revenue, and a blank map of Europe.',
    paragraphs: [
      'Zappi was scrappy in the best possible way, but scrappy doesn\u2019t scale. I came in as the commercial lead for EMEA with one job: build the European business from nothing.',
      'I introduced customer success, stood up the first Salesforce instance, hired a team that could actually go and win (many of whom are still there today as top performers). Established bases in Germany and France and made Zappi a recognised player across Europe.',
      'By the time I left, the EU business was at \u00A38M ARR as part of a \u00A325M global business. Logos included Philip Morris, Reckitt Benckiser, Nestl\u00E9 and Samsung with deals ranging from \u00A360k to \u00A31M.',
    ],
    pullQuote: 'From a Google Sheet to a growth engine. That\u2019s the job.',
    metrics: [
      { value: '\u00A38M', label: 'EU ARR at exit' },
      { value: '\u00A325M', label: 'Global business' },
      { value: '\u00A360k\u2013\u00A31M', label: 'Deal range' },
    ],
  },
  {
    company: 'Alida',
    role: 'SDR to Sales Director',
    period: '2005\u20132014',
    headline: 'Nearly a decade. Three roles. One through line: build it from nothing.',
    paragraphs: [
      'It started in Vancouver as one of the first SDRs, tasked with breaking into the US market. We did, generating 220+ discovery and demo meetings in a single year and creating the momentum that funded everything that followed.',
      'That momentum got me sent to London as the first international employee, with a blank sheet of paper and a brief to build EMEA. I hunted across the region, landed anchor accounts and built the kind of pipeline that turns a startup into a serious business. Major wins included O2, UNICEF, HSBC and Twitter.',
      'By the time I left as Sales Director, the UK business was at \u00A38M ARR.',
    ],
    pullQuote: 'Nine years. Every role earned. Every market built from scratch.',
    metrics: [
      { value: '\u00A38M', label: 'UK ARR' },
      { value: '220+', label: 'Meetings in Y1' },
      { value: '9 yrs', label: 'Tenure' },
    ],
  },
]

/* ── Proof Points Carousel ── */

function ProofCarousel() {
  const [current, setCurrent] = useState(0)
  const total = proofPoints.length
  const touchRef = useRef(null)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1))
  }, [total])

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1))
  }, [total])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  const onTouchStart = (e) => { touchRef.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchRef.current === null) return
    const diff = touchRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev() }
    touchRef.current = null
  }

  const getOffset = (index) => {
    let off = index - current
    if (off > total / 2) off -= total
    if (off < -total / 2) off += total
    return off
  }

  return (
    <div className="carousel">
      <div className="carousel-deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {proofPoints.map((pt, i) => {
          const offset = getOffset(i)
          const isActive = offset === 0
          const isVisible = Math.abs(offset) <= 2
          const isAdjacent = Math.abs(offset) === 1

          return (
            <div
              key={i}
              className={`carousel-card${isAdjacent ? ' carousel-card-adjacent' : ''}`}
              onClick={isAdjacent ? () => setCurrent(i) : undefined}
              style={{
                transform: `translateX(${offset * 72}%) scale(${isActive ? 1 : 0.9 - Math.abs(offset) * 0.03})`,
                opacity: isActive ? 1 : isAdjacent ? 0.15 : 0,
                zIndex: total - Math.abs(offset),
                pointerEvents: isActive || isAdjacent ? 'auto' : 'none',
                filter: isActive ? 'none' : 'blur(1px)',
                visibility: isVisible ? 'visible' : 'hidden',
                cursor: isAdjacent ? 'pointer' : undefined,
              }}
            >
              <div className="carousel-card-header">
                <div>
                  <h3 className="carousel-company">{pt.company}</h3>
                  <span className="carousel-role">{pt.role}, {pt.period}</span>
                </div>
                <span className="carousel-counter">{i + 1} / {total}</span>
              </div>

              <div className="carousel-card-accent" />

              <h4 className="carousel-headline">{pt.headline}</h4>

              <div className="carousel-body">
                {pt.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>

              <div className="carousel-pull-quote">
                <p>{pt.pullQuote}</p>
                {pt.quoteAuthor && <span className="carousel-quote-author">— {pt.quoteAuthor}</span>}
              </div>

              <div className="carousel-metrics">
                {pt.metrics.map((m, j) => (
                  <div key={j} className="carousel-metric">
                    <span className="carousel-metric-value">{m.value}</span>
                    <span className="carousel-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous">
          <ChevronLeft size={20} />
        </button>
        <div className="carousel-logos">
          {proofPoints.map((pt, i) => (
            <button
              key={i}
              className={`carousel-logo${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${pt.company}`}
            >
              {pt.company}
            </button>
          ))}
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

/* ── Video Embed (self-hosted, no YouTube branding) ── */

function VideoEmbed() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => videoRef.current?.play(), 0)
  }

  return (
    <div className="testimonial-video-wrap animate animate-fade-up delay-1">
      {playing ? (
        <video
          ref={videoRef}
          src="/testimonial.mp4"
          controls
          autoPlay
          playsInline
          className="testimonial-video"
        />
      ) : (
        <button className="video-poster" onClick={handlePlay} aria-label="Play video">
          <img
            src="https://img.youtube.com/vi/zcMWvvRxAYo/maxresdefault.jpg"
            alt="Client testimonial thumbnail"
            className="video-poster-img"
          />
          <div className="video-play-btn">
            <Play size={32} fill="#fff" />
          </div>
        </button>
      )}
    </div>
  )
}

/* ── Main App ── */

function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutTab, setAboutTab] = useState('professional')
  const navLinksRef = useRef(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

  /* Update sliding pill position whenever activeSection changes */
  useEffect(() => {
    const container = navLinksRef.current
    if (!container) return
    const activeLink = container.querySelector('.nav-active')
    if (activeLink) {
      const containerRect = container.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setPillStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1,
      })
    }
  }, [activeSection, navScrolled])

  useEffect(() => {
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.animate').forEach((el) => animObserver.observe(el))

    const sectionIds = ['hero', 'about', 'proof-points', 'about-me', 'process', 'lets-talk']
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.15, rootMargin: '-20% 0px -35% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    const handleScroll = () => setNavScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      animObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className={`nav${navScrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-left">
          <img src={navScrolled ? '/favicon-white.png' : '/favicon.png'} alt="RevAmp" className="nav-logo" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <div className="nav-links" ref={navLinksRef}>
            <div
              className="nav-pill"
              style={{
                transform: `translateX(${pillStyle.left}px)`,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />
            <a href="#" className={activeSection === 'hero' ? 'nav-active' : ''} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</a>
            <a href="#about" className={activeSection === 'about' ? 'nav-active' : ''}>About</a>
            <a href="#proof-points" className={activeSection === 'proof-points' ? 'nav-active' : ''}>Track Record</a>
            <a href="#process" className={activeSection === 'process' ? 'nav-active' : ''}>How I Work</a>
          </div>
        </div>
        <div className="nav-right">
          <a href="https://app.onecal.io/b/paul-albert/" target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta-desktop">
            Book a Call <Calendar size={20} />
          </a>
          <button className="burger-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />}
      <div className={`mobile-menu${mobileMenuOpen ? ' mobile-menu-open' : ''}`} style={{ top: navScrolled ? 64 : 72 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false) }}>Home</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#proof-points" onClick={() => setMobileMenuOpen(false)}>Track Record</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>How I Work</a>
        <a href="https://app.onecal.io/b/paul-albert/" target="_blank" rel="noopener noreferrer" className="btn-primary mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>
          Book a Call <Calendar size={20} />
        </a>
      </div>

      {/* HERO */}
      <section id="hero" className="hero">
        <MotifPulse id="mp1" h={680} opacity={0.12} />
        <div className="hero-left animate animate-slide-left">
          <span className="badge badge-blue">Fractional Sales Leadership</span>
          <h1>I don't advise. I sell.</h1>
          <div className="green-accent-line" />
          <p className="subtitle">
            I build the sales engine with you. Then I get on the calls and prove it works.
          </p>
          <div className="cta-row">
            <a href="https://app.onecal.io/b/paul-albert/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Call <Calendar size={20} />
            </a>
            <a href="#proof-points" className="btn-outline">
              See My Work <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="hero-right animate animate-slide-right">
          <img
            src="/PaulHeadshot.jpeg"
            alt="Paul Albert"
            className="hero-photo"
          />
        </div>
      </section>

      {/* THE REALITY CHECK */}
      <section id="about" className="section-light">
        <MotifStaircase id="ms1" h={683} opacity={0.08} />
        <span className="badge badge-primary animate animate-fade-up">The Reality Check</span>
        <h2 className="section-title animate animate-fade-up delay-1">
          Most fractional hires give you a strategy. I build you pipeline.
        </h2>
        <p className="section-subtitle animate animate-fade-up delay-2">
          The founder is still closing every deal, the sales motion isn't repeatable,
          and the gap between where you are and where you need to be feels wider every
          quarter. That's exactly where I work best.
        </p>
        <div className="principle-cards animate animate-fade-up delay-3">
          <div className="principle-card">
            <h3>Not a consultant.</h3>
            <p>
              I don't hand you a deck and leave. I'm in the room, on the calls,
              leading from the front while building the systems around the motion.
            </p>
          </div>
          <div className="principle-card">
            <h3>Not an employee.</h3>
            <p>
              No politics, no ramp time. I build the system around me and leave
              once it runs without me.
            </p>
          </div>
          <div className="principle-card">
            <h3>Selective.</h3>
            <p>
              I take on a small number of partners. I have to believe in the problem
              you're solving. If I do, I'm all in.
            </p>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="section-stats">
        <div className="stats-row">
          <CountStat target={20} suffix="+" label="Years in B2B Sales" />
          <div className="stat-divider" />
          <CountStat target={5} label="Revenue Engines Built" />
          <div className="stat-divider" />
          <CountStat target={40} prefix="£" suffix="M+" label="ARR Generated" />
          <div className="stat-divider" />
          <CountStat target={6} label="International Markets" />
        </div>
      </section>

      {/* PROOF POINTS */}
      <section id="proof-points" className="section-proof">
        <span className="badge badge-blue animate animate-fade-up">Proof Points</span>
        <h2 className="section-title dark animate animate-fade-up delay-1">
          The work speaks for itself.
        </h2>
        <div className="animate animate-fade-up delay-2" style={{ width: '100%' }}>
          <ProofCarousel />
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about-me" className="section-light">
        <div className="about-me-layout animate animate-fade-up">
          <div className="about-me-photo-wrap">
            <img
              src={aboutTab === 'professional' ? '/paul-professional.jpg' : '/paul-family.jpg'}
              alt={aboutTab === 'professional' ? 'Paul Albert' : 'Paul Albert with his family'}
              className="about-me-photo"
            />
          </div>
          <div className="about-me-content">
            <span className="badge badge-primary">About Me</span>
            <h2 className="about-me-title">Paul Albert</h2>
            <div className="about-me-tabs">
              <button
                className={`about-me-tab${aboutTab === 'professional' ? ' active' : ''}`}
                onClick={() => setAboutTab('professional')}
              >
                Professional
              </button>
              <button
                className={`about-me-tab${aboutTab === 'personal' ? ' active' : ''}`}
                onClick={() => setAboutTab('personal')}
              >
                Personal
              </button>
            </div>
            <div className="about-me-tab-panels">
              <div className={`about-me-tab-content${aboutTab === 'personal' ? ' active' : ''}`}>
                <p className="about-me-lead">
                  The Canadian who cold called his way to the British countryside. Literally.
                </p>
                <p className="about-me-body">
                  I moved to the UK in 2008 with a bag, a plan, and the kind of resilience
                  you develop growing up Canadian. Within months, I made the most important
                  cold call in my life. This is how I met my wife, the longest deal with
                  the best net retention I could imagine!
                </p>
                <p className="about-me-body">
                  These days I live in the English countryside with her, our two daughters,
                  a Husky Malamute who thinks he runs the house, and spend too much time
                  cooking, inside and outside. The outdoors keeps me sane. The cooking keeps
                  everyone fed. The wife, kids and dog keeps me humble.
                </p>
                <p className="about-me-body">
                  None of that is incidental. It's who I am — and it's probably why the
                  founders I work with trust me. I'm not a slick agency. I'm not a PowerPoint
                  merchant. I'm a person who's built real things, made real mistakes, and
                  tells you what he actually thinks.
                </p>
              </div>
              <div className={`about-me-tab-content${aboutTab === 'professional' ? ' active' : ''}`}>
                <p className="about-me-lead">
                  The story is just as straightforward.
                </p>
                <p className="about-me-body">
                  Twenty years in B2B sales. Five revenue engines built from scratch. Six
                  international markets opened. I've done the job you're hiring for — at
                  every stage from SDR to SVP.
                </p>
                <p className="about-me-body">
                  I specialise in InsightTech/ResearchTech, MarTech and Fintech companies
                  between Seed and Series B. That's the stage where the founder is still
                  closing every deal, the sales motion isn't repeatable, and the gap between
                  where you are and where you need to be feels wider every quarter. I've been
                  in that seat. I know what it takes.
                </p>
                <p className="about-me-body">
                  I'm not building a consulting empire. I take on a small number of partners,
                  go deep, and stay until the system runs without me — or step back into an
                  advisory role once it does. If I don't believe in the problem you're solving,
                  I'll tell you. Straight.
                </p>
                <div className="about-me-tags">
                  <span>InsightTech / ResearchTech</span>
                  <span>MarTech</span>
                  <span>FinTech</span>
                  <span>Seed – Series B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-testimonial">
        <span className="badge badge-blue animate animate-fade-up">What Clients Say</span>
        <VideoEmbed />
        <div className="testimonial-author animate animate-fade-up delay-2">
          <div>
            <span className="testimonial-name">Matt Celuszak</span>
            <span className="testimonial-role">CEO, Element Human</span>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section id="process" className="section-light">
        <span className="badge badge-primary animate animate-fade-up">How I Work</span>
        <h2 className="section-title animate animate-fade-up delay-1">
          Three phases. One outcome.
        </h2>
        <p className="section-subtitle animate animate-fade-up delay-2">
          Every engagement follows the same arc — diagnose, build, scale.
        </p>
        <div className="process-steps">
          <div className="process-step animate animate-fade-up delay-3">
            <div className="process-number">01</div>
            <h3>Revenue Audit</h3>
            <p>
              I map your pipeline, pricing, team structure, and sales motion.
              You get an honest diagnosis — whether we work together or not.
            </p>
          </div>
          <div className="process-connector animate animate-fade-up delay-3" />
          <div className="process-step animate animate-fade-up delay-4">
            <div className="process-number">02</div>
            <h3>Build the Engine</h3>
            <p>
              I'm in the field — closing deals, hiring reps, standing up the CRM,
              building the playbook. The system gets built while revenue comes in.
            </p>
          </div>
          <div className="process-connector animate animate-fade-up delay-4" />
          <div className="process-step animate animate-fade-up delay-5">
            <div className="process-number">03</div>
            <h3>Scale & Optimise</h3>
            <p>
              The engine is running. Now I shift from building to scaling —
              coaching the team, refining the playbook, and pushing into new
              segments. The system gets better every quarter.
            </p>
          </div>
        </div>
      </section>

      {/* LET'S TALK */}
      <section id="lets-talk" className="section-cta">
        <MotifPulse id="mp3" h={832} opacity={0.1} />
        <div className="section-header animate animate-fade-up">
          <h2 className="section-title">Let's Talk</h2>
          <p className="section-subtitle">There are two ways in.</p>
        </div>
        <div className="talk-cards animate animate-fade-up delay-2">
          <div className="talk-card">
            <div className="talk-card-icon">
              <Presentation size={28} />
            </div>
            <h3>Is Your Deck Killing Your Deals?</h3>
            <p>
              The monthly masterclass for founders and sales leaders who are tired
              of great pitches ending in no decision.
            </p>
            <Link to="/webinar" className="btn-secondary">
              Reserve Your Spot <ArrowRight size={18} />
            </Link>
          </div>
          <div className="talk-card">
            <div className="talk-card-icon">
              <Calendar size={28} />
            </div>
            <h3>Book a Revenue Audit — 30 Minutes</h3>
            <p>
              If you're wondering whether your sales motion is broken or just needs
              tuning, let's find out. I'll tell you what I see, honestly, whether we
              work together or not.
            </p>
            <a href="https://app.onecal.io/b/paul-albert/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book the Audit <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER ACCENT LINE */}
      {/* FOOTER */}
      <Footer>
        <MotifPulse id="mp4" h={304} opacity={0.07} />
      </Footer>
    </>
  )
}

export default App
