import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, ExternalLink } from 'lucide-react';

interface GenericPlaceholderPageProps {
  title: string;
  subtitle: string;
  onBackToOverview: () => void;
}

export const GenericPlaceholderPage: React.FC<GenericPlaceholderPageProps> = ({
  title,
  subtitle,
  onBackToOverview,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 space-y-6 select-none"
    >
      <div className="flex items-center justify-between border-b border-navy-800 pb-4">
        <div>
          <span className="text-[10px] font-bold text-gold tracking-widest uppercase">
            ASPECT ONE EXECUTIVE COMMAND
          </span>
          <h1 className="text-2xl font-extrabold text-white tracking-tight uppercase mt-1">
            {title}
          </h1>
          <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
        </div>

        <button
          onClick={onBackToOverview}
          className="px-4 py-2 bg-navy-800 hover:bg-gold hover:text-navy-950 border border-gold/40 text-gold text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Command Overview</span>
        </button>
      </div>

      {/* Structured Executive Template Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#101935] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold">
            01
          </div>
          <h3 className="text-base font-bold text-white uppercase">{title} Strategic Index</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Real-time telemetry and advanced predictive AI synthesis monitoring all sub-entities in the {title} module.
          </p>
          <div className="pt-3 border-t border-slate-800 text-xs text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Live Feeds Connected
          </div>
        </div>

        <div className="bg-[#101935] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold">
            02
          </div>
          <h3 className="text-base font-bold text-white uppercase">Executive Governance</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Governance benchmarks and compliance metrics verified under 256-bit Aspect Enterprise Security protocol.
          </p>
          <div className="pt-3 border-t border-slate-800 text-xs text-teal-400 font-bold">
            ISO 27001 & LBMA Compliant
          </div>
        </div>

        <div className="bg-[#101935] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold">
            03
          </div>
          <h3 className="text-base font-bold text-white uppercase">Predictive Modeling</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Monte Carlo risk simulations and capital optimization algorithms operating on real-time market data.
          </p>
          <div className="pt-3 border-t border-slate-800 text-xs text-gold font-bold">
            Accuracy Confidence: 99.4%
          </div>
        </div>
      </div>
    </motion.div>
  );
};
