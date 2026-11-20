import React, { useState } from 'react';
import { Sparkles, Heart, Sun, Flame, Award, Shield } from 'lucide-react';
import { LotusIcon, DiyaLampIcon } from './TempleIcons';

export const VedicRituals = ({ isTelugu }) => {
  const [activeTab, setActiveTab] = useState(0);

  const rituals = [
    {
      title: isTelugu ? 'జీలకర్ర బెల్లం' : 'Jeelakarra Bellam',
      teluguTitle: 'జీలకర్ర బెల్లం',
      tagline: isTelugu ? 'పరిపూర్ణ ఆత్మీయ కలయిక' : 'The Inseparable Confluence of Two Souls',
      desc: isTelugu
        ? 'ముహూర్త సమయాన వధూవరులు ఒకరి తలపై మరొకరు జీలకర్ర, బెల్లం మిశ్రమాన్ని ఉంచుతారు. చేదు, తీపిల కలయికలా జీవితంలోని సుఖదుఃఖాలను సమభావంతో పంచుకుంటామని దీని సంకేతం.'
        : 'At the exact auspicious Muhurtham instant (08:00 - 08:45 AM Dhanassu Lagnam), Bhanu Prakash and Anusha place a sacred mixture of cumin and jaggery on each other’s heads, symbolizing minds blending into an inseparable, harmonious oneness.',
      significance: isTelugu ? 'లగ్న సమయపు అత్యంత పవిత్ర ఘట్టం' : 'Sacred Union at exact Dhanassu Lagnam',
      icon: <Sparkles className="w-6 h-6 text-amber-500" />
    },
    {
      title: isTelugu ? 'మంగళసూత్ర ధారణ' : 'Mangalasutra Dharana',
      teluguTitle: 'మూడు ముళ్ళ బంధం',
      tagline: isTelugu ? 'మాంగల్యం తంతునానేన...' : 'The Three Knots of Eternal Protection & Love',
      desc: isTelugu
        ? 'వేద మంత్రోచ్ఛారణల మధ్య, మంగళ వాయిద్యాల రవళిలో వధువు మెడలో మూడు ముళ్ళు వేస్తూ పవిత్ర మంగళసూత్రాన్ని అలంకరించే అపురూప వేడుక.'
        : 'Accompanied by the resounding Mangala Vaadyam (Nadaswaram), the sacred yellow thread bearing the holy golden Mangalasutra is tied around Anusha’s neck with three knots representing Manasa, Vacha, and Karmana devotion.',
      significance: isTelugu ? 'సౌభాగ్య, ధర్మ, కామ, మోక్షాల సాధన' : 'Solemn lifelong pledge of respect and fidelity',
      icon: <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
    },
    {
      title: isTelugu ? 'తాళంబ్రాలు' : 'Talambralu',
      teluguTitle: 'ముత్యాల వర్షం',
      tagline: isTelugu ? 'ఆనంద డోలికల్లో వధూవరులు' : 'The Joyous Shower of Sacred Rice & Pearls',
      desc: isTelugu
        ? 'పసుపు, నెయ్యి, గులాబీ రేకులు మరియు ముత్యాలతో కూడిన అక్షతలను వధూవరులు ఒకరిపై ఒకరు ఆనందోత్సాహాలతో కురిపించుకునే సంబరం.'
        : 'The most cheerful and photogenic moment of the wedding! Bhanu Prakash and Anusha gently shower sacred pearls, saffron, and turmeric-scented rice on each other, celebrating overflowing prosperity and mutual joy.',
      significance: isTelugu ? 'ఆయురారోగ్యాలు, సంతాన సమృద్ధికి ప్రతీక' : 'Shower of blessings, fertility & everlasting smile',
      icon: <Sun className="w-6 h-6 text-amber-600" />
    },
    {
      title: isTelugu ? 'సప్తపది' : 'Saptapadi (Seven Vows)',
      teluguTitle: 'ఏడడుగుల పవిత్ర బంధం',
      tagline: isTelugu ? 'అగ్నిసాక్షిగా ఏడు అడుగులు' : 'Seven Steps Around the Sacred Fire',
      desc: isTelugu
        ? 'పవిత్ర హోమాగ్ని చుట్టూ ఏడడుగులు వేస్తూ ఆహారం, బలం, సంపద, ఆనందం, సంతానం, సద్గుణాలు, నిరంతర స్నేహం కోరుకునే ప్రతిజ్ఞ.'
        : 'Taking seven sacred steps together around the divine Agni, cementing vows for food, health, prosperity, happiness, harmony, noble lineage, and lifelong friendship.',
      significance: isTelugu ? 'శాశ్వత సహచర్యానికి వేద ప్రమాణం' : 'The definitive completion of Hindu marriage rites',
      icon: <Flame className="w-6 h-6 text-orange-500" />
    },
    {
      title: isTelugu ? 'అరుంధతి నక్షత్ర దర్శనం' : 'Arundhati Darsanam',
      teluguTitle: 'ధ్రువ తార వీక్షణ',
      tagline: isTelugu ? 'పాతివ్రత్యం & నిష్కల్మష దాంపత్యం' : 'Gazing at the Heavenly Star of Devotion',
      desc: isTelugu
        ? 'ఆకాశంలో వశిష్ఠ-అరుంధతి నక్షత్రాలను వీక్షిస్తూ, ఆదర్శ దాంపత్యానికి ప్రతీకగా వారి ఆశీస్సులను వేడుకొనుట.'
        : 'The couple steps out to look at the twin stars of Sage Vasistha and Arundhati, taking inspiration from their eternal celestial companionship and steadfast loyalty.',
      significance: isTelugu ? 'ఆదర్శవంతమైన దాంపత్య ఆశీర్వాదం' : 'Celestial inspiration for unwavering devotion',
      icon: <Award className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="rituals" className="py-16 sm:py-24 bg-[#140206] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <LotusIcon className="w-6 h-6" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-300">
              {isTelugu ? 'వేద సంస్కృతి' : 'Vedic Traditions'}
            </span>
            <LotusIcon className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f]">
            {isTelugu ? 'పవిత్ర తెలుగు వివాహ సంప్రదాయాలు' : 'Sacred Telugu Wedding Rituals'}
          </h2>
          <p className="font-serif italic text-amber-200/80 text-sm sm:text-base mt-2">
            {isTelugu
              ? 'శతాబ్దాల నాటి సంప్రదాయాల వెనుక దాగి ఉన్న అంతరార్థం మరియు ఆధ్యాత్మిక ప్రాముఖ్యత.'
              : 'Every sacred step and chant carries timeless spiritual wisdom for a blessed marital journey.'}
          </p>
        </div>

        {/* Ritual Tab Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {rituals.map((ritual, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all flex items-center gap-2 border ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] font-bold border-amber-200 shadow-lg scale-105'
                  : 'bg-[#24040c] text-amber-200/90 border-[#d4af37]/40 hover:bg-[#320611]'
              }`}
            >
              <span>{ritual.title}</span>
            </button>
          ))}
        </div>

        {/* Active Ritual Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#2a050f] via-[#1e030a] to-[#150206] rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37] shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden royal-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Visual Icon Column */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#3a0612] to-[#1e0208] rounded-2xl text-amber-200 shadow-inner border border-[#d4af37]/60 text-center">
              <div className="p-4 rounded-full bg-white/10 mb-3 backdrop-blur-sm">
                {rituals[activeTab].icon}
              </div>
              <span className="font-telugu text-lg font-bold text-[#f9e79f]">
                {rituals[activeTab].teluguTitle}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-sans mt-1">
                {rituals[activeTab].significance}
              </span>
            </div>

            {/* Description Column */}
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
                {rituals[activeTab].tagline}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
                {rituals[activeTab].title}
              </h3>
              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed font-sans">
                {rituals[activeTab].desc}
              </p>

              <div className="pt-4 border-t border-[#d4af37]/30 flex items-center gap-2 text-xs text-amber-300/80">
                <DiyaLampIcon className="w-4 h-6" />
                <span className="font-serif italic">
                  {isTelugu ? 'నవంబర్ 29న సాయి ఆరామం వేదికపై ఈ పవిత్ర వేడుక జరగనుంది.' : 'To be solemnized at Sai Aramam Function Hall, Puttaparthi on Nov 29, 2026.'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

