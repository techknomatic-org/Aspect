import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { useTheme } from '../context/ThemeContext';
import { AspectWorldMap } from '../components/common/AspectWorldMap';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';

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
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-5 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Header Section */}
      <PageHeader
        category="GROUP ECOSYSTEM TOPOLOGY"
        title="ASPECT GLOBAL BUSINESS UNIVERSE"
        subtitle="9 Core Venture Categories • Real-time Cross-Entity Telemetry & Global Operations"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            9 Core Venture Categories • Real-time Telemetry
          </span>
        }
      />

      {/* Main 12-Col Grid: Left 5 Cols (9 Categories List) + Right 7 Cols (Selected Detail Deep-Dive) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: 9 Business Worlds List */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 h-full">
          {businesses.map((b) => {
            const isSelected = b.id === selectedId;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`p-3 lg:p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all duration-150 flex-1 ${isSelected
                  ? isLight
                    ? 'bg-gradient-to-r from-amber-50/90 via-white to-amber-50/40 border-[#C9A227] ring-2 ring-[#C9A227]/40 shadow-sm'
                    : 'bg-[#131C2E] border-[#C9A227] shadow-lg shadow-[#C9A227]/10'
                  : isLight
                    ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                    : 'bg-[#0E172E]/90 border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                  }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {b.image3dUrl ? (
                    <img src={b.image3dUrl} alt={b.name} className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl object-cover border border-[#C9A227]/40 shrink-0 shadow-xs" />
                  ) : (
                    <div className="p-3 rounded-xl bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className={`text-sm lg:text-base font-black uppercase tracking-wider truncate ${isSelected ? 'text-[#C9A227]' : isLight ? 'text-[#1F2937]' : 'text-white'
                      }`}>
                      {b.name}
                    </h3>
                    <span className={`text-xs lg:text-sm font-semibold block truncate ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                      {b.category}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <span className={`text-sm lg:text-base font-black block ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                    {b.revenue}
                  </span>
                  <span className="text-xs lg:text-sm font-black text-[#0E7C7B] flex items-center justify-end gap-1">
                    <TrendingUp className="w-3.5 h-3.5 inline" /> ▲ {b.growth}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Business Ecosystem Deep-Dive Panel */}
        {activeBusiness && (
          <div className="lg:col-span-7 h-full flex flex-col">
            <Card noPadding className="p-5 lg:p-6 flex flex-col justify-between h-full space-y-4 rounded-2xl shadow-sm">
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                {/* 1. Business Header Strip */}
                <div className={`flex items-center justify-between pb-3.5 border-b shrink-0 ${isLight ? 'border-slate-300' : 'border-slate-800'}`}>
                  <div className="flex items-center gap-3.5 min-w-0">
                    {activeBusiness.image3dUrl && (
                      <img src={activeBusiness.image3dUrl} alt={activeBusiness.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-[#C9A227]/70 shadow-xs shrink-0" />
                    )}
                    <div className="min-w-0">
                      <span className="text-xs lg:text-sm font-extrabold text-[#C9A227] uppercase tracking-wider truncate block">
                        {activeBusiness.category}
                      </span>
                      <h2 className={`text-xl lg:text-2xl font-black uppercase tracking-tight truncate ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                        {activeBusiness.name}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectBusiness && onSelectBusiness(activeBusiness.id)}
                    className="px-4 py-2 rounded-xl bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-black text-xs lg:text-sm shadow-xs transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider shrink-0"
                  >
                    <span>Open Executive Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 2. Highlighted Business Description Area with increased font size & padding */}
                <div className={`py-3 px-4 rounded-xl border shrink-0 transition-all ${isLight
                  ? 'bg-amber-50/60 border-amber-200/80 text-[#1F2937]'
                  : 'bg-[#C9A227]/10 border-[#C9A227]/25 text-slate-200'
                  }`}>
                  <p className="text-sm lg:text-base leading-relaxed font-semibold">
                    {activeBusiness.description}
                  </p>
                </div>

                {/* 3. KEY OPERATIONAL METRICS: Increased Height & Width KPI Cards (3-col x 2-row) */}
                <div className="shrink-0">
                  <h4 className="text-xs lg:text-sm font-black text-[#C9A227] uppercase tracking-wider mb-2">
                    KEY OPERATIONAL METRICS
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 lg:gap-3">
                    {activeBusiness.operationalMetrics && Object.entries(activeBusiness.operationalMetrics).map(([k, v], idx) => {
                      const gradClass = idx % 3 === 0
                        ? isLight
                          ? 'bg-gradient-to-br from-[#0E7C7B]/15 via-[#0E7C7B]/8 to-white border-[#0E7C7B]/30'
                          : 'bg-gradient-to-br from-[#0E7C7B]/20 via-[#0E7C7B]/10 to-[#0A1624] border-[#0E7C7B]/40'
                        : idx % 3 === 1
                          ? isLight
                            ? 'bg-gradient-to-br from-[#C9A227]/15 via-[#C9A227]/8 to-white border-[#C9A227]/30'
                            : 'bg-gradient-to-br from-[#C9A227]/20 via-[#C9A227]/10 to-[#1F190B] border-[#C9A227]/40'
                          : isLight
                            ? 'bg-gradient-to-br from-[#4A6FA5]/15 via-[#4A6FA5]/8 to-white border-[#4A6FA5]/30'
                            : 'bg-gradient-to-br from-[#4A6FA5]/20 via-[#4A6FA5]/10 to-[#0F1729] border-[#4A6FA5]/40';

                      const labelColor = idx % 3 === 0
                        ? 'text-[#0E7C7B]'
                        : idx % 3 === 1
                          ? 'text-[#B8860B] dark:text-[#F59E0B]'
                          : 'text-[#3B6BA5] dark:text-[#60A5FA]';

                      return (
                        <div key={k} className={`py-3.5 px-4 min-h-[80px] lg:min-h-[88px] rounded-2xl border ${gradClass} shadow-2xs flex flex-col justify-between`}>
                          <span className={`text-[11px] lg:text-xs font-extrabold block uppercase tracking-wider leading-snug break-words ${labelColor}`}>
                            {k}
                          </span>
                          <span className={`font-black block text-lg lg:text-xl xl:text-2xl tracking-tight leading-none ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                            {v}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. STRATEGIC PERFORMANCE HIGHLIGHTS */}
                <div className="shrink-0">
                  <h4 className="text-xs lg:text-sm font-black text-[#C9A227] uppercase tracking-wider mb-2">
                    STRATEGIC PERFORMANCE HIGHLIGHTS
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {(activeBusiness.highlights || []).map((h, idx) => (
                      <div key={idx} className={`p-2.5 lg:p-3 rounded-xl border flex items-start gap-2 ${isLight ? 'bg-slate-50/80 border-slate-300 text-[#1F2937]' : 'bg-[#0B1426] border-slate-800 text-slate-200'
                        }`}>
                        <CheckCircle2 className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" />
                        <span className={`text-xs lg:text-sm font-semibold leading-snug ${isLight ? 'text-[#1F2937]' : 'text-slate-200'}`}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. ASPECT GLOBAL PRESENCE MAP */}
                <div className="rounded-2xl border overflow-hidden shadow-2xs">
                  <AspectWorldMap isLight={isLight} height="320px" />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </motion.div>
  );
};
