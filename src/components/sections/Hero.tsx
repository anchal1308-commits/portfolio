'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'

export function Hero() {
  return (
    <section className="overflow-hidden">
      <Container className="pt-16 md:pt-24 pb-6 md:pb-10">

        {/* Heading + right col — stacks on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-40">

          {/* Heading */}
          <FadeIn>
            <h1
              className="text-[clamp(36px,13vw,164px)] leading-[0.95] tracking-normal text-foreground"
              style={{ fontWeight: 300 }}
            >
              Anchal
              <br />
              Aggarwal
            </h1>
          </FadeIn>

          {/* Right — intro + CTAs (desktop only) */}
          <SlideIn delay={0.2}>
            <div className="hidden md:flex flex-col items-start gap-8 w-[420px] shrink-0">
              <p className="text-2xl text-muted-foreground leading-snug">
                Hi, I&apos;m a Senior Product Designer at Microsoft, designing intuitive solutions for enterprise Cloud.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/work"
                  className="rounded-full bg-foreground text-white px-6 py-3 text-sm font-medium whitespace-nowrap hover:bg-foreground/80 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium whitespace-nowrap hover:border-foreground transition-colors"
                >
                  About Me
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Mobile — description + CTAs */}
        <div className="mt-6 flex flex-col gap-4 md:hidden">
          <p className="text-sm sm:text-base text-muted-foreground">
            Hi, I&apos;m a Senior Product Designer at Microsoft, designing intuitive solutions for enterprise Cloud.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link href="/work" className="rounded-full bg-foreground text-white px-5 py-3 text-sm font-medium text-center whitespace-nowrap">
              View My Work
            </Link>
            <Link href="/about" className="rounded-full border border-border px-5 py-3 text-sm font-medium text-center whitespace-nowrap">
              About Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
