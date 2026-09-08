import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  vsText?: string;
  icon?: LucideIcon;
  color?: 'teal' | 'gold' | 'blue' | 'red';
  target?: {
    label?: string;
    badge?: string;
    value: string;
    statusText: string;
  };
  sparkline?: React.ReactNode;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  vsText,
  icon: Icon,
  color = 'teal',
  target,
  sparkline,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const getThemeTokens = () => {
    switch (color) {
      case 'gold':
        return {
          card: isLight
            ? 'bg-gradient-to-br from-[#C9A227]/15 via-[#C9A227]/8 to-white border-[#C9A227]/30 hover:border-[#C9A227]/60 shadow-sm'
            : 'bg-gradient-to-br from-[#C9A227]/22 via-[#C9A227]/10 to-[#1F190B] border-[#C9A227]/40 hover:border-[#C9A227]/70 shadow-lg',
          icon: 'text-[#C9A227]',
          label: isLight ? 'text-[#B8860B]' : 'text-[#F59E0B]',
          badge: isLight ? 'bg-[#C9A227]/20 text-[#B8860B]' : 'bg-[#C9A227]/25 text-[#FBBF24]',
          status: isLight ? 'text-[#B8860B]' : 'text-[#FBBF24]',
          divider: isLight ? 'border-[#C9A227]/30' : 'border-[#C9A227]/35',
        };
      case 'red':
        return {
          card: isLight
            ? 'bg-gradient-to-br from-[#E61C40]/15 via-[#E61C40]/8 to-white border-[#E61C40]/30 hover:border-[#E61C40]/60 shadow-sm'
            : 'bg-gradient-to-br from-[#E61C40]/22 via-[#E61C40]/10 to-[#220D14] border-[#E61C40]/40 hover:border-[#E61C40]/70 shadow-lg',
          icon: 'text-[#E61C40]',
          label: isLight ? 'text-[#E61C40]' : 'text-[#FB7185]',
          badge: isLight ? 'bg-[#E61C40]/15 text-[#E61C40]' : 'bg-[#E61C40]/25 text-[#FDA4AF]',
          status: isLight ? 'text-[#E61C40]' : 'text-[#FDA4AF]',
          divider: isLight ? 'border-[#E61C40]/30' : 'border-[#E61C40]/35',
        };
      case 'blue':
        return {
          card: isLight
            ? 'bg-gradient-to-br from-[#4A6FA5]/15 via-[#4A6FA5]/8 to-white border-[#4A6FA5]/30 hover:border-[#4A6FA5]/60 shadow-sm'
            : 'bg-gradient-to-br from-[#4A6FA5]/22 via-[#4A6FA5]/10 to-[#0F1729] border-[#4A6FA5]/40 hover:border-[#4A6FA5]/70 shadow-lg',
          icon: 'text-[#4A6FA5]',
          label: isLight ? 'text-[#3B6BA5]' : 'text-[#60A5FA]',
          badge: isLight ? 'bg-[#4A6FA5]/15 text-[#3B6BA5]' : 'bg-[#4A6FA5]/25 text-[#93C5FD]',
          status: isLight ? 'text-[#3B6BA5]' : 'text-[#93C5FD]',
          divider: isLight ? 'border-[#4A6FA5]/30' : 'border-[#4A6FA5]/35',
        };
      case 'teal':
      default:
        return {
          card: isLight
            ? 'bg-gradient-to-br from-[#0E7C7B]/15 via-[#0E7C7B]/8 to-white border-[#0E7C7B]/30 hover:border-[#0E7C7B]/60 shadow-sm'
            : 'bg-gradient-to-br from-[#0E7C7B]/22 via-[#0E7C7B]/10 to-[#0A1624] border-[#0E7C7B]/40 hover:border-[#0E7C7B]/70 shadow-lg',
          icon: 'text-[#0E7C7B]',
          label: isLight ? 'text-[#0E7C7B]' : 'text-[#2dd4bf]',
          badge: isLight ? 'bg-[#0E7C7B]/15 text-[#0E7C7B]' : 'bg-[#0E7C7B]/25 text-[#5eead4]',
          status: isLight ? 'text-[#0E7C7B]' : 'text-[#5eead4]',
          divider: isLight ? 'border-[#0E7C7B]/30' : 'border-[#0E7C7B]/35',
        };
    }
  };

  const tokens = getThemeTokens();
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400';
  const textValue = isLight ? 'text-slate-900' : 'text-white';
  const textTitle = isLight ? 'text-slate-800' : 'text-slate-100';

  return (
    <div className={`${tokens.card} border rounded-2xl p-3 lg:p-3.5 flex items-center justify-between gap-2.5 h-[114px] relative overflow-hidden transition-all duration-200 group select-none`}>
      <div className="flex flex-col justify-between h-full py-0.5 min-w-0 flex-1">
        {/* Top: Icon + Title */}
        <div className="flex items-center gap-1.5 min-w-0">
          {Icon && <Icon className={`w-4 h-4 ${tokens.icon} shrink-0`} />}
          <div className={`text-xs lg:text-[13px] font-black tracking-wider ${textTitle} uppercase whitespace-nowrap`}>
            {title}
          </div>
        </div>

        {/* Middle: Big Value */}
        <div className="my-0.5 min-w-0">
          <span className={`${
            value.length > 10 ? 'text-base lg:text-[17px] xl:text-lg' : 'text-xl lg:text-2xl'
          } font-black ${textValue} tracking-tight font-sans block leading-none whitespace-nowrap`}>
            {value}
          </span>
        </div>

        {/* Bottom: vsText & Change Trend */}
        <div className="flex items-center gap-1.5 text-xs lg:text-[12px] whitespace-nowrap min-w-0">
          {vsText && <span className={textMuted}>{vsText}</span>}
          {change && (
            <span className={`font-bold ${tokens.label} flex items-center shrink-0`}>
              {change.includes('▼') || change.includes('-') ? (
                <TrendingDown className="w-3.5 h-3.5 mr-0.5 inline shrink-0" />
              ) : (
                <TrendingUp className="w-3.5 h-3.5 mr-0.5 inline shrink-0" />
              )}
              {change}
            </span>
          )}
        </div>
      </div>

      {target && (
        <div className={`flex flex-col justify-between h-full py-0.5 shrink-0 min-w-[95px] lg:min-w-[105px] pl-3 lg:pl-3.5 border-l ${tokens.divider}`}>
          {/* Top line: TARGET label + Badge */}
          <div className="flex items-center justify-between gap-1">
            <span className={`text-xs lg:text-[12px] font-extrabold tracking-wider uppercase ${tokens.label} whitespace-nowrap`}>
              {target.label || 'TARGET'}
            </span>
            {target.badge && (
              <span className={`text-[11px] lg:text-xs font-black px-1.5 lg:px-2 py-0.5 rounded-md ${tokens.badge} whitespace-nowrap leading-none shrink-0`}>
                {target.badge}
              </span>
            )}
          </div>

          {/* Middle line: Target Big Value */}
          <div className="my-0.5">
            <span className={`text-base lg:text-lg xl:text-xl font-black tracking-tight leading-none ${textValue} whitespace-nowrap block font-sans`}>
              {target.value}
            </span>
          </div>

          {/* Bottom line: Status / Delta */}
          <div className="flex items-center justify-between gap-1 text-xs lg:text-[12px] whitespace-nowrap">
            <span className={`font-bold ${tokens.status} whitespace-nowrap`}>
              {target.statusText}
            </span>
          </div>
        </div>
      )}

      {sparkline && !target && (
        <div className="w-[60px] h-[32px] flex items-end shrink-0">
          {sparkline}
        </div>
      )}
    </div>
  );
};
