import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Layers,
  Activity,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { SparklineChart } from '../components/charts/SparklineChart';
import { CEOActionModal } from '../components/modals/CEOActionModal';
import { useTheme } from '../context/ThemeContext';
import { BUSINESS_EXECUTIVE_DATA, BusinessExecutiveReview, CEOAttentionDetail } from '../data/businessData';

interface BusinessExecutivePageProps {
  businessId: string;
  onBack: () => void;
}

export const BusinessExecutivePage: React.FC<BusinessExecutivePageProps> = ({
  businessId,
  onBack,
}) => {
  const [business, setBusiness] = useState<EcosystemBusiness | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'financials' | 'projects' | 'risks'>('overview');
  
  // CEO Action Modal State
  const [selectedActionItem, setSelectedActionItem] = useState<CEOAttentionDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    ecosystemService.getBusinessById(businessId).then((res) => setBusiness(res || null));
    window.scrollTo(0, 0);
  }, [businessId]);

  if (!business) {
    return (
      <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-slate-400">
        <div className="w-8 h-8 border-3 border-[#C9A227] border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">
          Loading Executive Cockpit...
        </span>
      </div>
    );
  }

  // Retrieve comprehensive CEO data for this business vertical
  const execData: BusinessExecutiveReview | undefined = BUSINESS_EXECUTIVE_DATA[business.id];

  // Master Executive Design Tokens - Clean, Sophisticated Enterprise Dark Theme
  const cardBg = isLight
    ? 'bg-white border-slate-200 shadow-sm'
    : 'bg-[#131C2E] border-slate-800/80 shadow-md';
  
  const innerCardBg = isLight
    ? 'bg-slate-50 border-slate-200'
    : 'bg-[#0B1426] border-slate-800/60';
  
  const textMuted = isLight ? 'text-slate-500' : 'text-[#94A3B8]';
  const textPrimary = isLight ? 'text-slate-900' : 'text-white';

  const openDirectiveModal = (item?: CEOAttentionDetail) => {
    if (item) {
      setSelectedActionItem(item);
    } else {
      setSelectedActionItem({
        issue: execData?.ceoAttentionItems?.[0]?.issue || 'Environmental Regulatory Clearance Slip for Hyderabad Tech Tower',
        severity: 'Critical',
        financialImpact: execData?.ceoAttentionItems?.[0]?.financialImpact || '₹ 120 Cr capital lockup for 45 additional days',
        businessImpact: execData?.ceoAttentionItems?.[0]?.businessImpact || 'Land acquisition and project milestone timeline slip.',
        rootCause: execData?.ceoAttentionItems?.[0]?.rootCause || 'State Pollution Control Board environmental approval queue.',
        recommendedAction: execData?.ceoAttentionItems?.[0]?.recommendedAction || 'Submit revised environmental impact assessment report.',
      });
    }
    setIsModalOpen(true);
  };

  const getStatusBadge = (status: EcosystemBusiness['status']) => {
    switch (status) {
      case 'Healthy':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0E7C7B]/15 border border-[#0E7C7B]/40 text-[#0E7C7B] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7C7B]" />
            Healthy Performance
          </span>
        );
      case 'Warning':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            Attention Required
          </span>
        );
      case 'Critical':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E61C40]/15 border border-[#E61C40]/40 text-[#E61C40] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61C40]" />
            Critical Action Needed
          </span>
        );
    }
  };

  const getProjectStatusBadge = (status: string) => {
    switch (status) {
      case 'ON TRACK':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0E7C7B]/15 text-[#0E7C7B] border border-[#0E7C7B]/30">
            On Track
          </span>
        );
      case 'WATCH':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30">
            Watch
          </span>
        );
      case 'DELAYED':
      case 'AT RISK':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E61C40]/15 text-[#E61C40] border border-[#E61C40]/30">
            {status}
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-700/30 text-slate-300 border border-slate-600/30">
            {status}
          </span>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-[calc(100vh-64px)] flex flex-col justify-between p-4 lg:p-6 max-w-[1720px] mx-auto select-none space-y-4 font-sans"
    >
      {/* ------------------------------------------------------------- */}
      {/* TOP HEADER & TITLE AREA */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-3 shrink-0">
        {/* Navigation & Tab Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                  : 'bg-[#131C2E] border-slate-800 text-slate-200 hover:border-slate-700'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Return to Group Universe</span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">
                Executive Cockpit • ASP-{business.id.toUpperCase()}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Board Review Ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Tabs */}
            <div className="flex items-center p-1 rounded-lg bg-[#0B1426] border border-slate-800">
              {(['overview', 'financials', 'projects', 'risks'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#C9A227] text-[#0B1426] font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab === 'projects' ? 'Capex Projects' : tab === 'risks' ? 'Risk Matrix' : tab}
                </button>
              ))}
            </div>

            <button
              onClick={() => openDirectiveModal()}
              className="px-3.5 py-1.5 rounded-lg bg-[#0E7C7B] hover:bg-[#0E7C7B]/90 text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>CEO Directive</span>
            </button>
          </div>
        </div>

        {/* Business Title Banner Card */}
        <div className={`${cardBg} rounded-xl p-4 flex items-center justify-between gap-4 border`}>
          <div className="flex items-center gap-4 min-w-0">
            {business.image3dUrl ? (
              <img
                src={business.image3dUrl}
                alt={business.name}
                className="w-14 h-14 rounded-lg object-cover border border-slate-700 shadow-sm shrink-0"
              />
            ) : (
              <div className="w-14 h-14 rounded-lg bg-[#0B1426] border border-slate-800 text-[#C9A227] flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider truncate">
                  {business.category}
                </span>
                {getStatusBadge(business.status)}
              </div>
              <h1 className={`text-2xl lg:text-3xl font-bold tracking-tight uppercase leading-tight mt-0.5 truncate ${textPrimary}`}>
                {business.name}
              </h1>
              <p className="text-xs text-slate-400 font-normal truncate mt-0.5">
                {business.tagline || 'Architectural Distinction • IGBC Platinum • Urban Spaces'}
              </p>
            </div>
          </div>

          <div className={`p-3 rounded-lg border text-right min-w-[200px] ${innerCardBg}`}>
            <span className="text-[11px] text-slate-400 uppercase font-semibold block tracking-wider">
              Portfolio Contribution
            </span>
            <span className="text-2xl font-bold text-[#0E7C7B] block mt-0.5">
              {business.revenue}
            </span>
            <span className="text-xs font-semibold text-[#0E7C7B] inline-flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3 h-3" /> ▲ {business.growth} YoY
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STEP 1: PERFORMANCE SUMMARY (6 HORIZONTAL KPI CARDS) */}
      {/* ------------------------------------------------------------- */}
      <div className="shrink-0 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#C9A227]" />
            Primary CEO Key Performance Indicators
          </h2>
          <span className="text-[11px] text-slate-400 font-medium">Real-Time Benchmarks</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* KPI 1: YTD Revenue */}
          <div className={`${cardBg} rounded-xl p-3.5 flex flex-col justify-between border h-[90px]`}>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block truncate">YTD Revenue</span>
            <div className="flex items-baseline justify-between gap-1 mt-1">
              <span className={`text-xl font-bold ${textPrimary} tracking-tight truncate`}>{business.revenue}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-medium text-[#0E7C7B] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> ▲ {business.growth}
              </span>
              <div className="w-[50px] h-[22px] flex items-end shrink-0">
                <SparklineChart color="#0E7C7B" data={business.sparklineData || [{ val: 4200 }, { val: 4600 }, { val: 5100 }, { val: 5500 }, { val: 5820 }]} height={22} width={50} />
              </div>
            </div>
          </div>

          {/* KPI 2: EBITDA Margin */}
          <div className={`${cardBg} rounded-xl p-3.5 flex flex-col justify-between border h-[90px]`}>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block truncate">EBITDA Margin</span>
            <div className="flex items-baseline justify-between gap-1 mt-1">
              <span className="text-xl font-bold text-[#0E7C7B] tracking-tight truncate">{business.ebitdaMargin || '28.4%'}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-medium text-[#0E7C7B] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> ▲ 2.4pp
              </span>
              <div className="w-[50px] h-[22px] flex items-end shrink-0">
                <SparklineChart color="#0E7C7B" data={[{ val: 14.2 }, { val: 16.0 }, { val: 18.4 }, { val: 20.1 }, { val: 21.5 }]} height={22} width={50} />
              </div>
            </div>
          </div>

          {/* KPI 3: Portfolio NAV */}
          <div className={`${cardBg} rounded-xl p-3.5 flex flex-col justify-between border h-[90px]`}>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block truncate">Portfolio Value</span>
            <div className="flex items-baseline justify-between gap-1 mt-1">
              <span className="text-xl font-bold text-[#C9A227] tracking-tight truncate">{business.portfolioValue || '₹ 16,800 Cr'}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-slate-400 font-normal truncate">vs LY ₹ 4.4k Cr</span>
              <div className="w-[50px] h-[22px] flex items-end shrink-0">
                <SparklineChart color="#C9A227" data={[{ val: 11000 }, { val: 12400 }, { val: 13500 }, { val: 14100 }, { val: 14500 }]} height={22} width={50} />
              </div>
            </div>
          </div>

          {/* KPI 4: Pipeline Value */}
          <div className={`${cardBg} rounded-xl p-3.5 flex flex-col justify-between border h-[90px]`}>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block truncate">Pipeline Value</span>
            <div className="flex items-baseline justify-between gap-1 mt-1">
              <span className="text-xl font-bold text-[#C9A227] tracking-tight truncate">{business.pipelineValue || '₹ 2,800 Cr'}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-medium text-[#0E7C7B] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> ▲ 18.2%
              </span>
              <div className="w-[50px] h-[22px] flex items-end shrink-0">
                <SparklineChart color="#C9A227" data={[{ val: 2100 }, { val: 2350 }, { val: 2520 }, { val: 2680 }, { val: 2800 }]} height={22} width={50} />
              </div>
            </div>
          </div>

          {/* KPI 5: Primary Output */}
          <div className={`${cardBg} rounded-xl p-3.5 flex flex-col justify-between border h-[90px]`}>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block truncate">{business.keyMetricLabel}</span>
            <div className="flex items-baseline justify-between gap-1 mt-1">
              <span className="text-xl font-bold text-[#0E7C7B] tracking-tight truncate">{business.keyMetricValue}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-slate-400 font-normal truncate">Primary Output</span>
              <div className="w-[50px] h-[22px] flex items-end shrink-0">
                <SparklineChart color="#0E7C7B" data={[{ val: 380 }, { val: 415 }, { val: 440 }, { val: 465 }, { val: 480 }]} height={22} width={50} />
              </div>
            </div>
          </div>

          {/* KPI 6: Units / Divisions */}
          <div className={`${cardBg} rounded-xl p-3.5 flex flex-col justify-between border h-[90px]`}>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block truncate">Divisions / Units</span>
            <div className="flex items-baseline justify-between gap-1 mt-1">
              <span className={`text-xl font-bold ${textPrimary} tracking-tight truncate`}>{business.businessesCount} Units</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-medium text-[#0E7C7B]">100% Operational</span>
              <div className="w-[50px] h-[22px] flex items-end shrink-0">
                <SparklineChart color="#4A6FA5" data={[{ val: 3 }, { val: 4 }, { val: 4 }, { val: 5 }, { val: 5 }]} height={22} width={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB SWITCHED VIEWS */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 min-h-0">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* ------------------------------------------------------------- */}
            {/* STEP 2: PERFORMANCE TELEMETRY & PERFORMANCE DRIVERS (Split 6/6) */}
            {/* ------------------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left 6 cols: Executive Performance Telemetry */}
              <div className={`lg:col-span-6 p-4 rounded-xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C9A227]" />
                    Executive Performance Telemetry
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">Quarterly Telemetry</span>
                </div>

                <div className="grid grid-cols-3 gap-3 my-3">
                  {/* Revenue */}
                  <div className={`p-3 rounded-lg border ${innerCardBg} flex flex-col justify-between h-[135px]`}>
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">Revenue</span>
                      <span className="text-xs text-[#0E7C7B] font-semibold block mt-0.5">▲ {business.growth}</span>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        "{execData?.chartAnnotations?.revenue || 'Quarterly revenue surpassed ₹ 1,100 Cr for the first time.'}"
                      </p>
                    </div>
                    <div className="mt-2">
                      <SparklineChart data={business.sparklineData || [{ val: 4200 }, { val: 4800 }, { val: 5820 }]} color="#0E7C7B" height={32} />
                    </div>
                  </div>

                  {/* Profitability */}
                  <div className={`p-3 rounded-lg border ${innerCardBg} flex flex-col justify-between h-[135px]`}>
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">Profitability</span>
                      <span className="text-xs text-[#0E7C7B] font-semibold block mt-0.5">Margin {business.ebitdaMargin || '28.4%'}</span>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        "{execData?.chartAnnotations?.margin || 'EBITDA margin reached 28.4% due to premium commercial rentals.'}"
                      </p>
                    </div>
                    <div className="mt-2">
                      <SparklineChart data={[{ val: 18.2 }, { val: 20.0 }, { val: 21.5 }]} color="#C9A227" height={32} />
                    </div>
                  </div>

                  {/* Contribution */}
                  <div className={`p-3 rounded-lg border ${innerCardBg} flex flex-col justify-between h-[135px]`}>
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">Contribution</span>
                      <span className="text-xs text-[#C9A227] font-semibold block mt-0.5">Share 23.4%</span>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        "{execData?.chartAnnotations?.contribution || 'Realty contributes 15.6% of overall Group YTD Revenue.'}"
                      </p>
                    </div>
                    <div className="mt-2">
                      <SparklineChart data={[{ val: 21.0 }, { val: 22.4 }, { val: 23.4 }]} color="#4A6FA5" height={32} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 6 cols: What is Driving Performance? */}
              <div className={`lg:col-span-6 p-4 rounded-xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#C9A227]" />
                    What is Driving Performance?
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">4 Key Drivers</span>
                </div>

                <div className="space-y-2.5 my-auto py-2">
                  {(execData?.performanceDrivers || [
                    { driver: 'Pre-leasing 90% Commercial Skyscrapers', impactType: 'positive', relevantKpi: 'Revenue & Margin', interpretation: 'Multinational banking tenants locked in 12-year lease commitments.' },
                    { driver: 'IGBC Platinum Sustainability Premium', impactType: 'positive', relevantKpi: 'Project Value', interpretation: 'Green certified towers command 18% rental rate premium over market.' },
                    { driver: 'Retail Mall Footfall Growth', impactType: 'positive', relevantKpi: 'Yield +14%', interpretation: 'Weekend footfalls increased by 22% quarter-over-quarter.' },
                    { driver: 'Phase II Regulatory Approval Timeline', impactType: 'negative', relevantKpi: 'Pending SLA', interpretation: 'State Pollution Control Board clearance pending for Hyderabad site.' },
                  ]).slice(0, 4).map((drv, i) => (
                    <div key={i} className={`p-2.5 rounded-lg border ${innerCardBg} flex items-center justify-between gap-3`}>
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-1.5 rounded shrink-0 ${
                          drv.impactType === 'positive' ? 'bg-[#0E7C7B]/15 text-[#0E7C7B]' : 'bg-[#E61C40]/15 text-[#E61C40]'
                        }`}>
                          {drv.impactType === 'positive' ? <TrendingUp className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-slate-100 block truncate">{drv.driver}</span>
                          <span className="text-[11px] text-slate-400 block truncate mt-0.5">{drv.interpretation}</span>
                        </div>
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded shrink-0 ${
                        drv.impactType === 'positive' ? 'bg-[#0E7C7B]/15 text-[#0E7C7B]' : 'bg-[#E61C40]/15 text-[#E61C40]'
                      }`}>
                        {drv.relevantKpi}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* STEP 3 & 4: RISKS & CAPEX PROJECTS (Split 6/6) */}
            {/* ------------------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left 6 cols: CEO Attention & Capital Risks */}
              <div className={`lg:col-span-6 p-4 rounded-xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-xs font-semibold text-[#E61C40] uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#E61C40]" />
                    CEO Attention & Risk Exposure
                  </h3>
                  <span className="text-[11px] font-semibold text-[#E61C40] px-2 py-0.5 rounded bg-[#E61C40]/15 border border-[#E61C40]/30">
                    Leadership Action Needed
                  </span>
                </div>

                <div className="space-y-3 my-auto py-2">
                  {execData?.ceoAttentionItems && execData.ceoAttentionItems.length > 0 ? (
                    execData.ceoAttentionItems.slice(0, 2).map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border ${innerCardBg} border-l-4 border-l-[#E61C40] flex flex-col sm:flex-row sm:items-center justify-between gap-3`}
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-[#E61C40] shrink-0" />
                            <span className="text-xs font-bold text-slate-100 uppercase truncate">
                              {item.issue}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            <strong className="text-[#C9A227]">Action Required: </strong>{item.recommendedAction}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <span className="text-[11px] font-semibold px-2 py-1 rounded bg-[#E61C40]/15 text-[#E61C40]">
                            {item.financialImpact}
                          </span>
                          <button
                            onClick={() => openDirectiveModal(item)}
                            className="px-3 py-1 rounded bg-[#E61C40] hover:bg-[#E61C40]/90 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
                          >
                            <span>Authorize &gt;</span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={`p-4 rounded-lg border ${innerCardBg} flex items-center gap-3`}>
                      <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] shrink-0" />
                      <div>
                        <h4 className="text-xs font-semibold text-slate-200">No Critical Risk Alerts</h4>
                        <p className="text-[11px] text-slate-400">All business units are executing within normal baseline parameters.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right 6 cols: Major Strategic Projects (CAPEX) */}
              <div className={`lg:col-span-6 p-4 rounded-xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C9A227]" />
                    Major Strategic Projects
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">Top Projects</span>
                </div>

                <div className="space-y-2.5 my-auto py-2">
                  {(execData?.majorProjects || [
                    { name: 'Aspect Tech Skyline Tower', location: 'Hyderabad, Telangana', value: '₹ 1,200 Cr', progress: 82, status: 'ON TRACK', completionDate: 'Q4 FY26' },
                    { name: 'Financial Center Phase II', location: 'Mumbai, Maharashtra', value: '₹ 1,050 Cr', progress: 64, status: 'WATCH', completionDate: 'Q2 FY27' },
                    { name: 'Sanctuary Coastal Resort', location: 'Goa Coast', value: '₹ 820 Cr', progress: 45, status: 'ON TRACK', completionDate: 'Q4 FY27' },
                  ]).slice(0, 3).map((proj, idx) => (
                    <div key={idx} className={`p-2.5 rounded-lg border ${innerCardBg} flex items-center justify-between gap-4`}>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-100 uppercase truncate">{proj.name}</span>
                          {getProjectStatusBadge(proj.status)}
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                          <span>{proj.location} • <strong className="text-[#C9A227]">{proj.value}</strong></span>
                          <span>Target: {proj.completionDate}</span>
                        </div>
                      </div>

                      {/* Clean Linear Progress Bar */}
                      <div className="w-24 shrink-0 text-right">
                        <span className="text-xs font-bold text-slate-200 block mb-1">{proj.progress}%</span>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${proj.status === 'ON TRACK' ? 'bg-[#0E7C7B]' : 'bg-[#C9A227]'}`}
                            style={{ width: `${proj.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FINANCIALS TAB CONTENT */}
        {activeTab === 'financials' && (
          <div className={`p-5 rounded-xl border ${cardBg} space-y-4`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Financial Telemetry & Capital Return Analysis
              </h3>
              <span className="text-xs text-slate-400">Audited Q3 Telemetry</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className={`p-4 rounded-lg border ${innerCardBg}`}>
                <span className="text-xs text-slate-400 font-medium block">ROCE (Return on Capital)</span>
                <span className="text-2xl font-bold text-[#0E7C7B] block mt-1">18.4%</span>
                <span className="text-xs text-slate-400 block mt-1">+1.8pp over WACC</span>
              </div>
              <div className={`p-4 rounded-lg border ${innerCardBg}`}>
                <span className="text-xs text-slate-400 font-medium block">Free Cash Flow (FCF)</span>
                <span className="text-2xl font-bold text-white block mt-1">₹ 840 Cr</span>
                <span className="text-xs text-[#0E7C7B] block mt-1">▲ 22.1% YoY</span>
              </div>
              <div className={`p-4 rounded-lg border ${innerCardBg}`}>
                <span className="text-xs text-slate-400 font-medium block">Capex Deployment Rate</span>
                <span className="text-2xl font-bold text-[#C9A227] block mt-1">86.2%</span>
                <span className="text-xs text-slate-400 block mt-1">On plan for FY26</span>
              </div>
              <div className={`p-4 rounded-lg border ${innerCardBg}`}>
                <span className="text-xs text-slate-400 font-medium block">Net Debt / EBITDA</span>
                <span className="text-2xl font-bold text-[#0E7C7B] block mt-1">1.1x</span>
                <span className="text-xs text-slate-400 block mt-1">Conservative gearing</span>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS TAB CONTENT */}
        {activeTab === 'projects' && (
          <div className={`p-5 rounded-xl border ${cardBg} space-y-3`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" /> Strategic Capex Projects Register
              </h3>
              <span className="text-xs text-slate-400">Active Capital Investments</span>
            </div>

            <div className="space-y-3">
              {(execData?.majorProjects || [
                { name: 'Aspect Tech Skyline Tower', location: 'Hyderabad, Telangana', value: '₹ 1,200 Cr', progress: 82, status: 'ON TRACK', completionDate: 'Q4 FY26' },
                { name: 'Financial Center Phase II', location: 'Mumbai, Maharashtra', value: '₹ 1,050 Cr', progress: 64, status: 'WATCH', completionDate: 'Q2 FY27' },
                { name: 'Sanctuary Coastal Resort', location: 'Goa Coast', value: '₹ 820 Cr', progress: 45, status: 'ON TRACK', completionDate: 'Q4 FY27' },
              ]).map((proj, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${innerCardBg} flex items-center justify-between gap-4`}>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-100 uppercase">{proj.name}</span>
                      {getProjectStatusBadge(proj.status)}
                    </div>
                    <p className="text-xs text-slate-400">
                      Location: <strong className="text-slate-200">{proj.location}</strong> • Financial Outlay: <strong className="text-[#C9A227]">{proj.value}</strong> • Completion Target: <strong className="text-slate-200">{proj.completionDate}</strong>
                    </p>
                  </div>

                  <div className="w-32 shrink-0 text-right">
                    <span className="text-xs font-bold text-slate-200 block mb-1">{proj.progress}%</span>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${proj.status === 'ON TRACK' ? 'bg-[#0E7C7B]' : 'bg-[#C9A227]'}`}
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RISKS TAB CONTENT */}
        {activeTab === 'risks' && (
          <div className={`p-5 rounded-xl border ${cardBg} space-y-3`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-semibold text-[#E61C40] uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#E61C40]" /> Enterprise Risk & Exposure Register
              </h3>
              <span className="text-xs text-slate-400">Active Exposure Analysis</span>
            </div>

            <div className="space-y-3">
              {(execData?.risksAndExposure || [
                {
                  risk: 'State Environmental License Delay for Hyderabad Tech Tower',
                  severity: 'High',
                  exposure: '₹ 120 Cr Locked',
                  impact: 'Construction milestone timeline slip of 45 days.',
                  probability: 'High (70%)',
                  mitigation: 'Engage Senior Liaison Officer to submit expedited EIA assessment.'
                }
              ]).map((riskItem, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${innerCardBg} border-l-4 border-l-[#E61C40] space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-100 uppercase flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#E61C40]" /> {riskItem.risk}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#E61C40]/15 text-[#E61C40]">
                      {riskItem.exposure}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{riskItem.impact}</p>
                  <div className="p-2 rounded bg-slate-900/60 text-xs text-slate-400">
                    <strong className="text-[#C9A227]">Mitigation: </strong>{riskItem.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STEP 5: ACTION REQUIRED (RECOMMENDED CEO FOCUS BANNER) */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#131C2E] border border-[#C9A227]/60 rounded-xl p-3.5 text-white shadow-lg flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider block">
              Recommended CEO Focus
            </span>
            <p className="text-xs text-slate-200 truncate mt-0.5">
              "{execData?.recommendedFocus || `Sign land acquisition for Aspect Smart Financial City Phase II while clearing Pollution Control Board environmental approval for Hyderabad Tech Tower.`}"
            </p>
          </div>
        </div>

        <button
          onClick={() => openDirectiveModal()}
          className="px-4 py-1.5 rounded-lg bg-[#C9A227] hover:bg-[#C9A227]/90 text-[#0B1426] font-bold text-xs transition-colors shrink-0 cursor-pointer shadow flex items-center gap-1"
        >
          <span>Execute Action Directive</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* CEO DIRECTIVE ACTION MODAL */}
      <CEOActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedActionItem?.issue || 'Environmental Regulatory Approval Slip for Hyderabad Tech Tower'}
        financialImpact={selectedActionItem?.financialImpact || '₹ 120 Cr capital lockup for 45 additional days'}
        businessImpact={selectedActionItem?.businessImpact || 'Land acquisition and project milestone timeline slip.'}
        recommendedAction={selectedActionItem?.recommendedAction || 'Submit revised environmental impact assessment report.'}
        businessName={business.name}
      />
    </motion.div>
  );
};
