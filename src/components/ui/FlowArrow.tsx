
import { ArrowDown, ArrowUp, ArrowRight, ArrowLeft } from 'lucide-react';

interface FlowArrowProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  label?: string;
  color?: string;
  length?: string;
  className?: string;
}

export const FlowArrow: React.FC<FlowArrowProps> = ({ 
  direction = 'down', 
  label, 
  color = 'blue', 
  length = '10',
  className = ''
}) => {
  const colorMap = {
    blue: 'text-blue-400 bg-blue-500/30',
    purple: 'text-purple-400 bg-purple-500/30',
    pink: 'text-pink-400 bg-pink-500/30',
    amber: 'text-amber-400 bg-amber-500/30',
  };

  const selectedColor = colorMap[color as keyof typeof colorMap] || colorMap.blue;
  const textColor = selectedColor.split(' ')[0];
  const bgColor = selectedColor.split(' ')[1];

  const Icon = {
    up: ArrowUp,
    down: ArrowDown,
    left: ArrowLeft,
    right: ArrowRight,
  }[direction];

  return (
    <div className={`flex flex-col items-center group ${className}`}>
      <div className={`w-px h-${length} ${bgColor} border-l border-dashed opacity-50`}></div>
      <Icon className={`w-4 h-4 ${textColor} -mt-1`} />
      {label && (
        <span className={`text-[10px] font-bold ${textColor} uppercase tracking-widest mt-2 opacity-70 group-hover:opacity-100 transition-opacity`}>
          {label}
        </span>
      )}
    </div>
  );
};
