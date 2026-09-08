import React from 'react';

interface AspectLogoProps {
  className?: string;
  isLight?: boolean;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AspectLogo: React.FC<AspectLogoProps> = ({
  className = '',
  isLight = false,
  showText = true,
  size = 'md',
}) => {
  const textSize = 
    size === 'sm' ? 'text-xl' : 
    size === 'lg' ? 'text-3xl lg:text-[34px]' : 
    size === 'xl' ? 'text-4xl lg:text-5xl' : 
    'text-2xl lg:text-[26px]';
    
  const globalTextSize = 
    size === 'sm' ? 'text-[10px]' : 
    size === 'lg' ? 'text-xs' : 
    size === 'xl' ? 'text-sm' : 
    'text-[11px]';

  const arrowSize = 
    size === 'sm' ? 'w-3.5 h-3.5' : 
    size === 'lg' ? 'w-5 h-5' : 
    size === 'xl' ? 'w-6 h-6' : 
    'w-4 h-4';

  return (
    <div className={`inline-flex items-center gap-2 select-none font-sans ${className}`}>
      {/* Brand Wordmark with Growth Emblem */}
      <div className="flex items-baseline relative">
        <span
          className={`font-black tracking-tighter lowercase leading-none ${textSize} ${
            isLight
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#E1004C] via-[#65164B] to-[#0F2039]'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E7E] via-[#A855F7] to-[#00E5BE]'
          }`}
        >
          aspect
        </span>
        
        {/* Growth Arrow Over 't' */}
        <div className={`inline-flex flex-col items-center justify-center ml-0.5 -translate-y-1 ${arrowSize}`}>
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <rect x="0" y="24" width="12" height="12" rx="2" fill="#00E5BE" />
            <path
              d="M16 6 H36 V26 H24 V16 H16 Z"
              fill="#00E5BE"
            />
          </svg>
        </div>

        {/* Registered Trademark symbol */}
        <span className={`text-[9px] font-bold ml-0.5 self-start ${isLight ? 'text-slate-400' : 'text-slate-400'}`}>
          ®
        </span>
      </div>

      {/* Optional 'GLOBAL' Badge */}
      {showText && (
        <span
          className={`font-black tracking-[0.25em] uppercase font-sans ${globalTextSize} ${
            isLight ? 'text-slate-800 border-slate-400/80' : 'text-slate-100 border-white/40'
          } border-l-2 pl-2.5 py-0.5 leading-none ml-1`}
        >
          GLOBAL
        </span>
      )}
    </div>
  );
};

