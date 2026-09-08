import React from 'react';
import {
  LayoutDashboard,
  Globe2,
  Building2,
  LineChart,
  Map,
  ShieldAlert,
  Lightbulb,
  Leaf,
  FileText,
  Sparkles,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'ecosystem', label: 'Ecosystem', icon: Globe2, path: '/ecosystem' },
  { id: 'businesses', label: 'Businesses', icon: Building2, path: '/businesses' },
  { id: 'performance', label: 'Performance', icon: LineChart, path: '/performance' },
  { id: 'global-view', label: 'Global View', icon: Map, path: '/global-view' },
  { id: 'risk-intelligence', label: 'Risk Intelligence', icon: ShieldAlert, path: '/risk-intelligence' },
  { id: 'opportunities', label: 'Opportunities', icon: Lightbulb, path: '/opportunities' },
  { id: 'impact-esg', label: 'Impact & ESG', icon: Leaf, path: '/impact-esg' },
  { id: 'reports', label: 'Reports', icon: FileText, path: '/reports' },
  { id: 'ai-copilot', label: 'AI Copilot', icon: Sparkles, path: '/ai-copilot' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
];

interface SidebarProps {
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
  currentPath?: string;
  activePath?: string;
  onNavigate?: (path: string) => void;
  onSelectPath?: (path: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  currentPath = '/dashboard',
  activePath,
  onNavigate,
  onSelectPath,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isLight = theme === 'light';

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const effectivePath = activePath || currentPath;

  const handleItemClick = (item: typeof NAV_ITEMS[0]) => {
    if (onNavigate) {
      onNavigate(item.path);
    } else if (onSelectPath) {
      onSelectPath(item.path);
    } else if (onSelectTab) {
      onSelectTab(item.id);
    }
  };

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-[linear-gradient(180deg,#291046_0%,#1a2444_45%,#084C42_100%)] border-r border-white/10 text-white shadow-2xl flex flex-col justify-between fixed left-0 top-16 h-[calc(100vh-64px)] z-40 select-none shrink-0 transition-all duration-300 ease-in-out font-sans`}
    >
      <div className="flex flex-col h-full overflow-hidden">
        {/* Toggle Minimize/Maximize Button Section */}
        {onToggleCollapse && (
          <div className={`p-2.5 px-3 flex items-center ${isCollapsed ? 'justify-center' : 'justify-end'} border-b border-white/10 bg-[#291046]/60 backdrop-blur-sm shrink-0`}>
            <button
              onClick={onToggleCollapse}
              className="p-1.5 rounded-lg border border-white/15 bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-sm hover:scale-105 flex items-center justify-center group"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4.5 h-4.5 text-white transition-transform group-hover:translate-x-0.5" />
              ) : (
                <ChevronLeft className="w-4.5 h-4.5 text-white transition-transform group-hover:-translate-x-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="p-3 space-y-1.5 overflow-y-auto flex-1 custom-scrollbar">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              effectivePath === item.path ||
              (activeTab && activeTab.toLowerCase() === item.id);

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'gap-3 px-3.5'} py-2.5 rounded-xl text-xs font-extrabold transition-all duration-150 cursor-pointer group ${
                  isActive
                    ? 'bg-white text-[#1F2937] border border-[#D10B2F] border-l-4 border-l-[#D10B2F] shadow-lg ring-1 ring-[#D10B2F]/30'
                    : 'bg-white/95 text-[#1F2937] border border-white/20 hover:bg-white hover:border-[#C9A227]/40 shadow-sm'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={`w-4.5 h-4.5 shrink-0 transition-colors ${
                  isActive 
                    ? 'text-[#D10B2F]' 
                    : 'text-[#475569] group-hover:text-[#084C42]'
                }`} />
                {!isCollapsed && (
                  <span className="truncate font-extrabold text-xs tracking-wider text-[#1F2937]">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Profile Section */}
        <div className="p-3 border-t border-white/10 bg-[#084C42]/70 backdrop-blur-sm shrink-0">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-2.5 rounded-xl bg-white/10 border border-white/15 shadow-lg transition-all`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'}
                alt={user?.name || 'Alex Morgan'}
                className="w-8 h-8 rounded-full object-cover border-2 border-[#D10B2F] shrink-0 shadow-md"
              />
              {!isCollapsed && (
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate text-white">
                    {user?.name || 'Alex Morgan'}
                  </div>
                  <div className="text-[10px] text-[#EFE9DC] truncate font-extrabold tracking-wider uppercase">
                    {user?.role || 'Group Executive'}
                  </div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button
                onClick={handleLogout}
                className="p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 text-white/60 hover:text-[#D10B2F] hover:bg-[#D10B2F]/20"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
