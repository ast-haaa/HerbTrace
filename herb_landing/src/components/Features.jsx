import {
  SensorIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  FlaskIcon,
  BlockchainIcon,
  QrCodeIcon,
} from './Icons';

const FEATURES = [
  {
    icon: <SensorIcon size={24} />,
    title: 'Real-Time IoT Telemetry',
    desc: 'ESP32 sensors stream temperature, humidity, and storage climate continuously via MQTT.',
    tag: 'Continuous Logging',
  },
  {
    icon: <BellAlertIcon size={24} />,
    title: 'Automated Risk Alerts',
    desc: 'Instant alerts trigger the moment climate readings approach critical viability bounds.',
    tag: 'Zero Lag Triggers',
  },
  {
    icon: <ShieldCheckIcon size={24} />,
    title: 'Smart Box Lid Integrity',
    desc: 'Hardware sensors detect unauthorized container access and safeguard physical batch seals.',
    tag: 'Tamper Evident',
  },
  {
    icon: <FlaskIcon size={24} />,
    title: 'Certified Lab Assays',
    desc: 'Accredited testing laboratories record chemical purity assays and moisture certifications.',
    tag: 'ISO/IEC Standards',
  },
  {
    icon: <BlockchainIcon size={24} />,
    title: 'Blockchain Audit Trail',
    desc: 'Cryptographic ledger hashes guarantee that historical records cannot be altered or deleted.',
    tag: 'SHA-256 Hashes',
  },
  {
    icon: <QrCodeIcon size={24} />,
    title: 'Consumer QR Verification',
    desc: 'Buyers scan package QR codes for instant mobile farm-to-shelf provenance inspection.',
    tag: 'Instant Mobile Scan',
  },
];

export default function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-heading">
      <div className="container">
        <div className="features-header reveal">
          <span className="section-label">Engineered Capabilities</span>
          <h2 className="section-title" id="features-heading">
            Built for Visibility,<br /> Architected for Action
          </h2>
          <p className="section-subtitle">
            Essential IoT hardware monitoring, automated early alerts, and immutable digital provenance.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map(({ icon, title, desc, tag }, i) => (
            <div
              className="feature-card reveal"
              key={title}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="feature-card-top">
                <div className="feature-icon-box">{icon}</div>
                <span className="feature-badge">{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
