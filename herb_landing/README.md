# HerbTrace Frontend Platform

Smart IoT storage monitoring and blockchain enabled traceability platform for medicinal herbs.

## Implemented Pages and Stakeholder Portals

The HerbTrace frontend architecture consists of the central landing page and four dedicated stakeholder portal interfaces:

1. **Main Landing Page** (`/`):
   - Hero section with live IoT storage preview
   - Post harvest loss problem analysis
   - 4-step IoT and blockchain methodology
   - Technical features and sensor specifications
   - 4-card stakeholder portal navigation hub
   - Interactive batch traceability explorer with mock query support
   - Agricultural and pharmaceutical impact metrics
   - Enterprise technology stack breakdown
   - Comprehensive footer with live system status badge

2. **Farmer Portal** (`/farmer`):
   - Live KPI overview cards (Average Temperature, Humidity, ESP32 Box count, Active Alerts)
   - Calibrated ESP32 storage box status cards with target bands and battery indicators
   - Interactive "View Box Details" modal with geolocation and security seal verification
   - 24-hour historical telemetry chart with temperature/humidity curves
   - Proactive alerts for high temperature, low humidity, sensor disconnection, and unexpected box movement
   - Interactive "Acknowledge Alert" action with real-time badge updates
   - Multilingual interface selector supporting English, Hindi (हिंदी), Marathi (मराठी), and Gujarati (ગુજરાતી)

3. **Consumer Portal** (`/consumer`):
   - Batch ID search input with instant query resolution
   - Quick selector buttons for sample batches
   - Viewfinder packaging QR code scanning simulation with laser beam animation
   - 100% cryptographically verified provenance badge and batch metadata
   - Cultivation origin details with agro-climatic zone and farm GPS coordinates
   - Climate storage history metrics (temperatures, relative humidity, monitored hours, zero tamper breaches)
   - End-to-end supply chain transit timeline with verified milestone checkpoints
   - Transparent climate alert excursion history
   - Certified laboratory purity assay summary with pharmacopeial standards
   - Cryptographic block seal and Merkle root hash

4. **Transporter Portal** (`/transporter`):
   - Cold chain logistics fleet overview cards (Active Shipments, In Transit, Highway Delays, Delivered)
   - Consolidated active consignment cards with vehicle, carrier, and reefer chamber telemetry
   - Visual origin-to-destination route stepper
   - Highway delay notices and temperature alert notifications
   - Consignment route detail modal with intermediate checkpoints
   - Interactive "Update Demo Status" workflow allowing simulated state changes to In Transit, Delayed, or Delivered

5. **Lab Tester Portal** (`/lab`):
   - Quality control sample queue overview cards (Total Intake, Pending, In Testing, Certified)
   - Interactive status filter tabs (All Samples, Pending, In Testing, Certified)
   - Laboratory intake sample cards with target compendial specifications
   - Analytical test result submission modal form with validation (Potency HPLC, Moisture, Heavy Metals, Microbial Screen, Foreign Matter, Analyst Signoff)
   - Official Certificate of Analysis (COA) document review modal with authentic watermark stamp, observed vs standard specification compliance table, and digital cryptographic signoff

---

## Running the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Commands

1. **Clone repository and enter project directory**:
   ```bash
   cd e:/Majduri/herb_landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local Vite development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` or `http://localhost:5174/` in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```
   Build output will be generated in `dist/`.

5. **Preview production bundle locally**:
   ```bash
   npm run preview
   ```

---

## Environment Variables and Configuration

All portal links and endpoints are centralized in [`src/config.js`](src/config.js) and can be customized via `.env.local`:

```bash
# Portal Destinations (Default: client-side SPA subpaths)
VITE_FARMER_PORTAL_URL=/farmer
VITE_CONSUMER_PORTAL_URL=/consumer
VITE_TRANSPORTER_PORTAL_URL=/transporter
VITE_LAB_PORTAL_URL=/lab

# Optional Backend API Base URL (leave empty for standalone mock demonstration)
VITE_API_BASE_URL=
```

---

## Deployment Steps

Because this project is a modern Single Page Application (Vite + React), it can be deployed to any static web hosting platform:

### 1. Static Hosting (Vercel / Netlify / Cloudflare Pages / AWS S3)
1. Set the build command:
   ```bash
   npm run build
   ```
2. Set the publish directory:
   ```text
   dist
   ```
3. Configure Single Page Application rewrite rules:
   - **Vercel**: Add `vercel.json`:
     ```json
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
     }
     ```
   - **Netlify**: Add `public/_redirects`:
     ```text
     /*    /index.html   200
     ```

### 2. Nginx Production Server
```nginx
server {
    listen 80;
    server_name herbtrace.yourdomain.com;
    root /var/www/herbtrace/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Current Status & Verification
- **Status**: Production-ready frontend client demonstration.
- **Backend / APIs**: Purely client-side mock data; no real backend, MQTT broker, database, or blockchain connection required for demonstration.
- **Production Build**: Verified passing with zero errors or warnings (`npm run build`).


