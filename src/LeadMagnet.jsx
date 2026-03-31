import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import './leadmagnet.css'

const CTA_URL = 'https://app.onecal.io/b/paul-albert/'

const CATEGORIES = [
  {
    id: 'strategy',
    title: 'Strategy & Go-To-Market',
    icon: '🎯',
    questions: [
      { id: 's1', text: 'Our value proposition is clearly defined and consistently articulated across the organisation.' },
      { id: 's2', text: 'Pricing and packaging are designed to scale with customer success — not just optimised for initial close.' },
      { id: 's3', text: 'We have 1–3 company-wide targets with a structured goal-setting framework (OKRs or similar) in place.' },
      { id: 's4', text: 'Our market sizing is based on proprietary ICP analysis — not generic industry reports found online.' },
    ],
  },
  {
    id: 'planning',
    title: 'Planning & Revenue Model',
    icon: '📐',
    questions: [
      { id: 'p1', text: 'We have a funnel or flywheel-based revenue model that directly informs targets and hiring plans.' },
      { id: 'p2', text: 'Our revenue plan accounts for seasonality and doesn\'t rely on an unrealistic Q4 surge to hit the number.' },
      { id: 'p3', text: 'We have a clear view on marketing CAC, blended acquisition costs, and how they need to evolve.' },
    ],
  },
  {
    id: 'revops',
    title: 'Revenue Operations & Data',
    icon: '⚙️',
    questions: [
      { id: 'r1', text: 'Our sales process is clearly defined, staged, and mapped to the CRM with weighted pipeline methodology.' },
      { id: 'r2', text: 'Inbound lead routing, lead scoring, and conversion rate tracking are in place and functioning.' },
      { id: 'r3', text: 'Key dashboards — pipeline, performance, forecast — are available daily and reviewed at least weekly.' },
      { id: 'r4', text: 'CAC:LTV reporting, win/loss analysis, and pipeline contribution by channel are easily accessible.' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Demand Generation',
    icon: '📣',
    questions: [
      { id: 'm1', text: 'We have defined ICP and personas with content mapped across TOFU, MOFU, and BOFU stages.' },
      { id: 'm2', text: 'Marketing has pipeline and revenue targets — not just lead or MQL volume goals.' },
      { id: 'm3', text: 'Lead scoring, nurture campaigns, and marketing automation are in place and continuously optimised.' },
      { id: 'm4', text: 'Sales enablement materials (case studies, battle cards, talk tracks) exist at each stage of the buyer journey.' },
    ],
  },
  {
    id: 'sales',
    title: 'Sales Effectiveness',
    icon: '🤝',
    questions: [
      { id: 'sl1', text: 'Comp plans, role definitions (SDR/AE/AM/CS), and team structure are clearly designed with proper segmentation.' },
      { id: 'sl2', text: 'Sales playbooks, a defined methodology, and structured discovery/demo training are in place and practiced.' },
      { id: 'sl3', text: 'Managers run structured weekly 1:1s with pipeline review, call coaching, and deal-level inspection.' },
      { id: 'sl4', text: 'Hiring profiles, interview scorecards, and a repeatable onboarding program exist — ramp is under two sales cycles.' },
    ],
  },
  {
    id: 'cs',
    title: 'Customer Success & Retention',
    icon: '🔄',
    questions: [
      { id: 'c1', text: 'There\'s a clean, documented handoff from sales to CS with clear ownership of renewals and expansion.' },
      { id: 'c2', text: 'Customer health scoring, NPS/CSAT, and retention reporting (unit and dollar) are actively tracked.' },
      { id: 'c3', text: 'A defined outreach cadence, QBR programme, and executive sponsor programme exist for key accounts.' },
    ],
  },
  {
    id: 'culture',
    title: 'Culture & Cadence',
    icon: '🧭',
    questions: [
      { id: 'cu1', text: 'We have a revenue-ownership culture — everyone across the company, not just sales, feels accountable for growth.' },
      { id: 'cu2', text: 'Direct feedback, personal accountability, and clear communication are genuine team norms — not aspirational values.' },
      { id: 'cu3', text: 'A consistent operating rhythm exists: weekly kickoffs, commitment reviews, cross-functional reporting, and Friday wrap-ups.' },
    ],
  },
  {
    id: 'pmf',
    title: 'Partnerships & Product-Market Fit',
    icon: '🧩',
    questions: [
      { id: 'pm1', text: 'Channel or partner programmes have clear goals and the competitive landscape is documented and communicated.' },
      { id: 'pm2', text: 'Every product in the revenue plan has customer proof points — testimonials, case studies with outcomes, or references.' },
      { id: 'pm3', text: 'Revenue dependencies on the product roadmap are identified, and contingency plans are documented.' },
    ],
  },
]

const SCALE = [
  { value: 0, label: "Doesn't Exist", color: '#ef4444', bg: 'rgba(239,68,68,0.08)' },
  { value: 1, label: 'Early / Ad Hoc', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  { value: 2, label: 'Mostly In Place', color: '#3b82f6', bg: 'rgba(59,130,246,0.08)' },
  { value: 3, label: 'Fully Deployed', color: '#10b981', bg: 'rgba(16,185,129,0.08)' },
]

const allQuestions = CATEGORIES.flatMap((cat) =>
  cat.questions.map((q) => ({ ...q, category: cat.id, categoryTitle: cat.title, categoryIcon: cat.icon }))
)
const totalQ = allQuestions.length

/* ─── Radar Chart ─── */
function RadarChart({ scores, size = 320 }) {
  const cx = size / 2
  const cy = size / 2
  const r = size * 0.38
  const cats = Object.keys(scores)
  const n = cats.length
  const angleStep = (2 * Math.PI) / n

  const getPoint = (i, val) => {
    const a = angleStep * i - Math.PI / 2
    const d = (val / 3) * r
    return { x: cx + d * Math.cos(a), y: cy + d * Math.sin(a) }
  }

  const gridLevels = [1, 2, 3]
  const labelData = CATEGORIES.map((c, i) => {
    const a = angleStep * i - Math.PI / 2
    const lx = cx + (r + 28) * Math.cos(a)
    const ly = cy + (r + 28) * Math.sin(a)
    return { icon: c.icon, x: lx, y: ly, anchor: lx < cx - 10 ? 'end' : lx > cx + 10 ? 'start' : 'middle' }
  })
  const dataPoints = cats.map((c, i) => getPoint(i, scores[c]))
  const polyStr = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}>
      {gridLevels.map((lv) => {
        const pts = Array.from({ length: n }, (_, i) => getPoint(i, lv))
        return <polygon key={lv} points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="1" />
      })}
      {Array.from({ length: n }, (_, i) => {
        const p = getPoint(i, 3)
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(148,163,184,0.13)" strokeWidth="1" />
      })}
      <polygon points={polyStr} fill="rgba(99,102,241,0.13)" stroke="#6366f1" strokeWidth="2.5" strokeLinejoin="round" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5" fill="#6366f1" stroke="#fff" strokeWidth="2" />
      ))}
      {labelData.map((l, i) => (
        <text key={i} x={l.x} y={l.y} textAnchor={l.anchor} dominantBaseline="central" fontSize="15">
          {l.icon}
        </text>
      ))}
    </svg>
  )
}

/* ─── Score Bar ─── */
function ScoreBar({ label, score, maxScore, icon }) {
  const pct = maxScore > 0 ? (score / maxScore) * 100 : 0
  const color = pct >= 75 ? '#10b981' : pct >= 50 ? '#3b82f6' : pct >= 25 ? '#f59e0b' : '#ef4444'
  return (
    <div className="diag-score-bar">
      <div className="diag-score-bar-top">
        <span className="diag-score-bar-label">{icon} {label}</span>
        <span className="diag-score-bar-value" style={{ color }}>{score}/{maxScore}</span>
      </div>
      <div className="diag-score-bar-track">
        <div className="diag-score-bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function LeadMagnet() {
  const [phase, setPhase] = useState('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [animating, setAnimating] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goNext = (val) => {
    const q = allQuestions[current]
    setAnswers((a) => ({ ...a, [q.id]: val }))
    setAnimating(true)
    setTimeout(() => {
      if (current < totalQ - 1) setCurrent((c) => c + 1)
      else setPhase('results')
      setAnimating(false)
    }, 320)
  }

  const goBack = () => {
    if (current > 0) {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((c) => c - 1)
        setAnimating(false)
      }, 320)
    }
  }

  const getCategoryScores = () => {
    const scores = {}
    CATEGORIES.forEach((cat) => {
      const qs = cat.questions
      const total = qs.reduce((s, q) => s + (answers[q.id] ?? 0), 0)
      const max = qs.length * 3
      scores[cat.id] = { total, max, pct: max > 0 ? total / max : 0, title: cat.title, icon: cat.icon }
    })
    return scores
  }

  const getOverallScore = () => {
    const vals = Object.values(answers)
    if (vals.length === 0) return 0
    const total = vals.reduce((s, v) => s + v, 0)
    return Math.round((total / (totalQ * 3)) * 100)
  }

  const getGrade = (pct) => {
    if (pct >= 85) return { grade: 'A', msg: "You're operating at scale-ready levels. Fine-tuning, not rebuilding.", color: '#10b981' }
    if (pct >= 70) return { grade: 'B', msg: 'Strong foundations with clear gaps. You know what needs work — now it\'s about execution.', color: '#3b82f6' }
    if (pct >= 50) return { grade: 'C', msg: 'The bones are there but critical infrastructure is missing. A fractional leader could accelerate you.', color: '#f59e0b' }
    if (pct >= 30) return { grade: 'D', msg: "Significant gaps across the revenue org. You're likely leaving substantial revenue on the table.", color: '#f97316' }
    return { grade: 'F', msg: "The revenue engine needs a ground-up build. But that's also where the biggest upside lives.", color: '#ef4444' }
  }

  const handleUnlock = () => {
    if (email.includes('@') && name.trim()) {
      setUnlocked(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const progress = phase === 'intro' ? 0 : phase === 'survey' ? ((current + 1) / totalQ) * 100 : 100
  const q = allQuestions[current]

  const catScores = getCategoryScores()
  const overall = getOverallScore()
  const gradeInfo = getGrade(overall)

  const radarScores = {}
  Object.entries(catScores).forEach(([k, v]) => {
    radarScores[k] = v.max > 0 ? (v.total / v.max) * 3 : 0
  })

  const sorted = Object.values(catScores).sort((a, b) => a.pct - b.pct)
  const weakest = sorted.slice(0, 3)

  /* ─── RENDER: Intro ─── */
  const renderIntro = () => (
    <div className="diagnostic-body">
      <div className="diagnostic-grain" />
      <div className="diag-card diag-card-center diag-card-intro">
        <div className="diag-intro-icon">📊</div>
        <h1 className="diag-intro-title">
          Revenue Organisation<br />Diagnostic
        </h1>
        <p className="diag-intro-desc">
          {totalQ} questions across 8 pillars of a scalable revenue organisation.
          Takes about 5 minutes. Get an instant scorecard showing exactly where to focus.
        </p>
        <div className="diag-intro-tags">
          {CATEGORIES.map((c) => (
            <span key={c.id} className="diag-intro-tag">
              {c.icon} {c.title}
            </span>
          ))}
        </div>
        <button
          onClick={() => setPhase('survey')}
          className="diag-btn diag-btn-primary diag-btn-start"
        >
          Start Diagnostic →
        </button>
        <p className="diag-intro-fine">No login required. Results are instant.</p>
      </div>
    </div>
  )

  /* ─── RENDER: Survey ─── */
  const renderSurvey = () => {
    const catIndex = CATEGORIES.findIndex((c) => c.id === q.category)
    return (
      <div className="diagnostic-body">
        <div className="diagnostic-grain" />
        <div className="diag-progress-bar">
          <div className="diag-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="diag-counter">{current + 1} / {totalQ}</div>
        {current > 0 && (
          <button onClick={goBack} className="diag-back-btn">← Back</button>
        )}
        <div
          ref={cardRef}
          className={`diag-card diag-card-animate${animating ? ' diag-card-hidden' : ''}`}
        >
          <div className="diag-cat-header">
            <span className="diag-cat-icon">{q.categoryIcon}</span>
            <span className="diag-cat-label">{q.categoryTitle}</span>
          </div>
          <h2 className="diag-question">{q.text}</h2>
          <div className="diag-options">
            {SCALE.map((s) => {
              const selected = answers[q.id] === s.value
              return (
                <button
                  key={s.value}
                  onClick={() => goNext(s.value)}
                  className={`diag-option${selected ? ' selected' : ''}`}
                >
                  <span
                    className="diag-option-badge"
                    style={{
                      background: selected ? s.color : undefined,
                      color: selected ? '#fff' : s.color,
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="diag-option-label">{s.label}</span>
                </button>
              )
            })}
          </div>
          <div className="diag-cat-dots">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.id}
                className="diag-cat-dot"
                style={{
                  width: i === catIndex ? 24 : 8,
                  background: i < catIndex ? '#6366f1' : i === catIndex ? '#a78bfa' : 'rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  /* ─── RENDER: Results ─── */
  const renderResults = () => (
    <div className="diagnostic-body results-body">
      <div className="diagnostic-grain" />

      {/* Overall Score — always visible */}
      <div className="diag-results-header">
        <p className="diag-results-label">Your Revenue Diagnostic</p>
        <h1 className="diag-results-title">
          {name ? `${name}'s` : 'Your'} Scorecard
        </h1>
      </div>

      <div className="diag-card diag-card-center" style={{ marginBottom: 20, padding: 36, zIndex: 1 }}>
        <div
          className="diag-score-ring"
          style={{ background: `conic-gradient(${gradeInfo.color} ${overall * 3.6}deg, rgba(255,255,255,0.06) 0deg)` }}
        >
          <div className="diag-score-inner">
            <span className="diag-score-pct" style={{ color: gradeInfo.color }}>{overall}%</span>
          </div>
        </div>
        <div
          className="diag-grade-pill"
          style={{
            background: `${gradeInfo.color}18`,
            border: `1px solid ${gradeInfo.color}40`,
            color: gradeInfo.color,
          }}
        >
          Grade: {gradeInfo.grade}
        </div>
        <p className="diag-grade-msg">{gradeInfo.msg}</p>
      </div>

      {/* Gated section — blurred until unlock */}
      {!unlocked ? (
        <div className="diag-blurred-section">
          <div className="diag-blur-content">
            <div className="diag-card" style={{ padding: '28px 20px', marginBottom: 20 }}>
              <h3 className="diag-section-title" style={{ textAlign: 'center' }}>Capability Map</h3>
              <RadarChart scores={radarScores} size={300} />
            </div>
            <div className="diag-card" style={{ marginBottom: 20 }}>
              <h3 className="diag-section-title" style={{ margin: '0 0 20px' }}>Category Breakdown</h3>
              {CATEGORIES.map((cat) => {
                const s = catScores[cat.id]
                return <ScoreBar key={cat.id} label={cat.title} score={s.total} maxScore={s.max} icon={cat.icon} />
              })}
            </div>
            <div className="diag-card" style={{ marginBottom: 20 }}>
              <h3 className="diag-section-title">🔥 Top 3 Focus Areas</h3>
              <p className="diag-focus-subtitle">Where the biggest gains are hiding.</p>
              {weakest.map((w, i) => (
                <div key={i} className="diag-focus-item">
                  <span className="diag-focus-num">{i + 1}</span>
                  <div>
                    <div className="diag-focus-title">{w.icon} {w.title}</div>
                    <div className="diag-focus-detail">{Math.round(w.pct * 100)}% deployed — {w.total}/{w.max} points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unlock card */}
          <div className="diag-unlock-overlay">
            <div className="diag-unlock-card">
              <div className="diag-unlock-icon">🔓</div>
              <h3 className="diag-unlock-title">Unlock Your Full Scorecard</h3>
              <p className="diag-unlock-desc">
                Enter your details to reveal your capability map, category breakdown, and top focus areas.
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="diag-unlock-input"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="diag-unlock-input"
              />
              <button
                onClick={handleUnlock}
                className={`diag-btn diag-btn-full ${email.includes('@') && name.trim() ? 'diag-btn-primary' : 'diag-btn-disabled'}`}
              >
                Unlock Results →
              </button>
              <p className="diag-unlock-fine">We'll send a copy to your inbox. No spam, ever.</p>
            </div>
          </div>
        </div>
      ) : (
        /* Revealed results */
        <div className="diag-revealed-section" style={{ maxWidth: 640, width: '100%', zIndex: 1 }}>
          <div className="diag-card" style={{ padding: '28px 20px', marginBottom: 20 }}>
            <h3 className="diag-section-title" style={{ textAlign: 'center' }}>Capability Map</h3>
            <RadarChart scores={radarScores} size={300} />
          </div>
          <div className="diag-card" style={{ marginBottom: 20 }}>
            <h3 className="diag-section-title" style={{ margin: '0 0 20px' }}>Category Breakdown</h3>
            {CATEGORIES.map((cat) => {
              const s = catScores[cat.id]
              return <ScoreBar key={cat.id} label={cat.title} score={s.total} maxScore={s.max} icon={cat.icon} />
            })}
          </div>
          <div className="diag-card" style={{ marginBottom: 20 }}>
            <h3 className="diag-section-title">🔥 Top 3 Focus Areas</h3>
            <p className="diag-focus-subtitle">Where the biggest gains are hiding.</p>
            {weakest.map((w, i) => (
              <div key={i} className="diag-focus-item">
                <span className="diag-focus-num">{i + 1}</span>
                <div>
                  <div className="diag-focus-title">{w.icon} {w.title}</div>
                  <div className="diag-focus-detail">{Math.round(w.pct * 100)}% deployed — {w.total}/{w.max} points</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="diag-card diag-card-center diag-cta-card">
            <h3 className="diag-cta-title">Want a detailed action plan?</h3>
            <p className="diag-cta-desc">
              Book a 30-minute diagnostic review. We'll walk through your scorecard,
              prioritise the gaps, and map out the first 90 days.
            </p>
            <a href={CTA_URL} className="diag-btn diag-btn-primary" style={{ display: 'inline-block', padding: '16px 40px', textDecoration: 'none' }}>
              Book a Diagnostic Review →
            </a>
          </div>
        </div>
      )}

      <p className="diag-copyright">
        Revenue Organisation Diagnostic &copy; {new Date().getFullYear()}
      </p>
    </div>
  )

  return (
    <div className="lp diagnostic-wrap">
      {/* ─── NAV ─── */}
      <Nav cta={
        <Link to="/lead-magnet" className="btn-primary">
          Take the Diagnostic <BarChart3 size={20} />
        </Link>
      } />

      {/* ─── BODY ─── */}
      {phase === 'intro' && renderIntro()}
      {phase === 'survey' && renderSurvey()}
      {phase === 'results' && renderResults()}

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  )
}
