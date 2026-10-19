import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center text-[11px] font-serif italic text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]">
              ID
            </div>
            <span className="text-slate-400 text-xs font-sans">
              © {new Date().getFullYear()} Imanuella Daniel. Seluruh hak cipta dilindungi.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Imanuella-Daniel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-300 text-xs sm:text-sm no-underline transition-colors font-sans"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/imanuella-daniel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-300 text-xs sm:text-sm no-underline transition-colors font-sans"
            >
              LinkedIn
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-300 text-xs sm:text-sm no-underline transition-colors font-sans"
            >
              <span>Kontak</span>
              <span className="font-mono text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-blue-400">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
