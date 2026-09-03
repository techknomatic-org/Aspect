import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

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
          {/* Top Bar */}
          <div className={`p-5 border-b flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#131C2E] border-slate-800'
          }`}>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#C9A227]" />
              <h3 className={`font-bold text-sm uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-white'}`}>
                EXECUTIVE NOTIFICATIONS (7)
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

          {/* Items */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-3.5 rounded-xl border transition-all ${
                  isLight ? 'bg-slate-50 border-slate-200 hover:border-[#C9A227]' : 'bg-[#131C2E] border-slate-800 hover:border-[#C9A227]/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className={isLight ? 'text-slate-900' : 'text-slate-200'}>{n.title}</span>
                  <span className={`text-[10px] font-normal ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{n.time}</span>
                </div>
                <p className={`text-xs mt-1 leading-snug ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{n.text}</p>
              </div>
            ))}
          </div>

          <div className={`p-4 border-t flex justify-between items-center text-xs ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#070D1A] border-slate-800'
          }`}>
            <button onClick={() => alert("All marked as read")} className="text-[#C9A227] hover:underline font-semibold cursor-pointer">
              Mark all as read
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
