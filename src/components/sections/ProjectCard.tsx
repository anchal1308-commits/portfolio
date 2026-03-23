'use client'

import Link from 'next/link'
import { Project } from '@/types/project'
import { FadeIn } from '@/components/animations/FadeIn'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link href={`/work/${project.slug}`} className="group block">
        <article>
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            <div className="flex h-full w-full items-center justify-center bg-[#f0f0f0] text-muted-foreground">
              <svg className="h-16 w-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:opacity-60 transition-opacity">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
            </div>
            {/* Arrow */}
            <span className="shrink-0 mt-1 w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-all duration-200">
              →
            </span>
          </div>

          <div className="mt-3">
            <span className="text-xs text-muted-foreground">{project.client} · {project.year}</span>
          </div>
        </article>
      </Link>
    </FadeIn>
  )
}
