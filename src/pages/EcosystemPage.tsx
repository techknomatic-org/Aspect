import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { useTheme } from '../context/ThemeContext';
import { AspectWorldMap } from '../components/common/AspectWorldMap';

interface EcosystemPageProps {
  onSelectBusiness?: (businessId: string) => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({ onSelectBusiness }) => {
  const [businesses, setBusinesses] = useState<EcosystemBusiness[]>([]);
  const [selectedId, setSelectedId] = useState<string>('energy');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    ecosystemService.getAllBusinesses().then(setBusinesses);
  }, []);

  const activeBusiness = businesses.find((b) => b.id === selectedId) || businesses[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none font-sans"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase">
            GROUP ECOSYSTEM TOPOLOGY
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            ASPECT GLOBAL BUSINESS UNIVERSE
          </h1>
        </div>
        <span className={`text-xs font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>9 Core Venture Categories • Real-time Telemetry</span>
      </div>

      {/* Grid Layout: Left 9 Business Selector Cards + Right Active Business Deep-Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 9 Business Worlds List */}
        <div className="lg:col-span-5 space-y-3">
          {businesses.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? isLight
                      ? 'bg-amber-50/80 border-[#C9A227] shadow-md'
                      : 'bg-[#131C2E] border-[#C9A227] shadow-lg shadow-[#C9A227]/10'
                    : isLight
                    ? 'bg-white border-slate-200 hover:border-[#C9A227]/50 text-slate-900'
                    : 'bg-[#0E172E]/90 border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {b.image3dUrl ? (
                    <img src={b.image3dUrl} alt={b.name} className="w-10 h-10 rounded-lg object-cover border border-[#C9A227]/40 shrink-0" />
                  ) : (
                    <div className="p-2 rounded-lg bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xs font-bold uppercase ${isSelected ? 'text-[#C9A227]' : isLight ? 'text-slate-900' : 'text-white'}`}>
                      {b.name}
                    </h3>
                    <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{b.category}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-xs font-bold block ${isLight ? 'text-slate-900' : 'text-white'}`}>{b.revenue}</span>
                  <span className="text-[10px] font-bold text-[#0E7C7B]">▲ {b.growth}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Business Ecosystem View */}
        {activeBusiness && (
          <div className={`lg:col-span-7 p-6 rounded-2xl border flex flex-col justify-between ${
            isLight ? 'bg-white border-slate-200 shadow-sm text-slate-900' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
          }`}>
            <div>
              <div className={`flex items-center justify-between pb-4 border-b ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                <div className="flex items-center gap-3">
                  {activeBusiness.image3dUrl && (
                    <img src={activeBusiness.image3dUrl} alt={activeBusiness.name} className="w-14 h-14 rounded-xl object-cover border-2 border-[#C9A227]/60 shadow-md" />
                  )}
                  <div>
                    <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest">{activeBusiness.category}</span>
                    <h2 className={`text-xl font-bold uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>{activeBusiness.name}</h2>
                  </div>
                </div>
                <button
                  onClick={() => onSelectBusiness && onSelectBusiness(activeBusiness.id)}
                  className="px-4 py-2 rounded-xl bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Executive Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Business Description */}
              <p className={`text-xs mt-4 leading-relaxed font-normal ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {activeBusiness.description}
              </p>

              {/* Operational Telemetry Grid */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider mb-3">
                  Key Operational Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {activeBusiness.operationalMetrics && Object.entries(activeBusiness.operationalMetrics).map(([k, v]) => (
                    <div key={k} className={`p-3.5 rounded-xl border text-xs ${
                      isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-[#0B1426] border-slate-800 text-slate-100'
                    }`}>
                      <span className={`text-[10px] block truncate ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>{k}</span>
                      <span className={`font-bold mt-0.5 block text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Performance Highlights */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider mb-3">
                  Strategic Performance Highlights
                </h4>
                <ul className="space-y-2 text-xs">
                  {(activeBusiness.highlights || []).map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" />
                      <span className={isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aspect Global World Presence Map — at the bottom */}
              <div className="mt-5">
                <AspectWorldMap isLight={isLight} />
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className={`mt-6 pt-4 border-t flex items-center justify-between ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <span className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Recommended Focus: <strong className={isLight ? 'text-slate-900' : 'text-slate-200'}>{activeBusiness.recommendedFocus || 'Accelerate value creation'}</strong>
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
