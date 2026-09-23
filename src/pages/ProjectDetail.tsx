import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { getProject } from '../data/projects';
import MockScreenshot from '../components/MockScreenshot';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id || '');
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  if (!project) {
    return (
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', marginBottom: 12 }}>Proyek Tidak Ditemukan</h1>
        <Link to="/projects" style={{ color: '#2dd4bf', textDecoration: 'none', fontSize: 14 }}>← Kembali ke Proyek</Link>
      </div>
    );
  }

  const current = project.screenshots[activeScreenshot];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 100px' }}>

      {/* Back nav */}
      <Link
        to="/projects"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#5e6e86', textDecoration: 'none', fontSize: 13, marginBottom: 40, transition: 'color 0.15s' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#2dd4bf')}
        onMouseLeave={e => (e.currentTarget.style.color = '#5e6e86')}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        Kembali ke Proyek
      </Link>

      {/* Project header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          {project.category.split(' · ').map(cat => (
            <span key={cat} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 4, background: 'rgba(45,212,191,0.08)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.18)', fontFamily: 'JetBrains Mono, monospace' }}>
              {cat}
            </span>
          ))}
          <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 4, background: '#1a2033', color: '#5e6e86', fontFamily: 'JetBrains Mono, monospace' }}>{project.year}</span>
        </div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 8px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {project.title}
        </h1>
        <p style={{ color: '#5e6e86', fontSize: 18, margin: '0 0 20px 0' }}>{project.tagline}</p>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a href={project.github} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 18px', background: '#131720', border: '1px solid #232b3a', borderRadius: 7, color: '#e1e8f4', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'border-color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2dd4bf')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#232b3a')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Lihat di GitHub
          </a>
          {project.demo && (
            <a href={project.demo} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 18px', background: '#2dd4bf', borderRadius: 7, color: '#0c0e13', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo Langsung
            </a>
          )}
        </div>
      </div>

      {/* Main content grid */}
      <div className="detail-grid" style={{ gridTemplateColumns: '1fr 280px', gap: 40, alignItems: 'start' }}>
        {/* Left: screenshots + case study */}
        <div>
          {/* Main screenshot */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ height: 420, borderRadius: 12, overflow: 'hidden', border: '1px solid #232b3a' }}>
              <MockScreenshot type={current.type} />
            </div>
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 4 }}>
              <span style={{ color: '#5e6e86', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}>{current.label}</span>
              <span style={{ color: '#5e6e86', fontSize: 11 }}>{activeScreenshot + 1} / {project.screenshots.length}</span>
            </div>
          </div>

          {/* Thumbnail strip (if multiple screenshots) */}
          {project.screenshots.length > 1 && (
            <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
              {project.screenshots.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  style={{
                    width: 100, height: 64,
                    borderRadius: 6, overflow: 'hidden',
                    border: `2px solid ${i === activeScreenshot ? '#2dd4bf' : '#232b3a'}`,
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, transform 0.15s',
                    transform: i === activeScreenshot ? 'scale(1.02)' : 'scale(1)',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => { if (i !== activeScreenshot) e.currentTarget.style.borderColor = '#5e6e86'; }}
                  onMouseLeave={e => { if (i !== activeScreenshot) e.currentTarget.style.borderColor = '#232b3a'; }}
                >
                  <MockScreenshot type={s.type} />
                </div>
              ))}
            </div>
          )}

          {/* Case Study */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {[
              {
                label: 'Gambaran Proyek',
                icon: '○',
                content: <p style={{ color: '#8a9ab5', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{project.description}</p>,
              },
              {
                label: 'Permasalahan',
                icon: '⚠',
                content: <p style={{ color: '#8a9ab5', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{project.problem}</p>,
              },
              {
                label: 'Solusi Saya',
                icon: '✓',
                content: <p style={{ color: '#8a9ab5', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{project.solution}</p>,
              },
              {
                label: 'Fitur Utama',
                icon: '⬡',
                content: (
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {project.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#8a9ab5', fontSize: 14, lineHeight: 1.6 }}>
                        <span style={{ color: '#2dd4bf', marginTop: 2, flexShrink: 0 }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                ),
              },
              {
                label: 'Tantangan',
                icon: '◈',
                content: <p style={{ color: '#8a9ab5', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{project.challenges}</p>,
              },
              {
                label: 'Hasil / Capaian',
                icon: '★',
                content: (
                  <div style={{ background: 'linear-gradient(135deg, #0d3d38 0%, #131720 100%)', border: '1px solid rgba(45,212,191,0.2)', borderRadius: 8, padding: '16px 18px' }}>
                    <p style={{ color: '#e1e8f4', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{project.result}</p>
                  </div>
                ),
              },
            ].map(section => (
              <div key={section.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ color: '#2dd4bf', fontSize: 14 }}>{section.icon}</span>
                  <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 18, fontWeight: 700, color: '#e1e8f4', margin: 0 }}>{section.label}</h2>
                </div>
                {section.content}
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ position: 'sticky', top: 88 }}>
          <div style={{ background: '#131720', border: '1px solid #232b3a', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '16px 18px', borderBottom: '1px solid #232b3a' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontWeight: 700, fontSize: 14 }}>Informasi Proyek</div>
            </div>
            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Peran', value: project.role },
                { label: 'Durasi', value: project.duration || '—' },
                { label: 'Tim', value: project.team },
                { label: 'Tahun', value: project.year },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ color: '#5e6e86', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3, fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</div>
                  <div style={{ color: '#e1e8f4', fontSize: 13, fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '16px 18px', borderTop: '1px solid #232b3a' }}>
              <div style={{ color: '#5e6e86', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'JetBrains Mono, monospace' }}>Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: 10, padding: '3px 8px', borderRadius: 4, background: 'rgba(45,212,191,0.08)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.15)', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
