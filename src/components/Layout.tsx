import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, ScrollRestoration } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';

import cvPdf from '../assets/CV_Imanuella Daniel.pdf';

const nav = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Saya', to: '/about' },
  { label: 'Proyek', to: '/projects' },
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

      {/* Floating Pill Navbar */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3.5 py-2 sm:px-5 sm:py-2 rounded-full border border-border/80 bg-[#131720]/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.5)] max-w-[880px] w-full transition-all">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 no-underline group flex-shrink-0">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono bg-accent/15 border border-accent/30 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-200">
              ID
            </div>
            <span className="text-fg font-semibold text-[14px] font-display tracking-tight group-hover:text-accent transition-colors">
              Imanuella Daniel
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 no-underline ${
                  isActive(item.to, pathname)
                    ? 'text-accent bg-accent/12 font-semibold shadow-[0_0_12px_rgba(45,212,191,0.18)]'
                    : 'text-[#8a9ab5] hover:text-fg hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setOpen(o => !o)}
              className="p-2 text-fg cursor-pointer border-0 bg-transparent rounded-full hover:bg-elevated transition-colors"
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
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center gap-2 md:hidden">
          {nav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-2xl font-semibold px-8 py-3 no-underline transition-colors font-display ${
                isActive(item.to, pathname) ? 'text-accent' : 'text-fg'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 px-8 py-3 rounded-full text-base font-semibold no-underline bg-accent text-bg shadow-[0_0_20px_rgba(45,212,191,0.3)]"
          >
            Lihat CV
          </a>
        </div>
      )}

      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="min-h-full flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
