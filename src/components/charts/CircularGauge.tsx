import React from 'react';
import { HeartPulse } from 'lucide-react';

interface CircularGaugeProps {
  score: number;
  maxScore?: number;
  size?: number;
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({
  score,
  maxScore = 100,
  size = 52
}) => {
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(score / maxScore, 0), 1);
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1E293B"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#healthGaugeGrad)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="healthGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#C9A227" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex items-center justify-center text-teal-400">
        <HeartPulse className="w-5 h-5 animate-pulse" />
      </div>
    </div>
  );
};
