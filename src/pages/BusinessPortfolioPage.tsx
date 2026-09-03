import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, Search, Building2 } from 'lucide-react';
import { EcosystemBusiness } from '../types';
import { ecosystemService } from '../services/ecosystemService';
import { BusinessDetailModal } from '../components/modals/BusinessDetailModal';
import { useTheme } from '../context/ThemeContext';

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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none font-sans"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase">PORTFOLIO TELEMETRY</span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            BUSINESS PORTFOLIO MATRIX
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
            isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#0A1021] border-slate-700 text-slate-100'
          }`}>
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search business..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-xs focus:outline-none placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className={isLight ? 'text-slate-500' : 'text-slate-400'}>Sort by:</span>
            <button
              onClick={() => handleSort('revenue')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                sortBy === 'revenue' ? 'bg-[#C9A227] text-[#0B1426] border-[#C9A227]' : isLight ? 'bg-white text-slate-700 border-slate-200' : 'bg-[#172033] text-slate-300 border-slate-700'
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => handleSort('growth')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                sortBy === 'growth' ? 'bg-[#C9A227] text-[#0B1426] border-[#C9A227]' : isLight ? 'bg-white text-slate-700 border-slate-200' : 'bg-[#172033] text-slate-300 border-slate-700'
              }`}
            >
              Growth
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Table */}
      <div className={`${
        isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131C2E] border-slate-800 shadow-xl'
      } border rounded-2xl overflow-hidden`}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b text-[10px] uppercase tracking-wider font-bold ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-[#0B1426] border-slate-800 text-slate-400'
            }`}>
              <th className="p-4">Business Name</th>
              <th className="p-4">Category</th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('revenue')}>
                <div className="flex items-center gap-1">YTD Revenue <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort('growth')}>
                <div className="flex items-center gap-1">YoY Growth <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="p-4">EBITDA Margin</th>
              <th className="p-4">Portfolio Value</th>
              <th className="p-4">Health Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className={`divide-y text-xs ${isLight ? 'divide-slate-200' : 'divide-slate-800/40'}`}>
            {filteredBusinesses.map((b) => (
              <tr
                key={b.id}
                onClick={() => setSelectedBusiness(b)}
                className={`transition-colors cursor-pointer ${
                  isLight ? 'hover:bg-slate-50 text-slate-800' : 'hover:bg-[#1E293B]/60 text-slate-200'
                }`}
              >
                <td className="p-4 font-bold flex items-center gap-3">
                  {b.image3dUrl ? (
                    <img src={b.image3dUrl} alt={b.name} className="w-8 h-8 rounded-lg object-cover border border-[#C9A227]/40" />
                  ) : (
                    <div className="p-1.5 rounded-lg bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30">
                      <Building2 className="w-4 h-4" />
                    </div>
                  )}
                  <span className="text-[#C9A227] font-bold uppercase">{b.name}</span>
                </td>
                <td className={isLight ? 'p-4 text-slate-500' : 'p-4 text-slate-400'}>{b.category}</td>
                <td className={`p-4 font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{b.revenue}</td>
                <td className="p-4 font-bold text-[#0E7C7B]">▲ {b.growth}</td>
                <td className="p-4 text-[#0E7C7B] font-semibold">{b.ebitdaMargin || '21.5%'}</td>
                <td className="p-4 font-bold text-[#C9A227]">{b.portfolioValue || '₹ 5,200 Cr'}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                    b.status === 'Healthy' ? 'bg-[#0E7C7B]/15 text-[#0E7C7B] border border-[#0E7C7B]/30' :
                    b.status === 'Warning' ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30' :
                    'bg-rose-500/15 text-rose-500 border border-rose-500/30'
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <span className="text-[#C9A227] text-[11px] font-bold hover:underline">View Detail →</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BusinessDetailModal business={selectedBusiness} onClose={() => setSelectedBusiness(null)} />
    </motion.div>
  );
};
