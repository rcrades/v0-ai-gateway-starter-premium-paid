"use client"

import { ReactNode } from "react"

interface FloatingElement {
  content: ReactNode
  className?: string
}

interface ThumbnailVariantProps {
  words: string
  floatingElements: FloatingElement[]
}

export function ThumbnailVariant({ words, floatingElements }: ThumbnailVariantProps) {
  return (
    <div className="relative w-[1200px] h-[630px] bg-background overflow-hidden flex items-center justify-center">
      {floatingElements.map((el, i) => (
        <div key={i} className={`absolute ${el.className}`}>
          {el.content}
        </div>
      ))}

      <h1 className="relative z-10 font-mono font-black leading-none tracking-tight text-foreground text-center select-none whitespace-pre-line" style={{ fontSize: words.includes("\n") ? "80px" : "120px" }}>
        {words}
      </h1>
    </div>
  )
}
