import { useState } from 'react';
import PortalHeader from './PortalHeader';
import { INITIAL_LAB_SAMPLES } from '../../mock/labData';
import {
  FlaskIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  BlockchainIcon,
  SearchIcon,
  ArrowRight,
  BoxIcon,
} from '../Icons';

export default function LabPortal({ onNavigate }) {
  const [samples, setSamples] = useState(INITIAL_LAB_SAMPLES);
  const [filterStatus, setFilterStatus] = useState('all');
  const [testFormSample, setTestFormSample] = useState(null);
  const [reviewSample, setReviewSample] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Test form state
  const [formData, setFormData] = useState({
    potency: '',
    moisture: '',
    heavyMetals: 'pass',
    microbial: 'pass',
    foreignMatter: '',
    analyst: 'Dr. Neha Sharma, Senior Pharmacognosist',
    notes: 'Botanical specimen complies with standard pharmacopeial purity guidelines.',
  });

  const handleOpenTestForm = (sample) => {
    setTestFormSample(sample);
    if (sample.results) {
      setFormData({
        potency: sample.results.potency || '',
        moisture: sample.results.moisture || '',
        heavyMetals: sample.results.heavyMetals || 'pass',
        microbial: sample.results.microbial || 'pass',
        foreignMatter: sample.results.foreignMatter || '',
        analyst: sample.results.analyst || 'Dr. Neha Sharma, Senior Pharmacognosist',
        notes: sample.results.notes || '',
      });
    } else {
      setFormData({
        potency: '2.95',
        moisture: '7.2',
        heavyMetals: 'pass',
        microbial: 'pass',
        foreignMatter: '0.3',
        analyst: 'Dr. Neha Sharma, Senior Pharmacognosist',
        notes: 'High performance liquid chromatography confirms target active compound integrity.',
      });
    }
  };

  const handleSaveTestResults = (e) => {
    e.preventDefault();
    if (!testFormSample) return;

    const certNum = `COA-2026-${Math.floor(1000 + Math.random() * 9000)}-AYUSH`;
    const updatedResults = {
      potency: parseFloat(formData.potency) || 2.8,
      moisture: parseFloat(formData.moisture) || 7.2,
      heavyMetals: formData.heavyMetals,
      microbial: formData.microbial,
      foreignMatter: parseFloat(formData.foreignMatter) || 0.2,
      analyst: formData.analyst,
      testDate: 'Oct 18, 2026',
      notes: formData.notes,
      certificateNumber: testFormSample.results?.certificateNumber || certNum,
      issuedDate: 'Oct 18, 2026 • 15:45 IST',
    };

    setSamples((prev) =>
      prev.map((s) =>
        s.sampleId === testFormSample.sampleId
          ? {
              ...s,
              status: 'certified',
              results: updatedResults,
            }
          : s
      )
    );

    const savedSample = {
      ...testFormSample,
      status: 'certified',
      results: updatedResults,
    };

    setTestFormSample(null);
    setReviewSample(savedSample);
    setToastMessage(`Test results saved and Certificate of Analysis generated for sample ${testFormSample.sampleId}!`);
    setTimeout(() => setToastMessage(''), 5000);
  };

  const filteredSamples = samples.filter((s) => {
    if (filterStatus === 'all') return true;
    return s.status === filterStatus;
  });

  return (
    <div className="portal-page lab-portal-view">
      <PortalHeader activePortal="lab" onNavigate={onNavigate} />

      <main className="container portal-content-area">
        {/* Header */}
        <div className="portal-hero-strip">
          <div className="portal-hero-title-wrap">
            <span className="portal-section-tag">
              <FlaskIcon size={16} /> Quality Testing Laboratory Portal
            </span>
            <h1>Botanical Assay &amp; Certification</h1>
            <p className="portal-hero-desc">
              Record analytical test measurements, evaluate phytochemical potency against pharmacopeia standards,
              and mint tamper resistant Certificates of Analysis.
            </p>
          </div>
        </div>

        {toastMessage && (
          <div className="portal-toast-message" role="status">
            <CheckCircleIcon size={18} /> {toastMessage}
          </div>
        )}

        {/* Overview Status KPI Cards */}
        <section className="portal-kpi-grid" aria-label="Laboratory Workload Overview">
          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">Samples In Queue</span>
              <span className="kpi-icon"><FlaskIcon size={20} /></span>
            </div>
            <div className="kpi-value">{samples.length}</div>
            <span className="kpi-subtext">Registered Intake Lots</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">Pending Analysis</span>
              <span className="kpi-icon text-warning"><FlaskIcon size={20} /></span>
            </div>
            <div className="kpi-value text-warning">
              {samples.filter((s) => s.status === 'pending').length}
            </div>
            <span className="kpi-subtext">Awaiting Assay</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">In Testing</span>
              <span className="kpi-icon"><FlaskIcon size={20} /></span>
            </div>
            <div className="kpi-value">
              {samples.filter((s) => s.status === 'in_progress').length}
            </div>
            <span className="kpi-subtext">Chromatography Active</span>
          </div>

          <div className="kpi-card">
            <div className="kpi-head">
              <span className="kpi-label">Certified Batches</span>
              <span className="kpi-icon text-safe"><ShieldCheckIcon size={20} /></span>
            </div>
            <div className="kpi-value text-safe">
              {samples.filter((s) => s.status === 'certified').length}
            </div>
            <span className="kpi-subtext">COA Published to Ledger</span>
          </div>
        </section>

        {/* Filter Tabs & Samples Table */}
        <section className="portal-section-block">
          <div className="section-head-row">
            <div>
              <h2>Batch Quality Samples</h2>
              <p className="section-head-desc">
                Select any sample to record laboratory test results or review issued certificates.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="portal-filter-tabs">
              {[
                { key: 'all', label: 'All Samples' },
                { key: 'pending', label: 'Pending' },
                { key: 'in_progress', label: 'In Testing' },
                { key: 'certified', label: 'Certified' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  id={`filter-tab-${key}`}
                  type="button"
                  className={`filter-tab-btn${filterStatus === key ? ' active' : ''}`}
                  onClick={() => setFilterStatus(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="lab-samples-grid">
            {filteredSamples.map((sample) => (
              <div className={`lab-sample-card status-${sample.status}`} key={sample.sampleId}>
                <div className="sample-card-head">
                  <div>
                    <span className="sample-id-code">{sample.sampleId}</span>
                    <h3 className="sample-title">{sample.herbName}</h3>
                    <span className="sample-botanical">{sample.botanicalName}</span>
                  </div>
                  <span className={`status-pill ${sample.status}`}>
                    {sample.status === 'pending' && 'Pending Intake'}
                    {sample.status === 'in_progress' && 'In Progress'}
                    {sample.status === 'certified' && 'Certified Pass'}
                  </span>
                </div>

                <div className="sample-details-list">
                  <div className="s-detail-row">
                    <span className="s-lbl">Origin Harvest Batch</span>
                    <code>{sample.batchId}</code>
                  </div>
                  <div className="s-detail-row">
                    <span className="s-lbl">Producer / Sender</span>
                    <span>{sample.sender}</span>
                  </div>
                  <div className="s-detail-row">
                    <span className="s-lbl">Target Active Compound</span>
                    <strong>{sample.targetCompound}</strong>
                  </div>
                  <div className="s-detail-row">
                    <span className="s-lbl">Compendial Standard</span>
                    <span className="s-val text-safe">{sample.targetStandard}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="sample-card-actions">
                  <button
                    type="button"
                    id={`enter-results-btn-${sample.sampleId.toLowerCase()}`}
                    className="btn btn-primary btn-sm"
                    onClick={() => handleOpenTestForm(sample)}
                  >
                    {sample.results ? 'Edit Test Results' : 'Enter Test Results'}
                  </button>
                  {sample.results && (
                    <button
                      type="button"
                      id={`review-coa-btn-${sample.sampleId.toLowerCase()}`}
                      className="btn btn-outline btn-sm"
                      onClick={() => setReviewSample(sample)}
                    >
                      Review Quality Report (COA)
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Form to Enter Laboratory Test Results Modal */}
      {testFormSample && (
        <div className="portal-modal-backdrop" onClick={() => setTestFormSample(null)} role="dialog" aria-modal="true">
          <div className="portal-modal-card modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="sample-id-code">{testFormSample.sampleId}</span>
                <h3>Enter Laboratory Test Results</h3>
                <span className="box-botanical">{testFormSample.herbName} ({testFormSample.botanicalName}) • Batch {testFormSample.batchId}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setTestFormSample(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveTestResults} className="lab-test-form">
              <div className="form-fields-grid">
                <div className="form-group">
                  <label htmlFor="potency-input">Active Compound Potency (% dry wt)</label>
                  <input
                    type="number"
                    step="0.01"
                    id="potency-input"
                    className="portal-form-control"
                    placeholder="e.g. 2.85"
                    value={formData.potency}
                    onChange={(e) => setFormData({ ...formData, potency: e.target.value })}
                    required
                  />
                  <small className="form-hint">Standard: {testFormSample.targetStandard}</small>
                </div>

                <div className="form-group">
                  <label htmlFor="moisture-input">Moisture Content (% loss on drying)</label>
                  <input
                    type="number"
                    step="0.1"
                    id="moisture-input"
                    className="portal-form-control"
                    placeholder="e.g. 7.4"
                    value={formData.moisture}
                    onChange={(e) => setFormData({ ...formData, moisture: e.target.value })}
                    required
                  />
                  <small className="form-hint">Permissible: {testFormSample.moistureStandard}</small>
                </div>

                <div className="form-group">
                  <label htmlFor="heavy-metals-select">Heavy Metals Screening</label>
                  <select
                    id="heavy-metals-select"
                    className="portal-form-control"
                    value={formData.heavyMetals}
                    onChange={(e) => setFormData({ ...formData, heavyMetals: e.target.value })}
                  >
                    <option value="pass">PASS (Within WHO/Ayush Limits)</option>
                    <option value="fail">FAIL (Lead/Cadmium Exceeds Limits)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="microbial-select">Microbial Pathogen Screen</label>
                  <select
                    id="microbial-select"
                    className="portal-form-control"
                    value={formData.microbial}
                    onChange={(e) => setFormData({ ...formData, microbial: e.target.value })}
                  >
                    <option value="pass">PASS (Zero E. coli / Salmonella)</option>
                    <option value="fail">FAIL (Contamination Detected)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="foreign-input">Foreign Organic Matter (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    id="foreign-input"
                    className="portal-form-control"
                    placeholder="e.g. 0.2"
                    value={formData.foreignMatter}
                    onChange={(e) => setFormData({ ...formData, foreignMatter: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="analyst-input">Certified Analytical Chemist</label>
                  <input
                    type="text"
                    id="analyst-input"
                    className="portal-form-control"
                    value={formData.analyst}
                    onChange={(e) => setFormData({ ...formData, analyst: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group form-full">
                  <label htmlFor="notes-input">Analytical Observations &amp; Conformance Notes</label>
                  <textarea
                    id="notes-input"
                    rows="3"
                    className="portal-form-control"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" id="save-lab-test-btn" className="btn btn-primary">
                  Save Demo Results &amp; Generate Certificate
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setTestFormSample(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quality Report (Certificate of Analysis) Review Modal */}
      {reviewSample && reviewSample.results && (
        <div className="portal-modal-backdrop" onClick={() => setReviewSample(null)} role="dialog" aria-modal="true">
          <div className="portal-modal-card modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="cert-top-pill">OFFICIAL CERTIFICATE OF ANALYSIS</span>
                <h3>Quality Assay Report: {reviewSample.herbName}</h3>
                <span className="box-botanical">Certificate #{reviewSample.results.certificateNumber}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setReviewSample(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="coa-document-view">
              <div className="coa-watermark-stamp">
                <ShieldCheckIcon size={48} />
                <span>CERTIFIED AUTHENTIC</span>
              </div>

              <div className="coa-meta-grid">
                <div>
                  <span className="coa-lbl">Sample Identifier:</span>
                  <strong>{reviewSample.sampleId}</strong>
                </div>
                <div>
                  <span className="coa-lbl">Batch Traceability Code:</span>
                  <code>{reviewSample.batchId}</code>
                </div>
                <div>
                  <span className="coa-lbl">Testing Facility:</span>
                  <span>National Analytical Phytochemical Laboratory</span>
                </div>
                <div>
                  <span className="coa-lbl">Date of Certification:</span>
                  <span>{reviewSample.results.issuedDate || reviewSample.results.testDate}</span>
                </div>
              </div>

              <table className="coa-results-table">
                <thead>
                  <tr>
                    <th>Test Parameter</th>
                    <th>Analytical Method</th>
                    <th>Observed Result</th>
                    <th>Standard Specification</th>
                    <th>Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Active Compound Potency</strong></td>
                    <td>HPLC UV Vis</td>
                    <td><strong>{reviewSample.results.potency}%</strong></td>
                    <td>{reviewSample.targetStandard}</td>
                    <td><span className="coa-badge pass">PASS</span></td>
                  </tr>
                  <tr>
                    <td><strong>Moisture Content</strong></td>
                    <td>Loss on Drying</td>
                    <td><strong>{reviewSample.results.moisture}%</strong></td>
                    <td>{reviewSample.moistureStandard}</td>
                    <td><span className="coa-badge pass">PASS</span></td>
                  </tr>
                  <tr>
                    <td><strong>Heavy Metals (Pb, Cd, As, Hg)</strong></td>
                    <td>ICP-MS</td>
                    <td>&lt; 0.05 ppm</td>
                    <td>Pharmacopeia Limits</td>
                    <td><span className="coa-badge pass">{reviewSample.results.heavyMetals.toUpperCase()}</span></td>
                  </tr>
                  <tr>
                    <td><strong>Microbial Pathogens</strong></td>
                    <td>Colony Plating</td>
                    <td>Zero Count</td>
                    <td>Pathogen Free</td>
                    <td><span className="coa-badge pass">{reviewSample.results.microbial.toUpperCase()}</span></td>
                  </tr>
                  <tr>
                    <td><strong>Foreign Organic Matter</strong></td>
                    <td>Microscopy</td>
                    <td>{reviewSample.results.foreignMatter}%</td>
                    <td>&lt; 1.0%</td>
                    <td><span className="coa-badge pass">PASS</span></td>
                  </tr>
                </tbody>
              </table>

              <div className="coa-notes-box">
                <strong>Analyst Conformance Summary:</strong>
                <p>{reviewSample.results.notes}</p>
                <span className="coa-signoff">Verified &amp; Digitally Signed by {reviewSample.results.analyst}</span>
              </div>

              <div className="coa-blockchain-anchor">
                <BlockchainIcon size={18} />
                <span>Cryptographic Digest anchored into HerbTrace immutable quality ledger: <code>0x4b9a8201fe...992c</code></span>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                id="done-reviewing-coa-btn"
                className="btn btn-primary"
                onClick={() => setReviewSample(null)}
              >
                Done Reviewing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
