import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Bell, Database, Lock, Radio, UserCheck, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';

export const SettingsPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const authProtocols = [
    { title: 'Multi-Factor Authentication (MFA)', desc: 'Hardware security key & biometric passkey active across C-Suite sessions', status: 'ENABLED', color: 'teal' },
    { title: 'Executive Session Activity Timeout', desc: 'Automatic session cryptographic lock after 15 minutes of idle time', status: '15 MINS', color: 'teal' },
    { title: 'Role-Based Access Control (RBAC)', desc: 'Full C-Suite Executive Level Tier 1 clearance with multi-entity signoff authority', status: 'TIER 1 CEO', color: 'gold' },
    { title: 'Cryptographic Key Lifecycle & HSM', desc: 'Quantum-resistant elliptic curve hardware security module keychain active', status: 'HARDWARE HSM', color: 'teal' },
    { title: 'Audit Trail & Immutable Governance Log', desc: 'Continuous tamper-proof ledger tracking all executive queries and exports', status: 'IMMUTABLE', color: 'gold' },
  ];

  const dataStreams = [
    { title: 'Aspect ERP & Treasury API Synchronization', desc: 'Live 10-second polling financial telemetry feed with TLS 1.3 end-to-end encryption', status: 'CONNECTED', color: 'teal' },
    { title: 'Automated Daily Board Summary Dispatch', desc: 'Synthesized daily executive intelligence report generated at 06:00 IST', status: 'SCHEDULED', color: 'gold' },
    { title: 'Regulatory Compliance Archive Mirror', desc: 'Automated statutory documentation backup to air-gapped secure cold vault', status: 'ENCRYPTED', color: 'teal' },
    { title: 'Geospatial & Telemetry Map Feeds', desc: 'Sub-second international logistics, asset telemetry, and plant telemetry polling', status: 'ACTIVE 99.9%', color: 'teal' },
    { title: 'AI Copilot Enterprise Privacy Sandbox', desc: 'Zero-data retention sandbox with SOC-2 Type II enterprise compliance active', status: 'ZERO RETENTION', color: 'gold' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4 lg:p-6 space-y-6 max-w-[1720px] mx-auto select-none font-sans"
    >
      {/* Page Header */}
      <PageHeader
        category="EXECUTIVE COMMAND PREFERENCES"
        title="SETTINGS & SECURITY CONFIGURATION"
        subtitle="Manage session governance, cryptographic keychains, and automated telemetry feeds"
        rightElement={
          <span className="px-4 py-2 rounded-xl text-xs lg:text-sm font-black uppercase tracking-wider bg-[#0E7C7B]/15 border border-[#0E7C7B]/30 text-[#0E7C7B]">
            Security Tier: Level 5 Executive
          </span>
        }
      />

      {/* 2-Column Balanced Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5.5 items-stretch">
        {/* Left: Authentication & Access Protocols */}
        <div className="flex flex-col h-full">
          <Card
            title="AUTHENTICATION & ACCESS PROTOCOLS"
            subtitle="Multi-factor authentication, cryptographic keychains & hardware token verification"
            className="flex flex-col justify-between h-full space-y-3.5 rounded-2xl shadow-sm"
          >
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {authProtocols.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 lg:p-4 rounded-2xl border flex items-center justify-between gap-3.5 transition-all ${isLight
                      ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                      : 'bg-[#0B1426] border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                    }`}
                >
                  <div className="min-w-0">
                    <span className={`font-black text-sm lg:text-base block truncate ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                      {item.title}
                    </span>
                    <span className={`text-xs lg:text-sm font-semibold mt-1 block truncate ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                      {item.desc}
                    </span>
                  </div>
                  <span className={`px-3.5 py-1.5 rounded-xl font-black text-xs lg:text-sm uppercase tracking-wider shrink-0 border ${item.color === 'teal'
                      ? 'bg-[#0E7C7B]/15 border-[#0E7C7B]/30 text-[#0E7C7B]'
                      : 'bg-[#C9A227]/15 border-[#C9A227]/30 text-[#B8860B] dark:text-[#F59E0B]'
                    }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Data Stream & API Feeds */}
        <div className="flex flex-col h-full">
          <Card
            title="DATA STREAM & API INTEGRATION"
            subtitle="Real-time synchronization status with ERP, LBMA, and Grid telemetry feeds"
            className="flex flex-col justify-between h-full space-y-3.5 rounded-2xl shadow-sm"
          >
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {dataStreams.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 lg:p-4 rounded-2xl border flex items-center justify-between gap-3.5 transition-all ${isLight
                      ? 'bg-white border-slate-300 hover:border-[#C9A227]/60 text-[#1F2937] shadow-2xs'
                      : 'bg-[#0B1426] border-slate-800 hover:border-[#C9A227]/40 text-slate-100'
                    }`}
                >
                  <div className="min-w-0">
                    <span className={`font-black text-sm lg:text-base block truncate ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                      {item.title}
                    </span>
                    <span className={`text-xs lg:text-sm font-semibold mt-1 block truncate ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                      {item.desc}
                    </span>
                  </div>
                  <span className={`px-3.5 py-1.5 rounded-xl font-black text-xs lg:text-sm uppercase tracking-wider shrink-0 border ${item.color === 'teal'
                      ? 'bg-[#0E7C7B]/15 border-[#0E7C7B]/30 text-[#0E7C7B]'
                      : 'bg-[#C9A227]/15 border-[#C9A227]/30 text-[#B8860B] dark:text-[#F59E0B]'
                    }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
