import { Wrench } from 'lucide-react'

interface ComingSoonProps {
  setSection: (id: string) => void
}

export function ComingSoon({ setSection }: ComingSoonProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-20">
      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
        <Wrench className="w-8 h-8 text-purple-400" />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-white">Coming Soon</h1>
      <p className="text-gray-400 max-w-md mx-auto">
        This section is currently under construction. Check back later for detailed step-by-step guides and integration tutorials.
      </p>
      <button onClick={() => setSection('overview')} className="mt-8 text-purple-400 hover:text-purple-300 font-medium">
        &larr; Back to Overview
      </button>
    </div>
  )
}
