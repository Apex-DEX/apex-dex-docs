import mermaid from 'mermaid'
import { useEffect, useId, useRef, useState } from 'react'

let mermaidInitialized = false

function initMermaid() {
  if (mermaidInitialized) return
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    themeVariables: {
      darkMode: true,
      primaryColor: '#4c1d95',
      primaryTextColor: '#f1f5f9',
      primaryBorderColor: '#7c3aed',
      lineColor: '#94a3b8',
      secondaryColor: '#1e293b',
      tertiaryColor: '#0f172a',
      background: '#131a2a',
      mainBkg: '#1b2236',
      nodeBorder: '#475569',
      clusterBkg: 'rgba(15, 23, 42, 0.6)',
      titleColor: '#e2e8f0',
      edgeLabelBackground: '#1b2236',
    },
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
    sequence: { useMaxWidth: true },
  })
  mermaidInitialized = true
}

type Props = {
  chart: string
  className?: string
}

export function MermaidDiagram({ chart, className = '' }: Props) {
  const reactId = useId().replace(/:/g, '')
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false
    setError(null)
    initMermaid()

    const id = `mmd-${reactId}-${Math.random().toString(36).slice(2, 9)}`
    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (cancelled || !containerRef.current) return
        containerRef.current.innerHTML = svg
      })
      .catch((e: unknown) => {
        if (cancelled) return
        const msg = e instanceof Error ? e.message : String(e)
        setError(msg)
      })

    return () => {
      cancelled = true
      if (el) el.innerHTML = ''
    }
  }, [chart, reactId])

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0a0e18] p-4 md:p-6 overflow-x-auto max-w-full min-w-0 ${className}`}
    >
      {error && (
        <p className="text-sm text-red-400 font-mono mb-2">Diagram error: {error}</p>
      )}
      <div ref={containerRef} className="mermaid-root flex justify-center [&_svg]:max-w-full [&_svg]:h-auto" />
    </div>
  )
}
