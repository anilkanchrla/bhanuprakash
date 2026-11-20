import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageCircle, User } from 'lucide-react';
import { LotusIcon, DiyaLampIcon } from './TempleIcons';
import confetti from 'canvas-confetti';

export const WishesWall = ({ isTelugu }) => {
  const initialWishes = [
    {
      id: 1,
      name: 'Mittapalli Family Elders',
      relation: 'Vedurukuppam',
      message: 'శ్రీ వెంకటేశ్వర స్వామి మరియు పద్మావతి అమ్మవార్ల దివ్యానుగ్రహంతో భాను ప్రకాష్ మరియు అనుషల దాంపత్యం కలకాలం ఆయురారోగ్యాలతో, అష్టైశ్వర్యాలతో వర్ధిల్లాలని మనసారా ఆశీర్వదిస్తున్నాము.',
      date: 'Today',
      isTeluguLang: true
    },
    {
      id: 2,
      name: 'Mummaneni Family & Relatives',
      relation: 'Peddakammavaripalli, Puttaparthi',
      message: 'మా ప్రియమైన అనుష, భాను ప్రకాష్ ల కళ్యాణం అత్యంత వైభవంగా జరగాలని, నూరేళ్ళూ సుఖసంతోషాలతో జీవించాలని ఆ భగవంతుని ప్రార్థిస్తున్నాము.',
      date: 'Yesterday',
      isTeluguLang: true
    },
    {
      id: 3,
      name: 'Bangalore Tech Friends & Colleagues',
      relation: 'Bangalore IT Circle',
      message: 'Heartiest congratulations to our favorite engineer duo Bhanu Prakash & Anusha! May your shared life be as seamless as clean code, zero production bugs, and endless happiness!',
      date: '2 days ago',
      isTeluguLang: false
    },
    {
      id: 4,
      name: 'Praneeth & Sai (Cousins)',
      relation: 'Bengaluru',
      message: 'So excited for the Puttaparthi wedding and grand reception! Waiting for the grand Talambralu showdown! Wishing you both a lifetime of adventures and joy.',
      date: '3 days ago',
      isTeluguLang: false
    }
  ];

  const [wishes, setWishes] = useState(initialWishes);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bhanu_anusha_guestbook');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setWishes([...parsed, ...initialWishes]);
      } catch (e) {}
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      relation: relation.trim() || (isTelugu ? 'ఆత్మీయులు' : 'Well-Wisher'),
      message: message.trim(),
      date: isTelugu ? 'ఇప్పుడే' : 'Just now',
      isTeluguLang: false
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    
    // Save locally
    const userWishes = JSON.parse(localStorage.getItem('bhanu_anusha_guestbook') || '[]');
    localStorage.setItem('bhanu_anusha_guestbook', JSON.stringify([newWish, ...userWishes]));

    setName('');
    setRelation('');
    setMessage('');
    setSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#E11D48', '#FB7185', '#F59E0B'],
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="wishes" className="py-16 sm:py-24 bg-[#160207] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-300">
              {isTelugu ? 'ఆశీర్వాదాల గోడ' : 'Guestbook & Wishes'}
            </span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe58f] via-[#d4af37] to-[#ffe58f]">
            {isTelugu ? 'వధూవరులకు మీ శుభాకాంక్షలు' : 'Blessings for Bhanu Prakash & Anusha'}
          </h2>
          <p className="font-serif italic text-amber-200/80 text-sm sm:text-base mt-2">
            {isTelugu
              ? 'మీ ఆత్మీయ సందేశాన్ని ఇక్కడ నమోదు చేసి నూతన దంపతులను ఆశీర్వదించండి.'
              : 'Leave a sweet message, blessing, or memory for the bride and groom.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Wish Submission Form */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#28050e] via-[#1e030a] to-[#140206] p-6 sm:p-8 rounded-3xl border-2 border-[#d4af37]/70 shadow-2xl royal-card">
            <h3 className="font-serif text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37] mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>{isTelugu ? 'శుభాకాంక్ష సందేశం రాయండి' : 'Send Your Blessings'}</span>
            </h3>
            <p className="text-xs text-amber-200/70 mb-6">
              {isTelugu ? 'మీ సందేశం నేరుగా వధూవరుల స్క్రీన్‌పై కనిపిస్తుంది.' : 'Your heartfelt words will be cherished by the couple forever.'}
            </p>

            {submitted && (
              <div className="mb-4 p-3 bg-emerald-950/80 border border-emerald-400 text-emerald-200 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{isTelugu ? 'మీ శుభాకాంక్షలు విజయవంతంగా నమోదయ్యాయి! ధన్యవాదాలు.' : 'Thank you! Your blessings have been posted to the wall.'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1">
                  {isTelugu ? 'మీ పూర్తి పేరు *' : 'Your Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isTelugu ? 'ఉదా: రమేష్ బాబు' : 'e.g., Ramesh & Family'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#140206] border border-[#d4af37]/50 text-amber-100 placeholder:text-amber-200/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1">
                  {isTelugu ? 'సంబంధం / ఊరు (ఐచ్ఛికం)' : 'Relation / City (Optional)'}
                </label>
                <input
                  type="text"
                  placeholder={isTelugu ? 'ఉదా: బెంగుళూరు / స్నేహితుడు' : 'e.g., Bangalore / College Friend'}
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#140206] border border-[#d4af37]/50 text-amber-100 placeholder:text-amber-200/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1">
                  {isTelugu ? 'మీ ఆశీర్వాదం / సందేశం *' : 'Your Message / Blessings *'}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={isTelugu ? 'నూతన దంపతులకు మీ మనసులోని ఆశీస్సులు తెలపండి...' : 'Share your warm wishes and love for Bhanu Prakash & Anusha...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#140206] border border-[#d4af37]/50 text-amber-100 placeholder:text-amber-200/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-amber-200"
              >
                <Send className="w-4 h-4 text-[#35030d]" />
                <span>{isTelugu ? 'సందేశాన్ని పంపండి' : 'Post Blessings'}</span>
              </button>
            </form>
          </div>

          {/* Wishes Display Wall */}
          <div className="lg:col-span-7 space-y-4 max-h-[580px] overflow-y-auto pr-2 no-scrollbar">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#24040c] to-[#180208] border border-[#d4af37]/50 shadow-xl relative text-amber-100"
              >
                <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-2.5 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-[#35030d] flex items-center justify-center font-bold text-xs shadow">
                      {w.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#f9e79f]">
                        {w.name}
                      </h4>
                      <span className="text-[10px] text-amber-200/70 font-medium">
                        {w.relation}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-300/60 font-mono">{w.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans">
                  "{w.message}"
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

