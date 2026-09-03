import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ReportsPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const reports = [
    { title: 'Executive Monthly Group Report', period: 'August 2026', size: '4.2 MB', category: 'Executive Summary', date: '01 Sep 2026' },
    { title: 'Q2 Group Performance & Financial Statement', period: 'Q2 FY2026', size: '12.8 MB', category: 'Financial Statement', date: '15 Aug 2026' },
    { title: 'Portfolio Risk & Operational SLA Audit', period: 'H1 FY2026', size: '8.4 MB', category: 'Audit & Compliance', date: '30 Jul 2026' },
    { title: 'Sustainability & ESG Progress Report', period: 'Annual 2026', size: '6.1 MB', category: 'ESG Report', date: '20 Jul 2026' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none font-sans"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase">
            BOARD & EXECUTIVE DOCUMENTATION
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            EXECUTIVE REPORTS & AUDIT ARCHIVE
          </h1>
        </div>
        <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Encrypted Governance Archive • ISO 27001 Certified</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((rep, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border flex items-center justify-between transition-all duration-200 cursor-pointer group ${
              isLight ? 'bg-white border-slate-200 shadow-sm hover:border-[#C9A227]' : 'bg-[#131C2E] border-slate-800 shadow-xl hover:border-[#C9A227]/40'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0E7C7B] uppercase tracking-widest">{rep.category}</span>
                <h3 className={`text-sm font-bold mt-0.5 group-hover:text-[#C9A227] transition-colors ${isLight ? 'text-slate-900' : 'text-white'}`}>{rep.title}</h3>
                <span className={`text-[11px] block mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{rep.period} • {rep.size} • Published {rep.date}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading ${rep.title}...`)}
              className={`p-2.5 rounded-xl border text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1426] transition-colors shrink-0 cursor-pointer ${
                isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0B1426] border-slate-700'
              }`}
              title="Download Report PDF"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
