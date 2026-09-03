import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Bot, CheckCircle2, ArrowRight, CornerDownLeft } from 'lucide-react';
import { dashboardService } from '../../services/dashboardService';

interface AISearchModalProps {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
}

export const AISearchModal: React.FC<AISearchModalProps> = ({ isOpen, initialQuery = '', onClose }) => {
  const [query, setQuery] = useState(initialQuery);
  const [response, setResponse] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="bg-[#0B132B] border border-gold/40 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
        >
          {/* Top Bar */}
          <div className="p-4 bg-[#101935] border-b border-navy-700 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-sm tracking-wider uppercase">ASPECT AI COPILOT</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar Input */}
          <div className="p-4 bg-[#070D1B] border-b border-navy-800">
            <form onSubmit={handleFormSubmit} className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Aspect AI anything..."
                className="w-full pl-4 pr-12 py-3 bg-[#101935] border border-gold/30 rounded-xl text-sm text-white focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 rounded-lg bg-gold text-navy-950 hover:bg-gold-400 font-bold transition-colors cursor-pointer"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Response Container */}
          <div className="p-6 min-h-[220px] max-h-[60vh] overflow-y-auto">
            {isThinking ? (
              <div className="flex flex-col items-center justify-center py-10 text-slate-400 space-y-3">
                <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-semibold tracking-wider text-gold">
                  ANALYZING ASPECT ENTERPRISE DATA...
                </p>
              </div>
            ) : response ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-[#101935] p-4 rounded-xl border border-gold/30">
                  <div className="p-2 rounded-lg bg-gold/20 text-gold shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-1">
                      Aspect Executive Insight
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed">{response}</p>
                  </div>
                </div>

                {/* Quick Follow-ups */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
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
                        className="text-[11px] px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-gold border border-slate-700/60 transition-all cursor-pointer"
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
