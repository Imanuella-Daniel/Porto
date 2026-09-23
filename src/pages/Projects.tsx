import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const filters = ['Semua', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Information System'];

export default function Projects() {
  const [active, setActive] = useState('Semua');

  const filtered = active === 'Semua'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(active.toLowerCase()));

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Portofolio</div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 14px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Proyek Saya
        </h1>
        <p style={{ color: '#5e6e86', fontSize: 15, lineHeight: 1.7, maxWidth: 560, margin: '0 0 18px 0' }}>
          Kumpulan proyek yang pernah saya kerjakan — dari tugas akademik hingga implementasi nyata. Klik proyek untuk melihat detail, kode, dan tangkapan layar.
        </p>
        <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2 }} />
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 40, flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '7px 16px',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
              border: `1px solid ${active === f ? 'rgba(45,212,191,0.5)' : '#232b3a'}`,
              background: active === f ? 'rgba(45,212,191,0.08)' : 'transparent',
              color: active === f ? '#2dd4bf' : '#5e6e86',
              cursor: 'pointer',
              transition: 'all 0.15s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={e => { if (active !== f) { e.currentTarget.style.color = '#e1e8f4'; e.currentTarget.style.borderColor = '#5e6e86'; } }}
            onMouseLeave={e => { if (active !== f) { e.currentTarget.style.color = '#5e6e86'; e.currentTarget.style.borderColor = '#232b3a'; } }}
          >
            {f}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', color: '#5e6e86', fontSize: 12, alignSelf: 'center', fontFamily: 'JetBrains Mono, monospace' }}>
          {filtered.length} proyek
        </span>
      </div>

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#5e6e86' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
          <p>Belum ada proyek dalam kategori ini.</p>
        </div>
      )}
    </div>
  );
}
