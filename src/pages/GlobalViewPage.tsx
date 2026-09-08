import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, TrendingUp, Building2, DollarSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AspectWorldMap } from '../components/common/AspectWorldMap';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { KPICard } from '../components/common/KPICard';

export const GlobalViewPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const globalKpis = [
    {
      title: 'INTERNATIONAL REVENUE',
      val: '₹ 8.0k Cr',
      vsText: '32.1% of Group Total',
      change: '▲ 19.4%',
      color: 'teal' as const,
      icon: DollarSign,
      target: { label: 'TARGET', badge: '108.2%', value: '₹ 7.4k Cr', statusText: '+₹0.6k Cr' },
    },
    {
      title: 'ACTIVE GEOGRAPHIES',
      val: '10 Nations',
      vsText: '14 Strategic Hubs',
      change: '▲ 2 New Hubs',
      color: 'gold' as const,
      icon: Globe,
      target: { label: 'EXPANSION', badge: 'On Track', value: '12 Nations', statusText: 'Target FY27' },
    },
    {
      title: 'FASTEST GROWING REGION',
      val: 'Australia',
      vsText: 'Clean Energy & Mining',
      change: '▲ 28.0%',
      color: 'teal' as const,
      icon: TrendingUp,
      target: { label: 'CONTRIBUTION', badge: '₹ 0.4k Cr', value: '4.8% YoY', statusText: 'Accelerating' },
    },
    {
      title: 'GLOBAL HEADQUARTERS',
      val: 'Mumbai & London',
      vsText: 'Dual Hubs',
      change: '100% Active',
      color: 'blue' as const,
      icon: Building2,
      target: { label: 'SLA COMPLIANCE', badge: '99.9%', value: 'Tier 5 Sec', statusText: 'ISO 27001' },
    },
  ];

  const regions = [
    { country: 'India', status: 'Core Global HQ & Multi-Sector Hub', revenue: '₹ 16.9k Cr', share: '67.9%', growth: '+18.2%' },
    { country: 'Dubai / UAE', status: 'Precious Metals & Minting Global Hub', revenue: '₹ 4.2k Cr', share: '16.9%', growth: '+22.4%' },
    { country: 'USA', status: 'Tech IP, Media & Venture Equity', revenue: '₹ 1.9k Cr', share: '7.6%', growth: '+14.5%' },
    { country: 'UK & Europe', status: 'International HQ & Capital Markets', revenue: '₹ 0.9k Cr', share: '3.6%', growth: '+9.8%' },
    { country: 'Singapore', status: 'Fintech & Regional Trading Logistics', revenue: '₹ 0.7k Cr', share: '2.8%', growth: '+16.1%' },
    { country: 'Australia', status: 'Clean Energy & Battery Minerals', revenue: '₹ 0.4k Cr', share: '1.6%', growth: '+28.0%' },
    { country: 'Japan & East Asia', status: 'Tech Partnerships & Digital IP', revenue: '₹ 0.3k Cr', share: '1.2%', growth: '+19.5%' },
    { country: 'Southeast Asia', status: 'Infrastructure & Port Logistics', revenue: '₹ 0.3k Cr', share: '1.2%', growth: '+15.8%' },
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
        category="GEOSPATIAL ASSET FOOTPRINT"
        title="GLOBAL OPERATIONS & REGIONAL VIEW"
        subtitle="10 International Geographies • 14 Operational Hubs • Live Cross-Border Telemetry"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            14 Global Hubs Connected
          </span>
        }
      />

      {/* Top 4 Global Strategic KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4.5">
        {globalKpis.map((kpi, idx) => (
          <KPICard
            key={idx}
            title={kpi.title}
            value={kpi.val}
            vsText={kpi.vsText}
            change={kpi.change}
            icon={kpi.icon}
            color={kpi.color}
            target={kpi.target}
          />
        ))}
      </div>

      {/* Main Grid: 8-col Interactive Map + 4-col Regional Revenue Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left 8 Cols: Large Interactive World Map */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <Card
            title="GLOBAL ASSET TOPOLOGY MAP"
            subtitle="Interactive live geolocation pins across 14 international hubs"
            className="flex flex-col h-full space-y-0"
          >
            <div className="flex-1 w-full h-full min-h-[500px] flex flex-col">
              <AspectWorldMap isLight={isLight} height="100%" className="flex-1 h-full" />
            </div>
          </Card>
        </div>

        {/* Right 4 Cols: Regional Revenue Breakdown */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <Card
            title="REGIONAL CONTRIBUTION MATRIX"
            subtitle="Geographic revenue share & annual growth velocity"
            className="flex flex-col justify-between h-full"
          >
            <div className="space-y-2 flex-1 flex flex-col justify-between">
              {regions.map((reg, idx) => (
                <div
                  key={idx}
                  className={`p-3 lg:p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${isLight
                      ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                      : 'bg-[#0B1426] border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                    }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span className="font-black text-sm lg:text-base uppercase tracking-wider text-[#C9A227] truncate">
                        {reg.country}
                      </span>
                    </div>
                    <span className={`text-xs lg:text-sm font-semibold block truncate mt-0.5 ${isLight ? 'text-[#6B7280]' : 'text-slate-400'
                      }`}>
                      {reg.status}
                    </span>
                  </div>

                  <div className="text-right shrink-0 pl-2">
                    <span className={`text-sm lg:text-base font-black block ${isLight ? 'text-[#1F2937]' : 'text-white'
                      }`}>
                      {reg.revenue}
                    </span>
                    <span className="text-xs lg:text-sm font-black text-[#0E7C7B] flex items-center justify-end gap-0.5 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 inline" /> ▲ {reg.growth}
                    </span>
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
