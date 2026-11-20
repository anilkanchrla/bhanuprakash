import React, { useState } from 'react';
import { Heart, Sparkles, Mail, Lock, Unlock, Feather, Smile, ShieldCheck, Sun } from 'lucide-react';
import { LotusIcon } from './TempleIcons';
import confetti from 'canvas-confetti';

export const LoveLetterToAnusha = ({ isTelugu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFB6C1', '#D4AF37', '#9333EA', '#E11D48'],
      });
    }
  };

  const promises = [
    {
      icon: <Smile className="w-5 h-5 text-amber-500" />,
      title: isTelugu ? 'నీ చిరునవ్వే నా ప్రపంచం' : 'Your Smile is My Home',
      desc: isTelugu
        ? 'ప్రతి ఉదయం నీ మోములో వెలిగే ఆ చిరునవ్వును కాపాడుకోవడం నా జీవిత లక్ష్యం.'
        : 'To ensure that sweet, radiant smile of yours never fades, even on the busiest Bangalore traffic days or tough sprint deadlines.'
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: isTelugu ? 'స్నేహితుడిగా, జీవిత భాగస్వామిగా' : 'Best Friend & Confidant',
      desc: isTelugu
        ? 'ఏడడుగుల బంధంతో పాటు, నీతో నడిచే ప్రతి క్షణంలో నీకు నమ్మకమైన నేస్తంగా ఉంటాను.'
        : 'To listen to all your stories, share your coffee cravings, laugh at your jokes, and stand firmly beside you in every chapter.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: isTelugu ? 'నీ కలలకు చేయూత' : 'Championing Your Dreams',
      desc: isTelugu
        ? 'నీ ఆశయాలను, విజయాలను నా విజయాలుగా భావించి నిన్ను ఎల్లప్పుడూ ప్రోత్సహిస్తాను.'
        : 'To cherish your brilliance at PwC India and woman of grace, cheering the loudest for every milestone you conquer.'
    },
    {
      icon: <Sun className="w-5 h-5 text-amber-600" />,
      title: isTelugu ? 'పరిపూర్ణ ప్రేమ & గౌరవం' : 'Eternal Love & Respect',
      desc: isTelugu
        ? 'వేద మంత్రాల సాక్షిగా, వెంకటేశ్వర స్వామి ఆశీస్సులతో నిన్ను ప్రాణంగా చూసుకుంటాను.'
        : 'To honor and love you with every beat of my heart, sealed with the divine blessings of Lord Venkateswara.'
    }
  ];

  return (
    <section id="for-anusha" className="py-16 sm:py-24 bg-[#160207] relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2f050f] border border-[#d4af37]/70 text-[#f9e79f] text-xs font-semibold tracking-wider uppercase mb-3 shadow">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>{isTelugu ? 'వధువు అనుష కోసం ప్రేమ సందేశం' : 'A Special Note For Anusha'}</span>
          </div>

          <h2 className="font-greatvibes text-4xl sm:text-5xl md:text-6xl text-[#f9e79f] gold-shimmer-text">
            To My Beloved Bride, Anusha
          </h2>
          <p className="font-serif italic text-amber-200/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            {isTelugu
              ? 'నా జీవితంలోకి వెలుగులా వచ్చిన నా అనుషకు... భాను ప్రకాష్ హృదయపూర్వక ప్రేమలేఖ.'
              : 'A heartfelt tribute from Bhanu Prakash to the girl who turned every day into poetry.'}
          </p>
        </div>

        {/* The Sealed Royal Envelope / Letter Card */}
        <div className="relative max-w-3xl mx-auto bg-gradient-to-b from-[#2b050f] via-[#1f030a] to-[#150206] rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] border-2 border-[#d4af37] text-amber-100">
          {/* Top Wax Seal / Stamp Button */}
          <div className="flex flex-col items-center justify-center -mt-12 sm:-mt-16 mb-6">
            <button
              onClick={handleOpenLetter}
              className="relative group p-4 sm:p-5 rounded-full bg-gradient-to-br from-[#881329] via-[#680b1e] to-[#470511] text-[#f9e79f] shadow-2xl border-4 border-[#d4af37] transform hover:scale-110 active:scale-95 transition-all"
              title="Click to Open Love Letter"
            >
              {isOpen ? (
                <Unlock className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 animate-pulse" />
              ) : (
                <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-[#f9e79f] group-hover:rotate-12 transition-transform" />
              )}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#3a0612] text-[#f9e79f] text-[10px] sm:text-xs font-serif px-3 py-1 rounded-full whitespace-nowrap shadow border border-[#d4af37]/60">
                {isOpen ? (isTelugu ? 'లేఖ చదవండి' : 'Letter Unfolded') : (isTelugu ? 'సీల్ తెరిచి చదవండి' : 'Click to Break Seal')}
              </span>
            </button>
          </div>

          {/* Envelope Body */}
          <div className="mt-6 text-amber-100">
            {/* Soft Salutation */}
            <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
                  Bengaluru • With All My Heart
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] mt-0.5">
                  Dearest Anusha,
                </h3>
              </div>
              <LotusIcon className="w-10 h-8 opacity-80" />
            </div>

            {/* Letter Content Preview & Full Reveal */}
            <div className={`space-y-4 font-serif text-amber-100/90 leading-relaxed text-sm sm:text-base ${!isOpen ? 'relative' : ''}`}>
              <p>
                From the moment our families spoke and our paths crossed in Bangalore, there was a calmness that felt like answering an ancient prayer. In a city of fast deadlines, code commits, and endless chatter, talking to you felt like coming home to a serene temple courtyard.
              </p>

              {isOpen && (
                <div className="space-y-4 transition-all duration-700 animate-fadeIn">
                  <p>
                    I have watched your gentle kindness, your dedication to your work and family, and the graceful sparkle in your eyes that makes even ordinary moments feel sacred. Being consulting professionals in Bangalore together means we understand each other's dreams, busy sprint deadlines, and quiet ambitions like no one else can.
                  </p>
                  
                  <p className="bg-[#380612]/80 p-4 rounded-2xl border-l-4 border-[#d4af37] italic text-amber-100 shadow-inner">
                    "They say marriages are made in heaven, but standing with you on November 29th at Sai Aramam, taking the sacred seven steps around the holy agni, will be the greatest honor of my entire life."
                  </p>

                  <p>
                    I promise to love you unconditionally, to hold your hand through every high and low, to celebrate every dream you conquer, and to build a life filled with laughter, devotion, and unending warmth.
                  </p>

                  <div className="pt-4 border-t border-[#d4af37]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="text-xs text-amber-200/70 font-sans block">Forever Yours,</span>
                      <span className="font-greatvibes text-2xl sm:text-3xl text-[#f9e79f]">
                        Bhanu Prakash
                      </span>
                    </div>
                    <div className="text-[11px] font-sans text-amber-300 font-medium">
                      29.11.2026 • Sacred Saptapadi
                    </div>
                  </div>
                </div>
              )}

              {!isOpen && (
                <div className="text-center pt-4">
                  <button
                    onClick={handleOpenLetter}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white underline underline-offset-4"
                  >
                    <Feather className="w-4 h-4" />
                    <span>{isTelugu ? 'పూర్తి ప్రేమలేఖను చదవడానికి ఇక్కడ క్లిక్ చేయండి...' : 'Click the seal above or here to read the full letter...'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Sacred 4 Vows to Anusha Grid */}
            <div className="mt-10 pt-8 border-t border-[#d4af37]/30">
              <h4 className="text-center font-serif text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] mb-6 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>{isTelugu ? 'అనుషకు భాను ప్రకాష్ పవిత్ర ప్రతిజ్ఞలు' : 'My 4 Sacred Promises to You'}</span>
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {promises.map((promise, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-[#22040c]/90 hover:bg-[#2c050f] transition-colors border border-[#d4af37]/50 flex items-start gap-3 shadow-lg"
                  >
                    <div className="p-2 rounded-xl bg-[#350510] shadow-inner shrink-0 border border-[#d4af37]/40">
                      {promise.icon}
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-xs sm:text-sm text-[#f9e79f]">
                        {promise.title}
                      </h5>
                      <p className="text-amber-100/80 text-xs mt-1 leading-relaxed">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

