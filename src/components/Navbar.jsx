import React, { useState, useEffect } from 'react';
import { TirunamamIcon } from './TempleIcons';
import { Sparkles, Menu, X, Volume2, VolumeX, Languages } from 'lucide-react';
import { divineAudio } from '../utils/audioSynth';

export const Navbar = ({ isTelugu, setIsTelugu, onOpenRsvp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = divineAudio.subscribe((active) => {
      setIsPlaying(active);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const toggleMusic = () => {
    divineAudio.toggle();
  };

  const navLinks = [
    { name: isTelugu ? 'పరిచయం' : 'Our Story', href: '#story' },
    { name: isTelugu ? 'వధువు కోసం లేఖ' : 'For Anusha', href: '#for-anusha' },
    { name: isTelugu ? 'కార్యక్రమాలు' : 'Events & Venues', href: '#events' },
    { name: isTelugu ? 'సంప్రదాయ వేడుకలు' : 'Sacred Rituals', href: '#rituals' },
    { name: isTelugu ? 'శుభాకాంక్షలు' : 'Blessings Wall', href: '#wishes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fffdf7]/95 backdrop-blur-md shadow-md py-2 border-b border-[#d4af37]/40'
          : 'bg-[#fffdf7]/80 backdrop-blur-sm py-3 border-b border-[#d4af37]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <TirunamamIcon className="w-8 h-6 text-[#881329]" />
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-[#680b1e] group-hover:text-[#881329] transition-colors">
              Bhanu Prakash & Anusha
            </span>
            <span className="text-[9px] tracking-widest uppercase font-semibold text-[#aa771c]">
              {isTelugu ? 'కళ్యాణ మహోత్సవం' : 'Kalyanamasthu • 29 Nov 2026'}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-700 hover:text-[#881329] font-medium text-xs lg:text-sm tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Telugu / English Language Switch */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#d4af37] text-stone-800 text-xs font-semibold hover:bg-amber-50 shadow-sm transition-all"
            title="Toggle Language"
          >
            <Languages className="w-3.5 h-3.5 text-[#881329]" />
            <span>{isTelugu ? 'English' : 'తెలుగు'}</span>
          </button>

          {/* Music Mute / Unmute Button */}
          <button
            onClick={toggleMusic}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm transition-all ${
              isPlaying
                ? 'bg-[#680b1e] text-[#f9e79f] border-[#d4af37]'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
            title="Toggle Wedding Song"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span className="text-[11px]">Music Playing</span>
                <span className="flex space-x-0.5 items-end h-2.5">
                  <span className="w-0.5 h-2 bg-amber-300 animate-pulse"></span>
                  <span className="w-0.5 h-1.5 bg-amber-300 animate-pulse delay-75"></span>
                  <span className="w-0.5 h-2.5 bg-amber-300 animate-pulse delay-150"></span>
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-500" />
                <span className="text-[11px]">Muted</span>
              </>
            )}
          </button>
          
          {/* RSVP Button */}
          <button
            onClick={onOpenRsvp}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#680b1e] to-[#881329] text-[#f9e79f] text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg hover:from-[#881329] hover:to-[#a11833] transition-all transform hover:scale-105 border border-[#d4af37]/60"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{isTelugu ? 'ఆశీర్వదించండి' : 'RSVP'}</span>
          </button>
        </nav>

        {/* Mobile Header Controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Music Toggle */}
          <button
            onClick={toggleMusic}
            className={`p-1.5 rounded-full border shadow-sm transition-colors ${
              isPlaying ? 'bg-[#680b1e] text-[#f9e79f] border-[#d4af37]' : 'bg-white text-stone-600 border-stone-300'
            }`}
            aria-label="Toggle Wedding Music"
          >
            {isPlaying ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Language Toggle */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className="px-2.5 py-1 rounded-full bg-white border border-[#d4af37] text-stone-800 text-[11px] font-semibold"
          >
            {isTelugu ? 'ENG' : 'తెలుగు'}
          </button>

          {/* Mobile RSVP */}
          <button
            onClick={onOpenRsvp}
            className="px-3 py-1 rounded-full bg-[#680b1e] text-[#f9e79f] text-[11px] font-semibold"
          >
            RSVP
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#680b1e] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fffdf7] border-b border-[#d4af37] px-6 py-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-800 font-medium py-1.5 border-b border-stone-100 hover:text-[#881329] text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
