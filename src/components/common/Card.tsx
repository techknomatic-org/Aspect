import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  action,
  children,
  className = '',
  noPadding = false,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`rounded-2xl border transition-all duration-200 ${
      isLight
        ? 'bg-white border-slate-300 shadow-sm text-[#1F2937]'
        : 'bg-[#131C2E] border-slate-800 shadow-xl text-slate-100'
    } ${noPadding ? '' : 'p-5 lg:p-6'} ${className}`}>
      {(title || action) && (
        <div className={`flex items-center justify-between border-b ${
          isLight ? 'border-slate-300' : 'border-slate-800'
        } ${noPadding ? 'px-5 lg:px-6 pt-4 lg:pt-5 pb-3.5' : 'pb-3.5 mb-4'}`}>
          <div>
            {title && (
              <h3 className="text-xs lg:text-sm font-black text-[#C9A227] uppercase tracking-wider">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className={`text-xs lg:text-sm font-medium mt-0.5 ${isLight ? 'text-[#6B7280]' : 'text-slate-400'}`}>
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
