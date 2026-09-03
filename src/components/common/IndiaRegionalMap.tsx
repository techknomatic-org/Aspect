import React from 'react';
import { MapPin, Navigation, ShieldCheck, Building2 } from 'lucide-react';

interface IndiaRegionalMapProps {
  businessName?: string;
  isLight?: boolean;
}

export const IndiaRegionalMap: React.FC<IndiaRegionalMapProps> = ({
  businessName = 'Aspect Global',
  isLight = false,
}) => {
  return (
    <div className={`p-4 rounded-xl border ${
      isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-[#0A1021] border-slate-800 text-slate-100'
    } flex flex-col md:flex-row items-center justify-between gap-4 select-none`}>
      {/* Left Column: Mumbai Region Spotlight Info */}
      <div className="flex-1 space-y-2.5 min-w-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-wider block leading-none">
              GEOGRAPHIC FOOTPRINT
            </span>
            <h4 className="text-sm font-bold text-white uppercase mt-0.5">
              Mumbai Region & Key Asset Hubs
            </h4>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-normal">
          Flagship enterprise operations centered in the <strong className="text-[#C9A227]">Mumbai Metropolitan Region (MMR)</strong> at BKC, with interconnected regional corridors across India.
        </p>

        {/* Location Highlights Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 rounded-lg bg-[#131C2E] border border-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0E7C7B] animate-ping shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-medium block">CORE HEADQUARTERS</span>
              <strong className="text-white text-xs truncate block">BKC, Mumbai (MMR)</strong>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#131C2E] border border-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-medium block">REGIONAL CORRIDORS</span>
              <strong className="text-white text-xs truncate block">Pune • Hyd • Goa • RJ</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: High-Precision Vector SVG Map of India with Glowing Mumbai Pin */}
      <div className="relative w-full md:w-[240px] h-[160px] rounded-xl bg-[#070C18] border border-slate-800 flex items-center justify-center overflow-hidden shrink-0 group">
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(201,162,39,0.15)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        <svg viewBox="0 0 200 220" className="w-full h-full p-2 overflow-visible">
          <defs>
            <linearGradient id="mapGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E7C7B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* India Geographic Outline Path */}
          <path
            d="M 85 20 L 95 18 L 105 25 L 110 38 L 125 45 L 140 48 L 155 46 L 165 55 L 160 68 L 145 72 L 140 85 L 155 90 L 175 92 L 180 100 L 170 110 L 150 115 L 138 122 L 132 135 L 125 145 L 115 160 L 105 180 L 100 195 L 95 190 L 90 175 L 82 155 L 75 140 L 68 128 L 55 120 L 42 110 L 35 95 L 45 80 L 52 68 L 65 60 L 72 45 L 80 32 Z"
            fill="url(#mapGlowGrad)"
            stroke="#C9A227"
            strokeWidth="1.2"
            strokeDasharray="2 1"
            className="opacity-70"
          />

          {/* Key State Node Connections */}
          {/* Rajasthan */}
          <circle cx="58" cy="78" r="2.5" fill="#C9A227" />
          <text x="32" y="75" fontSize="7" fill="#94A3B8" fontWeight="600">Rajasthan</text>

          {/* Pune */}
          <circle cx="82" cy="142" r="2" fill="#94A3B8" />

          {/* Hyderabad */}
          <circle cx="108" cy="138" r="2.5" fill="#C9A227" />
          <text x="114" y="141" fontSize="7" fill="#94A3B8" fontWeight="600">Hyderabad</text>

          {/* Goa */}
          <circle cx="78" cy="158" r="2.5" fill="#0E7C7B" />

          {/* PROMINENT MUMBAI REGION PIN & HIGHLIGHT */}
          {/* Outer Pulse Ring */}
          <circle cx="72" cy="132" r="9" fill="#0E7C7B" fillOpacity="0.2" className="animate-ping" />
          <circle cx="72" cy="132" r="5" fill="#C9A227" fillOpacity="0.4" />
          <circle cx="72" cy="132" r="3" fill="#E61C40" />

          {/* Pointer Pin & Inset Leader Line */}
          <line x1="72" y1="132" x2="45" y2="155" stroke="#C9A227" strokeWidth="1" strokeDasharray="2 2" />

          {/* Inset Callout Badge */}
          <g transform="translate(10, 155)">
            <rect x="0" y="0" width="75" height="24" rx="4" fill="#0B1426" stroke="#C9A227" strokeWidth="0.8" />
            <text x="6" y="11" fontSize="7" fontWeight="800" fill="#C9A227">MUMBAI REGION</text>
            <text x="6" y="19" fontSize="6" fontWeight="600" fill="#FFFFFF">MMR HQ & Flagship</text>
          </g>
        </svg>

        {/* Floating Watermark */}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0B1426]/80 border border-slate-700 text-[8px] font-mono text-slate-300">
          MMR • 19.076° N
        </div>
      </div>
    </div>
  );
};
