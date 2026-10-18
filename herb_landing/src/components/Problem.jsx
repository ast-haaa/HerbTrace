import { ThermometerIcon, AlertTriangleIcon, BlockchainIcon, ShieldCheckIcon } from './Icons';

const PROBLEMS = [
  {
    icon: <ThermometerIcon size={22} />,
    title: 'Unmonitored Climate Drift',
    text: 'Medicinal herbs lose bioactive potency when humidity or temperature drifts undetected in traditional storage.',
  },
  {
    icon: <AlertTriangleIcon size={22} />,
    title: 'Silent Spoilage & Delayed Alerts',
    text: 'Microbial decay and VOC changes develop quietly before periodic manual inspections catch them.',
  },
  {
    icon: <BlockchainIcon size={22} />,
    title: 'Disjointed Supply Chain Audit',
    text: 'Multiple handoffs without shared digital telemetry erode buyer confidence and brand credibility.',
  },
  {
    icon: <ShieldCheckIcon size={22} />,
    title: 'Counterfeits & Origin Fraud',
    text: 'Without tamper-evident cryptographic batch verification, proving authentic organic harvest origin is unreliable.',
  },
];

export default function Problem() {
  return (
    <section className="problem" id="problem" aria-labelledby="problem-heading">
      <div className="container">
        <div className="problem-grid">
          <div className="problem-image reveal">
            <div className="problem-image-card">
              <img
                src="/images/problem.jpg"
                alt="Comparison of fresh medicinal herbs versus degraded herbs affected by poor storage"
                loading="lazy"
              />
              <div className="problem-image-overlay">
                <div className="problem-stat-badge">
                  <span className="stat-num">30%+</span>
                  <span className="stat-desc">Bioactive potency lost in unmonitored herbal storage</span>
                </div>
              </div>
            </div>
          </div>

          <div className="problem-text-col reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="section-label">The Quality Crisis</span>
            <h2 className="section-title" id="problem-heading">
              Quality Does Not Wait,<br /> Visibility Often Does
            </h2>
            <p className="section-subtitle">
              Post-harvest losses in medicinal plants are preventable when growers and buyers
              have real-time telemetry and verifiable records.
            </p>

            <div className="problem-list">
              {PROBLEMS.map(({ icon, title, text }) => (
                <div className="problem-item" key={title}>
                  <div className="problem-icon-wrapper">{icon}</div>
                  <div className="problem-item-body">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
