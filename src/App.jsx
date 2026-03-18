import { useEffect } from 'react'
import './App.css'
import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Target,
  Layers,
  BarChart3,
  Users,
  FlaskConical,
  CircleCheckBig,
  Presentation,
  ExternalLink,
  Mail,
  Linkedin,
  Globe,
} from 'lucide-react'

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
    { x: 100, h: 80 },
    { x: 320, h: 140 },
    { x: 540, h: 210 },
    { x: 760, h: 300 },
    { x: 980, h: 400 },
  ]
  return (
    <div className="motif animate animate-fade-up" aria-hidden="true">
      <svg viewBox={`0 0 1440 ${h}`} preserveAspectRatio="none" fill="none" style={{ opacity }}>
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        {bars.map((b, i) => (
          <rect key={i} x={b.x} y={h - b.h} width="80" height={b.h} rx="4" fill={`url(#${id}-bg)`} />
        ))}
        {bars.slice(0, -1).map((b, i) => (
          <line key={`c${i}`} x1={b.x + 80} y1={h - b.h} x2={bars[i + 1].x} y2={h - bars[i + 1].h} stroke="rgba(255,255,255,0.19)" strokeWidth="1" />
        ))}
        {bars.map((b, i) => (
          <circle key={`d${i}`} cx={b.x + 34} cy={h - b.h - 6} r="4" fill="#10B981" />
        ))}
      </svg>
    </div>
  )
}

function MotifGeometric({ h = 679, opacity = 0.04 }) {
  return (
    <div className="motif animate animate-fade-up" aria-hidden="true">
      <svg viewBox={`0 0 1440 ${h}`} preserveAspectRatio="none" fill="none" style={{ opacity }}>
        <rect x="40" y="30" width="160" height="120" rx="16" fill="#2563EB" />
        <rect x="1250" y="50" width="140" height="100" rx="12" fill="#10B981" />
        <rect x="80" y="520" width="120" height="150" rx="20" fill="#7C3AED" />
        <rect x="1280" y="480" width="100" height="130" rx="14" fill="#2563EB" />
        <rect x="1100" y="30" width="180" height="80" rx="10" fill="#10B981" />
        <rect x="200" y="400" width="50" height="50" rx="6" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <rect x="1100" y="560" width="40" height="40" rx="4" stroke="#2563EB" strokeWidth="2" fill="none" />
        <rect x="350" y="80" width="60" height="60" rx="8" stroke="#10B981" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

/* ── Main App ── */

function App() {
  useEffect(() => {
    // Skip JS observer when native scroll-driven CSS is supported
    if (typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline', 'view()')) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    const elements = document.querySelectorAll('.animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-left">
          <div className="logo-placeholder">R</div>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#workshops">Workshops</a>
          </div>
        </div>
        <div>
          <a href="#contact" className="btn-primary">
            Book a Call <Calendar size={20} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <MotifPulse id="mp1" h={680} opacity={0.12} />
        <div className="hero-left animate animate-slide-left">
          <span className="badge badge-blue">Fractional CRO / VP Sales</span>
          <h1>Scale Your Startup Without the Full-Time Overhead.</h1>
          <div className="green-accent-line" />
          <p className="subtitle">
            High-impact Fractional CRO/VP Sales leadership to codify your sales
            motion, mentor your team, and bridge the gap from 0 to £10M+ ARR.
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn-primary">
              Book a 30-Minute Discovery Call <Calendar size={20} />
            </a>
            <a href="#track-record" className="btn-outline">
              View Case Studies <ArrowRight size={20} />
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

      {/* SECTION 2 — Reality Check */}
      <section id="about" className="section-light">
        <MotifNetwork id="mn1" h={715} opacity={0.06} />
        <span className="badge badge-primary animate animate-fade-up">The Reality Check</span>
        <h2 className="section-title animate animate-fade-up delay-1">
          Founder-Led Sales is a Superpower. But It's Not a System.
        </h2>
        <p className="section-subtitle animate animate-fade-up delay-2">
          You've proven the market. Closed the first deals yourself. But as your
          team grows, those heroic founder-led efforts need to become a
          repeatable, scalable engine. That's the hardest transition — and the
          one most startups get wrong.
        </p>
        <div className="card-strip animate animate-fade-up delay-3">
          <div className="glass-card animate animate-fade-up delay-1">
            <h3>The Problem</h3>
            <p>
              Bespoke efforts that can't be replicated. Every deal depends on
              the founder, and nothing is documented or transferable.
            </p>
          </div>
          <div className="glass-card animate animate-fade-up delay-2">
            <h3>The Gap</h3>
            <p>
              No clear processes, metrics, or pipeline management. The team is
              flying blind without a structured sales methodology.
            </p>
          </div>
          <div className="glass-card animate animate-fade-up delay-3">
            <h3>The Solution</h3>
            <p>
              Codifying the founder's magic into a repeatable, data-driven
              strategy that scales with the team and survives beyond any one
              person.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Track Record */}
      <section id="track-record" className="section-dark">
        <MotifStaircase id="ms1" h={683} opacity={0.08} />
        <span className="badge badge-blue animate animate-fade-up">Proven Results</span>
        <h2 className="section-title dark animate animate-fade-up delay-1">
          The "0 to £10M+" Track Record
        </h2>
        <p className="section-subtitle dark animate animate-fade-up delay-2">
          20+ years of building and scaling B2B SaaS revenue engines — from
          Series A to Series D and beyond.
        </p>
        <div className="track-table animate animate-fade-up delay-3">
          <div className="table-header">
            <span>Company</span>
            <span>Impact</span>
            <span>Milestone</span>
          </div>
          <div className="table-row animate animate-fade-up delay-1">
            <span className="company">Alida</span>
            <span className="impact">Market Leader Entry</span>
            <span className="milestone">0 — £8M ARR</span>
          </div>
          <div className="table-row animate animate-fade-up delay-2">
            <span className="company">Zappi</span>
            <span className="impact">Ground-up Build</span>
            <span className="milestone">0 — £8M ARR</span>
          </div>
          <div className="table-row animate animate-fade-up delay-3">
            <span className="company">Kaisa</span>
            <span className="impact">Upmarket Pivot</span>
            <span className="milestone">£8M — £12M ARR</span>
          </div>
          <div className="table-row animate animate-fade-up delay-4">
            <span className="company">Payhawk</span>
            <span className="impact">
              Rapid Team Scaling · 30→110 people
            </span>
            <span className="milestone">£3.5M — £12M ARR</span>
          </div>
          <div className="table-row animate animate-fade-up delay-5">
            <span className="company">Rest Less</span>
            <span className="impact">GTM &amp; Product-Market Fit</span>
            <span className="milestone">£1M — £2.25M Run Rate</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Fractional Model */}
      <section id="services" className="section-light">
        <MotifGeometric h={679} opacity={0.04} />
        <span className="badge badge-primary animate animate-fade-up">The Fractional Advantage</span>
        <h2 className="section-title animate animate-fade-up delay-1">Expertise at a Fraction</h2>
        <p className="section-subtitle animate animate-fade-up delay-2">
          Think of me as a high-performance plug-in for your leadership team —
          senior revenue expertise without the full-time commitment, cost, or
          risk.
        </p>
        <div className="grid-wrap">
          <div className="grid-row">
            <div className="feature-card animate animate-fade-up delay-1">
              <div className="icon-wrap">
                <TrendingUp size={28} />
                <h3>Accelerated Revenue</h3>
              </div>
              <p>
                Pipeline ownership, deal strategy, and hands-on closing support
                to drive immediate revenue impact from day one.
              </p>
            </div>
            <div className="feature-card animate animate-fade-up delay-2">
              <div className="icon-wrap">
                <Target size={28} />
                <h3>Elite Performance</h3>
              </div>
              <p>
                Rigorous discovery, qualification, and expansion frameworks that
                turn good reps into great ones.
              </p>
            </div>
          </div>
          <div className="grid-row">
            <div className="feature-card animate animate-fade-up delay-3">
              <div className="icon-wrap accent">
                <Layers size={28} />
                <h3>Scalable Infrastructure</h3>
              </div>
              <p>
                Optimizing your CRM, sales tools, and tech stack to create a
                foundation that grows with you — not against you.
              </p>
            </div>
            <div className="feature-card animate animate-fade-up delay-4">
              <div className="icon-wrap">
                <BarChart3 size={28} />
                <h3>Data-Driven Logic</h3>
              </div>
              <p>
                Metrics, dashboards, and visibility into every stage of your
                pipeline so decisions are made on data, not gut feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — How I Help */}
      <section className="section-dark" style={{ gap: 48 }}>
        <MotifPulse id="mp2" h={780} opacity={0.1} />
        <span className="badge animate animate-fade-up" style={{ background: 'rgba(37,99,235,0.15)', color: '#60A5FA' }}>
          Hands-On Leadership
        </span>
        <div className="section-header animate animate-fade-up delay-1">
          <h2 className="section-title dark">How I Help Founders</h2>
          <p className="section-subtitle dark" style={{ fontSize: 18 }}>
            I'm not a "slides and spreadsheets" consultant. I love being in the
            field with reps, talking directly to customers, and seeing Slack
            light up with wins.
          </p>
        </div>
        <div className="help-columns">
          <div className="help-card animate animate-slide-left delay-2">
            <div className="help-card-header">
              <div className="help-card-icon blue">
                <Users size={22} />
              </div>
              <h3>Management &amp; Mentoring</h3>
            </div>
            <div className="help-items">
              <div className="help-item">
                <h4>Operating Cadence</h4>
                <p>
                  High-accountability 1:1s, pipeline reviews, and coaching
                  sessions that build muscle memory.
                </p>
              </div>
              <div className="help-item">
                <h4>Co-Selling</h4>
                <p>
                  Owning and progressing critical opportunities alongside your
                  team — not from the sidelines.
                </p>
              </div>
              <div className="help-item">
                <h4>Hiring &amp; Culture</h4>
                <p>
                  Building career pathways and hiring guides to attract A-players
                  who stay and grow.
                </p>
              </div>
            </div>
          </div>
          <div className="help-card animate animate-slide-right delay-3">
            <div className="help-card-header">
              <div className="help-card-icon purple">
                <FlaskConical size={22} />
              </div>
              <h3>Evidence-Based Frameworks</h3>
            </div>
            <div className="help-items">
              <div className="help-item">
                <h4>Methodology</h4>
                <p>
                  Implementing high-impact frameworks like MEDDPIC or Challenger
                  Sales tailored to your market.
                </p>
              </div>
              <div className="help-item">
                <h4>CRM Design</h4>
                <p>
                  Mapping your HubSpot or Salesforce data model to the actual
                  customer lifecycle — not the other way around.
                </p>
              </div>
              <div className="help-item">
                <h4>Forecasting</h4>
                <p>
                  Replacing guesswork with leading indicators and hard data that
                  your board can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Workshop */}
      <section id="workshops" className="section-gradient">
        <MotifNetwork id="mn2" h={781} opacity={0.05} />
        <span className="badge badge-accent animate animate-fade-up">Exclusive Workshop</span>
        <div className="section-header animate animate-fade-up delay-1">
          <h2 className="section-title">
            Stop Pitching. Start Leading
            <br />
            with a Sales Narrative.
          </h2>
          <p className="section-subtitle" style={{ fontSize: 18 }}>
            In collaboration with Insight Platforms, I run exclusive 90-minute
            workshops for founders and sales leaders.
          </p>
        </div>
        <div className="workshop-content">
          <div className="ws-info animate animate-slide-left delay-2">
            <div>
              <h3>The Goal</h3>
              <p className="ws-desc">
                Learn how to build a world-class sales narrative using the
                Challenger Choreography.
              </p>
            </div>
            <div className="check-list">
              <div className="check-item">
                <CircleCheckBig size={22} />
                <p>
                  Identify your "Commercial Insight" — the reframe that changes
                  how buyers think.
                </p>
              </div>
              <div className="check-item">
                <CircleCheckBig size={22} />
                <p>
                  Break the "Sea of Sameness" in your market with a
                  differentiated narrative.
                </p>
              </div>
              <div className="check-item">
                <CircleCheckBig size={22} />
                <p>
                  Create a step-by-step presentation framework that wins deals.
                </p>
              </div>
            </div>
          </div>
          <div className="ws-cta-card animate animate-slide-right delay-3">
            <div className="ws-icon">
              <Presentation size={32} />
            </div>
            <span className="ws-label">Next Workshop</span>
            <span className="ws-time">
              90 Minutes
              <br />
              Live &amp; Interactive
            </span>
            <a href="#contact" className="btn-secondary">
              Register for Next Workshop <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Contact */}
      <section id="contact" className="section-cta">
        <MotifStaircase id="ms2" h={832} opacity={0.1} />
        <div className="section-header animate animate-fade-up">
          <h2 className="section-title">
            Ready to give your sales motion
            <br />a new pair of kicks?
          </h2>
          <p className="section-subtitle">
            Let's discuss your current roadblocks and see if a fractional
            approach is the right fit for your current stage.
          </p>
        </div>
        <div className="contact-card animate animate-scale delay-2">
          <div className="cal-side">
            <h3>Book a Discovery Call</h3>
            <p className="cal-desc">
              30 minutes to explore your current stage, roadblocks, and whether
              a fractional CRO/VP Sales is the right move.
            </p>
            <div className="cal-placeholder">
              <Calendar size={32} />
              <span>Cal.com / Calendly Embed</span>
            </div>
            <a href="#" className="btn-primary">
              Book a 30-Minute Call <Calendar size={20} />
            </a>
          </div>
          <div className="info-side">
            <h3>Get in Touch</h3>
            <div className="info-items">
              <div className="info-row">
                <Mail size={20} />
                <span>info@revampconsulting.co.uk</span>
              </div>
              <div className="info-row">
                <Linkedin size={20} />
                <span>Paul Albert</span>
              </div>
              <div className="info-row">
                <Globe size={20} />
                <span>revampconsulting.co.uk</span>
              </div>
            </div>
            <div className="info-divider" />
            <p className="info-quote">
              "Paul doesn't just advise — he rolls up his sleeves and makes it
              happen."
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER ACCENT LINE */}
      <div className="footer-accent-line" />

      {/* FOOTER */}
      <footer className="footer">
        <MotifPulse id="mp3" h={304} opacity={0.07} />
        <div className="footer-top">
          <div className="foot-brand">
            <div className="foot-logo">
              <div className="foot-logo-icon">
                <TrendingUp size={18} />
              </div>
              <span>revamp</span>
            </div>
            <p className="foot-tag">
              Fractional CRO/VP Sales for high-growth startups
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Services</h4>
              <a href="#">Fractional CRO</a>
              <a href="#">Sales Strategy</a>
              <a href="#">Team Scaling</a>
              <a href="#">Workshops</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Case Studies</a>
              <a href="#">Contact</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="foot-divider" />
        <div className="footer-bottom">
          <span>&copy; 2026 RevAmp Consulting. All rights reserved.</span>
          <span>Designed with the Growth Gradient × Liquid Glass system</span>
        </div>
      </footer>
    </>
  )
}

export default App
