"use client"

import { Badge } from "@/components/ui/badge"

const included = [
  { label: "Streaming responses", category: "core" },
  { label: "Model switching (6 models)", category: "core" },
  { label: "System prompt editor", category: "core" },
  { label: "Temperature", category: "sampling" },
  { label: "Max tokens", category: "sampling" },
  { label: "Top-p", category: "sampling" },
  { label: "Top-k", category: "sampling" },
  { label: "Frequency penalty", category: "sampling" },
  { label: "Presence penalty", category: "sampling" },
  { label: "Stop sequences", category: "sampling" },
  { label: "Markdown output", category: "output" },
  { label: "JSON / Structured output", category: "output" },
]

const providers = ["Anthropic", "OpenAI", "xAI", "Google", "Fireworks", "AWS Bedrock"]

const needsIntegration = [
  { label: "Chat persistence", integration: "Supabase / Neon" },
  { label: "RAG / Vector search", integration: "Upstash Search" },
  { label: "Rate limiting", integration: "Upstash Redis" },
  { label: "File uploads", integration: "Vercel Blob" },
]

const buildYourself = [
  "Tool calling UI",
  "Multi-modal input",
  "Guardrails / validation",
  "Code execution sandbox",
  "Web search tool",
  "Context window tracking",
  "Conversation branching",
]

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
          {included.length} included
        </Badge>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-2 h-full divide-x divide-border">
          {/* Left column -- Included */}
          <div className="flex flex-col divide-y divide-border overflow-hidden">
            {/* What ships out of the box */}
            <div className="px-4 py-2.5">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Included</span>
              </div>
              <div className="grid grid-cols-1 gap-0.5">
                {included.map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-emerald-500 shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zero-config providers */}
            <div className="px-4 py-2.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Zero-Config Providers</span>
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
          </div>

          {/* Right column -- Needs integration + Build yourself */}
          <div className="flex flex-col divide-y divide-border overflow-hidden">
            {/* Needs integration */}
            <div className="px-4 py-2.5">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Needs Integration</span>
              </div>
              <div className="flex flex-col gap-1">
                {needsIntegration.map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-muted rounded-md px-2.5 py-1.5">
                    <span className="text-[10px] text-foreground">{item.label}</span>
                    <span className="text-[9px] font-mono text-muted-foreground">{item.integration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Build yourself */}
            <div className="px-4 py-2.5">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Build It Yourself</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {buildYourself.map((item) => (
                  <span key={item} className="inline-block rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
