import React from 'react';
import { Leaf, TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export interface SustainabilityPanelProps {
  score?: number;
  vsLY?: number;
}

export const SustainabilityPanel: React.FC<SustainabilityPanelProps> = ({
  score = 68.7,
  vsLY = 63.5,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`${
      isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0B1427] border-white/10 text-[#F4F6FA] shadow-lg'
    } border rounded-2xl p-5 select-none relative overflow-hidden flex items-center justify-between`}>
      <div>
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[#19C39A]" />
          <span className={`text-xs font-semibold tracking-wider uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            SUSTAINABILITY SCORE
          </span>
        </div>
        <span className="text-[10px] text-[#A7B0C0] block mt-0.5 font-medium">2026 YTD</span>

        <div className="flex items-baseline gap-1 mt-2.5">
          <span className="text-3xl font-semibold text-[#19C39A] tracking-tight font-sans">
            {score}
          </span>
          <span className="text-xs text-[#A7B0C0] font-medium">/100</span>
        </div>

        <div className="flex items-center gap-2 mt-1 text-[11px]">
          <span className="text-[#A7B0C0]">vs LY {vsLY}</span>
          <span className="font-semibold text-[#19C39A] flex items-center">
            <TrendingUp className="w-3 h-3 mr-0.5 inline" /> ▲ 5.2 pts
          </span>
        </div>
      </div>

      {/* Glowing Green Leaf Asset */}
      <div className="relative p-3.5 rounded-2xl bg-[#19C39A]/10 border border-[#19C39A]/30 text-[#19C39A] shrink-0">
        <Leaf className="w-9 h-9" />
        <div className="w-10 h-10 rounded-full bg-[#19C39A]/20 blur-lg absolute inset-0 pointer-events-none" />
      </div>
    </div>
  );
};
