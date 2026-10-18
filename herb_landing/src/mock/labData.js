/**
 * Mock Data for HerbTrace Lab Tester Portal
 * Simulated samples, assay records, quality reports, and test submission forms.
 */

export const INITIAL_LAB_SAMPLES = [
  {
    sampleId: 'SMP-2026-904',
    batchId: 'HT-2026-ASHW-0192',
    herbName: 'Ashwagandha Root',
    botanicalName: 'Withania somnifera',
    sender: 'Wayanad High Range Herbal Collective',
    dateReceived: 'Oct 14, 2026',
    status: 'pending', // pending | in_progress | certified | flagged
    targetCompound: 'Total Withanolides',
    targetStandard: 'Minimum 2.5% dry weight (USP/Ayush)',
    moistureStandard: 'Maximum 9.0%',
    results: null,
  },
  {
    sampleId: 'SMP-2026-882',
    batchId: 'HT-2026-TULSI-0042',
    herbName: 'Krishna Tulsi Leaves',
    botanicalName: 'Ocimum sanctum',
    sender: 'Himalayan Bio Reserves Cooperative',
    dateReceived: 'Oct 14, 2026',
    status: 'in_progress',
    targetCompound: 'Essential Eugenol Content',
    targetStandard: 'Minimum 60.0% volatile fraction',
    moistureStandard: 'Maximum 8.0%',
    results: {
      potency: 64.2,
      moisture: 7.1,
      heavyMetals: 'pass',
      microbial: 'pass',
      foreignMatter: 0.4,
      analyst: 'Dr. Priya Varma, Senior Pharmacognosist',
      testDate: 'Oct 15, 2026',
      notes: 'Initial GC MS spectrum exhibits high peak purity. Awaiting secondary spectral confirmation.',
    },
  },
  {
    sampleId: 'SMP-2026-771',
    batchId: 'HT-2026-BRHM-0081',
    herbName: 'Brahmi Whole Plant',
    botanicalName: 'Bacopa monnieri',
    sender: 'Alappuzha Wetland Producers',
    dateReceived: 'Oct 12, 2026',
    status: 'certified',
    targetCompound: 'Bacosides A and B',
    targetStandard: 'Minimum 4.0% dry weight',
    moistureStandard: 'Maximum 10.0%',
    results: {
      potency: 4.85,
      moisture: 7.4,
      heavyMetals: 'pass',
      microbial: 'pass',
      foreignMatter: 0.2,
      analyst: 'Dr. K. S. Sundaram, Quality Assurance Director',
      testDate: 'Oct 13, 2026',
      notes: 'Conforms to Indian Pharmacopoeia standard monograph. Zero heavy metal contaminants detected.',
      certificateNumber: 'COA-2026-004812-AYUSH',
      issuedDate: 'Oct 13, 2026 • 16:30 IST',
    },
  },
];
