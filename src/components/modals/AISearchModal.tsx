import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Bot, CornerDownLeft } from 'lucide-react';
import { dashboardService } from '../../services/dashboardService';
import { useTheme } from '../../context/ThemeContext';

interface AISearchModalProps {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
}

export const AISearchModal: React.FC<AISearchModalProps> = ({ isOpen, initialQuery = '', onClose }) => {
  const [query, setQuery] = useState(initialQuery);
  const [response, setResponse] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      if (initialQuery) {
        handleRunQuery(initialQuery);
      } else {
        handleRunQuery('Overview of group revenue and performance');
      }
    } else {
      setResponse(null);
    }
  }, [isOpen, initialQuery]);

  const handleRunQuery = async (q: string) => {
    setIsThinking(true);
    setResponse(null);
    const res = await dashboardService.queryAI(q);
    setResponse(res);
    setIsThinking(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleRunQuery(query);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md select-none font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className={`border rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl ${
            isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0B1426] border-[#C9A227]/40 text-slate-100'
          }`}
        >
          {/* Top Bar */}
          <div className={`p-4 border-b flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#131C2E] border-slate-800'
          }`}>
            <div className="flex items-center gap-2 text-[#C9A227]">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-sm tracking-wider uppercase">ASPECT AI COPILOT</span>
            </div>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                isLight ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar Input */}
          <div className={`p-4 border-b ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#070D1B] border-slate-800'}`}>
            <form onSubmit={handleFormSubmit} className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Aspect AI anything..."
                className={`w-full pl-4 pr-12 py-3 border rounded-xl text-sm focus:outline-none focus:border-[#C9A227] ${
                  isLight ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-[#131C2E] border-slate-700 text-white placeholder-slate-400'
                }`}
              />
              <button
                type="submit"
                className="absolute right-2 p-2 rounded-lg bg-[#C9A227] text-[#0B1426] hover:brightness-110 font-bold transition-colors cursor-pointer"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Response Container */}
          <div className="p-6 min-h-[220px] max-h-[60vh] overflow-y-auto">
            {isThinking ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-3">
                <div className="w-8 h-8 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-semibold tracking-wider text-[#C9A227]">
                  ANALYZING ASPECT ENTERPRISE DATA...
                </p>
              </div>
            ) : response ? (
              <div className="space-y-4">
                <div className={`flex items-start gap-3 p-4 rounded-xl border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#131C2E] border-[#C9A227]/30'
                }`}>
                  <div className="p-2 rounded-lg bg-[#C9A227]/20 text-[#C9A227] shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#C9A227] uppercase tracking-wider mb-1">
                      Aspect Executive Insight
                    </h4>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{response}</p>
                  </div>
                </div>

                {/* Quick Follow-ups */}
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Suggested Queries:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      'Revenue breakdown by business',
                      'Active alerts status summary',
                      'Energy renewables expansion',
                      'ESG sustainability score'
                    ].map((q, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setQuery(q);
                          handleRunQuery(q);
                        }}
                        className={`text-[11px] px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          isLight
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                            : 'bg-[#131C2E] hover:bg-[#1E293B] text-slate-300 hover:text-[#C9A227] border-slate-700/60'
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
