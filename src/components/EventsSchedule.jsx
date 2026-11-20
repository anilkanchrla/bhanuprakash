import React from 'react';
import { Calendar, Clock, MapPin, Navigation, Sparkles, Utensils, Music, Heart, Sun } from 'lucide-react';
import { TempleGopuramIcon, DiyaLampIcon, KalashIcon } from './TempleIcons';
import { divineAudio } from '../utils/audioSynth';

export const EventsSchedule = ({ isTelugu }) => {
  const events = [
    {
      id: 1,
      category: isTelugu ? 'మంగళస్నానం & నలుగు వేడుక' : 'Haldi & Nalugu Ceremony',
      title: isTelugu ? 'పసుపు & నలుగు వేడుక' : 'Haldi & Nalugu Ceremony',
      date: '27 November 2026',
      day: isTelugu ? 'శుక్రవారము' : 'Friday',
      time: isTelugu ? 'ఉదయం 09.00 గం||ల నుండి' : 'From 09:00 AM onwards',
      venue: 'P.R.C. Convention Centre',
      address: 'G.T. Kandriga, Vedurukuppam Mandal, Chittoor Dist.',
      mapQuery: 'PRC+Convention+Centre+Vedurukuppam+Chittoor',
      dressCode: isTelugu ? 'పసుపు రంగు సాంప్రదాయ వస్త్రాలు' : 'Haldi Yellow & Traditional Festive Wear',
      highlight: isTelugu ? 'వధూవరులకు పసుపు, సుగంధ నలుగు రాసి పెద్దల ఆశీస్సులు అందించే మంగళప్రదమైన వేడుక' : 'Joyous ritual of applying sacred turmeric, fragrant oils, and showering auspicious blessings',
      tagColor: 'from-amber-500 to-yellow-600',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      calendarDate: '20261127T033000Z/20261127T073000Z'
    },
    {
      id: 2,
      category: isTelugu ? 'సంగీత్ & ప్రీ-వెడ్డింగ్ రిసెప్షన్' : 'Wedding Eve Reception & Dinner',
      title: isTelugu ? 'విందు & వినోదం' : 'Reception & Dinner',
      date: '28 November 2026',
      day: isTelugu ? 'శనివారము' : 'Saturday',
      time: isTelugu ? 'రాత్రి 7.15 గం||ల నుండి' : 'From 7:15 PM onwards',
      venue: 'Sai Aramam Function Hall',
      address: 'Ganesh Circle, Main Road, Puttaparthi, Sri Sathya Sai Dist.',
      mapQuery: 'Sai+Aramam+Function+Hall+Ganesh+Circle+Puttaparthi',
      dressCode: isTelugu ? 'సాంప్రదాయ దుస్తులు / ఇండో-వెస్ట్రన్' : 'Festive Indian & Traditional Attire',
      highlight: isTelugu ? 'వధూవరుల సంగీత నృత్య వేడుక మరియు ఘనమైన విందు' : 'An evening of music, celebrations, and delightful South Indian feast',
      tagColor: 'from-amber-600 to-amber-800',
      icon: <Music className="w-5 h-5 text-amber-500" />,
      calendarDate: '20261128T134500Z/20261128T173000Z'
    },
    {
      id: 3,
      category: isTelugu ? 'ప్రధాన కళ్యాణ వేడుక' : 'The Auspicious Wedding Ceremony',
      title: isTelugu ? 'శుభ ముహూర్తం (కళ్యాణ వేదిక)' : 'Sacred Muhurtham',
      date: '29 November 2026',
      day: isTelugu ? 'ఆదివారము' : 'Sunday',
      time: isTelugu ? 'ఉదయం 8.00 - 8.45 ని||ల లోపు (ధనుస్సు లగ్నం)' : 'Between 8:00 AM - 8:45 AM (Dhanassu Lagnam)',
      venue: 'Sai Aramam Function Hall',
      address: 'Ganesh Circle, Main Road, Puttaparthi, Sri Sathya Sai Dist.',
      mapQuery: 'Sai+Aramam+Function+Hall+Ganesh+Circle+Puttaparthi',
      dressCode: isTelugu ? 'పట్టు చీరలు & పట్టు పంచెలు' : 'Traditional South Indian Pattu Sarees & Dhotis',
      highlight: isTelugu ? 'జీలకర్ర బెల్లం, మంగళసూత్ర ధారణ, తాళంబ్రాలు మరియు సప్తపది' : 'Vedic Chants, Jeelakarra-Bellam, Mangalasutra Dharana & Talambralu',
      tagColor: 'from-[#680b1e] to-[#991b1b]',
      isPrimary: true,
      icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />,
      calendarDate: '20261129T023000Z/20261129T063000Z'
    },
    {
      id: 4,
      category: isTelugu ? 'వరపూజ & నూతన దంపతుల ఆహ్వానం' : 'Bride Groom’s Grand Reception',
      title: isTelugu ? 'వరుడు రిసెప్షన్ & విందు' : 'Groom’s Reception & Banquet',
      date: '06 December 2026',
      day: isTelugu ? 'ఆదివారము' : 'Sunday',
      time: isTelugu ? 'ఉదయం 11.00 గం||ల నుండి' : 'From 11:00 AM onwards',
      venue: 'P.R.C. Convention Centre',
      address: 'G.T. Kandriga, Vedurukuppam Mandal, Chittoor Dist.',
      mapQuery: 'PRC+Convention+Centre+Vedurukuppam+Chittoor',
      dressCode: isTelugu ? 'రాయల్ ట్రెడిషనల్ / రాయల్ పట్టు' : 'Grand Traditional / Royal Ethnic',
      highlight: isTelugu ? 'మిట్టపల్లి వారి స్వగ్రామంలో నూతన వధూవరుల స్వాగతం & భోజన విందు' : 'Welcoming the bride to the Mittapalli family home with royal feast',
      tagColor: 'from-emerald-700 to-teal-800',
      icon: <Utensils className="w-5 h-5 text-emerald-600" />,
      calendarDate: '20261206T053000Z/20261206T103000Z'
    }
  ];

  const handleOpenMap = (query) => {
    // When routing to maps in another tab, pause song and queue autoplay for when user returns
    divineAudio.prepareForExternalRouting();
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleAddToCalendar = (event) => {
    divineAudio.prepareForExternalRouting();
    const title = encodeURIComponent(`${event.title} - Bhanu Prakash & Anusha`);
    const details = encodeURIComponent(`${event.highlight}. Venue: ${event.venue}, ${event.address}`);
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event.calendarDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section id="events" className="py-16 sm:py-24 bg-[#160207] relative overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a0612]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DiyaLampIcon className="w-5 h-8" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-300">
              {isTelugu ? 'కార్యక్రమ వివరాలు' : 'Sacred Itinerary'}
            </span>
            <DiyaLampIcon className="w-5 h-8" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f]">
            {isTelugu ? 'శుభ ముహూర్తం & వివాహ వేడుకలు' : 'Wedding Celebrations & Venues'}
          </h2>
          <p className="font-serif italic text-amber-200/80 text-sm sm:text-base mt-2">
            {isTelugu
              ? 'మీ ఆత్మీయ సమక్షంలో, వేద మంత్రాల సాక్షిగా జరుగనున్న శుభకార్యాలు.'
              : 'Join us to bless the couple with your esteemed presence and good wishes.'}
          </p>
        </div>

        {/* Events Cards Grid (Responsive 4-card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border-2 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] royal-card ${
                event.isPrimary
                  ? 'border-[#d4af37] ring-4 ring-[#d4af37]/35 relative'
                  : 'border-[#d4af37]/50 hover:border-[#d4af37]'
              }`}
            >
              {/* Primary Event Ribbon Banner */}
              {event.isPrimary && (
                <div className="bg-gradient-to-r from-[#b8860b] via-[#f9e79f] to-[#aa771c] text-[#35030d] font-bold text-[11px] uppercase tracking-widest text-center py-1.5 shadow-sm gleam-overlay">
                  ★ {isTelugu ? 'ప్రధాన ముహూర్తం • వేద వేడుక' : 'Principal Muhurtham'} ★
                </div>
              )}

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Event Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-amber-200 bg-[#380612] px-2.5 py-1 rounded-full border border-[#d4af37]/50">
                      {event.category}
                    </span>
                    <div className="p-1.5 rounded-full bg-[#350510] border border-[#d4af37]/40 shadow-inner">
                      {event.icon}
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] mb-1">
                    {event.title}
                  </h3>

                  {/* Date & Day Banner */}
                  <div className="my-3 p-2.5 rounded-2xl bg-[#340612]/80 border border-[#d4af37]/40">
                    <div className="flex items-center gap-1.5 text-amber-100 font-bold text-xs sm:text-sm">
                      <Calendar className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>{event.date}</span>
                      <span className="text-[11px] font-normal text-amber-200/80">({event.day})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-200 text-xs font-semibold mt-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="space-y-1.5 text-xs text-amber-100 mb-3">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-amber-50">{event.venue}</h4>
                        <p className="text-amber-200/70 text-[11px] mt-0.5 leading-snug">{event.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Highlight Quote */}
                  <p className="text-[11px] text-amber-200/90 italic border-l-2 border-[#d4af37] pl-2.5 py-1.5 bg-[#20030a] rounded-r-lg mb-3 leading-relaxed">
                    {event.highlight}
                  </p>

                  {/* Dress Code Tip */}
                  <div className="text-[11px] text-amber-300/80 font-medium">
                    <span className="text-amber-400 font-bold">{isTelugu ? 'దుస్తులు:' : 'Attire:'}</span> {event.dressCode}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-3.5 bg-[#140206] border-t border-[#d4af37]/30 flex items-center gap-2">
                <button
                  onClick={() => handleOpenMap(event.mapQuery)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-gradient-to-r from-[#680b1e] to-[#881329] hover:from-[#881329] hover:to-[#a11833] text-[#f9e79f] text-[11px] font-bold shadow hover:shadow-md transition-all hover:scale-[1.02] border border-[#d4af37]/50"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isTelugu ? 'మ్యాప్' : 'Maps'}</span>
                </button>

                <button
                  onClick={() => handleAddToCalendar(event)}
                  className="p-2 rounded-xl bg-[#26040d] border border-[#d4af37]/50 text-amber-200 hover:text-white hover:bg-[#3d0817] shadow-sm transition-all"
                  title="Add to Calendar"
                >
                  <Calendar className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
