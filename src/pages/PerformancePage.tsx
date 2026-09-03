import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Coins, PieChart, BarChart3, Wallet, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SparklineChart } from '../components/charts/SparklineChart';
import { useTheme } from '../context/ThemeContext';

export const PerformancePage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const performanceKpis = [
    { title: 'GROUP REVENUE (YTD)', val: '₹ 24,852 Cr', ly: '₹ 21,452 Cr', diff: '▲ 15.9%', color: '#8B5CF6' },
    { title: 'PROFIT AFTER TAX (YTD)', val: '₹ 4,152 Cr', ly: '₹ 3,500 Cr', diff: '▲ 18.7%', color: '#10B981' },
    { title: 'GROUP EBITDA (YTD)', val: '₹ 5,487 Cr', ly: '₹ 4,680 Cr', diff: '▲ 17.3%', color: '#F59E0B' },
    { title: 'EBITDA MARGIN', val: '22.1%', ly: '19.4%', diff: '▲ 2.7pp', color: '#14B8A6' },
    { title: 'NET CASH POSITION', val: '₹ 6,842 Cr', ly: '₹ 6,230 Cr', diff: '▲ 9.8%', color: '#3B82F6' },
    { title: 'NET WORTH', val: '₹ 18,650 Cr', ly: '₹ 16,590 Cr', diff: '▲ 12.4%', color: '#EC4899' },
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
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            FINANCIAL POSITION & MARGIN ANALYTICS
          </h1>
        </div>
        <span className="text-xs text-slate-400">Audited Financial Feeds • FY2026 YTD</span>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {performanceKpis.map((kpi, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border flex flex-col justify-between ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl'
            }`}
          >
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">{kpi.title}</span>
              <span className={`text-xl font-outfit font-extrabold block mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {kpi.val}
              </span>
              <div className="flex items-center justify-between text-[11px] mt-1">
                <span className="text-slate-400">vs LY {kpi.ly}</span>
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
        <div className={`lg:col-span-8 p-6 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
        }`}>
          <h3 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-3 border-b border-slate-800">
            BUSINESS REVENUE & EBITDA CONTRIBUTION MATRIX
          </h3>
          <table className="w-full text-left text-xs mt-4">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase font-bold text-slate-400">
                <th className="py-2">Business Division</th>
                <th className="py-2">YTD Revenue</th>
                <th className="py-2">EBITDA Margin</th>
                <th className="py-2">YoY Growth</th>
                <th className="py-2 text-right">Contribution %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 font-medium">
              <tr>
                <td className="py-3 font-bold text-gold">Bullion & Refinery</td>
                <td className="py-3 text-white">₹ 5,820 Cr</td>
                <td className="py-3 text-teal-300">18.2%</td>
                <td className="py-3 text-emerald-400">▲ 14.8%</td>
                <td className="py-3 text-right font-extrabold">23.4%</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gold">Energy</td>
                <td className="py-3 text-white">₹ 4,280 Cr</td>
                <td className="py-3 text-teal-300">31.2%</td>
                <td className="py-3 text-emerald-400">▲ 18.4%</td>
                <td className="py-3 text-right font-extrabold">17.2%</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gold">Realty</td>
                <td className="py-3 text-white">₹ 4,120 Cr</td>
                <td className="py-3 text-teal-300">28.4%</td>
                <td className="py-3 text-emerald-400">▲ 21.5%</td>
                <td className="py-3 text-right font-extrabold">16.6%</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gold">Infrastructure</td>
                <td className="py-3 text-white">₹ 3,450 Cr</td>
                <td className="py-3 text-teal-300">19.8%</td>
                <td className="py-3 text-emerald-400">▲ 9.2%</td>
                <td className="py-3 text-right font-extrabold">13.9%</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-gold">Industries</td>
                <td className="py-3 text-white">₹ 3,110 Cr</td>
                <td className="py-3 text-teal-300">24.1%</td>
                <td className="py-3 text-emerald-400">▲ 16.7%</td>
                <td className="py-3 text-right font-extrabold">12.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`lg:col-span-4 p-6 rounded-2xl border ${
          isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
        }`}>
          <h3 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-3 border-b border-slate-800">
            CAPITAL EFFICIENCY SUMMARY
          </h3>
          <div className="space-y-4 mt-4 text-xs">
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Return on Invested Capital (ROIC)</span>
              <span className="text-lg font-extrabold text-emerald-400 mt-0.5 block">18.4% (+2.1pp)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Debt-to-EBITDA Ratio</span>
              <span className="text-lg font-extrabold text-teal-300 mt-0.5 block">1.24x (Ultra Low Risk)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0A1021] border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Operating Cash Flow Conversion</span>
              <span className="text-lg font-extrabold text-gold mt-0.5 block">92.6% of EBITDA</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
