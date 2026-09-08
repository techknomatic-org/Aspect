import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';

export const AICopilotPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Welcome Alex. I am Aspect AI Executive Advisor. How can I assist your strategic decision-making today across our 9 business verticals?'
    }
  ]);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const suggestedQueries = [
    'What is driving EBITDA margin growth in Energy vs Realty?',
    'Explain the ₹ 420 Cr risk on the Coastal Expressway project.',
    'Summarize Q3 capital expenditure deployment schedule.',
    'Compare top 3 value-creation expansion opportunities.',
    'Audit LBMA bullion inventory reconciliation & vault variances.',
    'Review ESG carbon offset generation and 2030 net-zero targets.',
  ];

  const handleSend = (textToSend?: string) => {
    const q = textToSend || query;
    if (!q.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: q }]);
    if (!textToSend) setQuery('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `EXECUTIVE SYNTHESIS: Aspect Global YTD Revenue stands at ₹ 24.9k Cr (+15.9% YoY). Top portfolio growth drivers are Realty (+21.5% YoY) and Energy (+18.4% YoY). Recommended capital priority is authorizing capital allocation for the Rajasthan Solar Megapark Phase III expansion to unlock ₹ 3,100 Cr top-line acceleration.`
        }
      ]);
    }, 450);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-3.5 lg:p-5 space-y-4 lg:space-y-4.5 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="AI EXECUTIVE INTELLIGENCE ADVISOR"
        title="ASPECT AI COPILOT WORKSPACE"
        subtitle="Multi-modal neural assistant for cross-vertical portfolio queries and predictive scenario modeling"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#B8860B] dark:text-[#F59E0B]">
            Aspect Neural Engine Active
          </span>
        }
      />

      {/* Main 12-Col Grid: 8-Col Chat Stream + 4-Col Prompt Starters & Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
        {/* Left 8 Cols: Chat Conversation Stream */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <Card
            title="NEURAL ADVISORY STREAM"
            subtitle="Real-time multi-entity query engine with audited ERP intelligence"
            className="flex flex-col justify-between h-full rounded-2xl shadow-sm space-y-4"
          >
            {/* Messages List with full vertical height */}
            <div className="space-y-4 flex-1 min-h-[460px] max-h-[560px] overflow-y-auto pr-2">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="p-3.5 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] shrink-0 shadow-xs">
                      <Bot className="w-6 h-6" />
                    </div>
                  )}
                  <div
                    className={`p-4.5 rounded-2xl text-sm lg:text-base max-w-2xl leading-relaxed ${m.sender === 'user'
                        ? 'bg-[#0E7C7B] text-white font-bold rounded-tr-none shadow-xs'
                        : isLight
                          ? 'bg-slate-50 border border-slate-300 text-[#1F2937] font-semibold rounded-tl-none shadow-2xs'
                          : 'bg-[#0B1426] border border-slate-800 text-slate-200 rounded-tl-none'
                      }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form Bar */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="pt-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask strategic questions e.g. 'What is driving EBITDA growth?' or 'Compare Realty & Energy'..."
                  className={`w-full border rounded-xl px-4.5 py-3.5 text-sm lg:text-base font-semibold focus:outline-none focus:border-[#C9A227] ${isLight
                      ? 'bg-slate-50 border-slate-300 text-[#1F2937] placeholder-slate-400'
                      : 'bg-[#0B1426] border-slate-700 text-white placeholder-slate-400'
                    }`}
                />
              </div>
              <button
                type="submit"
                className="px-5.5 py-3.5 rounded-xl bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-black text-xs lg:text-sm uppercase tracking-wider shadow-xs transition-all flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Query</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </Card>
        </div>

        {/* Right 4 Cols: Executive Prompt Starters */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <Card
            title="EXECUTIVE PROMPT STARTERS"
            subtitle="Pre-configured multi-entity C-Suite analytical queries"
            className="flex flex-col justify-between h-full rounded-2xl shadow-sm space-y-4"
          >
            <div className="space-y-2.5 flex-1 flex flex-col justify-between">
              {suggestedQueries.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className={`w-full text-left p-3 lg:p-3.5 rounded-2xl border text-xs lg:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between gap-3 group ${isLight
                      ? 'bg-white hover:bg-amber-50/60 border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                      : 'bg-[#0B1426] hover:bg-[#1A243B] border-slate-800 hover:border-[#C9A227]/40 text-slate-200'
                    }`}
                >
                  <span className="leading-snug">{prompt}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            <div className={`p-4 rounded-2xl border text-xs lg:text-sm font-medium leading-relaxed mt-2 ${isLight ? 'bg-amber-50/60 border-amber-200 text-amber-950' : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
              }`}>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <strong className="font-black text-xs lg:text-sm uppercase block text-[#C9A227]">Audited Telemetry Engine:</strong>
              </div>
              Aspect Copilot synthesizes real-time data directly from audited ERP telemetry feeds and LBMA records across all 9 business verticals.
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
