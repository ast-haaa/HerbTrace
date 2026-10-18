import {
  ShieldCheckIcon,
  BlockchainIcon,
  FlaskIcon,
  CpuIcon,
  PlantIcon,
  CheckCircleIcon,
} from './Icons';

const IMPACT_ITEMS = [
  {
    icon: <ShieldCheckIcon size={24} />,
    title: 'Proactive Quality Protection',
    desc: 'Automated climate alerts prevent botanical degradation before spoilage occurs.',
  },
  {
    icon: <BlockchainIcon size={24} />,
    title: 'Verifiable Farm Provenance',
    desc: 'Immutable audit trails link every batch directly to certified growers and harvest dates.',
  },
  {
    icon: <CpuIcon size={24} />,
    title: 'IoT to Cloud Architecture',
    desc: 'Seamlessly bridges ESP32 hardware sensors, MQTT data streams, and web dashboards.',
  },
  {
    icon: <PlantIcon size={24} />,
    title: 'Medicinal Plant Focus',
    desc: 'Tailored for moisture-sensitive botanicals including Ashwagandha, Tulsi, and Brahmi.',
  },
  {
    icon: <FlaskIcon size={24} />,
    title: 'Certified Lab Assays',
    desc: 'Accredited laboratory purity tests and moisture levels are anchored on-chain.',
  },
  {
    icon: <CheckCircleIcon size={24} />,
    title: 'Transparent Stakeholders',
    desc: 'Empowers farmers, laboratories, and consumers with shared, trustworthy quality data.',
  },
];

export default function Impact() {
  return (
    <section className="impact" id="impact" aria-labelledby="impact-heading">
      <div className="container">
        <div className="impact-header reveal">
          <span className="section-label">Impact and Industry Value</span>
          <h2 className="section-title" id="impact-heading">
            Elevating Standards in<br /> Herbal Quality Assurance
          </h2>
          <p className="section-subtitle">
            HerbTrace replaces paper guesswork with real-time IoT monitoring and cryptographic proof.
          </p>
        </div>

        <div className="impact-grid">
          {IMPACT_ITEMS.map(({ icon, title, desc }, i) => (
            <div
              className="impact-card reveal"
              key={title}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="impact-icon-pill">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
