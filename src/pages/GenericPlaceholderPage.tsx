import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Activity, Layers, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';

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
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-4 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="ASPECT ONE EXECUTIVE COMMAND"
        title={title}
        subtitle={subtitle}
        rightElement={
          <button
            onClick={onBackToOverview}
            className="px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131C2E] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1426] text-xs font-black uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Overview</span>
          </button>
        }
      />

      {/* Structured Executive Template Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card noPadding className="p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 flex items-center justify-center text-[#0E7C7B] font-black">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className={`text-sm lg:text-base font-black uppercase tracking-tight ${
              isLight ? 'text-[#1F2937]' : 'text-white'
            }`}>
              {title} Strategic Index
            </h3>
            <p className={`text-xs font-medium leading-relaxed ${
              isLight ? 'text-[#6B7280]' : 'text-slate-400'
            }`}>
              Real-time telemetry and advanced predictive AI synthesis monitoring all sub-entities in the {title} module.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-[#0E7C7B] font-bold uppercase tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Live Feeds Connected
          </div>
        </Card>

        <Card noPadding className="p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] font-black">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className={`text-sm lg:text-base font-black uppercase tracking-tight ${
              isLight ? 'text-[#1F2937]' : 'text-white'
            }`}>
              {title} Executive Governance
            </h3>
            <p className={`text-xs font-medium leading-relaxed ${
              isLight ? 'text-[#6B7280]' : 'text-slate-400'
            }`}>
              Governance benchmarks and compliance metrics verified under 256-bit Aspect Enterprise Security protocol.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-[#0E7C7B] font-bold uppercase tracking-wider">
            ISO 27001 & LBMA Compliant
          </div>
        </Card>

        <Card noPadding className="p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#4A6FA5]/15 border border-[#4A6FA5]/30 flex items-center justify-center text-[#4A6FA5] font-black">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className={`text-sm lg:text-base font-black uppercase tracking-tight ${
              isLight ? 'text-[#1F2937]' : 'text-white'
            }`}>
              {title} Predictive Modeling
            </h3>
            <p className={`text-xs font-medium leading-relaxed ${
              isLight ? 'text-[#6B7280]' : 'text-slate-400'
            }`}>
              Monte Carlo risk simulations and capital optimization algorithms operating on real-time market data.
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-[#B8860B] dark:text-[#F59E0B] font-bold uppercase tracking-wider">
            Accuracy Confidence: 99.4%
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
