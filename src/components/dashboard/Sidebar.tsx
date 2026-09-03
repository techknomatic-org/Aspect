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
  PanelLeftClose,
  PanelLeftOpen
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
      } ${
        isLight
          ? 'bg-white border-slate-300 text-[#1F2937] shadow-sm'
          : 'bg-[#0B1426] border-white/10 text-slate-100 shadow-2xl'
      } border-r flex flex-col justify-between fixed left-0 top-16 h-[calc(100vh-64px)] z-40 select-none shrink-0 transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full overflow-hidden">
        {/* Toggle Minimize/Maximize Button Section */}
        {onToggleCollapse && (
          <div className={`p-3 flex items-center ${isCollapsed ? 'justify-center' : 'justify-end'} border-b shrink-0 ${
            isLight ? 'border-slate-200 bg-[#F8FAFC]' : 'border-white/5'
          }`}>
            <button
              onClick={onToggleCollapse}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isLight
                  ? 'text-slate-600 hover:text-[#1F2937] hover:bg-slate-200'
                  : 'text-[#94A3B8] hover:text-[#C9A227] hover:bg-[#172033]'
              }`}
              title={isCollapsed ? "Maximize Sidebar" : "Minimize Sidebar"}
            >
              {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="p-3 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              effectivePath === item.path ||
              (activeTab && activeTab.toLowerCase() === item.id);

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'gap-3 px-3.5'} py-2.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-slate-200 text-[#1F2937] border-l-4 border-l-[#C9A227] shadow-sm'
                      : 'bg-[#172033] text-[#C9A227] border-l-4 border-l-[#C9A227] shadow-sm'
                    : isLight
                    ? 'text-slate-600 hover:text-[#1F2937] hover:bg-slate-100 border-l-4 border-transparent'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#172033]/60 border-l-4 border-transparent'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? (isLight ? 'text-[#1F2937]' : 'text-[#C9A227]') : ''}`} />
                {!isCollapsed && (
                  <span className="truncate tracking-wider uppercase font-semibold">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Profile Section */}
        <div className={`p-3 border-t shrink-0 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} p-2 rounded-xl ${
            isLight ? 'bg-slate-100 border border-slate-200' : 'bg-[#24345C]/60'
          }`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'}
                alt={user?.name || 'Alex Morgan'}
                className="w-8 h-8 rounded-full object-cover border border-[#C9A227]/60 shrink-0"
              />
              {!isCollapsed && (
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                    {user?.name || 'Alex Morgan'}
                  </div>
                  <div className="text-[10px] text-[#C9A227] truncate font-medium">{user?.role || 'Group Executive'}</div>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button
                onClick={handleLogout}
                className={`p-1.5 transition-colors cursor-pointer shrink-0 ${
                  isLight ? 'text-slate-500 hover:text-[#C1502E]' : 'text-[#94A3B8] hover:text-[#C1502E]'
                }`}
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
