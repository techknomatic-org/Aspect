import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, TrendingUp, ArrowRight, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
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
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-outfit font-extrabold tracking-widest text-gold uppercase">
            GROUP ECOSYSTEM TOPOLOGY
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            ASPECT GLOBAL BUSINESS UNIVERSE
          </h1>
        </div>
        <span className="text-xs text-slate-400">9 Core Venture Categories • Real-time Telemetry</span>
      </div>

      {/* Grid Layout: Left 9 Business Selector Cards + Right Active Business Deep-Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 9 Orbiting Business Worlds List */}
        <div className="lg:col-span-5 space-y-3">
          {businesses.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <div
                key={b.id}
                onClick={() => {
                  setSelectedId(b.id);
                }}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-200 ${isSelected
                    ? 'bg-gradient-to-r from-gold/20 via-navy-900 to-navy-900 border-gold shadow-lg shadow-gold/10'
                    : isLight
                      ? 'bg-white border-slate-200 hover:border-gold/50 text-slate-800'
                      : 'bg-[#0E172E]/90 border-navy-700/60 hover:border-gold/40 text-slate-100'
                  }`}
              >
                <div className="flex items-center gap-3">
                  {b.image3dUrl ? (
                    <img src={b.image3dUrl} alt={b.name} className="w-10 h-10 rounded-lg object-cover border border-gold/40 shrink-0" />
                  ) : (
                    <div className="p-2 rounded-lg bg-gold/15 text-gold border border-gold/30 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xs font-outfit font-extrabold uppercase ${isSelected ? 'text-gold' : isLight ? 'text-slate-900' : 'text-white'}`}>
                      {b.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 block">{b.category}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-white block">{b.revenue}</span>
                  <span className="text-[10px] font-bold text-emerald-400">▲ {b.growth}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Business Ecosystem View */}
        {activeBusiness && (
          <div className={`lg:col-span-7 p-6 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
            }`}>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  {activeBusiness.image3dUrl && (
                    <img src={activeBusiness.image3dUrl} alt={activeBusiness.name} className="w-14 h-14 rounded-xl object-cover border-2 border-gold/60 shadow-md" />
                  )}
                  <div>
                    <span className="text-[10px] font-extrabold text-gold uppercase tracking-widest">{activeBusiness.category}</span>
                    <h2 className="text-xl font-outfit font-extrabold uppercase text-white">{activeBusiness.name}</h2>
                  </div>
                </div>
                <button
                  onClick={() => onSelectBusiness && onSelectBusiness(activeBusiness.id)}
                  className="px-4 py-2 rounded-xl bg-gold hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Executive Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                {activeBusiness.description}
              </p>

              {/* Operational Telemetry Grid */}
              <div className="mt-4">
                <h4 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider mb-3">
                  Key Operational Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {activeBusiness.operationalMetrics && Object.entries(activeBusiness.operationalMetrics).map(([k, v]) => (
                    <div key={k} className="p-3 rounded-xl bg-[#0A1021] border border-slate-800 text-xs">
                      <span className="text-[10px] text-slate-400 block">{k}</span>
                      <span className="font-extrabold text-white mt-0.5 block text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Highlights */}
              <div className="mt-4">
                <h4 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider mb-3">
                  Strategic Performance Highlights
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {(activeBusiness.highlights || []).map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aspect Global World Presence Map — at the bottom */}
              <div className="mt-4">
                <AspectWorldMap isLight={isLight} />
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Recommended Focus: <strong>{activeBusiness.recommendedFocus || 'Accelerate value creation'}</strong>
              </span>
              <button
                onClick={() => onSelectBusiness && onSelectBusiness(activeBusiness.id)}
                className="text-xs font-bold text-gold hover:underline flex items-center gap-1"
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
