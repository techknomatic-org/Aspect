import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Zap, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';

export const ImpactESGPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-6 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="SUSTAINABILITY & COMMUNITY TELEMETRY"
        title="IMPACT & ESG SUSTAINABILITY DASHBOARD"
        subtitle="Global environmental metrics, green energy generation, and community impact programs"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            ESG Rating: 68.7 / 100 (+5.2 pts YoY)
          </span>
        }
      />

      {/* 2-Column Balanced Split of Major Impact Divisions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5.5 items-stretch">
        {/* Foundation Impact Card */}
        <Card noPadding className="p-6 lg:p-7 flex flex-col justify-between space-y-5 rounded-2xl shadow-sm hover:border-[#C9A227]/60 transition-all">
          <div className="space-y-4">
            <div className={`flex items-center gap-4 pb-4 border-b ${isLight ? 'border-slate-300' : 'border-slate-800'}`}>
              <div className="p-3.5 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] shrink-0 shadow-xs">
                <Landmark className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs lg:text-sm font-black text-[#C9A227] uppercase tracking-wider block">
                  PHILANTHROPIC CAPITAL & COMMUNITY
                </span>
                <h2 className={`text-xl lg:text-2xl font-black uppercase tracking-tight mt-0.5 ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  Aspect Foundation Programs
                </h2>
              </div>
            </div>

            <p className={`text-sm lg:text-base leading-relaxed font-semibold ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
              Aspect Foundation spearheads long-term philanthropic capital allocation, operating over 120 rural healthcare clinics, vocational education centers, and women-led cooperative enterprises across India and emerging markets.
            </p>

            {/* 4 Big Impact Metric Blocks (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#C9A227]/10 via-[#C9A227]/5 to-white border-[#C9A227]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#B8860B] dark:text-[#F59E0B]">
                  Beneficiaries Reached
                </span>
                <span className={`text-2xl lg:text-3xl font-black mt-1.5 block leading-none tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  2.4M Families
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">Across 120+ Rural Hubs</span>
              </div>

              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  Funds Utilization Rate
                </span>
                <span className="text-2xl lg:text-3xl font-black text-[#0E7C7B] mt-1.5 block leading-none tracking-tight">
                  98.4%
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">Audited by KPMG</span>
              </div>

              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#4A6FA5]/10 via-[#4A6FA5]/5 to-white border-[#4A6FA5]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#3B6BA5] dark:text-[#60A5FA]">
                  Rural Healthcare Centers
                </span>
                <span className={`text-2xl lg:text-3xl font-black mt-1.5 block leading-none tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  120+ Clinics
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">Free Primary Consultations</span>
              </div>

              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  Women Cooperatives
                </span>
                <span className="text-2xl lg:text-3xl font-black text-[#0E7C7B] mt-1.5 block leading-none tracking-tight">
                  14,500+
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">Micro-Enterprise Grants</span>
              </div>
            </div>

            {/* Foundation Key Highlights (4 Cards) */}
            <div className="space-y-2.5 pt-2">
              {[
                'Clean Water Access: 450+ village filtration systems installed',
                'Vocational Skills: 32,000 youth certified in technology & trades',
                'Nutrition & Primary Care: 1.2M medical consultations delivered',
                'Rural Digital Literacy: 85 smart school computer labs deployed'
              ].map((item, idx) => (
                <div key={idx} className={`p-3.5 lg:p-4 rounded-2xl border flex items-center gap-3 ${isLight ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs' : 'bg-[#0B1426] border-slate-800 text-slate-200'
                  }`}>
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C7B] shrink-0" />
                  <span className="font-semibold text-xs lg:text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Clean Energy & Renewables Impact Card */}
        <Card noPadding className="p-6 lg:p-7 flex flex-col justify-between space-y-5 rounded-2xl shadow-sm hover:border-[#C9A227]/60 transition-all">
          <div className="space-y-4">
            <div className={`flex items-center gap-4 pb-4 border-b ${isLight ? 'border-slate-300' : 'border-slate-800'}`}>
              <div className="p-3.5 rounded-2xl bg-[#0E7C7B]/15 border border-[#0E7C7B]/40 text-[#0E7C7B] shrink-0 shadow-xs">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs lg:text-sm font-black text-[#0E7C7B] uppercase tracking-wider block">
                  CLEAN POWER & DECARBONIZATION
                </span>
                <h2 className={`text-xl lg:text-2xl font-black uppercase tracking-tight mt-0.5 ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  Aspect Energy & Renewables
                </h2>
              </div>
            </div>

            <p className={`text-sm lg:text-base leading-relaxed font-semibold ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
              Aspect Energy operates mega-scale solar generation, offshore wind parks, and green hydrogen pilot infrastructure, offsetting millions of metric tons of greenhouse emissions annually while supporting India's 2030 net-zero trajectory.
            </p>

            {/* 4 Big Energy Metric Blocks (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  Installed Capacity
                </span>
                <span className={`text-2xl lg:text-3xl font-black mt-1.5 block leading-none tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  4.8 GW
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">▲ +380 MW added in FY26</span>
              </div>

              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  CO2 Annual Offset
                </span>
                <span className="text-2xl lg:text-3xl font-black text-[#0E7C7B] mt-1.5 block leading-none tracking-tight">
                  6.2M Tons
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">▲ 14.8% YoY Reduction</span>
              </div>

              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#C9A227]/10 via-[#C9A227]/5 to-white border-[#C9A227]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#B8860B] dark:text-[#F59E0B]">
                  Clean Generation Volume
                </span>
                <span className={`text-2xl lg:text-3xl font-black mt-1.5 block leading-none tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  8,400 GWh
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">Zero-Carbon Electricity</span>
              </div>

              <div className={`p-4 lg:p-4.5 rounded-2xl border flex flex-col justify-between ${isLight ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs' : 'bg-[#0B1426] border-slate-800'
                }`}>
                <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B]">
                  Green Hydrogen Purity
                </span>
                <span className="text-2xl lg:text-3xl font-black text-[#0E7C7B] mt-1.5 block leading-none tracking-tight">
                  99.9%
                </span>
                <span className="text-xs lg:text-sm text-[#0E7C7B] font-bold mt-1.5 block">Pilot Benchmark in Gujarat</span>
              </div>
            </div>

            {/* Energy Key Highlights (4 Cards) */}
            <div className="space-y-2.5 pt-2">
              {[
                'Ultra Solar Park: 1.2 GW synchronized to Rajasthan state grid',
                'Green Hydrogen Pilot: Achieved 99.9% purity benchmark in Gujarat',
                'Offshore Wind Phase I: Tamil Nadu coast construction 71% complete',
                'Battery Storage (BESS): 500 MWh grid-scale storage commissioned'
              ].map((item, idx) => (
                <div key={idx} className={`p-3.5 lg:p-4 rounded-2xl border flex items-center gap-3 ${isLight ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs' : 'bg-[#0B1426] border-slate-800 text-slate-200'
                  }`}>
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C7B] shrink-0" />
                  <span className="font-semibold text-xs lg:text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
