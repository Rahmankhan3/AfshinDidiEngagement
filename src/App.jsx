import { useState, useEffect } from 'react';
import FloatingParticles from './components/FloatingParticles';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import EventDetails from './components/EventDetails';
import CountdownTimer from './components/CountdownTimer';
import LocationSection from './components/LocationSection';
import FamilySection from './components/FamilyMessage';
import ClosingSection from './components/Footer';
import InvitationOverlay from './components/InvitationOverlay';

/**
 * App — Single-page Islamic engagement invitation.
 */
function App() {
  const [isOpened, setIsOpened] = useState(false);

  // Prevent scrolling while overlay is active
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      // Small delay to allow curtain animation to finish before allowing scroll
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 1200);
    }
  }, [isOpened]);

  return (
    <div className="relative min-h-screen bg-ivory">
      <InvitationOverlay isOpened={isOpened} onOpen={() => setIsOpened(true)} />

      {/* Subtle Islamic geometric pattern overlay */}
      <div className="islamic-pattern-bg" />

      {/* Ambient gold particles */}
      <FloatingParticles />

      {/* Content */}
      <main className={`relative z-10 transition-opacity duration-1000 delay-700 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <MessageSection />
        <EventDetails />
        <CountdownTimer />
        <LocationSection />
        <FamilySection />
        <ClosingSection />
      </main>
    </div>
  );
}

export default App;
