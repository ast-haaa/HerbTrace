import {
  FlutterIcon,
  TealNetworkIcon,
  PurpleArrowIcon,
  NuxtBrandIcon,
  VueBrandIcon,
  PythonBrandIcon,
  WorkflowBrandIcon,
  EspIcon,
  MqttIcon,
  SpringIcon,
  MySqlIcon,
  BlockchainBrandIcon,
  ReactIcon,
  DockerIcon,
} from './Icons';

const TECH_MARQUEE = [
  { name: 'Flutter', icon: <FlutterIcon size={38} />, label: 'Mobile Client', color: '#02569B' },
  { name: 'Mesh Network', icon: <TealNetworkIcon size={38} />, label: 'IoT Swarm', color: '#00C4A7' },
  { name: 'Stream Broker', icon: <PurpleArrowIcon size={38} />, label: 'Sub-second Sync', color: '#7C4DFF' },
  { name: 'Nuxt Engine', icon: <NuxtBrandIcon size={38} />, label: 'SSR Portal', color: '#00DC82' },
  { name: 'Vue Reactive', icon: <VueBrandIcon size={38} />, label: 'Dashboard UI', color: '#42B883' },
  { name: 'Python AI', icon: <PythonBrandIcon size={38} />, label: 'Phytochemical ML', color: '#3776AB' },
  { name: 'Pipeline Core', icon: <WorkflowBrandIcon size={38} />, label: 'Batch Workflow', color: '#EA4335' },
  { name: 'ESP32 Nodes', icon: <EspIcon size={38} />, label: 'Edge Sensors', color: '#E11D48' },
  { name: 'MQTT Protocol', icon: <MqttIcon size={38} />, label: 'Telemetry Pub/Sub', color: '#6B21A8' },
  { name: 'Spring Boot', icon: <SpringIcon size={38} />, label: 'Microservices', color: '#15803D' },
  { name: 'MySQL DB', icon: <MySqlIcon size={38} />, label: 'Time-Series Data', color: '#0284C7' },
  { name: 'SHA-256 Ledger', icon: <BlockchainBrandIcon size={38} />, label: 'Cryptographic Proof', color: '#D97706' },
  { name: 'React Portals', icon: <ReactIcon size={38} />, label: 'Stakeholder UI', color: '#06B6D4' },
  { name: 'Docker Engine', icon: <DockerIcon size={38} />, label: 'Cloud Gateway', color: '#0284C7' },
];

export default function TechStack() {
  return (
    <section className="tech" id="technology" aria-labelledby="tech-heading">
      <div className="container">
        <div className="tech-header reveal">
          <span className="section-label">Architecture &amp; Stack</span>
          <h2 className="section-title" id="tech-heading">
            Engineered for Precision &amp; Reliability
          </h2>
          <p className="section-subtitle">
            An agritech technology foundation uniting industrial IoT hardware, cloud services, and cryptographic verification.
          </p>
        </div>

        {/* Dynamic Infinite Moving Tech Logo Marquee */}
        <div className="tech-marquee-container reveal" style={{ transitionDelay: '0.05s' }}>
          <div className="tech-marquee-wrapper" aria-label="HerbTrace Core Technology Stack">
            <div className="tech-marquee-track">
              {/* Render twice for continuous seamless infinite loop */}
              {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, idx) => (
                <div
                  className="tech-marquee-item"
                  key={`${tech.name}-${idx}`}
                  style={{ '--tech-accent': tech.color }}
                >
                  <div className="marquee-icon-box">{tech.icon}</div>
                  <div className="marquee-info">
                    <span className="marquee-name">{tech.name}</span>
                    <span className="marquee-label">{tech.label}</span>
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
