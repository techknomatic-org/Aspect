import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const SettingsPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const card = isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl';
  const innerCard = isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A1021] border-slate-800';
  const textPrimary = isLight ? 'text-slate-900' : 'text-white';
  const textSec = isLight ? 'text-slate-500' : 'text-slate-400';
  const divider = isLight ? 'border-slate-200' : 'border-slate-800';

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
            EXECUTIVE COMMAND PREFERENCES
          </span>
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${textPrimary}`}>
            SETTINGS & SECURITY CONFIGURATION
          </h1>
        </div>
        <span className={`text-xs ${textSec}`}>Security Tier: Level 5 Executive Encryption</span>
      </div>

      <div className={`${card} border rounded-2xl p-6 space-y-6`}>
        <div className="space-y-4">
          <h3 className={`text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-2 border-b ${divider}`}>
            Authentication & Security Protocols
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className={`p-4 rounded-xl border flex items-center justify-between ${innerCard}`}>
              <div>
                <span className={`font-bold block ${textPrimary}`}>Multi-Factor Authentication (MFA)</span>
                <span className={`text-[10px] ${textSec}`}>Hardware token & Biometric passkey active</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-400 font-extrabold text-[10px] border border-emerald-500/40">ENABLED</span>
            </div>

            <div className={`p-4 rounded-xl border flex items-center justify-between ${innerCard}`}>
              <div>
                <span className={`font-bold block ${textPrimary}`}>Restricted Executive Session Timeout</span>
                <span className={`text-[10px] ${textSec}`}>Automatic logout after 15 mins inactivity</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-teal-950/60 text-teal-400 font-extrabold text-[10px] border border-teal-500/40">15 MINS</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h3 className={`text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-2 border-b ${divider}`}>
            Data Stream & API Feeds
          </h3>
          <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${innerCard}`}>
            <div>
              <span className={`font-bold block ${textPrimary}`}>Aspect Global ERP & Treasury REST API Synchronization</span>
              <span className={`text-[10px] ${textSec}`}>Sync Frequency: Live 10-second polling feed</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-400 font-extrabold text-[10px] border border-emerald-500/40">CONNECTED</span>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h3 className={`text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-2 border-b ${divider}`}>
            Appearance
          </h3>
          <div className={`p-4 rounded-xl border flex items-center justify-between text-xs ${innerCard}`}>
            <div>
              <span className={`font-bold block ${textPrimary}`}>Application Theme</span>
              <span className={`text-[10px] ${textSec}`}>Currently using: {isLight ? 'Light Mode' : 'Dark Mode'}</span>
            </div>
            <span className={`px-2.5 py-1 rounded font-extrabold text-[10px] border ${
              isLight ? 'bg-sky-50 text-sky-600 border-sky-200' : 'bg-indigo-950/60 text-indigo-300 border-indigo-500/40'
            }`}>
              {isLight ? 'LIGHT' : 'DARK'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
