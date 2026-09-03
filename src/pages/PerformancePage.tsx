import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Coins, PieChart, BarChart3, Wallet, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SparklineChart } from '../components/charts/SparklineChart';
import { useTheme } from '../context/ThemeContext';

export const PerformancePage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const card = isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl';
  const textPrimary = isLight ? 'text-slate-900' : 'text-white';
  const textSec = isLight ? 'text-slate-500' : 'text-slate-400';
  const innerCard = isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A1021] border-slate-800';
  const divider = isLight ? 'border-slate-200' : 'border-slate-800';

  const performanceKpis = [
    { title: 'GROUP REVENUE (YTD)', val: '₹ 24,852 Cr', ly: '₹ 21,452 Cr', diff: '▲ 15.9%', color: '#8B5CF6' },
    { title: 'PROFIT AFTER TAX (YTD)', val: '₹ 4,152 Cr', ly: '₹ 3,500 Cr', diff: '▲ 18.7%', color: '#10B981' },
    { title: 'GROUP EBITDA (YTD)', val: '₹ 5,487 Cr', ly: '₹ 4,680 Cr', diff: '▲ 17.3%', color: '#F59E0B' },
    { title: 'EBITDA MARGIN', val: '22.1%', ly: '19.4%', diff: '▲ 2.7pp', color: '#14B8A6' },
    { title: 'NET CASH POSITION', val: '₹ 6,842 Cr', ly: '₹ 6,230 Cr', diff: '▲ 9.8%', color: '#3B82F6' },
    { title: 'NET WORTH', val: '₹ 18,650 Cr', ly: '₹ 16,590 Cr', diff: '▲ 12.4%', color: '#EC4899' },
  ];

  const tableRows = [
    { name: 'Bullion & Refinery', rev: '₹ 5,820 Cr', ebitda: '18.2%', growth: '▲ 14.8%', contrib: '23.4%' },
    { name: 'Energy',             rev: '₹ 4,280 Cr', ebitda: '31.2%', growth: '▲ 18.4%', contrib: '17.2%' },
    { name: 'Realty',             rev: '₹ 4,120 Cr', ebitda: '28.4%', growth: '▲ 21.5%', contrib: '16.6%' },
    { name: 'Infrastructure',     rev: '₹ 3,450 Cr', ebitda: '19.8%', growth: '▲ 9.2%',  contrib: '13.9%' },
    { name: 'Industries',         rev: '₹ 3,110 Cr', ebitda: '24.1%', growth: '▲ 16.7%', contrib: '12.5%' },
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
            GROUP FINANCIAL PERFORMANCE
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${textPrimary}`}>
            FINANCIAL POSITION & MARGIN ANALYTICS
          </h1>
        </div>
        <span className={`text-xs ${textSec}`}>Audited Financial Feeds • FY2026 YTD</span>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {performanceKpis.map((kpi, i) => (
          <div key={i} className={`p-4 rounded-xl border flex flex-col justify-between ${card}`}>
            <div>
              <span className={`text-[10px] font-mono uppercase font-bold block ${textSec}`}>{kpi.title}</span>
              <span className={`text-xl font-outfit font-extrabold block mt-1 ${textPrimary}`}>{kpi.val}</span>
              <div className="flex items-center justify-between text-[11px] mt-1">
                <span className={textSec}>vs LY {kpi.ly}</span>
                <span className="font-bold text-emerald-400">{kpi.diff}</span>
              </div>
            </div>
            <div className="mt-3">
              <SparklineChart data={[{ val: 10 }, { val: 14 }, { val: 18 }, { val: 24 }, { val: 28 }, { val: 32 }]} color={kpi.color} height={28} />
            </div>
          </div>
        ))}
      </div>

      {/* Financial Statement Tables & Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className={`lg:col-span-8 p-6 rounded-2xl border ${card}`}>
          <h3 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-3 border-b border-slate-300/20">
            BUSINESS REVENUE & EBITDA CONTRIBUTION MATRIX
          </h3>
          <table className="w-full text-left text-xs mt-4">
            <thead>
              <tr className={`border-b text-[10px] uppercase font-bold ${textSec} ${divider}`}>
                <th className="py-2">Business Division</th>
                <th className="py-2">YTD Revenue</th>
                <th className="py-2">EBITDA Margin</th>
                <th className="py-2">YoY Growth</th>
                <th className="py-2 text-right">Contribution %</th>
              </tr>
            </thead>
            <tbody className={`divide-y font-medium ${isLight ? 'divide-slate-100' : 'divide-slate-800/40'}`}>
              {tableRows.map((row, i) => (
                <tr key={i}>
                  <td className="py-3 font-bold text-gold">{row.name}</td>
                  <td className={`py-3 font-semibold ${textPrimary}`}>{row.rev}</td>
                  <td className="py-3 text-teal-400 font-semibold">{row.ebitda}</td>
                  <td className="py-3 text-emerald-400 font-semibold">{row.growth}</td>
                  <td className={`py-3 text-right font-extrabold ${textPrimary}`}>{row.contrib}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`lg:col-span-4 p-6 rounded-2xl border ${card}`}>
          <h3 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-3 border-b border-slate-300/20">
            CAPITAL EFFICIENCY SUMMARY
          </h3>
          <div className="space-y-4 mt-4 text-xs">
            <div className={`p-3 rounded-xl border ${innerCard}`}>
              <span className={`text-[10px] block uppercase ${textSec}`}>Return on Invested Capital (ROIC)</span>
              <span className="text-lg font-extrabold text-emerald-400 mt-0.5 block">18.4% (+2.1pp)</span>
            </div>
            <div className={`p-3 rounded-xl border ${innerCard}`}>
              <span className={`text-[10px] block uppercase ${textSec}`}>Debt-to-EBITDA Ratio</span>
              <span className="text-lg font-extrabold text-teal-400 mt-0.5 block">1.24x (Ultra Low Risk)</span>
            </div>
            <div className={`p-3 rounded-xl border ${innerCard}`}>
              <span className={`text-[10px] block uppercase ${textSec}`}>Operating Cash Flow Conversion</span>
              <span className="text-lg font-extrabold text-gold mt-0.5 block">92.6% of EBITDA</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
