import heroArtwork from './assets/hero.png'
import './App.css'

const profile = {
  name: 'Imanuella Daniel',
  role: 'Undergraduate Informatics Student at Atma Jaya Yogyakarta University',
  location: 'Daerah Istimewa Yogyakarta, Indonesia',
  linkedin: 'https://id.linkedin.com/in/imanuella-daniel',
  source: 'Public LinkedIn snapshot, 4 Aug 2026',
}

const stats = [
  { value: '111', label: 'pengikut' },
  { value: '111', label: 'koneksi' },
  { value: 'UAJY', label: 'Informatics' },
]

const focusAreas = [
  'Web application foundations',
  'Database and information systems',
  'Data-aware problem solving',
  'Product and team collaboration',
]

const timeline = [
  {
    type: 'Experience',
    title: 'Great Giant Foods',
    meta: 'Listed on LinkedIn',
    description:
      'Professional experience appears on Imanuella\'s public LinkedIn profile. Add the role title, scope, stack, and measurable outcomes when the full profile details are available.',
  },
  {
    type: 'Education',
    title: 'Universitas Atma Jaya Yogyakarta',
    meta: 'Undergraduate Informatics Student',
    description:
      'Academic path in informatics with a portfolio direction across software systems, data handling, and practical digital product development.',
  },
]

const projectSlots = [
  {
    tag: 'Software',
    title: 'Web Systems Project',
    description:
      'Use this slot for a class, internship, or personal web project with the problem, feature set, stack, and outcome.',
  },
  {
    tag: 'Data',
    title: 'Reporting or Dashboard Case',
    description:
      'Use this slot for work involving data cleaning, database design, reporting, visualization, or operational insights.',
  },
  {
    tag: 'Product',
    title: 'Campus Product Prototype',
    description:
      'Use this slot for a prototype that translates a student or business problem into a clear, usable interface.',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Kembali ke awal">
          ID
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#profile">Profil</a>
          <a href="#experience">Journey</a>
          <a href="#work">Work</a>
          <a href="#contact">Kontak</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Informatics Portfolio</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">
              Yogyakarta-based informatics student building a practical path
              across software, data, and product problem solving. This portfolio
              is shaped from public LinkedIn data and prepared for project
              updates as her work grows.
            </p>
            <div className="hero-actions" aria-label="Aksi portfolio">
              <a className="primary-action" href="#work">
                Lihat work snapshot
              </a>
              <a
                className="secondary-action"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ringkasan profil">
            <img src={heroArtwork} alt="" className="hero-artwork" />
            <div className="visual-copy">
              <span>Current base</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="stat-strip" aria-label="Statistik LinkedIn">
              {stats.map((item) => (
                <div className="stat-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-band" id="profile" aria-labelledby="profile-title">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2 id="profile-title">A grounded informatics profile</h2>
          </div>
          <div className="profile-grid">
            <p className="lead-copy">
              Imanuella Daniel is listed publicly on LinkedIn as an
              Undergraduate Informatics Student at Atma Jaya Yogyakarta
              University, with location in Daerah Istimewa Yogyakarta,
              Indonesia.
            </p>
            <div className="focus-list" aria-label="Portfolio focus areas">
              {focusAreas.map((area, index) => (
                <div className="focus-item" key={area}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{area}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-band muted-band"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2 id="experience-title">Education and experience</h2>
          </div>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <article className="timeline-card" key={`${item.type}-${item.title}`}>
                <span className="item-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p className="item-meta">{item.meta}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-band" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Work Snapshot</p>
            <h2 id="work-title">Ready for verified project details</h2>
          </div>
          <div className="project-grid">
            {projectSlots.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-band" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Connect through LinkedIn</h2>
            <p>
              The public profile link is included as the safest verified contact
              point until an email, GitHub, or project repository is provided.
            </p>
          </div>
          <a
            className="primary-action dark-action"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Open LinkedIn
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>{profile.source}</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          Source: LinkedIn
        </a>
      </footer>
    </div>
  )
}

export default App
