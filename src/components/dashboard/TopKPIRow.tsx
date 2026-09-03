import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { SparklineChart } from '../charts/SparklineChart';
import { CountUpNumber } from '../common/CountUpNumber';
import { DashboardOverview } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface TopKPIRowProps {
  overview: DashboardOverview;
}

// Smooth realistic telemetry trend curves
const TELEMETRY_REVENUE = [
  { val: 21452 }, { val: 21700 }, { val: 21600 }, { val: 22100 },
  { val: 22400 }, { val: 22200 }, { val: 22800 }, { val: 23100 },
  { val: 22900 }, { val: 23400 }, { val: 23700 }, { val: 23500 },
  { val: 24000 }, { val: 24300 }, { val: 24100 }, { val: 24500 },
  { val: 24700 }, { val: 24600 }, { val: 24800 }, { val: 24852 }
];

const TELEMETRY_GROWTH = [
  { val: 11.3 }, { val: 11.6 }, { val: 11.4 }, { val: 12.0 },
  { val: 12.4 }, { val: 12.2 }, { val: 12.8 }, { val: 13.3 },
  { val: 13.0 }, { val: 13.7 }, { val: 14.1 }, { val: 13.9 },
  { val: 14.5 }, { val: 14.9 }, { val: 14.7 }, { val: 15.2 },
  { val: 15.6 }, { val: 15.4 }, { val: 15.8 }, { val: 15.9 }
];

// Active alerts reduction trend — smooth gradual reduction from 142 down to 128
const TELEMETRY_ALERTS = [
  { val: 142 }, { val: 141 }, { val: 140 }, { val: 138 },
  { val: 139 }, { val: 136 }, { val: 137 }, { val: 134 },
  { val: 135 }, { val: 133 }, { val: 134 }, { val: 131 },
  { val: 132 }, { val: 130 }, { val: 131 }, { val: 129 },
  { val: 130 }, { val: 128 }, { val: 129 }, { val: 128 }
];

const TELEMETRY_PIPELINE = [
  { val: 42100 }, { val: 42600 }, { val: 42400 }, { val: 43200 },
  { val: 43800 }, { val: 43500 }, { val: 44200 }, { val: 44900 },
  { val: 44600 }, { val: 45400 }, { val: 46000 }, { val: 45800 },
  { val: 46600 }, { val: 47200 }, { val: 47000 }, { val: 47900 },
  { val: 48600 }, { val: 48400 }, { val: 49200 }, { val: 49650 }
];

export const TopKPIRow: React.FC<TopKPIRowProps> = ({ overview }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const cardClass = isLight
    ? 'bg-[#EEF1F8] border-slate-300 text-[#1F2937] shadow-sm hover:border-[#C9A227]/50'
    : 'bg-[#172033] border-white/10 text-white shadow-lg hover:border-[#C9A227]/40 hover:bg-[#1E293B]';

  const textMutedClass = isLight ? 'text-[#6B7280]' : 'text-[#94A3B8]';
  const textValueClass = isLight ? 'text-[#1F2937]' : 'text-white';

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 select-none">
      {/* 1. GROUP REVENUE (YTD) */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className={`text-[11px] font-medium tracking-wider ${textMutedClass} uppercase truncate`}>
            GROUP REVENUE (YTD)
          </div>
          <div className="my-1">
            <span className={`text-xl lg:text-[24px] font-semibold ${textValueClass} tracking-tight font-sans block leading-none`}>
              <CountUpNumber end={overview.revenueNumeric || 24852} prefix="₹ " suffix=" Cr" duration={750} />
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY {overview.revenueVsLY || '₹ 21,452 Cr'}</span>
            <span className="font-semibold text-[#0E7C7B] flex items-center shrink-0">
              <TrendingUp className="w-3 h-3 mr-1 inline" /> ▲ {overview.revenueChangePct || 15.9}%
            </span>
          </div>
        </div>
        <div className="w-[100px] h-[48px] flex items-end shrink-0 ml-2">
          <SparklineChart color="#0E7C7B" data={TELEMETRY_REVENUE} height={48} width={100} />
        </div>
      </div>

      {/* 2. YoY GROWTH */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className={`text-[11px] font-medium tracking-wider ${textMutedClass} uppercase truncate`}>
            YoY GROWTH
          </div>
          <div className="my-1">
            <span className={`text-xl lg:text-[24px] font-semibold ${textValueClass} tracking-tight font-sans block leading-none`}>
              <CountUpNumber end={15.9} decimals={1} suffix="%" duration={750} />
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY 11.3%</span>
            <span className="font-semibold text-[#0E7C7B] flex items-center shrink-0">
              <TrendingUp className="w-3 h-3 mr-1 inline" /> ▲ 4.6pp
            </span>
          </div>
        </div>
        <div className="w-[100px] h-[48px] flex items-end shrink-0 ml-2">
          <SparklineChart color="#0E7C7B" data={TELEMETRY_GROWTH} height={48} width={100} />
        </div>
      </div>

      {/* 3. ACTIVE ALERTS */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className={`text-[11px] font-medium tracking-wider ${textMutedClass} uppercase truncate`}>
            ACTIVE ALERTS
          </div>
          <div className="my-1">
            <span className={`text-xl lg:text-[24px] font-semibold ${textValueClass} tracking-tight font-sans block leading-none`}>
              128
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] whitespace-nowrap">
            <span className="font-semibold text-[#D60132] flex items-center">
              <TrendingDown className="w-3 h-3 mr-1 inline" /> ▼ 14 (-9.8%) vs prev
            </span>
          </div>
        </div>
        <div className="w-[100px] h-[48px] flex items-end shrink-0 ml-2">
          <SparklineChart color="#D60132" data={TELEMETRY_ALERTS} height={48} width={100} />
        </div>
      </div>

      {/* 4. GROUP PIPELINE VALUE */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className={`text-[11px] font-medium tracking-wider ${textMutedClass} uppercase truncate`}>
            PIPELINE VALUE
          </div>
          <div className="my-1">
            <span className={`text-xl lg:text-[24px] font-semibold ${textValueClass} tracking-tight font-sans block leading-none`}>
              <CountUpNumber end={49650} prefix="₹ " suffix=" Cr" duration={750} />
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY ₹ 42,100 Cr</span>
            <span className="font-semibold text-[#C9A227] flex items-center shrink-0">
              <TrendingUp className="w-3 h-3 mr-1 inline" /> ▲ 17.9%
            </span>
          </div>
        </div>
        <div className="w-[100px] h-[48px] flex items-end shrink-0 ml-2">
          <SparklineChart color="#C9A227" data={TELEMETRY_PIPELINE} height={48} width={100} />
        </div>
      </div>
    </div>
  );
};
