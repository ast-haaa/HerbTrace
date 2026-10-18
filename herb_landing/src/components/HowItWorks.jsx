import {
  PlantIcon,
  BoxIcon,
  FlaskIcon,
  BlockchainIcon,
  QrCodeIcon,
} from './Icons';

const JOURNEY_STAGES = [
  {
    id: 'farmer',
    step: '01',
    icon: <PlantIcon size={26} />,
    title: 'Farmer Harvest',
    shortLabel: 'Geotagged harvest & batch ID assignment at farm origin',
    gradient: 'linear-gradient(135deg, #0A7F4F, #10B981)',
    badgeColor: '#10B981',
  },
  {
    id: 'box',
    step: '02',
    icon: <BoxIcon size={26} />,
    title: 'Smart IoT Box',
    shortLabel: 'ESP32 continuous temp, humidity & VOC climate logging',
    gradient: 'linear-gradient(135deg, #047857, #0D9488)',
    badgeColor: '#0D9488',
  },
  {
    id: 'lab',
    step: '03',
    icon: <FlaskIcon size={26} />,
    title: 'Lab Testing',
    shortLabel: 'Chemical purity assays & accredited quality certification',
    gradient: 'linear-gradient(135deg, #0284C7, #06B6D4)',
    badgeColor: '#0284C7',
  },
  {
    id: 'blockchain',
    step: '04',
    icon: <BlockchainIcon size={26} />,
    title: 'Blockchain Ledger',
    shortLabel: 'Immutable SHA-256 cryptographic milestone hashes',
    gradient: 'linear-gradient(135deg, #B45309, #F59E0B)',
    badgeColor: '#F59E0B',
  },
  {
    id: 'consumer',
    step: '05',
    icon: <QrCodeIcon size={26} />,
    title: 'Consumer QR Scan',
    shortLabel: 'Instant retail verification of origin and storage climate',
    gradient: 'linear-gradient(135deg, #065F3A, #059669)',
    badgeColor: '#059669',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <div className="how-header reveal">
          <span className="section-label">End to End Journey</span>
          <h2 className="section-title" id="how-heading">
            From Soil to Verification
          </h2>
          <p className="section-subtitle">
            A continuous, tamper-evident journey connecting field harvest directly to consumer trust.
          </p>
        </div>

        {/* Single Connected Visual Journey Map */}
        <div className="journey-flow-track reveal" style={{ transitionDelay: '0.12s' }}>
          {JOURNEY_STAGES.map((stage, idx) => (
            <div key={stage.id} className="journey-flow-step">
              <div className="journey-node-card">
                <div className="journey-node-head">
                  <span className="journey-node-step" style={{ color: stage.badgeColor }}>
                    STAGE {stage.step}
                  </span>
                  <div
                    className="journey-node-icon"
                    style={{ background: stage.gradient }}
                    aria-hidden="true"
                  >
                    {stage.icon}
                  </div>
                </div>
                <h3 className="journey-node-title">{stage.title}</h3>
                <p className="journey-node-label">{stage.shortLabel}</p>
              </div>

              {idx < JOURNEY_STAGES.length - 1 && (
                <div
                  className="journey-flow-connector"
                  aria-hidden="true"
                  style={{ '--step-idx': idx }}
                >
                  <div className="connector-line">
                    <span className="connector-pulse" />
                  </div>
                  <svg className="connector-arrow" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10H16M11 5L16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="journey-guarantee-strip reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="guarantee-item">
            <span className="guarantee-dot" />
            <span><strong>Real Time Telemetry:</strong> Continuous ESP32 sensor logging</span>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-dot" />
            <span><strong>Tamper Evident:</strong> Physical hardware lid sensors &amp; SHA-256 blocks</span>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-dot" />
            <span><strong>Universal Access:</strong> Dedicated Farmer, Lab Tester &amp; Consumer portals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
