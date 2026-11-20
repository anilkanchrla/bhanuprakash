import React, { useMemo } from 'react';

// Ambient Royal Floating Petals & Golden Embers
// Adds a subtle, luxurious, fairytale atmosphere across the entire wedding website
export const AmbientRoyalEffects = () => {
  // Generate random petals with varying sizes, speeds, and trajectories
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + Math.random() * 4).toFixed(1)}%`,
      size: `${14 + (i % 5) * 4}px`,
      delay: `${(i * 1.3).toFixed(1)}s`,
      duration: `${14 + (i % 7) * 3}s`,
      opacity: 0.25 + (i % 4) * 0.15,
      type: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'rose' : 'jasmine',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: '-40px',
            animation: `ambientPetalFall ${petal.duration} linear infinite`,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          {petal.type === 'gold' && (
            // Shimmering Golden Akshata / Sparkle Ember
            <div
              className="rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]"
              style={{
                width: `${parseInt(petal.size) * 0.45}px`,
                height: `${parseInt(petal.size) * 0.45}px`,
              }}
            />
          )}

          {petal.type === 'rose' && (
            // Soft Pinkish-Red Rose Petal
            <svg
              viewBox="0 0 30 30"
              style={{ width: petal.size, height: petal.size }}
              className="transform rotate-12 drop-shadow-sm"
              fill="none"
            >
              <path
                d="M15 3 C22 3, 27 10, 25 18 C23 25, 17 28, 15 28 C13 28, 7 25, 5 18 C3 10, 8 3, 15 3 Z"
                fill="url(#roseGradient)"
              />
              <defs>
                <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB7185" />
                  <stop offset="60%" stopColor="#E11D48" />
                  <stop offset="100%" stopColor="#9F1239" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {petal.type === 'jasmine' && (
            // Scented White/Ivory Jasmine Flower
            <svg
              viewBox="0 0 24 24"
              style={{ width: `${parseInt(petal.size) * 0.75}px`, height: `${parseInt(petal.size) * 0.75}px` }}
              className="transform -rotate-45"
              fill="none"
            >
              <circle cx="12" cy="12" r="3" fill="#FDE68A" />
              <path d="M12 2 C13 7, 17 11, 22 12 C17 13, 13 17, 12 22 C11 17, 7 13, 2 12 C7 11, 11 7, 12 2 Z" fill="#FFFDF7" opacity="0.95" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
