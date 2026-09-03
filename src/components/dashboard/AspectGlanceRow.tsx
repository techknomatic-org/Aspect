import React from 'react';
import { TrendingUp, DollarSign, BarChart2, Building2, Wallet } from 'lucide-react';
import { KPICardData } from '../../types';
import { SparklineChart } from '../charts/SparklineChart';
import { useTheme } from '../../context/ThemeContext';

interface AspectGlanceRowProps {
  cards: KPICardData[];
}

const TELEMETRY_PAT = [
  { val: 2900 }, { val: 3020 }, { val: 2980 }, { val: 3140 },
  { val: 3260 }, { val: 3220 }, { val: 3360 }, { val: 3480 },
  { val: 3420 }, { val: 3560 }, { val: 3690 }, { val: 3640 },
  { val: 3760 }, { val: 3890 }, { val: 3850 }, { val: 3960 },
  { val: 4030 }, { val: 4000 }, { val: 4090 }, { val: 4152 }
];

const TELEMETRY_EBITDA = [
  { val: 4200 }, { val: 4320 }, { val: 4280 }, { val: 4420 },
  { val: 4560 }, { val: 4520 }, { val: 4690 }, { val: 4810 },
  { val: 4760 }, { val: 4910 }, { val: 5060 }, { val: 5020 },
  { val: 5160 }, { val: 5290 }, { val: 5240 }, { val: 5330 },
  { val: 5410 }, { val: 5380 }, { val: 5430 }, { val: 5487 }
];

const TELEMETRY_NET_WORTH = [
  { val: 15200 }, { val: 15550 }, { val: 15400 }, { val: 15850 },
  { val: 16250 }, { val: 16100 }, { val: 16600 }, { val: 17050 },
  { val: 16900 }, { val: 17350 }, { val: 17750 }, { val: 17600 },
  { val: 17950 }, { val: 18250 }, { val: 18100 }, { val: 18350 },
  { val: 18520 }, { val: 18450 }, { val: 18580 }, { val: 18650 }
];

const TELEMETRY_NET_CASH = [
  { val: 5800 }, { val: 5930 }, { val: 5900 }, { val: 6060 },
  { val: 6190 }, { val: 6140 }, { val: 6290 }, { val: 6410 },
  { val: 6370 }, { val: 6490 }, { val: 6600 }, { val: 6560 },
  { val: 6670 }, { val: 6750 }, { val: 6720 }, { val: 6770 },
  { val: 6810 }, { val: 6790 }, { val: 6820 }, { val: 6842 }
];

export const AspectGlanceRow: React.FC<AspectGlanceRowProps> = ({ cards }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const cardClass = isLight
    ? 'bg-[#EEF1F8] border-slate-300 text-[#1F2937] shadow-sm hover:border-[#C9A227]/50'
    : 'bg-[#172033] border-white/10 text-white shadow-lg hover:border-[#C9A227]/40 hover:bg-[#1E293B]';

  const textMutedClass = isLight ? 'text-[#6B7280]' : 'text-[#94A3B8]';
  const textValueClass = isLight ? 'text-[#1F2937]' : 'text-white';

  const getTelemetryData = (id: string) => {
    switch (id) {
      case 'pat_ytd': return TELEMETRY_PAT;
      case 'ebitda_ytd': return TELEMETRY_EBITDA;
      case 'net_worth': return TELEMETRY_NET_WORTH;
      case 'net_cash': return TELEMETRY_NET_CASH;
      default: return TELEMETRY_PAT;
    }
  };

  const getSparklineColor = (id: string) => {
    switch (id) {
      case 'pat_ytd': return '#0E7C7B';
      case 'ebitda_ytd': return '#C9A227';
      case 'net_worth': return '#4A6FA5';
      case 'net_cash': return '#0E7C7B';
      default: return '#0E7C7B';
    }
  };

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'pat_ytd': return <DollarSign className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />;
      case 'ebitda_ytd': return <BarChart2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />;
      case 'net_worth': return <Building2 className="w-3.5 h-3.5 text-[#4A6FA5] shrink-0" />;
      case 'net_cash': return <Wallet className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />;
      default: return <DollarSign className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />;
    }
  };

  const activeBottomCards = cards.filter((c) => c.id !== 'rev_trend');

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 select-none">
      {activeBottomCards.map((card) => {
        const trend = getTelemetryData(card.id);
        const chartColor = getSparklineColor(card.id);
        const icon = getCardIcon(card.id);

        return (
          <div
            key={card.id}
            className={`${cardClass} border rounded-2xl p-3.5 lg:p-4 flex items-center justify-between h-[108px] relative overflow-hidden transition-all duration-200 group`}
          >
            <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
              <div className="flex items-center gap-1.5 min-w-0">
                {icon}
                <div className={`text-[11px] font-semibold tracking-wider ${textMutedClass} uppercase truncate`}>
                  {card.title}
                </div>
              </div>

              <div className="my-1">
                <span className={`text-xl lg:text-[24px] font-bold ${textValueClass} tracking-tight font-sans block leading-none truncate`}>
                  {card.value}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] whitespace-nowrap">
                <span className={textMutedClass}>vs LY {card.subtitle?.replace('vs LY ', '') || 'Previous'}</span>
                <span className="font-semibold text-[#0E7C7B] flex items-center shrink-0">
                  <TrendingUp className="w-3 h-3 mr-1 inline" /> {card.change}
                </span>
              </div>
            </div>

            <div className="w-[100px] h-[48px] flex items-end shrink-0 ml-2">
              <SparklineChart
                color={chartColor}
                data={trend}
                height={48}
                width={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
