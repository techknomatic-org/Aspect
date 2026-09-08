import React from 'react';
import { Sparkles, TrendingUp, AlertTriangle, Target, DollarSign } from 'lucide-react';
import { AIInsight } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface AIInsightsPanelProps {
  insights: AIInsight[];
  onViewAllClick: () => void;
  onSelectInsight: (insight: AIInsight) => void;
  onBackToBusiness?: () => void;
  businessName?: string;
}

export const AIInsightsPanel: React.FC<AIInsightsPanelProps> = ({
  insights,
  onViewAllClick,
  onSelectInsight,
  onBackToBusiness,
  businessName,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const getInsightIcon = (category: AIInsight['category']) => {
    switch (category) {
      case 'revenue':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#0E7C7B]/15 border border-[#0E7C7B]/35 flex items-center justify-center text-[#0E7C7B] shrink-0 mt-0.5 shadow-sm">
            <TrendingUp className="w-4.5 h-4.5" />
          </div>
        );
      case 'warning':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#C1502E]/15 border border-[#C1502E]/35 flex items-center justify-center text-[#C1502E] shrink-0 mt-0.5 shadow-sm">
            <AlertTriangle className="w-4.5 h-4.5" />
          </div>
        );
      case 'opportunity':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/35 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5 shadow-sm">
            <Target className="w-4.5 h-4.5" />
          </div>
        );
      case 'optimization':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#4A6FA5]/15 border border-[#4A6FA5]/35 flex items-center justify-center text-[#4A6FA5] shrink-0 mt-0.5 shadow-sm">
            <DollarSign className="w-4.5 h-4.5" />
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/35 flex items-center justify-center text-[#C9A227] shrink-0 mt-0.5 shadow-sm">
            <Sparkles className="w-4.5 h-4.5" />
          </div>
        );
    }
  };

  const getCategoryBadge = (category: AIInsight['category']) => {
    switch (category) {
      case 'revenue':
        return {
          label: 'REVENUE IMPACT',
          cls: isLight ? 'bg-[#0E7C7B]/10 text-[#0E7C7B] border-[#0E7C7B]/25' : 'bg-[#0E7C7B]/20 text-[#2dd4bf] border-[#0E7C7B]/35',
        };
      case 'warning':
        return {
          label: 'ACTION REQUIRED',
          cls: isLight ? 'bg-[#C1502E]/10 text-[#C1502E] border-[#C1502E]/25' : 'bg-[#C1502E]/20 text-[#fb7185] border-[#C1502E]/35',
        };
      case 'opportunity':
        return {
          label: 'OPPORTUNITY',
          cls: isLight ? 'bg-[#C9A227]/10 text-[#B8860B] border-[#C9A227]/25' : 'bg-[#C9A227]/20 text-[#fcd34d] border-[#C9A227]/35',
        };
      case 'optimization':
      default:
        return {
          label: 'EFFICIENCY',
          cls: isLight ? 'bg-[#4A6FA5]/10 text-[#3B6BA5] border-[#4A6FA5]/25' : 'bg-[#4A6FA5]/20 text-[#93c5fd] border-[#4A6FA5]/35',
        };
    }
  };

  const panelBg = isLight ? 'bg-[#EEF1F8] border-slate-300 shadow-sm' : 'bg-[#0B1426] border-white/10 shadow-2xl';
  const cardBg = isLight ? 'bg-white border-slate-200 hover:border-slate-300' : 'bg-[#172033] border-white/10 hover:border-white/20';

  return (
    <div className={`${panelBg} border rounded-2xl p-4 lg:p-5 flex flex-col justify-between h-full min-h-0 select-none transition-all duration-200 overflow-hidden font-sans`}>
      <div className="flex-1 min-h-0 flex flex-col justify-between">
        {/* Header */}
        <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-300' : 'border-white/10'} shrink-0`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C9A227]" />
            <h3 className={`text-base lg:text-lg xl:text-[19px] font-black tracking-wide uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
              AI INSIGHTS & TELEMETRY
            </h3>
          </div>
          <div className="flex items-center gap-3">
            {onBackToBusiness && (
              <button
                onClick={onBackToBusiness}
                className="text-xs lg:text-[13.5px] font-extrabold text-[#0E7C7B] hover:text-[#0E7C7B]/80 hover:underline cursor-pointer flex items-center gap-1 transition-colors"
              >
                ← Back to {businessName || 'Industry'}
              </button>
            )}
            <button
              onClick={onViewAllClick}
              className="text-xs lg:text-[13.5px] font-bold text-[#C9A227] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>
        </div>

        {/* Insights List — Evenly Distributed to Fill Available Middle Panel Height */}
        <div className="flex-1 min-h-0 flex flex-col justify-between space-y-2 py-2">
          {insights.map((insight) => {
            const badge = getCategoryBadge(insight.category);
            return (
              <div
                key={insight.id}
                onClick={() => onSelectInsight(insight)}
                className={`${cardBg} border rounded-xl p-3 lg:p-3.5 transition-all duration-200 hover:border-[#C9A227]/50 hover:shadow-md cursor-pointer flex items-start gap-3 flex-1 min-h-0 group`}
              >
                {getInsightIcon(insight.category)}
                <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <h4 className={`text-sm lg:text-[15.5px] font-black tracking-tight truncate ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {insight.title}
                      </h4>
                      <span className={`text-[10px] lg:text-[11px] font-extrabold px-2 py-0.5 rounded-md border uppercase whitespace-nowrap leading-none shrink-0 ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>
                    <span className="text-xs lg:text-[12px] text-[#94A3B8] shrink-0 font-semibold whitespace-nowrap">
                      {insight.timestamp}
                    </span>
                  </div>
                  <p className={`text-xs lg:text-[13.5px] ${isLight ? 'text-slate-700' : 'text-slate-300'} mt-1 leading-snug line-clamp-2 font-medium`}>
                    {insight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Banner */}
      <div className={`pt-3 mt-1 border-t ${isLight ? 'border-slate-300' : 'border-white/10'} flex items-center justify-between text-xs lg:text-[13px] shrink-0`}>
        <span className={`${isLight ? 'text-slate-700' : 'text-[#94A3B8]'} font-extrabold`}>Aspect AI Copilot: Active</span>
        <span className="text-[#0E7C7B] font-black flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0E7C7B] inline-block animate-pulse shadow-[0_0_6px_#0E7C7B]" /> Real-time
        </span>
      </div>
    </div>
  );
};
