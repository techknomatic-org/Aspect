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
  BarChart3,
  DollarSign,
  Briefcase,
  PieChart
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
  const [business, setBusiness] = useState<EcosystemBusiness[] | EcosystemBusiness | null>(null);
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

  const currentBusiness = Array.isArray(business) ? business[0] : business;

  if (!currentBusiness) {
    return (
      <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-slate-400">
        <div className="w-8 h-8 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider">
          Loading Executive Cockpit...
        </span>
      </div>
    );
  }

  // Retrieve comprehensive CEO data for this business vertical
  const execData: BusinessExecutiveReview | undefined = BUSINESS_EXECUTIVE_DATA[currentBusiness.id];

  // Master Executive Design Tokens - Matching Overview Page Theme
  const cardBg = isLight
    ? 'bg-white border-slate-300 shadow-sm text-[#1F2937]'
    : 'bg-[#131C2E] border-slate-800 shadow-md text-slate-100';

  const innerCardBg = isLight
    ? 'bg-slate-50 border-slate-300 text-[#1F2937]'
    : 'bg-[#0B1426] border-slate-800 text-slate-200';

  const textMuted = isLight ? 'text-[#6B7280]' : 'text-[#94A3B8]';
  const textPrimary = isLight ? 'text-[#1F2937]' : 'text-white';

  const openDirectiveModal = (item?: CEOAttentionDetail) => {
    if (item) {
      setSelectedActionItem(item);
    } else {
      setSelectedActionItem({
        issue: execData?.ceoAttentionItems?.[0]?.issue || 'Environmental Regulatory Clearance Slip for Hyderabad Tech Tower',
        severity: 'Critical',
        financialImpact: execData?.ceoAttentionItems?.[0]?.financialImpact || '₹ 0.1k Cr capital lockup for 45 additional days',
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
          <span className="px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/40 text-[#0E7C7B] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7C7B]" />
            Healthy Performance
          </span>
        );
      case 'Warning':
        return (
          <span className="px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            Attention Required
          </span>
        );
      case 'Critical':
        return (
          <span className="px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-[#E61C40]/15 border border-[#E61C40]/40 text-[#E61C40] inline-flex items-center gap-1.5">
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
          <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-[#0E7C7B]/15 text-[#0E7C7B] border border-[#0E7C7B]/30">
            On Track
          </span>
        );
      case 'WATCH':
        return (
          <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30">
            Watch
          </span>
        );
      case 'DELAYED':
      case 'AT RISK':
        return (
          <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-[#E61C40]/15 text-[#E61C40] border border-[#E61C40]/30">
            {status}
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-slate-700/30 text-slate-300 border border-slate-600/30">
            {status}
          </span>
        );
    }
  };

  // Gradient themes matching Overview Page
  const tealGrad = isLight
    ? 'bg-gradient-to-br from-[#0E7C7B]/15 via-[#0E7C7B]/8 to-white border-[#0E7C7B]/30 hover:border-[#0E7C7B]/60 shadow-sm'
    : 'bg-gradient-to-br from-[#0E7C7B]/22 via-[#0E7C7B]/10 to-[#0A1624] border-[#0E7C7B]/40 hover:border-[#0E7C7B]/70 shadow-lg';

  const goldGrad = isLight
    ? 'bg-gradient-to-br from-[#C9A227]/15 via-[#C9A227]/8 to-white border-[#C9A227]/30 hover:border-[#C9A227]/60 shadow-sm'
    : 'bg-gradient-to-br from-[#C9A227]/22 via-[#C9A227]/10 to-[#1F190B] border-[#C9A227]/40 hover:border-[#C9A227]/70 shadow-lg';

  const blueGrad = isLight
    ? 'bg-gradient-to-br from-[#4A6FA5]/15 via-[#4A6FA5]/8 to-white border-[#4A6FA5]/30 hover:border-[#4A6FA5]/60 shadow-sm'
    : 'bg-gradient-to-br from-[#4A6FA5]/22 via-[#4A6FA5]/10 to-[#0F1729] border-[#4A6FA5]/40 hover:border-[#4A6FA5]/70 shadow-lg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-4 max-w-[1720px] mx-auto select-none font-sans"
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
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer ${isLight
                  ? 'bg-white border-slate-300 text-[#1F2937] hover:border-slate-400 shadow-sm'
                  : 'bg-[#131C2E] border-slate-800 text-slate-200 hover:border-slate-700'
                }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Return to Universe</span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              <span className={`text-xs font-bold ${textMuted}`}>
                Executive Cockpit • ASP-{currentBusiness.id.toUpperCase()}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#C9A227] font-black uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Board Review Ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* View Tabs */}
            <div className={`flex items-center p-1 rounded-xl border ${isLight ? 'bg-slate-100 border-slate-300' : 'bg-[#0B1426] border-slate-800'}`}>
              {(['overview', 'financials', 'projects', 'risks'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${activeTab === tab
                      ? 'bg-[#C9A227] text-[#0B1426] shadow-sm'
                      : isLight ? 'text-[#6B7280] hover:text-[#1F2937]' : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  {tab === 'projects' ? 'Capex Projects' : tab === 'risks' ? 'Risk Matrix' : tab}
                </button>
              ))}
            </div>

            <button
              onClick={() => openDirectiveModal()}
              className="px-4 py-2 rounded-xl bg-[#0E7C7B] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>CEO Directive</span>
            </button>
          </div>
        </div>

        {/* Business Title Banner Card */}
        <div className={`${cardBg} rounded-2xl p-4 lg:p-5 flex items-center justify-between gap-4 border`}>
          <div className="flex items-center gap-4 min-w-0">
            {currentBusiness.image3dUrl ? (
              <img
                src={currentBusiness.image3dUrl}
                alt={currentBusiness.name}
                className="w-14 h-14 rounded-2xl object-cover border border-[#C9A227]/40 shadow-sm shrink-0"
              />
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-[#0B1426] border border-slate-800 text-[#C9A227] flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider truncate">
                  {currentBusiness.category}
                </span>
                {getStatusBadge(currentBusiness.status)}
              </div>
              <h1 className={`text-2xl lg:text-3xl font-black tracking-tight uppercase leading-tight mt-0.5 truncate ${textPrimary}`}>
                {currentBusiness.name}
              </h1>
              <p className={`text-xs font-medium truncate mt-0.5 ${textMuted}`}>
                {currentBusiness.tagline || 'Architectural Distinction • IGBC Platinum • Urban Spaces'}
              </p>
            </div>
          </div>

          <div className={`p-3.5 rounded-2xl border text-right min-w-[210px] ${tealGrad}`}>
            <span className="text-[10px] lg:text-[11px] uppercase font-extrabold text-[#0E7C7B] block tracking-wider">
              PORTFOLIO CONTRIBUTION
            </span>
            <span className="text-2xl lg:text-[26px] font-black text-[#1F2937] dark:text-white block mt-0.5 tracking-tight leading-none">
              {currentBusiness.revenue}
            </span>
            <span className="text-xs font-bold text-[#0E7C7B] inline-flex items-center gap-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5" /> ▲ {currentBusiness.growth} YoY
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STEP 1: PERFORMANCE SUMMARY (6 HORIZONTAL KPI CARDS) */}
      {/* ------------------------------------------------------------- */}
      <div className="shrink-0 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#C9A227]" />
            Primary CEO Key Performance Indicators
          </h2>
          <span className={`text-[11px] font-bold ${textMuted}`}>Real-Time Benchmarks</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {/* KPI 1: YTD Revenue (Teal Gradient) */}
          <div className={`${tealGrad} rounded-2xl p-3.5 flex flex-col justify-between border h-[105px]`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <DollarSign className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#0E7C7B] truncate">YTD REVENUE</span>
            </div>
            <div className="my-0.5">
              <span className="text-xl lg:text-2xl font-black text-[#1F2937] dark:text-white tracking-tight block leading-none truncate">{currentBusiness.revenue}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#0E7C7B] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> ▲ {currentBusiness.growth}
              </span>
              <div className="w-[45px] h-[20px] flex items-end shrink-0">
                <SparklineChart color="#0E7C7B" data={currentBusiness.sparklineData || [{ val: 4200 }, { val: 4600 }, { val: 5100 }, { val: 5500 }, { val: 5820 }]} height={20} width={45} />
              </div>
            </div>
          </div>

          {/* KPI 2: EBITDA Margin (Teal Gradient) */}
          <div className={`${tealGrad} rounded-2xl p-3.5 flex flex-col justify-between border h-[105px]`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <TrendingUp className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" />
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#0E7C7B] truncate">EBITDA MARGIN</span>
            </div>
            <div className="my-0.5">
              <span className="text-xl lg:text-2xl font-black text-[#0E7C7B] tracking-tight block leading-none truncate">{currentBusiness.ebitdaMargin || '28.4%'}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#0E7C7B] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> ▲ 2.4pp
              </span>
              <div className="w-[45px] h-[20px] flex items-end shrink-0">
                <SparklineChart color="#0E7C7B" data={[{ val: 14.2 }, { val: 16.0 }, { val: 18.4 }, { val: 20.1 }, { val: 21.5 }]} height={20} width={45} />
              </div>
            </div>
          </div>

          {/* KPI 3: Portfolio Value (Gold Gradient) */}
          <div className={`${goldGrad} rounded-2xl p-3.5 flex flex-col justify-between border h-[105px]`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <Briefcase className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#B8860B] dark:text-[#F59E0B] truncate">PORTFOLIO VALUE</span>
            </div>
            <div className="my-0.5">
              <span className="text-xl lg:text-2xl font-black text-[#1F2937] dark:text-white tracking-tight block leading-none truncate">{currentBusiness.portfolioValue || '₹ 15.2k Cr'}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#B8860B] dark:text-[#F59E0B] truncate">vs LY ₹ 4.4k Cr</span>
              <div className="w-[45px] h-[20px] flex items-end shrink-0">
                <SparklineChart color="#C9A227" data={[{ val: 11000 }, { val: 12400 }, { val: 13500 }, { val: 14100 }, { val: 14500 }]} height={20} width={45} />
              </div>
            </div>
          </div>

          {/* KPI 4: Pipeline Value (Gold Gradient) */}
          <div className={`${goldGrad} rounded-2xl p-3.5 flex flex-col justify-between border h-[105px]`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <PieChart className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#B8860B] dark:text-[#F59E0B] truncate">PIPELINE VALUE</span>
            </div>
            <div className="my-0.5">
              <span className="text-xl lg:text-2xl font-black text-[#1F2937] dark:text-white tracking-tight block leading-none truncate">{currentBusiness.pipelineValue || '₹ 2.8k Cr'}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#0E7C7B] flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> ▲ 18.2%
              </span>
              <div className="w-[45px] h-[20px] flex items-end shrink-0">
                <SparklineChart color="#C9A227" data={[{ val: 2100 }, { val: 2350 }, { val: 2520 }, { val: 2680 }, { val: 2800 }]} height={20} width={45} />
              </div>
            </div>
          </div>

          {/* KPI 5: Primary Output (Blue Gradient) */}
          <div className={`${blueGrad} rounded-2xl p-3.5 flex flex-col justify-between border h-[105px]`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <Activity className="w-3.5 h-3.5 text-[#4A6FA5] shrink-0" />
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#3B6BA5] dark:text-[#60A5FA] truncate">{currentBusiness.keyMetricLabel || 'CLEAN INSTALLED'}</span>
            </div>
            <div className="my-0.5">
              <span className="text-xl lg:text-2xl font-black text-[#1F2937] dark:text-white tracking-tight block leading-none truncate">{currentBusiness.keyMetricValue}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#3B6BA5] dark:text-[#60A5FA] truncate">Primary Output</span>
              <div className="w-[45px] h-[20px] flex items-end shrink-0">
                <SparklineChart color="#0E7C7B" data={[{ val: 380 }, { val: 415 }, { val: 440 }, { val: 465 }, { val: 480 }]} height={20} width={45} />
              </div>
            </div>
          </div>

          {/* KPI 6: Units / Divisions (Blue Gradient) */}
          <div className={`${blueGrad} rounded-2xl p-3.5 flex flex-col justify-between border h-[105px]`}>
            <div className="flex items-center gap-1.5 min-w-0">
              <Building2 className="w-3.5 h-3.5 text-[#4A6FA5] shrink-0" />
              <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-[#3B6BA5] dark:text-[#60A5FA] truncate">DIVISIONS / UNITS</span>
            </div>
            <div className="my-0.5">
              <span className="text-xl lg:text-2xl font-black text-[#1F2937] dark:text-white tracking-tight block leading-none truncate">{currentBusiness.businessesCount} Units</span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#0E7C7B]">100% Operational</span>
              <div className="w-[45px] h-[20px] flex items-end shrink-0">
                <SparklineChart color="#4A6FA5" data={[{ val: 3 }, { val: 4 }, { val: 4 }, { val: 5 }, { val: 5 }]} height={20} width={45} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB SWITCHED VIEWS */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* ------------------------------------------------------------- */}
            {/* STEP 2: PERFORMANCE TELEMETRY & PERFORMANCE DRIVERS (Split 6/6) */}
            {/* ------------------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left 6 cols: Executive Performance Telemetry */}
              <div className={`lg:col-span-6 p-5 rounded-2xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-300">
                  <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C9A227]" />
                    Executive Performance Telemetry
                  </h3>
                  <span className={`text-xs font-bold ${textMuted}`}>Quarterly Telemetry</span>
                </div>

                <div className="grid grid-cols-3 gap-3 my-3">
                  {/* Revenue */}
                  <div className={`p-3.5 rounded-xl border ${innerCardBg} flex flex-col justify-between h-[145px]`}>
                    <div>
                      <span className={`text-xs font-bold block ${textPrimary}`}>Revenue</span>
                      <span className="text-xs text-[#0E7C7B] font-black block mt-0.5">▲ {currentBusiness.growth}</span>
                      <p className={`text-[11px] font-medium mt-1 leading-relaxed ${textMuted}`}>
                        "{execData?.chartAnnotations?.revenue || 'Quarterly revenue surpassed baseline target.'}"
                      </p>
                    </div>
                    <div className="mt-2">
                      <SparklineChart data={currentBusiness.sparklineData || [{ val: 4200 }, { val: 4800 }, { val: 5820 }]} color="#0E7C7B" height={32} />
                    </div>
                  </div>

                  {/* Profitability */}
                  <div className={`p-3.5 rounded-xl border ${innerCardBg} flex flex-col justify-between h-[145px]`}>
                    <div>
                      <span className={`text-xs font-bold block ${textPrimary}`}>Profitability</span>
                      <span className="text-xs text-[#0E7C7B] font-black block mt-0.5">Margin {currentBusiness.ebitdaMargin || '28.4%'}</span>
                      <p className={`text-[11px] font-medium mt-1 leading-relaxed ${textMuted}`}>
                        "{execData?.chartAnnotations?.margin || 'EBITDA margin reached 28.4% due to premium rentals.'}"
                      </p>
                    </div>
                    <div className="mt-2">
                      <SparklineChart data={[{ val: 18.2 }, { val: 20.0 }, { val: 21.5 }]} color="#C9A227" height={32} />
                    </div>
                  </div>

                  {/* Contribution */}
                  <div className={`p-3.5 rounded-xl border ${innerCardBg} flex flex-col justify-between h-[145px]`}>
                    <div>
                      <span className={`text-xs font-bold block ${textPrimary}`}>Contribution</span>
                      <span className="text-xs text-[#C9A227] font-black block mt-0.5">Share 23.4%</span>
                      <p className={`text-[11px] font-medium mt-1 leading-relaxed ${textMuted}`}>
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
              <div className={`lg:col-span-6 p-5 rounded-2xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-300">
                  <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#C9A227]" />
                    What is Driving Performance?
                  </h3>
                  <span className={`text-xs font-bold ${textMuted}`}>4 Key Drivers</span>
                </div>

                <div className="space-y-2.5 my-auto py-2">
                  {(execData?.performanceDrivers || [
                    { driver: 'Rajasthan 1.2 GW Solar Park Commissioning', impactType: 'positive', relevantKpi: 'Revenue & Generation', interpretation: 'On-time grid synchronization added ₹ 3,100 Cr top-line acceleration.' },
                    { driver: 'Green Hydrogen Pilot 99.9% Purity Benchmark', impactType: 'positive', relevantKpi: 'EBITDA Margin', interpretation: 'Pilot plant unlocked government green subsidy premium.' },
                    { driver: 'Offshore Wind Generation Phase I', impactType: 'positive', relevantKpi: 'Capacity +24%', interpretation: 'Subsea cable installation completed 2 weeks ahead of target.' },
                    { driver: 'State Grid Substation Interconnection Queue', impactType: 'negative', relevantKpi: 'Pending SLA', interpretation: 'Substation bay expansion signoff awaiting state approval.' },
                  ]).slice(0, 4).map((drv, i) => (
                    <div key={i} className={`p-3 rounded-xl border ${innerCardBg} flex items-center justify-between gap-3`}>
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-1.5 rounded-lg shrink-0 ${drv.impactType === 'positive' ? 'bg-[#0E7C7B]/15 text-[#0E7C7B]' : 'bg-[#E61C40]/15 text-[#E61C40]'
                          }`}>
                          {drv.impactType === 'positive' ? <TrendingUp className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                        </div>
                        <div className="min-w-0">
                          <span className={`text-xs font-black block truncate ${textPrimary}`}>{drv.driver}</span>
                          <span className={`text-xs font-medium block truncate mt-0.5 ${textMuted}`}>{drv.interpretation}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-xl shrink-0 ${drv.impactType === 'positive' ? 'bg-[#0E7C7B]/15 text-[#0E7C7B] border border-[#0E7C7B]/30' : 'bg-[#E61C40]/15 text-[#E61C40] border border-[#E61C40]/30'
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
              <div className={`lg:col-span-6 p-5 rounded-2xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-300">
                  <h3 className="text-xs font-bold text-[#E61C40] uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#E61C40]" />
                    CEO Attention & Risk Exposure
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#E61C40] px-2.5 py-1 rounded-xl bg-[#E61C40]/15 border border-[#E61C40]/30">
                    Leadership Action Needed
                  </span>
                </div>

                <div className="space-y-3 my-auto py-2">
                  {execData?.ceoAttentionItems && execData.ceoAttentionItems.length > 0 ? (
                    execData.ceoAttentionItems.slice(0, 2).map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border ${innerCardBg} border-l-4 border-l-[#E61C40] flex flex-col sm:flex-row sm:items-center justify-between gap-3`}
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-[#E61C40] shrink-0" />
                            <span className={`text-xs font-black uppercase truncate ${textPrimary}`}>
                              {item.issue}
                            </span>
                          </div>
                          <p className={`text-xs font-medium ${textMuted}`}>
                            <strong className="text-[#C9A227] font-bold">Action Required: </strong>{item.recommendedAction}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-[#E61C40]/15 text-[#E61C40] border border-[#E61C40]/30">
                            {item.financialImpact}
                          </span>
                          <button
                            onClick={() => openDirectiveModal(item)}
                            className="px-3.5 py-1.5 rounded-xl bg-[#E61C40] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-sm"
                          >
                            <span>Authorize &gt;</span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={`p-4 rounded-xl border ${innerCardBg} flex items-center gap-3`}>
                      <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] shrink-0" />
                      <div>
                        <h4 className={`text-xs font-bold ${textPrimary}`}>No Critical Risk Alerts</h4>
                        <p className={`text-xs font-medium mt-0.5 ${textMuted}`}>All business units are executing within normal baseline parameters.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right 6 cols: Major Strategic Projects (CAPEX) */}
              <div className={`lg:col-span-6 p-5 rounded-2xl border ${cardBg} flex flex-col justify-between`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-300">
                  <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C9A227]" />
                    Major Strategic Projects
                  </h3>
                  <span className={`text-xs font-bold ${textMuted}`}>Top Projects</span>
                </div>

                <div className="space-y-2.5 my-auto py-2">
                  {(execData?.majorProjects || [
                    { name: 'Rajasthan Solar Mega-Park Phase II', location: 'Jaisalmer, Rajasthan', value: '₹ 3,100 Cr', progress: 96, status: 'ON TRACK', completionDate: 'Completed' },
                    { name: 'Offshore Wind Generation Phase I', location: 'Tamil Nadu Coast', value: '₹ 2,200 Cr', progress: 71, status: 'ON TRACK', completionDate: 'Q2 FY27' },
                    { name: 'Green Hydrogen Electrolyser Plant', location: 'Gujarat Special Economic Zone', value: '₹ 1,800 Cr', progress: 54, status: 'WATCH', completionDate: 'Q4 FY27' },
                  ]).slice(0, 3).map((proj, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${innerCardBg} flex items-center justify-between gap-4`}>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-black uppercase truncate ${textPrimary}`}>{proj.name}</span>
                          {getProjectStatusBadge(proj.status)}
                        </div>
                        <div className={`flex items-center justify-between text-xs font-medium mt-1 ${textMuted}`}>
                          <span>{proj.location} • <strong className="text-[#C9A227] font-black">{proj.value}</strong></span>
                          <span>Target: {proj.completionDate}</span>
                        </div>
                      </div>

                      {/* Clean Linear Progress Bar */}
                      <div className="w-24 shrink-0 text-right">
                        <span className={`text-xs font-black block mb-1 ${textPrimary}`}>{proj.progress}%</span>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
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
          <div className={`p-6 rounded-2xl border ${cardBg} space-y-4`}>
            <div className="flex items-center justify-between border-b border-slate-300 pb-3">
              <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Financial Telemetry & Capital Return Analysis
              </h3>
              <span className={`text-xs font-bold ${textMuted}`}>Audited Q3 Telemetry</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className={`p-4 rounded-xl border ${innerCardBg}`}>
                <span className={`text-[10px] lg:text-[11px] uppercase font-bold block tracking-wider ${textMuted}`}>ROCE (Return on Capital)</span>
                <span className="text-2xl font-black text-[#0E7C7B] block mt-1 tracking-tight leading-none">18.4%</span>
                <span className={`text-xs font-medium block mt-1.5 ${textMuted}`}>+1.8pp over WACC</span>
              </div>
              <div className={`p-4 rounded-xl border ${innerCardBg}`}>
                <span className={`text-[10px] lg:text-[11px] uppercase font-bold block tracking-wider ${textMuted}`}>Free Cash Flow (FCF)</span>
                <span className={`text-2xl font-black block mt-1 tracking-tight leading-none ${textPrimary}`}>₹ 0.8k Cr</span>
                <span className="text-xs font-bold text-[#0E7C7B] block mt-1.5">▲ 22.1% YoY</span>
              </div>
              <div className={`p-4 rounded-xl border ${innerCardBg}`}>
                <span className={`text-[10px] lg:text-[11px] uppercase font-bold block tracking-wider ${textMuted}`}>Capex Deployment Rate</span>
                <span className="text-2xl font-black text-[#C9A227] block mt-1 tracking-tight leading-none">86.2%</span>
                <span className={`text-xs font-medium block mt-1.5 ${textMuted}`}>On plan for FY26</span>
              </div>
              <div className={`p-4 rounded-xl border ${innerCardBg}`}>
                <span className={`text-[10px] lg:text-[11px] uppercase font-bold block tracking-wider ${textMuted}`}>Net Debt / EBITDA</span>
                <span className="text-2xl font-black text-[#0E7C7B] block mt-1 tracking-tight leading-none">1.1x</span>
                <span className={`text-xs font-medium block mt-1.5 ${textMuted}`}>Conservative gearing</span>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS TAB CONTENT */}
        {activeTab === 'projects' && (
          <div className={`p-6 rounded-2xl border ${cardBg} space-y-4`}>
            <div className="flex items-center justify-between border-b border-slate-300 pb-3">
              <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" /> Strategic Capex Projects Register
              </h3>
              <span className={`text-xs font-bold ${textMuted}`}>Active Capital Investments</span>
            </div>

            <div className="space-y-3">
              {(execData?.majorProjects || [
                { name: 'Rajasthan Solar Mega-Park Phase II', location: 'Jaisalmer, Rajasthan', value: '₹ 3,100 Cr', progress: 96, status: 'ON TRACK', completionDate: 'Completed' },
                { name: 'Offshore Wind Generation Phase I', location: 'Tamil Nadu Coast', value: '₹ 2,200 Cr', progress: 71, status: 'ON TRACK', completionDate: 'Q2 FY27' },
                { name: 'Green Hydrogen Electrolyser Plant', location: 'Gujarat Special Economic Zone', value: '₹ 1,800 Cr', progress: 54, status: 'WATCH', completionDate: 'Q4 FY27' },
              ]).map((proj, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${innerCardBg} flex items-center justify-between gap-4`}>
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-black uppercase ${textPrimary}`}>{proj.name}</span>
                      {getProjectStatusBadge(proj.status)}
                    </div>
                    <p className={`text-xs font-medium ${textMuted}`}>
                      Location: <strong className={textPrimary}>{proj.location}</strong> • Financial Outlay: <strong className="text-[#C9A227] font-black">{proj.value}</strong> • Completion Target: <strong className={textPrimary}>{proj.completionDate}</strong>
                    </p>
                  </div>

                  <div className="w-32 shrink-0 text-right">
                    <span className={`text-xs font-black block mb-1 ${textPrimary}`}>{proj.progress}%</span>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
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
          <div className={`p-6 rounded-2xl border ${cardBg} space-y-4`}>
            <div className="flex items-center justify-between border-b border-slate-300 pb-3">
              <h3 className="text-xs font-bold text-[#E61C40] uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#E61C40]" /> Enterprise Risk & Exposure Register
              </h3>
              <span className={`text-xs font-bold ${textMuted}`}>Active Exposure Analysis</span>
            </div>

            <div className="space-y-3">
              {(execData?.risksAndExposure || [
                {
                  risk: 'State Environmental License Delay for Hyderabad Tech Tower',
                  severity: 'High',
                  exposure: '₹ 0.1k Cr Locked',
                  impact: 'Construction milestone timeline slip of 45 days.',
                  probability: 'High (70%)',
                  mitigation: 'Engage Senior Liaison Officer to submit expedited EIA assessment.'
                }
              ]).map((riskItem, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${innerCardBg} border-l-4 border-l-[#E61C40] space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-black uppercase flex items-center gap-2 ${textPrimary}`}>
                      <AlertTriangle className="w-4 h-4 text-[#E61C40]" /> {riskItem.risk}
                    </span>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-xl bg-[#E61C40]/15 text-[#E61C40] border border-[#E61C40]/30">
                      {riskItem.exposure}
                    </span>
                  </div>
                  <p className={`text-xs font-medium ${textMuted}`}>{riskItem.impact}</p>
                  <div className={`p-2.5 rounded-lg text-xs ${isLight ? 'bg-slate-100 text-[#1F2937]' : 'bg-slate-900/60 text-slate-300'}`}>
                    <strong className="text-[#C9A227] font-bold">Mitigation: </strong>{riskItem.mitigation}
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
      <div className={`${isLight ? 'bg-gradient-to-r from-amber-50/80 via-white to-amber-50/40 border-[#C9A227]/40 shadow-sm text-[#1F2937]' : 'bg-[#131C2E] border-[#C9A227]/60 shadow-lg text-white'
        } border rounded-2xl p-4 flex items-center justify-between gap-4 shrink-0`}>
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] lg:text-[11px] font-bold text-[#C9A227] uppercase tracking-wider block">
              Recommended CEO Focus
            </span>
            <p className={`text-xs font-semibold truncate mt-0.5 ${isLight ? 'text-[#1F2937]' : 'text-slate-200'}`}>
              "{execData?.recommendedFocus || `Approve capital allocation for Rajasthan Solar Megapark Phase III expansion to unlock ₹ 3,100 Cr additional top-line revenue.`}"
            </p>
          </div>
        </div>

        <button
          onClick={() => openDirectiveModal()}
          className="px-4 py-2 rounded-xl bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-black text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm flex items-center gap-1.5"
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
        financialImpact={selectedActionItem?.financialImpact || '₹ 0.1k Cr capital lockup for 45 additional days'}
        businessImpact={selectedActionItem?.businessImpact || 'Land acquisition and project milestone timeline slip.'}
        recommendedAction={selectedActionItem?.recommendedAction || 'Submit revised environmental impact assessment report.'}
        businessName={currentBusiness.name}
      />
    </motion.div>
  );
};

export default BusinessExecutivePage;
