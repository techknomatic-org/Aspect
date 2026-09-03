import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const RiskIntelligencePage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const riskCategories = [
    { title: 'CRITICAL RISKS', count: 3, color: 'text-rose-500', bg: isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-950/70 border-rose-500/50', desc: 'Requires immediate CEO Steering Committee intervention' },
    { title: 'HIGH PRIORITY', count: 12, color: 'text-amber-500', bg: isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-950/70 border-amber-500/50', desc: 'SLA delay and operational variance tracking' },
    { title: 'MONITORING', count: 113, color: isLight ? 'text-slate-700' : 'text-slate-300', bg: isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-800/80 border-slate-700', desc: 'Routine telemetry & compliance audits' },
  ];

  const activeAlerts = [
    { id: '1', division: 'INFRASTRUCTURE', issue: 'Coastal Expressway Maharashtra delayed by 45 days', impact: '₹ 420 Cr delay penalty risk in Q4', status: 'Critical', action: 'CEO Steering Committee meeting convened' },
    { id: '2', division: 'BULLION & REFINERY', issue: 'Vault 4 gold batch weight reconciliation variance', impact: 'LBMA Audit delay exposure', status: 'Attention', action: 'Chief Auditor dispatched to Gujarat' },
    { id: '3', division: 'HOSPITALITY', issue: 'Heritage resort RevPAR compressed by ₹ 1,400', impact: 'Margin compressed by 2.1%', status: 'Watch', action: 'Concierge marketing restructuring' },
    { id: '4', division: 'INDUSTRIES', issue: 'Aerospace component raw titanium import delay', impact: 'Delivery delay risk 10 days', status: 'Attention', action: 'Alternative supplier engaged in Singapore' },
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
            EXECUTIVE RISK TELEMETRY
          </span>
          <h1 className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            EXECUTIVE RISK INTELLIGENCE MATRIX
          </h1>
        </div>
        <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
          128 Active Alerts (-33% YoY)
        </span>
      </div>

      {/* Risk Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {riskCategories.map((cat, idx) => (
          <div key={idx} className={`p-5 rounded-2xl border ${cat.bg} flex items-center justify-between`}>
            <div>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{cat.title}</span>
              <span className={`text-3xl font-extrabold block mt-1 ${cat.color}`}>{cat.count} Issues</span>
              <p className={`text-[11px] mt-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{cat.desc}</p>
            </div>
            <ShieldAlert className={`w-10 h-10 ${cat.color} opacity-80`} />
          </div>
        ))}
      </div>

      {/* Active Exceptions List */}
      <div className={`${
        isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
      } border rounded-2xl p-6`}>
        <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider pb-3 border-b border-slate-700/50">
          PRIORITY EXCEPTION MATRIX
        </h3>
        <div className="space-y-3 mt-4">
          {activeAlerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-[#0B1426] border-slate-800 text-slate-100'
            }`}>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#C9A227] uppercase">{alert.division}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    alert.status === 'Critical' ? 'bg-rose-500/15 text-rose-500 border border-rose-500/30' : 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                  }`}>
                    {alert.status}
                  </span>
                </div>
                <h4 className={`text-sm font-bold mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>{alert.issue}</h4>
                <p className={`text-[11px] mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  <strong>Financial Exposure:</strong> <span className="text-rose-500 font-semibold">{alert.impact}</span>
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className={`text-[10px] block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Recommended Action</span>
                <span className="text-xs font-bold text-[#0E7C7B] flex items-center gap-1">
                  <span>{alert.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
