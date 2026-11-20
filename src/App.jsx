import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { LoveLetterToAnusha } from './components/LoveLetterToAnusha';
import { CoupleStory } from './components/CoupleStory';
import { EventsSchedule } from './components/EventsSchedule';
import { VedicRituals } from './components/VedicRituals';
import { InteractiveBlessings } from './components/InteractiveBlessings';
import { WishesWall } from './components/WishesWall';
import { FamilySection } from './components/FamilySection';
import { Footer } from './components/Footer';
import { RSVPModal } from './components/RSVPModal';
import { InvitationCover } from './components/InvitationCover';
import { AmbientRoyalEffects } from './components/AmbientRoyalEffects';

export function App() {
  const [isTelugu, setIsTelugu] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#140206] text-amber-50 selection:bg-[#d4af37] selection:text-[#35030d] relative">
      {/* Ambient Royal Floating Petals & Golden Embers */}
      <AmbientRoyalEffects />

      {/* Royal Invitation Cover Screen (Inspired by reference card) */}
      {!isInvitationOpen && (
        <InvitationCover 
          isTelugu={isTelugu}
          onOpen={() => setIsInvitationOpen(true)}
        />
      )}

      {/* Main Wedding Website Navigation */}
      <Navbar 
        isTelugu={isTelugu} 
        setIsTelugu={setIsTelugu}
        onOpenRsvp={() => setIsRsvpOpen(true)} 
      />

      {/* Hero Section */}
      <Hero 
        isTelugu={isTelugu} 
        onOpenRsvp={() => setIsRsvpOpen(true)} 
      />

      {/* Countdown Timer */}
      <Countdown 
        isTelugu={isTelugu} 
      />

      {/* Special Impressive Love Letter & Tribute for Bride (Anusha) */}
      <LoveLetterToAnusha 
        isTelugu={isTelugu} 
      />

      {/* Couple Story & Tech Background */}
      <CoupleStory 
        isTelugu={isTelugu} 
      />

      {/* Events & Venues Schedule */}
      <EventsSchedule 
        isTelugu={isTelugu} 
      />

      {/* Sacred Vedic Rituals */}
      <VedicRituals 
        isTelugu={isTelugu} 
      />

      {/* Interactive Digital Blessings (Diya Lighting & Temple Bell) */}
      <InteractiveBlessings 
        isTelugu={isTelugu} 
      />

      {/* Guestbook & Wishes Wall */}
      <WishesWall 
        isTelugu={isTelugu} 
      />

      {/* Host Family Section */}
      <FamilySection 
        isTelugu={isTelugu} 
      />

      {/* Footer */}
      <Footer 
        isTelugu={isTelugu} 
      />

      {/* RSVP Modal */}
      <RSVPModal 
        isOpen={isRsvpOpen} 
        onClose={() => setIsRsvpOpen(false)} 
        isTelugu={isTelugu} 
      />
    </div>
  );
}

export default App;
