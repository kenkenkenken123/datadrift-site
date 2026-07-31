import { useEffect, useId, useRef, useState } from 'react'
import ddLogo from './assets/datadrift-logo.png'

const DEMO_EMAIL = 'support@datadriftstudio.com'
const emptyForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function App() {
  const phrases = [
    'Mobile Apps',
    'Web Apps',
    'Data Solutions',
    'AI Chatbots',
    'ML Models',
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const titleId = useId()
  const firstFieldRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event) => setReduceMotion(event.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        setIsVisible(true)
      }, 260)
    }, 3200)

    return () => clearInterval(interval)
  }, [reduceMotion, phrases.length])

  useEffect(() => {
    if (!isDemoOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstFieldRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeDemo()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isDemoOpen])

  function openDemo() {
    setStatus('idle')
    setErrorMessage('')
    setIsDemoOpen(true)
  }

  function closeDemo() {
    setIsDemoOpen(false)
  }

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const subject = 'Request a Demo — DataDrift Studio'
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || '—'}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    const mailto = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    try {
      window.location.href = mailto
      setStatus('sent')
      setForm(emptyForm)
    } catch {
      setStatus('error')
      setErrorMessage('Unable to open your email app. Please email us directly.')
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="brand">
            <img src={ddLogo} alt="" className="brand-logo" />
            <span className="brand-name">DataDrift Studio</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <button type="button" className="btn btn-dark" onClick={openDemo}>
              Request a Demo
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-atmosphere" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="brand-mark animate-in">DataDrift Studio</p>
              <h1 className="hero-title-premium animate-in animate-delay-1">
                <span className="hero-title-line">We build</span>
                <span className="hero-phrase-shell" aria-live="polite">
                  <span
                    className={`hero-phrase ${isVisible || reduceMotion ? 'is-visible' : 'is-hidden'}`}
                  >
                    {phrases[phraseIndex]}
                  </span>
                </span>
                <span className="hero-title-line">for modern business operations.</span>
              </h1>
              <p className="hero-text animate-in animate-delay-2">
                Our team brings expertise across different areas. Share your idea
                with us, and we will help shape the right solution and deliver it with care.
              </p>
              <div className="hero-actions animate-in animate-delay-3">
                <button type="button" className="btn btn-dark" onClick={openDemo}>
                  Request a Demo
                </button>
                <a href="#services" className="btn btn-light">Explore Services</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>What we do</h2>
            <div className="service-list">
              <article className="service-item">
                <h3>Application Development</h3>
                <p>
                  From tiny task-saving scripts and desktop helpers to mobile sidekicks
                  and custom tools built to make your workday easier.
                </p>
              </article>
              <article className="service-item">
                <h3>Data Solutions</h3>
                <p>
                  From BI dashboards to ML-powered solutions and end-to-end ETL pipelines,
                  we deliver data solutions that help teams work smarter.
                </p>
              </article>
              <article className="service-item">
                <h3>Web Development</h3>
                <p>
                  Low-code storefronts for your e-shop,
                  custom one-pagers for your brand,
                  or full-code web platforms built to grow with your business.
                </p>
              </article>
              <article className="service-item">
                <h3>Need Something Different?</h3>
                <p>
                  If you can explain it, we can probably build it.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="process">
          <div className="container narrow">
            <p className="eyebrow">Process</p>
            <h2>How we work</h2>
            <ol className="process-list">
              <li className="process-item">
                <span className="process-num">01</span>
                <div>
                  <h3>Discover</h3>
                  <p>
                    We learn your business goals, current workflow, technical pain points,
                    and reporting needs.
                  </p>
                </div>
              </li>
              <li className="process-item">
                <span className="process-num">02</span>
                <div>
                  <h3>Design</h3>
                  <p>
                    We shape the solution architecture, user journey, and delivery plan
                    before development starts.
                  </p>
                </div>
              </li>
              <li className="process-item">
                <span className="process-num">03</span>
                <div>
                  <h3>Build</h3>
                  <p>
                    We develop the application, dashboard, or website using practical
                    technology choices that are easy to maintain.
                  </p>
                </div>
              </li>
              <li className="process-item">
                <span className="process-num">04</span>
                <div>
                  <h3>Support</h3>
                  <p>
                    We refine, maintain, and improve the solution after launch so it
                    keeps delivering value.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <p className="eyebrow">Selected Work</p>
            <h2>Solutions built for real business needs</h2>
            <div className="work-list">
              <article className="work-item">
                <h3>Operations Dashboard</h3>
                <p>
                  A centralized reporting experience for tracking service performance,
                  KPIs, and operational bottlenecks.
                </p>
              </article>
              <article className="work-item">
                <h3>Workflow Portal</h3>
                <p>
                  A custom internal web portal that streamlined requests, approvals,
                  and team coordination across departments.
                </p>
              </article>
              <article className="work-item">
                <h3>Executive Reporting Suite</h3>
                <p>
                  A data visualization solution that transformed raw data into structured,
                  decision-ready management reporting.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="container">
            <div className="cta-panel">
              <p className="eyebrow">Contact</p>
              <h2>Need a software partner for your next project?</h2>
              <p>
                Tell us what you are building, what problems you need to solve,
                and what kind of timeline you have in mind.
              </p>
              <button type="button" className="btn btn-dark" onClick={openDemo}>
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={ddLogo} alt="" className="brand-logo" />
            <span>DataDrift Studio</span>
          </div>
          <p>© {new Date().getFullYear()} DataDrift Studio</p>
        </div>
      </footer>

      {isDemoOpen && (
        <div className="modal-overlay" onClick={closeDemo} role="presentation">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="eyebrow">Demo request</p>
                <h2 id={titleId}>Request a Demo</h2>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={closeDemo}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {status === 'sent' ? (
              <div className="modal-success">
                <p>Thanks — your email app should open with the request ready.</p>
                <p className="modal-success-note">
                  Just hit send in your email app and we’ll follow up soon.
                </p>
                <button type="button" className="btn btn-dark" onClick={closeDemo}>
                  Close
                </button>
              </div>
            ) : (
              <form className="demo-form" onSubmit={handleSubmit}>
                <label className="field">
                  <span>Name</span>
                  <input
                    ref={firstFieldRef}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Your name"
                  />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                  />
                </label>

                <label className="field">
                  <span>Company</span>
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Company name"
                  />
                </label>

                <label className="field">
                  <span>What would you like to see?</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your project or the demo you need."
                  />
                </label>

                {status === 'error' && (
                  <p className="form-error" role="alert">
                    {errorMessage}
                  </p>
                )}

                <div className="modal-actions">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={closeDemo}
                    disabled={status === 'sending'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default App
