import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, UserCheck } from 'lucide-react';

interface MessagesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MessagesDrawer: React.FC<MessagesDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const messages = [
    { id: 1, sender: 'Sarah Jenkins', role: 'Head of Infrastructure', time: '10:14 AM', preview: 'Updated risk mitigation report for Coastal Expressway is ready for your review.' },
    { id: 2, sender: 'Vikram Mehta', role: 'Managing Director, Energy', time: '09:42 AM', preview: 'Solar Phase III expansion term sheet signed with international banking syndicate.' },
    { id: 3, sender: 'Elena Rostova', role: 'Chief ESG Officer', time: 'Yesterday', preview: 'Annual Sustainability & Carbon Offset audit summary completed with AAA grade.' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm select-none">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md bg-[#0B132B] border-l border-gold/30 h-full flex flex-col justify-between shadow-2xl"
        >
          <div className="p-5 bg-[#101935] border-b border-navy-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gold" />
              <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
                EXECUTIVE MESSAGES (3)
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                onClick={() => alert(`Opening conversation with ${m.sender}`)}
                className="p-3.5 rounded-xl bg-[#101935] border border-slate-800 hover:border-gold/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-white group-hover:text-gold">{m.sender}</span>
                  <span className="text-[10px] text-slate-400">{m.time}</span>
                </div>
                <div className="text-[10px] text-gold font-semibold mt-0.5">{m.role}</div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{m.preview}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-navy-950 border-t border-navy-800 flex justify-between items-center text-xs">
            <button onClick={() => alert("Compose new message")} className="px-4 py-2 bg-gold hover:bg-gold-400 text-navy-950 font-bold rounded-lg flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5" />
              <span>Compose</span>
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-navy-800 rounded-lg text-white font-bold">
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
