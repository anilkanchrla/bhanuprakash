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
          ? 'bg-[#1a0207]/95 backdrop-blur-md shadow-2xl py-2 border-b border-[#d4af37]/50'
          : 'bg-[#140206]/85 backdrop-blur-sm py-2 sm:py-2.5 border-b border-[#d4af37]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group shrink min-w-0">
          <TirunamamIcon className="w-7 h-5 sm:w-8 sm:h-6 text-[#d4af37] shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f] group-hover:brightness-110 transition-all whitespace-nowrap leading-tight">
              Bhanu Prakash & Anusha
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-widest uppercase font-semibold text-amber-300/80 truncate">
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
              className="text-amber-100/85 hover:text-[#f9e79f] font-medium text-xs lg:text-sm tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Telugu / English Language Switch */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a040d] border border-[#d4af37]/70 text-[#f9e79f] text-xs font-semibold hover:bg-[#3d0715] shadow-sm transition-all"
            title="Toggle Language"
          >
            <Languages className="w-3.5 h-3.5 text-amber-300" />
            <span>{isTelugu ? 'English' : 'తెలుగు'}</span>
          </button>

          {/* Music Mute / Unmute Button */}
          <button
            onClick={toggleMusic}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm transition-all ${
              isPlaying
                ? 'bg-gradient-to-r from-[#680b1e] to-[#881329] text-[#f9e79f] border-[#d4af37]'
                : 'bg-[#22030b] text-amber-200/80 border-[#d4af37]/40 hover:bg-[#2e050f]'
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
                <VolumeX className="w-3.5 h-3.5 text-amber-300/60" />
                <span className="text-[11px]">Muted</span>
              </>
            )}
          </button>
          
          {/* RSVP Button */}
          <button
            onClick={onOpenRsvp}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all transform border border-amber-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#35030d]" />
            <span>{isTelugu ? 'ఆశీర్వదించండి' : 'RSVP'}</span>
          </button>
        </nav>

        {/* Mobile Header Controls */}
        <div className="md:hidden flex items-center gap-1.5 shrink-0">
          {/* Mobile Music Toggle */}
          <button
            onClick={toggleMusic}
            className={`p-1.5 rounded-full border shadow-sm transition-colors ${
              isPlaying ? 'bg-[#680b1e] text-[#f9e79f] border-[#d4af37]' : 'bg-[#22030b] text-amber-200/80 border-[#d4af37]/40'
            }`}
            aria-label="Toggle Wedding Music"
          >
            {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-300" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Language Toggle */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className="px-2 py-1 rounded-full bg-[#2a040d] border border-[#d4af37]/70 text-[#f9e79f] text-[10px] font-semibold"
          >
            {isTelugu ? 'ENG' : 'తెలుగు'}
          </button>

          {/* Mobile RSVP */}
          <button
            onClick={onOpenRsvp}
            className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] text-[10px] font-bold"
          >
            RSVP
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-amber-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c0208]/98 border-b border-[#d4af37]/60 px-6 py-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-amber-100 font-medium py-1.5 border-b border-[#d4af37]/20 hover:text-[#f9e79f] text-sm"
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
