import config from '../config';
import { ArrowRight, FarmerIcon, ConsumerIcon, LabIcon, MapPinIcon, CheckCircleIcon } from './Icons';

const PORTAL_DATA = [
  {
    key: 'farmer',
    roleTag: 'Production and Storage',
    icon: <FarmerIcon size={24} />,
    image: '/images/farmer-portal.jpg',
    imageAlt: 'Medicinal herb grower monitoring storage micro climate data on a field tablet',
  },
  {
    key: 'consumer',
    roleTag: 'Provenance and Purity',
    icon: <ConsumerIcon size={24} />,
    image: '/images/consumer-portal.jpg',
    imageAlt: 'Consumer scanning a medicinal herbal batch QR code to inspect complete provenance',
  },
  {
    key: 'lab',
    roleTag: 'Assay and Certification',
    icon: <LabIcon size={24} />,
    image: '/images/lab-portal.jpg',
    imageAlt: 'Quality assurance chemist testing herbal batch sample with lab analytical tools',
  },
];

export default function Portals({ onNavigatePortal }) {
  const handleOpen = (e, url) => {
    if (onNavigatePortal && url.startsWith('/')) {
      e.preventDefault();
      onNavigatePortal(url);
    }
  };

  return (
    <section className="portals" id="portals" aria-labelledby="portals-heading">
      <div className="container">
        <div className="portals-header reveal">
          <span className="section-label">Stakeholder Workflows</span>
          <h2 className="section-title" id="portals-heading">
            Dedicated Portals, One Unified Platform
          </h2>
          <p className="section-subtitle">
            Every participant in the herbal supply chain receives a dedicated role optimized interface
            built for rapid action, verification, and quality compliance.
          </p>
        </div>

        <div className="portals-grid">
          {PORTAL_DATA.map(({ key, roleTag, icon, image, imageAlt }, i) => {
            const portal = config.portals[key];
            if (!portal) return null;

            return (
              <article
                className="portal-card reveal"
                key={key}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="portal-image-wrap">
                  <img src={image} alt={imageAlt} loading="lazy" />
                  <div className="portal-role-pill">
                    <span className="portal-role-icon">{icon}</span>
                    <span>{roleTag}</span>
                  </div>
                </div>

                <div className="portal-body">
                  <h3 className="portal-title">{portal.label}</h3>
                  <p className="portal-desc">{portal.purpose}</p>

                  <ul className="portal-feature-list" aria-label={`Key capabilities of ${portal.label}`}>
                    {portal.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircleIcon size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={portal.url}
                    className="btn btn-portal"
                    id={`portal-btn-${key}`}
                    onClick={(e) => handleOpen(e, portal.url)}
                  >
                    <span>Open Portal</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



