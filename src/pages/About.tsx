import { Link } from 'react-router';

const canDo = [
  {
    icon: '⬡',
    title: 'Web Development',
    desc: 'Membangun aplikasi web full-stack dengan Laravel di backend dan tampilan responsif menggunakan Bootstrap atau Tailwind CSS.',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Mengembangkan aplikasi mobile lintas platform dengan Flutter dan Dart, terintegrasi dengan REST API.',
  },
  {
    icon: '◫',
    title: 'Database Design',
    desc: 'Merancang skema relasional yang terstruktur dan menulis query yang efisien menggunakan MySQL dan PostgreSQL.',
  },
  {
    icon: '◈',
    title: 'System Development',
    desc: 'Menganalisis kebutuhan bisnis, merancang sistem informasi, dan mengimplementasikan solusi teknologi dari awal.',
  },
];

export default function About() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

      {/* Page header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Tentang Saya</div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 16px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Sedikit tentang saya
        </h1>
        <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2 }} />
      </div>

      {/* Bio section */}
      <div className="about-grid" style={{ gridTemplateColumns: '1fr 1.6fr', gap: 56, alignItems: 'start', marginBottom: 72 }}>
        {/* Avatar */}
        <div style={{ position: 'sticky', top: 88 }}>
          <div style={{
            background: 'linear-gradient(145deg, #1a2033 0%, #131720 100%)',
            border: '1px solid rgba(45,212,191,0.18)',
            borderRadius: 16,
            padding: '32px 24px',
            textAlign: 'center',
          }}>
            <div style={{
              width: 96, height: 96, borderRadius: '50%',
              background: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 36, color: '#0c0e13',
              margin: '0 auto 18px',
            }}>ID</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Imanuella Daniel</div>
            <div style={{ color: '#2dd4bf', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em', marginBottom: 16 }}>IT Graduate · Software Developer</div>
            <div style={{ borderTop: '1px solid #232b3a', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '📍', text: 'Yogyakarta, Indonesia' },
                { icon: '🎓', text: 'S.Kom. Informatika' },
                { icon: '✉️', text: 'imanuelladaniel@gmail.com' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', color: '#5e6e86', fontSize: 12 }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #232b3a', paddingTop: 16, marginTop: 8, display: 'flex', gap: 10, justifyContent: 'center' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/Imanuella-Daniel' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/imanuella-daniel' },
              ].map(s => (
                <a key={s.label} href={s.href} style={{
                  padding: '6px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600, textDecoration: 'none',
                  background: 'rgba(45,212,191,0.08)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.2)',
                  transition: 'background 0.15s',
                }}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 26, fontWeight: 700, color: '#e1e8f4', margin: '0 0 18px 0' }}>
            Halo, saya Imanuella.
          </h2>
          {[
            "Saya merupakan lulusan S1 Informatika dari Universitas Atma Jaya Yogyakarta dengan IPK 3.40 / 4.00. Saya memiliki pengalaman di bidang teknologi dan pengembangan sistem, baik melalui perkuliahan, magang, maupun organisasi.",
            "Pengalaman magang sebagai IT System Support Plantation di Great Giant Foods memberi saya kesempatan untuk terlibat langsung dalam perancangan dan pengembangan sistem yang terintegrasi dengan SAP, serta mendukung kebutuhan bisnis melalui solusi teknologi yang nyata.",
            "Stack utama saya mencakup PHP dan Laravel untuk pengembangan web, Flutter untuk aplikasi mobile, serta MySQL dan PostgreSQL untuk pengelolaan database. Saya juga berpengalaman dalam penggunaan tools seperti GitHub, Postman, Docker, dan Figma.",
            "Pengalaman sebagai asisten dosen dan Student Staff di perpustakaan membantu saya mengembangkan kemampuan komunikasi, administrasi, koordinasi, dan kerja sama tim. Saya memiliki kemauan belajar yang tinggi, bertanggung jawab, serta terbuka terhadap hal-hal baru.",
          ].map((para, i) => (
            <p key={i} style={{ color: '#8a9ab5', fontSize: 15, lineHeight: 1.8, margin: '0 0 18px 0' }}>{para}</p>
          ))}

          <div style={{ background: '#131720', border: '1px solid rgba(45,212,191,0.15)', borderLeft: '3px solid #2dd4bf', borderRadius: '0 8px 8px 0', padding: '14px 18px', marginTop: 10 }}>
            <p style={{ color: '#e1e8f4', fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
              "Saya memiliki kemauan belajar yang tinggi, bertanggung jawab dalam menjalankan tugas, serta terbuka terhadap hal-hal baru."
            </p>
          </div>
        </div>
      </div>

      {/* What I Can Do */}
      <div style={{ marginBottom: 72 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Kemampuan</div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 28, fontWeight: 700, color: '#e1e8f4', margin: '0 0 28px 0' }}>Yang Bisa Saya Lakukan</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {canDo.map(item => (
            <div key={item.title} style={{ background: '#131720', border: '1px solid #232b3a', borderRadius: 12, padding: '22px 22px', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(45,212,191,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#232b3a')}>
              <div style={{ fontSize: 22, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontSize: 16, fontWeight: 700, margin: '0 0 8px 0' }}>{item.title}</h3>
              <p style={{ color: '#5e6e86', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Looking For */}
      <div style={{ marginBottom: 72 }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #0d3d38 0%, #131720 100%)',
            border: '1px solid rgba(45,212,191,0.25)',
            borderRadius: 12,
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 20,
          }}
        >
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🎯</div>
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Sedang Mencari Peluang</div>
            <p style={{ color: '#8a9ab5', fontSize: 14, lineHeight: 1.7, margin: '0 0 14px 0' }}>
              Terbuka untuk <strong style={{ color: '#2dd4bf' }}>posisi IT entry-level, junior developer, dan magang</strong> di mana saya bisa memberikan kontribusi nyata sejak hari pertama dan terus berkembang.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Full-time', 'Junior Developer', 'Web Developer', 'Mobile Developer', 'IT Staff'].map(tag => (
                <span key={tag} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 20, background: 'rgba(45,212,191,0.1)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.2)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
