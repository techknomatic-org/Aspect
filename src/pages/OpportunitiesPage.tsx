import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const OpportunitiesPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const card = isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl';
  const innerCard = isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A1021] border-slate-800';
  const textPrimary = isLight ? 'text-slate-900' : 'text-white';
  const textSec = isLight ? 'text-slate-500' : 'text-slate-400';
  const divider = isLight ? 'border-slate-200' : 'border-slate-800';

  const opportunities = [
    { title: 'Solar Megapark Expansion in Rajasthan',  division: 'ENERGY',            val: '₹ 3,100 Cr', growth: '+28.0%', fit: 'Ultra High', confidence: '94%', decision: 'Capital Allocation Signoff Required' },
    { title: 'Aspect Smart Financial City Phase II',    division: 'REALTY',            val: '₹ 2,400 Cr', growth: '+24.5%', fit: 'High',       confidence: '88%', decision: 'Land Acquisition Signoff' },
    { title: 'Robotic Aerospace Export Line Expansion', division: 'INDUSTRIES',        val: '₹ 1,800 Cr', growth: '+32.0%', fit: 'High',       confidence: '91%', decision: 'Equipment Import License' },
    { title: 'LBMA Zero-Carbon Bullion Refinery Expansion', division: 'BULLION & REFINERY', val: '₹ 1,450 Cr', growth: '+19.2%', fit: 'High', confidence: '96%', decision: 'Central Bank Vault Contract' },
  ];

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
            VALUE CREATION PIPELINE
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${textPrimary}`}>
            GROWTH & STRATEGIC OPPORTUNITIES
          </h1>
        </div>
        <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
          Pipeline Value: ₹ 14,200 Cr (+20.3%)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opp, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between ${card}`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-gold uppercase tracking-wider">{opp.division}</span>
                <span className="text-[10px] font-bold text-teal-400 bg-teal-500/15 px-2.5 py-1 rounded">
                  Fit: {opp.fit}
                </span>
              </div>
              <h3 className={`text-base font-extrabold mt-2 ${textPrimary}`}>{opp.title}</h3>

              <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                <div className={`p-3 rounded-xl border ${innerCard}`}>
                  <span className={`text-[10px] block ${textSec}`}>Potential Value</span>
                  <span className="text-base font-extrabold text-emerald-400 mt-0.5 block">{opp.val}</span>
                </div>
                <div className={`p-3 rounded-xl border ${innerCard}`}>
                  <span className={`text-[10px] block ${textSec}`}>Expected Growth</span>
                  <span className="text-base font-extrabold text-teal-400 mt-0.5 block">{opp.growth}</span>
                </div>
              </div>
            </div>

            <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${divider}`}>
              <span className={textSec}>Confidence: <strong className={textPrimary}>{opp.confidence}</strong></span>
              <span className="text-gold font-bold flex items-center gap-1">
                <span>{opp.decision}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
