import { skillCategories } from '../data/skills';

const logoMap: Record<string, string> = {
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  'Blender': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg',
};

export default function Skills() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Keahlian Teknis</div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 14px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Keahlian Saya
        </h1>
        <p style={{ color: '#5e6e86', fontSize: 15, lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
          Teknologi dan tools yang saya gunakan secara rutin — terus belajar dan membangun solusi praktis untuk masalah nyata.
        </p>
        <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2, marginTop: 18 }} />
      </div>

      {/* Skill categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {skillCategories.map(cat => (
          <div key={cat.category}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 20, width: 32, textAlign: 'center' }}>{cat.icon}</span>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: '#e1e8f4', margin: 0 }}>{cat.category}</h2>
              <div style={{ flex: 1, height: 1, background: '#232b3a', marginLeft: 16 }} />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
              gap: 16 
            }}>
              {cat.skills.map(skill => (
                <div
                  key={skill.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    background: '#131720',
                    border: '1px solid #232b3a',
                    borderRadius: 12,
                    padding: '20px 16px',
                    transition: 'border-color 0.2s, transform 0.2s, background 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(45,212,191,0.5)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(45,212,191,0.03)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#232b3a';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#131720';
                  }}
                >
                  {logoMap[skill.name] ? (
                    <img 
                      src={logoMap[skill.name]} 
                      alt={skill.name} 
                      style={{ 
                        width: 44, 
                        height: 44, 
                        objectFit: 'contain',
                        filter: skill.name === 'GitHub' ? 'invert(1)' : 'none'
                      }} 
                    />
                  ) : (
                    <div style={{ 
                      width: 44, 
                      height: 44, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: 20, 
                      background: 'rgba(45,212,191,0.1)', 
                      borderRadius: 8, 
                      color: '#2dd4bf',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {skill.name.charAt(0)}
                    </div>
                  )}
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#e1e8f4', textAlign: 'center' }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
