'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Designing Enterprise
            <br />
            <span className="text-muted-foreground">SaaS at Scale</span>
          </h1>
        </FadeIn>

        <SlideIn delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Senior Product Designer at Microsoft | 8 years crafting cloud desktop experiences for Windows 365 & Azure Virtual Desktop
          </p>
        </SlideIn>

        <SlideIn delay={0.4}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/work">
              <Button size="lg" variant="primary">
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
