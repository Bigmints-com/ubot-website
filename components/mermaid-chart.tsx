"use client"

import React, { useEffect, useRef, useState } from "react"

export default function MermaidChart({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const id = useRef(`mermaid-${Math.random().toString(36).substring(7)}`)

  useEffect(() => {
    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "hsl(240 3.7% 15.9%)",
            primaryTextColor: "hsl(0 0% 98%)",
            primaryBorderColor: "hsl(240 3.7% 15.9%)",
            lineColor: "hsl(240 5% 64.9%)",
            secondaryColor: "hsl(240 10% 3.9%)",
            tertiaryColor: "hsl(240 10% 3.9%)",
          },
          securityLevel: "loose",
        })

        const { svg } = await mermaid.render(id.current, chart)
        setSvg(svg)
        setError(null)
      } catch (err: unknown) {
        console.error("Mermaid render error:", err)
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    render()
  }, [chart])

  if (error) {
    return (
      <div className="my-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
        Failed to render diagram: {error}
      </div>
    )
  }

  if (!svg) {
    return (
      <div className="my-6 flex items-center justify-center rounded-lg border bg-muted/50 p-12">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border bg-muted/50 p-6">
      <div
        className="flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  )
}
