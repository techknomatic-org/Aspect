import React from 'react';
import { Sparkles, TrendingUp, AlertTriangle, Target, DollarSign } from 'lucide-react';
import { AIInsight } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface AIInsightsPanelProps {
  insights: AIInsight[];
  onViewAllClick: () => void;
  onSelectInsight: (insight: AIInsight) => void;
}

export const AIInsightsPanel: React.FC<AIInsightsPanelProps> = ({
  insights,
  onViewAllClick,
  onSelectInsight,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const getInsightIcon = (category: AIInsight['category']) => {
    switch (category) {
      case 'revenue':
        return (
          <div className="w-6 h-6 rounded-full bg-[#0E7C7B]/20 border border-[#0E7C7B]/40 flex items-center justify-center text-[#0E7C7B] shrink-0">
            <TrendingUp className="w-3 h-3" />
          </div>
        );
      case 'warning':
        return (
          <div className="w-6 h-6 rounded-full bg-[#C1502E]/20 border border-[#C1502E]/40 flex items-center justify-center text-[#C1502E] shrink-0">
            <AlertTriangle className="w-3 h-3" />
          </div>
        );
      case 'opportunity':
        return (
          <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shrink-0">
            <Target className="w-3 h-3" />
          </div>
        );
      case 'optimization':
        return (
          <div className="w-6 h-6 rounded-full bg-[#4A6FA5]/20 border border-[#4A6FA5]/40 flex items-center justify-center text-[#4A6FA5] shrink-0">
            <DollarSign className="w-3 h-3" />
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shrink-0">
            <Sparkles className="w-3 h-3" />
          </div>
        );
    }
  };

  const panelBg = isLight ? 'bg-[#EEF1F8] border-slate-300 shadow-sm' : 'bg-[#0B1426] border-white/10 shadow-2xl';
  const cardBg = isLight ? 'bg-white border-slate-200' : 'bg-[#172033] border-white/10';

  return (
    <div className={`${panelBg} border rounded-2xl p-4 lg:p-5 flex flex-col justify-between h-full min-h-0 select-none transition-all duration-200 overflow-hidden`}>
      <div className="flex-1 min-h-0 flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <h3 className={`text-xs font-bold tracking-wider uppercase ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
              AI INSIGHTS & TELEMETRY
            </h3>
          </div>
          <button
            onClick={onViewAllClick}
            className="text-[11px] font-semibold text-[#C9A227] hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* Insights List — Evenly Distributed to Fill Available Middle Panel Height */}
        <div className="flex-1 min-h-0 flex flex-col justify-between space-y-2 py-2">
          {insights.map((insight) => (
            <div
              key={insight.id}
              onClick={() => onSelectInsight(insight)}
              className={`${cardBg} border rounded-xl p-2.5 transition-all duration-200 hover:border-[#C9A227]/40 cursor-pointer flex items-center gap-2.5 flex-1 min-h-0`}
            >
              {getInsightIcon(insight.category)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`text-[11px] lg:text-xs font-bold truncate ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                    {insight.title}
                  </h4>
                  <span className="text-[9px] text-[#94A3B8] shrink-0 ml-2">
                    {insight.timestamp}
                  </span>
                </div>
                <p className="text-[10px] lg:text-[11px] text-[#94A3B8] mt-0.5 leading-snug line-clamp-2 font-medium">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className={`pt-2.5 border-t ${isLight ? 'border-slate-300' : 'border-white/10'} flex items-center justify-between text-[11px] shrink-0`}>
        <span className="text-[#94A3B8] font-medium">Aspect AI Copilot: Active</span>
        <span className="text-[#0E7C7B] font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0E7C7B] inline-block animate-pulse" /> Real-time
        </span>
      </div>
    </div>
  );
};
