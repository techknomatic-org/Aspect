import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AspectWorldMap } from '../components/common/AspectWorldMap';

export const GlobalViewPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

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
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none font-sans"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase">
            GEOSPATIAL ASSET FOOTPRINT
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            GLOBAL OPERATIONS & REGIONAL VIEW
          </h1>
        </div>
        <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>10 International Geographies • Active Operations</span>
      </div>

      {/* Global Interactive Summary */}
      <div className={`${
        isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
      } border rounded-2xl p-6 relative overflow-hidden space-y-6`}>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227]">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest">GLOBAL EXPANSION COCKPIT</span>
            <h2 className={`text-lg font-bold uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>Operational Footprint Across 10 Countries</h2>
            <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>India • USA • UK • Singapore • Dubai • Australia • Japan • Indonesia • Malaysia • Mauritius</p>
          </div>
        </div>

        {/* Leaflet Interactive World Map */}
        <AspectWorldMap isLight={isLight} />

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((reg, idx) => (
            <div key={idx} className={`p-4 rounded-xl border flex flex-col justify-between text-xs ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-[#0B1426] border-slate-800 text-slate-100'
            }`}>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A227]" />
                    <span className={`font-bold text-sm uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>{reg.country}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0E7C7B] bg-[#0E7C7B]/10 px-2 py-0.5 rounded border border-[#0E7C7B]/30">
                    {reg.growth}
                  </span>
                </div>
                <span className="text-[10px] text-[#0E7C7B] font-semibold block mt-1">{reg.status}</span>
                <p className={`text-[11px] mt-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}><strong>Ventures:</strong> {reg.ventures}</p>
              </div>
              <div className={`mt-3 pt-2 border-t flex items-center justify-between text-xs ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
                <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Regional Revenue:</span>
                <strong className="text-[#C9A227] font-bold">{reg.revenue}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
