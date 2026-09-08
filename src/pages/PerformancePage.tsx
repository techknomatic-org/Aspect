import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, BarChart2, ShieldCheck, Wallet, Building2, Activity, Percent, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { KPICard } from '../components/common/KPICard';

export const PerformancePage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const performanceKpis = [
    {
      title: 'GROUP REVENUE (YTD)',
      val: '₹ 24.9k Cr',
      ly: 'vs LY ₹ 21.5k Cr',
      diff: '▲ 15.9%',
      color: 'teal' as const,
      icon: DollarSign,
      target: { label: 'TARGET', badge: '110.5%', value: '₹ 22.5k Cr', statusText: '+₹2.4k Cr' },
    },
    {
      title: 'PROFIT AFTER TAX (YTD)',
      val: '₹ 4.2k Cr',
      ly: 'vs LY ₹ 3.5k Cr',
      diff: '▲ 18.7%',
      color: 'teal' as const,
      icon: TrendingUp,
      target: { label: 'TARGET', badge: '109.2%', value: '₹ 3.8k Cr', statusText: '+₹0.4k Cr' },
    },
    {
      title: 'GROUP EBITDA (YTD)',
      val: '₹ 5.5k Cr',
      ly: 'vs LY ₹ 4.7k Cr',
      diff: '▲ 17.3%',
      color: 'gold' as const,
      icon: BarChart2,
      target: { label: 'TARGET', badge: '22.1%', value: '22.0%', statusText: 'On Margin' },
    },
    {
      title: 'EBITDA MARGIN',
      val: '22.1%',
      ly: 'vs LY 19.4%',
      diff: '▲ 2.7pp',
      color: 'teal' as const,
      icon: Activity,
      target: { label: 'BENCHMARK', badge: '+2.7pp', value: '20.0%', statusText: 'Exceeded' },
    },
    {
      title: 'NET CASH POSITION',
      val: '₹ 6.8k Cr',
      ly: 'vs LY ₹ 6.2k Cr',
      diff: '▲ 9.8%',
      color: 'blue' as const,
      icon: Wallet,
      target: { label: 'TARGET', badge: '114.0%', value: '₹ 6.0k Cr', statusText: '+₹0.8k Cr' },
    },
    {
      title: 'NET WORTH',
      val: '₹ 18.7k Cr',
      ly: 'vs LY ₹ 16.6k Cr',
      diff: '▲ 12.4%',
      color: 'blue' as const,
      icon: Building2,
      target: { label: 'TARGET', badge: '103.6%', value: '₹ 18.0k Cr', statusText: '+₹0.7k Cr' },
    },
  ];

  const allBusinessMatrix = [
    { name: 'Bullion & Refinery', rev: '₹ 5.8k Cr', margin: '18.2%', growth: '14.8%', share: '23.4%' },
    { name: 'Energy', rev: '₹ 4.3k Cr', margin: '31.2%', growth: '18.4%', share: '17.2%' },
    { name: 'Realty', rev: '₹ 4.1k Cr', margin: '28.4%', growth: '21.5%', share: '16.6%' },
    { name: 'Infrastructure', rev: '₹ 3.5k Cr', margin: '19.8%', growth: '9.2%', share: '13.9%' },
    { name: 'Industries', rev: '₹ 3.1k Cr', margin: '24.1%', growth: '16.7%', share: '12.5%' },
    { name: 'Hospitality', rev: '₹ 1.8k Cr', margin: '26.5%', growth: '13.1%', share: '7.2%' },
    { name: 'Entertainment', rev: '₹ 1.3k Cr', margin: '22.8%', growth: '22.1%', share: '5.2%' },
    { name: 'Sports', rev: '₹ 0.9k Cr', margin: '16.4%', growth: '28.6%', share: '3.6%' },
    { name: 'Foundation', rev: '₹ 0.9k Cr', margin: '14.2%', growth: '12.4%', share: '0.4%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-3.5 lg:p-5 space-y-4 lg:space-y-4.5 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="GROUP FINANCIAL PERFORMANCE"
        title="FINANCIAL POSITION & MARGIN ANALYTICS"
        subtitle="Audited Financial Feeds • FY2026 YTD Benchmarks"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            All 9 Units Audited
          </span>
        }
      />

      {/* Primary KPI Row - 6 Balanced Overview-Style Gradient Cards in 2 rows of 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 select-none shrink-0">
        {performanceKpis.map((kpi, i) => (
          <KPICard
            key={i}
            title={kpi.title}
            value={kpi.val}
            vsText={kpi.ly}
            change={kpi.diff}
            icon={kpi.icon}
            color={kpi.color}
            target={kpi.target}
          />
        ))}
      </div>

      {/* Financial Breakdown & Capital Efficiency Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4.5 items-stretch">
        {/* Left: 8 Cols Division Breakdown Table */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <Card
            title="BUSINESS REVENUE & EBITDA CONTRIBUTION MATRIX"
            subtitle="Real-time division breakdown and profitability share across 9 ecosystem verticals"
            className="flex flex-col justify-between h-full"
          >
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`border-b text-xs lg:text-sm uppercase font-extrabold tracking-wider ${isLight ? 'border-slate-300 bg-slate-50 text-[#6B7280]' : 'border-slate-800 bg-[#0B1426] text-slate-400'
                    }`}>
                    <th className="py-2.5 lg:py-3 px-4 pl-5">Business Division</th>
                    <th className="py-2.5 lg:py-3 px-4">YTD Revenue</th>
                    <th className="py-2.5 lg:py-3 px-4">EBITDA Margin</th>
                    <th className="py-2.5 lg:py-3 px-4">YoY Growth</th>
                    <th className="py-2.5 lg:py-3 px-4 pr-5 text-right">Contribution %</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isLight ? 'divide-slate-200 text-[#1F2937]' : 'divide-slate-800/40 text-slate-200'}`}>
                  {allBusinessMatrix.map((row, idx) => (
                    <tr key={idx} className={`transition-colors ${isLight ? 'hover:bg-slate-50/80' : 'hover:bg-slate-800/30'}`}>
                      <td className="py-2.5 lg:py-3 px-4 pl-5 font-black text-[#C9A227] uppercase tracking-wider text-sm lg:text-base">
                        {row.name}
                      </td>
                      <td className={`py-2.5 lg:py-3 px-4 font-black text-sm lg:text-base ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                        {row.rev}
                      </td>
                      <td className="py-2.5 lg:py-3 px-4 text-[#0E7C7B] font-extrabold text-xs lg:text-sm">
                        {row.margin}
                      </td>
                      <td className="py-2.5 lg:py-3 px-4 text-[#0E7C7B] font-black text-xs lg:text-sm">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 inline" /> ▲ {row.growth}
                        </span>
                      </td>
                      <td className={`py-2.5 lg:py-3 px-4 pr-5 text-right font-black text-sm lg:text-base ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                        {row.share}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right: 4 Cols Capital Efficiency */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <Card
            title="CAPITAL EFFICIENCY SUMMARY"
            subtitle="Executive return on investment benchmarks & leverage"
            className="flex flex-col justify-between h-full space-y-2.5"
          >
            <div className="flex-1 flex flex-col justify-between gap-2.5 text-xs">
              <div className={`p-3 lg:p-3.5 rounded-2xl border flex flex-col justify-between flex-1 transition-all ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  Return on Invested Capital (ROIC)
                </span>
                <span className={`text-xl lg:text-2xl font-black mt-0.5 block tracking-tight leading-none ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  18.4% <span className="text-xs text-[#0E7C7B] font-bold">(+2.1pp vs Target)</span>
                </span>
              </div>

              <div className={`p-3 lg:p-3.5 rounded-2xl border flex flex-col justify-between flex-1 transition-all ${isLight ? 'bg-gradient-to-br from-[#C9A227]/10 via-[#C9A227]/5 to-white border-[#C9A227]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#B8860B] dark:text-[#F59E0B]">
                  Debt-to-EBITDA Ratio
                </span>
                <span className={`text-xl lg:text-2xl font-black mt-0.5 block tracking-tight leading-none ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  1.24x <span className="text-xs text-[#0E7C7B] font-bold">(Ultra Low Leverage)</span>
                </span>
              </div>

              <div className={`p-3 lg:p-3.5 rounded-2xl border flex flex-col justify-between flex-1 transition-all ${isLight ? 'bg-gradient-to-br from-[#4A6FA5]/10 via-[#4A6FA5]/5 to-white border-[#4A6FA5]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#3B6BA5] dark:text-[#60A5FA]">
                  Operating Cash Flow Conversion
                </span>
                <span className={`text-xl lg:text-2xl font-black mt-0.5 block tracking-tight leading-none ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  92.6% <span className="text-xs text-[#0E7C7B] font-bold">of Total EBITDA</span>
                </span>
              </div>

              <div className={`p-3 lg:p-3.5 rounded-2xl border flex flex-col justify-between flex-1 transition-all ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  Weighted Avg Cost of Capital (WACC)
                </span>
                <span className={`text-xl lg:text-2xl font-black mt-0.5 block tracking-tight leading-none ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  9.1% <span className="text-xs text-[#0E7C7B] font-bold">(Optimized Structure)</span>
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
