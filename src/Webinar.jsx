import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Calendar,
  Target,
  BarChart3,
  Layers,
  MessageSquare,
  TrendingUp,
  Zap,
  Trophy,
  Rocket,
  Users,
  Mail,
  Linkedin,
  Globe,
} from 'lucide-react'
import './webinar.css'

const CTA_URL = '#register'

function Webinar() {
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => setNavScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="lp">
      {/* ─── NAV ─── */}
      <nav className={`nav${navScrolled ? ' nav-scrolled' : ''}`}>
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
          <a href={CTA_URL} className="btn-primary">
            Reserve Your Spot <Calendar size={20} />
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="lp-hero">
        <div className="lp-hero-bg" aria-hidden="true" />
        <div className="lp-hero-content animate animate-fade-up">
          <span className="lp-eyebrow">FREE MONTHLY MASTERCLASS</span>
          <h1 className="lp-headline">
            Is Your Deck <span className="lp-highlight">Killing</span> Your Deals?
          </h1>
          <p className="lp-subheadline">
            Most founders lose deals before the demo even starts. In 60 minutes,
            learn the exact framework used to close Netflix, Ogilvy, and Dentsu.
          </p>
          <a href={CTA_URL} className="lp-cta-btn">
            Reserve Your Spot <ArrowRight size={20} />
          </a>
          <div className="lp-trust-row">
            <span>Led by Paul Albert, Fractional CRO</span>
            <span className="lp-trust-dot" />
            <span>60 min live session</span>
            <span className="lp-trust-dot" />
            <span>100% free</span>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM-AGITATE ─── */}
      <section className="lp-problems">
        <div className="lp-section-inner">
          <span className="lp-badge animate animate-fade-up">Sound familiar?</span>
          <h2 className="lp-section-title animate animate-fade-up">
            Three reasons your pipeline keeps stalling
          </h2>
          <div className="lp-problem-cards">
            <div className="lp-problem-card animate animate-fade-up">
              <div className="lp-problem-num">01</div>
              <h3>You're pitching features, not outcomes</h3>
              <p>
                Your deck reads like a product manual. Prospects nod politely,
                ask for a follow-up, and then go silent. They didn't see themselves
                in your story — because you never told one.
              </p>
            </div>
            <div className="lp-problem-card animate animate-fade-up delay-1">
              <div className="lp-problem-num">02</div>
              <h3>You don't know what's actually killing your deals</h3>
              <p>
                Is it the pitch? The pricing? The follow-up? Without a data model
                telling you where deals die, you're guessing. And guessing at
                Series A doesn't work.
              </p>
            </div>
            <div className="lp-problem-card animate animate-fade-up delay-2">
              <div className="lp-problem-num">03</div>
              <h3>Your sales motion doesn't scale</h3>
              <p>
                What works when the founder sells breaks the moment anyone else
                tries. There's no ICP, no repeatable process, no structure.
                Just hustle — and hustle has a ceiling.
              </p>
            </div>
          </div>
          <div className="lp-transition animate animate-fade-up">
            <p>
              I've sat across the table from hundreds of founders making
              these exact mistakes. Here's what I've learned:
              <strong> the problem is almost never the product. It's the pitch.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUE STACK ─── */}
      <section className="lp-value">
        <div className="lp-section-inner">
          <span className="lp-badge-dark animate animate-fade-up">What you'll learn</span>
          <h2 className="lp-section-title dark animate animate-fade-up">
            60 minutes that will change how you sell
          </h2>
          <div className="lp-value-grid">
            <div className="lp-value-card animate animate-fade-up">
              <div className="lp-value-icon"><Target size={24} /></div>
              <h3>GTM Strategy & ICP</h3>
              <p>
                Stop selling to everyone. Define your target market, ideal customer
                profile, and buyer personas so every conversation counts.
              </p>
            </div>
            <div className="lp-value-card animate animate-fade-up delay-1">
              <div className="lp-value-icon"><BarChart3 size={24} /></div>
              <h3>The 5 Numbers That Matter</h3>
              <p>
                CAC, CLV, Sales Velocity, Pipeline Coverage, Sales Efficiency —
                the metrics that predict whether your startup lives or dies.
              </p>
            </div>
            <div className="lp-value-card animate animate-fade-up delay-2">
              <div className="lp-value-icon"><Layers size={24} /></div>
              <h3>Sales Structure</h3>
              <p>
                Why most startups are stuck at Level 1 selling (feature-benefit)
                and the exact steps to Level 4 — where you become part of the
                customer's value proposition.
              </p>
            </div>
            <div className="lp-value-card animate animate-fade-up delay-3">
              <div className="lp-value-icon"><MessageSquare size={24} /></div>
              <h3>The SPICE Framework</h3>
              <p>
                Situation, Pain, Impact, Critical Event — the discovery framework
                that turns cold prospects into committed buyers.
              </p>
            </div>
          </div>
          <div className="lp-value-price animate animate-fade-up">
            <div className="lp-price-compare">
              <span className="lp-price-crossed">Value: £2,000+ in consulting insights</span>
              <span className="lp-price-actual">Your price: Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="lp-proof">
        <div className="lp-section-inner">
          <span className="lp-badge animate animate-fade-up">Proof, not promises</span>
          <h2 className="lp-section-title animate animate-fade-up">
            These aren't theories. These are results.
          </h2>
          <div className="lp-proof-cards">
            <div className="lp-proof-card animate animate-fade-up">
              <div className="lp-proof-metric">330%</div>
              <div className="lp-proof-label">Bookings growth in Year 1</div>
              <p>
                Element Human — rebuilt the sales engine from scratch after an
                83% revenue concentration crisis. New logos include Netflix,
                Prime Video, and Ogilvy.
              </p>
              <span className="lp-proof-author">Matt Celuszak, CEO</span>
            </div>
            <div className="lp-proof-card animate animate-fade-up delay-1">
              <div className="lp-proof-metric">4x</div>
              <div className="lp-proof-label">Revenue growth in 12 months</div>
              <p>
                Payhawk — scaled from €3M to €12M ARR. Hired 90 people in 9 months,
                opened 6 markets, and built the entire revenue infrastructure
                from the ground up.
              </p>
              <span className="lp-proof-author">Series B FinTech</span>
            </div>
            <div className="lp-proof-card animate animate-fade-up delay-2">
              <div className="lp-proof-metric">£8M</div>
              <div className="lp-proof-label">EU ARR built from zero</div>
              <p>
                Zappi — took a Google Sheet and a blank map of Europe to a £25M
                global business. Landed Philip Morris, Nestlé, and Samsung.
              </p>
              <span className="lp-proof-author">VP EMEA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRANSFORMATION ─── */}
      <section className="lp-transform">
        <div className="lp-section-inner">
          <span className="lp-badge-dark animate animate-fade-up">After the session</span>
          <h2 className="lp-section-title dark animate animate-fade-up">
            What changes when you walk out
          </h2>
          <div className="lp-transform-timeline">
            <div className="lp-transform-step animate animate-fade-up">
              <div className="lp-transform-icon"><Zap size={22} /></div>
              <div>
                <h3>Quick Win</h3>
                <p>Rewrite your pitch narrative using the SPICE framework. Stop leading with features.</p>
              </div>
            </div>
            <div className="lp-transform-line" />
            <div className="lp-transform-step animate animate-fade-up delay-1">
              <div className="lp-transform-icon"><TrendingUp size={22} /></div>
              <div>
                <h3>Compound</h3>
                <p>Know exactly which 5 metrics to track and what healthy benchmarks look like for your stage.</p>
              </div>
            </div>
            <div className="lp-transform-line" />
            <div className="lp-transform-step animate animate-fade-up delay-2">
              <div className="lp-transform-icon"><Trophy size={22} /></div>
              <div>
                <h3>Advantage</h3>
                <p>Stop losing deals to "no decision." Build urgency using Situation + Pain + Impact + Critical Event.</p>
              </div>
            </div>
            <div className="lp-transform-line" />
            <div className="lp-transform-step animate animate-fade-up delay-3">
              <div className="lp-transform-icon"><Rocket size={22} /></div>
              <div>
                <h3>10x</h3>
                <p>Build a structured sales engine that scales beyond the founder. Hire, measure, and grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECONDARY CTA ─── */}
      <section className="lp-cta-section" id="register">
        <div className="lp-section-inner">
          <div className="lp-cta-card animate animate-fade-up">
            <div className="lp-cta-avatars">
              <Users size={40} />
            </div>
            <h2>Ready to stop losing deals to "no decision"?</h2>
            <p>
              Join founders and sales leaders who are fixing their sales
              narrative and building pipeline that actually converts.
            </p>
            <a href={CTA_URL} className="lp-cta-btn lp-cta-btn-lg">
              Yes, Save My Seat <ArrowRight size={22} />
            </a>
            <span className="lp-cta-note">Free. Live. No replay — you have to show up.</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
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
              <Link to="/#lets-talk">Contact</Link>
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
        </div>
      </footer>
    </div>
  )
}

export default Webinar
