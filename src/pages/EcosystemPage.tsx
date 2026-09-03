import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { useTheme } from '../context/ThemeContext';
import { IndiaRegionalMap } from '../components/common/IndiaRegionalMap';

interface EcosystemPageProps {
  onSelectBusiness?: (businessId: string) => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({ onSelectBusiness }) => {
  const [businesses, setBusinesses] = useState<EcosystemBusiness[]>([]);
  const [selectedId, setSelectedId] = useState<string>('realty');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    ecosystemService.getAllBusinesses().then(setBusinesses);
  }, []);

  const activeBusiness = businesses.find((b) => b.id === selectedId) || businesses[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 lg:p-6 space-y-5 max-w-[1720px] mx-auto select-none font-sans"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase">
            Group Ecosystem Topology
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Aspect Global Business Universe
          </h1>
        </div>
        <span className="text-xs text-slate-400 font-medium">9 Core Venture Categories • Real-time Telemetry</span>
      </div>

      {/* Grid Layout: Left 9 Business Selector Cards + Right Active Business Deep-Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: 9 Business Verticals List */}
        <div className="lg:col-span-5 space-y-2.5">
          {businesses.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#131C2E] border-[#C9A227] shadow-md'
                    : isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                    : 'bg-[#0B1426] border-slate-800 hover:border-slate-700 text-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {b.image3dUrl ? (
                    <img src={b.image3dUrl} alt={b.name} className="w-10 h-10 rounded-lg object-cover border border-slate-700 shrink-0" />
                  ) : (
                    <div className="p-2 rounded-lg bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xs font-bold uppercase ${isSelected ? 'text-[#C9A227]' : isLight ? 'text-slate-900' : 'text-white'}`}>
                      {b.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 block">{b.category}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-white block">{b.revenue}</span>
                  <span className="text-[11px] font-semibold text-[#0E7C7B]">▲ {b.growth}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Business Deep-Dive + Regional Presence Map */}
        {activeBusiness && (
          <div className={`lg:col-span-7 p-5 rounded-2xl border flex flex-col justify-between space-y-4 ${
            isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
          }`}>
            <div className="space-y-4">
              {/* Header Row */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  {activeBusiness.image3dUrl && (
                    <img src={activeBusiness.image3dUrl} alt={activeBusiness.name} className="w-12 h-12 rounded-xl object-cover border border-[#C9A227]/50 shadow" />
                  )}
                  <div>
                    <span className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider">{activeBusiness.category}</span>
                    <h2 className="text-xl font-bold uppercase text-white leading-tight">{activeBusiness.name}</h2>
                  </div>
                </div>
                <button
                  onClick={() => onSelectBusiness && onSelectBusiness(activeBusiness.id)}
                  className="px-4 py-2 rounded-lg bg-[#C9A227] hover:bg-[#C9A227]/90 text-[#0B1426] font-bold text-xs shadow transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Executive Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {activeBusiness.description}
              </p>

              {/* Operational Telemetry Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">
                  Key Operational Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                  {activeBusiness.operationalMetrics && Object.entries(activeBusiness.operationalMetrics).map(([k, v]) => (
                    <div key={k} className="p-3 rounded-xl bg-[#0B1426] border border-slate-800 text-xs">
                      <span className="text-[10px] text-slate-400 block truncate">{k}</span>
                      <span className="font-bold text-white mt-0.5 block text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Performance Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">
                  Strategic Performance Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {(activeBusiness.highlights || []).map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Geographic Footprint & India Map Section (Utilizing Blank Space) */}
              <div className="pt-2">
                <IndiaRegionalMap businessName={activeBusiness.name} isLight={isLight} />
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Recommended Focus: <strong className="text-slate-200">{activeBusiness.recommendedFocus || 'Accelerate value creation'}</strong>
              </span>
              <button
                onClick={() => onSelectBusiness && onSelectBusiness(activeBusiness.id)}
                className="text-xs font-bold text-[#C9A227] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Navigate to {activeBusiness.name} Executive View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
