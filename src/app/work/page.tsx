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
  return (
    <div className="py-20">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">Selected Work</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              A collection of projects showcasing user-centered design solutions across various industries
            </p>
          </div>
        </FadeIn>

        {/* Filterable Project Grid */}
        <FilterableProjectGrid projects={projects} />
      </Container>
    </div>
  )
}
