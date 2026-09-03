import React from 'react';
import {
  Landmark,
  Coins,
  Building2,
  Construction,
  Factory,
  Hotel,
  Zap,
  Clapperboard,
  Trophy,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { EcosystemBusiness } from '../../types';
import { SparklineChart } from '../charts/SparklineChart';
import { useTheme } from '../../context/ThemeContext';

interface BusinessGridSectionProps {
  businesses: EcosystemBusiness[];
  onSelectBusiness: (business: EcosystemBusiness) => void;
}

export const BusinessGridSection: React.FC<BusinessGridSectionProps> = ({
  businesses,
  onSelectBusiness,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const getBusinessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-4 h-4" />;
      case 'Coins': return <Coins className="w-4 h-4" />;
      case 'Building2': return <Building2 className="w-4 h-4" />;
      case 'Bridge': return <Construction className="w-4 h-4" />;
      case 'Factory': return <Factory className="w-4 h-4" />;
      case 'Hotel': return <Hotel className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Clapperboard': return <Clapperboard className="w-4 h-4" />;
      case 'Trophy': return <Trophy className="w-4 h-4" />;
      default: return <Building2 className="w-4 h-4" />;
    }
  };

  const getStatusDot = (status: EcosystemBusiness['status']) => {
    switch (status) {
      case 'Healthy':
        return <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" title="Operational Healthy" />;
      case 'Warning':
        return <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 animate-pulse" title="Requires Attention" />;
      case 'Critical':
        return <span className="w-2 h-2 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50 animate-ping" title="Critical Issue" />;
    }
  };

  const featured = businesses.filter((b) => b.isFeatured);
  const compact = businesses.filter((b) => !b.isFeatured);

  return (
    <div className="space-y-4 select-none">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold text-gold tracking-widest uppercase">
            GROUP PORTFOLIO TELEMETRY
          </span>
          <h2 className={`text-lg font-outfit font-extrabold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            BUSINESS PERFORMANCE MATRIX
          </h2>
        </div>
        <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Showing 9 Divisions • Live Data Feeds
        </span>
      </div>

      {/* Featured Business Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {featured.map((b) => (
          <div
            key={b.id}
            onClick={() => onSelectBusiness(b)}
            className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-200 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl group ${
              isLight
                ? 'bg-white border-slate-200 shadow-sm hover:border-gold/60'
                : 'bg-[#0E172E]/90 border-navy-700/60 shadow-lg hover:border-gold/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gold/15 text-gold border border-gold/30">
                    {getBusinessIcon(b.iconName)}
                  </div>
                  <span className="text-xs font-extrabold text-gold uppercase tracking-wider">
                    {b.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusDot(b.status)}
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className={`text-xl font-outfit font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {b.revenue}
                </span>
                <span className="text-xs font-bold text-emerald-500 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> ▲ {b.growth}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-800/40 flex items-end justify-between">
              <div>
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{b.keyMetricLabel}</span>
                <span className="text-xs font-bold text-teal-400">{b.keyMetricValue}</span>
              </div>
              {b.sparklineData && (
                <div className="w-20">
                  <SparklineChart data={b.sparklineData} color={b.colorTheme || '#E5C05B'} height={24} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Compact Business Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
        {compact.map((b) => (
          <div
            key={b.id}
            onClick={() => onSelectBusiness(b)}
            className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 group ${
              isLight
                ? 'bg-slate-50 border-slate-200/90 shadow-sm hover:border-gold/50'
                : 'bg-[#0A1021]/80 border-slate-800 hover:border-gold/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-navy-800/80 text-slate-300 border border-slate-700/60">
                    {getBusinessIcon(b.iconName)}
                  </div>
                  <span className={`text-xs font-bold truncate ${isLight ? 'text-slate-900' : 'text-slate-100'} group-hover:text-gold transition-colors`}>
                    {b.name}
                  </span>
                </div>
                {getStatusDot(b.status)}
              </div>

              <div className="mt-2.5 flex items-baseline justify-between">
                <span className={`text-base font-outfit font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {b.revenue}
                </span>
                <span className="text-[11px] font-bold text-teal-400">▲ {b.growth}</span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-800/40 flex items-center justify-between text-[10px] text-slate-400">
              <span>{b.keyMetricLabel}: <strong className="text-slate-200">{b.keyMetricValue}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
