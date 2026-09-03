import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, TrendingUp, ShieldCheck, CheckCircle2, Clock, AlertTriangle, ExternalLink } from 'lucide-react';
import { EcosystemBusiness } from '../../types';

interface BusinessDetailModalProps {
  business: EcosystemBusiness | null;
  onClose: () => void;
}

export const BusinessDetailModal: React.FC<BusinessDetailModalProps> = ({ business, onClose }) => {
  if (!business) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#0B132B] border border-gold/40 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
        >
          {/* Header Bar */}
          <div className="p-6 bg-gradient-to-r from-navy-800 via-[#101935] to-navy-950 border-b border-navy-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/50 flex items-center justify-center text-gold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-gold uppercase">
                  {business.category}
                </span>
                <h2 className="text-xl font-extrabold text-white">{business.name}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#101935] border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">YTD Revenue</div>
                <div className="text-lg font-bold text-emerald-400 mt-0.5">{business.revenue}</div>
              </div>
              <div className="bg-[#101935] border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">YoY Growth</div>
                <div className="text-lg font-bold text-teal-300 mt-0.5 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> {business.growth}
                </div>
              </div>
              <div className="bg-[#101935] border border-slate-800 rounded-xl p-3">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">{business.keyMetricLabel}</div>
                <div className="text-lg font-bold text-gold mt-0.5">{business.keyMetricValue}</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Executive Overview
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-[#070D1B] p-3 rounded-xl border border-slate-800">
                {business.description}
              </p>
            </div>

            {/* Strategic Highlights */}
            {business.highlights && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Strategic Performance Highlights
                </h4>
                <div className="space-y-2">
                  {business.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Major Capital Projects */}
            {business.projects && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  Active Major Projects ({business.projects.length})
                </h4>
                <div className="space-y-3">
                  {business.projects.map((proj, i) => (
                    <div key={i} className="p-3 bg-[#101935] rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-white">{proj.name}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold ${proj.status === 'Completed'
                              ? 'text-emerald-400 bg-emerald-950/80 border border-emerald-500/30'
                              : proj.status === 'Delayed'
                                ? 'text-amber-400 bg-amber-950/80 border border-amber-500/30'
                                : 'text-sky-400 bg-sky-950/80 border border-sky-500/30'
                            }`}
                        >
                          {proj.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                        <span>Location: {proj.location}</span>
                        <span>Outlay: {proj.investment}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-teal-400 to-gold h-full rounded-full transition-all duration-500"
                          style={{ width: `${proj.completion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 bg-navy-950 border-t border-navy-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Division Code: ASP-{business.id.toUpperCase()}</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gold hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Close Executive Card
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
