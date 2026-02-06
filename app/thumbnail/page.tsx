"use client"

import React from "react"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ThumbnailChat } from "@/components/marketing/thumbnail-chat"
import { ThumbnailModels } from "@/components/marketing/thumbnail-models"
import { ThumbnailSettings } from "@/components/marketing/thumbnail-settings"

const vignettes: Record<string, React.ComponentType> = {
  "1": ThumbnailChat,
  "2": ThumbnailModels,
  "3": ThumbnailSettings,
}

function ThumbnailContent() {
  const searchParams = useSearchParams()
  const v = searchParams.get("v") ?? "1"
  const Component = vignettes[v] ?? ThumbnailChat

  return (
    <div className="w-[1200px] h-[630px]">
      <Component />
    </div>
  )
}

export default function ThumbnailPage() {
  return (
    <Suspense fallback={<div className="w-[1200px] h-[630px] bg-background" />}>
      <ThumbnailContent />
    </Suspense>
  )
}
