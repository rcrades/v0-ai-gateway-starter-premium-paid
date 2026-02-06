"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/marketing/hero-carousel"
import { FeatureCards } from "@/components/marketing/feature-cards"
import { TechStack } from "@/components/marketing/tech-stack"
import { ExploreCards } from "@/components/marketing/explore-cards"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - copy */}
              <div className="flex flex-col gap-6">
                <Badge variant="secondary" className="w-fit px-3 py-1 text-xs bg-secondary text-secondary-foreground">
                  Built with AI SDK 6
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
                  AI Gateway Starter
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  A production-ready chatbot template powered by the Vercel AI Gateway. Multi-model support, agent settings, streaming UI, and a clean codebase you can ship today.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Button size="lg" asChild>
                    <Link href="/chat">Open Chat</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/vercel/ai" target="_blank">
                      View Source
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right - carousel */}
              <div className="w-full">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="flex flex-col gap-4 mb-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
                Everything you need to ship an AI chat app
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From streaming to model switching, this starter covers the full stack so you can focus on your product.
              </p>
            </div>
            <FeatureCards />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="flex flex-col gap-4 mb-10 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
                Built on proven foundations
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Modern stack, minimal footprint, maximum flexibility.
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        {/* Explore */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="flex flex-col gap-4 mb-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
                Get started
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Try the live demo, explore the code, or deploy your own instance.
              </p>
            </div>
            <ExploreCards />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-5 w-5 rounded bg-foreground flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-background">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>AI Gateway Starter</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="https://sdk.vercel.ai" target="_blank" className="hover:text-foreground transition-colors">
              AI SDK Docs
            </Link>
            <Link href="https://vercel.com" target="_blank" className="hover:text-foreground transition-colors">
              Vercel
            </Link>
            <Link href="https://github.com/vercel/ai" target="_blank" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
