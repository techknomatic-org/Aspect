import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle, Briefcase } from 'lucide-react';
import { CountUpNumber } from '../common/CountUpNumber';
import { DashboardOverview } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface TopKPIRowProps {
  overview: DashboardOverview;
}

interface ColorThemeConfig {
  cardClass: string;
  iconClass: string;
  trendClass: string;
}

const getKPIStyles = (color: 'teal' | 'gold' | 'red' | 'blue', isLight: boolean): ColorThemeConfig => {
  switch (color) {
    case 'teal':
      return {
        cardClass: isLight
          ? 'bg-gradient-to-br from-[#0E7C7B]/15 via-[#0E7C7B]/8 to-white border-[#0E7C7B]/30 hover:border-[#0E7C7B]/60 shadow-sm hover:shadow-md'
          : 'bg-gradient-to-br from-[#0E7C7B]/22 via-[#0E7C7B]/10 to-[#0A1624] border-[#0E7C7B]/40 hover:border-[#0E7C7B]/70 shadow-lg shadow-[#0E7C7B]/5',
        iconClass: 'text-[#0E7C7B]',
        trendClass: isLight ? 'text-[#0E7C7B]' : 'text-[#2dd4bf]',
      };
    case 'gold':
      return {
        cardClass: isLight
          ? 'bg-gradient-to-br from-[#C9A227]/15 via-[#C9A227]/8 to-white border-[#C9A227]/30 hover:border-[#C9A227]/60 shadow-sm hover:shadow-md'
          : 'bg-gradient-to-br from-[#C9A227]/22 via-[#C9A227]/10 to-[#1F190B] border-[#C9A227]/40 hover:border-[#C9A227]/70 shadow-lg shadow-[#C9A227]/5',
        iconClass: 'text-[#C9A227]',
        trendClass: isLight ? 'text-[#B8860B]' : 'text-[#F59E0B]',
      };
    case 'red':
      return {
        cardClass: isLight
          ? 'bg-gradient-to-br from-[#E61C40]/15 via-[#E61C40]/8 to-white border-[#E61C40]/30 hover:border-[#E61C40]/60 shadow-sm hover:shadow-md'
          : 'bg-gradient-to-br from-[#E61C40]/22 via-[#E61C40]/10 to-[#220D14] border-[#E61C40]/40 hover:border-[#E61C40]/70 shadow-lg shadow-[#E61C40]/5',
        iconClass: 'text-[#E61C40]',
        trendClass: isLight ? 'text-[#E61C40]' : 'text-[#FB7185]',
      };
    case 'blue':
      return {
        cardClass: isLight
          ? 'bg-gradient-to-br from-[#4A6FA5]/15 via-[#4A6FA5]/8 to-white border-[#4A6FA5]/30 hover:border-[#4A6FA5]/60 shadow-sm hover:shadow-md'
          : 'bg-gradient-to-br from-[#4A6FA5]/22 via-[#4A6FA5]/10 to-[#0F1729] border-[#4A6FA5]/40 hover:border-[#4A6FA5]/70 shadow-lg shadow-[#4A6FA5]/5',
        iconClass: 'text-[#4A6FA5]',
        trendClass: isLight ? 'text-[#3B6BA5]' : 'text-[#60A5FA]',
      };
  }
};

const TargetCardBox: React.FC<{
  label: string;
  badge: string;
  value: string;
  statusText: string;
  themeType: 'teal' | 'gold' | 'red' | 'blue';
  isLight: boolean;
}> = ({ label, badge, value, statusText, themeType, isLight }) => {
  const getStyles = () => {
    switch (themeType) {
      case 'gold':
        return {
          label: isLight ? 'text-[#B8860B]' : 'text-[#F59E0B]',
          badge: isLight ? 'bg-[#C9A227]/20 text-[#B8860B]' : 'bg-[#C9A227]/25 text-[#FBBF24]',
          val: isLight ? 'text-slate-900' : 'text-white',
          status: isLight ? 'text-[#B8860B]' : 'text-[#FBBF24]',
          divider: isLight ? 'border-[#C9A227]/30' : 'border-[#C9A227]/35',
        };
      case 'red':
        return {
          label: isLight ? 'text-[#E61C40]' : 'text-[#FB7185]',
          badge: isLight ? 'bg-[#E61C40]/15 text-[#E61C40]' : 'bg-[#E61C40]/25 text-[#FDA4AF]',
          val: isLight ? 'text-slate-900' : 'text-white',
          status: isLight ? 'text-[#E61C40]' : 'text-[#FDA4AF]',
          divider: isLight ? 'border-[#E61C40]/30' : 'border-[#E61C40]/35',
        };
      case 'blue':
        return {
          label: isLight ? 'text-[#3B6BA5]' : 'text-[#60A5FA]',
          badge: isLight ? 'bg-[#4A6FA5]/15 text-[#3B6BA5]' : 'bg-[#4A6FA5]/25 text-[#93C5FD]',
          val: isLight ? 'text-slate-900' : 'text-white',
          status: isLight ? 'text-[#3B6BA5]' : 'text-[#93C5FD]',
          divider: isLight ? 'border-[#4A6FA5]/30' : 'border-[#4A6FA5]/35',
        };
      case 'teal':
      default:
        return {
          label: isLight ? 'text-[#0E7C7B]' : 'text-[#2dd4bf]',
          badge: isLight ? 'bg-[#0E7C7B]/15 text-[#0E7C7B]' : 'bg-[#0E7C7B]/25 text-[#5eead4]',
          val: isLight ? 'text-slate-900' : 'text-white',
          status: isLight ? 'text-[#0E7C7B]' : 'text-[#5eead4]',
          divider: isLight ? 'border-[#0E7C7B]/30' : 'border-[#0E7C7B]/35',
        };
    }
  };

  const s = getStyles();

  return (
    <div className={`flex flex-col justify-between h-full py-0.5 flex-1 min-w-0 pl-3 lg:pl-3.5 border-l ${s.divider}`}>
      {/* Top line: TARGET label + Badge */}
      <div className="flex items-center justify-between gap-1">
        <span className={`text-xs lg:text-[12px] font-extrabold tracking-wider uppercase ${s.label} whitespace-nowrap`}>
          {label}
        </span>
        <span className={`text-[11px] lg:text-xs font-black px-1.5 lg:px-2 py-0.5 rounded-md ${s.badge} whitespace-nowrap leading-none shrink-0`}>
          {badge}
        </span>
      </div>

      {/* Middle line: Target Big Value */}
      <div className="my-0.5">
        <span className={`text-xl lg:text-[22px] xl:text-[24px] font-black tracking-tight leading-none ${s.val} whitespace-nowrap block font-sans`}>
          {value}
        </span>
      </div>

      {/* Bottom line: Status / Delta */}
      <div className="flex items-center justify-between gap-1 text-xs lg:text-[12px] whitespace-nowrap">
        <span className={`font-bold ${s.status} whitespace-nowrap`}>
          {statusText}
        </span>
      </div>
    </div>
  );
};

export const TopKPIRow: React.FC<TopKPIRowProps> = ({ overview }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const textMutedClass = isLight ? 'text-slate-500' : 'text-slate-400';
  const textTitleClass = isLight ? 'text-slate-800' : 'text-slate-100';
  const textValueClass = isLight ? 'text-slate-900' : 'text-white';

  const tealStyles = getKPIStyles('teal', isLight);
  const redStyles = getKPIStyles('red', isLight);
  const goldStyles = getKPIStyles('gold', isLight);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 select-none">
      {/* 1. GROUP REVENUE (YTD) */}
      <div className={`${tealStyles.cardClass} border rounded-2xl p-3 lg:p-3.5 flex items-center justify-between gap-2.5 h-[114px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex flex-col justify-between h-full py-0.5 shrink-0 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <DollarSign className={`w-4 h-4 ${tealStyles.iconClass} shrink-0`} />
            <div className={`text-sm lg:text-[14.5px] font-black tracking-wider ${textTitleClass} uppercase truncate`}>
              GROUP REVENUE
            </div>
          </div>

          <div className="my-0.5">
            <span className={`text-2xl lg:text-[26px] xl:text-[28px] font-black ${textValueClass} tracking-tight font-sans block leading-none whitespace-nowrap`}>
              <CountUpNumber end={24.9} decimals={1} prefix="₹ " suffix="k Cr" duration={750} />
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs lg:text-[12px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY ₹ 21.5k Cr</span>
            <span className={`font-bold ${tealStyles.trendClass} flex items-center shrink-0`}>
              <TrendingUp className="w-3.5 h-3.5 mr-0.5 inline" /> ▲ {overview.revenueChangePct || 15.9}%
            </span>
          </div>
        </div>

        <TargetCardBox
          label="TARGET"
          badge="110.5%"
          value="₹ 22.5k Cr"
          statusText="+₹2.4k Cr"
          themeType="teal"
          isLight={isLight}
        />
      </div>

      {/* 2. YoY GROWTH */}
      <div className={`${tealStyles.cardClass} border rounded-2xl p-3 lg:p-3.5 flex items-center justify-between gap-2.5 h-[114px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex flex-col justify-between h-full py-0.5 shrink-0 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <TrendingUp className={`w-4 h-4 ${tealStyles.iconClass} shrink-0`} />
            <div className={`text-sm lg:text-[14.5px] font-black tracking-wider ${textTitleClass} uppercase truncate`}>
              YoY GROWTH
            </div>
          </div>

          <div className="my-0.5">
            <span className={`text-2xl lg:text-[26px] xl:text-[28px] font-black ${textValueClass} tracking-tight font-sans block leading-none whitespace-nowrap`}>
              <CountUpNumber end={15.9} decimals={1} suffix="%" duration={750} />
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs lg:text-[12px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY 11.3%</span>
            <span className={`font-bold ${tealStyles.trendClass} flex items-center shrink-0`}>
              <TrendingUp className="w-3.5 h-3.5 mr-0.5 inline" /> ▲ 4.6pp
            </span>
          </div>
        </div>

        <TargetCardBox
          label="TARGET"
          badge="+1.9pp"
          value="14.0%"
          statusText="Exceeded"
          themeType="teal"
          isLight={isLight}
        />
      </div>

      {/* 3. ACTIVE ALERTS */}
      <div className={`${redStyles.cardClass} border rounded-2xl p-3 lg:p-3.5 flex items-center justify-between gap-2.5 h-[114px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex flex-col justify-between h-full py-0.5 shrink-0 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <AlertTriangle className={`w-4 h-4 ${redStyles.iconClass} shrink-0`} />
            <div className={`text-sm lg:text-[14.5px] font-black tracking-wider ${textTitleClass} uppercase truncate`}>
              ACTIVE ALERTS
            </div>
          </div>

          <div className="my-0.5">
            <span className={`text-2xl lg:text-[26px] xl:text-[28px] font-black ${textValueClass} tracking-tight font-sans block leading-none whitespace-nowrap`}>
              128
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs lg:text-[12px] whitespace-nowrap">
            <span className={`font-bold ${redStyles.trendClass} flex items-center shrink-0`}>
              <TrendingDown className="w-3.5 h-3.5 mr-0.5 inline" /> ▼ 14 (-9.8%) vs prev
            </span>
          </div>
        </div>

        <TargetCardBox
          label="STATUS"
          badge="Low Risk"
          value="14 Resolved"
          statusText="89.8% SLA"
          themeType="red"
          isLight={isLight}
        />
      </div>

      {/* 4. GROUP PIPELINE VALUE */}
      <div className={`${goldStyles.cardClass} border rounded-2xl p-3 lg:p-3.5 flex items-center justify-between gap-2.5 h-[114px] relative overflow-hidden transition-all duration-200 group`}>
        <div className="flex flex-col justify-between h-full py-0.5 shrink-0 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Briefcase className={`w-4 h-4 ${goldStyles.iconClass} shrink-0`} />
            <div className={`text-sm lg:text-[14.5px] font-black tracking-wider ${textTitleClass} uppercase truncate`}>
              PIPELINE VALUE
            </div>
          </div>

          <div className="my-0.5">
            <span className={`text-2xl lg:text-[26px] xl:text-[28px] font-black ${textValueClass} tracking-tight font-sans block leading-none whitespace-nowrap`}>
              <CountUpNumber end={49.7} decimals={1} prefix="₹ " suffix="k Cr" duration={750} />
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs lg:text-[12px] whitespace-nowrap">
            <span className={textMutedClass}>vs LY ₹ 42.1k Cr</span>
            <span className={`font-bold ${goldStyles.trendClass} flex items-center shrink-0`}>
              <TrendingUp className="w-3.5 h-3.5 mr-0.5 inline" /> ▲ 17.9%
            </span>
          </div>
        </div>

        <TargetCardBox
          label="TARGET"
          badge="110.3%"
          value="₹ 45.0k Cr"
          statusText="+₹4.7k Cr"
          themeType="gold"
          isLight={isLight}
        />
      </div>
    </div>
  );
};
