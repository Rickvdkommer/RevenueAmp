import { useEffect } from 'react'
import './artdeco.css'
import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Target,
  Layers,
  Users,
  Mail,
  Linkedin,
} from 'lucide-react'

function AppArtDeco() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.ad-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="artdeco">
      {/* NAV */}
      <nav className="ad-nav">
        <a href="#" className="ad-nav-logo">RevAmp</a>
        <div className="ad-nav-links">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#method">Method</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="ad-btn-gold">Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="ad-hero">
        {/* Left decorative lines */}
        <div className="ad-hero-deco ad-hero-deco-left">
          <div className="ad-deco-line" style={{ left: 40 }} />
          <div className="ad-deco-line" style={{ left: 80 }} />
          <div className="ad-deco-line" style={{ left: 120 }} />
          <div className="ad-deco-diamond" style={{ left: 50, top: 200 }} />
          <div className="ad-deco-diamond green" style={{ left: 90, top: 400 }} />
        </div>
        {/* Right decorative lines */}
        <div className="ad-hero-deco ad-hero-deco-right">
          <div className="ad-deco-line" style={{ right: 40 }} />
          <div className="ad-deco-line" style={{ right: 80 }} />
          <div className="ad-deco-line" style={{ right: 120 }} />
          <div className="ad-deco-diamond" style={{ right: 50, top: 250 }} />
        </div>

        <div className="ad-hero-content ad-animate ad-fade-up">
          <div className="ad-badge">
            <span className="ad-badge-dot" />
            <span className="ad-badge-text">FRACTIONAL CRO & VP SALES</span>
          </div>
          <h1 className="ad-hero-title">
            Revenue Growth,<br />Elevated.
          </h1>
          <p className="ad-hero-subtitle">
            Executive sales leadership that transforms your pipeline into
            a precision-engineered revenue machine.
          </p>
          <div className="ad-gold-rule" />
          <div className="ad-cta-row">
            <a href="#contact" className="ad-btn-gold-lg">
              Schedule Discovery Call <Calendar size={16} />
            </a>
            <a href="#results" className="ad-btn-outline">
              View Case Studies <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* DECO DIVIDER */}
      <DecoDivider />

      {/* REALITY CHECK */}
      <section className="ad-section dark">
        <span className="ad-label ad-animate ad-fade-up">THE REALITY</span>
        <h2 className="ad-section-title ad-animate ad-fade-up ad-delay-1">
          Why Most Sales Orgs<br />Fall Short
        </h2>
        <div className="ad-stats-row ad-animate ad-fade-up ad-delay-2">
          <div className="ad-stat-card">
            <span className="ad-stat-number">68%</span>
            <span className="ad-stat-desc">of sales teams miss<br />their annual targets</span>
          </div>
          <div className="ad-stat-card">
            <span className="ad-stat-number">18mo</span>
            <span className="ad-stat-desc">average tenure of<br />a VP Sales hire</span>
          </div>
          <div className="ad-stat-card">
            <span className="ad-stat-number">$2.1M</span>
            <span className="ad-stat-desc">average cost of a<br />failed sales leader hire</span>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="results" className="ad-section darker">
        <span className="ad-label green ad-animate ad-fade-up">PROVEN RESULTS</span>
        <h2 className="ad-section-title ad-animate ad-fade-up ad-delay-1">
          A Track Record That<br />Speaks for Itself
        </h2>
        <div className="ad-metrics-grid ad-animate ad-fade-up ad-delay-2">
          <div className="ad-metric-card">
            <span className="ad-metric-value gold">+240%</span>
            <span className="ad-metric-label">Pipeline Growth</span>
          </div>
          <div className="ad-metric-card">
            <span className="ad-metric-value green">18mo</span>
            <span className="ad-metric-label">Avg Engagement</span>
          </div>
          <div className="ad-metric-card">
            <span className="ad-metric-value gold">$4.2M</span>
            <span className="ad-metric-label">Revenue Influenced</span>
          </div>
          <div className="ad-metric-card">
            <span className="ad-metric-value blue">3</span>
            <span className="ad-metric-label">Active Clients</span>
          </div>
        </div>
      </section>

      {/* DECO DIVIDER */}
      <DecoDivider variant="green" />

      {/* FRACTIONAL MODEL */}
      <section id="method" className="ad-section dark">
        <span className="ad-label ad-animate ad-fade-up">THE MODEL</span>
        <h2 className="ad-section-title ad-animate ad-fade-up ad-delay-1">
          Fractional Excellence<br />vs. Full-Time Gamble
        </h2>
        <div className="ad-comparison ad-animate ad-fade-up ad-delay-2">
          <div className="ad-comp-col recommended">
            <div className="ad-comp-badge"><span>RECOMMENDED</span></div>
            <h3 className="ad-comp-title">Fractional CRO</h3>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet green" />
              <span>Immediate senior leadership impact</span>
            </div>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet green" />
              <span>No long-term commitment required</span>
            </div>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet green" />
              <span>Fraction of full-time executive cost</span>
            </div>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet green" />
              <span>Battle-tested across industries</span>
            </div>
          </div>
          <div className="ad-comp-col dimmed">
            <h3 className="ad-comp-title">Full-Time VP Sales</h3>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet red" />
              <span>6-9 month ramp-up period</span>
            </div>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet red" />
              <span>$350K+ total compensation</span>
            </div>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet red" />
              <span>18-month average tenure</span>
            </div>
            <div className="ad-comp-item">
              <div className="ad-diamond-bullet red" />
              <span>$2.1M cost of failed hire</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section id="services" className="ad-section darker">
        <span className="ad-label ad-animate ad-fade-up">CAPABILITIES</span>
        <h2 className="ad-section-title ad-animate ad-fade-up ad-delay-1">
          How I Elevate<br />Your Revenue Engine
        </h2>
        <div className="ad-features-grid">
          <div className="ad-feature-card ad-animate ad-fade-up ad-delay-1">
            <Target size={24} color="#C9A962" />
            <h3 className="ad-feature-title">Revenue<br />Architecture</h3>
            <p className="ad-feature-desc">
              End-to-end revenue strategy from ICP definition to closed-won optimization.
            </p>
            <div className="ad-feature-rule gold" />
          </div>
          <div className="ad-feature-card ad-animate ad-fade-up ad-delay-2">
            <TrendingUp size={24} color="#10B981" />
            <h3 className="ad-feature-title">Pipeline<br />Acceleration</h3>
            <p className="ad-feature-desc">
              Systematic pipeline generation and velocity optimization across all stages.
            </p>
            <div className="ad-feature-rule green" />
          </div>
          <div className="ad-feature-card ad-animate ad-fade-up ad-delay-3">
            <Users size={24} color="#2563EB" />
            <h3 className="ad-feature-title">Sales Team<br />Enablement</h3>
            <p className="ad-feature-desc">
              Hiring frameworks, coaching programs, and performance systems that scale.
            </p>
            <div className="ad-feature-rule blue" />
          </div>
          <div className="ad-feature-card ad-animate ad-fade-up ad-delay-4">
            <Layers size={24} color="#C9A962" />
            <h3 className="ad-feature-title">Scalable<br />Infrastructure</h3>
            <p className="ad-feature-desc">
              Tech stack optimization, process automation, and data-driven decision frameworks.
            </p>
            <div className="ad-feature-rule gold" />
          </div>
        </div>
      </section>

      {/* WORKSHOP CTA */}
      <section className="ad-workshop">
        <div className="ad-workshop-bg">
          <div className="ad-ws-line" style={{ top: 100 }} />
          <div className="ad-ws-line" style={{ top: 200 }} />
          <div className="ad-ws-line" style={{ top: 300 }} />
          <div className="ad-ws-diamond" style={{ left: 100, top: 50, width: 80, height: 80, background: '#C9A962' }} />
          <div className="ad-ws-diamond" style={{ right: 100, top: 250, width: 60, height: 60, background: '#10B981' }} />
        </div>
        <div className="ad-workshop-content ad-animate ad-fade-up">
          <span className="ad-label">EXCLUSIVE OFFERING</span>
          <h2 className="ad-section-title">
            Revenue Architecture<br />Workshop
          </h2>
          <p className="ad-hero-subtitle">
            A focused half-day session to audit your current revenue engine
            and build a 90-day transformation roadmap.
          </p>
          <div className="ad-gold-rule" style={{ width: 60 }} />
          <a href="#contact" className="ad-btn-gold-lg">
            Reserve Your Session <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="ad-section darker">
        <span className="ad-label green ad-animate ad-fade-up">GET IN TOUCH</span>
        <h2 className="ad-section-title ad-animate ad-fade-up ad-delay-1">
          Let's Build Something<br />Extraordinary
        </h2>
        <p className="ad-hero-subtitle ad-animate ad-fade-up ad-delay-2">
          Ready to transform your revenue engine? Start with a conversation.
        </p>
        <div className="ad-contact-links ad-animate ad-fade-up ad-delay-3">
          <a href="mailto:info@revampconsulting.co.uk" className="ad-contact-btn">
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a href="#" className="ad-contact-btn">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="ad-contact-btn filled">
            <Calendar size={16} />
            <span>Book a Call</span>
          </a>
        </div>
      </section>

      {/* FOOTER GRADIENT LINE */}
      <div className="ad-footer-gradient" />

      {/* FOOTER */}
      <footer className="ad-footer">
        <div className="ad-footer-top">
          <a href="#" className="ad-nav-logo" style={{ fontSize: 20 }}>RevAmp</a>
          <div className="ad-footer-links">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#method">Workshop</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="ad-footer-line" />
        <div className="ad-footer-bottom">
          <span>&copy; 2025 RevAmp Consulting. All rights reserved.</span>
          <span className="italic">Fractional CRO & VP Sales Leadership</span>
        </div>
      </footer>
    </div>
  )
}

/* Reusable Art Deco diamond divider */
function DecoDivider({ variant = 'gold' }) {
  return (
    <div className="ad-divider">
      <div className="ad-divider-line" />
      <div className={`ad-divider-diamond ${variant === 'green' ? 'green' : ''}`} />
      <div className="ad-divider-line" style={{ width: 60 }} />
      <div className="ad-divider-diamond small" />
      <div className="ad-divider-line" />
    </div>
  )
}

export default AppArtDeco
