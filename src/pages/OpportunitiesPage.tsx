import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { StatusBadge } from '../components/common/StatusBadge';

export const OpportunitiesPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const opportunities = [
    {
      title: 'Solar Megapark Expansion Phase III',
      division: 'ENERGY',
      val: '₹ 3.1k Cr',
      growth: '+28.0%',
      fit: 'Ultra High',
      confidence: '94%',
      description: 'Acquire adjacent 3,000-acre solar parcel in Jaisalmer to scale clean generation capacity to 6.0 GW with high grid yield and battery storage.',
    },
    {
      title: 'Aspect Smart Financial City Phase II',
      division: 'REALTY',
      val: '₹ 2.4k Cr',
      growth: '+24.5%',
      fit: 'High Fit',
      confidence: '88%',
      description: 'Develop premium IGBC Platinum twin financial towers with 92% pre-leased institutional tenants in prime urban growth corridor.',
    },
    {
      title: 'Robotic Aerospace Export Line Expansion',
      division: 'INDUSTRIES',
      val: '₹ 1.8k Cr',
      growth: '+32.0%',
      fit: 'High Fit',
      confidence: '91%',
      description: 'Expand precision CNC titanium aerospace component line to fulfill long-term export contracts with top defense primes globally.',
    },
    {
      title: 'LBMA Zero-Carbon Bullion Refinery Expansion',
      division: 'BULLION & REFINERY',
      val: '₹ 1.5k Cr',
      growth: '+19.2%',
      fit: 'High Fit',
      confidence: '96%',
      description: 'Upgrade Gujarat refinery green hydrogen induction furnace to achieve fully certified carbon-neutral bullion minting standards.',
    },
    {
      title: 'Luxury Heritage Eco-Resort Circuit',
      division: 'HOSPITALITY',
      val: '₹ 1.2k Cr',
      growth: '+21.5%',
      fit: 'High Fit',
      confidence: '90%',
      description: 'Develop 3 ultra-luxury experiential heritage resort properties across Rajasthan and Goa with 82% projected annual occupancy.',
    },
    {
      title: 'Franchise Arena & Sports Tech Academy',
      division: 'ASPECT SPORTS',
      val: '₹ 0.9k Cr',
      growth: '+26.0%',
      fit: 'High Fit',
      confidence: '93%',
      description: 'Construct state-of-the-art multi-sport high-performance training arena and global esports digital broadcasting production hub.',
    },
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
        category="VALUE CREATION PIPELINE"
        title="GROWTH & STRATEGIC OPPORTUNITIES"
        subtitle="AI-synthesized strategic expansion projects, capital deployment queues, and C-Suite signoffs"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            Pipeline: ₹ 14.2k Cr (+20.3%)
          </span>
        }
      />

      {/* Grid of 6 Opportunity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5.5 items-stretch">
        {opportunities.map((opp, idx) => (
          <Card key={idx} noPadding className="p-6 lg:p-7 flex flex-col justify-between space-y-4 rounded-2xl shadow-sm hover:border-[#C9A227]/60 transition-all">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
                <span className="text-sm lg:text-base font-black text-[#C9A227] uppercase tracking-wider">
                  {opp.division}
                </span>
                <StatusBadge status={opp.fit} size="md" />
              </div>

              <h3 className={`text-lg lg:text-xl font-black tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'
                }`}>
                {opp.title}
              </h3>

              <p className={`text-xs lg:text-sm font-semibold leading-relaxed ${isLight ? 'text-[#6B7280]' : 'text-slate-400'
                }`}>
                {opp.description}
              </p>

              {/* 2 Metric Gradient Sub-Cards */}
              <div className="grid grid-cols-2 gap-3.5 pt-1.5">
                <div className={`p-4 lg:p-4.5 rounded-2xl border ${isLight
                    ? 'bg-gradient-to-br from-[#0E7C7B]/10 via-[#0E7C7B]/5 to-white border-[#0E7C7B]/30 shadow-2xs'
                    : 'bg-[#0B1426] border-slate-800'
                  }`}>
                  <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#0E7C7B] truncate">
                    Potential Value
                  </span>
                  <span className={`text-2xl lg:text-3xl font-black mt-1.5 block leading-none tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'
                    }`}>
                    {opp.val}
                  </span>
                </div>

                <div className={`p-4 lg:p-4.5 rounded-2xl border ${isLight
                    ? 'bg-gradient-to-br from-[#C9A227]/10 via-[#C9A227]/5 to-white border-[#C9A227]/30 shadow-2xs'
                    : 'bg-[#0B1426] border-slate-800'
                  }`}>
                  <span className="text-xs lg:text-sm font-extrabold block uppercase tracking-wider text-[#B8860B] dark:text-[#F59E0B] truncate">
                    Expected Growth
                  </span>
                  <span className="text-2xl lg:text-3xl font-black text-[#0E7C7B] mt-1.5 block leading-none tracking-tight">
                    {opp.growth}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer - Clean Confidence Metric without red-shaded button */}
            <div className={`pt-4 border-t flex items-center justify-between text-xs lg:text-sm ${isLight ? 'border-slate-200' : 'border-slate-800'
              }`}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#C9A227] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className={`font-semibold ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                  AI Investment Confidence Score
                </span>
              </div>
              <span className="text-sm lg:text-base font-black text-[#0E7C7B] bg-[#0E7C7B]/10 px-2.5 py-1 rounded-lg border border-[#0E7C7B]/20">
                {opp.confidence}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
