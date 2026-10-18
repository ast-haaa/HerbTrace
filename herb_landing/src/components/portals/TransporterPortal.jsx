import { useState } from 'react';
import PortalHeader from './PortalHeader';
import { INITIAL_SHIPMENTS } from '../../mock/transporterData';
import {
  MapPinIcon,
  ThermometerIcon,
  BellAlertIcon,
  CheckCircleIcon,
  RadioIcon,
  BoxIcon,
  ArrowRight,
  ShieldCheckIcon,
} from '../Icons';

export default function TransporterPortal({ onNavigate }) {
  const [shipments, setShipments] = useState(INITIAL_SHIPMENTS);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [statusUpdateShipment, setStatusUpdateShipment] = useState(null);
  const [newStatus, setNewStatus] = useState('in_transit');
  const [statusFeedback, setStatusFeedback] = useState('');

  const totalCount = shipments.length;
  const inTransitCount = shipments.filter((s) => s.status === 'in_transit').length;
  const delayedCount = shipments.filter((s) => s.status === 'delayed').length;
  const deliveredCount = shipments.filter((s) => s.status === 'delivered').length;

  const handleOpenStatusModal = (shipment) => {
    setStatusUpdateShipment(shipment);
    setNewStatus(shipment.status);
  };

  const handleSaveStatusUpdate = (e) => {
    e.preventDefault();
    if (!statusUpdateShipment) return;

    setShipments((prev) =>
      prev.map((s) =>
        s.id === statusUpdateShipment.id
          ? {
              ...s,
              status: newStatus,
              eta: newStatus === 'delivered' ? 'Delivered successfully just now' : s.eta,
              currentLocation:
                newStatus === 'delivered'
                  ? `Delivered at ${s.destination}`
                  : s.currentLocation,
            }
          : s
      )
    );

    setStatusFeedback(`Shipment ${statusUpdateShipment.id} status updated to "${newStatus.replace('_', ' ')}"!`);
    setStatusUpdateShipment(null);
    setTimeout(() => setStatusFeedback(''), 4000);
  };

  return (
    <div className="portal-page transporter-portal-view">
      <PortalHeader activePortal="transporter" onNavigate={onNavigate} />

      <main className="container portal-content-area">
        {/* Header */}
        <div className="portal-hero-strip">
          <div className="portal-hero-title-wrap">
            <span className="portal-section-tag">
              <MapPinIcon size={16} /> Cold Chain Logistics &amp; Transport Hub
            </span>
            <h1>Refrigerated Transit Management</h1>
            <p className="portal-hero-desc">
              Track live shipment telemetry, monitor reefer storage containers, respond to highway delay warnings,
              and confirm delivery milestones.
            </p>
          </div>
        </div>

        {statusFeedback && (
          <div className="portal-toast-message" role="status">
            <CheckCircleIcon size={18} /> {statusFeedback}
          </div>
        )}

        {/* Overview Status KPI Cards */}
        <section className="portal-kpi-grid" aria-label="Shipment Overview">
          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">Active Shipments</span>
              <span className="kpi-icon"><BoxIcon size={20} /></span>
            </div>
            <div className="kpi-value">{totalCount}</div>
            <span className="kpi-subtext">Monitored Reefer Units</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">In Transit</span>
              <span className="kpi-icon text-safe"><RadioIcon size={20} /></span>
            </div>
            <div className="kpi-value text-safe">{inTransitCount}</div>
            <span className="kpi-subtext">On Schedule</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">Highway Delays</span>
              <span className="kpi-icon text-warning"><BellAlertIcon size={20} /></span>
            </div>
            <div className="kpi-value text-warning">{delayedCount}</div>
            <span className="kpi-subtext">Active Route Alerts</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">Completed Deliveries</span>
              <span className="kpi-icon text-safe"><CheckCircleIcon size={20} /></span>
            </div>
            <div className="kpi-value">{deliveredCount}</div>
            <span className="kpi-subtext">All Quality Seals Intact</span>
          </div>
        </section>

        {/* Shipment Cards Grid */}
        <section className="portal-section-block">
          <div className="section-head-row">
            <div>
              <h2>Fleet Shipments Overview</h2>
              <p className="section-head-desc">
                Current active consignments equipped with live ESP32 GPS and temperature telemetry.
              </p>
            </div>
          </div>

          <div className="transporter-cards-grid">
            {shipments.map((shp) => (
              <div className={`transporter-card status-${shp.status}`} key={shp.id}>
                <div className="transporter-card-top">
                  <div>
                    <span className="shp-id-tag">{shp.id}</span>
                    <h3 className="shp-herb-title">{shp.herbName}</h3>
                    <span className="shp-batch-code">Batch: {shp.batchId}</span>
                  </div>
                  <span className={`status-pill ${shp.status}`}>
                    {shp.status === 'in_transit' && 'In Transit'}
                    {shp.status === 'delayed' && 'Delayed'}
                    {shp.status === 'delivered' && 'Delivered'}
                  </span>
                </div>

                {/* Route Header */}
                <div className="shp-route-box">
                  <div className="route-point">
                    <span className="point-dot origin" />
                    <div>
                      <span className="route-lbl">Origin</span>
                      <strong>{shp.origin}</strong>
                    </div>
                  </div>
                  <div className="route-connector-line" />
                  <div className="route-point">
                    <span className="point-dot dest" />
                    <div>
                      <span className="route-lbl">Destination</span>
                      <strong>{shp.destination}</strong>
                    </div>
                  </div>
                </div>

                {/* Logistics Telemetry Specs */}
                <div className="shp-specs-grid">
                  <div className="shp-spec-item">
                    <span className="spec-lbl">Current Location</span>
                    <strong className="spec-val"><MapPinIcon size={14} /> {shp.currentLocation}</strong>
                  </div>

                  <div className="shp-spec-item">
                    <span className="spec-lbl">Estimated Arrival</span>
                    <strong className="spec-val text-safe">{shp.eta}</strong>
                  </div>

                  <div className="shp-spec-item">
                    <span className="spec-lbl">Reefer Chamber Temp</span>
                    <strong className={`spec-val ${shp.reeferStatus === 'warning' ? 'text-warning' : 'text-safe'}`}>
                      <ThermometerIcon size={14} /> {shp.reeferTemp} ({shp.reeferTempRange})
                    </strong>
                  </div>

                  <div className="shp-spec-item">
                    <span className="spec-lbl">Carrier &amp; Driver</span>
                    <span className="spec-val">{shp.carrier} • {shp.driverName}</span>
                  </div>
                </div>

                {/* Active Alerts Strip if present */}
                {shp.alerts.length > 0 && (
                  <div className="shp-alerts-strip">
                    <BellAlertIcon size={16} />
                    <span><strong>{shp.alerts[0].title}:</strong> {shp.alerts[0].description}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="transporter-card-actions">
                  <button
                    type="button"
                    id={`view-route-${shp.id.toLowerCase()}`}
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedShipment(shp)}
                  >
                    View Shipment Route &amp; Details
                  </button>
                  <button
                    type="button"
                    id={`update-status-btn-${shp.id.toLowerCase()}`}
                    className="btn btn-primary btn-sm"
                    onClick={() => handleOpenStatusModal(shp)}
                  >
                    Update Demo Status
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Shipment Route Details Modal */}
      {selectedShipment && (
        <div className="portal-modal-backdrop" onClick={() => setSelectedShipment(null)} role="dialog" aria-modal="true">
          <div className="portal-modal-card modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="shp-id-tag">{selectedShipment.id}</span>
                <h3>{selectedShipment.herbName} Route Details</h3>
                <span className="box-botanical">Vehicle: {selectedShipment.vehicleNo} • Driver: {selectedShipment.driverName} ({selectedShipment.driverPhone})</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedShipment(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="modal-content-scroll">
              {/* Route Summary */}
              <div className="modal-route-banner">
                <div>
                  <span className="m-lbl">Current Location</span>
                  <h4>{selectedShipment.currentLocation}</h4>
                  <span className="m-sub">Coordinates: {selectedShipment.coordinates}</span>
                </div>
                <div>
                  <span className="m-lbl">Estimated Delivery</span>
                  <h4 className="text-safe">{selectedShipment.eta}</h4>
                  <span className="m-sub">Remaining Distance: {selectedShipment.distanceRemaining}</span>
                </div>
              </div>

              {/* Milestones Stepper */}
              <div className="milestones-stepper">
                <h4>Consignment Route Checkpoints</h4>
                <div className="stepper-list">
                  {selectedShipment.timeline.map((step, i) => (
                    <div className={`stepper-item ${step.status}`} key={step.checkpoint}>
                      <div className="stepper-icon">
                        {step.status === 'completed' ? <CheckCircleIcon size={16} /> : <span>{i + 1}</span>}
                      </div>
                      <div className="stepper-content">
                        <strong>{step.checkpoint}</strong>
                        <span>{step.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Climate Log & Alerts */}
              {selectedShipment.alerts.length > 0 && (
                <div className="modal-alerts-section">
                  <h4>Recorded Transit Alerts</h4>
                  {selectedShipment.alerts.map((alt) => (
                    <div className="modal-alert-box" key={alt.id}>
                      <span className="alert-badge text-warning">{alt.type.replace('_', ' ').toUpperCase()}</span>
                      <p><strong>{alt.title}:</strong> {alt.description}</p>
                      <span className="m-sub">Status: {alt.status} • {alt.timestamp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleOpenStatusModal(selectedShipment);
                  setSelectedShipment(null);
                }}
              >
                Update Demo Status
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setSelectedShipment(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Shipment Status Modal */}
      {statusUpdateShipment && (
        <div className="portal-modal-backdrop" onClick={() => setStatusUpdateShipment(null)} role="dialog" aria-modal="true">
          <div className="portal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="shp-id-tag">{statusUpdateShipment.id}</span>
                <h3>Update Demo Shipment Status</h3>
                <span className="box-botanical">{statusUpdateShipment.herbName}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setStatusUpdateShipment(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveStatusUpdate}>
              <div className="status-form-body">
                <p>Select a new simulated status for this demo consignment:</p>
                <div className="status-radio-group">
                  <label className={`status-radio-label${newStatus === 'in_transit' ? ' selected' : ''}`}>
                    <input
                      type="radio"
                      name="shipmentStatus"
                      value="in_transit"
                      checked={newStatus === 'in_transit'}
                      onChange={(e) => setNewStatus(e.target.value)}
                    />
                    <div>
                      <strong>In Transit</strong>
                      <span>Reefer unit operating normally on highway corridor</span>
                    </div>
                  </label>

                  <label className={`status-radio-label${newStatus === 'delayed' ? ' selected' : ''}`}>
                    <input
                      type="radio"
                      name="shipmentStatus"
                      value="delayed"
                      checked={newStatus === 'delayed'}
                      onChange={(e) => setNewStatus(e.target.value)}
                    />
                    <div>
                      <strong>Delayed</strong>
                      <span>Flag highway congestion or scheduled cooling inspection</span>
                    </div>
                  </label>

                  <label className={`status-radio-label${newStatus === 'delivered' ? ' selected' : ''}`}>
                    <input
                      type="radio"
                      name="shipmentStatus"
                      value="delivered"
                      checked={newStatus === 'delivered'}
                      onChange={(e) => setNewStatus(e.target.value)}
                    />
                    <div>
                      <strong>Delivered</strong>
                      <span>Confirm final handoff at destination pharmaceutical hub</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" id="save-status-update-btn" className="btn btn-primary">
                  Save Demo Status Update
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setStatusUpdateShipment(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
