"use client"

export function ThumbnailSettings() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-semibold text-foreground">Agent Settings</span>
        </div>
      </div>

      {/* Settings fields */}
      <div className="flex-1 px-6 py-4 flex flex-col gap-4 overflow-hidden">
        {/* Model */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Model</label>
          <div className="bg-muted rounded-lg px-3 py-2.5 flex items-center justify-between">
            <span className="text-sm text-foreground">anthropic/claude-opus-4.6</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Temperature */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Temperature</label>
            <span className="text-xs font-mono text-foreground">0.7</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-foreground rounded-full" />
          </div>
        </div>

        {/* System Prompt */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">System Prompt</label>
          <div className="bg-muted rounded-lg px-3 py-2.5 min-h-[60px]">
            <p className="text-sm text-foreground leading-relaxed">You are a helpful assistant. Be concise and direct in your responses.</p>
          </div>
        </div>

        {/* Max tokens */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Max Tokens</label>
          <div className="bg-muted rounded-lg px-3 py-2.5">
            <span className="text-sm font-mono text-foreground">4096</span>
          </div>
        </div>
      </div>
    </div>
  )
}
