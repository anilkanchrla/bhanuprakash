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
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
