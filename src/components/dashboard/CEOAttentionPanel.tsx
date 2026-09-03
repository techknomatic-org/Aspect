import React from 'react';
import { AlertTriangle, ArrowRight, ShieldAlert, Zap, Eye } from 'lucide-react';
import { CEOAttentionItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface CEOAttentionPanelProps {
  items: CEOAttentionItem[];
  onSelectBusiness?: (businessId: string) => void;
}

export const CEOAttentionPanel: React.FC<CEOAttentionPanelProps> = ({ items, onSelectBusiness }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const getSeverityBadge = (severity: CEOAttentionItem['severity']) => {
    switch (severity) {
      case 'Critical':
        return (
          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500/50 text-rose-300 uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
            CRITICAL
          </span>
        );
      case 'Attention':
        return (
          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/50 text-amber-300 uppercase tracking-wider flex items-center gap-1">
            <AlertTriangle className="w-2.5 h-2.5" />
            ATTENTION
          </span>
        );
      case 'Watch':
        return (
          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-800 border border-slate-600 text-slate-300 uppercase tracking-wider flex items-center gap-1">
            <Eye className="w-2.5 h-2.5" />
            WATCH
          </span>
        );
      case 'Opportunity':
        return (
          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-teal-950/80 border border-teal-500/50 text-teal-300 uppercase tracking-wider flex items-center gap-1">
            <Zap className="w-2.5 h-2.5" />
            OPPORTUNITY
          </span>
        );
      default:
        return (
          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/50 text-amber-300 uppercase tracking-wider flex items-center gap-1">
            ATTENTION
          </span>
        );
    }
  };

  return (
    <div className={`${
      isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
    } border rounded-2xl p-5 select-none flex flex-col justify-between h-full`}>
      <div>
        <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-200' : 'border-navy-800'}`}>
          <div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <h3 className={`text-xs font-outfit font-extrabold tracking-wider uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
                CEO ATTENTION & DECISION MATRIX
              </h3>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">What requires leadership focus today</p>
          </div>
          <span className="text-[10px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
            {items.length} Actions
          </span>
        </div>

        {/* List of Priorities */}
        <div className="space-y-3 mt-3.5">
          {items.slice(0, 5).map((item) => (
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
                <span className="text-[11px] font-extrabold text-gold uppercase tracking-wider">
                  {item.businessName}
                </span>
                {getSeverityBadge(item.severity)}
              </div>

              <p className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'} group-hover:text-gold transition-colors`}>
                {item.issue}
              </p>

              <div className="text-[10px] space-y-0.5 text-slate-400 pt-1 border-t border-slate-800/40">
                <div><strong className="text-rose-400 font-semibold">Financial Impact:</strong> {item.financialImpact || item.impact}</div>
                <div><strong className="text-amber-300 font-semibold">Business Impact:</strong> {item.businessImpact || 'Operational Review'}</div>
                <div className="flex items-center justify-between text-teal-400 font-medium pt-1">
                  <span><strong>Action:</strong> {item.recommendedAction || item.actionRequired}</span>
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
