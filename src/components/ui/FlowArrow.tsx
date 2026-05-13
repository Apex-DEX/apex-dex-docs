import { ArrowDown, ArrowUp, ArrowRight, ArrowLeft } from 'lucide-react'

interface FlowArrowProps {
  direction?: 'up' | 'down' | 'left' | 'right'
  label?: string
  color?: 'blue' | 'purple' | 'pink' | 'amber'
  /** Visual shaft length */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const colorMap = {
  blue: { text: 'text-blue-400', shaft: 'bg-blue-500/30' },
  purple: { text: 'text-purple-400', shaft: 'bg-purple-500/30' },
  pink: { text: 'text-pink-400', shaft: 'bg-pink-500/30' },
  amber: { text: 'text-amber-400', shaft: 'bg-amber-500/30' },
}

const heights = { sm: 'h-8', md: 'h-12', lg: 'h-16' }

export function FlowArrow({
  direction = 'down',
  label,
  color = 'blue',
  size = 'md',
  className = '',
}: FlowArrowProps) {
  const { text, shaft } = colorMap[color]
  const h = heights[size]

  const Icon = {
    up: ArrowUp,
    down: ArrowDown,
    left: ArrowLeft,
    right: ArrowRight,
  }[direction]

  return (
    <div className={`flex flex-col items-center group ${className}`}>
      <div className={`w-px ${h} ${shaft} border-l border-dashed border-white/20 opacity-70`} />
      <Icon className={`w-4 h-4 ${text} -mt-1`} />
      {label && (
        <span
          className={`text-[10px] font-bold ${text} uppercase tracking-widest mt-2 opacity-80 text-center max-w-[200px] leading-tight`}
        >
          {label}
        </span>
      )}
    </div>
  )
}
