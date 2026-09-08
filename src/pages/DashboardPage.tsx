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
import { useTheme } from '../context/ThemeContext';

interface DashboardPageProps {
  onNavigateBusiness?: (businessId: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigateBusiness }) => {
  const [overview, setOverview] = useState<DashboardOverview | null>(null);
  const [businesses, setBusinesses] = useState<EcosystemBusiness[]>([]);
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [bottomCards, setBottomCards] = useState<KPICardData[]>([]);

  const [selectedBusiness, setSelectedBusiness] = useState<EcosystemBusiness | null>(null);
  const [showAIInsights, setShowAIInsights] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

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

      // Default to Realty fixed on landing page
      const defaultRealty = b.find((item) => item.id === 'realty') || b[0] || null;
      setSelectedBusiness(defaultRealty);
    })();
  }, []);

  const handleSelectBusiness = (b: EcosystemBusiness) => {
    setSelectedBusiness(b);
    if (b.id === 'realty') {
      window.open('http://139.59.29.162:8089/', '_blank', 'noopener,noreferrer');
    }
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

  const activeBiz = selectedBusiness || businesses.find((b) => b.id === 'realty') || businesses[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-[calc(100vh-64px)] overflow-hidden p-3 lg:p-4 flex flex-col gap-3 select-none"
    >
      {/* ① TOP STRATEGIC KPI STRIP — 4 Cards */}
      <div className="shrink-0">
        <TopKPIRow overview={overview} />
      </div>

      {/* ② HERO GRID: 3D Ecosystem (Left) + Selected Industry / AI Insights Panel (Right) */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
        {/* Left — 3D Orbit Ecosystem (7 Cols) */}
        <div className="lg:col-span-7 h-full min-h-0">
          <EcosystemCanvas
            businesses={businesses}
            selectedBusinessId={activeBiz?.id}
            onSelectBusiness={handleSelectBusiness}
          />
        </div>

        {/* Right — Selected Industry KPI Panel (Expanded to 5 Cols) with AI Insights toggle */}
        <div className="lg:col-span-5 h-full min-h-0 flex flex-col">
          <AnimatePresence mode="wait">
            {showAIInsights ? (
              <motion.div
                key="ai-insights"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full min-h-0"
              >
                <AIInsightsPanel
                  insights={insights}
                  onViewAllClick={() => {
                    if (onNavigateBusiness) {
                      onNavigateBusiness('ai-copilot');
                    }
                  }}
                  onBackToBusiness={() => setShowAIInsights(false)}
                  businessName={activeBiz?.name}
                  onSelectInsight={(_ins: AIInsight) => { }}
                />
              </motion.div>
            ) : activeBiz ? (
              <motion.div
                key={`kpi-${activeBiz.id}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full min-h-0"
              >
                <BusinessKPIPanel
                  business={activeBiz}
                  onClose={() => setShowAIInsights(true)}
                  onOpenFullPage={handleOpenFullPage}
                  onToggleAIInsights={() => setShowAIInsights(true)}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* ③ ASPECT ONE AT A GLANCE — 4 Bottom Financial Cards */}
      <div className="shrink-0">
        <AspectGlanceRow cards={bottomCards} />
      </div>
    </motion.div>
  );
};
