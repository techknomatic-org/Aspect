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
  Building2,
  DollarSign,
  ArrowRight
} from 'lucide-react';

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

  if (!isOpen) return null;

  const handleAction = (type: string) => {
    setActionType(type);
    setActionExecuted(true);
    setTimeout(() => {
      // Auto close after brief status confirmation
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-2xl bg-[#172033] border border-[#C9A227]/40 rounded-2xl shadow-2xl overflow-hidden select-none"
        >
          {/* Header */}
          <div className="bg-[#0B1426] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E61C40]/20 border border-[#E61C40]/50 text-[#E61C40] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#C9A227] uppercase tracking-widest block">
                  CEO DIRECTIVE & BOARD INTERVENTION • {businessName}
                </span>
                <h3 className="text-base font-extrabold text-white uppercase tracking-tight">
                  Executive Decision Brief
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-5 space-y-4">
            {/* Impact Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#0B1426] border border-white/10">
                <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase block">CAPITAL / FINANCIAL IMPACT</span>
                <span className="text-base font-extrabold text-[#E61C40] block mt-1">{financialImpact}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B1426] border border-white/10">
                <span className="text-[9px] font-extrabold text-[#94A3B8] uppercase block">TARGET COMPLIANCE / SLA</span>
                <span className="text-base font-extrabold text-[#C9A227] block mt-1">High Severity</span>
              </div>
            </div>

            {/* Core Issue */}
            <div className="p-3.5 rounded-xl bg-[#0B1426] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-extrabold text-[#E61C40] uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Strategic Issue Summary
              </span>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">{businessImpact}</p>
            </div>

            {/* Recommended Action */}
            <div className="p-3.5 rounded-xl bg-[#0E7C7B]/10 border border-[#0E7C7B]/30 space-y-1">
              <span className="text-[10px] font-extrabold text-[#0E7C7B] uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                C-Suite Recommended Resolution
              </span>
              <p className="text-xs text-slate-100 font-semibold leading-relaxed">
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
                <p className="text-xs text-slate-300">
                  Action standard operating procedure triggered: <strong className="text-white">{actionType}</strong>. Notification dispatched to Business Unit Head.
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
                    className="p-3 rounded-xl bg-[#0E7C7B] hover:bg-[#0E7C7B]/90 text-white font-extrabold text-xs flex items-center justify-between cursor-pointer transition-all shadow-md group"
                  >
                    <span className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      Authorize Fast-Track Budget
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleAction('Escalate to Board Audit & Steering Committee')}
                    className="p-3 rounded-xl bg-[#C9A227] hover:bg-[#C9A227]/90 text-[#0B1426] font-extrabold text-xs flex items-center justify-between cursor-pointer transition-all shadow-md group"
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
