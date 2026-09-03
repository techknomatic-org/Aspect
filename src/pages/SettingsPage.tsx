import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, Bell, Lock, Key, Database } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SettingsPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

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
          <h1 className={`text-2xl font-outfit font-extrabold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>
            SETTINGS & SECURITY CONFIGURATION
          </h1>
        </div>
        <span className="text-xs text-slate-400">Security Tier: Level 5 Executive Encryption</span>
      </div>

      <div className={`${
        isLight ? 'bg-white border-slate-200 shadow-sm text-slate-800' : 'bg-[#0E172E]/90 border-navy-700/60 shadow-xl text-slate-100'
      } border rounded-2xl p-6 space-y-6`}>
        <div className="space-y-4">
          <h3 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-2 border-b border-slate-800">
            Authentication & Security Protocols
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#0A1021] border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Multi-Factor Authentication (MFA)</span>
                <span className="text-[10px] text-slate-400">Hardware token & Biometric passkey active</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-extrabold text-[10px]">ENABLED</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0A1021] border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Restricted Executive Session Timeout</span>
                <span className="text-[10px] text-slate-400">Automatic logout after 15 mins inactivity</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-teal-950 text-teal-300 font-extrabold text-[10px]">15 MINS</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-outfit font-extrabold text-gold uppercase tracking-wider pb-2 border-b border-slate-800">
            Data Stream & API Feeds
          </h3>
          <div className="p-4 rounded-xl bg-[#0A1021] border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-white block">Aspect Global ERP & Treasury REST API Synchronization</span>
              <span className="text-[10px] text-slate-400">Sync Frequency: Live 10-second polling feed</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-extrabold text-[10px]">CONNECTED</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
