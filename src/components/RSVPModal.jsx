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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#fffdf7] to-white rounded-3xl border-2 border-[#d4af37] shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <TirunamamIcon className="w-12 h-7 text-[#680b1e]" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#680b1e]">
            {isTelugu ? 'కళ్యాణ ఆహ్వానం - మీ రాకను తెలియజేయండి' : 'RSVP & Guest Confirmation'}
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            {isTelugu
              ? 'మీ పవిత్ర సమక్షంతో వధూవరులను ఆశీర్వదించడానికి మీ రాకను నిర్ధారించండి.'
              : 'Please confirm your gracious presence to help us prepare the feast with love.'}
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-300">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#680b1e]">
              {isTelugu ? 'ధన్యవాదాలు! మీ రాక నమోదైంది' : 'Thank You! RSVP Confirmed'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
              {isTelugu
                ? 'భాను ప్రకాష్ మరియు అనుషల కళ్యాణ వేడుకలో మీ రాక కోసం ఎదురుచూస్తున్నాము.'
                : 'We eagerly look forward to welcoming you and your family to the auspicious celebrations!'}
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#680b1e] text-[#f9e79f] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                {isTelugu ? 'ముగించు' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                {isTelugu ? 'మీ పూర్తి పేరు *' : 'Your Full Name *'}
              </label>
              <input
                type="text"
                required
                placeholder={isTelugu ? 'ఉదా: పి. శ్రీనివాసరావు' : 'e.g., P. Srinivasa Rao & Family'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  {isTelugu ? 'మొబైల్ సంఖ్య *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  {isTelugu ? 'హాజరయ్యే వ్యక్తులు' : 'Number of Guests'}
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none bg-white"
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
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {isTelugu ? 'ఏయే వేడుకలకు హాజరవుతారు?' : 'Which Events Will You Attend?'}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-stone-200 bg-stone-50 cursor-pointer hover:bg-amber-50">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('haldi')}
                    onChange={() => handleCheckboxChange('haldi')}
                    className="accent-[#680b1e] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">27 Nov: Haldi & Nalugu Ceremony (09:00 AM)</span>
                    <span className="text-stone-500 block text-[11px]">P.R.C. Convention, Vedurukuppam, Chittoor</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-stone-200 bg-stone-50 cursor-pointer hover:bg-amber-50">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('reception1')}
                    onChange={() => handleCheckboxChange('reception1')}
                    className="accent-[#680b1e] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">28 Nov: Reception & Dinner</span>
                    <span className="text-stone-500 block text-[11px]">Sai Aramam, Puttaparthi</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#d4af37] bg-amber-50/50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('muhurtham')}
                    onChange={() => handleCheckboxChange('muhurtham')}
                    className="accent-[#680b1e] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#680b1e]">29 Nov: Sacred Muhurtham (08:00 AM)</span>
                    <span className="text-stone-600 block text-[11px]">Sai Aramam, Puttaparthi</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-stone-200 bg-stone-50 cursor-pointer hover:bg-amber-50">
                  <input
                    type="checkbox"
                    checked={formData.attendingEvents.includes('reception2')}
                    onChange={() => handleCheckboxChange('reception2')}
                    className="accent-[#680b1e] w-4 h-4 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">06 Dec: Groom's Reception (11:00 AM)</span>
                    <span className="text-stone-500 block text-[11px]">P.R.C. Convention, Vedurukuppam, Chittoor</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#680b1e] via-[#881329] to-[#680b1e] text-[#f9e79f] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all border border-[#d4af37]"
            >
              {isTelugu ? 'రాకను ఖరారు చేయండి (Confirm RSVP)' : 'Confirm RSVP with Blessings'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

