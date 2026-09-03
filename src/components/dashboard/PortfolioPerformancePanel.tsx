import React from 'react';
import { Award, Eye, TrendingUp } from 'lucide-react';
import { ValueCreatorItem, WatchlistItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface PortfolioPerformancePanelProps {
  topCreators: ValueCreatorItem[];
  watchlist: WatchlistItem[];
  onSelectBusiness?: (businessId: string) => void;
}

export const PortfolioPerformancePanel: React.FC<PortfolioPerformancePanelProps> = ({
  topCreators,
  watchlist,
  onSelectBusiness,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
      {/* TOP VALUE CREATORS (MAX 3) */}
      <div className={`${
        isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
      } border rounded-2xl p-5 flex flex-col justify-between`}>
        <div>
          <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-200' : 'border-navy-800'}`}>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <h3 className={`text-xs font-outfit font-extrabold tracking-wider uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
                TOP VALUE CREATORS
              </h3>
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              Top 3 Leaders
            </span>
          </div>

          <div className="space-y-3 mt-3.5">
            {topCreators.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectBusiness && onSelectBusiness(item.businessId)}
                className={`p-3.5 rounded-xl border flex flex-col gap-1.5 transition-all duration-200 cursor-pointer group ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 hover:border-gold/60'
                    : 'bg-[#0A1021]/80 border-slate-800 hover:border-gold/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-gold uppercase tracking-wider">
                    {item.businessName}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> {item.growth}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className={`text-sm font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Revenue: {item.revenue}
                  </span>
                  <span className="text-[10px] text-teal-400 font-semibold">{item.health}</span>
                </div>

                <p className="text-[11px] text-slate-400 border-t border-slate-800/40 pt-1">
                  <strong className="text-slate-300">Key Driver:</strong> {item.valueDriver}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WATCHLIST (MAX 3) */}
      <div className={`${
        isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
      } border rounded-2xl p-5 flex flex-col justify-between`}>
        <div>
          <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-200' : 'border-navy-800'}`}>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-400" />
              <h3 className={`text-xs font-outfit font-extrabold tracking-wider uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
                EXECUTIVE WATCHLIST
              </h3>
            </div>
            <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
              Requires Monitoring
            </span>
          </div>

          <div className="space-y-3 mt-3.5">
            {watchlist.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectBusiness && onSelectBusiness(item.businessId)}
                className={`p-3.5 rounded-xl border flex flex-col gap-1.5 transition-all duration-200 cursor-pointer group ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 hover:border-gold/60'
                    : 'bg-[#0A1021]/80 border-slate-800 hover:border-gold/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-gold uppercase tracking-wider">
                    {item.businessName}
                  </span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase ${
                    item.status === 'Critical'
                      ? 'bg-rose-950/80 border border-rose-500/50 text-rose-300'
                      : 'bg-amber-950/80 border border-amber-500/50 text-amber-300'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <p className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'} group-hover:text-gold transition-colors`}>
                  {item.issue}
                </p>

                <p className="text-[11px] text-slate-400 border-t border-slate-800/40 pt-1">
                  <strong className="text-rose-400">Impact:</strong> {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
