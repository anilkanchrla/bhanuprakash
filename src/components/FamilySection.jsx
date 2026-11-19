import React from 'react';
import { KamadhenuIcon, KalashIcon, TirunamamIcon } from './TempleIcons';
import { Heart, Users, MapPin, Building, Sparkles } from 'lucide-react';

export const FamilySection = ({ isTelugu }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#faf6ee] border-t border-[#d4af37]/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Kamadhenu Icon */}
        <div className="flex justify-center mb-4">
          <KamadhenuIcon className="w-24 h-16" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#aa771c] block">
          {isTelugu ? 'కార్యనిర్వాహకులు & కుటుంబ సమక్షం' : 'With Heartfelt Blessings From'}
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#680b1e] mt-1 mb-8">
          {isTelugu ? 'మిట్టపల్లి మరియు ముమ్మనేని వంశస్తులు' : 'Mittapalli & Mummaneni Families'}
        </h2>

        {/* Two Family Branches Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-10">
          
          {/* Groom's Family */}
          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              {isTelugu ? 'వరుని కుటుంబం' : 'Groom’s Family'}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#680b1e] mt-2">
              Smt M. Manjula & Sri M. Subramanyam Reddy
            </h3>
            <span className="text-xs text-stone-600 block mt-0.5">(Indian Bank)</span>
            <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#881329] shrink-0" />
                <span>Chavatagunta, Vedurukuppam Mandal, Chittoor District</span>
              </p>
              <p className="text-[11px] text-[#aa771c] font-medium font-telugu">
                {isTelugu ? 'చవటగుంట గ్రామం, వేదురుకుప్పం మండలం, చిత్తూరు జిల్లా' : 'Mittapalli Vari Family'}
              </p>
            </div>
          </div>

          {/* Bride's Family */}
          <div className="p-6 rounded-3xl bg-white border border-rose-200/80 shadow-md">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
              {isTelugu ? 'వధువు కుటుంబం' : 'Bride’s Family'}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#680b1e] mt-2">
              Smt M. Hymavathi & Late Mummaneni Krishnappa
            </h3>
            <span className="text-xs text-stone-600 block mt-0.5 font-telugu">
              {isTelugu ? 'కీ.శే. శ్రీ ముమ్మనేని కృష్ణప్ప గారి దివ్యాశీస్సులతో' : 'With Divine Heavenly Blessings'}
            </span>
            <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#881329] shrink-0" />
                <span>Peddakammavaripalli Village, Puttaparthi Mandal, Sri Sathya Sai District</span>
              </p>
              <p className="text-[11px] text-[#aa771c] font-medium font-telugu">
                {isTelugu ? 'పెద్దకమ్మవారిపల్లి గ్రామం, పుట్టపర్తి మండలం, శ్రీ సత్యసాయి జిల్లా' : 'Mummaneni Vari Family'}
              </p>
            </div>
          </div>

        </div>

        {/* Best Compliments Footer Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border-2 border-[#d4af37] shadow-sm max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-serif font-bold text-[#680b1e] uppercase tracking-wider">
            {isTelugu ? 'కార్యనిర్వాహకులు:' : 'With Best Compliments From:'}
          </p>
          <p className="font-serif text-base sm:text-lg text-stone-900 font-semibold mt-1">
            Mittapalli Vari Family, Friends & Relatives
          </p>
          <p className="font-telugu text-xs sm:text-sm text-[#aa771c] font-medium mt-0.5">
            మిట్టపల్లివారి కుటుంబ సభ్యులు & బంధుమిత్రులు
          </p>
        </div>

      </div>
    </section>
  );
};

