
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  badge?: string;
  githubUrl?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  badge,
  githubUrl,
  className = "" 
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700 ${className}`}>
      <div>
        {badge && (
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">
            {badge}
          </span>
        )}
        <div className="flex items-center gap-4 mb-4">
          {Icon && <Icon className="w-8 h-8 text-white opacity-80" />}
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>
        </div>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
      
      {githubUrl && (
        <a 
          href={githubUrl}
          target="_blank" 
          rel="noreferrer"
          className="flex-shrink-0 px-6 py-3 bg-[#1B2236] hover:bg-white/5 border border-white/10 rounded-2xl transition-all text-sm font-bold text-gray-300 hover:text-white flex items-center gap-2 shadow-lg group"
        >
          {Icon && <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />} 
          View Repository
        </a>
      )}
    </div>
  );
};
