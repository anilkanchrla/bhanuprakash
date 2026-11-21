import React from 'react';
import { KamadhenuIcon } from './TempleIcons';
import { MapPin } from 'lucide-react';

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
          {isTelugu ? 'మిట్టపల్లి వంశస్తుల వివాహ ఆహ్వానం' : 'Mittapalli Family Wedding Invitation'}
        </h2>

        {/* Groom's Family / Parents Card */}
        <div className="max-w-xl mx-auto text-left mb-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border-2 border-[#d4af37]/80 shadow-2xl royal-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-[#3a0612] px-3 py-1 rounded-full border border-[#d4af37]/60">
                  {isTelugu ? 'వరుని తల్లిదండ్రులు' : 'Groom’s Parents'}
                </span>
                <span className="text-xs font-serif font-bold text-[#f9e79f] tracking-wider uppercase px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 shadow-sm">
                  {isTelugu ? 'ఆహ్వానించువారు • Invited by' : 'Invited by'}
                </span>
              </div>

              {/* Groom's Parents Photo Showcase */}
              <div className="relative mb-5 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-2xl group max-h-72 sm:max-h-80">
                <img
                  src="/grooms-parents.jpg"
                  alt="Smt M. Manjula & Sri M. Subramanyam Reddy"
                  className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#140206] via-[#140206]/85 to-transparent pt-8 pb-3 px-4 text-center">
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#f9e79f] tracking-wider block">
                    {isTelugu ? 'ఆహ్వానించువారు' : 'Invited by'}
                  </span>
                  <span className="text-xs sm:text-sm text-amber-200 font-serif block mt-0.5">
                    Smt M. Manjula & Sri M. Subramanyam Reddy
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
                Smt M. Manjula & Sri M. Subramanyam Reddy
              </h3>
              <span className="text-xs sm:text-sm text-amber-200/90 block mt-0.5 font-medium">(Indian Bank)</span>
            </div>

            <div className="mt-5 pt-4 border-t border-[#d4af37]/30 text-xs sm:text-sm text-amber-100/90 space-y-1.5">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Chavatagunta, Vedurukuppam Mandal</span>
              </p>
              <p className="text-xs sm:text-sm text-amber-300 font-medium font-telugu">
                {isTelugu ? 'చవటగుంట గ్రామం, వేదురుకుప్పం మండలం' : 'Mittapalli Vari Family'}
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

