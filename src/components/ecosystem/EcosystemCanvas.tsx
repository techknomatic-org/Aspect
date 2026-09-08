import React, { useState } from 'react';
import { EcosystemBusiness } from '../../types';
import { EcosystemWorldVisual } from './EcosystemWorldVisual';
import { useTheme } from '../../context/ThemeContext';

interface EcosystemCanvasProps {
  businesses: EcosystemBusiness[];
  selectedBusinessId?: string;
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
  selectedBusinessId,
  onSelectBusiness,
}) => {
  const [hoveredBusinessId, setHoveredBusinessId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Fixed static positions for the 9 business cards along the orbit ellipse
  const getDynamicPosition = (businessId: string) => {
    const idx = BUSINESS_ORDER.indexOf(businessId);
    const total = BUSINESS_ORDER.length > 0 ? BUSINESS_ORDER.length : 9;
    const itemIndex = idx >= 0 ? idx : 0;

    // Start at -pi/2 (12 o'clock top) and space evenly clockwise in static positions
    const baseAngle = (itemIndex / total) * 2 * Math.PI - Math.PI / 2;

    // Calibrated ellipse radii for perfect proportion & zero clipping
    const rx = 345; // horizontal radius (px)
    const ry = 265; // vertical radius (px) - expanded to properly utilize top & bottom space

    const x = Math.round(rx * Math.cos(baseAngle));
    const y = Math.round(ry * Math.sin(baseAngle));

    return { x, y };
  };

  return (
    <div className={`${isLight
      ? 'bg-[#EEF1F8] border-slate-300 shadow-sm text-[#1F2937]'
      : 'bg-[#0B1426] border-white/10 shadow-2xl text-slate-100'
      } border rounded-2xl p-2.5 lg:p-3 flex flex-col justify-between relative overflow-hidden select-none h-full min-h-0`}>
      {/* Background Industries & Conglomerate Landscape Image (Theme-aware, high-clarity & rich) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <img
          src={isLight ? "/assets/industries_backdrop_light.jpg" : "/assets/industries_backdrop_dark.jpg"}
          alt="Aspect Global Industries Landscape"
          className={`w-full h-full object-cover object-center transition-all duration-500 ${isLight
            ? 'opacity-15 saturate-[1.05] contrast-[1.02]'
            : 'opacity-20 contrast-110 brightness-105'
            }`}
        />
        {/* Subtle radial center vignette to keep globe and orbit cards prominent and legible */}
        <div className={`absolute inset-0 ${isLight
          ? 'bg-[radial-gradient(circle_at_center,transparent_30%,rgba(238,241,248,0.4)_70%,rgba(238,241,248,0.85)_100%)]'
          : 'bg-[radial-gradient(circle_at_center,transparent_30%,rgba(11,20,38,0.4)_70%,rgba(11,20,38,0.9)_100%)]'
          }`} />
      </div>


      {/* Main Centerpiece Canvas — Perfectly Calibrated Proportions */}
      <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
        {/* REAL 3D PLANET EARTH GLOBE CENTERPIECE */}
        <div className="relative z-20 w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] rounded-full flex items-center justify-center shadow-[0_0_90px_rgba(201,162,39,0.35)] group shrink-0">
          {/* Atmosphere & Glow Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#C9A227]/50 animate-pulse-glow" />
          <div className="absolute -inset-3.5 rounded-full border border-[#C9A227]/30 animate-spin-slow pointer-events-none" />

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
              <h2 className="font-black text-base lg:text-lg xl:text-xl tracking-[0.2em] text-white uppercase font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                ASPECT
              </h2>
              <span className="text-xs lg:text-[13px] xl:text-sm font-black text-[#C9A227] tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(201,162,39,0.95)] mt-0.5">
                GLOBAL
              </span>
            </div>
          </div>
        </div>

        {/* SVG Radial Lines & Gold Orbital Rings */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          {/* Main Outer Orbital Ring */}
          <ellipse
            cx="50%"
            cy="50%"
            rx="345"
            ry="265"
            fill="none"
            stroke="url(#orbitGoldGrad3D)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-60"
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="245"
            ry="190"
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
            const isSelected = selectedBusinessId === b.id;
            return (
              <g key={`spoke-${b.id}`}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${pos.x}px)`}
                  y2={`calc(50% + ${pos.y}px)`}
                  stroke={isSelected ? '#0E7C7B' : '#C9A227'}
                  strokeWidth={hoveredBusinessId === b.id || isSelected ? '2' : '1'}
                  strokeOpacity={hoveredBusinessId === b.id || isSelected ? '0.85' : '0.25'}
                  strokeDasharray="2 2"
                />
                <circle
                  cx={`calc(50% + ${pos.x}px)`}
                  cy={`calc(50% + ${pos.y}px)`}
                  r={isSelected ? '4.5' : '3.5'}
                  fill={isSelected ? '#0E7C7B' : '#C9A227'}
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
          const isSelected = selectedBusinessId === business.id;
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
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) scale(${isHovered ? 1.15 : isSelected ? 1.06 : 1})`,
                zIndex: isHovered ? 50 : isSelected ? 35 : 25,
              }}
              className="absolute cursor-pointer transition-transform duration-100 ease-linear flex flex-col items-center group"
            >
              {/* Pill Label Badge — Planet Icon oriented towards Earth */}
              <div className={`flex items-center gap-2 ${isLeftOfEarth ? 'flex-row-reverse' : 'flex-row'} ${isSelected
                ? isLight
                  ? 'bg-white border-[#0E7C7B] ring-2 ring-[#0E7C7B]/40 text-[#0E7C7B] shadow-lg'
                  : 'bg-[#172033] border-[#0E7C7B] ring-2 ring-[#0E7C7B]/50 text-[#2dd4bf] shadow-[0_0_20px_rgba(14,124,123,0.4)]'
                : isLight
                  ? 'bg-white/95 border-[#C9A227]/40 text-[#1F2937]'
                  : 'bg-[#172033]/95 border-[#C9A227]/40 text-white'
                } backdrop-blur-md border group-hover:border-[#C9A227] px-3.5 py-1.5 rounded-full shadow-xl shadow-black/70 transition-all`}>
                <EcosystemWorldVisual
                  worldId={business.id}
                  image3dUrl={business.image3dUrl}
                  isHovered={isHovered || isSelected}
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
