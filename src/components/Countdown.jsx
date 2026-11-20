import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { KalashIcon, DiyaLampIcon } from './TempleIcons';
import { divineAudio } from '../utils/audioSynth';

export const Countdown = ({ isTelugu }) => {
  // Wedding Muhurtham Date: November 29, 2026 at 08:00:00 AM IST
  const targetDate = new Date('2026-11-29T08:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const addToCalendar = () => {
    divineAudio.prepareForExternalRouting();
    const title = encodeURIComponent("Bhanu Prakash & Anusha's Kalyanam");
    const details = encodeURIComponent("Auspicious wedding of M. Bhanu Prakash & Anusha. Venue: Sai Aramam Function Hall, Ganesh Circle, Puttaparthi.");
    const location = encodeURIComponent("Sai Aramam Function Hall, Ganesh Circle, Main Road, Puttaparthi, Sri Sathya Sai Dist.");
    // 20261129T023000Z to 20261129T063000Z (UTC corresponding to 8 AM - 12 PM IST)
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261129T023000Z/20261129T063000Z&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  const timerItems = [
    { label: isTelugu ? 'రోజులు' : 'Days', value: timeLeft.days },
    { label: isTelugu ? 'గంటలు' : 'Hours', value: timeLeft.hours },
    { label: isTelugu ? 'నిమిషాలు' : 'Minutes', value: timeLeft.minutes },
    { label: isTelugu ? 'సెకన్లు' : 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-[#140206] via-[#24040c] to-[#160207] text-white relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <DiyaLampIcon className="w-6 h-10" />
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f] tracking-wide">
            {isTelugu ? 'కళ్యాణ ఘడియల లెక్కింపు' : 'Counting Down to the Sacred Muhurtham'}
          </h2>
          <DiyaLampIcon className="w-6 h-10" />
        </div>

        <p className="text-xs sm:text-sm text-amber-200/90 font-serif italic max-w-xl mx-auto mb-8">
          {isTelugu 
            ? 'రెండు మనసులు, ఏడు అడుగుల బంధంతో ఏకమయ్యే శుభవేళ...'
            : 'Every passing heartbeat brings us closer to the sacred Saptapadi and eternal union.'}
        </p>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {timerItems.map((item, idx) => (
            <div
              key={idx}
              className="relative p-4 sm:p-5 rounded-2xl bg-[#1e030a]/80 backdrop-blur-md border border-[#d4af37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center group hover:border-[#f9e79f] transition-all transform hover:-translate-y-1.5 royal-card gleam-overlay"
            >
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fff] via-[#f9e79f] to-[#d4af37] drop-shadow-md">
                {String(item.value).padStart(2, '0')}
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-200 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar reminder button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={addToCalendar}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] font-bold text-xs sm:text-sm shadow-lg hover:shadow-amber-400/40 transition-all transform hover:scale-105 gleam-overlay royal-card border border-amber-200"
          >
            <Calendar className="w-4 h-4 text-[#35030d]" />
            <span>{isTelugu ? 'క్యాలెండర్‌లో గుర్తుంచుకోండి (+Google Calendar)' : 'Add to Google Calendar'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};

