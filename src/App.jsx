import ddLogo from './assets/datadrift-logo.png';
function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="brand">
            <img src={ddLogo} alt="DataDrift logo" className="brand-logo" />
            <span className="brand-name">DataDrift Studio</span>
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#contact" className="btn btn-dark">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software · Data · Web</p>
              <h1>
                We build software and data experiences that help teams move faster.
              </h1>
              <p className="hero-text">
                We provide application development, web development, data analysis,
                automation, reporting solutions,
                and tailored digital products for modern businesses.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-dark">Book a Consultation</a>
                <a href="#services" className="btn btn-light">Explore Services</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="metric-card">
                <span className="metric-label">Delivery Focus</span>
                <strong>Business-first software</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Core Services</span>
                <strong>Apps, Data, Web Platforms</strong>
              </div>
              <div className="metric-card">
                <span className="metric-label">Working Style</span>
                <strong>Fast, practical, scalable</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt-section" id="services">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>What we do</h2>
            <div className="service-grid">
              <article className="service-card">
                <h3>Application Development</h3>
                <p>
                  Custom internal tools, workflow systems, and business applications
                  designed around your actual operations.
                </p>
              </article>

              <article className="service-card">
                <h3>Data Visualization</h3>
                <p>
                  Dashboards and reporting solutions that turn complex data into
                  clear decisions for leadership and operations teams.
                </p>
              </article>

              <article className="service-card">
                <h3>Web Development</h3>
                <p>
                  Modern websites and web platforms with responsive design,
                  maintainable code, and clean user experience.
                </p>
              </article>

              <article className="service-card">
                <h3>System Integration</h3>
                <p>
                  Connect business systems, automate data flow, and reduce manual work
                  across departments.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container narrow">
            <p className="eyebrow">Process</p>
            <h2>How we work</h2>
            <div className="process-list">
              <div className="process-item">
                <span>01</span>
                <div>
                  <h3>Discover</h3>
                  <p>
                    We learn your business goals, current workflow, technical pain points,
                    and reporting needs.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>02</span>
                <div>
                  <h3>Design</h3>
                  <p>
                    We shape the solution architecture, user journey, and delivery plan
                    before development starts.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>03</span>
                <div>
                  <h3>Build</h3>
                  <p>
                    We develop the application, dashboard, or website using practical
                    technology choices that are easy to maintain.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>04</span>
                <div>
                  <h3>Support</h3>
                  <p>
                    We refine, maintain, and improve the solution after launch so it
                    keeps delivering value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt-section" id="work">
          <div className="container">
            <p className="eyebrow">Selected Work</p>
            <h2>Solutions built for real business needs</h2>
            <div className="work-grid">
              <article className="work-card">
                <h3>Operations Dashboard</h3>
                <p>
                  A centralized reporting experience for tracking service performance,
                  KPIs, and operational bottlenecks.
                </p>
              </article>

              <article className="work-card">
                <h3>Workflow Portal</h3>
                <p>
                  A custom internal web portal that streamlined requests, approvals,
                  and team coordination across departments.
                </p>
              </article>

              <article className="work-card">
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
          <div className="container cta-box">
            <p className="eyebrow">Contact</p>
            <h2>Need a software partner for your next project?</h2>
            <p>
              Tell us what you are building, what problems you need to solve,
              and what kind of timeline you have in mind.
            </p>
            <a href="mailto:support@datadriftstudio.com" className="btn btn-dark">
              Email Us
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App