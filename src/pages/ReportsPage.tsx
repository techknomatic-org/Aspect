import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
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
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-outfit font-extrabold tracking-widest text-gold uppercase">
            BOARD & EXECUTIVE DOCUMENTATION
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            EXECUTIVE REPORTS & AUDIT ARCHIVE
          </h1>
        </div>
        <span className="text-xs text-slate-400">Encrypted Governance Archive • ISO 27001 Certified</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((rep, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border flex items-center justify-between transition-all duration-200 cursor-pointer group ${
              isLight ? 'bg-white border-slate-200 shadow-sm hover:border-gold/60' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl hover:border-gold/40'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-gold/15 border border-gold/40 text-gold shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">{rep.category}</span>
                <h3 className="text-sm font-extrabold text-white mt-0.5 group-hover:text-gold transition-colors">{rep.title}</h3>
                <span className="text-[11px] text-slate-400 block mt-1">{rep.period} • {rep.size} • Published {rep.date}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading ${rep.title}...`)}
              className="p-2.5 rounded-xl bg-navy-800 border border-slate-700 text-gold hover:bg-gold hover:text-navy-950 transition-colors shrink-0"
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
