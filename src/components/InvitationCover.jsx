import React, { useState } from 'react';
import { TirunamamIcon, GaneshaIcon, LotusIcon, DiyaLampIcon } from './TempleIcons';
import { Sparkles, Heart } from 'lucide-react';
import { divineAudio } from '../utils/audioSynth';
import confetti from 'canvas-confetti';

export const InvitationCover = ({ onOpen, isTelugu }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // 1. Play the uploaded wedding song from the VERY BEGINNING (0:00)
    divineAudio.playFromStart();

    // 2. Play sacred temple bell chime
    divineAudio.ringTempleBell();

    // 3. Trigger festive rose petal & golden akshathalu shower
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#B91C1C', '#F59E0B', '#F472B6', '#FFFDF7'],
      shapes: ['circle'],
      scalar: 1.3,
    });

    // 4. Smooth transition before revealing the website
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950 transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5e0919] via-[#35030d] to-[#1a0106] pointer-events-none" />

      {/* Subtle traditional rangoli/mandala pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />

      {/* Royal Invitation Card Envelope Container */}
      <div className="relative w-full max-w-md sm:max-w-lg rounded-[32px] sm:rounded-[38px] p-6 sm:p-9 bg-gradient-to-b from-[#460613] via-[#35030d] to-[#250208] text-center border-2 border-[#d4af37]/80 shadow-[0_0_60px_rgba(212,175,55,0.25)] flex flex-col items-center justify-between min-h-[580px] sm:min-h-[640px] overflow-hidden">
        
        {/* Inner Golden Inset Border Line (Identical to reference screenshot) */}
        <div className="absolute inset-3 sm:inset-4 rounded-[26px] sm:rounded-[30px] border border-[#d4af37]/50 pointer-events-none" />

        {/* Top Sacred Medallion / Circular Emblem with Couple Photo */}
        <div className="relative z-10 pt-4 flex flex-col items-center">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#f9e79f] via-[#d4af37] to-[#aa771c] shadow-[0_0_30px_rgba(212,175,55,0.45)] flex items-center justify-center mb-4 group">
            {/* Shimmer ring */}
            <div className="absolute inset-0 rounded-full border border-amber-300/40 animate-ping opacity-25 pointer-events-none"></div>
            
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="/couple-photo.jpg"
                alt="Bhanu Prakash & Anusha"
                className="w-full h-full object-cover object-top scale-110 group-hover:scale-115 transition-transform duration-500"
              />
            </div>

            {/* Sacred emblem badge at bottom of circle */}
            <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#680b1e] to-[#470511] border border-[#d4af37] text-[10px] text-[#f9e79f] font-telugu font-bold shadow-md whitespace-nowrap">
              కళ్యాణమస్తు
            </div>
          </div>

          {/* Family Heading */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-amber-200/90 font-cinzel font-bold">
            Mittapalli Family Invitation
          </span>
          <h2 className="font-telugu text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9e79f] via-[#d4af37] to-[#f9e79f] mt-1 tracking-wide">
            మిట్టపల్లి వారి పెండ్లి పిలుపు
          </h2>

          {/* Golden Divider */}
          <div className="flex items-center justify-center gap-2 my-4 w-36 mx-auto">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          </div>
        </div>

        {/* Center Couple Names in Royal Script */}
        <div className="relative z-10 my-auto py-2">
          <h1 className="font-greatvibes text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-[#f9e79f] to-[#d4af37] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
            Bhanu Prakash & Anusha
          </h1>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-amber-300/80 font-serif block mt-2">
            Wedding Celebration
          </span>
          <span className="text-[10px] sm:text-xs text-amber-200/60 font-sans block mt-1">
            29 November 2026 • Sai Aramam, Puttaparthi
          </span>
        </div>

        {/* Bottom Invitation Message & Golden Open Button */}
        <div className="relative z-10 pb-4 w-full flex flex-col items-center">
          <p className="font-serif italic text-amber-100/80 text-xs sm:text-sm max-w-xs sm:max-w-sm leading-relaxed mb-6 px-2">
            "We request the pleasure of your company to grace this auspicious occasion and bless the new couple."
          </p>

          {/* The Golden Button (Matching reference screenshot) */}
          <button
            onClick={handleOpenInvitation}
            className="w-full max-w-xs sm:max-w-sm py-3.5 sm:py-4 px-6 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] hover:from-[#d4af37] hover:via-[#f9e79f] hover:to-[#d4af37] text-[#35030d] font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.6)] transform hover:scale-[1.03] active:scale-[0.98] transition-all flex flex-col items-center justify-center border border-amber-200 group"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#470511] group-hover:rotate-45 transition-transform" />
              <span className="font-serif">Open Invitation • ఆహ్వానం</span>
              <Sparkles className="w-4 h-4 text-[#470511] group-hover:-rotate-45 transition-transform" />
            </div>
            <span className="text-[10px] font-telugu text-[#520917] font-semibold tracking-normal mt-0.5 opacity-90">
              వివాహ ఆహ్వానాన్ని తెరవండి
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

