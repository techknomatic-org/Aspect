import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, TrendingDown, X, AlertTriangle, Target, Building2, ShieldAlert, Award } from 'lucide-react';
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
  onClose: () => void;
  onOpenFullPage: (businessId: string) => void;
}

const BUSINESS_KPIS: Record<string, BusinessKPIItem[]> = {
  'bullion-refinery': [
    { label: 'REVENUE / GMV', value: '₹ 4,280 Cr', change: '▲ 14.2%', isPositive: true },
    { label: 'YOY GROWTH', value: '14.2%', change: '▲ 3.1pp', isPositive: true },
    { label: 'GROSS MARGIN', value: '6.8%', change: '▲ 0.4pp', isPositive: true },
    { label: 'ORDERS (YTD)', value: '1,24,800', change: '▲ 9.3%', isPositive: true },
    { label: 'AVG ORDER VALUE', value: '₹ 3.43 Lac', change: '▲ 4.5%', isPositive: true },
    { label: 'INVENTORY VALUE', value: '₹ 820 Cr', change: '▼ 2.1%', isPositive: false, color: '#C1502E' },
  ],
  'realty': [
    { label: 'PROJECT VALUE', value: '₹ 3,150 Cr', change: '▲ 18.4%', isPositive: true },
    { label: 'REVENUE (YTD)', value: '₹ 1,920 Cr', change: '▲ 12.7%', isPositive: true },
    { label: 'PROJECTS UNDER DEV.', value: '14 Projects', change: '▲ 2', isPositive: true },
    { label: 'COMPLETION %', value: '68.4%', change: '▲ 4.2pp', isPositive: true },
    { label: 'UNITS SOLD', value: '892 Units', change: '▲ 11.3%', isPositive: true },
    { label: 'PROJECTS AT RISK', value: '2 Projects', change: '▼ 1', isPositive: false, color: '#C1502E' },
  ],
  'infrastructure': [
    { label: 'PROJECT VALUE', value: '₹ 3,400 Cr', change: '▲ 22.1%', isPositive: true },
    { label: 'REVENUE (YTD)', value: '₹ 2,100 Cr', change: '▲ 15.6%', isPositive: true },
    { label: 'YOY GROWTH', value: '15.6%', change: '▲ 3.8pp', isPositive: true },
    { label: 'PIPELINE VALUE', value: '₹ 8,200 Cr', change: '▲ 28.4%', isPositive: true },
    { label: 'PROJECT MARGIN', value: '18.2%', change: '▲ 1.1pp', isPositive: true },
    { label: 'AT-RISK PROJECTS', value: '1 Project', change: '▼ 1', isPositive: false, color: '#C1502E' },
  ],
  'industries': [
    { label: 'REVENUE (YTD)', value: '₹ 3,150 Cr', change: '▲ 13.5%', isPositive: true },
    { label: 'YOY GROWTH', value: '13.5%', change: '▲ 2.4pp', isPositive: true },
    { label: 'EBITDA', value: '₹ 520 Cr', change: '▲ 11.1%', isPositive: true },
    { label: 'GROSS MARGIN', value: '16.5%', change: '▲ 0.7pp', isPositive: true },
    { label: 'ORDER BOOK', value: '₹ 4,800 Cr', change: '▲ 19.2%', isPositive: true },
    { label: 'PIPELINE', value: '₹ 6,400 Cr', change: '▲ 24.8%', isPositive: true },
  ],
  'hospitality': [
    { label: 'REVENUE (YTD)', value: '₹ 1,840 Cr', change: '▲ 21.3%', isPositive: true },
    { label: 'YOY GROWTH', value: '21.3%', change: '▲ 5.6pp', isPositive: true },
    { label: 'OCCUPANCY RATE', value: '74.8%', change: '▲ 6.2pp', isPositive: true },
    { label: 'REVENUE / OUTLET', value: '₹ 18.4 Cr', change: '▲ 9.1%', isPositive: true },
    { label: 'CUSTOMER VISITS', value: '4.2M YTD', change: '▲ 17.4%', isPositive: true },
    { label: 'EBITDA', value: '₹ 312 Cr', change: '▲ 24.0%', isPositive: true },
  ],
  'energy': [
    { label: 'REVENUE (YTD)', value: '₹ 4,280 Cr', change: '▲ 18.9%', isPositive: true },
    { label: 'YOY GROWTH', value: '18.9%', change: '▲ 4.2pp', isPositive: true },
    { label: 'INSTALLED CAPACITY', value: '2,400 MW', change: '▲ 12.0%', isPositive: true },
    { label: 'OPERATIONAL CAP.', value: '2,180 MW', change: '▲ 10.2%', isPositive: true },
    { label: 'GENERATION (YTD)', value: '9,840 MU', change: '▲ 14.6%', isPositive: true },
    { label: 'CUF', value: '38.4%', change: '▲ 1.8pp', isPositive: true },
  ],
  'entertainment': [
    { label: 'REVENUE (YTD)', value: '₹ 1,250 Cr', change: '▲ 31.6%', isPositive: true },
    { label: 'YOY GROWTH', value: '31.6%', change: '▲ 9.4pp', isPositive: true },
    { label: 'EBITDA', value: '₹ 188 Cr', change: '▲ 28.2%', isPositive: true },
    { label: 'PROJECT MARGIN', value: '15.0%', change: '▲ 0.6pp', isPositive: true },
    { label: 'PIPELINE', value: '₹ 2,800 Cr', change: '▲ 42.0%', isPositive: true },
    { label: 'ACTIVE PROJECTS', value: '18 Projects', change: '▲ 5', isPositive: true },
  ],
  'sports': [
    { label: 'REVENUE (YTD)', value: '₹ 932 Cr', change: '▲ 24.8%', isPositive: true },
    { label: 'YOY GROWTH', value: '24.8%', change: '▲ 6.3pp', isPositive: true },
    { label: 'SPONSORSHIP VALUE', value: '₹ 340 Cr', change: '▲ 19.4%', isPositive: true },
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
    [{ val: 72 }, { val: 78 }, { val: 75 }, { val: 82 }, { val: 88 }, { val: 85 }, { val: 92 }],
    [{ val: 5100 }, { val: 5400 }, { val: 5250 }, { val: 6100 }, { val: 6800 }, { val: 7400 }, { val: 8200 }],
    [{ val: 15.8 }, { val: 16.4 }, { val: 16.2 }, { val: 17.0 }, { val: 17.5 }, { val: 17.8 }, { val: 18.2 }],
    [{ val: 64 }, { val: 66 }, { val: 65 }, { val: 67 }, { val: 68 }, { val: 68 }, { val: 69 }],
  ];

  const negativeVariation = [
    { val: 5 }, { val: 4 }, { val: 4 }, { val: 3 }, { val: 3 }, { val: 2 }, { val: 1 }
  ];

  return isPositive ? positiveVariations[idx % positiveVariations.length] : negativeVariation;
};

export const BusinessKPIPanel: React.FC<BusinessKPIPanelProps> = ({
  business,
  onClose,
  onOpenFullPage,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState<'kpi' | 'brief' | 'projects'>('kpi');

  const kpis = BUSINESS_KPIS[business.id] || [];
  const execData: BusinessExecutiveReview | undefined = BUSINESS_EXECUTIVE_DATA[business.id];

  const panelBg = isLight ? 'bg-[#EEF1F8] border-slate-300 shadow-sm' : 'bg-[#0B1426] border-white/10 shadow-2xl';
  const cardBg = isLight ? 'bg-white border-slate-200' : 'bg-[#172033] border-white/10';
  const textMuted = isLight ? 'text-[#6B7280]' : 'text-[#94A3B8]';
  const textPrimary = isLight ? 'text-[#1F2937]' : 'text-white';

  return (
    <div className={`${panelBg} border rounded-2xl p-5 flex flex-col h-full select-none transition-all duration-200 justify-between min-h-[580px]`}>
      {/* Top Header Row */}
      <div>
        <div className={`flex items-center justify-between pb-3 border-b ${isLight ? 'border-slate-300' : 'border-white/10'}`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0E7C7B] shrink-0" />
            <div className="min-w-0">
              <h3 className={`text-sm lg:text-base font-extrabold tracking-wider uppercase truncate ${textPrimary}`}>
                {business.name}
              </h3>
              <span className="text-xs font-semibold text-[#C9A227] truncate block mt-0.5">
                {business.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenFullPage(business.id)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#172033] border border-[#C9A227]/60 text-[#C9A227] text-xs font-bold hover:bg-[#C9A227]/10 transition-all duration-150 cursor-pointer shadow-sm"
              title="Open full business review"
            >
              Full Page
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg border transition-all duration-150 cursor-pointer ${
                isLight
                  ? 'bg-slate-200 border-slate-300 text-[#6B7280] hover:text-[#1F2937]'
                  : 'bg-[#172033] border-white/10 text-[#94A3B8] hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Executive Summary Brief Banner */}
        {execData && (
          <div className="mt-3 p-3 rounded-xl bg-[#172033] border border-white/10 text-[11px] text-[#94A3B8] font-medium leading-relaxed">
            <span className="text-[#C9A227] font-bold block uppercase mb-0.5 text-[10px] tracking-wider">
              EXECUTIVE SUMMARY
            </span>
            {execData.executiveSummary}
          </div>
        )}

        {/* Navigation View Switcher Tabs (No "CEO" word) */}
        <div className="flex items-center gap-1.5 mt-3 p-1 rounded-xl bg-[#0B1426] border border-white/10 text-xs font-bold">
          <button
            onClick={() => setActiveTab('kpi')}
            className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer ${
              activeTab === 'kpi'
                ? 'bg-[#172033] text-[#C9A227] shadow'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            📊 Key Metrics
          </button>
          <button
            onClick={() => setActiveTab('brief')}
            className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer ${
              activeTab === 'brief'
                ? 'bg-[#172033] text-[#C9A227] shadow'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            🎯 Strategic Brief
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 py-1.5 rounded-lg transition-all text-center cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-[#172033] text-[#C9A227] shadow'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            🚀 Projects
          </button>
        </div>
      </div>

      {/* TAB 1: 6 KPI CARDS GRID */}
      {activeTab === 'kpi' && (
        <div className="grid grid-cols-2 gap-3 my-3 flex-1">
          {kpis.map((kpi, idx) => {
            const isPositive = kpi.isPositive !== false;
            const chartColor = kpi.color || (isPositive ? '#0E7C7B' : '#C1502E');
            const trendData = getKPITrendData(idx, isPositive);

            return (
              <div
                key={idx}
                className={`${cardBg} border rounded-2xl p-3.5 flex items-center justify-between transition-all duration-200 hover:border-[#C9A227]/40 group overflow-hidden`}
              >
                {/* Left Column: Label, Metric, and Trend */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 pr-2">
                  <span className={`text-[10px] lg:text-[11px] font-bold tracking-wider ${textMuted} uppercase truncate`}>
                    {kpi.label}
                  </span>

                  <div className="my-1">
                    <span
                      className="text-base lg:text-xl font-extrabold leading-none tracking-tight block truncate font-sans"
                      style={{ color: kpi.color || (isLight ? '#1F2937' : '#FFFFFF') }}
                    >
                      {kpi.value}
                    </span>
                  </div>

                  {kpi.change && (
                    <div className={`text-xs font-bold flex items-center gap-1 ${
                      isPositive ? 'text-[#0E7C7B]' : 'text-[#C1502E]'
                    }`}>
                      {isPositive
                        ? <TrendingUp className="w-3 h-3 shrink-0" />
                        : <TrendingDown className="w-3 h-3 shrink-0" />
                      }
                      <span>{kpi.change}</span>
                    </div>
                  )}
                </div>

                {/* Right Column: Relevant Sparkline Chart */}
                <div className="w-[85px] lg:w-[95px] h-[45px] flex items-end shrink-0 ml-1">
                  <SparklineChart
                    color={chartColor}
                    data={trendData}
                    height={45}
                    width={90}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: STRATEGIC BRIEF & FOCUS */}
      {activeTab === 'brief' && (
        <div className="space-y-3 my-3 flex-1 overflow-y-auto max-h-[300px] pr-1">
          {/* Executive Attention Item */}
          {execData?.ceoAttentionItems[0] && (
            <div className={`p-3.5 rounded-xl border ${cardBg} border-l-4 border-l-[#C1502E] space-y-1.5`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#C1502E] uppercase flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  EXECUTIVE ATTENTION REQUIRED
                </span>
                <span className="text-[10px] font-bold text-[#C1502E] px-2 py-0.5 rounded bg-[#C1502E]/15">
                  {execData.ceoAttentionItems[0].severity}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white">{execData.ceoAttentionItems[0].issue}</h4>
              <div className="text-[11px] text-[#C1502E] font-bold">
                Impact: {execData.ceoAttentionItems[0].financialImpact}
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                <strong className="text-[#C9A227]">Strategic Action: </strong>
                {execData.ceoAttentionItems[0].recommendedAction}
              </p>
            </div>
          )}

          {/* Top Performance Driver */}
          {execData?.performanceDrivers[0] && (
            <div className={`p-3.5 rounded-xl border ${cardBg} space-y-1`}>
              <span className="text-[10px] font-extrabold text-[#0E7C7B] uppercase flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                PRIMARY PERFORMANCE DRIVER
              </span>
              <h4 className="text-xs font-bold text-white">{execData.performanceDrivers[0].driver}</h4>
              <p className="text-[11px] text-[#94A3B8]">
                {execData.performanceDrivers[0].interpretation}
              </p>
            </div>
          )}

          {/* Top Pipeline Opportunity */}
          {execData?.pipeline.opportunities[0] && (
            <div className={`p-3.5 rounded-xl border ${cardBg} space-y-1`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#C9A227] uppercase flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  TOP GROWTH OPPORTUNITY
                </span>
                <span className="text-[10px] font-bold text-[#0E7C7B]">
                  {execData.pipeline.opportunities[0].potentialValue}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white">{execData.pipeline.opportunities[0].name}</h4>
              <p className="text-[11px] text-[#94A3B8]">
                <strong className="text-[#0E7C7B]">Strategic Action: </strong>
                {execData.pipeline.opportunities[0].ceoAction}
              </p>
            </div>
          )}

          {/* Recommended Strategic Focus */}
          {execData?.recommendedFocus && (
            <div className="p-3.5 rounded-xl bg-[#172033] border border-[#C9A227]/40 space-y-1">
              <span className="text-[10px] font-extrabold text-[#C9A227] uppercase block">
                RECOMMENDED STRATEGIC FOCUS
              </span>
              <p className="text-[11px] text-slate-200 font-semibold leading-relaxed">
                "{execData.recommendedFocus}"
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: MAJOR PROJECTS EXECUTION */}
      {activeTab === 'projects' && (
        <div className="space-y-3 my-3 flex-1 overflow-y-auto max-h-[300px] pr-1">
          {execData?.majorProjects && execData.majorProjects.length > 0 ? (
            execData.majorProjects.map((proj: MajorProjectDetail, idx: number) => (
              <div key={idx} className={`p-3.5 rounded-xl border ${cardBg} space-y-2`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{proj.name}</h4>
                    <span className="text-[10px] text-[#94A3B8]">{proj.location}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    proj.status === 'ON TRACK'
                      ? 'bg-[#0E7C7B]/20 text-[#0E7C7B]'
                      : 'bg-[#C1502E]/20 text-[#C1502E]'
                  }`}>
                    {proj.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-[#C9A227]">{proj.value}</span>
                  <span className="text-slate-300">{proj.progress}% Complete</span>
                </div>

                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0E7C7B] rounded-full"
                    style={{ width: `${proj.progress}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-xs text-[#94A3B8]">
              No active major projects flagged.
            </div>
          )}
        </div>
      )}

      {/* Bottom Financial Footer Strip */}
      <div className={`pt-3 border-t ${isLight ? 'border-slate-300' : 'border-white/10'} flex items-center justify-between`}>
        <div>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${textMuted} block`}>
            YTD REVENUE
          </span>
          <div className="text-sm lg:text-base font-extrabold text-[#0E7C7B] mt-0.5">
            {business.revenue}
          </div>
        </div>

        <div className="text-center">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${textMuted} block`}>
            GROWTH
          </span>
          <div className="text-sm lg:text-base font-extrabold text-[#0E7C7B] mt-0.5">
            ▲ {business.growth}
          </div>
        </div>

        <div className="text-right">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${textMuted} block mb-1`}>
            STATUS
          </span>
          <span className={`inline-block text-xs font-extrabold px-3 py-0.5 rounded-full ${
            business.status === 'Healthy'
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
