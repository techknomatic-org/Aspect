import React from 'react';
import { Target, TrendingUp, ArrowRight } from 'lucide-react';
import { OpportunityItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface GrowthOpportunitiesPanelProps {
  opportunities: OpportunityItem[];
  onSelectBusiness?: (businessId: string) => void;
}

export const GrowthOpportunitiesPanel: React.FC<GrowthOpportunitiesPanelProps> = ({
  opportunities,
  onSelectBusiness,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`${
      isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
    } border rounded-2xl p-5 select-none h-full flex flex-col justify-between`}>
      <div>
        <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-200' : 'border-navy-800'}`}>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-teal-400" />
            <div>
              <h3 className={`text-xs font-outfit font-extrabold tracking-wider uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
                GROWTH & STRATEGIC OPPORTUNITIES
              </h3>
              <p className="text-[10px] text-slate-400">High-conviction value creation pipeline</p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
            Top 3 Opportunities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-3.5">
          {opportunities.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectBusiness && onSelectBusiness(item.businessId)}
              className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all duration-200 cursor-pointer group ${
                isLight
                  ? 'bg-slate-50 border-slate-200 hover:border-gold/60'
                  : 'bg-[#0A1021]/80 border-slate-800 hover:border-gold/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-gold uppercase tracking-wider">
                    {item.businessName}
                  </span>
                  <span className="text-[10px] font-bold text-teal-400 bg-teal-500/15 px-2 py-0.5 rounded">
                    Fit: {item.strategicFit}
                  </span>
                </div>

                <h4 className={`text-xs font-bold mt-2 ${isLight ? 'text-slate-900' : 'text-white'} group-hover:text-gold transition-colors`}>
                  {item.opportunity}
                </h4>

                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Potential Value</span>
                    <span className="text-sm font-extrabold text-emerald-400">{item.potentialValue}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Expected Growth</span>
                    <span className="text-xs font-bold text-teal-300 flex items-center gap-0.5 justify-end">
                      <TrendingUp className="w-3 h-3" /> {item.expectedGrowth}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/40 space-y-1 text-[10px]">
                <div className="flex justify-between text-slate-400">
                  <span>Confidence Index:</span>
                  <strong className="text-slate-200">{item.confidence}</strong>
                </div>
                <div className="flex justify-between items-center text-teal-400 font-semibold pt-1">
                  <span>Decision: {item.decisionRequired}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
