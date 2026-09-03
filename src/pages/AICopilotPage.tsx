import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AICopilotPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Welcome Alex. I am Aspect AI Executive Advisor. How can I assist your strategic decision-making today?' }
  ]);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const card = isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl';
  const innerCard = isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-[#0A1021] border-slate-800 text-slate-200';
  const textPrimary = isLight ? 'text-slate-900' : 'text-white';
  const textSec = isLight ? 'text-slate-500' : 'text-slate-400';
  const inputStyle = isLight
    ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-gold'
    : 'bg-[#0A1021] border-slate-700 text-white placeholder-slate-400 focus:border-gold';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const userText = query;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setQuery('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: `EXECUTIVE ANSWER: Aspect Global YTD Revenue is ₹ 24,852 Cr (+15.9% YoY). Primary growth is driven by Realty (+21.5%) and Energy (+18.4%). Critical focus is required on Infrastructure delayed projects in Maharashtra.` }
      ]);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 space-y-6 max-w-[1700px] mx-auto select-none"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-outfit font-extrabold tracking-widest text-gold uppercase">
            AI EXECUTIVE INTELLIGENCE ADVISOR
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${textPrimary}`}>
            ASPECT AI COPILOT WORKSPACE
          </h1>
        </div>
        <span className={`text-xs ${textSec}`}>Powered by Aspect Neural Intelligence</span>
      </div>

      <div className={`${card} border rounded-2xl p-6 flex flex-col justify-between min-h-[550px]`}>
        {/* Messages List */}
        <div className="space-y-4 overflow-y-auto max-h-[420px] pr-2">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex items-start gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.sender === 'ai' && (
                <div className="p-2 rounded-xl bg-gold/15 border border-gold/40 text-gold shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
              )}
              <div className={`p-4 rounded-2xl text-xs max-w-2xl leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-gold text-navy-950 font-bold rounded-tr-none'
                  : `${innerCard} rounded-tl-none border`
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="mt-6 flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask executive questions e.g. 'What is driving EBITDA growth?' or 'Compare Realty & Energy'..."
              className={`w-full border rounded-full px-5 py-3 text-xs focus:outline-none transition-colors ${inputStyle}`}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gold hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Query AI</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};
