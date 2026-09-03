import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const GlobalViewPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const card = isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl';
  const innerCard = isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A1021] border-slate-800';
  const textPrimary = isLight ? 'text-slate-900' : 'text-white';
  const textSec = isLight ? 'text-slate-500' : 'text-slate-400';
  const divider = isLight ? 'border-slate-200' : 'border-slate-800';

  const regions = [
    { country: 'India', status: 'Core HQ & Operations', revenue: '₹ 16,850 Cr', ventures: 'Realty, Energy, Infra, Bullion, Hospitality, Sports, Foundation', growth: '+18.2%' },
    { country: 'Dubai / UAE', status: 'Precious Metals & Minting Hub', revenue: '₹ 4,200 Cr', ventures: 'Bullion Minting, Hospitality, Immersive Theme Park', growth: '+22.4%' },
    { country: 'USA', status: 'Technology & Media IP', revenue: '₹ 1,850 Cr', ventures: 'Entertainment Digital IP, Sports Tech', growth: '+14.5%' },
    { country: 'UK & Europe', status: 'Capital Markets & Realty', revenue: '₹ 920 Cr', ventures: 'Realty Financial Towers, Luxury Resorts', growth: '+9.8%' },
    { country: 'Singapore', status: 'Commodities Trading Hub', revenue: '₹ 680 Cr', ventures: 'Bullion Trading, Logistics Services', growth: '+16.1%' },
    { country: 'Australia', status: 'Clean Energy & Mining', revenue: '₹ 350 Cr', ventures: 'Green Energy Components, Ecomining', growth: '+28.0%' },
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
            GEOSPATIAL ASSET FOOTPRINT
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${textPrimary}`}>
            GLOBAL OPERATIONS & REGIONAL VIEW
          </h1>
        </div>
        <span className={`text-xs ${textSec}`}>10 International Geographies • Active Operations</span>
      </div>

      {/* Global Interactive Summary */}
      <div className={`${card} border rounded-2xl p-6 relative overflow-hidden`}>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gold/15 border border-gold/40 text-gold">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-gold uppercase tracking-widest">GLOBAL EXPANSION COCKPIT</span>
            <h2 className={`text-lg font-outfit font-extrabold uppercase ${textPrimary}`}>Operational Footprint Across 10 Countries</h2>
            <p className={`text-xs mt-0.5 ${textSec}`}>India • USA • UK • Singapore • Dubai • Australia • Japan • Indonesia • Malaysia • Mauritius</p>
          </div>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {regions.map((reg, idx) => (
            <div key={idx} className={`p-4 rounded-xl border flex flex-col justify-between text-xs ${innerCard}`}>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className={`font-extrabold text-sm uppercase ${textPrimary}`}>{reg.country}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {reg.growth}
                  </span>
                </div>
                <span className="text-[10px] text-teal-400 font-semibold block mt-1">{reg.status}</span>
                <p className={`text-[11px] mt-2 ${textSec}`}><strong className={textPrimary}>Ventures:</strong> {reg.ventures}</p>
              </div>
              <div className={`mt-3 pt-2 border-t flex items-center justify-between text-xs ${divider}`}>
                <span className={textSec}>Regional Revenue:</span>
                <strong className="text-gold font-extrabold">{reg.revenue}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
