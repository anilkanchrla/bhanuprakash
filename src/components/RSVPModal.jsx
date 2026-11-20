import React, { useState } from 'react';
import { X, Check, Heart, Sparkles, Calendar, MapPin } from 'lucide-react';
import { KalashIcon, TirunamamIcon } from './TempleIcons';
import confetti from 'canvas-confetti';

export const RSVPModal = ({ isOpen, onClose, isTelugu }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    attendingEvents: ['muhurtham'],
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCheckboxChange = (eventId) => {
    setFormData(prev => {
      const exists = prev.attendingEvents.includes(eventId);
      return {
        ...prev,
        attendingEvents: exists
          ? prev.attendingEvents.filter(id => id !== eventId)
          : [...prev.attendingEvents, eventId]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#680B1E', '#F59E0B', '#F472B6'],
    });

    // Save to localStorage
    const existingRsvps = JSON.parse(localStorage.getItem('bhanu_anusha_rsvps') || '[]');
    localStorage.setItem('bhanu_anusha_rsvps', JSON.stringify([...existingRsvps, { ...formData, timestamp: new Date() }]));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#2e050f] via-[#1f030a] to-[#140206] rounded-3xl border-2 border-[#d4af37] shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto text-amber-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-amber-300 hover:text-white rounded-full bg-[#350510] border border-[#d4af37]/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <TirunamamIcon className="w-12 h-7 text-[#d4af37]" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#f9e79f] to-[#d4af37]">
            {isTelugu ? 'కళ్యాణ ఆహ్వానం - మీ రాకను తెలియజేయండి' : 'RSVP & Guest Confirmation'}
          </h3>
          <p className="text-xs text-amber-200/80 mt-1">
            {isTelugu
              ? 'మీ పవిత్ర సమక్షంతో వధూవరులను ఆశీర్వదించడానికి మీ రాకను నిర్ధారించండి.'
              : 'Please confirm your gracious presence to help us prepare the feast with love.'}
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto shadow-inner border border-emerald-500">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#f9e79f]">
              {isTelugu ? 'ధన్యవాదాలు! మీ రాక నమోదైంది' : 'Thank You! RSVP Confirmed'}
            </h4>
            <p className="text-xs sm:text-sm text-amber-100/90 max-w-sm mx-auto">
              {isTelugu
                ? 'భాను ప్రకాష్ మరియు అనుషల కళ్యాణ వేడుకలో మీ రాక కోసం ఎదురుచూస్తున్నాము.'
                : 'We eagerly look forward to welcoming you and your family to the auspicious celebrations!'}
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                {isTelugu ? 'ముగించు' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1">
                {isTelugu ? 'మీ పూర్తి పేరు *' : 'Your Full Name *'}
              </label>
              <input
                type="text"
                required
                placeholder={isTelugu ? 'ఉదా: పి. శ్రీనివాసరావు' : 'e.g., P. Srinivasa Rao & Family'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-[#140206] border border-[#d4af37]/50 text-amber-100 placeholder:text-amber-200/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1">
                  {isTelugu ? 'మొబైల్ సంఖ్య *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-[#140206] border border-[#d4af37]/50 text-amber-100 placeholder:text-amber-200/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-1">
                  {isTelugu ? 'హాజరయ్యే వ్యక్తులు' : 'Number of Guests'}
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-[#140206] border border-[#d4af37]/50 text-amber-100 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4+">4+ Family Members</option>
                </select>
              </div>
            </div>

            {/* Event selection checkboxes */}
            <div>
              <label className="block text-xs font-semibold text-amber-200 uppercase tracking-wider mb-2">
                {isTelugu ? 'ఏయే వేడుకలకు హాజరవుతారు?' : 'Which Events Will You Attend?'}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#d4af37]/40 bg-[#1e030a] cursor-pointer hover:border-[#d4af37]">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('haldi')}
                    onChange={() => handleCheckboxChange('haldi')}
                    className="accent-[#d4af37] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-amber-100">27 Nov: Haldi & Nalugu Ceremony (09:00 AM)</span>
                    <span className="text-amber-300/70 block text-[11px]">P.R.C. Convention, Vedurukuppam, Chittoor</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#d4af37]/40 bg-[#1e030a] cursor-pointer hover:border-[#d4af37]">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('reception1')}
                    onChange={() => handleCheckboxChange('reception1')}
                    className="accent-[#d4af37] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-amber-100">28 Nov: Reception & Dinner</span>
                    <span className="text-amber-300/70 block text-[11px]">Sai Aramam, Puttaparthi</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border-2 border-[#d4af37] bg-[#28050e] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('muhurtham')}
                    onChange={() => handleCheckboxChange('muhurtham')}
                    className="accent-[#d4af37] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#f9e79f]">29 Nov: Sacred Muhurtham (08:00 AM)</span>
                    <span className="text-amber-200 block text-[11px]">Sai Aramam, Puttaparthi</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#d4af37]/40 bg-[#1e030a] cursor-pointer hover:border-[#d4af37]">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('reception2')}
                    onChange={() => handleCheckboxChange('reception2')}
                    className="accent-[#d4af37] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-amber-100">06 Dec: Groom's Reception (11:00 AM)</span>
                    <span className="text-amber-300/70 block text-[11px]">P.R.C. Convention, Vedurukuppam, Chittoor</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#aa771c] text-[#35030d] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all border border-amber-200"
            >
              {isTelugu ? 'రాకను ఖరారు చేయండి (Confirm RSVP)' : 'Confirm RSVP with Blessings'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

