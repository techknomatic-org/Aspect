import React from 'react';

export type BadgeVariant = 'healthy' | 'success' | 'warning' | 'critical' | 'danger' | 'info' | 'watch' | 'neutral';

interface StatusBadgeProps {
  status: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant,
  size = 'md',
}) => {
  const normalized = (variant || status.toLowerCase()) as string;

  let colorClasses = 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';

  if (normalized.includes('health') || normalized.includes('success') || normalized.includes('track') || normalized === 'healthy') {
    colorClasses = 'bg-[#0E7C7B]/15 text-[#0E7C7B] border-[#0E7C7B]/30';
  } else if (normalized.includes('warn') || normalized.includes('watch') || normalized.includes('attention') || normalized === 'warning') {
    colorClasses = 'bg-[#C9A227]/15 text-[#B8860B] dark:text-[#F59E0B] border-[#C9A227]/30';
  } else if (normalized.includes('crit') || normalized.includes('dang') || normalized.includes('delay') || normalized === 'critical') {
    colorClasses = 'bg-[#E61C40]/15 text-[#E61C40] border-[#E61C40]/30';
  } else if (normalized.includes('info') || normalized.includes('blue')) {
    colorClasses = 'bg-[#4A6FA5]/15 text-[#3B6BA5] dark:text-[#60A5FA] border-[#4A6FA5]/30';
  }

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1.5 text-xs font-bold';

  return (
    <span className={`inline-flex items-center gap-1.5 font-black uppercase tracking-wider rounded-xl border ${sizeClasses} ${colorClasses} whitespace-nowrap`}>
      <span className="w-2 h-2 rounded-full bg-current opacity-90 shrink-0" />
      {status}
    </span>
  );
};
