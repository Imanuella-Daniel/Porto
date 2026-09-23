import { Link } from 'react-router';
import { getFeaturedProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const social = [
  {
    label: 'GitHub',
    href: 'https://github.com/Imanuella-Daniel',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/imanuella-daniel',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:imanuelladaniel@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '20%',
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(45,212,191,0.055) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            width: '100%',
            display: 'flex',
            gap: 64,
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Text side */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 18,
                fontFamily: 'JetBrains Mono, monospace',
                color: '#2dd4bf',
                fontSize: 13,
              }}
            >
              <span style={{ display: 'inline-block', width: 28, height: 1, background: '#2dd4bf' }} />
              Halo, saya
            </div>

            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(48px, 7vw, 80px)',
                fontWeight: 800,
                color: '#e1e8f4',
                margin: '0 0 6px 0',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
              }}
            >
              Imanuella Daniel
            </h1>

            <div
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                color: '#2dd4bf',
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              IT Graduate · Software Developer
            </div>

            <p style={{ fontSize: 16, color: '#5e6e86', lineHeight: 1.72, maxWidth: 460, margin: '0 0 34px 0' }}>
              Lulusan S1 Informatika yang antusias dalam membangun solusi digital yang bermanfaat, andal, dan mudah digunakan. Terbuka untuk posisi entry-level dan junior di bidang pengembangan web dan perangkat lunak.
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
              <Link
                to="/projects"
                style={{
                  padding: '12px 26px',
                  background: '#2dd4bf',
                  color: '#0c0e13',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Lihat Proyek Saya
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a
                href="/src/assets/CV_Imanuella Daniel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 26px',
                  background: 'transparent',
                  color: '#e1e8f4',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  border: '1px solid #232b3a',
                  transition: 'border-color 0.15s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2dd4bf'; e.currentTarget.style.color = '#2dd4bf'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#232b3a'; e.currentTarget.style.color = '#e1e8f4'; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Lihat CV
              </a>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              {social.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  style={{ color: '#5e6e86', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5e6e86')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar side */}
          <div className="hidden md:flex" style={{ flexShrink: 0, justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, rgba(45,212,191,0.3), transparent 60%)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  width: 300,
                  height: 380,
                  background: 'linear-gradient(145deg, #1a2033 0%, #131720 100%)',
                  borderRadius: 18,
                  border: '1px solid rgba(45,212,191,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                }}
              >
                <div style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(45,212,191,0.08)', background: 'radial-gradient(circle, rgba(45,212,191,0.04) 0%, transparent 70%)' }} />
                <div style={{ position: 'absolute', bottom: -40, left: -40, width: 140, height: 140, borderRadius: '50%', border: '1px solid rgba(45,212,191,0.06)' }} />
                <div
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: 42,
                    color: '#0c0e13',
                    marginBottom: 20,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  ID
                </div>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Imanuella Daniel</div>
                  <div style={{ color: '#2dd4bf', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em' }}>IT Graduate · Software Developer</div>
                  <div style={{ color: '#5e6e86', fontSize: 11, marginTop: 6 }}>Yogyakarta, Indonesia</div>
                  <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap', padding: '0 16px' }}>
                    {['PHP', 'Laravel', 'Flutter', 'MySQL'].map(t => (
                      <span key={t} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(45,212,191,0.1)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.15)', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating status badge */}
              <div style={{
                position: 'absolute',
                bottom: -16,
                right: -16,
                background: '#1a2033',
                border: '1px solid rgba(45,212,191,0.25)',
                borderRadius: 10,
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                zIndex: 3,
              }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 8px rgba(45,212,191,0.6)' }} />
                <span style={{ color: '#e1e8f4', fontSize: 11, fontWeight: 600 }}>Terbuka untuk Peluang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, paddingTop: 16 }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Karya Pilihan</div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 36, fontWeight: 700, color: '#e1e8f4', margin: 0 }}>
              Proyek Unggulan
            </h2>
          </div>
          <Link
            to="/projects"
            style={{ color: '#2dd4bf', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}
          >
            Lihat Semua
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {featured.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 100px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #131720 0%, #0d3d38 100%)',
            border: '1px solid rgba(45,212,191,0.2)',
            borderRadius: 16,
            padding: '56px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)' }} />
          <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Ayo bekerja sama</div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 36, fontWeight: 700, color: '#e1e8f4', margin: '0 0 14px 0' }}>
            Saya Terbuka untuk Peluang
          </h2>
          <p style={{ color: '#5e6e86', fontSize: 15, lineHeight: 1.7, maxWidth: 480, margin: '0 0 32px 0' }}>
            Sedang mencari posisi IT entry-level, pengembangan perangkat lunak, dan junior developer.
          </p>
          <Link
            to="/contact"
            style={{
              padding: '13px 28px',
              background: '#2dd4bf',
              color: '#0c0e13',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'opacity 0.15s',
              position: 'relative',
              zIndex: 1,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Hubungi Saya
          </Link>
        </div>
      </section>
    </div>
  );
}
