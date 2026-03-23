'use client'

import { useState } from 'react'
import { Project } from '@/types/project'
import { ProjectCard } from './ProjectCard'
import { FadeIn } from '@/components/animations/FadeIn'

interface FilterableProjectGridProps {
  projects: Project[]
}

export function FilterableProjectGrid({ projects }: FilterableProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const categories = ['All', 'UX', 'UI', 'Branding', 'Product']

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div>
      {/* Category Filter */}
      <FadeIn>
        <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-base sm:text-lg text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  )
}
