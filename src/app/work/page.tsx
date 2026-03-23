import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FilterableProjectGrid } from '@/components/sections/FilterableProjectGrid'
import { projects } from '@/data/projects'
import { FadeIn } from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Product design case studies and projects showcasing user-centered solutions'
}

export default function WorkPage() {
  const workProjects = projects.slice(0, 2)

  return (
    <div className="pt-20 md:pt-32 pb-12 md:pb-20">
      <Container>
        {/* Header */}
        <FadeIn>
          <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground mb-6">
            Portfolio
          </span>
          <div className="mb-10 md:mb-12 grid md:grid-cols-2 gap-6 md:gap-8 items-end">
            <h1 className="text-[clamp(28px,6vw,80px)] font-extrabold leading-tight tracking-tight">
              Explore my portfolio of creative solutions
            </h1>
            <p className="text-sm md:text-base text-muted-foreground md:text-right">
              A collection of projects showcasing user-centered design solutions across enterprise SaaS and cloud products.
            </p>
          </div>
        </FadeIn>

        {/* Project Grid */}
        <FilterableProjectGrid projects={workProjects} />
      </Container>
    </div>
  )
}
