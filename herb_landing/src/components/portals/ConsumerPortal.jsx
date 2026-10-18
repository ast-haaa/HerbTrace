import { useState } from 'react';
import PortalHeader from './PortalHeader';
import { CONSUMER_BATCHES } from '../../mock/consumerData';
import {
  SearchIcon,
  QrCodeIcon,
  MapPinIcon,
  ThermometerIcon,
  HumidityIcon,
  ShieldCheckIcon,
  BlockchainIcon,
  CheckCircleIcon,
  BellAlertIcon,
  FlaskIcon,
  PlantIcon,
} from '../Icons';

export default function ConsumerPortal({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('HT-2026-ASHW-0192');
  const [activeBatch, setActiveBatch] = useState(CONSUMER_BATCHES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    const found = CONSUMER_BATCHES.find((b) => b.id.toUpperCase() === query);
    if (found) {
      setActiveBatch(found);
      setScanMessage('');
    } else {
      setScanMessage(`No batch found for "${searchQuery}". Try a sample batch ID below.`);
    }
  };

  const handleSelectSample = (batch) => {
    setSearchQuery(batch.id);
    setActiveBatch(batch);
    setScanMessage('');
  };

  const handleSimulateScan = (batchToScan = CONSUMER_BATCHES[0]) => {
    setIsScanning(true);
    setScanMessage('Accessing simulated optical QR scanner…');
    setTimeout(() => {
      setIsScanning(false);
      setActiveBatch(batchToScan);
      setSearchQuery(batchToScan.id);
      setScanMessage(`QR Code Scanned successfully for ${batchToScan.id}!`);
      setTimeout(() => setScanMessage(''), 4000);
    }, 1200);
  };

  return (
    <div className="portal-page consumer-portal-view">
      <PortalHeader activePortal="consumer" onNavigate={onNavigate} />

      <main className="container portal-content-area">
        {/* Header */}
        <div className="portal-hero-strip">
          <div className="portal-hero-title-wrap">
            <span className="portal-section-tag">
              <QrCodeIcon size={16} /> Consumer Provenance Portal
            </span>
            <h1>Verify Your Herbal Product</h1>
            <p className="portal-hero-desc">
              Scan packaging QR codes or enter batch numbers to inspect authentic farm origins,
              climate storage timelines, and laboratory certificates.
            </p>
          </div>
        </div>

        {/* Search & QR Scanner Section */}
        <section className="consumer-lookup-grid">
          {/* Left: Search Box */}
          <div className="lookup-search-card">
            <h3>Batch ID Search</h3>
            <p>Enter the 16 character code printed beside the QR code on your product box.</p>

            <form onSubmit={handleSearch} className="consumer-search-form">
              <div className="search-input-wrap">
                <input
                  type="text"
                  id="consumer-batch-input"
                  className="consumer-input"
                  placeholder="e.g. HT-2026-ASHW-0192"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Batch ID"
                />
                <button type="submit" id="consumer-batch-submit" className="btn btn-primary">
                  <SearchIcon size={16} /> Track Batch
                </button>
              </div>
            </form>

            <div className="sample-batches-row">
              <span className="sample-label">Sample Batches:</span>
              <div className="sample-buttons">
                {CONSUMER_BATCHES.map((b) => (
                  <button
                    key={b.id}
                    id={`sample-batch-btn-${b.id.toLowerCase()}`}
                    type="button"
                    className={`sample-tag-btn${activeBatch?.id === b.id ? ' active' : ''}`}
                    onClick={() => handleSelectSample(b)}
                  >
                    {b.id} ({b.herbName.split(' ')[0]})
                  </button>
                ))}
              </div>
            </div>

            {scanMessage && (
              <div className="consumer-scan-message" role="status">
                {scanMessage}
              </div>
            )}
          </div>

          {/* Right: Simulated QR Scanner Viewfinder */}
          <div className="lookup-qr-card">
            <div className="qr-viewfinder-box">
              <div className="viewfinder-frame">
                <div className="viewfinder-corner top-left" />
                <div className="viewfinder-corner top-right" />
                <div className="viewfinder-corner bottom-left" />
                <div className="viewfinder-corner bottom-right" />
                <div className={`scan-laser-line${isScanning ? ' scanning' : ''}`} />
                <QrCodeIcon size={72} />
              </div>
              <div className="viewfinder-controls">
                <p>Simulate packaging barcode or QR scanner</p>
                <button
                  type="button"
                  id="simulate-qr-scan-btn"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleSimulateScan(CONSUMER_BATCHES[1])}
                  disabled={isScanning}
                >
                  {isScanning ? 'Scanning Code…' : 'Simulate QR Scan (Tulsi Batch)'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Batch Provenance & Storage Record */}
        {activeBatch && (
          <div className="consumer-batch-detail-wrap">
            {/* Top Provenance Summary */}
            <section className="batch-hero-card">
              <div className="batch-hero-main">
                <div className="batch-status-pill">
                  <ShieldCheckIcon size={16} /> 100% Cryptographically Verified Batch
                </div>
                <h2>{activeBatch.herbName}</h2>
                <span className="batch-botanical-name">
                  {activeBatch.botanicalName} ({activeBatch.commonName})
                </span>
                <div className="batch-meta-chips">
                  <span className="meta-chip">Batch: <code>{activeBatch.id}</code></span>
                  <span className="meta-chip">Harvested: {activeBatch.harvestDate}</span>
                  <span className="meta-chip">Grade: {activeBatch.qualityGrade}</span>
                  <span className="meta-chip">Box Unit: {activeBatch.storageBoxId}</span>
                </div>
              </div>
            </section>

            {/* Farm Origin & Storage History 2-Col Grid */}
            <div className="consumer-twocol-grid">
              {/* Origin Information */}
              <div className="portal-subcard">
                <div className="subcard-header">
                  <div className="subcard-icon"><MapPinIcon size={20} /></div>
                  <div>
                    <h3>Cultivation Origin &amp; Soil</h3>
                    <p>Verified geographical coordinates and grower cooperative</p>
                  </div>
                </div>

                <div className="origin-details-list">
                  <div className="origin-detail-row">
                    <span className="od-lbl">Grower Cooperative</span>
                    <strong className="od-val">{activeBatch.origin.farm}</strong>
                  </div>
                  <div className="origin-detail-row">
                    <span className="od-lbl">Agro-Climatic Zone</span>
                    <strong className="od-val">{activeBatch.origin.location}</strong>
                  </div>
                  <div className="origin-detail-row">
                    <span className="od-lbl">GPS Geolocation</span>
                    <code className="od-val text-safe">{activeBatch.origin.coordinates}</code>
                  </div>
                  <div className="origin-detail-row">
                    <span className="od-lbl">Altitude &amp; Soil</span>
                    <span className="od-val">{activeBatch.origin.elevation} • {activeBatch.origin.soilType}</span>
                  </div>
                </div>
              </div>

              {/* Climate Storage History */}
              <div className="portal-subcard">
                <div className="subcard-header">
                  <div className="subcard-icon text-safe"><ThermometerIcon size={20} /></div>
                  <div>
                    <h3>Storage History &amp; Telemetry</h3>
                    <p>Continuous monitoring metrics logged during smart crate storage</p>
                  </div>
                </div>

                <div className="storage-kpis-grid">
                  <div className="st-kpi">
                    <span className="st-lbl">Average Temp</span>
                    <strong className="st-val">{activeBatch.storageHistory.avgTemp}</strong>
                    <span className="st-sub">Band: {activeBatch.storageHistory.tempRange}</span>
                  </div>
                  <div className="st-kpi">
                    <span className="st-lbl">Average Humidity</span>
                    <strong className="st-val">{activeBatch.storageHistory.avgHumidity}</strong>
                    <span className="st-sub">Band: {activeBatch.storageHistory.humidityRange}</span>
                  </div>
                  <div className="st-kpi">
                    <span className="st-lbl">Monitored Duration</span>
                    <strong className="st-val">{activeBatch.storageHistory.totalHoursMonitored} Hours</strong>
                    <span className="st-sub">{activeBatch.storageHistory.complianceRate} Compliance</span>
                  </div>
                  <div className="st-kpi">
                    <span className="st-lbl">Tamper Incidents</span>
                    <strong className="st-val text-safe">{activeBatch.storageHistory.tamperBreaches} Breaches</strong>
                    <span className="st-sub">Hardware seal intact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Traceability Supply Chain Journey Timeline */}
            <section className="portal-subcard">
              <div className="subcard-header">
                <div className="subcard-icon"><PlantIcon size={20} /></div>
                <div>
                  <h3>End to End Traceability Timeline</h3>
                  <p>Chronological verification of transit checkpoints and custody handoffs</p>
                </div>
              </div>

              <div className="consumer-timeline">
                {activeBatch.timeline.map((step, i) => (
                  <div className="timeline-node-item" key={step.stage}>
                    <div className="node-marker">
                      <CheckCircleIcon size={18} />
                      {i < activeBatch.timeline.length - 1 && <span className="node-line" />}
                    </div>
                    <div className="node-card">
                      <div className="node-head">
                        <h4>{step.stage}</h4>
                        <span className="node-date">{step.date}</span>
                      </div>
                      <span className="node-loc"><MapPinIcon size={13} /> {step.location}</span>
                      <p className="node-desc">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recorded Alerts & Lab Assay 2-Col Grid */}
            <div className="consumer-twocol-grid">
              {/* Recorded Alerts */}
              <div className="portal-subcard">
                <div className="subcard-header">
                  <div className="subcard-icon text-warning"><BellAlertIcon size={20} /></div>
                  <div>
                    <h3>Recorded Climate Alerts</h3>
                    <p>Transparent history of any threshold excursions and corrective responses</p>
                  </div>
                </div>

                {activeBatch.recordedAlerts.length > 0 ? (
                  <div className="recorded-alerts-list">
                    {activeBatch.recordedAlerts.map((alt) => (
                      <div className="recorded-alert-item" key={alt.timestamp}>
                        <div className="rec-alert-top">
                          <span className="rec-alert-title">{alt.type}</span>
                          <span className="rec-alert-pill">{alt.status}</span>
                        </div>
                        <p className="rec-alert-desc">{alt.description}</p>
                        <span className="rec-alert-time">{alt.timestamp}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-alerts-card">
                    <CheckCircleIcon size={24} />
                    <p>Zero alerts recorded. Batch remained completely within target climate parameters.</p>
                  </div>
                )}
              </div>

              {/* Lab Quality Certificate */}
              <div className="portal-subcard">
                <div className="subcard-header">
                  <div className="subcard-icon text-safe"><FlaskIcon size={20} /></div>
                  <div>
                    <h3>Laboratory Purity Assay</h3>
                    <p>Certified phytochemical potency and contaminants clearance</p>
                  </div>
                </div>

                <div className="lab-summary-box">
                  <div className="lab-cert-strip">
                    <span className="cert-badge">CERTIFICATE OF ANALYSIS</span>
                    <code>{activeBatch.labAssaySummary.certNumber}</code>
                  </div>
                  <ul className="lab-results-list">
                    <li>
                      <span>Active Compound Potency:</span>
                      <strong>{activeBatch.labAssaySummary.activePotency}</strong>
                    </li>
                    <li>
                      <span>Residual Moisture:</span>
                      <strong>{activeBatch.labAssaySummary.moistureContent}</strong>
                    </li>
                    <li>
                      <span>Heavy Metals Screening:</span>
                      <strong className="text-safe">{activeBatch.labAssaySummary.heavyMetals}</strong>
                    </li>
                    <li>
                      <span>Microbial Pathogen Screen:</span>
                      <strong className="text-safe">{activeBatch.labAssaySummary.microbialScreen}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Blockchain Block Seal */}
            <div className="blockchain-seal-strip">
              <div className="seal-left">
                <BlockchainIcon size={20} />
                <span>Anchored into Cryptographic Block #{activeBatch.ledgerBlock.blockNumber}</span>
              </div>
              <code className="seal-hash">{activeBatch.ledgerBlock.merkleHash}</code>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
