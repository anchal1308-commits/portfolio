'use client'

import Link from 'next/link'
import Image from 'next/image'
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
        <article className="overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">
          {/* Project Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
            {/* Placeholder for image - you'll replace this with actual images */}
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
              <svg
                className="h-20 w-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {project.category} · {project.year}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-muted-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground">{project.subtitle}</p>
          </div>
        </article>
      </Link>
    </FadeIn>
  )
}
