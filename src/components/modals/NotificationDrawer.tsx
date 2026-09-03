import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, AlertTriangle, ShieldCheck, TrendingUp, Check } from 'lucide-react';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    { id: 1, title: 'Coastal Highway Schedule Alert', time: '12 mins ago', type: 'warning', text: 'Infrastructure project in Maharashtra reported 4-day delay.' },
    { id: 2, title: 'LBMA Gold Refinery Certification Passed', time: '45 mins ago', type: 'success', text: 'Bullion division achieved zero-emission accreditation.' },
    { id: 3, title: 'Realty Pre-Leasing Record', time: '2 hours ago', type: 'trend', text: 'Aspect Financial Tower reached 90% pre-committed occupancy.' },
    { id: 4, title: 'Board Meeting Scheduled', time: '3 hours ago', type: 'info', text: 'Q3 Board Audit review set for Sept 15, 10:00 AM.' },
    { id: 5, title: 'Solar Megapark Power Output', time: '5 hours ago', type: 'success', text: 'Rajasthan solar grid generated 4.8 GW peak output.' },
    { id: 6, title: 'Cybersecurity Audit Passed', time: '1 day ago', type: 'info', text: 'Command Center 256-bit encryption verified clean.' },
    { id: 7, title: 'Titans Sports Franchise Victory', time: '1 day ago', type: 'trend', text: 'Aspect Titans secured National Championship title.' },
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
          {/* Top Bar */}
          <div className="p-5 bg-[#101935] border-b border-navy-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-gold" />
              <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
                EXECUTIVE NOTIFICATIONS (7)
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            {notifications.map((n) => (
              <div
                key={n.id}
                className="p-3 rounded-xl bg-[#101935] border border-slate-800 hover:border-gold/30 transition-all"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                  <span>{n.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal">{n.time}</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-snug">{n.text}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-navy-950 border-t border-navy-800 flex justify-between items-center text-xs">
            <button onClick={() => alert("All marked as read")} className="text-gold hover:underline font-semibold">
              Mark all as read
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
