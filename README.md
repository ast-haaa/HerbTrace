# 🌿 Astra Backend – IoT Telemetry & Alert System

This project started as a minimal starter skeleton for the Astra backend  
(Java 17 + Spring Boot + MySQL) and has evolved into a **real-time IoT telemetry
and alerting system**.

It now supports **MQTT-based sensor data ingestion**, **rule-based alert generation**,
and **live telemetry APIs** for cold-chain / IoT devices  
(**Tulsi Box use case**).

---

## 🚀 What the System Does Now

- 📡 Receives real-time telemetry via **MQTT**
- 🌡️ Stores **temperature**, **humidity**, and **GPS** sensor readings
- 🚨 Generates alerts when thresholds are breached
- ⏱️ Rate-limits alerts (**flood control**)
- 🕒 Fetches **latest telemetry** per box/device
- 👨‍🌾 Farmer alert APIs
- 🧑‍💼 Admin escalated alert APIs
- 🗄️ Uses **MySQL + JPA (Hibernate)**

---

## 🧩 What is Included

- 📦 Maven project (`pom.xml`)
- ☕ Spring Boot application (Java 17)
- 🗄️ `application.properties` configured for local MySQL
- 🐳 Docker Compose (MySQL)
- 📡 MQTT integration (Eclipse Paho)
- 🧬 Spring Data JPA + Hibernate
- 🔐 Spring Security (development mode)
- 🌐 REST APIs
- 🧵 Fabric client stub (for future use)
- 🧪 Postman collection (sample requests & payloads)

---

## 📂 Project Structure
---
src/main/java/com/astra
├── api/dto # DTOs
├── config # Security, MQTT, CORS configs
├── controller # REST Controllers
├── model # JPA Entities
├── repository # JPA Repositories
├── service # Business logic
├── fabric # Fabric client stub
├── util # Utility classes
└── Application.java # Spring Boot entry point



## ⚙️ Quick Start

### 1️⃣ Prerequisites
- Java 17
- Maven
- Docker
- MySQL
- Postman



### 2️⃣ Start MySQL

```bash
docker-compose up -d

```
