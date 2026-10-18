import { useState } from 'react';
import PortalHeader from './PortalHeader';
import {
  FARMER_TRANSLATIONS,
  INITIAL_BOXES,
  INITIAL_ALERTS,
  HOURLY_TELEMETRY_SERIES,
} from '../../mock/farmerData';
import {
  ThermometerIcon,
  HumidityIcon,
  MapPinIcon,
  SensorIcon,
  BellAlertIcon,
  BoxIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '../Icons';

export default function FarmerPortal({ onNavigate }) {
  const [lang, setLang] = useState('en');
  const [boxes] = useState(INITIAL_BOXES);
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [selectedBox, setSelectedBox] = useState(null);

  const t = FARMER_TRANSLATIONS[lang] || FARMER_TRANSLATIONS.en;

  const handleAcknowledgeAlert = (id) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, acknowledged: true } : a))
    );
  };

  const unacknowledgedCount = alerts.filter((a) => !a.acknowledged).length;

  return (
    <div className="portal-page farmer-portal-view">
      <PortalHeader activePortal="farmer" onNavigate={onNavigate} />

      <main className="container portal-content-area">
        {/* Top Header with Language Selector */}
        <div className="portal-hero-strip">
          <div className="portal-hero-title-wrap">
            <span className="portal-section-tag">
              <BoxIcon size={16} /> {t.title}
            </span>
            <h1>{t.title}</h1>
            <p className="portal-hero-desc">{t.subtitle}</p>
          </div>

          {/* Language Selector UI */}
          <div className="portal-language-selector" role="region" aria-label="Language Selector">
            <span className="lang-label">Language / भाषा:</span>
            <div className="lang-buttons-group">
              {[
                { code: 'en', label: 'English' },
                { code: 'hi', label: 'हिंदी' },
                { code: 'mr', label: 'मराठी' },
                { code: 'gu', label: 'ગુજરાતી' },
              ].map(({ code, label }) => (
                <button
                  key={code}
                  id={`lang-btn-${code}`}
                  type="button"
                  className={`lang-btn${lang === code ? ' active' : ''}`}
                  onClick={() => setLang(code)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Overview Status KPI Cards */}
        <section className="portal-kpi-grid" aria-label={t.overview}>
          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">{t.temp} (Avg)</span>
              <span className="kpi-icon text-safe"><ThermometerIcon size={20} /></span>
            </div>
            <div className="kpi-value">22.5°C</div>
            <span className="kpi-subtext text-safe">Target: 18 to 24°C • Safe</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">{t.humidity} (Avg)</span>
              <span className="kpi-icon text-safe"><HumidityIcon size={20} /></span>
            </div>
            <div className="kpi-value">59.8%</div>
            <span className="kpi-subtext text-safe">Target: 45 to 65% • Normal</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">{t.boxes}</span>
              <span className="kpi-icon"><BoxIcon size={20} /></span>
            </div>
            <div className="kpi-value">{boxes.length} Online</div>
            <span className="kpi-subtext">ESP32 Mesh Operational</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">{t.alerts}</span>
              <span className="kpi-icon text-warning"><BellAlertIcon size={20} /></span>
            </div>
            <div className="kpi-value">{unacknowledgedCount} Active</div>
            <span className={`kpi-subtext ${unacknowledgedCount > 0 ? 'text-warning' : 'text-safe'}`}>
              {unacknowledgedCount > 0 ? 'Action Required' : 'All Clear'}
            </span>
          </div>
        </section>

        {/* Smart Storage Boxes Status Cards */}
        <section className="portal-section-block">
          <div className="section-head-row">
            <div>
              <h2>{t.boxes}</h2>
              <p className="section-head-desc">
                Real time status of calibrated ESP32 smart storage containers across farm sheds.
              </p>
            </div>
            <span className="live-telemetry-tag">
              <span className="live-dot" /> {t.lastSync}
            </span>
          </div>

          <div className="boxes-cards-grid">
            {boxes.map((box) => (
              <div className={`box-card-item status-${box.status}`} key={box.id}>
                <div className="box-card-top">
                  <div>
                    <span className="box-node-id">{box.id}</span>
                    <h3 className="box-herb-title">{box.herbName}</h3>
                    <span className="box-botanical">{box.botanicalName}</span>
                  </div>
                  <span className={`status-pill ${box.status}`}>
                    {box.status === 'optimal' ? t.optimal : t.warning}
                  </span>
                </div>

                <div className="box-telemetry-row">
                  <div className="telemetry-col">
                    <span className="tel-label"><ThermometerIcon size={14} /> {t.temp}</span>
                    <span className="tel-val">{box.temp}°C</span>
                    <span className="tel-target">{box.tempTarget}</span>
                  </div>
                  <div className="telemetry-col">
                    <span className="tel-label"><HumidityIcon size={14} /> {t.humidity}</span>
                    <span className="tel-val">{box.humidity}%</span>
                    <span className="tel-target">{box.humidityTarget}</span>
                  </div>
                  <div className="telemetry-col">
                    <span className="tel-label"><SensorIcon size={14} /> Battery</span>
                    <span className="tel-val">{box.battery}%</span>
                    <span className="tel-target">LiPo Cell</span>
                  </div>
                </div>

                <div className="box-location-strip">
                  <MapPinIcon size={16} />
                  <span>{box.gps.locationName}</span>
                </div>

                <div className="box-card-actions">
                  <button
                    type="button"
                    id={`view-box-${box.id.toLowerCase()}`}
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedBox(box)}
                  >
                    {t.viewDetails}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical 24h Telemetry Chart */}
        <section className="portal-section-block">
          <div className="section-head-row">
            <div>
              <h2>{t.sensorHistory}</h2>
              <p className="section-head-desc">
                Hourly temperature and relative humidity telemetry recorded from smart storage box sensors.
              </p>
            </div>
            <div className="chart-legend-row">
              <span className="legend-item"><span className="legend-color color-temp" /> Temperature (°C)</span>
              <span className="legend-item"><span className="legend-color color-humidity" /> Humidity (%)</span>
            </div>
          </div>

          <div className="telemetry-chart-container">
            <svg viewBox="0 0 800 240" className="telemetry-svg-chart" aria-label="Hourly climate telemetry line chart">
              {/* Grid Lines */}
              <line x1="50" y1="30" x2="770" y2="30" stroke="#E2EDE6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="80" x2="770" y2="80" stroke="#E2EDE6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="130" x2="770" y2="130" stroke="#E2EDE6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="180" x2="770" y2="180" stroke="#E2EDE6" strokeWidth="1" strokeDasharray="4 4" />

              {/* Threshold Lines */}
              <line x1="50" y1="50" x2="770" y2="50" stroke="#D9822B" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
              <text x="772" y="54" fontSize="10" fill="#D9822B" textAnchor="start">Max Temp (24°C)</text>

              {/* Area Under Humidity Line */}
              <polygon
                points={`50,180 ${HOURLY_TELEMETRY_SERIES.map((d, i) => `${50 + i * 65},${180 - (d.humidity - 40) * 3}`).join(' ')} ${50 + (HOURLY_TELEMETRY_SERIES.length - 1) * 65},180`}
                fill="rgba(46, 184, 114, 0.12)"
              />

              {/* Humidity Line */}
              <polyline
                fill="none"
                stroke="#2EB872"
                strokeWidth="2.5"
                points={HOURLY_TELEMETRY_SERIES.map((d, i) => `${50 + i * 65},${180 - (d.humidity - 40) * 3}`).join(' ')}
              />

              {/* Temperature Line */}
              <polyline
                fill="none"
                stroke="#0A7F4F"
                strokeWidth="3"
                points={HOURLY_TELEMETRY_SERIES.map((d, i) => `${50 + i * 65},${180 - (d.temp - 15) * 10}`).join(' ')}
              />

              {/* Data Points */}
              {HOURLY_TELEMETRY_SERIES.map((d, i) => {
                const x = 50 + i * 65;
                const yTemp = 180 - (d.temp - 15) * 10;
                return (
                  <g key={d.time}>
                    <circle cx={x} cy={yTemp} r="4" fill="#0A7F4F" stroke="#ffffff" strokeWidth="2" />
                    <text x={x} y="205" fontSize="11" fill="#6B8875" textAnchor="middle">{d.time}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        </section>

        {/* Alerts Section (High Temp, Low Humidity, Disconnection, Movement) */}
        <section className="portal-section-block">
          <div className="section-head-row">
            <div>
              <h2>{t.alerts}</h2>
              <p className="section-head-desc">
                Proactive threshold warnings detected by ESP32 sensors. Acknowledge items after applying corrective action.
              </p>
            </div>
            <span className="unack-counter-badge">
              {unacknowledgedCount} Pending Review
            </span>
          </div>

          <div className="alerts-list-wrapper">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`alert-card-row severity-${alert.severity}${alert.acknowledged ? ' is-acknowledged' : ''}`}
              >
                <div className="alert-type-icon-col">
                  <BellAlertIcon size={20} />
                </div>

                <div className="alert-main-content">
                  <div className="alert-title-line">
                    <span className={`alert-severity-tag ${alert.severity}`}>
                      {alert.severity === 'critical' ? t.alert : t.warning}
                    </span>
                    <h4>{alert.title}</h4>
                    <span className="alert-target-box">{alert.boxId}</span>
                    <span className="alert-time-tag">• {alert.timestamp}</span>
                  </div>
                  <p className="alert-message-text">{alert.message}</p>
                </div>

                <div className="alert-action-col">
                  {alert.acknowledged ? (
                    <span className="acknowledged-status-pill">
                      <CheckCircleIcon size={16} /> {t.acknowledged}
                    </span>
                  ) : (
                    <button
                      type="button"
                      id={`ack-alert-${alert.id.toLowerCase()}`}
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAcknowledgeAlert(alert.id)}
                    >
                      {t.acknowledge}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Selected Box Details Modal */}
      {selectedBox && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedBox(null)} role="dialog" aria-modal="true">
          <div className="portal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <span className="box-node-id">{selectedBox.id}</span>
                <h3>{selectedBox.herbName}</h3>
                <span className="box-botanical">{selectedBox.botanicalName}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedBox(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body-grid">
              <div className="modal-info-item">
                <span className="m-lbl">Batch ID</span>
                <strong className="m-val">{selectedBox.batchId}</strong>
              </div>
              <div className="modal-info-item">
                <span className="m-lbl">Batch Weight</span>
                <strong className="m-val">{selectedBox.weight}</strong>
              </div>
              <div className="modal-info-item">
                <span className="m-lbl">Current Temperature</span>
                <strong className="m-val text-safe">{selectedBox.temp}°C</strong>
                <span className="m-sub">Target Band: {selectedBox.tempTarget}</span>
              </div>
              <div className="modal-info-item">
                <span className="m-lbl">Relative Humidity</span>
                <strong className="m-val text-safe">{selectedBox.humidity}%</strong>
                <span className="m-sub">Target Band: {selectedBox.humidityTarget}</span>
              </div>
              <div className="modal-info-item">
                <span className="m-lbl">VOC Spoilage Index</span>
                <strong className="m-val">{selectedBox.vocPpm} ppm (Nominal)</strong>
              </div>
              <div className="modal-info-item">
                <span className="m-lbl">Battery Charge</span>
                <strong className="m-val">{selectedBox.battery}% (LiPo Power)</strong>
              </div>
              <div className="modal-info-item modal-full">
                <span className="m-lbl">GPS Geolocation</span>
                <strong className="m-val">{selectedBox.gps.locationName}</strong>
                <span className="m-sub">Coordinates: {selectedBox.gps.lat}° N, {selectedBox.gps.lng}° E</span>
              </div>
              <div className="modal-info-item modal-full">
                <span className="m-lbl">Firmware &amp; Security Seal</span>
                <strong className="m-val">{selectedBox.sealState}</strong>
                <span className="m-sub">Firmware: {selectedBox.firmware} • Telemetry Stream: MQTT Active</span>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setSelectedBox(null)}
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
