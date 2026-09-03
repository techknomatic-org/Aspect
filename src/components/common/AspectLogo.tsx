import React from 'react';

interface AspectLogoProps {
  className?: string;
  isLight?: boolean;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const AspectLogo: React.FC<AspectLogoProps> = ({
  className = '',
  isLight = false,
  showText = true,
  size = 'md',
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9.5 h-9.5';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Aspect Global Emblem Badge */}
      <div className={`${iconSize} rounded-xl ${isLight
          ? 'bg-white border-2 border-[#C9A227] shadow-sm'
          : 'bg-gradient-to-br from-[#14213D] via-[#24345C] to-[#14213D] border-2 border-[#C9A227] shadow-lg'
        } flex items-center justify-center relative overflow-hidden shrink-0 group`}>
        {/* Subtle Radial Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.3)_0%,transparent_75%)] pointer-events-none" />

        {/* Emblem Symbol: Bold 'A' with Crimson Red Sparkle Dot */}
        <div className="relative flex items-center justify-center">
          <span className="font-extrabold text-xl font-serif text-[#C9A227] tracking-tighter drop-shadow-sm">
            A
          </span>
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D60132] border border-[#C9A227] shadow-sm animate-pulse" />
        </div>
      </div>

      {/* Brand Typography Wordmark: aspect (Crimson Red) + GLOBAL (Dark Slate in light mode / White in dark mode) */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tight font-sans ${textSize} text-[#D60132]`}>
              aspect
            </span>
            <span className={`font-extrabold tracking-[0.2em] uppercase font-sans text-xs lg:text-sm ${isLight ? 'text-[#1F2937]' : 'text-white'
              }`}>
              GLOBAL
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
