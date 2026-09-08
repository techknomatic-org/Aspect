import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, TrendingDown, Sparkles, AlertTriangle, Target, ShieldAlert } from 'lucide-react';
import { EcosystemBusiness } from '../../types';
import { SparklineChart } from '../charts/SparklineChart';
import { useTheme } from '../../context/ThemeContext';
import { BUSINESS_EXECUTIVE_DATA, BusinessExecutiveReview, MajorProjectDetail } from '../../data/businessData';

interface BusinessKPIItem {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  color?: string;
}

interface BusinessKPIPanelProps {
  business: EcosystemBusiness;
  onClose?: () => void;
  onOpenFullPage: (businessId: string) => void;
  onToggleAIInsights?: () => void;
}

const BUSINESS_KPIS: Record<string, BusinessKPIItem[]> = {
  'bullion-refinery': [
    { label: 'REVENUE / GMV', value: '₹ 4.3k Cr', change: '▲ 14.2%', isPositive: true },
    { label: 'YOY GROWTH', value: '14.2%', change: '▲ 3.1pp', isPositive: true },
    { label: 'GROSS MARGIN', value: '6.8%', change: '▲ 0.4pp', isPositive: true },
    { label: 'ORDERS (YTD)', value: '1,24,800', change: '▲ 9.3%', isPositive: true },
    { label: 'AVG ORDER VALUE', value: '₹ 3.43 Lac', change: '▲ 4.5%', isPositive: true },
    { label: 'INVENTORY VALUE', value: '₹ 0.8k Cr', change: '▼ 2.1%', isPositive: false, color: '#C1502E' },
  ],
  'realty': [
    { label: 'PROJECT VALUE', value: '₹ 3.2k Cr', change: '▲ 18.4%', isPositive: true },
    { label: 'REVENUE (YTD)', value: '₹ 1.9k Cr', change: '▲ 12.7%', isPositive: true },
    { label: 'PROJECTS UNDER DEV.', value: '14 Projects', change: '▲ 2', isPositive: true },
    { label: 'COMPLETION %', value: '68.4%', change: '▲ 4.2pp', isPositive: true },
    { label: 'UNITS SOLD', value: '892 Units', change: '▲ 11.3%', isPositive: true },
    { label: 'PROJECTS AT RISK', value: '2 Projects', change: '▼ 1', isPositive: false, color: '#C1502E' },
  ],
  'infrastructure': [
    { label: 'PROJECT VALUE', value: '₹ 3.4k Cr', change: '▲ 22.1%', isPositive: true },
    { label: 'REVENUE (YTD)', value: '₹ 2.1k Cr', change: '▲ 15.6%', isPositive: true },
    { label: 'YOY GROWTH', value: '15.6%', change: '▲ 3.8pp', isPositive: true },
    { label: 'PIPELINE VALUE', value: '₹ 8.2k Cr', change: '▲ 28.4%', isPositive: true },
    { label: 'PROJECT MARGIN', value: '18.2%', change: '▲ 1.1pp', isPositive: true },
    { label: 'AT-RISK PROJECTS', value: '1 Project', change: '▼ 1', isPositive: false, color: '#C1502E' },
  ],
  'industries': [
    { label: 'REVENUE (YTD)', value: '₹ 3.2k Cr', change: '▲ 13.5%', isPositive: true },
    { label: 'YOY GROWTH', value: '13.5%', change: '▲ 2.4pp', isPositive: true },
    { label: 'EBITDA', value: '₹ 0.5k Cr', change: '▲ 11.1%', isPositive: true },
    { label: 'GROSS MARGIN', value: '16.5%', change: '▲ 0.7pp', isPositive: true },
    { label: 'ORDER BOOK', value: '₹ 4.8k Cr', change: '▲ 19.2%', isPositive: true },
    { label: 'PIPELINE', value: '₹ 6.4k Cr', change: '▲ 24.8%', isPositive: true },
  ],
  'hospitality': [
    { label: 'REVENUE (YTD)', value: '₹ 1.8k Cr', change: '▲ 21.3%', isPositive: true },
    { label: 'YOY GROWTH', value: '21.3%', change: '▲ 5.6pp', isPositive: true },
    { label: 'OCCUPANCY RATE', value: '74.8%', change: '▲ 6.2pp', isPositive: true },
    { label: 'REVENUE / OUTLET', value: '₹ 18.4 Cr', change: '▲ 9.1%', isPositive: true },
    { label: 'CUSTOMER VISITS', value: '4.2M YTD', change: '▲ 17.4%', isPositive: true },
    { label: 'EBITDA', value: '₹ 0.3k Cr', change: '▲ 24.0%', isPositive: true },
  ],
  'energy': [
    { label: 'REVENUE (YTD)', value: '₹ 4.3k Cr', change: '▲ 18.9%', isPositive: true },
    { label: 'YOY GROWTH', value: '18.9%', change: '▲ 4.2pp', isPositive: true },
    { label: 'INSTALLED CAPACITY', value: '2,400 MW', change: '▲ 12.0%', isPositive: true },
    { label: 'OPERATIONAL CAP.', value: '2,180 MW', change: '▲ 10.2%', isPositive: true },
    { label: 'GENERATION (YTD)', value: '9,840 MU', change: '▲ 14.6%', isPositive: true },
    { label: 'CUF', value: '38.4%', change: '▲ 1.8pp', isPositive: true },
  ],
  'entertainment': [
    { label: 'REVENUE (YTD)', value: '₹ 1.3k Cr', change: '▲ 31.6%', isPositive: true },
    { label: 'YOY GROWTH', value: '31.6%', change: '▲ 9.4pp', isPositive: true },
    { label: 'EBITDA', value: '₹ 0.2k Cr', change: '▲ 28.2%', isPositive: true },
    { label: 'PROJECT MARGIN', value: '15.0%', change: '▲ 0.6pp', isPositive: true },
    { label: 'PIPELINE', value: '₹ 2.8k Cr', change: '▲ 42.0%', isPositive: true },
    { label: 'ACTIVE PROJECTS', value: '18 Projects', change: '▲ 5', isPositive: true },
  ],
  'sports': [
    { label: 'REVENUE (YTD)', value: '₹ 0.9k Cr', change: '▲ 24.8%', isPositive: true },
    { label: 'YOY GROWTH', value: '24.8%', change: '▲ 6.3pp', isPositive: true },
    { label: 'SPONSORSHIP VALUE', value: '₹ 0.3k Cr', change: '▲ 19.4%', isPositive: true },
    { label: 'FAN BASE', value: '28.4M', change: '▲ 14.2%', isPositive: true },
    { label: 'WIN RATE', value: '62.4%', change: '▲ 4.8pp', isPositive: true },
    { label: 'TITLES (YTD)', value: '7 Titles', change: '▲ 2', isPositive: true },
  ],
  'foundation': [
    { label: 'BENEFICIARIES', value: '2.4M', change: '▲ 18.2%', isPositive: true },
    { label: 'IMPACT ACHIEVEMENT', value: '84.6%', change: '▲ 4.1pp', isPositive: true },
    { label: 'PROGRAM REACH', value: '14 States', change: '▲ 2 States', isPositive: true },
    { label: 'ACTIVE PROGRAMS', value: '32 Programs', change: '▲ 5', isPositive: true },
    { label: 'FUNDS UTILIZATION', value: '91.2%', change: '▲ 3.4pp', isPositive: true },
    { label: 'COMPLETION %', value: '76.8%', change: '▲ 5.2pp', isPositive: true },
  ],
};

const getKPITrendData = (idx: number, isPositive: boolean) => {
  const positiveVariations = [
    [{ val: 210 }, { val: 225 }, { val: 218 }, { val: 240 }, { val: 255 }, { val: 248 }, { val: 280 }],
    [{ val: 11.2 }, { val: 12.0 }, { val: 12.8 }, { val: 12.4 }, { val: 13.8 }, { val: 14.5 }, { val: 15.6 }],
    [{ val: 45 }, { val: 48 }, { val: 52 }, { val: 50 }, { val: 56 }, { val: 62 }, { val: 68 }],
    [{ val: 1200 }, { val: 1280 }, { val: 1340 }, { val: 1390 }, { val: 1450 }, { val: 1520 }, { val: 1600 }],
    [{ val: 82 }, { val: 85 }, { val: 88 }, { val: 86 }, { val: 91 }, { val: 94 }, { val: 98 }],
    [{ val: 320 }, { val: 340 }, { val: 360 }, { val: 380 }, { val: 410 }, { val: 430 }, { val: 460 }],
  ];

  const negativeVariations = [
    [{ val: 320 }, { val: 310 }, { val: 295 }, { val: 305 }, { val: 280 }, { val: 270 }, { val: 250 }],
    [{ val: 18.5 }, { val: 17.2 }, { val: 16.8 }, { val: 15.9 }, { val: 15.2 }, { val: 14.8 }, { val: 14.2 }],
    [{ val: 85 }, { val: 82 }, { val: 78 }, { val: 75 }, { val: 72 }, { val: 69 }, { val: 65 }],
    [{ val: 450 }, { val: 430 }, { val: 420 }, { val: 400 }, { val: 390 }, { val: 375 }, { val: 360 }],
    [{ val: 95 }, { val: 92 }, { val: 88 }, { val: 85 }, { val: 82 }, { val: 79 }, { val: 76 }],
    [{ val: 120 }, { val: 115 }, { val: 110 }, { val: 105 }, { val: 98 }, { val: 92 }, { val: 85 }],
  ];

  const variation = isPositive ? positiveVariations : negativeVariations;
  return variation[idx % variation.length];
};

export const BusinessKPIPanel: React.FC<BusinessKPIPanelProps> = ({
  business,
  onClose,
  onOpenFullPage,
  onToggleAIInsights,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState<'kpi' | 'brief' | 'projects'>('kpi');

  const kpis = BUSINESS_KPIS[business.id] || [];
  const execData: BusinessExecutiveReview | undefined = BUSINESS_EXECUTIVE_DATA[business.id];

  const panelBg = isLight ? 'bg-[#EEF1F8] border-slate-300 shadow-sm' : 'bg-[#0B1426] border-white/10 shadow-2xl';
  const cardBg = isLight ? 'bg-white border-slate-200' : 'bg-[#172033] border-white/10';
  const innerCardBg = isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-slate-800';
  const textMuted = isLight ? 'text-[#6B7280]' : 'text-[#94A3B8]';
  const textPrimary = isLight ? 'text-[#1F2937]' : 'text-white';

  return (
    // Outer panel: NO justify-between — header is shrink-0, content is flex-1, footer is shrink-0
    <div className={`${panelBg} border rounded-2xl p-4 lg:p-5 flex flex-col h-full select-none transition-all duration-200 overflow-hidden`}>
      {/* ── HEADER BLOCK (shrink-0 — never stretches) ── */}
      <div className="shrink-0">
        {/* Title row */}
        <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-300' : 'border-white/10'}`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-3 h-3 rounded-full bg-[#0E7C7B] shrink-0 shadow-[0_0_8px_#0E7C7B]" />
            <div className="min-w-0">
              <h3 className={`text-lg lg:text-xl xl:text-2xl font-black tracking-wide uppercase truncate ${textPrimary}`}>
                {business.name}
              </h3>
              <span className="text-xs lg:text-sm xl:text-[14px] font-bold text-[#C9A227] truncate block mt-0.5">
                {business.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onToggleAIInsights && (
              <button
                onClick={onToggleAIInsights}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs lg:text-[13px] font-bold transition-all duration-150 cursor-pointer shadow-sm group ${isLight
                    ? 'bg-[#C9A227]/10 border-[#C9A227]/50 text-[#B8860B] hover:bg-[#C9A227]/20'
                    : 'bg-[#C9A227]/15 border-[#C9A227]/60 text-[#F59E0B] hover:bg-[#C9A227]/30'
                  }`}
                title="View AI Insights & Telemetry for this business"
              >
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <span className="whitespace-nowrap">AI Insights</span>
              </button>
            )}

            <button
              onClick={() => {
                if (onOpenFullPage) {
                  onOpenFullPage(business.id);
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#172033] border border-white/20 text-slate-200 text-xs lg:text-[13px] font-bold hover:bg-white/10 hover:text-white transition-all duration-150 cursor-pointer shadow-sm group"
              title="Navigate to Full Business View"
            >
              <span className="whitespace-nowrap">Full Page</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Executive Summary Brief Banner */}
        {execData && (
          <div className={`mt-3 p-3.5 lg:p-4 rounded-xl border ${isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#172033] border-white/10 text-slate-200'
            }`}>
            <span className="text-[#C9A227] font-black block uppercase mb-1.5 text-xs lg:text-[12.5px] tracking-wider">
              EXECUTIVE SUMMARY
            </span>
            <p className="text-xs lg:text-[13.5px] xl:text-[14px] font-medium leading-relaxed">
              {execData.executiveSummary}
            </p>
          </div>
        )}

        {/* Navigation View Switcher Tabs */}
        <div className={`flex items-center gap-1.5 mt-3 p-1 rounded-xl border text-xs lg:text-[12.5px] font-bold ${isLight ? 'bg-slate-200 border-slate-300' : 'bg-[#0B1426] border-white/10'
          }`}>
          <button
            onClick={() => setActiveTab('kpi')}
            className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer ${activeTab === 'kpi'
              ? isLight ? 'bg-white text-[#1F2937] shadow font-black' : 'bg-[#172033] text-[#C9A227] shadow font-black'
              : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-[#94A3B8] hover:text-white'
              }`}
          >
            📊 Key Metrics
          </button>
          <button
            onClick={() => setActiveTab('brief')}
            className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer ${activeTab === 'brief'
              ? isLight ? 'bg-white text-[#1F2937] shadow font-black' : 'bg-[#172033] text-[#C9A227] shadow font-black'
              : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-[#94A3B8] hover:text-white'
              }`}
          >
            🎯 Strategic Brief
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer ${activeTab === 'projects'
              ? isLight ? 'bg-white text-[#1F2937] shadow font-black' : 'bg-[#172033] text-[#C9A227] shadow font-black'
              : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-[#94A3B8] hover:text-white'
              }`}
          >
            🚀 Projects
          </button>
        </div>
      </div>

      {/* ── TAB CONTENT ZONE (flex-1 → fills all remaining height) ── */}
      <div className="flex-1 min-h-0 mt-3 overflow-hidden">

        {/* TAB 1: 6 KPI CARDS — auto-rows-fr = all rows equal height */}
        {activeTab === 'kpi' && (
          <div className="h-full grid grid-cols-2 gap-2.5" style={{ gridAutoRows: '1fr' }}>
            {kpis.map((kpi, idx) => {
              const isPositive = kpi.isPositive !== false;
              const chartColor = kpi.color || (isPositive ? '#0E7C7B' : '#C1502E');
              const trendData = getKPITrendData(idx, isPositive);

              const trendCardBg = isPositive
                ? isLight
                  ? 'bg-gradient-to-br from-[#0E7C7B]/[0.09] via-[#0E7C7B]/[0.03] to-white border-[#0E7C7B]/30 hover:border-[#0E7C7B]/60 shadow-[0_2px_8px_rgba(14,124,123,0.06)]'
                  : 'bg-gradient-to-br from-[#0E7C7B]/15 via-[#172033] to-[#172033] border-[#0E7C7B]/25 hover:border-[#0E7C7B]/50'
                : isLight
                  ? 'bg-gradient-to-br from-[#C1502E]/[0.09] via-[#C1502E]/[0.03] to-white border-[#C1502E]/30 hover:border-[#C1502E]/60 shadow-[0_2px_8px_rgba(193,80,46,0.06)]'
                  : 'bg-gradient-to-br from-[#C1502E]/15 via-[#172033] to-[#172033] border-[#C1502E]/25 hover:border-[#C1502E]/50';

              return (
                <div
                  key={idx}
                  className={`${trendCardBg} border rounded-2xl p-3 lg:p-3.5 flex flex-col justify-between transition-all duration-200 group overflow-hidden`}
                >
                  {/* Top Row: Title (larger font) & Trend Badge shifted to top right */}
                  <div className="flex items-center justify-between gap-1.5 min-w-0">
                    <span className={`text-xs lg:text-[13px] xl:text-[13.5px] font-black tracking-wider ${isLight ? 'text-slate-800' : 'text-slate-200'} uppercase truncate`}>
                      {kpi.label}
                    </span>

                    {kpi.change && (
                      <div className={`text-[11px] lg:text-xs font-black flex items-center gap-1 px-2 py-0.5 rounded-md shrink-0 ${isPositive
                          ? isLight ? 'bg-[#0E7C7B]/10 text-[#0E7C7B]' : 'bg-[#0E7C7B]/20 text-[#2dd4bf]'
                          : isLight ? 'bg-[#C1502E]/10 text-[#C1502E]' : 'bg-[#C1502E]/20 text-[#fb7185]'
                        }`}>
                        {isPositive
                          ? <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          : <TrendingDown className="w-3.5 h-3.5 shrink-0" />
                        }
                        <span>{kpi.change}</span>
                      </div>
                    )}
                  </div>

                  {/* Middle Row: Large Prominent Metric Value (Centered in middle of KPI) & Sparkline Chart */}
                  <div className="flex-1 flex items-center justify-between gap-2 min-w-0 my-auto py-1">
                    <span
                      className="text-2xl lg:text-[26px] xl:text-[28px] font-black leading-none tracking-tight block truncate font-sans"
                      style={{ color: kpi.color || (isLight ? '#1F2937' : '#FFFFFF') }}
                    >
                      {kpi.value}
                    </span>

                    <div className="w-[88px] lg:w-[100px] h-[40px] flex items-center shrink-0">
                      <SparklineChart
                        color={chartColor}
                        data={trendData}
                        height={40}
                        width={100}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: STRATEGIC BRIEF — fills full height, scrollable */}
        {activeTab === 'brief' && (
          <div className="h-full overflow-y-auto space-y-3 pr-1">
            {/* Executive Attention Item */}
            {execData?.ceoAttentionItems[0] && (
              <div className={`p-3.5 lg:p-4 rounded-xl border ${cardBg} border-l-4 border-l-[#C1502E] space-y-2 shadow-sm`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs lg:text-[12px] font-black text-[#C1502E] uppercase flex items-center gap-1.5 tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    EXECUTIVE ATTENTION REQUIRED
                  </span>
                  <span className="text-xs lg:text-[11.5px] font-black text-[#C1502E] px-2.5 py-0.5 rounded-md bg-[#C1502E]/15 border border-[#C1502E]/25">
                    {execData.ceoAttentionItems[0].severity}
                  </span>
                </div>
                <h4 className={`text-sm lg:text-[15px] font-black tracking-tight ${textPrimary}`}>
                  {execData.ceoAttentionItems[0].issue}
                </h4>
                <div className="text-xs lg:text-[13px] text-[#C1502E] font-extrabold">
                  Impact: {execData.ceoAttentionItems[0].financialImpact}
                </div>
                <p className={`text-xs lg:text-[13px] ${isLight ? 'text-slate-700' : 'text-slate-300'} leading-relaxed`}>
                  <strong className="text-[#C9A227] font-black">Strategic Action: </strong>
                  {execData.ceoAttentionItems[0].recommendedAction}
                </p>
              </div>
            )}

            {/* Top Performance Driver */}
            {execData?.performanceDrivers[0] && (
              <div className={`p-3.5 lg:p-4 rounded-xl border ${cardBg} space-y-1.5 shadow-sm`}>
                <span className="text-xs lg:text-[12px] font-black text-[#0E7C7B] uppercase flex items-center gap-1.5 tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  PRIMARY PERFORMANCE DRIVER
                </span>
                <h4 className={`text-sm lg:text-[15px] font-black tracking-tight ${textPrimary}`}>
                  {execData.performanceDrivers[0].driver}
                </h4>
                <p className={`text-xs lg:text-[13px] ${isLight ? 'text-slate-600' : 'text-slate-300'} leading-relaxed font-medium`}>
                  {execData.performanceDrivers[0].interpretation}
                </p>
              </div>
            )}

            {/* Top Pipeline Opportunity */}
            {execData?.pipeline.opportunities[0] && (
              <div className={`p-3.5 lg:p-4 rounded-xl border ${cardBg} space-y-1.5 shadow-sm`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs lg:text-[12px] font-black text-[#C9A227] uppercase flex items-center gap-1.5 tracking-wider">
                    <Target className="w-3.5 h-3.5" />
                    TOP GROWTH OPPORTUNITY
                  </span>
                  <span className="text-xs lg:text-[13px] font-black text-[#0E7C7B]">
                    {execData.pipeline.opportunities[0].potentialValue}
                  </span>
                </div>
                <h4 className={`text-sm lg:text-[15px] font-black tracking-tight ${textPrimary}`}>
                  {execData.pipeline.opportunities[0].name}
                </h4>
                <p className={`text-xs lg:text-[13px] ${isLight ? 'text-slate-600' : 'text-slate-300'} leading-relaxed font-medium`}>
                  <strong className="text-[#0E7C7B] font-black">Strategic Action: </strong>
                  {execData.pipeline.opportunities[0].ceoAction}
                </p>
              </div>
            )}

            {/* Recommended Strategic Focus */}
            {execData?.recommendedFocus && (
              <div className={`p-3.5 lg:p-4 rounded-xl border border-[#C9A227]/40 space-y-1.5 shadow-sm ${isLight ? 'bg-amber-50/50' : 'bg-[#172033]'
                }`}>
                <span className="text-xs lg:text-[12px] font-black text-[#C9A227] uppercase block tracking-wider">
                  RECOMMENDED STRATEGIC FOCUS
                </span>
                <p className={`text-xs lg:text-[13px] font-semibold leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'
                  }`}>
                  "{execData.recommendedFocus}"
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: MAJOR PROJECTS — fills full height, scrollable */}
        {activeTab === 'projects' && (
          <div className="h-full overflow-y-auto space-y-3 pr-1">
            {execData?.majorProjects && execData.majorProjects.length > 0 ? (
              execData.majorProjects.map((proj: MajorProjectDetail, idx: number) => (
                <div key={idx} className={`p-4 lg:p-4.5 rounded-xl border ${cardBg} space-y-2.5 shadow-sm`}>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className={`text-sm lg:text-[15.5px] font-black tracking-tight ${textPrimary}`}>{proj.name}</h4>
                      <span className={`text-xs lg:text-[12.5px] font-semibold ${textMuted} block mt-0.5`}>{proj.location}</span>
                    </div>
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md shrink-0 uppercase tracking-wider ${proj.status === 'ON TRACK'
                      ? 'bg-[#0E7C7B]/20 text-[#0E7C7B] border border-[#0E7C7B]/35'
                      : 'bg-[#C1502E]/20 text-[#C1502E] border border-[#C1502E]/35'
                      }`}>
                      {proj.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs lg:text-[13px] font-extrabold pt-1">
                    <span className="text-sm lg:text-base font-black text-[#C9A227] font-sans">{proj.value}</span>
                    <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>{proj.progress}% Complete</span>
                  </div>

                  <div className={`w-full h-2 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-white/10'}`}>
                    <div
                      className="h-full bg-[#0E7C7B] rounded-full transition-all duration-500 shadow-[0_0_8px_#0E7C7B]"
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className={`flex flex-col items-center justify-center h-full text-center gap-2 ${textMuted}`}>
                <div className="text-2xl opacity-40">🚀</div>
                <div className="text-xs font-semibold">No active major projects flagged.</div>
              </div>
            )}
          </div>
        )}

      </div>{/* end flex-1 content zone */}

      {/* ── FOOTER STRIP (shrink-0) ── */}
      <div className={`shrink-0 pt-3 mt-3 border-t ${isLight ? 'border-slate-300' : 'border-white/10'} flex items-center justify-between`}>
        <div>
          <span className={`text-xs lg:text-[12px] font-extrabold uppercase tracking-wider ${textMuted} block`}>
            YTD REVENUE
          </span>
          <div className="text-base lg:text-lg font-black text-[#0E7C7B] mt-0.5 font-sans">
            {business.revenue}
          </div>
        </div>

        <div className="text-center">
          <span className={`text-xs lg:text-[12px] font-extrabold uppercase tracking-wider ${textMuted} block`}>
            GROWTH
          </span>
          <div className="text-base lg:text-lg font-black text-[#0E7C7B] mt-0.5 font-sans">
            ▲ {business.growth}
          </div>
        </div>

        <div className="text-right">
          <span className={`text-xs lg:text-[12px] font-extrabold uppercase tracking-wider ${textMuted} block mb-1`}>
            STATUS
          </span>
          <span className={`inline-block text-xs font-black px-3 py-0.5 rounded-full ${business.status === 'Healthy'
            ? 'bg-[#0E7C7B]/20 text-[#0E7C7B] border border-[#0E7C7B]/40'
            : business.status === 'Warning'
              ? 'bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/40'
              : 'bg-[#C1502E]/20 text-[#C1502E] border border-[#C1502E]/40'
            }`}>
            {business.status}
          </span>
        </div>
      </div>
    </div>
  );
};
