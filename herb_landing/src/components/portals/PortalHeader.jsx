import { LeafLogo, ArrowRight } from '../Icons';

export default function PortalHeader({ activePortal, onNavigate }) {
  const portalsList = [
    { key: 'farmer', label: 'Farmer Portal', path: '/farmer' },
    { key: 'consumer', label: 'Consumer Portal', path: '/consumer' },
    { key: 'lab', label: 'Lab Tester Portal', path: '/lab' },
  ];

  return (
    <header className="portal-top-bar" role="banner">
      <div className="container portal-top-inner">
        <div className="portal-brand-group">
          <a
            href="/"
            id="portal-back-to-home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="portal-brand-link"
            title="Return to HerbTrace Home"
            aria-label="HerbTrace Home"
          >
            <div className="navbar-logo-icon">
              <LeafLogo size={28} />
            </div>
            <span className="navbar-brand-text" style={{ fontSize: '1.35rem' }}>
              <span className="brand-herb" style={{ color: '#064E3B' }}>Herb</span>
              <span className="brand-trace" style={{ color: '#0A7F4F' }}>Trace</span>
            </span>
          </a>
          <span className="portal-badge-demo">SIMULATED DEMO DATA</span>
        </div>

        <div className="portal-nav-switcher">
          <span className="switcher-label">Switch Portal:</span>
          <div className="switcher-pills">
            {portalsList.map((p) => (
              <button
                key={p.key}
                id={`switch-portal-btn-${p.key}`}
                type="button"
                className={`switcher-pill${activePortal === p.key ? ' active' : ''}`}
                onClick={() => onNavigate(p.path)}
              >
                {p.label.replace(' Portal', '')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
