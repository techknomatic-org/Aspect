import React from 'react';

interface ExecutiveProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  sublabel?: string;
}

export const ExecutiveProgressRing: React.FC<ExecutiveProgressRingProps> = ({
  progress,
  size = 64,
  strokeWidth = 6,
  color = '#0E7C7B',
  label,
  sublabel,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[11px] font-extrabold text-white tracking-tight leading-none">
          {label || `${progress}%`}
        </span>
        {sublabel && (
          <span className="text-[8px] text-[#94A3B8] font-bold uppercase mt-0.5">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
};
