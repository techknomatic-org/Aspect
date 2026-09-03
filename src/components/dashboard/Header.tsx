import React, { useState } from 'react';
import { Sparkles, Mic, Bell, Mail, Maximize2, Minimize2, ArrowRight, PanelLeftClose, PanelLeftOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { AspectLogo } from '../common/AspectLogo';

interface HeaderProps {
  onOpenAISearch: (initialQuery?: string) => void;
  onOpenNotifications: () => void;
  onOpenMessages: () => void;
  isSidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAISearch,
  onOpenNotifications,
  onOpenMessages,
  isSidebarCollapsed = false,
  onToggleSidebar,
}) => {
  const [query, setQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onOpenAISearch(query);
      setQuery('');
    } else {
      onOpenAISearch();
    }
  };

  return (
    <header className={`h-16 border-b px-6 flex items-center justify-between gap-4 fixed left-0 right-0 w-full top-0 z-50 select-none transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-white/95 border-slate-300 text-[#1F2937] backdrop-blur-md shadow-sm'
        : 'bg-[#0B1426]/95 border-white/10 text-slate-100 backdrop-blur-md'
    }`}>
      {/* Left Area: Logo */}
      <div className="flex items-center gap-3 shrink-0">
        <a href="/dashboard" className="flex items-center gap-2">
          <AspectLogo isLight={theme === 'light'} showText={true} size="sm" />
        </a>
      </div>

      {/* Center Area: Centered Search Bar */}
      <div className="flex-1 max-w-2xl mx-auto px-4">
        <form
          onSubmit={handleSearchSubmit}
          className="w-full relative group"
        >
          <div className={`relative flex items-center border rounded-full px-4 py-2 shadow-inner transition-all ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300 group-hover:border-[#C9A227]/60'
              : 'bg-[#172033] border-[#C9A227]/40 group-hover:border-[#C9A227]'
          }`}>
            <Sparkles className="w-4 h-4 text-[#C9A227] shrink-0 animate-pulse" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask Aspect AI anything about the business..."
              className={`w-full bg-transparent px-3 text-sm focus:outline-none ${
                theme === 'light' ? 'text-[#1F2937] placeholder-[#6B7280]' : 'text-white placeholder-[#94A3B8]'
              }`}
            />
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => alert("Aspect Voice Assistant listening...")}
                className="p-1 rounded-full text-[#94A3B8] hover:text-[#C9A227] transition-colors"
                title="Voice Assistant"
              >
                <Mic className="w-4 h-4" />
              </button>
              <button
                type="submit"
                className="w-7 h-7 rounded-full bg-[#C9A227] flex items-center justify-center text-[#0B1426] hover:brightness-110 shadow-md transition-all cursor-pointer"
                title="Query Aspect AI"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right Utility Icons */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Theme Switcher Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2.5 rounded-full border transition-all cursor-pointer ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200'
              : 'bg-[#172033] border-white/10 text-[#C9A227] hover:text-white hover:border-[#C9A227]/50'
          }`}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-[#C9A227]" /> : <Moon className="w-4 h-4 text-[#1F2937]" />}
        </button>

        {/* Notifications Icon */}
        <button
          onClick={onOpenNotifications}
          className={`relative p-2.5 rounded-full border transition-all cursor-pointer ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300 text-[#1F2937] hover:bg-slate-200'
              : 'bg-[#172033] border-white/10 text-[#94A3B8] hover:text-white hover:border-[#C9A227]/50'
          }`}
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E61C40] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            7
          </span>
        </button>

        {/* Messages Icon */}
        <button
          onClick={onOpenMessages}
          className={`relative p-2.5 rounded-full border transition-all cursor-pointer ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300 text-[#1F2937] hover:bg-slate-200'
              : 'bg-[#172033] border-white/10 text-[#94A3B8] hover:text-white hover:border-[#C9A227]/50'
          }`}
          title="Messages"
        >
          <Mail className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E61C40] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            3
          </span>
        </button>

        {/* Fullscreen Expand Icon */}
        <button
          onClick={toggleFullscreen}
          className={`p-2.5 rounded-full border transition-all cursor-pointer ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300 text-[#1F2937] hover:bg-slate-200'
              : 'bg-[#172033] border-white/10 text-[#94A3B8] hover:text-white hover:border-[#C9A227]/50'
          }`}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
