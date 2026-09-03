import React, { useId } from 'react';
import { SparklinePoint } from '../../types';

interface SparklineChartProps {
  data: SparklinePoint[];
  color?: string;
  fillGradient?: boolean;
  height?: number;
  width?: number;
}

export const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  color = '#8B5CF6',
  fillGradient = true,
  height = 50,
  width = 120,
}) => {
  const rawId = useId();
  const gradientId = `spark-grad-${rawId.replace(/:/g, '')}`;

  if (!data || data.length < 2) return null;

  const min = Math.min(...data.map((d) => d.val));
  const max = Math.max(...data.map((d) => d.val));
  const range = max - min || 1;
  const padding = 3;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((d.val - min) / range) * (height - padding * 2 - 4);
    return { x, y };
  });

  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cx = (prev.x + point.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${point.y}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible select-none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.45} />
          <stop offset="70%" stopColor={color} stopOpacity={0.12} />
          <stop offset="100%" stopColor={color} stopOpacity={0.0} />
        </linearGradient>
      </defs>

      {fillGradient && <path d={areaD} fill={`url(#${gradientId})`} />}

      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="4"
        fill={color}
        fillOpacity="0.3"
        className="animate-ping"
      />
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="2.5"
        fill={color}
      />
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="1.2"
        fill="#FFFFFF"
      />
    </svg>
  );
};

