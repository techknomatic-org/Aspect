import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { EcosystemBusiness } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { StatusBadge } from '../common/StatusBadge';

interface BusinessDetailModalProps {
  business: EcosystemBusiness | null;
  onClose: () => void;
}

export const BusinessDetailModal: React.FC<BusinessDetailModalProps> = ({ business, onClose }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!business) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          className={`border rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative ${
            isLight ? 'bg-white border-slate-300 text-[#1F2937]' : 'bg-[#0B132B] border-[#C9A227]/40 text-slate-100'
          }`}
        >
          {/* Header Bar */}
          <div className={`p-5 border-b flex items-center justify-between ${
            isLight ? 'bg-white border-slate-200' : 'bg-[#0B1426] border-slate-800'
          }`}>
            <div className="flex items-center gap-3.5">
              {business.image3dUrl ? (
                <img src={business.image3dUrl} alt={business.name} className="w-12 h-12 rounded-xl object-cover border border-[#C9A227]/50 shadow-xs shrink-0" />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
              )}
              <div>
                <span className="text-xs font-bold tracking-wider text-[#C9A227] uppercase block">
                  {business.category}
                </span>
                <h2 className={`text-xl font-black uppercase tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  {business.name}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isLight ? 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-900' : 'bg-[#172033] border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 max-h-[75vh] overflow-y-auto space-y-4 text-xs">
            {/* Top Metric Cards (3 Columns) */}
            <div className="grid grid-cols-3 gap-3.5">
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-slate-200 shadow-2xs' : 'bg-[#101935] border-slate-800'
              }`}>
                <div className="text-[10px] text-[#0E7C7B] font-extrabold uppercase tracking-wider">YTD REVENUE</div>
                <div className={`text-lg font-black mt-0.5 ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>{business.revenue}</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-slate-200 shadow-2xs' : 'bg-[#101935] border-slate-800'
              }`}>
                <div className="text-[10px] text-[#0E7C7B] font-extrabold uppercase tracking-wider">YOY GROWTH</div>
                <div className="text-lg font-black text-[#0E7C7B] mt-0.5 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> {business.growth}
                </div>
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-slate-200 shadow-2xs' : 'bg-[#101935] border-slate-800'
              }`}>
                <div className="text-[10px] text-[#B8860B] dark:text-[#F59E0B] font-extrabold uppercase tracking-wider truncate">
                  {business.keyMetricLabel ? business.keyMetricLabel.toUpperCase() : 'PORTFOLIO VALUE'}
                </div>
                <div className="text-lg font-black text-[#B8860B] dark:text-[#F59E0B] mt-0.5 truncate">
                  {business.keyMetricValue || business.portfolioValue}
                </div>
              </div>
            </div>

            {/* Executive Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-1.5">
                EXECUTIVE OVERVIEW
              </h4>
              <p className={`p-3.5 rounded-xl border leading-relaxed font-semibold ${
                isLight ? 'bg-white border-slate-200 text-[#1F2937]' : 'bg-[#070D1B] border-slate-800 text-slate-300'
              }`}>
                {business.description}
              </p>
            </div>

            {/* Strategic Performance Highlights */}
            {business.highlights && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-2">
                  STRATEGIC PERFORMANCE HIGHLIGHTS
                </h4>
                <div className="space-y-2">
                  {business.highlights.map((h, i) => (
                    <div key={i} className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isLight ? 'bg-white border-slate-200 text-[#1F2937]' : 'bg-white/5 border-slate-800 text-slate-200'
                    }`}>
                      <ShieldCheck className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" />
                      <span className="font-semibold text-xs">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className={`p-4 border-t flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800'
          }`}>
            <span className={`text-[11px] font-bold uppercase tracking-wider ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
              DIVISION CODE: ASP-{business.id.toUpperCase()}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
            >
              CLOSE BRIEF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
