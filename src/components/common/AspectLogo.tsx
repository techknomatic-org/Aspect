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
  const heightClass = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-11' : 'h-8.5';
  const globalTextSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Aspect Brand Vector Logo */}
      <svg
        viewBox="0 0 310 80"
        className={`${heightClass} w-auto overflow-visible shrink-0`}
        aria-label="Aspect Logo"
      >
        <defs>
          {/* Multi-stage color gradient matching the exact brand identity: Red -> Magenta/Purple -> Navy/Cyan */}
          <linearGradient id="aspectBrandTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E1004C" />
            <stop offset="25%" stopColor="#A01246" />
            <stop offset="55%" stopColor="#65164B" />
            <stop offset="78%" stopColor="#2A1B4E" />
            <stop offset="100%" stopColor={isLight ? "#0F2039" : "#38BDF8"} />
          </linearGradient>

          {/* Upward Growth Arrow Teal Gradient */}
          <linearGradient id="aspectArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0E7C7B" />
            <stop offset="100%" stopColor="#054D4B" />
          </linearGradient>
        </defs>

        {/* Brand Text 'aspect' */}
        <text
          x="0"
          y="62"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="62"
          fill="url(#aspectBrandTextGrad)"
          letterSpacing="-2.5"
        >
          aspect
        </text>

        {/* Upward Growth Icon over 't' */}
        {/* Small Dot */}
        <rect x="252" y="22" width="9" height="9" fill="url(#aspectArrowGrad)" rx="1.5" />
        {/* L-shaped Up-Right Arrowhead */}
        <path
          d="M 267 8 L 290 8 C 291 8, 292 9, 292 10 L 292 32 L 281 32 L 281 19 L 267 19 Z"
          fill="url(#aspectArrowGrad)"
        />

        {/* ® Symbol */}
        <text
          x="294"
          y="60"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="600"
          fontSize="12"
          fill={isLight ? "#1F2937" : "#94A3B8"}
        >
          ®
        </text>
      </svg>

      {/* Optional 'GLOBAL' Sub-badge */}
      {showText && (
        <span
          className={`font-extrabold tracking-[0.25em] uppercase font-sans ${globalTextSize} ${
            isLight ? 'text-slate-800' : 'text-slate-200'
          } border-l border-slate-700/60 pl-2.5 py-0.5 leading-none`}
        >
          GLOBAL
        </span>
      )}
    </div>
  );
};
