import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Collection', path: '/collection' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Upload', path: '/upload' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(107,33,168,0.98)] shadow-[0_2px_20px_rgba(0,0,0,0.1)]'
          : 'bg-[rgba(107,33,168,0.92)]'
      }`}
      style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="content-max-width w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 4C14 4 6 10 6 16C6 19 8 22 14 22C20 22 22 19 22 16C22 10 14 4 14 4Z" fill="url(#rainbow)" opacity="0.9"/>
            <ellipse cx="14" cy="18" rx="6" ry="4" fill="white" opacity="0.3"/>
            <defs>
              <linearGradient id="rainbow" x1="6" y1="4" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F43F5E"/>
                <stop offset="0.25" stopColor="#FBBF24"/>
                <stop offset="0.5" stopColor="#22C55E"/>
                <stop offset="0.75" stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#7E22CE"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-white font-body text-[11px] sm:text-xs font-medium uppercase tracking-[0.08em]">
            Rainbow Fancy & Prints
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                isActive(link.path)
                  ? 'text-white border-b-2 border-hot-pink'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919535933173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-warm text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(251,191,36,0.4)]"
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-charcoal p-6 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                  isActive(link.path) ? 'text-hot-pink' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919535933173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 gradient-warm text-white text-sm font-semibold px-6 py-3 rounded-full mt-2"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
