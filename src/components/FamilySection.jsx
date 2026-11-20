import React from 'react';
import { KamadhenuIcon, KalashIcon, TirunamamIcon } from './TempleIcons';
import { Heart, Users, MapPin, Building, Sparkles } from 'lucide-react';

export const FamilySection = ({ isTelugu }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#130206] border-t border-[#d4af37]/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Kamadhenu Icon */}
        <div className="flex justify-center mb-4">
          <KamadhenuIcon className="w-24 h-16" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-bold text-amber-300 block">
          {isTelugu ? 'కార్యనిర్వాహకులు & కుటుంబ సమక్షం' : 'With Heartfelt Blessings From'}
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f] mt-1 mb-8">
          {isTelugu ? 'మిట్టపల్లి మరియు ముమ్మనేని వంశస్తులు' : 'Mittapalli & Mummaneni Families'}
        </h2>

        {/* Two Family Branches Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-10 items-stretch">
          
          {/* Groom's Family / Parents Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border border-[#d4af37]/60 shadow-xl royal-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-[#3a0612] px-2.5 py-0.5 rounded-full border border-[#d4af37]/60">
                  {isTelugu ? 'వరుని తల్లిదండ్రులు' : 'Groom’s Parents'}
                </span>
                <span className="text-[11px] font-serif font-bold text-[#f9e79f] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 shadow-sm">
                  {isTelugu ? 'ఆహ్వానించువారు • Invited by' : 'Invited by'}
                </span>
              </div>

              {/* Groom's Parents Photo Showcase */}
              <div className="relative mb-4 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-2xl group max-h-64 sm:max-h-72">
                <img
                  src="/grooms-parents.jpg"
                  alt="Smt M. Manjula & Sri M. Subramanyam Reddy"
                  className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#140206] via-[#140206]/75 to-transparent pt-6 pb-2 px-3 text-center">
                  <span className="text-xs font-serif font-bold text-[#f9e79f] tracking-wide block">
                    {isTelugu ? 'ఆహ్వానించువారు' : 'Invited by'}
                  </span>
                  <span className="text-[11px] text-amber-200/90 font-serif block">
                    Smt M. Manjula & Sri M. Subramanyam Reddy
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
                Smt M. Manjula & Sri M. Subramanyam Reddy
              </h3>
              <span className="text-xs text-amber-200/80 block mt-0.5">(Indian Bank)</span>
            </div>

            <div className="mt-4 pt-3 border-t border-[#d4af37]/30 text-xs text-amber-100/90 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Chavatagunta, Vedurukuppam Mandal</span>
              </p>
              <p className="text-[11px] text-amber-300 font-medium font-telugu">
                {isTelugu ? 'చవటగుంట గ్రామం, వేదురుకుప్పం మండలం' : 'Mittapalli Vari Family'}
              </p>
            </div>
          </div>

          {/* Bride's Family */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border border-[#d4af37]/60 shadow-xl royal-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-rose-300 bg-[#3a0612] px-2.5 py-0.5 rounded-full border border-[#d4af37]/60">
                  {isTelugu ? 'వధువు కుటుంబం' : 'Bride’s Family'}
                </span>
                <span className="text-[11px] font-serif font-bold text-rose-300/90 tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-rose-950/40 border border-rose-400/40">
                  {isTelugu ? 'ఆశీస్సులతో' : 'With Blessings'}
                </span>
              </div>

              {/* Decorative Traditional Holy Motif Frame for Bride's Family */}
              <div className="relative mb-4 rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-xl bg-gradient-to-b from-[#3a0612] to-[#20030a] h-64 sm:h-72 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-[#d4af37]/50 flex items-center justify-center mb-3 shadow-inner">
                  <KalashIcon className="w-12 h-12" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#f9e79f]">
                  Mummaneni Family
                </h4>
                <p className="text-xs text-amber-200/80 font-serif italic max-w-xs mt-1">
                  {isTelugu
                    ? 'కీ.శే. శ్రీ ముమ్మనేని కృష్ణప్ప గారి దివ్య స్మృతులు మరియు ఆశీస్సులతో...'
                    : 'With eternal loving memories and divine blessings of Late Sri Mummaneni Krishnappa.'}
                </p>
                <div className="mt-3 px-3 py-1 rounded-full bg-[#140206] border border-[#d4af37]/40 text-[10px] text-amber-300 uppercase tracking-widest font-sans">
                  Puttaparthi
                </div>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
                Smt M. Hymavathi & Late Mummaneni Krishnappa
              </h3>
              <span className="text-xs text-amber-200/80 block mt-0.5 font-telugu">
                {isTelugu ? 'కీ.శే. శ్రీ ముమ్మనేని కృష్ణప్ప గారి దివ్యాశీస్సులతో' : 'With Divine Heavenly Blessings'}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-[#d4af37]/30 text-xs text-amber-100/90 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Peddakammavaripalli Village, Puttaparthi Mandal, Sri Sathya Sai District</span>
              </p>
              <p className="text-[11px] text-amber-300 font-medium font-telugu">
                {isTelugu ? 'పెద్దకమ్మవారిపల్లి గ్రామం, పుట్టపర్తి మండలం, శ్రీ సత్యసాయి జిల్లా' : 'Mummaneni Vari Family'}
              </p>
            </div>
          </div>

        </div>

        {/* Best Compliments Footer Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#2c050f] via-[#3a0613] to-[#2c050f] border-2 border-[#d4af37] shadow-xl max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-serif font-bold text-amber-300 uppercase tracking-wider">
            {isTelugu ? 'కార్యనిర్వాహకులు:' : 'With Best Compliments From:'}
          </p>
          <p className="font-serif text-base sm:text-lg text-[#f9e79f] font-semibold mt-1">
            Mittapalli Vari Family, Friends & Relatives
          </p>
          <p className="font-telugu text-xs sm:text-sm text-amber-200/90 font-medium mt-0.5">
            మిట్టపల్లివారి కుటుంబ సభ్యులు & బంధుమిత్రులు
          </p>
        </div>

      </div>
    </section>
  );
};

