import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const OpportunitiesPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const opportunities = [
    { title: 'Solar Megapark Expansion in Rajasthan', division: 'ENERGY', val: '₹ 3,100 Cr', growth: '+28.0%', fit: 'Ultra High', confidence: '94%', decision: 'Capital Allocation Signoff Required' },
    { title: 'Aspect Smart Financial City Phase II', division: 'REALTY', val: '₹ 2,400 Cr', growth: '+24.5%', fit: 'High', confidence: '88%', decision: 'Land Acquisition Signoff' },
    { title: 'Robotic Aerospace Export Line Expansion', division: 'INDUSTRIES', val: '₹ 1,800 Cr', growth: '+32.0%', fit: 'High', confidence: '91%', decision: 'Equipment Import License' },
    { title: 'LBMA Zero-Carbon Bullion Refinery Expansion', division: 'BULLION & REFINERY', val: '₹ 1,450 Cr', growth: '+19.2%', fit: 'High', confidence: '96%', decision: 'Central Bank Vault Contract' },
  ];

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
            VALUE CREATION PIPELINE
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            GROWTH & STRATEGIC OPPORTUNITIES
          </h1>
        </div>
        <span className="text-xs font-bold text-[#0E7C7B] bg-[#0E7C7B]/10 px-3 py-1 rounded-full border border-[#0E7C7B]/30">
          Pipeline Value: ₹ 14,200 Cr (+20.3%)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opp, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border flex flex-col justify-between ${
              isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider">{opp.division}</span>
                <span className="text-[10px] font-bold text-[#0E7C7B] bg-[#0E7C7B]/15 px-2.5 py-1 rounded border border-[#0E7C7B]/30">
                  Fit: {opp.fit}
                </span>
              </div>
              <h3 className={`text-base font-bold mt-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>{opp.title}</h3>

              <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'}`}>
                  <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Potential Value</span>
                  <span className="text-base font-bold text-[#0E7C7B] mt-0.5 block">{opp.val}</span>
                </div>
                <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'}`}>
                  <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Expected Growth</span>
                  <span className="text-base font-bold text-[#C9A227] mt-0.5 block">{opp.growth}</span>
                </div>
              </div>
            </div>

            <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
              <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Confidence: <strong className={isLight ? 'text-slate-900' : 'text-slate-200'}>{opp.confidence}</strong></span>
              <span className="text-[#C9A227] font-bold flex items-center gap-1 cursor-pointer hover:underline">
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
