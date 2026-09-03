import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle, Briefcase } from 'lucide-react';
import { SparklineChart } from '../charts/SparklineChart';
import { CountUpNumber } from '../common/CountUpNumber';
import { DashboardOverview } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface TopKPIRowProps {
  overview: DashboardOverview;
}

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
          <div className="flex items-center justify-between gap-2 pr-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <DollarSign className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />
              <div className={`text-[11px] font-semibold tracking-wider ${textMutedClass} uppercase truncate`}>
                GROUP REVENUE (YTD)
              </div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B] hidden xl:inline-block">
              Target: ₹22.5k Cr
            </span>
          </div>

          <div className="my-0.5">
            <span className={`text-xl lg:text-[25px] font-extrabold ${textValueClass} tracking-tight font-sans block leading-none`}>
              <CountUpNumber end={overview.revenueNumeric || 24852} prefix="₹ " suffix=" Cr" duration={750} />
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-[11px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY {overview.revenueVsLY || '₹ 21,452 Cr'}</span>
            <span className="font-semibold text-[#0E7C7B] flex items-center shrink-0">
              <TrendingUp className="w-3 h-3 mr-0.5 inline" /> ▲ {overview.revenueChangePct || 15.9}%
            </span>
          </div>
        </div>

        <div className="w-[115px] lg:w-[135px] h-[52px] flex items-end shrink-0 ml-1.5">
          <SparklineChart color="#0E7C7B" data={TELEMETRY_REVENUE} height={52} width={135} />
        </div>
      </div>

      {/* 2. YoY GROWTH */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className="flex items-center justify-between gap-2 pr-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <TrendingUp className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />
              <div className={`text-[11px] font-semibold tracking-wider ${textMutedClass} uppercase truncate`}>
                YoY GROWTH
              </div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B] hidden xl:inline-block">
              Target: 14.0%
            </span>
          </div>

          <div className="my-0.5">
            <span className={`text-xl lg:text-[25px] font-extrabold ${textValueClass} tracking-tight font-sans block leading-none`}>
              <CountUpNumber end={15.9} decimals={1} suffix="%" duration={750} />
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-[11px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY 11.3%</span>
            <span className="font-semibold text-[#0E7C7B] flex items-center shrink-0">
              <TrendingUp className="w-3 h-3 mr-0.5 inline" /> ▲ 4.6pp
            </span>
          </div>
        </div>

        <div className="w-[115px] lg:w-[135px] h-[52px] flex items-end shrink-0 ml-1.5">
          <SparklineChart color="#0E7C7B" data={TELEMETRY_GROWTH} height={52} width={135} />
        </div>
      </div>

      {/* 3. ACTIVE ALERTS */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className="flex items-center justify-between gap-2 pr-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <AlertTriangle className="w-3.5 h-3.5 text-[#E61C40] shrink-0" />
              <div className={`text-[11px] font-semibold tracking-wider ${textMutedClass} uppercase truncate`}>
                ACTIVE ALERTS
              </div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E61C40]/15 border border-[#E61C40]/30 text-[#E61C40] hidden xl:inline-block">
              14 Resolved
            </span>
          </div>

          <div className="my-0.5">
            <span className={`text-xl lg:text-[25px] font-extrabold ${textValueClass} tracking-tight font-sans block leading-none`}>
              128
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] whitespace-nowrap">
            <span className="font-semibold text-[#E61C40] flex items-center">
              <TrendingDown className="w-3 h-3 mr-0.5 inline" /> ▼ 14 (-9.8%) vs prev
            </span>
          </div>
        </div>

        <div className="w-[115px] lg:w-[135px] h-[52px] flex items-end shrink-0 ml-1.5">
          <SparklineChart color="#E61C40" data={TELEMETRY_ALERTS} height={52} width={135} />
        </div>
      </div>

      {/* 4. GROUP PIPELINE VALUE */}
      <div className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
          <div className="flex items-center justify-between gap-2 pr-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <Briefcase className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
              <div className={`text-[11px] font-semibold tracking-wider ${textMutedClass} uppercase truncate`}>
                PIPELINE VALUE
              </div>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#C9A227] hidden xl:inline-block">
              Target: ₹45.0k Cr
            </span>
          </div>

          <div className="my-0.5">
            <span className={`text-xl lg:text-[25px] font-extrabold ${textValueClass} tracking-tight font-sans block leading-none`}>
              <CountUpNumber end={49650} prefix="₹ " suffix=" Cr" duration={750} />
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-[11px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY ₹ 42,100 Cr</span>
            <span className="font-semibold text-[#C9A227] flex items-center shrink-0">
              <TrendingUp className="w-3 h-3 mr-0.5 inline" /> ▲ 17.9%
            </span>
          </div>
        </div>

        <div className="w-[115px] lg:w-[135px] h-[52px] flex items-end shrink-0 ml-1.5">
          <SparklineChart color="#C9A227" data={TELEMETRY_PIPELINE} height={52} width={135} />
        </div>
      </div>
    </div>
  );
};
