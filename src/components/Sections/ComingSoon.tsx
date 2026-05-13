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
      <h1 className="text-3xl font-bold mb-4 text-white">Section not found</h1>
      <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
        This URL does not match a published chapter. Use the sidebar to open Overview, Architecture, Flows, Indexer, Backend,
        Frontend, or the product guides.
      </p>
      <button
        type="button"
        onClick={() => setSection('overview')}
        className="mt-8 text-purple-400 hover:text-purple-300 font-medium"
      >
        ← Back to overview
      </button>
    </div>
  )
}
