import { Link } from 'react-router';
import { getFeaturedProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

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
      <section className="min-h-[calc(100vh-64px)] flex items-center py-20 relative overflow-hidden">
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(45,212,191,0.055)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 w-full flex gap-16 items-center relative z-10">
          {/* Text side */}
          <div className="flex-1 min-w-0">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2.5 mb-4 font-mono text-accent text-[13px]">
                <span className="inline-block w-7 h-px bg-accent" />
                Halo, saya
              </div>

              <h1 className="font-display text-[clamp(48px,7vw,80px)] font-extrabold text-fg m-0 mb-1.5 leading-[1.04] tracking-[-0.025em]">
                Imanuella Daniel
              </h1>

              <div className="font-display text-[clamp(18px,2.5vw,24px)] text-accent font-semibold mb-5">
                IT Graduate · Software Developer
              </div>

              <p className="text-base text-muted leading-relaxed max-w-[460px] m-0 mb-8">
                Lulusan S1 Informatika yang antusias dalam membangun solusi digital yang bermanfaat, andal, dan mudah digunakan. Terbuka untuk posisi entry-level dan junior di bidang pengembangan web dan perangkat lunak.
              </p>

              <div className="flex gap-3 mb-8 flex-wrap">
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-accent text-bg rounded-lg font-bold text-sm no-underline inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(45,212,191,0.25)] hover:-translate-y-1 hover:opacity-100"
                >
                  Lihat Proyek Saya
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a
                  href="/src/assets/CV_Imanuella Daniel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent text-fg rounded-lg font-semibold text-sm no-underline border border-border transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Lihat CV
                </a>
              </div>

              <div className="flex gap-3.5 items-center">
                {social.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    className="text-muted no-underline transition-all duration-300 hover:text-accent hover:-translate-y-1"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Avatar side */}
          <div className="hidden md:flex shrink-0 justify-center">
            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-px rounded-[20px] bg-gradient-to-br from-accent/30 to-transparent z-0 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="w-[300px] h-[380px] bg-gradient-to-br from-[#1a2033] to-[#131720] rounded-[18px] border border-accent/20 flex flex-col items-center justify-center relative overflow-hidden z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute -top-[60px] -right-[60px] w-[180px] h-[180px] rounded-full border border-accent/[0.08] bg-[radial-gradient(circle,rgba(45,212,191,0.04)_0%,transparent_70%)]" />
                  <div className="absolute -bottom-[40px] -left-[40px] w-[140px] h-[140px] rounded-full border border-accent/[0.06]" />
                  <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-accent to-[#0d9488] flex items-center justify-center font-display font-extrabold text-[42px] text-bg mb-5 relative z-20">
                    ID
                  </div>
                  <div className="text-center relative z-20">
                    <div className="font-display text-fg font-bold text-xl mb-1">Imanuella Daniel</div>
                    <div className="text-accent text-xs font-mono tracking-wider">IT Graduate · Software Developer</div>
                    <div className="text-muted text-[11px] mt-1.5">Yogyakarta, Indonesia</div>
                    <div className="flex gap-1.5 justify-center mt-4 flex-wrap px-4">
                      {['PHP', 'Laravel', 'Flutter', 'MySQL'].map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/15 font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
