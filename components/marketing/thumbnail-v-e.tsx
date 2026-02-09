"use client"

import { ThumbnailVariant } from "./thumbnail-variant"

export function ThumbnailVE() {
  return (
    <ThumbnailVariant
      words={`Vercel AI\nGateway Starter`}
      floatingElements={[
        // === TOP-LEFT REGION ===
        // Chat bubble with streaming indicator
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-3 shadow-lg w-[200px]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-foreground/60 text-[10px]">Streaming</span>
              </div>
              <p className="text-foreground/80 text-[11px]">Here is how you can deploy...</p>
              <div className="flex gap-0.5 mt-1">
                <div className="w-1 h-1 rounded-full bg-foreground/40 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-foreground/30 animate-pulse [animation-delay:150ms]" />
                <div className="w-1 h-1 rounded-full bg-foreground/20 animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          ),
          className: "top-[30px] left-[30px] rotate-[-2deg] z-20 opacity-90",
        },
        // Temperature slider
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2.5 shadow-lg w-[170px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-foreground/50 text-[9px]">Temperature</span>
                <span className="text-foreground/70 text-[9px] font-mono">0.7</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full">
                <div className="w-[35%] h-full bg-foreground/50 rounded-full" />
              </div>
            </div>
          ),
          className: "top-[150px] left-[40px] rotate-[1deg] z-20 opacity-85",
        },

        // === TOP-RIGHT REGION ===
        // Model selector chips
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2 shadow-lg flex items-center gap-1.5">
              <div className="bg-foreground rounded-full px-2 py-1">
                <span className="text-background text-[9px] font-medium">Claude Opus 4.6</span>
              </div>
              <div className="bg-muted rounded-full px-2 py-1">
                <span className="text-foreground/50 text-[9px] font-medium">GPT-4o</span>
              </div>
              <div className="bg-muted rounded-full px-2 py-1">
                <span className="text-foreground/50 text-[9px] font-medium">Grok 3</span>
              </div>
            </div>
          ),
          className: "top-[25px] right-[30px] rotate-[2deg] z-20 opacity-90",
        },
        // Provider grid
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2.5 shadow-lg">
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { letter: "A", color: "bg-orange-500/20 text-orange-400", name: "Anthropic" },
                  { letter: "O", color: "bg-emerald-500/20 text-emerald-400", name: "OpenAI" },
                  { letter: "x", color: "bg-blue-500/20 text-blue-400", name: "xAI" },
                  { letter: "G", color: "bg-sky-500/20 text-sky-400", name: "Google" },
                  { letter: "F", color: "bg-amber-500/20 text-amber-400", name: "Fireworks" },
                  { letter: "B", color: "bg-rose-500/20 text-rose-400", name: "Bedrock" },
                ].map((p) => (
                  <div key={p.name} className="flex flex-col items-center gap-0.5 rounded-md bg-muted p-1.5">
                    <div className={`w-5 h-5 rounded-full ${p.color.split(" ")[0]} flex items-center justify-center`}>
                      <span className={`${p.color.split(" ")[1]} text-[8px] font-bold`}>{p.letter}</span>
                    </div>
                    <span className="text-foreground/50 text-[7px]">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
          className: "top-[90px] right-[25px] rotate-[-1deg] z-20 opacity-85",
        },

        // === BOTTOM-LEFT REGION ===
        // Code snippet
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2.5 shadow-lg w-[230px] font-mono text-[9px]">
              <div className="flex items-center gap-1 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                <span className="text-foreground/30 text-[7px] ml-1">route.ts</span>
              </div>
              <p><span className="text-sky-400">const</span> <span className="text-foreground/60">result</span> <span className="text-sky-400">= await</span> <span className="text-yellow-400">streamText</span><span className="text-foreground/40">{"({"}</span></p>
              <p><span className="text-foreground/40">{"  "}</span><span className="text-foreground/60">model: </span><span className="text-emerald-400">&apos;anthropic/claude-opus-4.6&apos;</span></p>
              <p><span className="text-foreground/40">{"  "}</span><span className="text-foreground/60">messages, temperature, maxTokens</span></p>
              <p><span className="text-foreground/40">{"})"}</span></p>
            </div>
          ),
          className: "bottom-[30px] left-[25px] rotate-[1.5deg] z-20 opacity-90",
        },
        // Feature toggle switches
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2.5 shadow-lg w-[140px]">
              {[
                { label: "Streaming", on: true },
                { label: "Multi-model", on: true },
                { label: "Structured", on: true },
              ].map((f) => (
                <div key={f.label} className="flex items-center justify-between py-0.5">
                  <span className="text-foreground/70 text-[9px]">{f.label}</span>
                  <div className={`h-3 w-5.5 rounded-full flex items-center px-0.5 ${f.on ? "bg-emerald-500 justify-end" : "bg-muted justify-start"}`}>
                    <div className="h-2 w-2 rounded-full bg-background shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          ),
          className: "bottom-[155px] left-[30px] rotate-[-1deg] z-20 opacity-80",
        },

        // === BOTTOM-RIGHT REGION ===
        // Settings panel fragment
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2.5 shadow-lg w-[190px]">
              <p className="text-foreground/60 text-[9px] font-medium mb-2">Agent Settings</p>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-foreground/40 text-[8px]">Top-p</span>
                    <span className="text-foreground/60 text-[8px] font-mono">0.95</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full"><div className="w-[95%] h-full bg-foreground/30 rounded-full" /></div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-foreground/40 text-[8px]">Max Tokens</span>
                    <span className="text-foreground/60 text-[8px] font-mono">4096</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full"><div className="w-[50%] h-full bg-foreground/30 rounded-full" /></div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-foreground/40 text-[8px]">Freq. Penalty</span>
                    <span className="text-foreground/60 text-[8px] font-mono">0.0</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full"><div className="w-[0%] h-full bg-foreground/30 rounded-full" /></div>
                </div>
              </div>
            </div>
          ),
          className: "bottom-[30px] right-[25px] rotate-[-1.5deg] z-20 opacity-90",
        },
        // Output format chips
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2 shadow-lg flex items-center gap-1">
              <span className="bg-foreground text-background rounded-full px-2 py-0.5 text-[8px] font-medium">Markdown</span>
              <span className="bg-muted text-foreground/50 rounded-full px-2 py-0.5 text-[8px] font-medium">JSON</span>
              <span className="bg-muted text-foreground/50 rounded-full px-2 py-0.5 text-[8px] font-medium">Structured</span>
            </div>
          ),
          className: "bottom-[170px] right-[30px] rotate-[1deg] z-20 opacity-80",
        },

        // === BEHIND TEXT (lower opacity) ===
        // API endpoint badge
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
              <div className="flex items-center gap-1.5">
                <span className="bg-emerald-500/20 text-emerald-400 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">POST</span>
                <span className="text-foreground/50 text-[9px] font-mono">/api/chat</span>
              </div>
            </div>
          ),
          className: "top-[250px] left-[150px] rotate-[0.5deg] z-0 opacity-30",
        },
        // System prompt textarea
        {
          content: (
            <div className="bg-card border border-border rounded-lg p-2 shadow-lg w-[200px]">
              <span className="text-foreground/40 text-[8px]">System Prompt</span>
              <div className="mt-1 bg-muted rounded p-1.5">
                <p className="text-foreground/30 text-[8px]">You are a helpful assistant. Be concise and direct...</p>
              </div>
            </div>
          ),
          className: "top-[100px] left-[250px] rotate-[-0.5deg] z-0 opacity-25",
        },
        // Stop sequences
        {
          content: (
            <div className="bg-card border border-border rounded p-1.5 shadow-lg flex items-center gap-1">
              <span className="bg-muted rounded px-1.5 py-0.5 text-foreground/30 text-[8px] font-mono">{'"\\n\\nHuman:"'}</span>
              <span className="bg-muted rounded px-1.5 py-0.5 text-foreground/30 text-[8px] font-mono">{'"</s>"'}</span>
            </div>
          ),
          className: "bottom-[260px] right-[200px] rotate-[1deg] z-0 opacity-25",
        },
        // Chat input bar
        {
          content: (
            <div className="bg-card border border-border rounded-full shadow-lg flex items-center gap-2 px-3 py-1.5 w-[240px]">
              <span className="text-foreground/25 text-[9px]">Ask anything...</span>
              <div className="ml-auto bg-foreground/10 rounded-full p-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-foreground/30">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ),
          className: "bottom-[220px] left-[200px] rotate-[0deg] z-0 opacity-20",
        },
      ]}
    />
  )
}
