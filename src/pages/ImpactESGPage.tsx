import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ImpactESGPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none font-sans"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[#0E7C7B] uppercase">
            SUSTAINABILITY & COMMUNITY TELEMETRY
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            IMPACT & ESG SUSTAINABILITY DASHBOARD
          </h1>
        </div>
        <span className="text-xs font-bold text-[#0E7C7B] bg-[#0E7C7B]/10 px-3 py-1 rounded-full border border-[#0E7C7B]/30">
          ESG Score: 68.7 / 100 (+5.2 pts YoY)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Foundation Impact Card */}
        <div className={`lg:col-span-6 p-6 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
        }`}>
          <div className={`flex items-center gap-3 pb-4 border-b ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
            <div className="p-3 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227]">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest">ASPECT FOUNDATION</span>
              <h2 className={`text-lg font-bold uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>Community Impact & Beneficiaries</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'}`}>
              <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Beneficiaries Reached</span>
              <span className="text-xl font-bold text-[#C9A227] mt-0.5 block">2.4M Families</span>
            </div>
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'}`}>
              <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Funds Utilization Rate</span>
              <span className="text-xl font-bold text-[#0E7C7B] mt-0.5 block">98.4%</span>
            </div>
          </div>
        </div>

        {/* Clean Energy & Carbon Offset Card */}
        <div className={`lg:col-span-6 p-6 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
        }`}>
          <div className={`flex items-center gap-3 pb-4 border-b ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
            <div className="p-3 rounded-xl bg-[#0E7C7B]/15 border border-[#0E7C7B]/40 text-[#0E7C7B]">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0E7C7B] uppercase tracking-widest">ASPECT ENERGY & RENEWABLES</span>
              <h2 className={`text-lg font-bold uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>Clean Power & CO2 Offsets</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'}`}>
              <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Installed Clean Energy</span>
              <span className="text-xl font-bold text-[#0E7C7B] mt-0.5 block">4.8 GW</span>
            </div>
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'}`}>
              <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>CO2 Emissions Offset</span>
              <span className="text-xl font-bold text-[#0E7C7B] mt-0.5 block">6.2M Tons</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
