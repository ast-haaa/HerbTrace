# HerbTrace

Blockchain-Enabled Smart IoT Preservation and Traceability System for Medicinal Herbs

---

# Overview

HerbTrace is a smart IoT and blockchain-based preservation system designed for medicinal herbs, pharmaceutical raw materials, and sensitive agricultural products.

The system continuously monitors environmental conditions such as temperature, humidity, and VOC/gas levels during storage and transportation. If unsafe conditions are detected, the system automatically regulates the environment and sends real-time alerts to stakeholders.

Every important event, including sensor readings, threshold violations, alerts, and user actions, is securely recorded on blockchain for complete transparency and tamper-proof traceability.

The project combines:
- IoT
- Real-time monitoring
- Smart preservation
- Blockchain traceability
- Supply chain transparency
- Web dashboard/PWA
- Predictive analytics capabilities

---

# Problem Statement

Medicinal herbs and pharmaceutical raw materials often lose quality during storage and transportation because of:
- Temperature fluctuations
- Excess humidity
- Poor ventilation
- Delayed monitoring
- Lack of automated preservation
- Absence of transparent traceability
- No proof of handling conditions
- Supply chain data tampering

Existing systems mostly focus on tracking only and do not provide intelligent preservation with immutable traceability.

---

# Solution

HerbTrace provides a complete smart preservation and traceability ecosystem including:

- IoT-based smart storage box
- Real-time environmental monitoring
- Automatic environmental regulation
- Blockchain-based immutable logging
- Real-time alerts and notifications
- Dashboard for monitoring and analytics
- End-to-end supply chain traceability
- Predictive spoilage monitoring
- QR-based product verification
- Healthcare and pharmaceutical adaptation

---

# Key Features

## Smart Environmental Monitoring

The system continuously monitors:
- Temperature
- Humidity
- VOC/Gas levels
- Air quality
- Optional weight/load monitoring
- Box opening/closing events
- Battery and device status

---

## Automatic Preservation System

The smart box automatically:
- Activates cooling systems
- Controls ventilation
- Maintains humidity levels
- Regulates internal conditions
- Prevents spoilage conditions
- Maintains medicinal quality

---

## Real-Time Alerts and Notifications

When thresholds exceed:
- Farmers receive alerts
- Transporters get notifications
- Warehouse managers receive warnings
- Medical/pharmaceutical stakeholders are informed

Users can:
- Mark issue as resolved
- Add corrective actions
- Ignore temporarily
- Escalate issue

All responses are logged securely.

---

## Blockchain Traceability

Every critical event is stored on blockchain:
- Sensor readings
- Shipment updates
- Environmental violations
- User actions
- Device logs
- Supply chain transitions
- Alert acknowledgements

Benefits:
- Tamper-proof records
- Transparent supply chain
- Accountability
- Trust verification
- Product authenticity

---

## QR Code Verification

Each shipment/product can have a QR code linked to:
- Product origin
- Storage conditions
- Transportation history
- Blockchain logs
- Quality verification

Consumers and healthcare providers can verify authenticity instantly.

---

## Predictive Analytics and AI Integration

Future-ready AI features:
- Spoilage prediction
- Environmental risk analysis
- Pattern detection
- Predictive maintenance
- Smart recommendation engine

---

## Progressive Web App (PWA)

Dashboard features:
- Live sensor monitoring
- Real-time analytics
- Shipment tracking
- Blockchain logs
- Alert management
- Device management
- Historical data visualization
- User authentication

---

# System Architecture

```text
Sensors → ESP32 → MQTT Broker → Backend Server → Database/IPFS
                                            ↓
                                     Blockchain Layer
                                            ↓
                                   Web Dashboard / PWA
```

---

# Technology Stack

## Hardware
- ESP32
- DHT22 Temperature & Humidity Sensor
- MQ Series VOC/Gas Sensor
- Relay Module
- Cooling/Fan Unit
- Optional Load Cell
- Power Management Module

---

## Software Stack

### Frontend
- HTML
- CSS
- JavaScript
- Progressive Web App (PWA)

### Backend
- Node.js
- FastAPI
- REST APIs
- MQTT Protocol

### Database
- PostgreSQL

### Storage
- IPFS (InterPlanetary File System)

### Blockchain
- Polygon
- Hyperledger (optional permissioned network)

### Communication
- MQTT
- WebSockets

---

# Working Flow

1. Sensors continuously collect environmental data.
2. ESP32 processes and transmits readings through MQTT.
3. Backend receives and analyzes sensor data.
4. Threshold violations are detected automatically.
5. Smart preservation mechanisms activate.
6. Notifications are sent to stakeholders.
7. User responses are recorded.
8. Important logs are written to blockchain.
9. Dashboard visualizes complete traceability.

---

# Core Modules

## 1. Sensor Monitoring Module
Responsible for:
- Sensor data collection
- Calibration
- Real-time monitoring
- Threshold comparison

---

## 2. IoT Communication Module
Handles:
- MQTT communication
- Device synchronization
- Real-time transmission
- Connectivity management

---

## 3. Smart Preservation Module
Controls:
- Cooling systems
- Airflow
- Humidity regulation
- Preservation automation

---

## 4. Blockchain Logging Module
Stores:
- Critical environmental logs
- Shipment records
- User actions
- Alert history
- Verification records

---

## 5. Dashboard and Analytics Module
Provides:
- Monitoring interface
- Data visualization
- Traceability analytics
- Historical analysis
- Device management

---

## 6. QR Verification Module
Provides:
- Product authentication
- Shipment verification
- Blockchain-linked traceability

---

# Healthcare and Pharmaceutical Adaptation

HerbTrace can also be adapted for:
- Pharmaceutical raw material monitoring
- Vaccine cold-chain logistics
- Medical storage systems
- Drug transportation monitoring
- Clinical supply chain management

---

# Future Scope

- AI-based spoilage prediction
- Machine learning analytics
- GPS-enabled live transport tracking
- Mobile application
- Multi-language support
- Smart contract automation
- Healthcare ERP integration
- Pharmaceutical cold-chain management
- Automated compliance reporting
- Digital twin monitoring systems

---

# Applications

- Medicinal herb preservation
- Pharmaceutical supply chains
- Agricultural logistics
- Organic product traceability
- Cold-chain monitoring
- Healthcare transportation
- Smart warehousing

---

# Advantages

- Reduces spoilage
- Maintains medicinal quality
- Enables real-time monitoring
- Provides transparent traceability
- Prevents data tampering
- Improves accountability
- Supports healthcare adaptation
- Enhances supply chain trust

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/your-username/herbtrace.git
cd herbtrace
```

---

## Install Backend Dependencies

```bash
npm install
```

---

## Run Backend

```bash
npm start
```

---

## Run Frontend

Open:
```text
index.html
```

---

# Example MQTT Topics

```text
herbtrace/sensor/temperature
herbtrace/sensor/humidity
herbtrace/sensor/voc
herbtrace/device/status
herbtrace/alerts
herbtrace/blockchain/logs
```

---

# Example JSON Payload

```json
{
  "device_id": "HBX001",
  "temperature": 28.4,
  "humidity": 76,
  "voc_level": 320,
  "battery_status": 92,
  "timestamp": "2026-05-26T10:30:00Z"
}
```

---

# Folder Structure

```text
HerbTrace/
│
├── frontend/
├── backend/
├── sensors/
├── blockchain/
├── database/
├── docs/
├── assets/
└── README.md
```

---

# Research and Innovation Areas

- IoT-Based Smart Preservation
- Blockchain Traceability
- Smart Agriculture
- Healthcare Supply Chain
- Pharmaceutical Logistics
- Predictive Monitoring
- Decentralized Data Systems

---

# Contributors

Project Name: HerbTrace

Developed for:
- Smart Agriculture
- Healthcare Supply Chain
- Pharmaceutical Traceability
- IoT and Blockchain Innovation

---

# License

MIT License

---

# Acknowledgement

HerbTrace is developed as an innovation-focused smart preservation and traceability solution to improve medicinal herb quality retention, healthcare logistics transparency, and secure supply chain monitoring using IoT and blockchain technologies.
