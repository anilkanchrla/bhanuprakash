import React from 'react';

// Ornate Tirupati Venkateswara Tirunamam with Shanku & Chakra
export const TirunamamIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left Shanku (Conch) */}
    <g transform="translate(10, 25) scale(0.65)">
      <path d="M40 10 C20 20, 10 40, 20 65 C30 85, 60 85, 70 70 C75 55, 65 30, 50 15 Z" fill="#D4AF37" stroke="#881329" strokeWidth="2" />
      <path d="M35 25 C25 35, 25 55, 35 65" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="45" cy="50" r="8" fill="#F3E5AB" />
    </g>

    {/* Center Tirunamam */}
    <g transform="translate(75, 10)">
      {/* Outer White U shape */}
      <path d="M10 20 C10 65, 40 65, 40 20 L32 20 C32 55, 18 55, 18 20 Z" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
      {/* Central Red Kumkum Srichurnam */}
      <path d="M23 10 L27 10 L26 70 L24 70 Z" fill="#B91C1C" />
      <polygon points="25,5 21,12 29,12" fill="#B91C1C" />
      <circle cx="25" cy="74" r="2.5" fill="#B91C1C" />
    </g>

    {/* Right Sudarshana Chakra */}
    <g transform="translate(135, 25) scale(0.65)">
      <circle cx="40" cy="45" r="30" fill="#D4AF37" stroke="#881329" strokeWidth="2" />
      <circle cx="40" cy="45" r="16" fill="#F3E5AB" stroke="#AA771C" strokeWidth="1.5" />
      <circle cx="40" cy="45" r="6" fill="#B91C1C" />
      {/* Flames */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <path
          key={i}
          d="M40 10 L44 17 L36 17 Z"
          fill="#B91C1C"
          transform={`rotate(${angle} 40 45)`}
        />
      ))}
    </g>
  </svg>
);

// Majestic South Indian Temple Gopuram
export const TempleGopuramIcon = ({ className = "w-24 h-32" }) => (
  <svg viewBox="0 0 160 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9E79F" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#996515" />
      </linearGradient>
    </defs>
    {/* Kalasams at the very top */}
    <g fill="url(#goldGlow)">
      <polygon points="80,5 77,18 83,18" />
      <polygon points="68,10 65,20 71,20" />
      <polygon points="92,10 89,20 95,20" />
      <polygon points="56,15 54,23 58,23" />
      <polygon points="104,15 102,23 106,23" />
      <rect x="50" y="21" width="60" height="4" rx="2" fill="#AA771C" />
    </g>

    {/* Tier 1 (Top tier) */}
    <path d="M52 25 L108 25 L114 42 L46 42 Z" fill="#680B1E" stroke="#D4AF37" strokeWidth="1.5" />
    <circle cx="80" cy="34" r="4" fill="#F9E79F" />

    {/* Tier 2 */}
    <path d="M44 42 L116 42 L122 64 L38 64 Z" fill="#881329" stroke="#D4AF37" strokeWidth="1.5" />
    <rect x="58" y="47" width="8" height="12" rx="4" fill="#F9E79F" />
    <rect x="76" y="46" width="8" height="13" rx="4" fill="#F9E79F" />
    <rect x="94" y="47" width="8" height="12" rx="4" fill="#F9E79F" />

    {/* Tier 3 */}
    <path d="M36 64 L124 64 L132 90 L28 90 Z" fill="#680B1E" stroke="#D4AF37" strokeWidth="1.5" />
    <g fill="#D4AF37">
      <circle cx="48" cy="76" r="3.5" />
      <circle cx="68" cy="76" r="3.5" />
      <circle cx="92" cy="76" r="3.5" />
      <circle cx="112" cy="76" r="3.5" />
    </g>

    {/* Tier 4 */}
    <path d="M26 90 L134 90 L142 120 L18 120 Z" fill="#881329" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Carved pillars simulation */}
    {[34, 52, 70, 90, 108, 126].map((x, i) => (
      <rect key={i} x={x} y="95" width="4" height="20" rx="1" fill="#F3E5AB" />
    ))}

    {/* Tier 5 */}
    <path d="M16 120 L144 120 L152 155 L8 155 Z" fill="#680B1E" stroke="#D4AF37" strokeWidth="2" />
    <circle cx="80" cy="136" r="8" fill="#AA771C" stroke="#F9E79F" strokeWidth="1.5" />

    {/* Base Gopuram Gateway Doorway (Raja Gopura Dwaram) */}
    <path d="M8 155 L152 155 L156 215 L4 215 Z" fill="#470511" stroke="#D4AF37" strokeWidth="2" />
    {/* Inner Arched Sanctum Doorway */}
    <path d="M55 215 L55 175 C55 160, 105 160, 105 175 L105 215 Z" fill="#1C0207" stroke="#F9E79F" strokeWidth="2" />
    {/* Diya inside doorway */}
    <circle cx="80" cy="195" r="5" fill="#F59E0B" />
    <polygon points="80,186 78,193 82,193" fill="#FDE047" />

    {/* Ornate corner pillars */}
    <rect x="14" y="160" width="8" height="52" fill="url(#goldGlow)" />
    <rect x="138" y="160" width="8" height="52" fill="url(#goldGlow)" />
  </svg>
);

// Auspicious Kalash with Mango Leaves & Coconut
export const KalashIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mango Leaves */}
    <path d="M50 35 C40 10, 20 15, 25 35 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 35 C60 10, 80 15, 75 35 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 35 C50 5, 42 0, 50 0 C58 0, 50 5, 50 35 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 35 C30 20, 10 32, 28 42 Z" fill="#43A047" stroke="#1B5E20" strokeWidth="1" />
    <path d="M50 35 C70 20, 90 32, 72 42 Z" fill="#43A047" stroke="#1B5E20" strokeWidth="1" />

    {/* Coconut */}
    <ellipse cx="50" cy="34" rx="14" ry="16" fill="#8D6E63" stroke="#5D4037" strokeWidth="1.5" />
    {/* Tilak on coconut */}
    <circle cx="50" cy="32" r="3" fill="#DC2626" />

    {/* Kalash Pot (Brass/Gold) */}
    <path d="M38 48 L62 48 L66 56 C78 68, 76 95, 50 95 C24 95, 22 68, 34 56 Z" fill="#D4AF37" stroke="#AA771C" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="13" ry="3" fill="#F3E5AB" />
    
    {/* Base Stand */}
    <path d="M36 94 L64 94 L68 104 L32 104 Z" fill="#B8860B" stroke="#881329" strokeWidth="1" />

    {/* Sacred Swastik or Lotus on Kalash */}
    <circle cx="50" cy="74" r="6" fill="#881329" />
    <circle cx="50" cy="74" r="3" fill="#F9E79F" />
  </svg>
);

// Kamadhenu Cow & Calf
export const KamadhenuIcon = ({ className = "w-20 h-16" }) => (
  <svg viewBox="0 0 140 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="55" rx="35" ry="22" fill="#FFFDF7" stroke="#AA771C" strokeWidth="2" />
    {/* Golden Ornaments & Blanket */}
    <path d="M50 36 C65 38, 75 38, 90 36 L88 56 C75 60, 65 60, 52 56 Z" fill="#881329" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="70" cy="46" r="4" fill="#D4AF37" />
    {/* Head */}
    <ellipse cx="112" cy="38" rx="14" ry="18" fill="#FFFDF7" stroke="#AA771C" strokeWidth="1.5" transform="rotate(-15 112 38)" />
    {/* Horns */}
    <path d="M110 22 C115 10, 122 8, 126 12 C122 18, 116 22, 114 24" fill="#D4AF37" stroke="#AA771C" strokeWidth="1" />
    <path d="M104 25 C102 12, 95 12, 93 16 C98 20, 102 24, 103 27" fill="#D4AF37" stroke="#AA771C" strokeWidth="1" />
    {/* Garland */}
    <path d="M98 42 C102 52, 114 52, 118 42" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="2 2" />
    {/* Legs */}
    <rect x="46" y="70" width="6" height="24" rx="2" fill="#FFFDF7" stroke="#AA771C" />
    <rect x="58" y="70" width="6" height="22" rx="2" fill="#FFFDF7" stroke="#AA771C" />
    <rect x="80" y="70" width="6" height="24" rx="2" fill="#FFFDF7" stroke="#AA771C" />
    <rect x="92" y="70" width="6" height="22" rx="2" fill="#FFFDF7" stroke="#AA771C" />
    {/* Tail */}
    <path d="M38 45 C32 55, 30 75, 34 82" stroke="#AA771C" strokeWidth="2" strokeLinecap="round" />
    {/* Divine Aura */}
    <circle cx="112" cy="38" r="22" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
  </svg>
);

// Traditional South Indian Brass Kuthu Vilakku (Diya / Oil Lamp)
export const DiyaLampIcon = ({ className = "w-10 h-16", isLit = true }) => (
  <svg viewBox="0 0 80 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flickering Flame */}
    {isLit && (
      <g className="diya-flame">
        <ellipse cx="40" cy="18" rx="8" ry="14" fill="#F59E0B" opacity="0.9" />
        <ellipse cx="40" cy="19" rx="5" ry="9" fill="#FDE047" />
        <circle cx="40" cy="22" r="3" fill="#FFFFFF" />
      </g>
    )}
    {/* Lamp Top Spire / Bird motif */}
    <polygon points="40,28 37,34 43,34" fill="#D4AF37" stroke="#881329" strokeWidth="1" />
    {/* Oil Bowl Tray with 5 wicks notches */}
    <ellipse cx="40" cy="40" rx="26" ry="7" fill="#D4AF37" stroke="#881329" strokeWidth="1.5" />
    <ellipse cx="40" cy="39" rx="22" ry="4" fill="#F3E5AB" />

    {/* Pillar Stem */}
    <rect x="36" y="44" width="8" height="58" fill="#AA771C" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="40" cy="58" r="6" fill="#D4AF37" stroke="#881329" strokeWidth="1" />
    <circle cx="40" cy="82" r="8" fill="#D4AF37" stroke="#881329" strokeWidth="1" />

    {/* Heavy Ornate Circular Base */}
    <ellipse cx="40" cy="106" rx="20" ry="6" fill="#AA771C" />
    <ellipse cx="40" cy="116" rx="28" ry="8" fill="#D4AF37" stroke="#881329" strokeWidth="2" />
    <ellipse cx="40" cy="114" rx="24" ry="5" fill="#F3E5AB" />
  </svg>
);

// Lord Ganesha Auspicious Motif
export const GaneshaIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#FFFDF7" stroke="#D4AF37" strokeWidth="2" />
    <circle cx="50" cy="50" r="41" stroke="#881329" strokeWidth="1" strokeDasharray="3 2" />
    
    {/* Sacred Ganesha Calligraphic Silhouette */}
    <path d="M42 22 C30 22, 24 32, 28 42 C30 45, 34 46, 38 46" stroke="#881329" strokeWidth="3" strokeLinecap="round" />
    {/* Trunk */}
    <path d="M48 24 C58 24, 66 32, 64 48 C62 60, 52 74, 58 78 C62 80, 68 76, 68 70" stroke="#881329" strokeWidth="3.5" strokeLinecap="round" />
    {/* Right Tusk */}
    <path d="M38 52 L30 52" stroke="#881329" strokeWidth="2.5" strokeLinecap="round" />
    {/* Modak in trunk */}
    <circle cx="68" cy="68" r="3.5" fill="#D4AF37" />
    {/* Tilak on forehead */}
    <circle cx="48" cy="30" r="2.5" fill="#DC2626" />
    <line x1="43" y1="34" x2="53" y2="34" stroke="#DC2626" strokeWidth="1.5" />
  </svg>
);

// Blooming Lotus
export const LotusIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Petals */}
    <path d="M50 65 C20 65, 8 40, 20 28 C26 22, 36 34, 45 55 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" opacity="0.8" />
    <path d="M50 65 C80 65, 92 40, 80 28 C74 22, 64 34, 55 55 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" opacity="0.8" />
    
    {/* Middle Petals */}
    <path d="M50 65 C32 55, 20 30, 36 15 C44 24, 48 45, 50 65 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="1" />
    <path d="M50 65 C68 55, 80 30, 64 15 C56 24, 52 45, 50 65 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="1" />

    {/* Central Petal */}
    <path d="M50 65 C40 45, 42 18, 50 5 C58 18, 60 45, 50 65 Z" fill="#FB7185" stroke="#E11D48" strokeWidth="1.2" />

    {/* Base Lotus Leaf Pod */}
    <ellipse cx="50" cy="66" rx="16" ry="4" fill="#D4AF37" />
  </svg>
);

// Marigold & Mango Leaves Garland Toran (Decorative header)
export const ToranGarland = () => (
  <div className="w-full flex justify-center items-center overflow-hidden py-1">
    <div className="flex items-center space-x-1 sm:space-x-3 opacity-90">
      {Array.from({ length: 14 }).map((_, i) => (
        <React.Fragment key={i}>
          {/* Mango leaf */}
          <div className="w-4 h-8 bg-emerald-700 rounded-b-full transform -rotate-6 shadow-sm border-t-2 border-amber-600"></div>
          {/* Marigold flower */}
          <div className="w-5 h-5 rounded-full bg-amber-500 shadow-sm border border-amber-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300"></div>
          </div>
          {/* Jasmine flower */}
          <div className="w-3.5 h-3.5 rounded-full bg-amber-50 border border-stone-200 shadow-xs"></div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

