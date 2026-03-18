import { useEffect, useRef } from 'react'
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

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
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
        <div className="hero-left animate animate-slide-left">
          <span className="badge badge-blue">Fractional CRO / VP Sales</span>
          <h1>Scale Your Startup Without the Full-Time Overhead.</h1>
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

      {/* FOOTER */}
      <footer className="footer">
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
