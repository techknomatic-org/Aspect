import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  TrendingUp,
  TrendingDown,
  ShieldAlert,
  CheckCircle2,
  Target,
  AlertTriangle,
  Zap,
  Award,
  Layers,
  Briefcase,
  FileText,
  Activity,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { SparklineChart } from '../components/charts/SparklineChart';
import { useTheme } from '../context/ThemeContext';
import { BUSINESS_EXECUTIVE_DATA, BusinessExecutiveReview } from '../data/businessData';

interface BusinessExecutivePageProps {
  businessId: string;
  onBack: () => void;
}

export const BusinessExecutivePage: React.FC<BusinessExecutivePageProps> = ({
  businessId,
  onBack,
}) => {
  const [business, setBusiness] = useState<EcosystemBusiness | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    ecosystemService.getBusinessById(businessId).then((res) => setBusiness(res || null));
    window.scrollTo(0, 0);
  }, [businessId]);

  if (!business) {
    return (
      <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-slate-400">
        <div className="w-8 h-8 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Loading Executive Workspace...</span>
      </div>
    );
  }

  // Retrieve comprehensive CEO data for this business vertical
  const execData: BusinessExecutiveReview | undefined = BUSINESS_EXECUTIVE_DATA[business.id];

  // Master Color System
  const cardBg = isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#172033] border-white/10 shadow-xl';
  const innerCardBg = isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0B1426] border-white/10';
  const textMuted = isLight ? 'text-[#6B7280]' : 'text-[#94A3B8]';
  const textPrimary = isLight ? 'text-[#1F2937]' : 'text-white';

  const getStatusBadge = (status: EcosystemBusiness['status']) => {
    switch (status) {
      case 'Healthy':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#0E7C7B]/20 border border-[#0E7C7B]/40 text-[#0E7C7B] uppercase tracking-wider inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E7C7B] animate-pulse" />
            HEALTHY
          </span>
        );
      case 'Warning':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] uppercase tracking-wider inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
            ATTENTION
          </span>
        );
      case 'Critical':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E61C40]/20 border border-[#E61C40]/40 text-[#E61C40] uppercase tracking-wider inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61C40] animate-pulse" />
            CRITICAL
          </span>
        );
    }
  };

  const getProjectStatusBadge = (status: string) => {
    switch (status) {
      case 'ON TRACK':
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#0E7C7B]/20 text-[#0E7C7B] border border-[#0E7C7B]/30">ON TRACK</span>;
      case 'WATCH':
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30">WATCH</span>;
      case 'DELAYED':
      case 'AT RISK':
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#E61C40]/20 text-[#E61C40] border border-[#E61C40]/30">{status}</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#4A6FA5]/20 text-[#4A6FA5] border border-[#4A6FA5]/30">{status}</span>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
      className="h-[calc(100vh-64px)] overflow-hidden flex flex-col justify-between p-3 lg:p-4 max-w-[1700px] mx-auto select-none space-y-2.5"
    >
      {/* ------------------------------------------------------------- */}
      {/* ROW 1: TOP NAVIGATION & BUSINESS HEADER */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2 shrink-0">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className={`px-3 py-1.5 rounded-xl border text-[11px] font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
              isLight
                ? 'bg-white border-slate-300 text-[#1F2937] hover:border-[#C9A227] hover:text-[#C9A227]'
                : 'bg-[#172033] border-white/10 text-slate-100 hover:border-[#C9A227]/60 hover:text-[#C9A227]'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Group Universe</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase font-bold tracking-wider hidden sm:inline">
              EXECUTIVE WORKSPACE • ASP-{business.id.toUpperCase()}
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] font-bold uppercase tracking-wider">
              BOARD REVIEW READY
            </span>
          </div>
        </div>

        {/* Business Header Card */}
        <div className={`${cardBg} border rounded-xl p-3.5 lg:p-4 flex items-center justify-between gap-4 relative overflow-hidden h-[92px]`}>
          <div className="flex items-center gap-4 min-w-0">
            {business.image3dUrl ? (
              <img
                src={business.image3dUrl}
                alt={business.name}
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl object-cover border-2 border-[#C9A227]/60 shadow-lg shrink-0"
              />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-[#0B1426] border-2 border-[#C9A227]/40 text-[#C9A227] flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-extrabold text-[#C9A227] uppercase tracking-widest truncate">
                  {business.category}
                </span>
                {getStatusBadge(business.status)}
              </div>
              <h1 className={`text-2xl lg:text-3xl font-extrabold tracking-tight uppercase leading-none mt-0.5 truncate ${textPrimary}`}>
                {business.name}
              </h1>
              <p className="text-[11px] text-[#94A3B8] font-medium truncate mt-0.5">
                {business.tagline || 'Purity • LBMA Integrity • Vault Storage'}
              </p>
            </div>
          </div>

          <div className={`p-3 rounded-xl border text-right shrink-0 min-w-[200px] ${innerCardBg} shadow-inner`}>
            <span className="text-[9px] text-[#94A3B8] uppercase font-extrabold block tracking-wider">PORTFOLIO CONTRIBUTION</span>
            <span className="text-xl lg:text-2xl font-extrabold text-[#0E7C7B] block mt-0.5 tracking-tight">{business.revenue}</span>
            <span className="text-[10px] font-bold text-[#0E7C7B] inline-flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> ▲ {business.growth} YoY
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ROW 2: 6 PRIMARY CEO KPI STRIP (Clean Alignments & Sparklines) */}
      {/* ------------------------------------------------------------- */}
      <div className="shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <h2 className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-widest flex items-center gap-1.5">
            <Activity className="w-3 h-3" />
            PRIMARY CEO KEY PERFORMANCE INDICATORS
          </h2>
          <span className="text-[9px] text-[#94A3B8] font-bold">REAL-TIME TELEMETRY</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* KPI 1: Revenue */}
          <div className={`${cardBg} border rounded-xl p-3 flex items-center justify-between h-[82px] hover:border-[#C9A227]/40 transition-all group overflow-hidden`}>
            <div className="flex-1 min-w-0 pr-1.5 flex flex-col justify-between h-full">
              <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase tracking-wider block truncate">YTD REVENUE</span>
              <span className={`text-base lg:text-lg font-extrabold ${textPrimary} tracking-tight block truncate`}>{business.revenue}</span>
              <span className="text-[10px] font-bold text-[#0E7C7B] flex items-center gap-0.5 truncate">
                <TrendingUp className="w-2.5 h-2.5 shrink-0" /> ▲ {business.growth}
              </span>
            </div>
            <div className="w-[65px] lg:w-[75px] h-[34px] flex items-end shrink-0">
              <SparklineChart color="#0E7C7B" data={business.sparklineData || [{ val: 4200 }, { val: 4600 }, { val: 5100 }, { val: 5500 }, { val: 5820 }]} height={34} width={75} />
            </div>
          </div>

          {/* KPI 2: EBITDA Margin */}
          <div className={`${cardBg} border rounded-xl p-3 flex items-center justify-between h-[82px] hover:border-[#C9A227]/40 transition-all group overflow-hidden`}>
            <div className="flex-1 min-w-0 pr-1.5 flex flex-col justify-between h-full">
              <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase tracking-wider block truncate">EBITDA MARGIN</span>
              <span className="text-base lg:text-lg font-extrabold text-[#0E7C7B] tracking-tight block truncate">{business.ebitdaMargin || '21.5%'}</span>
              <span className="text-[10px] font-bold text-[#0E7C7B] flex items-center gap-0.5 truncate">
                <TrendingUp className="w-2.5 h-2.5 shrink-0" /> ▲ 2.4pp YoY
              </span>
            </div>
            <div className="w-[65px] lg:w-[75px] h-[34px] flex items-end shrink-0">
              <SparklineChart color="#0E7C7B" data={[{ val: 14.2 }, { val: 16.0 }, { val: 18.4 }, { val: 20.1 }, { val: 21.5 }]} height={34} width={75} />
            </div>
          </div>

          {/* KPI 3: Portfolio Value */}
          <div className={`${cardBg} border rounded-xl p-3 flex items-center justify-between h-[82px] hover:border-[#C9A227]/40 transition-all group overflow-hidden`}>
            <div className="flex-1 min-w-0 pr-1.5 flex flex-col justify-between h-full">
              <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase tracking-wider block truncate">PORTFOLIO VALUE</span>
              <span className="text-base lg:text-lg font-extrabold text-[#C9A227] tracking-tight block truncate">{business.portfolioValue || '₹ 5,200 Cr'}</span>
              <span className="text-[10px] font-semibold text-[#94A3B8] truncate">vs LY ₹ 4.4k Cr</span>
            </div>
            <div className="w-[65px] lg:w-[75px] h-[34px] flex items-end shrink-0">
              <SparklineChart color="#C9A227" data={[{ val: 11000 }, { val: 12400 }, { val: 13500 }, { val: 14100 }, { val: 14500 }]} height={34} width={75} />
            </div>
          </div>

          {/* KPI 4: Pipeline Value */}
          <div className={`${cardBg} border rounded-xl p-3 flex items-center justify-between h-[82px] hover:border-[#C9A227]/40 transition-all group overflow-hidden`}>
            <div className="flex-1 min-w-0 pr-1.5 flex flex-col justify-between h-full">
              <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase tracking-wider block truncate">PIPELINE VALUE</span>
              <span className="text-base lg:text-lg font-extrabold text-[#C9A227] tracking-tight block truncate">{business.pipelineValue || '₹ 2,800 Cr'}</span>
              <span className="text-[10px] font-bold text-[#0E7C7B] flex items-center gap-0.5 truncate">
                <TrendingUp className="w-2.5 h-2.5 shrink-0" /> ▲ 18.2%
              </span>
            </div>
            <div className="w-[65px] lg:w-[75px] h-[34px] flex items-end shrink-0">
              <SparklineChart color="#C9A227" data={[{ val: 2100 }, { val: 2350 }, { val: 2520 }, { val: 2680 }, { val: 2800 }]} height={34} width={75} />
            </div>
          </div>

          {/* KPI 5: Primary Output */}
          <div className={`${cardBg} border rounded-xl p-3 flex items-center justify-between h-[82px] hover:border-[#C9A227]/40 transition-all group overflow-hidden`}>
            <div className="flex-1 min-w-0 pr-1.5 flex flex-col justify-between h-full">
              <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase tracking-wider block truncate">{business.keyMetricLabel}</span>
              <span className="text-base lg:text-lg font-extrabold text-[#0E7C7B] tracking-tight block truncate">{business.keyMetricValue}</span>
              <span className="text-[10px] font-semibold text-[#94A3B8] truncate">Primary Output</span>
            </div>
            <div className="w-[65px] lg:w-[75px] h-[34px] flex items-end shrink-0">
              <SparklineChart color="#0E7C7B" data={[{ val: 380 }, { val: 415 }, { val: 440 }, { val: 465 }, { val: 480 }]} height={34} width={75} />
            </div>
          </div>

          {/* KPI 6: Active Units */}
          <div className={`${cardBg} border rounded-xl p-3 flex items-center justify-between h-[82px] hover:border-[#C9A227]/40 transition-all group overflow-hidden`}>
            <div className="flex-1 min-w-0 pr-1.5 flex flex-col justify-between h-full">
              <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase tracking-wider block truncate">DIVISIONS / UNITS</span>
              <span className={`text-base lg:text-lg font-extrabold ${textPrimary} tracking-tight block truncate`}>{business.businessesCount} Units</span>
              <span className="text-[10px] font-bold text-[#0E7C7B] truncate">100% Operational</span>
            </div>
            <div className="w-[65px] lg:w-[75px] h-[34px] flex items-end shrink-0">
              <SparklineChart color="#4A6FA5" data={[{ val: 3 }, { val: 4 }, { val: 4 }, { val: 5 }, { val: 5 }]} height={34} width={75} />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ROW 3: EXECUTIVE PERFORMANCE & PERFORMANCE DRIVERS (Split 6/6) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left 6 cols: Executive Performance Comparative */}
        <div className={`lg:col-span-6 p-3.5 rounded-xl border ${cardBg} flex flex-col justify-between h-full min-h-0`}>
          <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
            <h3 className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-widest flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              EXECUTIVE PERFORMANCE TELEMETRY
            </h3>
            <span className="text-[9px] text-[#94A3B8] font-bold">QUARTERLY TELEMETRY</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-auto py-1">
            {/* Revenue Trend */}
            <div className={`p-2.5 rounded-lg border ${innerCardBg} flex flex-col justify-between h-[125px]`}>
              <div>
                <span className="text-[9px] font-extrabold text-white block uppercase tracking-wider">REVENUE</span>
                <span className="text-[10px] text-[#0E7C7B] font-bold block mt-0.5">▲ {business.growth}</span>
                <p className="text-[9px] text-[#94A3B8] italic mt-0.5 line-clamp-2 leading-tight">
                  "{execData?.chartAnnotations?.revenue || 'Revenue accelerated for 3rd period.'}"
                </p>
              </div>
              <SparklineChart data={business.sparklineData || [{ val: 4200 }, { val: 4800 }, { val: 5820 }]} color="#0E7C7B" height={32} />
            </div>

            {/* Profitability / EBITDA */}
            <div className={`p-2.5 rounded-lg border ${innerCardBg} flex flex-col justify-between h-[125px]`}>
              <div>
                <span className="text-[9px] font-extrabold text-white block uppercase tracking-wider">PROFITABILITY</span>
                <span className="text-[10px] text-[#0E7C7B] font-bold block mt-0.5">Margin {business.ebitdaMargin || '21.5%'}</span>
                <p className="text-[9px] text-[#94A3B8] italic mt-0.5 line-clamp-2 leading-tight">
                  "{execData?.chartAnnotations?.margin || 'Margin expanded by 2.4pp.'}"
                </p>
              </div>
              <SparklineChart data={[{ val: 18.2 }, { val: 20.0 }, { val: 21.5 }]} color="#C9A227" height={32} />
            </div>

            {/* Group Contribution */}
            <div className={`p-2.5 rounded-lg border ${innerCardBg} flex flex-col justify-between h-[125px]`}>
              <div>
                <span className="text-[9px] font-extrabold text-white block uppercase tracking-wider">CONTRIBUTION</span>
                <span className="text-[10px] text-[#C9A227] font-bold block mt-0.5">Share 23.4%</span>
                <p className="text-[9px] text-[#94A3B8] italic mt-0.5 line-clamp-2 leading-tight">
                  "{execData?.chartAnnotations?.contribution || 'Major contributor to Group growth.'}"
                </p>
              </div>
              <SparklineChart data={[{ val: 21.0 }, { val: 22.4 }, { val: 23.4 }]} color="#4A6FA5" height={32} />
            </div>
          </div>
        </div>

        {/* Right 6 cols: What is Driving Performance? */}
        <div className={`lg:col-span-6 p-3.5 rounded-xl border ${cardBg} flex flex-col justify-between h-full min-h-0`}>
          <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
            <h3 className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-widest flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C9A227]" />
              WHAT IS DRIVING PERFORMANCE?
            </h3>
            <span className="text-[9px] text-[#94A3B8] font-bold">4 KEY DRIVERS</span>
          </div>

          <div className="space-y-1.5 my-auto py-1">
            {(execData?.performanceDrivers || [
              { driver: 'Pre-sales Growth & Demand', impactType: 'positive', relevantKpi: '▲ 21.5% YoY', interpretation: 'Pre-sales volume increased due to urban corridor expansion.' },
              { driver: 'Improved Margin Realization', impactType: 'positive', relevantKpi: '+2.4pp', interpretation: 'Project cost optimization and premium pricing increased margin.' },
              { driver: 'Commercial Leasing Expansion', impactType: 'positive', relevantKpi: '90% Leased', interpretation: 'Key anchor tenants signed for flagship commercial developments.' },
              { driver: 'Regulatory Approval Timelines', impactType: 'negative', relevantKpi: 'Pending 2', interpretation: 'Pending clearance for Phase II requires state liaison focus.' },
            ]).slice(0, 4).map((drv, i) => (
              <div key={i} className={`p-2 rounded-lg border ${innerCardBg} flex items-center justify-between gap-2.5`}>
                <div className="flex items-center gap-2 min-w-0">
                  <div className={`p-1 rounded shrink-0 ${
                    drv.impactType === 'positive' ? 'bg-[#0E7C7B]/20 text-[#0E7C7B]' : 'bg-[#E61C40]/20 text-[#E61C40]'
                  }`}>
                    {drv.impactType === 'positive' ? <TrendingUp className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-white uppercase block truncate">{drv.driver}</span>
                    <span className="text-[9px] text-[#94A3B8] block truncate leading-none mt-0.5">{drv.interpretation}</span>
                  </div>
                </div>
                <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded shrink-0 ${
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
      {/* ROW 4: CEO ATTENTION & MAJOR PROJECTS (Split 6/6) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left 6 cols: CEO Attention & Risk Exposure */}
        <div className={`lg:col-span-6 p-3.5 rounded-xl border ${cardBg} flex flex-col justify-between h-full min-h-0`}>
          <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
            <h3 className="text-[10px] font-extrabold text-[#E61C40] uppercase tracking-widest flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#E61C40]" />
              CEO ATTENTION & RISK EXPOSURE
            </h3>
            <span className="text-[9px] font-bold text-[#E61C40] px-2 py-0.5 rounded bg-[#E61C40]/15">LEADERSHIP ACTION</span>
          </div>

          <div className="space-y-1.5 my-auto py-1">
            {execData?.ceoAttentionItems && execData.ceoAttentionItems.length > 0 ? (
              execData.ceoAttentionItems.slice(0, 2).map((item, idx) => (
                <div key={idx} className={`p-2.5 rounded-lg border ${innerCardBg} border-l-4 border-l-[#E61C40] space-y-1`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-white uppercase flex items-center gap-1.5 truncate">
                      <AlertTriangle className="w-3 h-3 text-[#E61C40] shrink-0" />
                      {item.issue}
                    </span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#E61C40]/20 text-[#E61C40]">
                      {item.financialImpact}
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-300 truncate">
                    <strong className="text-[#C9A227]">Action: </strong>{item.recommendedAction}
                  </p>
                </div>
              ))
            ) : (
              <div className={`p-3 rounded-lg border ${innerCardBg} flex items-center gap-3`}>
                <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] shrink-0" />
                <div>
                  <h4 className="text-[10px] font-extrabold text-white uppercase">NO CRITICAL ISSUES</h4>
                  <p className="text-[9px] text-[#94A3B8]">No immediate leadership intervention required for this vertical.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right 6 cols: Major Strategic Projects */}
        <div className={`lg:col-span-6 p-3.5 rounded-xl border ${cardBg} flex flex-col justify-between h-full min-h-0`}>
          <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
            <h3 className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#C9A227]" />
              MAJOR STRATEGIC PROJECTS
            </h3>
            <span className="text-[9px] text-[#C9A227] font-bold">TOP PROJECTS</span>
          </div>

          <div className="space-y-1.5 my-auto py-1">
            {(execData?.majorProjects || [
              { name: 'Aspect Financial Tower Phase I', location: 'BKC, Mumbai', value: '₹ 1,450 Cr', progress: 84, status: 'ON TRACK', completionDate: 'Q3 2026' },
              { name: 'Sanctuary Luxury Eco-Resort', location: 'Goa Coast', value: '₹ 820 Cr', progress: 62, status: 'ON TRACK', completionDate: 'Q4 2026' },
              { name: 'Renewable Solar Park Expansion', location: 'Rajasthan', value: '₹ 1,120 Cr', progress: 45, status: 'WATCH', completionDate: 'Q1 2027' },
            ]).slice(0, 3).map((proj, idx) => (
              <div key={idx} className={`p-2 rounded-lg border ${innerCardBg} flex items-center justify-between gap-3`}>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-white uppercase truncate">{proj.name}</span>
                    {getProjectStatusBadge(proj.status)}
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-[#94A3B8] mt-0.5">
                    <span>{proj.location} • <strong className="text-[#C9A227]">{proj.value}</strong></span>
                    <span>Target: {proj.completionDate}</span>
                  </div>
                </div>
                <div className="w-20 shrink-0 text-right">
                  <span className="text-[9px] font-bold text-slate-200 block mb-0.5">{proj.progress}%</span>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${proj.status === 'ON TRACK' ? 'bg-[#0E7C7B]' : 'bg-[#C9A227]'}`} style={{ width: `${proj.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ROW 5: RECOMMENDED CEO FOCUS (Compact Conclusion Banner) */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#172033] border-2 border-[#C9A227] rounded-xl p-3 text-white shadow-xl flex items-center justify-between gap-4 shrink-0 h-[52px]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-[#C9A227]/20 border border-[#C9A227]/50 text-[#C9A227] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-extrabold text-[#C9A227] uppercase tracking-widest block leading-none">RECOMMENDED CEO FOCUS</span>
            <p className="text-xs font-bold text-white truncate mt-0.5">
              "{execData?.recommendedFocus || `Finalize land acquisition for Aspect Financial City Phase II and accelerate residential pre-leasing.`}"
            </p>
          </div>
        </div>

        <button
          onClick={onBack}
          className="px-4 py-1.5 rounded-lg bg-[#C9A227] text-[#0B1426] font-extrabold text-[11px] hover:brightness-110 transition-all shrink-0 cursor-pointer shadow flex items-center gap-1"
        >
          <span>Return to Universe</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
