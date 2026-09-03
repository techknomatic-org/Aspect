import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Header } from '../components/dashboard/Header';
import { DashboardPage } from '../pages/DashboardPage';
import { EcosystemPage } from '../pages/EcosystemPage';
import { BusinessPortfolioPage } from '../pages/BusinessPortfolioPage';
import { PerformancePage } from '../pages/PerformancePage';
import { GlobalViewPage } from '../pages/GlobalViewPage';
import { RiskIntelligencePage } from '../pages/RiskIntelligencePage';
import { OpportunitiesPage } from '../pages/OpportunitiesPage';
import { ImpactESGPage } from '../pages/ImpactESGPage';
import { ReportsPage } from '../pages/ReportsPage';
import { AICopilotPage } from '../pages/AICopilotPage';
import { SettingsPage } from '../pages/SettingsPage';
import { BusinessExecutivePage } from '../pages/BusinessExecutivePage';
import { AISearchModal } from '../components/modals/AISearchModal';
import { NotificationDrawer } from '../components/modals/NotificationDrawer';
import { MessagesDrawer } from '../components/modals/MessagesDrawer';

export const DashboardLayout: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [activeBusinessId, setActiveBusinessId] = useState<string | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Modals state
  const [isAISearchOpen, setIsAISearchOpen] = useState(false);
  const [initialAISearchQuery, setInitialAISearchQuery] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  const handleNavigate = (path: string) => {
    if (path.startsWith('/business/')) {
      const bId = path.replace('/business/', '');
      setActiveBusinessId(bId);
      setCurrentPath(path);
    } else {
      setActiveBusinessId(null);
      setCurrentPath(path);
    }
  };

  const renderPageContent = () => {
    if (currentPath.startsWith('/business/') && activeBusinessId) {
      return (
        <BusinessExecutivePage
          businessId={activeBusinessId}
          onBack={() => handleNavigate('/dashboard')}
        />
      );
    }

    switch (currentPath) {
      case '/dashboard':
      case '/overview':
        return (
          <DashboardPage
            onNavigateBusiness={(bId) => handleNavigate(`/business/${bId}`)}
          />
        );
      case '/ecosystem':
        return (
          <EcosystemPage
            onSelectBusiness={(bId) => handleNavigate(`/business/${bId}`)}
          />
        );
      case '/businesses':
        return <BusinessPortfolioPage />;
      case '/performance':
        return <PerformancePage />;
      case '/global-view':
        return <GlobalViewPage />;
      case '/risk-intelligence':
        return <RiskIntelligencePage />;
      case '/opportunities':
        return <OpportunitiesPage />;
      case '/impact-esg':
        return <ImpactESGPage />;
      case '/reports':
        return <ReportsPage />;
      case '/ai-copilot':
        return <AICopilotPage />;
      case '/settings':
        return <SettingsPage />;
      default:
        return (
          <DashboardPage
            onNavigateBusiness={(bId) => handleNavigate(`/business/${bId}`)}
          />
        );
    }
  };

  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#EEF1F8] text-[#1F2937]' : 'bg-[#0B1426] bg-dot-pattern text-slate-100'
    }`}>
      {/* Header Bar */}
      <Header
        onOpenAISearch={(q) => {
          setInitialAISearchQuery(q || '');
          setIsAISearchOpen(true);
        }}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenMessages={() => setIsMessagesOpen(true)}
      />

      <div className="flex flex-1 pt-16">
        {/* Left Sidebar */}
        <Sidebar
          currentPath={currentPath}
          activePath={currentPath}
          onNavigate={handleNavigate}
          onSelectPath={handleNavigate}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Workspace */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
          }`}
        >
          {renderPageContent()}
        </main>
      </div>

      {/* Global Modals */}
      <AISearchModal
        isOpen={isAISearchOpen}
        initialQuery={initialAISearchQuery}
        onClose={() => setIsAISearchOpen(false)}
      />

      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      <MessagesDrawer
        isOpen={isMessagesOpen}
        onClose={() => setIsMessagesOpen(false)}
      />
    </div>
  );
};
