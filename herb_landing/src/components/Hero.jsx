import {
  ArrowRight,
  SearchIcon,
  ThermometerIcon,
  HumidityIcon,
  SensorIcon,
  ShieldCheckIcon,
} from './Icons';

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img
          src="/images/hero-bg.jpg"
          alt="Medicinal herbs background"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        {/* Left Column: Value Proposition */}
        <div className="hero-text">
          <div className="hero-tag">
            <span className="hero-tag-pulse" />
            <span>Smart IoT Storage &amp; Blockchain Provenance</span>
          </div>
          <h1 id="hero-heading">
            Every Herb Has a Story,<br />
            <span>Every Batch Has Proof</span>
          </h1>
          <p>
            Protect post-harvest medicinal herbs with real-time ESP32 climate monitoring,
            instant threshold alerts, and blockchain-backed provenance records.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary btn-lg" onClick={scrollTo('#features')}>
              Explore Platform <ArrowRight />
            </a>
            <a href="#traceability" className="btn btn-ghost btn-lg" onClick={scrollTo('#traceability')}>
              <SearchIcon /> Track a Batch
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <strong>ESP32</strong>
              <span>Active IoT Nodes</span>
            </div>
            <div className="hero-trust-sep" />
            <div className="hero-trust-item">
              <strong>MQTT &amp; Spring</strong>
              <span>Subsecond Stream</span>
            </div>
            <div className="hero-trust-sep" />
            <div className="hero-trust-item">
              <strong>Cryptographic</strong>
              <span>Immutable Ledger</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Self-Contained Agritech IoT Console with Beautiful Box Image */}
        <div className="hero-visual">
          <div className="hero-console-card" aria-label="HerbTrace Smart IoT Storage Box & Telemetry Console">
            {/* High-Resolution Smart IoT Box Showcase Photo */}
            <div className="hero-device-media">
              <img
                src="/images/smart-iot-box.jpg"
                alt="HerbTrace Smart IoT Storage Box with active environmental climate sensors"
                loading="eager"
                fetchPriority="high"
              />
              <div className="device-media-overlay">
                <span className="device-tag-live">
                  <span className="dash-live-dot" /> ESP32 NODE #04 • ACTIVE
                </span>
                <span className="device-tag-cert">
                  <ShieldCheckIcon size={13} /> Tamper Sealed
                </span>
              </div>
            </div>

            {/* Device Info & Batch Spec */}
            <div className="hero-device-banner">
              <div className="device-banner-info">
                <div className="device-batch-head">
                  <h4>Ashwagandha Root (Grade A)</h4>
                  <span className="dash-node-pill">ESP32-NODE-04</span>
                </div>
                <span className="dash-meta">Batch #HT-2026-ASHW-0192 • Wayanad Farm Origin</span>
              </div>
            </div>

            {/* 4 Sensor Telemetry Cards */}
            <div className="dash-telemetry-grid">
              <div className="dash-metric">
                <div className="dash-metric-head">
                  <span className="dash-icon"><ThermometerIcon size={15} /></span>
                  <span className="dash-metric-label">Temp</span>
                </div>
                <div className="dash-metric-value">21.4°C</div>
                <div className="dash-metric-status text-safe">Target: 18 to 24°C</div>
              </div>

              <div className="dash-metric">
                <div className="dash-metric-head">
                  <span className="dash-icon"><HumidityIcon size={15} /></span>
                  <span className="dash-metric-label">Humidity</span>
                </div>
                <div className="dash-metric-value">54.8%</div>
                <div className="dash-metric-status text-safe">Target: 45 to 60%</div>
              </div>

              <div className="dash-metric">
                <div className="dash-metric-head">
                  <span className="dash-icon"><SensorIcon size={15} /></span>
                  <span className="dash-metric-label">VOC Index</span>
                </div>
                <div className="dash-metric-value">0.03 ppm</div>
                <div className="dash-metric-status text-safe">Nominal • Spoilage Safe</div>
              </div>

              <div className="dash-metric">
                <div className="dash-metric-head">
                  <span className="dash-icon"><ShieldCheckIcon size={15} /></span>
                  <span className="dash-metric-label">Lid Integrity</span>
                </div>
                <div className="dash-metric-value">Sealed</div>
                <div className="dash-metric-status text-safe">0 Tamper Incidents</div>
              </div>
            </div>

            {/* Ledger Verification Footer Strip */}
            <div className="dash-footer-strip">
              <div className="dash-ledger-info">
                <span className="dash-hash-label">Ledger:</span>
                <code className="dash-hash">0x7f4a...89c2</code>
                <span className="dash-block">Block #491208</span>
              </div>
              <div className="dash-verified-badge">
                <ShieldCheckIcon size={14} /> Cryptographically Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
