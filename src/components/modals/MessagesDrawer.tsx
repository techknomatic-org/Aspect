import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface MessagesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MessagesDrawer: React.FC<MessagesDrawerProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const messages = [
    { id: 1, sender: 'Sarah Jenkins', role: 'Head of Infrastructure', time: '10:14 AM', preview: 'Updated risk mitigation report for Coastal Expressway is ready for your review.' },
    { id: 2, sender: 'Vikram Mehta', role: 'Managing Director, Energy', time: '09:42 AM', preview: 'Solar Phase III expansion term sheet signed with international banking syndicate.' },
    { id: 3, sender: 'Elena Rostova', role: 'Chief ESG Officer', time: 'Yesterday', preview: 'Annual Sustainability & Carbon Offset audit summary completed with AAA grade.' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm select-none font-sans">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`w-full max-w-md border-l flex flex-col justify-between shadow-2xl h-full ${
            isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0B1426] border-slate-800 text-slate-100'
          }`}
        >
          <div className={`p-5 border-b flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#131C2E] border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#C9A227]" />
              <h3 className={`font-bold text-sm uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
                EXECUTIVE MESSAGES (3)
              </h3>
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

          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                onClick={() => alert(`Opening conversation with ${m.sender}`)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${
                  isLight ? 'bg-slate-50 border-slate-200 hover:border-[#C9A227]' : 'bg-[#131C2E] border-slate-800 hover:border-[#C9A227]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-xs group-hover:text-[#C9A227] ${isLight ? 'text-slate-900' : 'text-white'}`}>{m.sender}</span>
                  <span className={`text-[10px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{m.time}</span>
                </div>
                <div className="text-[10px] text-[#C9A227] font-semibold mt-0.5">{m.role}</div>
                <p className={`text-xs mt-2 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{m.preview}</p>
              </div>
            ))}
          </div>

          <div className={`p-4 border-t flex justify-between items-center text-xs ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#070D1A] border-slate-800'
          }`}>
            <button onClick={() => alert("Compose new message")} className="px-4 py-2 bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-bold rounded-lg flex items-center gap-1.5 cursor-pointer">
              <Send className="w-3.5 h-3.5" />
              <span>Compose</span>
            </button>
            <button onClick={onClose} className={`px-4 py-2 rounded-lg font-bold cursor-pointer ${
              isLight ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' : 'bg-[#172033] text-white hover:bg-slate-700'
            }`}>
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
