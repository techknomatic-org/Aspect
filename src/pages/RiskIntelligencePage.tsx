import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { StatusBadge } from '../components/common/StatusBadge';

export const RiskIntelligencePage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const riskCategories = [
    {
      title: 'CRITICAL RISKS',
      count: 3,
      color: 'text-[#E61C40]',
      cardGrad: isLight
        ? 'bg-gradient-to-br from-[#E61C40]/15 via-[#E61C40]/8 to-white border-[#E61C40]/30 shadow-sm'
        : 'bg-gradient-to-br from-[#E61C40]/22 via-[#E61C40]/10 to-[#220D14] border-[#E61C40]/40 shadow-lg',
      desc: 'Requires immediate CEO Steering Committee intervention',
    },
    {
      title: 'HIGH PRIORITY EXPOSURE',
      count: 12,
      color: 'text-[#B8860B] dark:text-[#F59E0B]',
      cardGrad: isLight
        ? 'bg-gradient-to-br from-[#C9A227]/15 via-[#C9A227]/8 to-white border-[#C9A227]/30 shadow-sm'
        : 'bg-gradient-to-br from-[#C9A227]/22 via-[#C9A227]/10 to-[#1F190B] border-[#C9A227]/40 shadow-lg',
      desc: 'SLA delay and operational variance tracking',
    },
    {
      title: 'ROUTINE MONITORING',
      count: 113,
      color: 'text-[#0E7C7B]',
      cardGrad: isLight
        ? 'bg-gradient-to-br from-[#0E7C7B]/15 via-[#0E7C7B]/8 to-white border-[#0E7C7B]/30 shadow-sm'
        : 'bg-gradient-to-br from-[#0E7C7B]/22 via-[#0E7C7B]/10 to-[#0A1624] border-[#0E7C7B]/40 shadow-lg',
      desc: 'Routine telemetry & compliance audits operating normally',
    },
  ];

  const activeAlerts = [
    { id: '1', division: 'INFRASTRUCTURE', issue: 'Coastal Expressway Maharashtra delayed by 45 days', impact: '₹ 420 Cr delay penalty risk in Q4', status: 'Critical' },
    { id: '2', division: 'BULLION & REFINERY', issue: 'Vault 4 gold batch weight reconciliation variance', impact: 'LBMA Audit delay exposure', status: 'Attention' },
    { id: '3', division: 'ENERGY', issue: 'Solar Park Rajasthan 1.2 GW grid interconnection review', impact: '₹ 80 Cr transmission tariff lock', status: 'Watch' },
    { id: '4', division: 'HOSPITALITY', issue: 'Heritage resort RevPAR compressed by ₹ 1,400', impact: 'Operating margin compressed by 2.1%', status: 'Watch' },
    { id: '5', division: 'INDUSTRIES', issue: 'Aerospace component raw titanium import delay', impact: 'Component delivery delay risk 10 days', status: 'Attention' },
  ];

  const divisionRisks = [
    { division: 'Infrastructure', exposure: '₹ 420 Cr', level: 'Critical', audits: 'SLA Phase 4 Compliance' },
    { division: 'Bullion & Refinery', exposure: '₹ 120 Cr', level: 'Warning', audits: 'LBMA Vault 4 Security & Assay' },
    { division: 'Energy', exposure: '₹ 80 Cr', level: 'Watch', audits: 'State Grid Bay Interconnect' },
    { division: 'Realty', exposure: '₹ 50 Cr', level: 'Healthy', audits: 'IGBC Platinum Green Certification' },
    { division: 'Industries', exposure: '₹ 35 Cr', level: 'Watch', audits: 'Aerospace Titanium Supply Chain' },
    { division: 'Hospitality', exposure: '₹ 25 Cr', level: 'Watch', audits: 'Luxury Resort Operational Standards' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-3 lg:p-4 space-y-3 max-w-[1720px] mx-auto select-none font-sans h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] flex flex-col overflow-hidden"
    >
      {/* Page Header */}
      <PageHeader
        category="EXECUTIVE RISK TELEMETRY"
        title="EXECUTIVE RISK INTELLIGENCE MATRIX"
        subtitle="Real-time Capital Exposure, SLA Benchmarks & Exception Feeds"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#E61C40]/15 border border-[#E61C40]/30 text-[#E61C40]">
            128 Active Alerts (-33% YoY)
          </span>
        }
      />

      {/* Top 3 Risk Summary KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 select-none shrink-0">
        {riskCategories.map((cat, idx) => (
          <div
            key={idx}
            className={`p-3 lg:p-3.5 rounded-2xl border ${cat.cardGrad} flex items-center justify-between h-[114px] shadow-sm transition-all`}
          >
            <div>
              <span className={`text-xs lg:text-sm font-black tracking-wider uppercase block ${
                isLight ? 'text-[#6B7280]' : 'text-slate-400'
              }`}>
                {cat.title}
              </span>
              <span className={`text-2xl lg:text-3xl xl:text-4xl font-black block mt-0.5 tracking-tight leading-none ${cat.color}`}>
                {cat.count} Issues
              </span>
              <p className={`text-xs lg:text-sm font-semibold mt-1 leading-tight line-clamp-1 ${
                isLight ? 'text-[#6B7280]' : 'text-slate-400'
              }`}>
                {cat.desc}
              </p>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/40 dark:bg-white/5 border border-current/20 shrink-0">
              <ShieldAlert className={`w-7 h-7 lg:w-8 lg:h-8 ${cat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Main 12-Col Grid: 7-Col Exceptions + 5-Col Exposure Heatmap */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Left 7 Cols: Priority Exception Matrix (Full width, Clean, Large Font) */}
        <div className="lg:col-span-7 flex flex-col h-full min-h-0">
          <Card
            title="PRIORITY EXCEPTION MATRIX"
            subtitle="Active risk items requiring executive authorization and mitigation follow-up"
            className="p-3.5 lg:p-4 flex flex-col justify-between h-full min-h-0 space-y-2.5"
          >
            <div className="space-y-2.5 flex-1 min-h-0 flex flex-col justify-between">
              {activeAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3.5 lg:p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all flex-1 min-h-0 ${
                    isLight
                      ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                      : 'bg-[#0B1426] border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                  }`}
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm lg:text-base font-black text-[#C9A227] uppercase tracking-wider">
                        {alert.division}
                      </span>
                      <StatusBadge status={alert.status} size="md" />
                    </div>
                    <h4 className={`text-sm lg:text-base font-black truncate ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                      {alert.issue}
                    </h4>
                    <p className={`text-xs lg:text-sm font-semibold ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                      <strong>Financial Exposure: </strong>
                      <span className="text-[#E61C40] font-black">{alert.impact}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right 5 Cols: Division Capital Exposure Heatmap */}
        <div className="lg:col-span-5 flex flex-col h-full min-h-0">
          <Card
            title="CAPITAL AT RISK BY VERTICAL"
            subtitle="Financial exposure distribution and active compliance audits"
            className="p-3.5 lg:p-4 flex flex-col justify-between h-full min-h-0 space-y-2.5"
          >
            <div className="space-y-2 flex-1 min-h-0 flex flex-col justify-between">
              {divisionRisks.map((d, i) => (
                <div
                  key={i}
                  className={`p-3 lg:p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all flex-1 min-h-0 ${
                    isLight
                      ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                      : 'bg-[#0B1426] border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="font-black text-sm lg:text-base uppercase tracking-wider text-[#C9A227] block truncate">
                      {d.division}
                    </span>
                    <span className={`text-xs lg:text-sm font-semibold block truncate mt-0.5 ${
                      isLight ? 'text-[#6B7280]' : 'text-slate-400'
                    }`}>
                      Audit: {d.audits}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm lg:text-base font-black text-[#E61C40]">{d.exposure}</span>
                    <StatusBadge status={d.level} size="md" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
