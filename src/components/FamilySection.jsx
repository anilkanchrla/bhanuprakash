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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-10">
          
          {/* Groom's Family */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border border-[#d4af37]/60 shadow-xl royal-card">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-[#3a0612] px-2.5 py-0.5 rounded-full border border-[#d4af37]/60">
              {isTelugu ? 'వరుని కుటుంబం' : 'Groom’s Family'}
            </span>
            <h3 className="font-serif text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] mt-2">
              Smt M. Manjula & Sri M. Subramanyam Reddy
            </h3>
            <span className="text-xs text-amber-200/80 block mt-0.5">(Indian Bank)</span>
            <div className="mt-3 pt-3 border-t border-[#d4af37]/30 text-xs text-amber-100/90 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Chavatagunta, Vedurukuppam Mandal, Chittoor District</span>
              </p>
              <p className="text-[11px] text-amber-300 font-medium font-telugu">
                {isTelugu ? 'చవటగుంట గ్రామం, వేదురుకుప్పం మండలం, చిత్తూరు జిల్లా' : 'Mittapalli Vari Family'}
              </p>
            </div>
          </div>

          {/* Bride's Family */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border border-[#d4af37]/60 shadow-xl royal-card">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-300 bg-[#3a0612] px-2.5 py-0.5 rounded-full border border-[#d4af37]/60">
              {isTelugu ? 'వధువు కుటుంబం' : 'Bride’s Family'}
            </span>
            <h3 className="font-serif text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] mt-2">
              Smt M. Hymavathi & Late Mummaneni Krishnappa
            </h3>
            <span className="text-xs text-amber-200/80 block mt-0.5 font-telugu">
              {isTelugu ? 'కీ.శే. శ్రీ ముమ్మనేని కృష్ణప్ప గారి దివ్యాశీస్సులతో' : 'With Divine Heavenly Blessings'}
            </span>
            <div className="mt-3 pt-3 border-t border-[#d4af37]/30 text-xs text-amber-100/90 space-y-1">
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

