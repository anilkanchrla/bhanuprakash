import React from 'react';
import { TirunamamIcon } from './TempleIcons';
import { Heart, Mail, Code, ArrowUp } from 'lucide-react';
import { divineAudio } from '../utils/audioSynth';

export const Footer = ({ isTelugu }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = (phone, name) => {
    // Pause song while opening WhatsApp in new tab and auto-resume on return
    divineAudio.prepareForExternalRouting();
    const message = encodeURIComponent(`Hi ${name}, I saw Bhanu Prakash & Anusha's wedding website developed by Zaro Tech!`);
    window.open(`https://wa.me/91${phone}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    divineAudio.prepareForExternalRouting();
    window.open('mailto:contactzarotech@gmail.com', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-[#470511] via-[#2c030b] to-[#140105] text-white pt-14 pb-8 relative overflow-hidden">
      {/* Decorative Golden Gopuram Backdrop / Shimmer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Sacred Tirunamam */}
        <div className="flex justify-center mb-3">
          <TirunamamIcon className="w-16 h-10 text-[#f9e79f]" />
        </div>

        <p className="font-telugu text-xs sm:text-sm text-amber-200/90 tracking-wider">
          || శ్రీరస్తు • శుభమస్తు • కళ్యాణమస్తు ||
        </p>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f9e79f] mt-2 mb-1">
          M. Bhanu Prakash & Anusha
        </h3>
        
        <p className="text-xs text-amber-300/80 uppercase tracking-widest font-sans">
          29 November 2026 • Sai Aramam, Puttaparthi
        </p>

        <div className="my-6 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

        <p className="text-xs text-stone-300 font-serif italic max-w-lg mx-auto leading-relaxed">
          {isTelugu
            ? 'ఈ శుభకార్యానికి విచ్చేసి నూతన వధూవరులను నిండు మనసుతో ఆశీర్వదించవలసిందిగా కోరుచున్నాము.'
            : 'We cordially invite your esteemed presence with family on the auspicious occasion of the marriage of our children.'}
        </p>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-stone-300">
          <span>Crafted with devotion for</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span className="text-amber-200 font-medium">Bhanu Prakash & Anusha</span>
        </div>

        <button
          onClick={scrollToTop}
          className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-amber-300/40 text-[11px] font-sans text-amber-300 tracking-wider uppercase transition-all hover:scale-105"
        >
          <ArrowUp className="w-3 h-3" />
          <span>{isTelugu ? 'పైకి వెళ్ళండి' : 'Back to Top'}</span>
        </button>

        {/* ========================================================================= */}
        {/* DEVELOPER SECTION (ZARO TECH - SIDDHARTHA & ANIL) ACCORDING TO TEMPLE THEME */}
        {/* ========================================================================= */}
        <div className="mt-14 pt-10 border-t border-[#d4af37]/30 max-w-3xl mx-auto">
          
          {/* Code Diamond Emblem */}
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37]/30 to-[#aa771c]/20 border border-[#d4af37]/60 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Code className="w-5 h-5 text-[#f9e79f]" />
            </div>
          </div>

          <span className="text-[11px] uppercase tracking-[0.25em] text-amber-200/80 font-serif font-semibold block">
            Website Developed By
          </span>

          <h4 className="font-serif text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9e79f] via-[#d4af37] to-[#f9e79f] mt-1">
            Zaro Tech
          </h4>

          {/* Email Link */}
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center gap-1.5 text-xs text-amber-200/90 hover:text-amber-100 transition-colors mt-1.5 hover:underline"
          >
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>contactzarotech@gmail.com</span>
          </button>

          {/* Developer Contact Cards (Siddhartha & Anil) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-7">
            
            {/* Siddhartha (Siddhu) Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#2a040b]/90 to-[#190207]/90 border border-[#d4af37]/50 shadow-xl flex flex-col items-center justify-between hover:border-[#f9e79f] transition-all group">
              <span className="text-[10px] uppercase tracking-widest text-amber-300/70 font-semibold">
                Developer
              </span>
              <h5 className="font-serif text-base sm:text-lg font-bold text-[#f9e79f] mt-0.5 mb-3 group-hover:text-white transition-colors">
                SIDDHARTHA
              </h5>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('7997793530', 'Siddhartha')}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-green-500/40 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-green-300/40"
              >
                {/* SVG WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.15c-.24.67-1.39 1.24-1.92 1.29-.49.05-.98.1-3.21-.83-2.6-1.08-4.27-3.73-4.4-3.9-.13-.17-1.06-1.41-1.06-2.68s.67-1.89.9-2.14c.24-.25.52-.31.69-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.3.35-.43.47-.14.14-.29.3-.12.59.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.74-.86.94-1.15.2-.29.4-.24.67-.14.28.1.1.75 2.15.89 2.29.14.14.24.22.28.29.04.07.04.41-.2 1.08z"/>
                </svg>
                <span>79977 93530</span>
              </button>
            </div>

            {/* Anil Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#2a040b]/90 to-[#190207]/90 border border-[#d4af37]/50 shadow-xl flex flex-col items-center justify-between hover:border-[#f9e79f] transition-all group">
              <span className="text-[10px] uppercase tracking-widest text-amber-300/70 font-semibold">
                Developer
              </span>
              <h5 className="font-serif text-base sm:text-lg font-bold text-[#f9e79f] mt-0.5 mb-3 group-hover:text-white transition-colors">
                ANIL
              </h5>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppClick('7675957378', 'Anil')}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-green-500/40 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-green-300/40"
              >
                {/* SVG WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.15c-.24.67-1.39 1.24-1.92 1.29-.49.05-.98.1-3.21-.83-2.6-1.08-4.27-3.73-4.4-3.9-.13-.17-1.06-1.41-1.06-2.68s.67-1.89.9-2.14c.24-.25.52-.31.69-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.3.35-.43.47-.14.14-.29.3-.12.59.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.74-.86.94-1.15.2-.29.4-.24.67-.14.28.1.1.75 2.15.89 2.29.14.14.24.22.28.29.04.07.04.41-.2 1.08z"/>
                </svg>
                <span>76759 57378</span>
              </button>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-8 text-[10px] text-amber-200/50 uppercase tracking-[0.2em] font-sans">
            © 2026 ZARO TECH. ALL RIGHTS RESERVED.
          </div>

        </div>

      </div>
    </footer>
  );
};
