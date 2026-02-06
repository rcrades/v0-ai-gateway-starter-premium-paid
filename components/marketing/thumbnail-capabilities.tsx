"use client"

import { Badge } from "@/components/ui/badge"

const toggles = [
  { label: "Streaming", on: true },
  { label: "Tool Calling", on: true },
  { label: "Multi-modal", on: false },
  { label: "RAG", on: false },
  { label: "Guardrails", on: false },
  { label: "Memory", on: false },
]

const knobs = [
  { label: "Temperature", value: "0.7" },
  { label: "Max Tokens", value: "4096" },
  { label: "Top-p", value: "0.95" },
  { label: "Top-k", value: "40" },
  { label: "Freq. Penalty", value: "0.0" },
  { label: "Pres. Penalty", value: "0.0" },
]

const providers = ["Anthropic", "OpenAI", "xAI", "Google", "Fireworks", "Mistral", "Cohere", "Meta"]

const tools = [
  { name: "web_search", icon: "M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 0 1 9-9" },
  { name: "code_exec", icon: "M16 18l6-6-6-6M8 6l-6 6 6 6" },
  { name: "file_read", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" },
  { name: "calculator", icon: "M4 4h16v16H4zM4 9h16M9 4v16" },
]

const formats = ["Markdown", "Plain Text", "JSON", "Structured"]

export function ThumbnailCapabilities() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col text-xs">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <path d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-semibold text-foreground">Capabilities</span>
        </div>
        <Badge variant="secondary" className="text-[9px] px-1.5 py-0 bg-secondary text-secondary-foreground">
          12 configurable
        </Badge>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-2 h-full divide-x divide-border">
          {/* Left column */}
          <div className="flex flex-col divide-y divide-border overflow-hidden">
            {/* Feature toggles */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Features</span>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-2">
                {toggles.map((t) => (
                  <div key={t.label} className="flex items-center gap-1.5">
                    <div className={`h-3 w-5 rounded-full flex items-center ${t.on ? "bg-foreground justify-end" : "bg-muted justify-start"}`}>
                      <div className={`h-2 w-2 rounded-full mx-0.5 ${t.on ? "bg-background" : "bg-muted-foreground/50"}`} />
                    </div>
                    <span className={`text-[11px] ${t.on ? "text-foreground" : "text-muted-foreground"}`}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sampling parameters */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Sampling</span>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2">
                {knobs.map((k) => (
                  <div key={k.label} className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">{k.label}</span>
                    <span className="text-[10px] font-mono text-foreground">{k.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response format */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Output Format</span>
              <div className="flex flex-wrap gap-1 mt-2">
                {formats.map((f, i) => (
                  <span
                    key={f}
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] ${
                      i === 0 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col divide-y divide-border overflow-hidden">
            {/* Providers */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Providers</span>
              <div className="flex flex-wrap gap-1 mt-2">
                {providers.map((p, i) => (
                  <span
                    key={p}
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      i === 0 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Tool Definitions</span>
              <div className="flex flex-col gap-1 mt-2">
                {tools.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 bg-muted rounded-md px-2.5 py-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-muted-foreground shrink-0">
                      <path d={t.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] font-mono text-foreground">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Advanced</span>
              <div className="grid grid-cols-1 gap-1 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Stop Sequences</span>
                  <span className="text-[10px] font-mono text-foreground">2 set</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Context Window</span>
                  <span className="text-[10px] font-mono text-foreground">128k</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Rate Limit</span>
                  <span className="text-[10px] font-mono text-foreground">60/min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">Persistence</span>
                  <span className="text-[10px] font-mono text-foreground">Session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
