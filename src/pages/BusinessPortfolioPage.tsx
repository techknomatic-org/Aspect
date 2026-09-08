import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, Search, Building2, TrendingUp, ChevronRight } from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { BusinessDetailModal } from '../components/modals/BusinessDetailModal';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { StatusBadge } from '../components/common/StatusBadge';

export const BusinessPortfolioPage: React.FC = () => {
  const [businesses, setBusinesses] = useState<EcosystemBusiness[]>([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'revenue' | 'growth' | 'value' | 'status'>('revenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedBusiness, setSelectedBusiness] = useState<EcosystemBusiness | null>(null);

  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    ecosystemService.getAllBusinesses().then(setBusinesses);
  }, []);

  const handleSort = (field: 'revenue' | 'growth' | 'value' | 'status') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const filteredBusinesses = businesses
    .filter(
      (b) =>
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      let valA = 0;
      let valB = 0;
      if (sortBy === 'revenue') {
        valA = a.numericRevenue;
        valB = b.numericRevenue;
      } else if (sortBy === 'growth') {
        valA = a.numericGrowth;
        valB = b.numericGrowth;
      } else if (sortBy === 'value') {
        valA = parseFloat((a.portfolioValue || '0').replace(/[^0-9.]/g, ''));
        valB = parseFloat((b.portfolioValue || '0').replace(/[^0-9.]/g, ''));
      }
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-6 lg:space-y-7 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="PORTFOLIO TELEMETRY"
        title="BUSINESS PORTFOLIO MATRIX"
        subtitle="9 Business Verticals • Live Financial & Valuation Feeds"
        rightElement={
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${isLight ? 'bg-white border-slate-300 text-[#1F2937]' : 'bg-[#0B1426] border-slate-700 text-slate-100'
              }`}>
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search business..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm font-semibold focus:outline-none placeholder-slate-400 w-40 sm:w-52 font-sans"
              />
            </div>

            <div className="flex items-center gap-2 text-xs lg:text-sm font-bold">
              <span className={isLight ? 'text-[#6B7280]' : 'text-slate-400'}>Sort:</span>
              {(['revenue', 'growth', 'value'] as const).map((field) => (
                <button
                  key={field}
                  onClick={() => handleSort(field)}
                  className={`px-3.5 py-1.5 rounded-xl border text-xs lg:text-sm font-black uppercase tracking-wider transition-all cursor-pointer font-sans ${sortBy === field
                      ? 'bg-[#C9A227] text-[#0B1426] border-[#C9A227] shadow-xs'
                      : isLight
                        ? 'bg-white text-[#1F2937] border-slate-300 hover:border-slate-400'
                        : 'bg-[#172033] text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                >
                  {field}
                </button>
              ))}
            </div>
          </div>
        }
      />

      {/* Portfolio Matrix Card & Table with clear distinct top gap */}
      <div className="pt-1">
        <Card noPadding className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className={`border-b text-xs lg:text-sm uppercase tracking-wider font-extrabold ${isLight ? 'bg-slate-50 border-slate-300 text-[#6B7280]' : 'bg-[#0B1426] border-slate-800 text-slate-400'
                  }`}>
                  <th className="py-4 px-4 pl-6 font-extrabold">Business Vertical</th>
                  <th className="py-4 px-4 font-extrabold">Category</th>
                  <th className="py-4 px-4 font-extrabold cursor-pointer" onClick={() => handleSort('revenue')}>
                    <div className="flex items-center gap-1.5">YTD Revenue <ArrowUpDown className="w-3.5 h-3.5" /></div>
                  </th>
                  <th className="py-4 px-4 font-extrabold cursor-pointer" onClick={() => handleSort('growth')}>
                    <div className="flex items-center gap-1.5">YoY Growth <ArrowUpDown className="w-3.5 h-3.5" /></div>
                  </th>
                  <th className="py-4 px-4 font-extrabold">EBITDA Margin</th>
                  <th className="py-4 px-4 font-extrabold">Portfolio Value</th>
                  <th className="py-4 px-4 font-extrabold">Health Status</th>
                  <th className="py-4 px-4 pr-6 text-right font-extrabold">Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? 'divide-slate-200' : 'divide-slate-800/40'}`}>
                {filteredBusinesses.map((b) => (
                  <tr
                    key={b.id}
                    onClick={() => setSelectedBusiness(b)}
                    className={`transition-colors cursor-pointer ${isLight ? 'hover:bg-slate-50/80 text-[#1F2937]' : 'hover:bg-[#1E293B]/60 text-slate-200'
                      }`}
                  >
                    <td className="py-4.5 lg:py-5 px-4 pl-6 font-bold flex items-center gap-3.5">
                      {b.image3dUrl ? (
                        <img src={b.image3dUrl} alt={b.name} className="w-12 h-12 rounded-xl object-cover border border-[#C9A227]/40 shadow-xs shrink-0" />
                      ) : (
                        <div className="p-2.5 rounded-xl bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30 shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                      )}
                      <span className="text-[#C9A227] text-sm lg:text-base font-black uppercase tracking-wider">{b.name}</span>
                    </td>
                    <td className={`py-4.5 lg:py-5 px-4 text-xs lg:text-sm font-semibold ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>{b.category}</td>
                    <td className={`py-4.5 lg:py-5 px-4 text-sm lg:text-base font-black ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>{b.revenue}</td>
                    <td className="py-4.5 lg:py-5 px-4 text-xs lg:text-sm font-black text-[#0E7C7B]">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 inline" /> ▲ {b.growth}
                      </span>
                    </td>
                    <td className="py-4.5 lg:py-5 px-4 text-xs lg:text-sm font-extrabold text-[#0E7C7B]">{b.ebitdaMargin || '21.5%'}</td>
                    <td className="py-4.5 lg:py-5 px-4 text-sm lg:text-base font-black text-[#B8860B] dark:text-[#F59E0B]">{b.portfolioValue || '₹ 5.2k Cr'}</td>
                    <td className="py-4.5 lg:py-5 px-4">
                      <StatusBadge status={b.status} size="md" />
                    </td>
                    <td className="py-4.5 lg:py-5 px-4 pr-6 text-right">
                      <span className="text-[#C9A227] text-xs lg:text-sm font-black uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                        <span>View</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <BusinessDetailModal business={selectedBusiness} onClose={() => setSelectedBusiness(null)} />
    </motion.div>
  );
};
