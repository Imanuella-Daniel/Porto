import Reveal from '../components/Reveal';
import { skillCategories } from '../data/skills';
import profilePhoto from '../assets/DSC07436.JPG';

const logoMap: Record<string, string> = {
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
  'C / C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'REST API': '',
  'Filament PHP': '',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  'Blender': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg',
  'Canva': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
  'Railway': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg',
};

export default function About() {
  return (
    <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

      <Reveal delay={0.1}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
            Tentang Saya
          </div>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 16px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Sedikit tentang saya
          </h1>
          <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2 }} />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-14 items-start mb-20">
        <div style={{ position: 'sticky', top: 88 }}>
          <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(45, 212, 191, 0.25)', boxShadow: '0 16px 36px rgba(0,0,0,0.45), 0 0 30px rgba(45,212,191,0.08)', background: '#131720', aspectRatio: '3 / 4', maxWidth: 340, margin: '0 auto' }}>
            <img src={profilePhoto} alt="Imanuella Daniel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 26, fontWeight: 700, color: '#e1e8f4', margin: '0 0 18px 0' }}>
            Halo, saya Imanuella.
          </h2>
          {[
            "Saya merupakan lulusan S1 Informatika dari Universitas Atma Jaya Yogyakarta dengan IPK 3.40 / 4.00. Saya memiliki minat mendalam dan pengalaman di bidang pengembangan sistem web & mobile, rekayasa perangkat lunak, serta integrasi teknologi enterprise.",
            "Pengalaman magang sebagai IT System Support Plantation di Great Giant Foods memberi saya kesempatan untuk terlibat langsung dalam perancangan dan pengembangan sistem yang terintegrasi dengan SAP, serta mendukung kebutuhan bisnis melalui solusi teknologi yang nyata.",
            "Stack utama saya mencakup React, TypeScript, dan Tailwind CSS untuk antarmuka web modern; PHP dan Laravel untuk backend yang kokoh; Flutter untuk aplikasi mobile multiplatform; serta MySQL dan PostgreSQL untuk arsitektur database.",
            "Pengalaman sebagai asisten dosen dan Student Staff di perpustakaan membantu saya mengembangkan kemampuan komunikasi, administrasi, koordinasi, dan kerja sama tim.",
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

      <Reveal delay={0.1}>
        <div style={{ marginBottom: 72 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
              Teknologi &amp; Alat
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 32, fontWeight: 700, color: '#e1e8f4', margin: '0 0 10px 0' }}>
              Keahlian Saya
            </h2>
            <p style={{ color: '#5e6e86', fontSize: 14, lineHeight: 1.7, margin: 0, maxWidth: 540 }}>
              Teknologi dan tools yang saya gunakan sehari-hari untuk membangun solusi yang nyata dan terstruktur.
            </p>
            <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2, marginTop: 16 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {skillCategories.map((cat, catIdx) => {
              const doubled = [...cat.skills, ...cat.skills];
              const reverse = catIdx % 2 === 1;
              return (
                <Reveal key={cat.category} delay={0.08 + catIdx * 0.1}>
                  <div style={{ background: '#131720', border: '1px solid #232b3a', borderRadius: 16, paddingTop: 20, paddingBottom: 18, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 24, paddingRight: 24, marginBottom: 16 }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#2dd4bf', flexShrink: 0 }}>{cat.icon}</span>
                      <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, color: '#e1e8f4', margin: 0 }}>{cat.category}</h3>
                      <div style={{ flex: 1, height: 1, background: 'rgba(45,212,191,0.12)' }} />
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#5e6e86', background: 'rgba(45,212,191,0.06)', border: '1px solid rgba(45,212,191,0.12)', borderRadius: 20, padding: '2px 9px', flexShrink: 0 }}>
                        {cat.skills.length} skills
                      </span>
                    </div>
                    <div style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}>
                      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'} style={{ gap: 10, paddingLeft: 8, paddingRight: 8 }}>
                        {doubled.map((skill, idx) => (
                          <div
                            key={`${skill.name}-${idx}`}
                            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', borderRadius: 10, background: '#0c0e13', border: '1px solid #1e2535', flexShrink: 0, cursor: 'default', transition: 'border-color 0.2s, background 0.2s, transform 0.18s, box-shadow 0.2s', minWidth: 150 }}
                            onMouseEnter={e => {
                              e.currentTarget.style.borderColor = 'rgba(45,212,191,0.5)';
                              e.currentTarget.style.background = 'rgba(45,212,191,0.04)';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 4px 18px rgba(45,212,191,0.12)';
                              const row = e.currentTarget.parentElement;
                              if (row) row.style.animationPlayState = 'paused';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.borderColor = '#1e2535';
                              e.currentTarget.style.background = '#0c0e13';
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                              const row = e.currentTarget.parentElement;
                              if (row) row.style.animationPlayState = 'running';
                            }}
                          >
                            {logoMap[skill.name] ? (
                              <img src={logoMap[skill.name]} alt={skill.name} style={{ width: 26, height: 26, objectFit: 'contain', flexShrink: 0, filter: skill.name === 'GitHub' ? 'invert(1)' : 'none' }} />
                            ) : (
                              <div style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(45,212,191,0.12)', border: '1px solid rgba(45,212,191,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
                                {skill.name.charAt(0)}
                              </div>
                            )}
                            <div style={{ minWidth: 0 }}>
                              <div style={{ fontSize: 13, fontWeight: 600, color: '#e1e8f4', fontFamily: 'Outfit, sans-serif', whiteSpace: 'nowrap' }}>{skill.name}</div>
                              {skill.tag && (
                                <div style={{ fontSize: 9, color: '#5e6e86', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>{skill.tag}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

    </div>
  );
}