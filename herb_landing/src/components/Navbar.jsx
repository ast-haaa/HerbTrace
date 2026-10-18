import { useState, useEffect, useCallback } from 'react';
import { LeafLogo, SearchIcon } from './Icons';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Traceability', href: '#traceability' },
  { label: 'Impact', href: '#impact' },
  { label: 'Portals', href: '#portals' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = useCallback(
    (e, href) => {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNav(e, '#home')} aria-label="HerbTrace Home">
          <div className="navbar-logo-icon">
            <LeafLogo size={32} />
          </div>
          <span className="navbar-brand-text">
            <span className="brand-herb">Herb</span>
            <span className="brand-trace">Trace</span>
          </span>
          <span className="brand-status-dot" title="Network Live" />
        </a>

        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links${mobileOpen ? ' open' : ''}`} role="menubar">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="navbar-link"
              role="menuitem"
              onClick={(e) => handleNav(e, href)}
            >
              {label}
            </a>
          ))}
          <a
            href="#traceability"
            className="navbar-cta-btn"
            onClick={(e) => handleNav(e, '#traceability')}
          >
            <SearchIcon size={14} />
            <span>Track a Batch</span>
          </a>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 999,
          }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
