import React, { useState, useEffect } from 'react';
import { Bell, Sparkles, Heart, Flame, Sun } from 'lucide-react';
import { DiyaLampIcon, KalashIcon, TirunamamIcon } from './TempleIcons';
import { divineAudio } from '../utils/audioSynth';
import confetti from 'canvas-confetti';

export const InteractiveBlessings = ({ isTelugu }) => {
  const [diyasLit, setDiyasLit] = useState(108);
  const [hasLit, setHasLit] = useState(false);
  const [bellCount, setBellCount] = useState(54);
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    // Read from localStorage if already saved
    const savedDiyas = localStorage.getItem('bhanu_anusha_diyas');
    if (savedDiyas) {
      setDiyasLit(parseInt(savedDiyas, 10));
    }
    const savedHasLit = localStorage.getItem('bhanu_anusha_user_lit');
    if (savedHasLit) {
      setHasLit(true);
    }
  }, []);

  const handleLightDiya = () => {
    if (!hasLit) {
      const newTotal = diyasLit + 1;
      setDiyasLit(newTotal);
      setHasLit(true);
      localStorage.setItem('bhanu_anusha_diyas', newTotal.toString());
      localStorage.setItem('bhanu_anusha_user_lit', 'true');
    }
    divineAudio.ringTempleBell();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#FBBF24', '#D4AF37', '#FFFBEB'],
    });
  };

  const handleRingBell = () => {
    setIsRinging(true);
    setBellCount(prev => prev + 1);
    divineAudio.ringTempleBell();
    setTimeout(() => setIsRinging(false), 1200);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#680b1e] via-[#470511] to-[#680b1e] text-white relative overflow-hidden">
      {/* Background sacred patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Title */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sun className="w-3.5 h-3.5" />
          <span>{isTelugu ? 'దైవిక ఆశీస్సులు' : 'Digital Temple Offerings'}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9e79f] mb-3">
          {isTelugu ? 'దీపారాధన & ఘంటానాదం తో ఆశీర్వదించండి' : 'Offer Your Sacred Blessings'}
        </h2>
        
        <p className="font-serif italic text-amber-200/90 text-sm sm:text-base max-w-xl mx-auto mb-12">
          {isTelugu
            ? 'మీ చేతులతో పవిత్ర దీపాన్ని వెలిగించి, ఘంటానాదం చేస్తూ నూతన దంపతులకు మీ హృదయపూర్వక ఆశీస్సులు అందించండి.'
            : 'Light a virtual temple lamp and chime the holy bell to send your heartfelt prayers and blessings to Bhanu Prakash & Anusha.'}
        </p>

        {/* 2 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* Card 1: Light the Diya */}
          <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-[#d4af37]/60 shadow-xl flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="my-2 relative">
                <DiyaLampIcon className="w-16 h-24" isLit={true} />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400/40 blur-md pointer-events-none animate-pulse"></div>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f9e79f] mt-2">
                {isTelugu ? 'పవిత్ర దీపం వెలిగించండి' : 'Light the Sacred Diya'}
              </h3>
              <p className="text-xs text-amber-100/70 mt-1 max-w-xs font-sans">
                {isTelugu ? 'సకల శుభాలు, ఆయురారోగ్యాలు కలగాలని దీపారాధన చేయండి.' : 'Illuminating their path with eternal wisdom, prosperity, and peace.'}
              </p>
            </div>

            <div className="mt-6 w-full">
              <button
                onClick={handleLightDiya}
                disabled={hasLit}
                className={`w-full py-3 px-4 rounded-full font-serif font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                  hasLit
                    ? 'bg-amber-100/20 text-amber-300 border border-amber-400/50 cursor-default'
                    : 'bg-gradient-to-r from-[#d4af37] via-[#f9e79f] to-[#aa771c] text-[#470511] hover:scale-105 active:scale-95'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-600" />
                <span>{hasLit ? (isTelugu ? 'దీపం వెలిగించారు ✓' : 'Diya Lit by You ✓') : (isTelugu ? 'దీపం వెలిగించండి' : 'Click to Light Diya')}</span>
              </button>
              
              <div className="text-[11px] text-amber-300/80 mt-2 font-mono">
                {diyasLit} {isTelugu ? 'దీపాలు వెలిగించబడ్డాయి' : 'Holy Diyas lit by well-wishers'}
              </div>
            </div>
          </div>

          {/* Card 2: Ring the Temple Bell */}
          <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-[#d4af37]/60 shadow-xl flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="my-2 p-4 rounded-full bg-amber-400/10 border border-amber-400/30">
                <Bell className={`w-14 h-14 text-amber-300 transition-transform ${isRinging ? 'rotate-12 scale-110' : ''}`} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f9e79f] mt-2">
                {isTelugu ? 'దేవాలయ ఘంటానాదం' : 'Ring the Temple Bell'}
              </h3>
              <p className="text-xs text-amber-100/70 mt-1 max-w-xs font-sans">
                {isTelugu ? 'ఓంకారం వంటి పవిత్ర శబ్దం దుష్టశక్తులను తొలగించి శుభాన్ని చేకూరుస్తుంది.' : 'The sacred chime dissolves negative energies and heralds divine grace.'}
              </p>
            </div>

            <div className="mt-6 w-full">
              <button
                onClick={handleRingBell}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 border border-amber-300/50"
              >
                <Bell className="w-4 h-4" />
                <span>{isTelugu ? 'ఘంట మ్రోగించండి' : 'Ring Sacred Bell'}</span>
              </button>
              
              <div className="text-[11px] text-amber-300/80 mt-2 font-mono">
                {bellCount} {isTelugu ? 'సార్లు మంగళ ఘంటానాదం మోగింది' : 'Chimes of blessings offered'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

