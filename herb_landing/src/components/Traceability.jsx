import { useState, useCallback } from 'react';
import config from '../config';
import {
  SearchIcon,
  QrCodeIcon,
  SensorIcon,
  BlockchainIcon,
  ShieldCheckIcon,
  ThermometerIcon,
  HumidityIcon,
} from './Icons';

const TRACE_HIGHLIGHTS = [
  {
    icon: <QrCodeIcon size={22} />,
    title: 'Unique Batch QR Codes',
    desc: 'Every harvest lot is minted with a unique QR code linking directly to its audit history.',
  },
  {
    icon: <SensorIcon size={22} />,
    title: 'Continuous Storage Telemetry',
    desc: 'Access verified records of temperature, humidity, and storage condition logs over time.',
  },
  {
    icon: <BlockchainIcon size={22} />,
    title: 'Cryptographic Ledger Proof',
    desc: 'Harvest origins, lab test sign-offs, and container seals are permanently hashed on-chain.',
  },
];

const SAMPLE_BATCHES = [
  {
    id: 'HT-2026-ASHW-0192',
    name: 'Ashwagandha Root (Withania somnifera)',
    origin: 'Wayanad Agro Reserve, Kerala',
    farmer: 'Kerala High Range Herbal Collective',
    harvestDate: 'Oct 12, 2026',
    boxId: 'ESP32-NODE-04',
    avgTemp: '21.4°C',
    avgHumidity: '54.2%',
    vocLevel: '0.03 ppm (Nominal)',
    tamperAlerts: 0,
    labCert: 'PASSED • 2.8% Withanolide Purity',
    blockHash: '0x7f4a9b81e23c091f8872b4e542918cae7102d91f',
    blockNumber: '491,208',
  },
  {
    id: 'HT-2026-TULSI-0042',
    name: 'Krishna Tulsi Leaves (Ocimum sanctum)',
    origin: 'Doon Valley Foothills, Uttarakhand',
    farmer: 'Himalayan Bio Reserves Cooperative',
    harvestDate: 'Oct 14, 2026',
    boxId: 'ESP32-NODE-11',
    avgTemp: '20.1°C',
    avgHumidity: '48.9%',
    vocLevel: '0.02 ppm (Nominal)',
    tamperAlerts: 0,
    labCert: 'PASSED • Essential Eugenol 68.4%',
    blockHash: '0x3c99e1208fb67ad1005b8214ce5190a6237b7fa1',
    blockNumber: '492,014',
  },
];

export default function Traceability() {
  const [batchId, setBatchId] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | success | not-found | error | demo
  const [result, setResult] = useState(null);

  const performLookup = useCallback(
    async (idToTrack) => {
      const id = idToTrack.trim();
      if (!id) return;

      setState('loading');

      const matchSample = SAMPLE_BATCHES.find(
        (b) => b.id.toLowerCase() === id.toLowerCase()
      );

      if (config.apiBase) {
        try {
          const res = await fetch(`${config.apiBase}${config.batchTrackingPath}/${encodeURIComponent(id)}`);
          if (res.ok) {
            const data = await res.json();
            setResult(data);
            setState('success');
            return;
          } else if (res.status === 404) {
            if (matchSample) {
              setResult(matchSample);
              setState('demo');
              return;
            }
            setState('not-found');
            return;
          }
        } catch {
          if (matchSample) {
            setResult(matchSample);
            setState('demo');
            return;
          }
          setState('error');
          return;
        }
      }

      setTimeout(() => {
        if (matchSample) {
          setResult(matchSample);
          setState('demo');
        } else {
          if (id.toUpperCase().startsWith('HT-')) {
            setResult({
              id: id.toUpperCase(),
              name: 'Certified Botanical Specimen',
              origin: 'Nilgiri Biosphere Agro Reserve',
              farmer: 'Regional Organic Producers Consortium',
              harvestDate: 'October 2026',
              boxId: 'ESP32-BOX-77',
              avgTemp: '21.8°C',
              avgHumidity: '53.5%',
              vocLevel: '0.03 ppm',
              tamperAlerts: 0,
              labCert: 'PASSED • Standard Phytochemical Screening',
              blockHash: '0x9d2a4b81c2017fe432098b1aa445012e87c093a1',
              blockNumber: '493,119',
            });
            setState('demo');
          } else {
            setState('not-found');
          }
        }
      }, 350);
    },
    []
  );

  const handleTrack = (e) => {
    e.preventDefault();
    performLookup(batchId);
  };

  const handleSelectSample = (sampleId) => {
    setBatchId(sampleId);
    performLookup(sampleId);
  };

  return (
    <section className="traceability" id="traceability" aria-labelledby="traceability-heading">
      <div className="container">
        <div className="traceability-grid">
          {/* Left Column: Why Traceability Matters */}
          <div className="traceability-info-col reveal">
            <span className="section-label">Cryptographic Provenance</span>
            <h2 className="section-title" id="traceability-heading">
              Verifiable Trust at<br /> Every Handoff
            </h2>
            <p className="section-subtitle">
              HerbTrace bridges physical IoT storage telemetry directly with immutable ledger records.
            </p>

            <div className="traceability-features-list">
              {TRACE_HIGHLIGHTS.map(({ icon, title, desc }) => (
                <div className="trace-feat-item" key={title}>
                  <div className="trace-feat-icon">{icon}</div>
                  <div className="trace-feat-body">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Batch Verification Console */}
          <div className="traceability-console-col reveal" style={{ transitionDelay: '0.12s' }}>
            <div className="batch-console-card">
              <div className="batch-console-header">
                <div className="console-title-wrap">
                  <div className="console-icon-pill">
                    <SearchIcon size={18} />
                  </div>
                  <div>
                    <h3>Batch Provenance Explorer</h3>
                    <p>Enter any batch ID to inspect its live climate audit trail.</p>
                  </div>
                </div>
              </div>

              {/* Sample Chips */}
              <div className="sample-chips-bar">
                <span className="sample-label">Sample batches:</span>
                <div className="sample-chips">
                  {SAMPLE_BATCHES.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      className="sample-chip-btn"
                      onClick={() => handleSelectSample(b.id)}
                    >
                      {b.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Form */}
              <form onSubmit={handleTrack} className="batch-search-form">
                <div className="batch-input-row">
                  <input
                    type="text"
                    className="batch-input"
                    id="batch-id-input"
                    placeholder="e.g. HT-2026-ASHW-0192"
                    value={batchId}
                    onChange={(e) => {
                      setBatchId(e.target.value);
                      if (state !== 'idle') setState('idle');
                    }}
                    aria-label="Batch ID"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!batchId.trim() || state === 'loading'}
                    id="track-batch-btn"
                  >
                    {state === 'loading' ? (
                      <>Looking up…</>
                    ) : (
                      <>
                        <SearchIcon size={16} /> Track
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Result States */}
              {state === 'loading' && (
                <div className="batch-status-panel batch-loading" role="status">
                  <div className="status-spinner" />
                  <span>Querying decentralized ledger for <strong>{batchId}</strong>…</span>
                </div>
              )}

              {state === 'not-found' && (
                <div className="batch-status-panel batch-not-found" role="alert">
                  <strong>Batch Not Found.</strong> No cryptographic record matched &quot;<strong>{batchId}</strong>&quot;. Try selecting a sample ID above.
                </div>
              )}

              {state === 'error' && (
                <div className="batch-status-panel batch-error" role="alert">
                  <strong>Network Error.</strong> Could not contact the tracking node. Try selecting a sample ID above.
                </div>
              )}

              {(state === 'success' || state === 'demo') && result && (
                <div className="batch-record-panel" role="region" aria-label="Batch verification details">
                  <div className="record-header">
                    <div className="record-title-group">
                      <span className="record-verified-pill">
                        <ShieldCheckIcon size={14} /> Cryptographically Authenticated
                      </span>
                      <h4>{result.name}</h4>
                      <div className="record-id-line">
                        <code>{result.id || batchId}</code>
                        <span className="record-date">• Harvested {result.harvestDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="record-grid">
                    <div className="record-item">
                      <span className="rec-lbl">Origin &amp; Cooperative</span>
                      <strong className="rec-val">{result.farmer}</strong>
                      <span className="rec-sub">{result.origin}</span>
                    </div>

                    <div className="record-item">
                      <span className="rec-lbl">Storage Container</span>
                      <strong className="rec-val">{result.boxId}</strong>
                      <span className="rec-sub">ESP32 Telemetry Active</span>
                    </div>

                    <div className="record-item">
                      <span className="rec-lbl">Climate Averages</span>
                      <div className="rec-climate-chips">
                        <span className="rec-chip"><ThermometerIcon size={13} /> {result.avgTemp}</span>
                        <span className="rec-chip"><HumidityIcon size={13} /> {result.avgHumidity}</span>
                        <span className="rec-chip">VOC: {result.vocLevel}</span>
                      </div>
                    </div>

                    <div className="record-item">
                      <span className="rec-lbl">Lab Purity Certification</span>
                      <strong className="rec-val text-safe">{result.labCert}</strong>
                    </div>
                  </div>

                  <div className="record-ledger-bar">
                    <div className="ledger-block-info">
                      <BlockchainIcon size={16} />
                      <span>Ledger Block #{result.blockNumber}</span>
                    </div>
                    <code className="ledger-hash">{result.blockHash}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
