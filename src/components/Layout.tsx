import { useState, useEffect } from "react";
import { Link, useLocation, Outlet, ScrollRestoration } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

import cvPdf from "../assets/CV_Imanuella Daniel.pdf";

const nav = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Saya", to: "/about" },
  { label: "Proyek", to: "/projects" },
  { label: "Pengalaman", to: "/experience" },
  { label: "Kontak", to: "/contact" },
];

function isActive(to: string, pathname: string) {
  return to === "/" ? pathname === "/" : pathname.startsWith(to);
}

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-dvh flex flex-col bg-[#05070D] text-white">
      <ScrollRestoration />

      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-full border border-white/10 bg-[#060810]/80 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all">
          <Link
            to="/"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center text-[12px] sm:text-[13px] font-serif italic text-blue-200 no-underline transition-all hover:scale-105 hover:border-blue-400/60 shadow-[0_0_12px_rgba(59,130,246,0.15)] flex-shrink-0"
            title="Imanuella Daniel"
          >
            ID
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {[
              { label: "Beranda", to: "/" },
              { label: "Proyek", to: "/projects" },
              { label: "Pengalaman", to: "/experience" },
              { label: "Tentang", to: "/about" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 no-underline font-sans ${
                  isActive(item.to, pathname)
                    ? "text-white bg-white/[0.08] font-medium shadow-[0_1px_8px_rgba(255,255,255,0.05)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04] font-normal"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="w-px h-3.5 bg-white/10 mx-1" />

            <Link
              to="/contact"
              className={`text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 no-underline font-sans inline-flex items-center gap-1.5 ${
                isActive("/contact", pathname)
                  ? "text-blue-300 bg-blue-500/15 border border-blue-400/30 font-medium shadow-[0_0_16px_rgba(59,130,246,0.1)]"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04] font-normal"
              }`}
            >
              <span>Kontak</span>
              <span className="font-mono text-[11px] text-blue-400">↗</span>
            </Link>
          </nav>

          <div className="flex md:hidden items-center gap-1">
            <Link
              to="/contact"
              className={`text-[12px] px-2.5 py-1 rounded-full no-underline font-sans inline-flex items-center gap-1 ${
                isActive("/contact", pathname)
                  ? "text-blue-300 bg-blue-500/15 border border-blue-400/30 font-medium"
                  : "text-slate-400"
              }`}
            >
              Kontak <span className="font-mono text-[10px] text-blue-400">↗</span>
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              className="p-1.5 text-slate-400 hover:text-white cursor-pointer border-0 bg-transparent rounded-full hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#05070D]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-3 md:hidden">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
          </div>
          {[
            { label: "Beranda", to: "/" },
            { label: "Proyek", to: "/projects" },
            { label: "Pengalaman", to: "/experience" },
            { label: "Tentang", to: "/about" },
            { label: "Kontak ↗", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-xl font-medium px-6 py-2.5 rounded-full no-underline transition-colors font-sans ${
                isActive(item.to, pathname)
                  ? "text-blue-300 bg-blue-500/15 border border-blue-400/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2.5 rounded-full text-sm font-medium no-underline bg-blue-500 hover:bg-blue-400 text-white shadow-[0_0_24px_rgba(59,130,246,0.25)] transition-all font-sans"
          >
            Lihat CV
          </a>
        </div>
      )}

      <main className="flex-1 pt-16">
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
