import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { StatusBadge } from '../components/common/StatusBadge';

export const ReportsPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const reports = [
    { title: 'Executive Monthly Group Review', period: 'August 2026', size: '4.2 MB', category: 'Executive Summary', date: '01 Sep 2026' },
    { title: 'Q2 Group Performance & Financial Statement', period: 'Q2 FY2026', size: '12.8 MB', category: 'Financial Statement', date: '15 Aug 2026' },
    { title: 'Portfolio Risk & Operational SLA Audit', period: 'H1 FY2026', size: '8.4 MB', category: 'Audit & Compliance', date: '30 Jul 2026' },
    { title: 'Sustainability & ESG Progress Report', period: 'Annual 2026', size: '6.1 MB', category: 'ESG Report', date: '20 Jul 2026' },
  ];

  const statutorySchedule = [
    { auditName: 'LBMA Gold Refinery Annual Weight & Purity Recertification', authority: 'London Bullion Market Association', dueDate: '15 Oct 2026', status: 'In Preparation' },
    { auditName: 'IGBC Green Building Platinum Recertification (Realty Towers)', authority: 'Indian Green Building Council', dueDate: '30 Oct 2026', status: 'Submitted' },
    { auditName: 'Central Electricity Regulatory Commission (CERC) Grid Compliance', authority: 'Ministry of Power', dueDate: '10 Nov 2026', status: 'Approved' },
    { auditName: 'SEBI Comprehensive Corporate Governance & Board Compliance Filing', authority: 'Securities & Exchange Board of India', dueDate: '25 Nov 2026', status: 'Approved' },
    { auditName: 'International Transfer Pricing & Cross-Border Telemetry Audit', authority: 'OECD / Global Tax Authority', dueDate: '15 Dec 2026', status: 'In Preparation' },
    { auditName: 'Environmental Impact Assessment (EIA) Rajasthan Solar Megapark', authority: 'Ministry of Environment & Forests', dueDate: '10 Jan 2027', status: 'Submitted' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-6 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="BOARD & EXECUTIVE DOCUMENTATION"
        title="EXECUTIVE REPORTS & AUDIT ARCHIVE"
        subtitle="Encrypted Governance Documentation, Board Dossiers & Statutory Regulatory Filings"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            ISO 27001 Certified Archive
          </span>
        }
      />

      {/* 2x2 Grid of Featured Board Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reports.map((rep, idx) => (
          <Card key={idx} noPadding className="p-5 lg:p-6 flex items-center justify-between group rounded-2xl shadow-sm hover:border-[#C9A227]/60 transition-all">
            <div className="flex items-center gap-4 min-w-0">
              <div className="p-3.5 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] shrink-0 shadow-xs">
                <FileText className="w-7 h-7" />
              </div>
              <div className="min-w-0">
                <span className="text-xs lg:text-sm font-black text-[#0E7C7B] uppercase tracking-wider block truncate">
                  {rep.category}
                </span>
                <h3 className={`text-base lg:text-lg font-black mt-0.5 group-hover:text-[#C9A227] transition-colors truncate ${isLight ? 'text-[#1F2937]' : 'text-white'
                  }`}>
                  {rep.title}
                </h3>
                <span className={`text-xs lg:text-sm font-semibold block mt-1 truncate ${isLight ? 'text-[#6B7280]' : 'text-slate-400'
                  }`}>
                  {rep.period} • {rep.size} • Published {rep.date}
                </span>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading ${rep.title}...`)}
              className="p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1426] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1426] transition-all shrink-0 cursor-pointer shadow-xs ml-3"
              title="Download Report PDF"
            >
              <Download className="w-5 h-5" />
            </button>
          </Card>
        ))}
      </div>

      {/* Statutory Regulatory & Board Audit Register Table */}
      <div>
        <Card
          title="STATUTORY REGULATORY & BOARD AUDIT REGISTER"
          subtitle="Active regulatory submission schedule for FY2026-27 across all 9 operating verticals"
          noPadding
          className="overflow-hidden rounded-2xl shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`border-b text-xs lg:text-sm uppercase font-extrabold tracking-wider ${isLight ? 'border-slate-300 bg-slate-50 text-[#6B7280]' : 'border-slate-800 bg-[#0B1426] text-slate-400'
                  }`}>
                  <th className="py-4 px-4 pl-6 font-extrabold">Audit & Filing Description</th>
                  <th className="py-4 px-4 font-extrabold">Governing Authority</th>
                  <th className="py-4 px-4 font-extrabold">Due Date</th>
                  <th className="py-4 px-4 pr-6 text-right font-extrabold">Status</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-200 text-[#1F2937]' : 'divide-slate-800/40 text-slate-200'}`}>
                {statutorySchedule.map((row, idx) => (
                  <tr key={idx} className={`transition-colors ${isLight ? 'hover:bg-slate-50/80' : 'hover:bg-slate-800/30'}`}>
                    <td className="py-4.5 lg:py-5 px-4 pl-6 font-black flex items-center gap-3 text-sm lg:text-base">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#0E7C7B] shrink-0" />
                      <span className={`${isLight ? 'text-[#1F2937]' : 'text-white'}`}>{row.auditName}</span>
                    </td>
                    <td className={`py-4.5 lg:py-5 px-4 text-xs lg:text-sm font-semibold ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                      {row.authority}
                    </td>
                    <td className="py-4.5 lg:py-5 px-4 text-sm lg:text-base font-black text-[#B8860B] dark:text-[#F59E0B]">
                      {row.dueDate}
                    </td>
                    <td className="py-4.5 lg:py-5 px-4 pr-6 text-right">
                      <StatusBadge status={row.status} size="md" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
