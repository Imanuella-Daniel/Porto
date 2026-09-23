import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 md:mt-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)', color: '#0c0e13', fontFamily: 'Outfit, sans-serif' }}
            >
              ID
            </div>
            <span className="text-muted text-sm">© 2025 Imanuella Daniel. Seluruh hak cipta dilindungi.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/Imanuella-Daniel" className="text-muted hover:text-accent text-sm no-underline transition-colors duration-150">
              GitHub
            </a>
            <a href="https://linkedin.com/in/imanuella-daniel" className="text-muted hover:text-accent text-sm no-underline transition-colors duration-150">
              LinkedIn
            </a>
            <Link to="/contact" className="text-muted hover:text-accent text-sm no-underline transition-colors duration-150">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
