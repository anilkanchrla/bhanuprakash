import React from 'react';
import { Heart, Laptop, Coffee, Sparkles, Building2, MapPin, Award, Music } from 'lucide-react';
import { KamadhenuIcon, LotusIcon } from './TempleIcons';

export const CoupleStory = ({ isTelugu }) => {
  const timeline = [
    {
      year: 'Bangalore Connection',
      title: isTelugu ? 'బెంగళూరులో పరిచయం & ఆలోచనల కలయిక' : 'Silicon Valley of India: Where Minds Met',
      desc: isTelugu
        ? 'బెంగళూరు ఐటీ ప్రపంచంలో పనిచేస్తూ, సంప్రదాయ కుటుంబ విలువల పట్ల గౌరవంతో ఇద్దరూ ఒకరినొకరు అర్థం చేసుకున్నారు.'
        : 'Both pursuing dynamic careers at Deloitte and PwC India in Bengaluru, bonded by common roots, shared values, and mutual respect.',
      icon: <Laptop className="w-5 h-5 text-indigo-600" />,
    },
    {
      year: 'Family Concurrence',
      title: isTelugu ? 'పెద్దల నిశ్చయం & ఆశీస్సులు' : 'Elders’ Blessings & Astrological Harmony',
      desc: isTelugu
        ? 'మిట్టపల్లి మరియు ముమ్మనేని పెద్దలు జాతక అనుకూలతతో నిశ్చయించి వివాహానికి ఆమోదం తెలిపారు.'
        : 'The Mittapalli and Mummaneni families united in happiness, with the stars and elders blessing this auspicious union.',
      icon: <Award className="w-5 h-5 text-amber-600" />,
    },
    {
      year: '27 Nov 2026',
      title: isTelugu ? 'పసుపు & నలుగు వేడుక' : 'Haldi & Nalugu Ceremony',
      desc: isTelugu
        ? 'పి.ఆర్.సి. కన్వెన్షన్ హాల్, వేదురుకుప్పం నందు కుటుంబ సభ్యుల ఆత్మీయ సమక్షంలో మంగళస్నానం & నలుగు సంబరం.'
        : 'A joyful morning of sacred turmeric blessings, songs, and laughter at P.R.C. Convention Centre, Vedurukuppam.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      year: '28 Nov 2026',
      title: isTelugu ? 'విందు & వినోదం - పుట్టపర్తి' : 'Reception & Dinner - Puttaparthi',
      desc: isTelugu
        ? 'సాయి ఆరామం ఫంక్షన్ హాల్ నందు సాయంత్రం వధూవరుల సంగీత నృత్య వేడుక మరియు ఘనమైన విందు.'
        : 'An evening of music, celebrations, and delightful South Indian feast at Sai Aramam Function Hall.',
      icon: <Music className="w-5 h-5 text-amber-500" />,
    },
    {
      year: '29 Nov 2026',
      title: isTelugu ? 'శుభ ముహూర్తం - పుట్టపర్తి' : 'The Sacred Muhurtham - Puttaparthi',
      desc: isTelugu
        ? 'సాయి ఆరామం ఫంక్షన్ హాల్ నందు ధనుస్సు లగ్నమందు జీలకర్ర బెల్లం, తాళంబ్రాలు మరియు సప్తపది వేడుక.'
        : 'Taking the sacred 7 vows around the holy fire at Sai Aramam Function Hall, Ganesh Circle, Puttaparthi.',
      icon: <Sparkles className="w-5 h-5 text-rose-600" />,
    },
    {
      year: '06 Dec 2026',
      title: isTelugu ? 'వరపూజ & రిసెప్షన్' : 'Groom’s Grand Reception',
      desc: isTelugu
        ? 'వేదురుకుప్పం మండలం పి.ఆర్.సి. కన్వెన్షన్ హాల్ నందు వరుని కుటుంబ సభ్యుల ఆహ్వానంతో విందు.'
        : 'Welcoming the newly wedded couple to Chittoor at P.R.C. Convention Centre, Vedurukuppam.',
      icon: <Building2 className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="story" className="py-16 sm:py-24 bg-[#140206] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-8 bg-[#d4af37]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-300">
              {isTelugu ? 'దైవిక సంకల్పం' : 'Destined Together'}
            </span>
            <span className="h-px w-8 bg-[#d4af37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f]">
            {isTelugu ? 'వధూవరుల పరిచయం & ప్రయాణం' : 'Meet the Bride & Groom'}
          </h2>
          <p className="font-serif italic text-amber-200/80 text-sm sm:text-base mt-2">
            {isTelugu 
              ? 'సాంకేతిక నైపుణ్యం, ఆధ్యాత్మిక సంస్కారాల మేళవింపుతో కూడిన నూతన దంపతులు.'
              : 'Professionals at Deloitte and PwC India united by divine grace, family traditions, and everlasting love.'}
          </p>
        </div>

        {/* Couple Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          
          {/* Groom Card */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border-2 border-[#d4af37]/70 shadow-2xl group hover:shadow-amber-500/10 transition-all royal-card">
            <div className="absolute top-4 right-4 text-xs font-serif font-bold text-amber-300 px-3 py-1 bg-[#380612] rounded-full border border-[#d4af37]/60">
              {isTelugu ? 'వరుడు' : 'The Groom'}
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Royal Groom Monogram Crest */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#680b1e] to-[#881329] p-1.5 shadow-lg mb-4 border-2 border-[#d4af37] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-xl bg-[#35030d] flex items-center justify-center text-amber-200 shadow-inner">
                  <span className="font-serif text-4xl font-bold text-[#f9e79f]">B</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
                M. Bhanu Prakash
              </h3>
              <span className="text-xs uppercase font-semibold text-amber-300 tracking-wider mt-0.5">
                B.Tech (Deloitte Consulting Services)
              </span>

              <div className="mt-4 pt-4 border-t border-[#d4af37]/30 w-full space-y-2 text-xs sm:text-sm text-amber-100">
                <p>
                  <strong className="text-[#f9e79f] font-medium">{isTelugu ? 'తల్లిదండ్రులు:' : 'Parents:'}</strong>{' '}
                  Smt M. Manjula & Sri M. Subramanyam Reddy (Indian Bank)
                </p>
                <p className="flex items-center gap-1.5 text-amber-200/80">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Chavatagunta, Vedurukuppam Mandal, Chittoor Dist.</span>
                </p>
                <p className="italic text-amber-200/90 bg-[#24040c] p-3 rounded-xl border-l-2 border-[#d4af37] mt-3 font-serif">
                  "Anusha's pure heart and brilliant grace make every dream worth working towards. Blessed to begin our forever journey together."
                </p>
              </div>
            </div>
          </div>

          {/* Bride Card */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] border-2 border-[#d4af37]/70 shadow-2xl group hover:shadow-amber-500/10 transition-all royal-card">
            <div className="absolute top-4 right-4 text-xs font-serif font-bold text-rose-300 px-3 py-1 bg-[#380612] rounded-full border border-[#d4af37]/60">
              {isTelugu ? 'వధువు' : 'The Bride'}
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Royal Bride Monogram Crest */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#881329] to-[#be123c] p-1.5 shadow-lg mb-4 border-2 border-[#d4af37] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-xl bg-[#35030d] flex items-center justify-center text-rose-200 shadow-inner">
                  <span className="font-serif text-4xl font-bold text-rose-200">A</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
                Anusha
              </h3>
              <span className="text-xs uppercase font-semibold text-rose-300 tracking-wider mt-0.5">
                B.Tech (PwC India)
              </span>

              <div className="mt-4 pt-4 border-t border-[#d4af37]/30 w-full space-y-2 text-xs sm:text-sm text-amber-100">
                <p>
                  <strong className="text-[#f9e79f] font-medium">{isTelugu ? 'తల్లిదండ్రులు:' : 'Parents:'}</strong>{' '}
                  Smt M. Hymavathi & Late Mummaneni Krishnappa
                </p>
                <p className="flex items-center gap-1.5 text-amber-200/80">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Peddakammavaripalli Village, Puttaparthi Mandal, Sri Sathya Sai Dist.</span>
                </p>
                <p className="italic text-amber-200/90 bg-[#24040c] p-3 rounded-xl border-l-2 border-[#d4af37] mt-3 font-serif">
                  "In Bhanu Prakash, I found the most caring partner whose positivity, dedication, and affection make life truly beautiful."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Full Couple Portrait Showcase Banner */}
        <div className="mb-20 max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-[#2c050f] via-[#3a0613] to-[#24030b] p-6 sm:p-8 border-2 border-[#d4af37] shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-48 h-64 sm:w-56 sm:h-76 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4af37] shrink-0 relative group">
            <img
              src="/couple-photo.jpg"
              alt="Bhanu Prakash & Anusha"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-center md:text-left space-y-3">
            <span className="text-[11px] uppercase tracking-widest font-bold text-amber-300 block">
              {isTelugu ? 'నూతన దంపతుల ఆత్మీయ చిత్రం' : 'Cherished Moments'}
            </span>
            <h3 className="font-greatvibes text-3xl sm:text-4xl text-[#f9e79f]">
              Bhanu Prakash & Anusha
            </h3>
            <p className="font-serif italic text-amber-100/90 text-xs sm:text-sm leading-relaxed">
              {isTelugu
                ? '"రెండు మనసులు, ఒకే శ్వాసగా... పెద్దల ఆశీస్సులతో నూరేళ్ల దాంపత్య బంధానికి తొలి అడుగులు."'
                : '"Two souls destined together, blessed by family traditions and guided by love, ready to embark on life’s sweetest journey."'}
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-300 font-telugu">
              || శుభమ్ • కళ్యాణమస్తు ||
            </div>
          </div>
        </div>

        {/* Timeline Journey */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-serif text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f] mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <span>{isTelugu ? 'ప్రేమ & వివాహ ప్రయాణం' : 'The Path to Our Sacred Union'}</span>
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
          </h3>

          <div className="relative border-l-2 border-[#d4af37]/60 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node circle */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa771c] p-1.5 shadow-md flex items-center justify-center border-2 border-[#140206] group-hover:scale-125 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#140206]"></div>
                </div>

                {/* Left Tag for wide screens */}
                <span className="hidden sm:block absolute -left-36 top-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider text-right w-24">
                  {item.year}
                </span>

                <div className="bg-[#1f030a]/90 p-5 rounded-2xl border border-[#d4af37]/50 shadow-xl group-hover:border-[#d4af37] transition-all">
                  <div className="sm:hidden text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    {item.year}
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100/80 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

