import React, { useState } from 'react';

interface LocationPin {
  id: string;
  name: string;
  country: string;
  category: string;
  color: string;
  // SVG viewBox coordinate (0 0 1000 507 Mercator-like)
  x: number;
  y: number;
  isHQ?: boolean;
}

const ASPECT_LOCATIONS: LocationPin[] = [
  // India — primary cluster
  { id: 'mumbai',    name: 'Mumbai (MMR HQ)',  country: 'India',       category: 'Group HQ · Bullion · Realty · Hospitality · Entertainment', color: '#C9A227', x: 520, y: 258, isHQ: true },
  { id: 'pune',      name: 'Pune',             country: 'India',       category: 'Realty · Infrastructure · Logistics',                       color: '#0E7C7B', x: 523, y: 267 },
  { id: 'hyderabad', name: 'Hyderabad',        country: 'India',       category: 'Infrastructure · Tech Park',                                 color: '#0E7C7B', x: 533, y: 262 },
  { id: 'varanasi',  name: 'Varanasi',         country: 'India',       category: 'Aspect Sports · Mahadev Ascenders',                         color: '#4A6FA5', x: 540, y: 240 },
  { id: 'kolkata',   name: 'Kolkata',          country: 'India',       category: 'Aspect Sports · Tigers of Kolkata',                         color: '#4A6FA5', x: 556, y: 246 },
  // International
  { id: 'dubai',     name: 'Dubai',            country: 'UAE',         category: 'Bullion · Trade Hub',                                       color: '#C9A227', x: 478, y: 234 },
  { id: 'singapore', name: 'Singapore',        country: 'Singapore',   category: 'Fintech · Regional Office',                                 color: '#0E7C7B', x: 628, y: 296 },
  { id: 'london',    name: 'London',           country: 'UK',          category: 'International HQ · Investments',                            color: '#4A6FA5', x: 340, y: 145 },
  { id: 'usa',       name: 'New York',         country: 'USA',         category: 'Investments · Strategic Partnerships',                      color: '#4A6FA5', x: 175, y: 175 },
  { id: 'australia', name: 'Sydney',           country: 'Australia',   category: 'Mining · Energy · Trade',                                   color: '#0E7C7B', x: 720, y: 378 },
  { id: 'japan',     name: 'Tokyo',            country: 'Japan',       category: 'Tech · Entertainment Partnerships',                         color: '#E61C40', x: 718, y: 192 },
  { id: 'indonesia', name: 'Jakarta',          country: 'Indonesia',   category: 'Infrastructure · Energy',                                   color: '#0E7C7B', x: 648, y: 316 },
  { id: 'malaysia',  name: 'Kuala Lumpur',     country: 'Malaysia',    category: 'Trade · Hospitality Expansion',                             color: '#0E7C7B', x: 629, y: 302 },
  { id: 'mauritius', name: 'Mauritius',        country: 'Mauritius',   category: 'Investments · Financial Hub',                               color: '#C9A227', x: 468, y: 352 },
];

interface AspectWorldMapProps {
  isLight?: boolean;
}

export const AspectWorldMap: React.FC<AspectWorldMapProps> = ({ isLight = false }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredPin = ASPECT_LOCATIONS.find(l => l.id === hoveredId);

  return (
    <div className={`rounded-xl border overflow-hidden ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#07101F] border-slate-800'
    }`}>
      {/* Header */}
      <div className={`px-4 py-2.5 border-b flex items-center justify-between ${
        isLight ? 'border-slate-200 bg-white' : 'border-slate-800 bg-[#0B1426]'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
          <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider">
            Aspect Global Presence
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] inline-block" /> HQ / Bullion
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#0E7C7B] inline-block" /> Operations
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4A6FA5] inline-block" /> Investments
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#E61C40] inline-block" /> Partnerships
          </span>
          <span className="text-slate-500">| {ASPECT_LOCATIONS.length} locations</span>
        </div>
      </div>

      {/* Map SVG Container */}
      <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
        <svg
          viewBox="0 0 1000 507"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
          style={{ display: 'block' }}
        >
          <defs>
            <radialGradient id="mapBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#0d1f3c" />
              <stop offset="100%" stopColor="#060e1c" />
            </radialGradient>
            {/* Subtle grid */}
            <pattern id="gridPat" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            </pattern>
            <filter id="pinGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Ocean background */}
          <rect width="1000" height="507" fill="url(#mapBg)" />
          <rect width="1000" height="507" fill="url(#gridPat)" />

          {/* ─── SIMPLIFIED WORLD CONTINENT PATHS ─── */}
          {/* North America */}
          <path d="M 50 80 L 75 65 L 110 60 L 150 70 L 190 75 L 215 85 L 225 110 L 235 130 L 230 160 L 215 175 L 200 190 L 185 210 L 170 230 L 155 245 L 140 255 L 130 270 L 115 280 L 100 275 L 85 260 L 75 245 L 65 225 L 55 200 L 45 175 L 40 155 L 42 130 L 48 105 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Mexico + Central America */}
          <path d="M 155 245 L 170 248 L 180 258 L 188 270 L 185 282 L 178 290 L 165 295 L 155 288 L 150 275 L 148 260 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.5" />
          {/* Greenland */}
          <path d="M 225 40 L 265 30 L 295 45 L 290 75 L 265 88 L 235 80 L 220 60 Z"
            fill="#152338" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          {/* South America */}
          <path d="M 180 300 L 205 295 L 225 305 L 245 330 L 255 360 L 258 395 L 248 425 L 230 445 L 210 455 L 195 445 L 182 425 L 172 400 L 165 370 L 165 340 L 168 315 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Europe */}
          <path d="M 330 90 L 360 80 L 395 78 L 415 88 L 420 105 L 408 118 L 390 125 L 375 135 L 360 140 L 345 132 L 332 118 L 325 105 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Scandinavia */}
          <path d="M 360 60 L 380 50 L 400 55 L 405 72 L 395 80 L 375 82 L 360 75 Z"
            fill="#1a2d4a" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          {/* Africa */}
          <path d="M 340 160 L 365 150 L 400 152 L 435 162 L 450 185 L 455 215 L 450 250 L 440 285 L 425 320 L 405 360 L 385 390 L 370 415 L 355 430 L 340 420 L 328 395 L 318 360 L 315 325 L 315 290 L 320 255 L 325 220 L 330 190 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Russia / Eurasia (simplified) */}
          <path d="M 415 65 L 480 45 L 560 40 L 640 45 L 700 52 L 750 62 L 780 78 L 790 96 L 760 110 L 720 118 L 680 122 L 640 118 L 590 115 L 540 110 L 490 108 L 450 110 L 420 105 L 412 90 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Middle East */}
          <path d="M 430 170 L 470 162 L 502 168 L 510 188 L 498 205 L 475 210 L 452 205 L 438 192 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.6" />
          {/* India Subcontinent — highlighted */}
          <path d="M 505 210 L 535 205 L 558 215 L 568 235 L 562 258 L 550 278 L 535 292 L 520 295 L 508 282 L 500 262 L 498 240 Z"
            fill="#1e3550" stroke="rgba(201,162,39,0.5)" strokeWidth="1.2" />
          {/* Southeast Asia */}
          <path d="M 598 210 L 640 205 L 665 215 L 672 235 L 660 248 L 638 250 L 615 240 L 600 228 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.6" />
          {/* China */}
          <path d="M 565 145 L 620 135 L 675 140 L 715 155 L 728 175 L 715 195 L 685 205 L 648 210 L 610 208 L 578 200 L 558 185 L 553 168 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Japan Islands */}
          <path d="M 710 165 L 725 160 L 740 165 L 745 178 L 735 188 L 720 188 L 710 180 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.6" />
          {/* Indonesia (Java/Sumatra simplified) */}
          <path d="M 600 305 L 640 298 L 680 300 L 700 310 L 695 322 L 660 326 L 620 322 L 600 314 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.6" />
          {/* Australia */}
          <path d="M 665 340 L 720 330 L 770 335 L 800 355 L 810 385 L 800 415 L 775 435 L 740 440 L 705 432 L 678 415 L 660 390 L 655 362 Z"
            fill="#1a2d4a" stroke="rgba(201,162,39,0.2)" strokeWidth="0.8" />
          {/* Mauritius dot */}
          <circle cx="468" cy="352" r="4" fill="#1a2d4a" stroke="rgba(201,162,39,0.3)" strokeWidth="0.8" />

          {/* ─── CONNECTION LINES FROM MUMBAI HQ TO ALL LOCATIONS ─── */}
          {ASPECT_LOCATIONS.filter(l => l.id !== 'mumbai').map(loc => (
            <line
              key={`line-${loc.id}`}
              x1={520} y1={258}
              x2={loc.x} y2={loc.y}
              stroke={loc.color}
              strokeWidth="0.5"
              strokeDasharray="3 4"
              strokeOpacity="0.25"
            />
          ))}

          {/* ─── LOCATION PINS ─── */}
          {ASPECT_LOCATIONS.map(loc => {
            const isHovered = hoveredId === loc.id;
            const r = loc.isHQ ? 7 : 5;
            const pulseR = loc.isHQ ? 14 : 10;

            return (
              <g
                key={loc.id}
                transform={`translate(${loc.x}, ${loc.y})`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Pulse ring */}
                {(loc.isHQ || isHovered) && (
                  <circle r={pulseR} fill={loc.color} fillOpacity="0.12" className="animate-ping" style={{ transformOrigin: '0 0' }} />
                )}
                <circle r={pulseR * 0.7} fill={loc.color} fillOpacity="0.08" />
                {/* Pin body */}
                <circle r={r} fill={loc.color} fillOpacity={isHovered ? 1 : 0.85} filter="url(#pinGlow)" />
                {/* Inner dot */}
                <circle r={r * 0.4} fill="white" fillOpacity="0.9" />

                {/* Inline label for large pins */}
                {(loc.isHQ || isHovered) && (
                  <g>
                    <rect x="8" y={-10} width={loc.name.length * 5.2 + 8} height="14" rx="3"
                      fill="#0B1426" stroke={loc.color} strokeWidth="0.8" fillOpacity="0.92" />
                    <text x="12" y="0" fontSize="7" fontWeight="700" fill={loc.color}>{loc.name}</text>
                    {isHovered && (
                      <>
                        <rect x="8" y="6" width={loc.country.length * 5 + 8} height="12" rx="3"
                          fill="#0B1426" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fillOpacity="0.9" />
                        <text x="12" y="15" fontSize="6" fill="#94A3B8">{loc.country}</text>
                      </>
                    )}
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover tooltip */}
        {hoveredPin && (
          <div className="absolute bottom-3 left-3 px-3 py-2 rounded-xl bg-[#0B1426]/95 border border-slate-700 shadow-xl pointer-events-none max-w-[280px] z-20">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: hoveredPin.color }} />
              <span className="text-xs font-bold text-white">{hoveredPin.name}</span>
              {hoveredPin.isHQ && (
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#C9A227]/20 text-[#C9A227] font-semibold border border-[#C9A227]/30">HQ</span>
              )}
            </div>
            <div className="text-[10px] text-slate-400 font-medium mb-0.5">{hoveredPin.country}</div>
            <div className="text-[10px] text-slate-300">{hoveredPin.category}</div>
          </div>
        )}
      </div>
    </div>
  );
};
