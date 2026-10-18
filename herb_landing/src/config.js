/**
 * HerbTrace Landing Page Centralized Configuration
 *
 * All external URLs, API endpoints, and portal links are defined here.
 * Set environment variables or update these values when deploying
 * each separate React application.
 */

const config = {
  /**
   * Portal URLs
   * Each portal is a separate React application.
   * Configure through Vite environment variables or direct paths below:
   * - VITE_FARMER_PORTAL_URL (default: /farmer)
   * - VITE_CONSUMER_PORTAL_URL (default: /consumer)
   * - VITE_LAB_PORTAL_URL (default: /lab)
   */
  portals: {
    farmer: {
      url: import.meta.env?.VITE_FARMER_PORTAL_URL || '/farmer',
      label: 'Farmer Portal',
      purpose:
        'Monitors smart storage boxes, sensor readings, environmental conditions, alerts, and corrective actions.',
      features: [
        'Smart storage box climate monitoring',
        'Real time temperature and humidity alerts',
        'Harvest batch registration and corrective actions',
      ],
    },
    consumer: {
      url: import.meta.env?.VITE_CONSUMER_PORTAL_URL || '/consumer',
      label: 'Consumer Portal',
      purpose:
        'Provides batch lookup, QR based traceability, and access to available product origin and batch history information.',
      features: [
        'Instant QR code package verification',
        'Complete climate storage history timeline',
        'Verified farm origin and harvest details',
      ],
    },
    lab: {
      url: import.meta.env?.VITE_LAB_PORTAL_URL || '/lab',
      label: 'Lab Tester Portal',
      purpose:
        'Supports laboratory testing workflows and recording or reviewing test results for herbal quality.',
      features: [
        'Sample intake and botanical identification',
        'Phytochemical potency and purity assay records',
        'Digital quality test sign off and verification',
      ],
    },
  },


  /**
   * Backend API
   * Spring Boot backend base URL.
   * Batch tracking endpoint: GET {apiBase}/batches/{batchId}
   */
  apiBase: import.meta.env?.VITE_API_BASE_URL || '',

  /** Batch tracking endpoint path (appended to apiBase) */
  batchTrackingPath: '/api/batches',

  /** Project Information */
  projectName: 'HerbTrace',
  tagline:
    'Smart IoT storage monitoring and blockchain enabled traceability for medicinal herbs.',
};

export default config;

