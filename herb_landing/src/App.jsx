import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Portals from './components/Portals';
import Traceability from './components/Traceability';
import Impact from './components/Impact';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

// Portal Views
import FarmerPortal from './components/portals/FarmerPortal';
import ConsumerPortal from './components/portals/ConsumerPortal';
import LabPortal from './components/portals/LabPortal';

function normalizePath(pathname) {
  const p = (pathname || '').toLowerCase();
  const h = (window.location.hash || '').toLowerCase();
  if (p.includes('/farmer') || h.includes('farmer')) return 'farmer';
  if (p.includes('/consumer') || h.includes('consumer')) return 'consumer';
  if (p.includes('/lab') || h.includes('lab')) return 'lab';
  return 'landing';
}

export default function App() {
  const [currentView, setCurrentView] = useState(() => normalizePath(window.location.pathname));
  useScrollReveal(currentView);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentView(normalizePath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleNavigate = useCallback((destination) => {
    let nextView = 'landing';
    if (destination.includes('/farmer') || destination.includes('farmer')) nextView = 'farmer';
    else if (destination.includes('/consumer') || destination.includes('consumer')) nextView = 'consumer';
    else if (destination.includes('/lab') || destination.includes('lab')) nextView = 'lab';

    setCurrentView(nextView);
    const targetUrl = destination === '/' || !destination ? '/' : destination;
    if (window.location.pathname !== targetUrl && !targetUrl.startsWith('#')) {
      window.history.pushState(null, '', targetUrl);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SplashCursor
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        PRESSURE_ITERATIONS={8}
        DENSITY_DISSIPATION={4.0}
        PRESSURE={0.15}
        CURL={4}
        SPLAT_RADIUS={0.22}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={10}
        COLOR="#10B981"
        RAINBOW_MODE={false}
      />

      {currentView === 'farmer' && <FarmerPortal onNavigate={handleNavigate} />}
      {currentView === 'consumer' && <ConsumerPortal onNavigate={handleNavigate} />}
      {currentView === 'lab' && <LabPortal onNavigate={handleNavigate} />}

      {currentView === 'landing' && (
        <>
          <Navbar onNavigatePortal={handleNavigate} />
          <main>
            <Hero onNavigatePortal={handleNavigate} />
            <Problem />
            <HowItWorks />
            <Features />
            <Portals onNavigatePortal={handleNavigate} />
            <Traceability />
            <Impact />
            <TechStack />
          </main>
          <Footer onNavigatePortal={handleNavigate} />
        </>
      )}
    </>
  );
}
