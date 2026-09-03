import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Landmark, Zap, Heart, CheckCircle, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ImpactESGPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-outfit font-extrabold tracking-widest text-emerald-400 uppercase">
            SUSTAINABILITY & COMMUNITY TELEMETRY
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            IMPACT & ESG SUSTAINABILITY DASHBOARD
          </h1>
        </div>
        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
          ESG Score: 68.7 / 100 (+5.2 pts YoY)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Foundation Impact Card */}
        <div className={`lg:col-span-6 p-6 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
        }`}>
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="p-3 rounded-xl bg-gold/15 border border-gold/40 text-gold">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-gold uppercase tracking-widest">ASPECT FOUNDATION</span>
              <h2 className="text-lg font-outfit font-extrabold text-white uppercase">Community Impact & Beneficiaries</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Beneficiaries Reached</span>
              <span className="text-xl font-extrabold text-gold mt-0.5 block">2.4M Families</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Funds Utilization Rate</span>
              <span className="text-xl font-extrabold text-emerald-400 mt-0.5 block">98.4%</span>
            </div>
          </div>
        </div>

        {/* Clean Energy & Carbon Offset Card */}
        <div className={`lg:col-span-6 p-6 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
        }`}>
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">ASPECT ENERGY & RENEWABELS</span>
              <h2 className="text-lg font-outfit font-extrabold text-white uppercase">Clean Power & CO2 Offsets</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Installed Clean Energy</span>
              <span className="text-xl font-extrabold text-emerald-400 mt-0.5 block">4.8 GW</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block">CO2 Emissions Offset</span>
              <span className="text-xl font-extrabold text-teal-300 mt-0.5 block">6.2M Tons</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
