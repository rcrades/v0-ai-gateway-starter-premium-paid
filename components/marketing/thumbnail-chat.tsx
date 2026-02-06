"use client"

import { Badge } from "@/components/ui/badge"

export function ThumbnailChat() {
  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col">
      {/* Mini header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-foreground flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-background">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-foreground">AI Gateway Starter</span>
        </div>
        <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground">
          Claude Opus 4.6
        </Badge>
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-6 py-4 flex flex-col gap-3 overflow-hidden">
        <div className="flex gap-3 items-start">
          <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[75%]">
            <p className="text-sm text-foreground">How do I set up streaming with the AI SDK?</p>
          </div>
        </div>

        <div className="flex gap-3 items-start justify-end">
          <div className="bg-foreground text-background rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
            <p className="text-sm leading-relaxed">
              {"Use streamText() in a route handler and return toUIMessageStreamResponse(). On the client, useChat with DefaultChatTransport handles the stream automatically."}
            </p>
          </div>
          <div className="h-7 w-7 rounded-full bg-foreground flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-background">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[75%]">
            <p className="text-sm text-foreground">Can I switch models on the fly?</p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-3">
          <span className="text-sm text-muted-foreground flex-1">Ask anything...</span>
          <div className="h-7 w-7 rounded-lg bg-foreground flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-background">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
