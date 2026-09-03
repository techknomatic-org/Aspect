import React, { useState, useEffect, useRef } from 'react';
import { EcosystemBusiness } from '../../types';
import { EcosystemWorldVisual } from './EcosystemWorldVisual';
import { useTheme } from '../../context/ThemeContext';

interface EcosystemCanvasProps {
  businesses: EcosystemBusiness[];
  onSelectBusiness: (business: EcosystemBusiness) => void;
  onExploreClick?: () => void;
}

// 9 Business Worlds ordered clockwise along the orbit ring
const BUSINESS_ORDER = [
  'bullion-refinery',
  'realty',
  'infrastructure',
  'industries',
  'hospitality',
  'energy',
  'entertainment',
  'sports',
  'foundation',
];

export const EcosystemCanvas: React.FC<EcosystemCanvasProps> = ({
  businesses,
  onSelectBusiness,
}) => {
  const [hoveredBusinessId, setHoveredBusinessId] = useState<string | null>(null);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const animRef = useRef<number | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Smooth continuous 60fps clockwise orbital revolution
  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      if (!hoveredBusinessId) {
        setOrbitAngle((prev) => (prev + delta * 0.00025) % (2 * Math.PI));
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [hoveredBusinessId]);

  // Calculate dynamic (x, y) coordinates for business world at index 'idx' along the orbit
  const getDynamicPosition = (businessId: string) => {
    const idx = BUSINESS_ORDER.indexOf(businessId);
    const total = BUSINESS_ORDER.length > 0 ? BUSINESS_ORDER.length : 9;
    const itemIndex = idx >= 0 ? idx : 0;

    // Start at -pi/2 (12 o'clock top) and advance clockwise with orbitAngle
    const baseAngle = (itemIndex / total) * 2 * Math.PI - Math.PI / 2;
    const currentAngle = baseAngle + orbitAngle;

    // Expanded ellipse radii to fill the full available vertical and horizontal space
    const rx = 450; // horizontal radius (px)
    const ry = 280; // vertical radius (px)

    const x = Math.round(rx * Math.cos(currentAngle));
    const y = Math.round(ry * Math.sin(currentAngle));

    return { x, y };
  };

  return (
    <div className={`${isLight
        ? 'bg-[#EEF1F8] border-slate-300 shadow-sm text-[#1F2937]'
        : 'bg-[#0B1426] border-white/10 shadow-2xl text-slate-100'
      } border rounded-2xl p-4 lg:p-5 flex flex-col justify-between relative overflow-hidden select-none h-full min-h-0`}>
      {/* Background Radial Glow */}
      <div className={`absolute inset-0 pointer-events-none ${isLight
          ? 'bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08)_0%,rgba(238,241,248,0)_70%)]'
          : 'bg-[radial-gradient(circle_at_center,rgba(230,28,64,0.15)_0%,rgba(11,20,38,0)_70%)]'
        }`} />


      {/* Main Centerpiece Canvas — Expanded to Fill Available Space */}
      <div className="relative w-full flex-1 min-h-0 flex items-center justify-center my-1">
        {/* REAL 3D PLANET EARTH GLOBE CENTERPIECE — Enlarged for maximum visual impact */}
        <div className="relative z-20 w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full flex items-center justify-center shadow-[0_0_120px_rgba(201,162,39,0.35)] group shrink-0">
          {/* Atmosphere & Glow Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#C9A227]/50 animate-pulse-glow" />
          <div className="absolute -inset-5 rounded-full border border-[#C9A227]/30 animate-spin-slow pointer-events-none" />

          {/* Real 3D Earth Globe Sphere */}
          <div className="w-full h-full rounded-full border-2 border-[#C9A227]/60 overflow-hidden relative shadow-2xl bg-[#14213D]">
            <img
              src="/assets/earth_globe_3d.jpg"
              alt="Real 3D Earth Globe"
              className="w-full h-full object-cover scale-110"
            />

            {/* Shadow Shader Overlay */}
            <div className="absolute inset-0 bg-radial-gradient(circle_at_30%_30%,transparent_0%,rgba(20,33,61,0.85)_100%) pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#14213D]/40 via-transparent to-[#C9A227]/20 pointer-events-none" />

            {/* Central Highlighted ASPECT GLOBAL Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-2">
              <h2 className="font-extrabold text-base lg:text-lg tracking-[0.2em] text-white uppercase font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                ASPECT
              </h2>
              <span className="text-xs lg:text-sm font-extrabold text-[#C9A227] tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(201,162,39,0.95)] mt-0.5">
                GLOBAL
              </span>
            </div>
          </div>
        </div>

        {/* SVG Radial Lines & Gold Orbital Rings — Expanded to Match Orbit */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          {/* Main Outer Orbital Ring */}
          <ellipse
            cx="50%"
            cy="50%"
            rx="450"
            ry="280"
            fill="none"
            stroke="url(#orbitGoldGrad3D)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-60"
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="315"
            ry="195"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1"
            strokeDasharray="2 4"
            className="opacity-30"
          />

          <defs>
            <linearGradient id="orbitGoldGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0E7C7B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Dynamic Radial Spokes connecting Earth globe center to each revolving 3D island node */}
          {businesses.map((b) => {
            const pos = getDynamicPosition(b.id);
            return (
              <g key={`spoke-${b.id}`}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${pos.x}px)`}
                  y2={`calc(50% + ${pos.y}px)`}
                  stroke="#C9A227"
                  strokeWidth={hoveredBusinessId === b.id ? '2' : '1'}
                  strokeOpacity={hoveredBusinessId === b.id ? '0.85' : '0.25'}
                  strokeDasharray="2 2"
                />
                <circle
                  cx={`calc(50% + ${pos.x}px)`}
                  cy={`calc(50% + ${pos.y}px)`}
                  r="3.5"
                  fill="#C9A227"
                  className="shadow-md"
                />
              </g>
            );
          })}
        </svg>

        {/* 9 Continuously Revolving 3D Business Worlds */}
        {businesses.map((business) => {
          const pos = getDynamicPosition(business.id);
          const isHovered = hoveredBusinessId === business.id;
          const isLeftOfEarth = pos.x < -20;

          return (
            <div
              key={business.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelectBusiness(business);
              }}
              onMouseEnter={() => setHoveredBusinessId(business.id)}
              onMouseLeave={() => setHoveredBusinessId(null)}
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) scale(${isHovered ? 1.15 : 1})`,
                zIndex: isHovered ? 50 : 25,
              }}
              className="absolute cursor-pointer transition-transform duration-100 ease-linear flex flex-col items-center group"
            >
              {/* Pill Label Badge — Planet Icon oriented towards Earth */}
              <div className={`flex items-center gap-2 ${isLeftOfEarth ? 'flex-row-reverse' : 'flex-row'
                } ${isLight
                  ? 'bg-white/95 border-[#C9A227]/40 text-[#1F2937]'
                  : 'bg-[#172033]/95 border-[#C9A227]/40 text-white'
                } backdrop-blur-md border group-hover:border-[#C9A227] px-3.5 py-1.5 rounded-full shadow-xl shadow-black/70 transition-all`}>
                <EcosystemWorldVisual
                  worldId={business.id}
                  image3dUrl={business.image3dUrl}
                  isHovered={isHovered}
                />
                <span className="text-xs font-extrabold tracking-wider uppercase whitespace-nowrap">
                  {business.name}
                </span>
              </div>

              {/* Hover Tooltip Details Card */}
              {isHovered && (
                <div className="absolute bottom-full mb-2 w-52 bg-[#172033]/95 border-2 border-[#C9A227]/60 rounded-xl p-3 shadow-2xl z-50 text-left pointer-events-none animate-fadeIn">
                  <div className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-wider">
                    {business.category}
                  </div>
                  <div className="text-xs font-extrabold text-white mt-0.5">{business.name}</div>
                  <div className="flex justify-between text-[10px] mt-2 pt-1 border-t border-white/10">
                    <span className="text-[#94A3B8]">YTD Revenue:</span>
                    <span className="font-bold text-[#0E7C7B]">{business.revenue}</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#94A3B8]">YoY Growth:</span>
                    <span className="font-bold text-[#0E7C7B]">▲ {business.growth}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
