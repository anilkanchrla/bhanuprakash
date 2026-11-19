import React from 'react';
import { 
  TirunamamIcon, 
  TempleGopuramIcon, 
  KalashIcon, 
  DiyaLampIcon, 
  GaneshaIcon, 
  LotusIcon,
  ToranGarland 
} from './TempleIcons';
import { Calendar, Clock, MapPin, Heart, Sparkles, ChevronDown } from 'lucide-react';

export const Hero = ({ isTelugu, onOpenRsvp }) => {
  return (
    <section className="relative min-h-screen pt-20 pb-16 flex flex-col justify-between overflow-hidden temple-motif-bg">
      {/* Decorative Traditional Toran at top */}
      <div className="absolute top-16 left-0 right-0 z-10 pointer-events-none">
        <ToranGarland />
      </div>

      {/* Background Temple Ambience Aura */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-100/40 via-transparent to-transparent pointer-events-none" />

      {/* Floating Side Gopurams (Visual homage to the invitation card's pillars) */}
      <div className="hidden lg:block absolute left-4 top-24 bottom-12 w-28 opacity-35 pointer-events-none">
        <TempleGopuramIcon className="w-full h-auto text-[#680b1e]" />
        <div className="mt-8 flex justify-center">
          <DiyaLampIcon className="w-12 h-20" isLit={true} />
        </div>
      </div>
      <div className="hidden lg:block absolute right-4 top-24 bottom-12 w-28 opacity-35 pointer-events-none">
        <TempleGopuramIcon className="w-full h-auto text-[#680b1e]" />
        <div className="mt-8 flex justify-center">
          <DiyaLampIcon className="w-12 h-20" isLit={true} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20 my-auto">
        
        {/* Lord Ganesha & Sacred Blessings Banner */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="relative mb-2">
            <GaneshaIcon className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md hover:scale-105 transition-transform" />
            <div className="absolute -inset-1 rounded-full bg-amber-400/20 blur-sm -z-10 animate-pulse"></div>
          </div>
          
          {/* Srirasthu Subhamasthu Kalyanamasthu */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-[#d4af37]/70 shadow-sm">
            <span className="text-[#881329] font-bold text-xs sm:text-sm font-telugu tracking-wider">
              {isTelugu ? '|| శ్రీరస్తు • శుభమస్తు • కళ్యాణమస్తు ||' : 'Srirasthu • Subhamasthu • Kalyanamasthu'}
            </span>
          </div>
        </div>

        {/* Traditional Venkateswara Sloka with Golden Styling */}
        <div className="max-w-2xl mx-auto my-3 p-3 rounded-xl bg-gradient-to-b from-[#680b1e] to-[#470511] text-[#f9e79f] border-2 border-[#d4af37] shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-shimmer opacity-20"></div>
          <div className="flex items-center justify-center gap-2 mb-1 opacity-90">
            <TirunamamIcon className="w-12 h-7" />
          </div>
          <p className="font-telugu text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-amber-100 font-medium">
            "కళ్యాణాద్భుత గాత్రాయ కామితార్థ ప్రదాయినే |<br className="hidden sm:inline" />
            శ్రీమద్ వేంకటనాథాయ శ్రీనివాసాయ మంగళమ్ ||"
          </p>
          <p className="text-[11px] sm:text-xs text-amber-300/90 font-serif italic mt-1">
            (Salutations to Lord Srinivasa, whose divine form bestows all auspicious desires and eternal grace)
          </p>
        </div>

        {/* Invitation Title */}
        <div className="my-4">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#aa771c] block">
            {isTelugu ? 'మిట్టపల్లి వారి వివాహ ఆహ్వాన పత్రిక' : 'Mittapalli Vari Wedding Invitation'}
          </span>
          <h2 className="font-greatvibes text-3xl sm:text-4xl md:text-5xl text-[#881329] mt-1">
            Kalyana Mahotsavam
          </h2>
        </div>

        {/* Royal Couple Portrait Centerpiece */}
        <div className="my-6 flex justify-center">
          <div className="relative group">
            {/* Soft gold aura */}
            <div className="absolute -inset-2.5 rounded-[38px] bg-gradient-to-r from-[#d4af37] via-amber-200 to-[#aa771c] opacity-60 blur-md group-hover:opacity-90 transition-all duration-500"></div>
            
            {/* Ornate Royal Frame */}
            <div className="relative w-56 h-76 sm:w-68 sm:h-92 md:w-72 md:h-96 rounded-[34px] p-2.5 bg-gradient-to-b from-[#f9e79f] via-[#d4af37] to-[#aa771c] shadow-[0_15px_40px_rgba(104,11,30,0.3)] border border-amber-100">
              <div className="w-full h-full rounded-[26px] overflow-hidden bg-stone-900 relative">
                <img
                  src="/couple-photo.jpg"
                  alt="Bhanu Prakash & Anusha"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#470511]/95 via-[#470511]/40 to-transparent pt-8 pb-3 px-3 text-center">
                  <span className="font-greatvibes text-2xl sm:text-3xl text-[#f9e79f] drop-shadow-md block">
                    Bhanu Prakash & Anusha
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-amber-200 font-serif tracking-wider uppercase block mt-0.5">
                    {isTelugu ? 'పరిణయ మహోత్సవం • 29 నవంబర్ 2026' : 'Auspicious Wedding • 29 November 2026'}
                  </span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Shimmers */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#680b1e] border-2 border-[#d4af37] flex items-center justify-center text-amber-300 shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#680b1e] border-2 border-[#d4af37] flex items-center justify-center text-amber-300 shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Royal Bride & Groom Names Showcase */}
        <div className="relative py-4 px-3 sm:px-8 my-4 rounded-3xl bg-white/80 backdrop-blur-md border border-[#d4af37]/50 shadow-2xl">
          {/* Subtle ornate corner flourishes */}
          <div className="absolute top-2 left-2 text-[#d4af37] text-xl font-serif">❧</div>
          <div className="absolute top-2 right-2 text-[#d4af37] text-xl font-serif">☙</div>
          <div className="absolute bottom-2 left-2 text-[#d4af37] text-xl font-serif">❧</div>
          <div className="absolute bottom-2 right-2 text-[#d4af37] text-xl font-serif">☙</div>

          <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4 py-2">
            
            {/* Groom's Column */}
            <div className="md:col-span-5 text-center md:text-right">
              <span className="text-[11px] font-semibold text-amber-800 tracking-wider uppercase block">
                {isTelugu ? 'చిరకాల సుఖీభవ • వరుడు' : 'Chi. Groom'}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#680b1e] mt-1 leading-tight">
                M. Bhanu Prakash
                <span className="block text-xs sm:text-sm font-sans font-medium text-stone-600 mt-0.5">B.Tech.</span>
              </h1>
              <p className="text-xs sm:text-sm text-stone-700 font-medium mt-1">
                Software Engineer, Bangalore
              </p>
              <p className="text-[11px] text-stone-500 mt-1">
                {isTelugu ? 'శ్రీమతి ఎం. మంజుల & శ్రీ ఎం. సుబ్రమణ్యం రెడ్డి గారి సుపుత్రుడు' : 'Son of Smt M. Manjula & Sri M. Subramanyam Reddy'}
              </p>
              <p className="text-[10px] text-stone-400">
                (Indian Bank), Vedurukuppam, Chittoor
              </p>
            </div>

            {/* Sacred Lotus & Knot Centerpiece */}
            <div className="md:col-span-1 flex flex-col items-center justify-center my-2 md:my-0">
              <div className="relative">
                <LotusIcon className="w-12 h-10 animate-float-slow" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-200 to-rose-200 flex items-center justify-center shadow-inner -mt-3 mx-auto border border-[#d4af37]">
                  <Heart className="w-4 h-4 text-[#881329] fill-rose-600 animate-pulse" />
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#aa771c] font-telugu mt-1">
                {isTelugu ? 'పరిణయం' : 'Weds'}
              </span>
            </div>

            {/* Bride's Column */}
            <div className="md:col-span-5 text-center md:text-left">
              <span className="text-[11px] font-semibold text-amber-800 tracking-wider uppercase block">
                {isTelugu ? 'చి|| ల|| సౌ|| • వధువు' : 'Chi.La.Sou. Bride'}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#680b1e] mt-1 leading-tight">
                Anusha
                <span className="block text-xs sm:text-sm font-sans font-medium text-stone-600 mt-0.5">B.Tech.</span>
              </h1>
              <p className="text-xs sm:text-sm text-stone-700 font-medium mt-1">
                Software Engineer, Bangalore
              </p>
              <p className="text-[11px] text-stone-500 mt-1">
                {isTelugu ? 'శ్రీమతి ఎం. హైమావతి & కీ.శే. శ్రీ ముమ్మనేని కృష్ణప్ప గార్ల ఏకైక కుమార్తె' : 'Only Daughter of Smt M. Hymavathi & Late Mummaneni Krishnappa'}
              </p>
              <p className="text-[10px] text-stone-400">
                Peddakammavaripalli, Puttaparthi
              </p>
            </div>
          </div>
        </div>

        {/* Auspicious Muhurtham Highlight Card */}
        <div className="max-w-xl mx-auto my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-amber-100 border-2 border-[#d4af37] shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#881329]">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <h3 className="font-serif font-bold text-sm sm:text-base tracking-wide uppercase">
              {isTelugu ? 'శుభ ముహూర్తం' : 'Auspicious Muhurtham'}
            </h3>
            <Sparkles className="w-4 h-4 text-amber-600" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-stone-800 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 font-semibold">
              <Calendar className="w-4 h-4 text-[#881329]" />
              <span>29 November 2026 (Sunday)</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold">
              <Clock className="w-4 h-4 text-[#881329]" />
              <span>08:00 AM - 08:45 AM (Dhanassu Lagnam)</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-2 text-stone-700 text-xs font-medium">
            <MapPin className="w-4 h-4 text-[#aa771c] shrink-0" />
            <span>Sai Aramam Function Hall, Ganesh Circle, Puttaparthi</span>
          </div>

          <p className="text-[11px] text-amber-900/80 font-telugu mt-1.5">
            {isTelugu ? 'స్వస్తిశ్రీ పరాభవ నామ సం|| కార్తీక మాసం 29.11.2026 ఆదివారం' : 'Swasti Sri Parabhava Nama Samvatsara, Karthika Masam'}
          </p>
        </div>

        {/* Action CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
          <button
            onClick={onOpenRsvp}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#680b1e] via-[#881329] to-[#680b1e] text-[#f9e79f] font-serif font-semibold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border border-[#d4af37]"
          >
            {isTelugu ? 'కళ్యాణానికి హాజరవుతాను (RSVP)' : 'Accept Invitation & Bless'}
          </button>
          
          <a
            href="#events"
            className="px-6 py-3 rounded-full bg-white/90 hover:bg-white text-[#680b1e] font-serif font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all border border-[#d4af37]/60 hover:scale-105"
          >
            {isTelugu ? 'వివాహ వేడుకల వివరాలు' : 'View Schedule & Venues'}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center justify-center text-stone-400 animate-bounce">
          <span className="text-[11px] font-medium tracking-widest uppercase text-stone-500 mb-1">
            {isTelugu ? 'క్రిందికి స్క్రోల్ చేయండి' : 'Scroll Down'}
          </span>
          <ChevronDown className="w-4 h-4 text-[#aa771c]" />
        </div>

      </div>
    </section>
  );
};

