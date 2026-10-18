/**
 * Shared inline SVG icons used across the HerbTrace landing page.
 * Clean, consistent, lightweight, and styled for modern agritech SaaS.
 */

export function LeafLogo({ size = 34, className = '' }) {
  const height = Math.round(size * (831 / 707));
  return (
    <img
      src="/images/leaf-logo.png"
      alt="HerbTrace Leaf Logo"
      width={size}
      height={height}
      className={`leaf-logo-img ${className}`}
      loading="eager"
      decoding="async"
      style={{
        width: `${size}px`,
        height: `${height}px`,
        display: 'inline-block',
        verticalAlign: 'middle',
        objectFit: 'contain',
        flexShrink: 0,
        filter: 'drop-shadow(0 2px 8px rgba(16, 185, 129, 0.28))',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease',
      }}
    />
  );
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12M12 6l4 4-4 4" />
    </svg>
  );
}

export function SearchIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="6" />
      <path d="M14 14l4 4" />
    </svg>
  );
}

export function ThermometerIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

export function HumidityIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function SensorIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.93 19.07a10 10 0 0 1 0-14.14M2 12h3M19.07 4.93a10 10 0 0 1 0 14.14M22 12h-3" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3" />
    </svg>
  );
}

export function FlaskIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2v7.31L4.1 19.5A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.5L14 9.31V2" />
      <path d="M8.5 2h7M6.5 16h11" />
    </svg>
  );
}

export function MapPinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function BellAlertIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <circle cx="18" cy="4" r="3" fill="#D64545" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

export function QrCodeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM17 17h4v4h-4zM14 20h3M20 14v3" />
    </svg>
  );
}

export function BlockchainIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="6" height="6" rx="1" />
      <rect x="16" y="7" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M8 10h8M5 13v4a2 2 0 0 0 2 2h2M19 13v4a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BoxIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function PlantIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 20h10M12 20v-8M12 12C9 9 6 10 4 13c1 5 6 6 8-1zM12 10c3-3 6-2 8 1-1 5-6 6-8-1z" />
    </svg>
  );
}

export function FarmerIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
      <path d="M2 10c2-1 4-1 6 0M16 10c2-1 4-1 6 0" />
    </svg>
  );
}

export function ConsumerIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M9 13.5c1-1 5-1 6 0" />
    </svg>
  );
}

export function LabIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 18h12M9 14h6M12 4v10M10 4h4" />
      <circle cx="12" cy="18" r="3" />
    </svg>
  );
}

export function CpuIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

export function DatabaseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function RadioIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function LockIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function AlertTriangleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ── Colorful Brand Technology Logos (as requested by user in Image 5) ── */

export function EspIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#E11D48" />
      <rect x="7" y="7" width="18" height="18" rx="3" fill="#18181B" />
      <path d="M12 16H20M16 12V20" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
      <path d="M9 10H10M9 22H10M22 10H23M22 22H23" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MqttIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#6B21A8" />
      <path d="M8 22L16 10L24 22" stroke="#E9D5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="2.5" fill="#C084FC" />
      <circle cx="8" cy="22" r="2.5" fill="#C084FC" />
      <circle cx="24" cy="22" r="2.5" fill="#C084FC" />
      <path d="M12 18H20" stroke="#A855F7" strokeWidth="2" />
    </svg>
  );
}

export function SpringIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#15803D" />
      <path d="M16 7C11 11 10 18 16 25C22 18 21 11 16 7Z" fill="#86EFAC" />
      <path d="M16 11V22M16 14L13 16.5M16 17.5L19 15" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MySqlIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0284C7" />
      <ellipse cx="16" cy="11" rx="8" ry="3" fill="#38BDF8" />
      <path d="M8 11V16C8 17.66 11.58 19 16 19C20.42 19 24 17.66 24 16V11" stroke="#BAE6FD" strokeWidth="1.8" fill="none" />
      <path d="M8 16V21C8 22.66 11.58 24 16 24C20.42 24 24 22.66 24 21V16" stroke="#F59E0B" strokeWidth="1.8" fill="none" />
    </svg>
  );
}

export function BlockchainBrandIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#D97706" />
      <path d="M16 6L24 10.5V19.5L16 24L8 19.5V10.5L16 6Z" stroke="#FEF3C7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 6V24M8 10.5L24 19.5M8 19.5L24 10.5" stroke="#FCD34D" strokeWidth="1.5" />
      <circle cx="16" cy="15" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

export function ReactIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0F172A" />
      <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#38BDF8" strokeWidth="1.6" />
      <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#38BDF8" strokeWidth="1.6" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="9" ry="3.5" stroke="#38BDF8" strokeWidth="1.6" transform="rotate(120 16 16)" />
      <circle cx="16" cy="16" r="2" fill="#38BDF8" />
    </svg>
  );
}

export function PythonIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#1E293B" />
      <path d="M15.5 8H12C9.5 8 9.5 10 9.5 11.5V14H16V15H8C6.5 15 6 16.5 6 18.5V20.5C6 22 7.5 24 10 24H12V22.5C12 21 13 20 14.5 20H18C19.5 20 20.5 19 20.5 17.5V15H17C15 15 15.5 13.5 15.5 11.5V8Z" fill="#38BDF8" />
      <path d="M16.5 24H20C22.5 24 22.5 22 22.5 20.5V18H16V17H24C25.5 17 26 15.5 26 13.5V11.5C26 10 24.5 8 22 8H20V9.5C20 11 19 12 17.5 12H14C12.5 12 11.5 13 11.5 14.5V17H15C17 17 16.5 18.5 16.5 20.5V24Z" fill="#FACC15" />
      <circle cx="11.5" cy="10" r="0.9" fill="#FFFFFF" />
      <circle cx="20.5" cy="22" r="0.9" fill="#FFFFFF" />
    </svg>
  );
}

export function DockerIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0284C7" />
      <rect x="7" y="14" width="3.5" height="3" fill="#FFFFFF" rx="0.5" />
      <rect x="11.5" y="14" width="3.5" height="3" fill="#FFFFFF" rx="0.5" />
      <rect x="16" y="14" width="3.5" height="3" fill="#FFFFFF" rx="0.5" />
      <rect x="11.5" y="10" width="3.5" height="3" fill="#FFFFFF" rx="0.5" />
      <rect x="16" y="10" width="3.5" height="3" fill="#FFFFFF" rx="0.5" />
      <path d="M6 18C8 18 10 22 17 22C24 22 26 19 26 18C25 21 21 24 16 24C10 24 6 21 6 18Z" fill="#BAE6FD" />
    </svg>
  );
}

/* ── Authentic Icons matching User Provided Reference (Image 1) ── */

export function FlutterIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M21.5 4.5L6.5 19.5L11 24L30.5 4.5H21.5Z" fill="#54C5F8" />
      <path d="M21.5 14.5L11.5 24.5L16 29L30.5 14.5H21.5Z" fill="#29B6F6" />
      <path d="M16 29L20 25L25.5 30.5L21.5 33.5L16 29Z" fill="#01579B" />
      <path d="M15.5 24.5L20 20L25.5 25.5L21 30L15.5 24.5Z" fill="#02569B" />
    </svg>
  );
}

export function TealNetworkIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="18" y="2.5" width="22" height="22" rx="4" transform="rotate(45 18 2.5)" fill="#00C4A7" />
      <line x1="9" y1="18" x2="18" y2="9" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
      <line x1="18" y1="9" x2="27" y2="18" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
      <line x1="27" y1="18" x2="18" y2="27" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
      <line x1="18" y1="27" x2="9" y2="18" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
      <line x1="9" y1="18" x2="27" y2="18" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
      <line x1="18" y1="9" x2="18" y2="27" stroke="#ffffff" strokeWidth="1.4" opacity="0.9" />
      <line x1="12.5" y1="12.5" x2="23.5" y2="23.5" stroke="#ffffff" strokeWidth="1.1" opacity="0.75" />
      <line x1="23.5" y1="12.5" x2="12.5" y2="23.5" stroke="#ffffff" strokeWidth="1.1" opacity="0.75" />
      <circle cx="18" cy="18" r="2.3" fill="#ffffff" />
      <circle cx="18" cy="9" r="1.8" fill="#ffffff" />
      <circle cx="18" cy="27" r="1.8" fill="#ffffff" />
      <circle cx="9" cy="18" r="1.8" fill="#ffffff" />
      <circle cx="27" cy="18" r="1.8" fill="#ffffff" />
      <circle cx="13.5" cy="13.5" r="1.4" fill="#ffffff" />
      <circle cx="22.5" cy="13.5" r="1.4" fill="#ffffff" />
      <circle cx="13.5" cy="22.5" r="1.4" fill="#ffffff" />
      <circle cx="22.5" cy="22.5" r="1.4" fill="#ffffff" />
    </svg>
  );
}

export function PurpleArrowIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 4L29 15H21V30H15V15H7L18 4Z" fill="#7C4DFF" opacity="0.25" />
      <path d="M18 4L29 15H18V30H15V15L18 4Z" fill="#651FFF" opacity="0.45" />
      <path d="M21 15H29L18 4V15H21Z" fill="#B388FF" />
      <path d="M18 15V30H24V15H18Z" fill="#7C4DFF" opacity="0.9" />
      <path d="M15 15V30H20V15H15Z" fill="#5319E0" />
      <path d="M18 4L7 15H15V30H21V15H29L18 4Z" fill="url(#purpleGrad36)" />
      <defs>
        <linearGradient id="purpleGrad36" x1="7" y1="4" x2="29" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9C6BFF" />
          <stop offset="0.6" stopColor="#7C4DFF" />
          <stop offset="1" stopColor="#5319E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NuxtBrandIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        d="M20 7.5L32 28.5H8L20 7.5Z"
        stroke="#00DC82"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M24 18L29 27H19L24 18Z"
        stroke="#002E3B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function VueBrandIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 31L3 6H9.5L18 20.5L26.5 6H33L18 31Z" fill="#42B883" />
      <path d="M18 31L9.5 16H14.5L18 22L21.5 16H26.5L18 31Z" fill="#35495E" />
    </svg>
  );
}

export function PythonBrandIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        d="M17.8 4C12.8 4 13.1 6.1 13.1 6.1L13.2 8.3H18V9.6H9.4C7.3 9.6 5.6 11.3 5.6 14C5.6 17 7 17.8 8.7 17.8H10.4V15.4C10.4 12.6 12.7 12.5 12.7 12.5H18.2C20.7 12.5 22.4 10.7 22.4 8.3C22.4 5.9 21.1 4 17.8 4ZM15.5 6.3C16.2 6.3 16.7 6.8 16.7 7.5C16.7 8.2 16.2 8.7 15.5 8.7C14.8 8.7 14.3 8.2 14.3 7.5C14.3 6.8 14.8 6.3 15.5 6.3Z"
        fill="#3776AB"
      />
      <path
        d="M18.2 32C23.2 32 22.9 29.9 22.9 29.9L22.8 27.7H18V26.4H26.6C28.7 26.4 30.4 24.7 30.4 22C30.4 19 29 18.2 27.3 18.2H25.6V20.6C25.6 23.4 23.3 23.5 23.3 23.5H17.8C15.3 23.5 13.6 25.3 13.6 27.7C13.6 30.1 14.9 32 18.2 32ZM20.5 29.7C19.8 29.7 19.3 29.2 19.3 28.5C19.3 27.8 19.8 27.3 20.5 27.3C21.2 27.3 21.7 27.8 21.7 28.5C21.7 29.2 21.2 29.7 20.5 29.7Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function WorkflowBrandIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <g transform="translate(2, 2)">
        <rect x="4" y="24" width="16" height="7" rx="3.5" fill="#EA4335" transform="rotate(-18 4 24)" />
        <circle cx="10" cy="25" r="1.8" fill="#ffffff" />
        <rect x="7" y="17" width="16" height="7" rx="3.5" fill="#FBBC05" transform="rotate(35 7 17)" />
        <circle cx="16" cy="19.5" r="1.8" fill="#ffffff" />
        <rect x="15" y="8" width="17" height="7" rx="3.5" fill="#34A853" transform="rotate(82 15 8)" />
        <circle cx="18" cy="11.5" r="1.8" fill="#ffffff" />
        <rect x="21" y="8" width="17" height="7" rx="3.5" fill="#4285F4" transform="rotate(125 21 8)" />
        <circle cx="23.5" cy="14.5" r="1.8" fill="#ffffff" />
      </g>
    </svg>
  );
}

