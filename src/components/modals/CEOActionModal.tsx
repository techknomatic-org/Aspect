import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Lock,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CEOActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  financialImpact?: string;
  businessImpact?: string;
  recommendedAction?: string;
  businessName?: string;
}

export const CEOActionModal: React.FC<CEOActionModalProps> = ({
  isOpen,
  onClose,
  title,
  financialImpact = '₹ 120 Cr capital locked',
  businessImpact = 'Timeline delay of 45 days if regulatory approval is pending.',
  recommendedAction = 'Submit revised environmental impact assessment and authorize fast-track state liaison.',
  businessName = 'Aspect Realty',
}) => {
  const [actionExecuted, setActionExecuted] = useState(false);
  const [actionType, setActionType] = useState<string | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handleAction = (type: string) => {
    setActionType(type);
    setActionExecuted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className={`w-full max-w-2xl border rounded-2xl shadow-2xl overflow-hidden ${
            isLight ? 'bg-white border-slate-300 text-[#1F2937]' : 'bg-[#172033] border-[#C9A227]/40 text-slate-100'
          }`}
        >
          {/* Header */}
          <div className={`p-4 border-b flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#0B1426] border-white/10'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E61C40]/15 border border-[#E61C40]/30 text-[#E61C40] flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-widest block">
                  CEO DIRECTIVE & BOARD INTERVENTION • {businessName}
                </span>
                <h3 className={`text-base font-extrabold uppercase tracking-tight ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>
                  Executive Decision Brief
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-[#1F2937] dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-5 space-y-4 text-xs">
            {/* Impact Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`p-3 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#0B1426] border-white/10'
              }`}>
                <span className="text-[9px] font-extrabold text-[#E61C40] uppercase block">CAPITAL / FINANCIAL IMPACT</span>
                <span className="text-base font-extrabold text-[#E61C40] block mt-1">{financialImpact}</span>
              </div>
              <div className={`p-3 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#0B1426] border-white/10'
              }`}>
                <span className="text-[9px] font-extrabold text-[#C9A227] uppercase block">TARGET COMPLIANCE / SLA</span>
                <span className="text-base font-extrabold text-[#C9A227] block mt-1">High Severity</span>
              </div>
            </div>

            {/* Core Issue */}
            <div className={`p-3.5 rounded-xl border space-y-1.5 ${
              isLight ? 'bg-slate-50 border-slate-300' : 'bg-[#0B1426] border-white/10'
            }`}>
              <span className="text-[10px] font-extrabold text-[#E61C40] uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Strategic Issue Summary
              </span>
              <p className={`text-sm font-semibold ${isLight ? 'text-[#1F2937]' : 'text-white'}`}>{title}</p>
              <p className={`text-xs font-medium leading-relaxed ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>{businessImpact}</p>
            </div>

            {/* Recommended Action */}
            <div className="p-3.5 rounded-xl bg-[#0E7C7B]/10 border border-[#0E7C7B]/30 space-y-1">
              <span className="text-[10px] font-extrabold text-[#0E7C7B] uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                C-Suite Recommended Resolution
              </span>
              <p className={`text-xs font-semibold leading-relaxed ${isLight ? 'text-[#1F2937]' : 'text-slate-100'}`}>
                {recommendedAction}
              </p>
            </div>

            {actionExecuted ? (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-[#0E7C7B]/20 border border-[#0E7C7B] text-center space-y-1"
              >
                <div className="inline-flex items-center gap-2 text-[#0E7C7B] font-extrabold text-sm uppercase">
                  <CheckCircle2 className="w-5 h-5" /> CEO Directive Executed & Logged
                </div>
                <p className={`text-xs ${isLight ? 'text-[#1F2937]' : 'text-slate-300'}`}>
                  Action standard operating procedure triggered: <strong className={isLight ? 'text-[#1F2937]' : 'text-white'}>{actionType}</strong>. Notification dispatched to Business Unit Head.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-wider block">
                  AUTHORIZE CEO DECISION:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => handleAction('Authorize Fast-Track Budget & Clearance')}
                    className="p-3 rounded-xl bg-[#0E7C7B] hover:brightness-110 text-white font-extrabold text-xs flex items-center justify-between cursor-pointer transition-all shadow-sm group"
                  >
                    <span className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      Authorize Fast-Track Budget
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleAction('Escalate to Board Audit & Steering Committee')}
                    className="p-3 rounded-xl bg-[#C9A227] hover:brightness-110 text-[#0B1426] font-extrabold text-xs flex items-center justify-between cursor-pointer transition-all shadow-sm group"
                  >
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Flag for Board Review
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
