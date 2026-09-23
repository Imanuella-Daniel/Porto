import { timeline } from '../data/experience';
import type { TimelineType } from '../data/experience';

const typeConfig: Record<TimelineType, { label: string; icon: string; color: string }> = {
  education: { label: 'Pendidikan', icon: '🎓', color: '#2dd4bf' },
  work: { label: 'Pengalaman Kerja', icon: '💼', color: '#818cf8' },
  project: { label: 'Proyek', icon: '⚡', color: '#f59e0b' },
};

export default function Experience() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Latar Belakang</div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 14px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Pengalaman & Pendidikan
        </h1>
        <p style={{ color: '#5e6e86', fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: '0 0 18px 0' }}>
          Riwayat pendidikan, pengalaman kerja, dan perjalanan yang membentuk saya sebagai seorang developer.
        </p>
        <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2 }} />
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 44, flexWrap: 'wrap' }}>
        {Object.entries(typeConfig).map(([type, cfg]) => (
          <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: cfg.color }} />
            <span style={{ color: '#5e6e86', fontSize: 12 }}>{cfg.label}</span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 36 }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: 12, top: 8, bottom: 40, width: 2, background: 'linear-gradient(to bottom, rgba(45,212,191,0.4) 0%, rgba(35,43,58,0.3) 100%)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {timeline.map((item, i) => {
            const cfg = typeConfig[item.type];
            return (
              <div key={i} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: -30,
                  top: 18,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  border: `2px solid ${cfg.color}`,
                  background: '#0c0e13',
                  boxShadow: `0 0 10px ${cfg.color}40`,
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.color }} />
                </div>

                {/* Card */}
                <div
                  style={{
                    background: '#131720',
                    border: '1px solid #232b3a',
                    borderRadius: 12,
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${cfg.color}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#232b3a')}
                >
                  {/* Card header */}
                  <div style={{ padding: '18px 22px 16px', borderBottom: '1px solid #232b3a' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 16 }}>{cfg.icon}</span>
                        <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, background: `${cfg.color}15`, color: cfg.color, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>
                          {cfg.label}
                        </span>
                      </div>
                      <span style={{ color: '#5e6e86', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', flexShrink: 0 }}>{item.period}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontSize: 18, fontWeight: 700, margin: '0 0 4px 0' }}>
                      {item.title}
                    </h3>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ color: cfg.color, fontSize: 13, fontWeight: 500 }}>{item.institution}</span>
                      {item.location && (
                        <>
                          <span style={{ color: '#232b3a' }}>·</span>
                          <span style={{ color: '#5e6e86', fontSize: 12 }}>{item.location}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '16px 22px 18px' }}>
                    <p style={{ color: '#8a9ab5', fontSize: 13, lineHeight: 1.72, margin: '0 0 14px 0' }}>{item.description}</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {item.details.map((d, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#5e6e86', lineHeight: 1.6 }}>
                          <span style={{ color: cfg.color, flexShrink: 0, marginTop: 1 }}>→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    {item.tech && (
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14, paddingTop: 14, borderTop: '1px solid #1a2033' }}>
                        {item.tech.map(t => (
                          <span key={t} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(45,212,191,0.07)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.14)', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
