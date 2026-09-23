import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, ScrollRestoration } from 'react-router';
import Footer from './Footer';

const nav = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Saya', to: '/about' },
  { label: 'Proyek', to: '/projects' },
  { label: 'Keahlian', to: '/skills' },
  { label: 'Pengalaman', to: '/experience' },
  { label: 'Kontak', to: '/contact' },
];

function isActive(to: string, pathname: string) {
  return to === '/' ? pathname === '/' : pathname.startsWith(to);
}

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-dvh flex flex-col text-fg">
      <div className="global-bg-dots" />
      <ScrollRestoration />

      <header
        className="fixed top-0 inset-x-0 z-50 h-16 flex items-center border-b border-border/60"
        style={{ backgroundColor: 'rgba(12,14,19,0.9)', backdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)', color: '#0c0e13', fontFamily: 'Outfit, sans-serif' }}
            >
              ID
            </div>
            <span className="text-fg font-semibold text-[15px]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Imanuella Daniel
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {nav.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[13px] font-medium px-3.5 py-1.5 rounded-md transition-colors duration-150 no-underline ${
                  isActive(item.to, pathname)
                    ? 'text-accent bg-accent-soft'
                    : 'text-muted hover:text-fg hover:bg-elevated'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/src/assets/CV_Imanuella Daniel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-1.5 rounded-md text-[13px] font-semibold no-underline transition-opacity duration-150 hover:opacity-80"
              style={{ background: '#2dd4bf', color: '#0c0e13' }}
            >
              Lihat CV
            </a>
          </nav>

          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 text-fg cursor-pointer border-0 bg-transparent rounded-md hover:bg-elevated transition-colors"
            aria-label="Buka menu navigasi"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-1 md:hidden">
          {nav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-2xl font-semibold px-8 py-3 no-underline transition-colors ${
                isActive(item.to, pathname) ? 'text-accent' : 'text-fg'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/src/assets/CV_Imanuella Daniel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 px-8 py-3 rounded-lg text-base font-semibold no-underline"
            style={{ background: '#2dd4bf', color: '#0c0e13' }}
          >
            Lihat CV
          </a>
        </div>
      )}

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
