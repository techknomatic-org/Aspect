import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopKPIRow } from '../components/dashboard/TopKPIRow';
import { EcosystemCanvas } from '../components/ecosystem/EcosystemCanvas';
import { AIInsightsPanel } from '../components/dashboard/AIInsightsPanel';
import { BusinessKPIPanel } from '../components/dashboard/BusinessKPIPanel';
import { AspectGlanceRow } from '../components/dashboard/AspectGlanceRow';

import { dashboardService } from '../services/dashboardService';
import { ecosystemService } from '../services/ecosystemService';
import { DashboardOverview, EcosystemBusiness, AIInsight, KPICardData } from '../types';

interface DashboardPageProps {
  onNavigateBusiness?: (businessId: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigateBusiness }) => {
  const [overview, setOverview] = useState<DashboardOverview | null>(null);
  const [businesses, setBusinesses] = useState<EcosystemBusiness[]>([]);
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [bottomCards, setBottomCards] = useState<KPICardData[]>([]);

  // Which business world was clicked on the 3D map
  const [selectedBusiness, setSelectedBusiness] = useState<EcosystemBusiness | null>(null);

  useEffect(() => {
    (async () => {
      const [ov, b, ins, bot] = await Promise.all([
        dashboardService.getOverview(),
        ecosystemService.getAllBusinesses(),
        dashboardService.getAIInsights(),
        dashboardService.getBottomKPIs(),
      ]);
      setOverview(ov);
      setBusinesses(b);
      setInsights(ins);
      setBottomCards(bot);
    })();
  }, []);

  const handleSelectBusiness = (b: EcosystemBusiness) => {
    setSelectedBusiness(b);
  };

  const handleOpenFullPage = (businessId: string) => {
    if (onNavigateBusiness) {
      onNavigateBusiness(businessId);
    }
  };

  if (!overview) {
    return (
      <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center text-slate-400">
        <div className="w-8 h-8 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase">
          Loading Executive Command Center…
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-[calc(100vh-64px)] overflow-hidden p-4 lg:p-5 flex flex-col justify-between gap-4 select-none"
    >
      {/* ① TOP STRATEGIC KPI STRIP — 4 Cards (Fixed height 108px) */}
      <div className="shrink-0">
        <TopKPIRow overview={overview} />
      </div>

      {/* ② HERO GRID: 3D Ecosystem (Left) + AI Insights Panel (Right) (Flex 1 remaining height) */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
        {/* Left — 3D Orbit Ecosystem (8 Cols) */}
        <div className="lg:col-span-8 h-full min-h-0">
          <EcosystemCanvas
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
          />
        </div>

        {/* Right — AI Insights Panel / Business KPI Panel (4 Cols) */}
        <div className="lg:col-span-4 h-full min-h-0 flex flex-col">
          <AnimatePresence mode="wait">
            {selectedBusiness ? (
              <motion.div
                key={`kpi-${selectedBusiness.id}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full min-h-0"
              >
                <BusinessKPIPanel
                  business={selectedBusiness}
                  onClose={() => setSelectedBusiness(null)}
                  onOpenFullPage={handleOpenFullPage}
                />
              </motion.div>
            ) : (
              <motion.div
                key="ai-insights"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full min-h-0"
              >
                <AIInsightsPanel
                  insights={insights}
                  onViewAllClick={() => { }}
                  onSelectInsight={(_ins: AIInsight) => { }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ③ ASPECT ONE AT A GLANCE — 4 Bottom Financial Cards (Fixed height 108px) */}
      <div className="shrink-0">
        <AspectGlanceRow cards={bottomCards} />
      </div>
    </motion.div>
  );
};
