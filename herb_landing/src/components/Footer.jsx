import config from '../config';
import { LeafLogo } from './Icons';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Journey', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Portals', href: '#portals' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onNavigatePortal }) {
  const portals = config.portals;

  const handlePortalClick = (e, url) => {
    if (onNavigatePortal && url.startsWith('/')) {
      e.preventDefault();
      onNavigatePortal(url);
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand-logo" onClick={scrollTo('#home')} aria-label="HerbTrace Home">
              <div className="footer-logo-icon">
                <LeafLogo size={32} />
              </div>
              <span className="navbar-brand-text">
                <span className="brand-herb" style={{ color: '#ffffff' }}>Herb</span>
                <span className="brand-trace" style={{ color: '#34d399' }}>Trace</span>
              </span>
            </a>
            <p className="footer-tagline">
              Smart IoT herbal storage monitoring and blockchain traceability platform.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="footer-links-col">
            <h4>Platform</h4>
            <nav className="footer-links-nav" aria-label="Footer platform links">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={href} href={href} onClick={scrollTo(href)}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Dedicated Stakeholder Portals (Clean, without arrows or clutter) */}
          <div className="footer-links-col">
            <h4>Dedicated Portals</h4>
            <nav className="footer-links-nav" aria-label="Portal links">
              {Object.entries(portals).map(([key, { url, label }]) => (
                <a
                  key={key}
                  href={url}
                  className="footer-portal-link"
                  onClick={(e) => handlePortalClick(e, url)}
                >
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Clean, minimal bottom bar */}
        <div className="footer-bottom-bar">
          <p>© {CURRENT_YEAR} HerbTrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
