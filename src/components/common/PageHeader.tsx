import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface PageHeaderProps {
  category?: string;
  title: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  subtitle,
  rightElement,
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
      <div>
        {category && (
          <span className="text-xs font-bold tracking-wider text-[#C9A227] uppercase block">
            {category}
          </span>
        )}
        <h1 className={`text-2xl lg:text-3xl font-black tracking-tight uppercase leading-tight mt-0.5 ${
          isLight ? 'text-[#1F2937]' : 'text-white'
        }`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xs lg:text-sm font-semibold mt-0.5 ${
            isLight ? 'text-[#6B7280]' : 'text-slate-400'
          }`}>
            {subtitle}
          </p>
        )}
      </div>

      {rightElement && (
        <div className="flex items-center gap-3 shrink-0">
          {rightElement}
        </div>
      )}
    </div>
  );
};
