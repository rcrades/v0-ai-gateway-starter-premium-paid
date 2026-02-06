"use client"

import { Badge } from "@/components/ui/badge"

const models = [
  { name: "GPT-4o", provider: "OpenAI", active: true },
  { name: "Claude Sonnet 4", provider: "Anthropic", active: false },
  { name: "Grok 4", provider: "xAI", active: false },
  { name: "Gemini Pro", provider: "Google", active: false },
  { name: "Llama 3.3", provider: "Fireworks", active: false },
]

export function ThumbnailModels() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold text-foreground">Model Selector</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Switch between providers with zero configuration</p>
      </div>

      {/* Model list */}
      <div className="flex-1 px-4 py-3 flex flex-col gap-1.5 overflow-hidden">
        {models.map((model) => (
          <div
            key={model.name}
            className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
              model.active
                ? "bg-foreground text-background"
                : "bg-muted text-foreground hover:bg-accent"
            }`}
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{model.name}</span>
              <span className={`text-xs ${model.active ? "text-background/60" : "text-muted-foreground"}`}>
                {model.provider}
              </span>
            </div>
            {model.active && (
              <Badge className="text-[10px] bg-background/20 text-background border-0 px-2 py-0.5">
                Active
              </Badge>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-border">
        <p className="text-[10px] text-muted-foreground text-center">
          {"Powered by Vercel AI Gateway \u2022 No API keys required"}
        </p>
      </div>
    </div>
  )
}
