import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CaseStudySection } from '@/components/sections/CaseStudySection'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { projects, getProjectBySlug } from '@/data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: project.title,
    description: project.subtitle
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Find the next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="mb-20">
        <Container>
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/work"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Work
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{project.title}</h1>
              <p className="text-xl text-muted-foreground md:text-2xl">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="font-semibold">Role:</span> {project.role}
              </div>
              {project.client && (
                <div>
                  <span className="font-semibold">Client:</span> {project.client}
                </div>
              )}
              {project.duration && (
                <div>
                  <span className="font-semibold">Duration:</span> {project.duration}
                </div>
              )}
              <div>
                <span className="font-semibold">Year:</span> {project.year}
              </div>
            </div>
          </FadeIn>
        </Container>

        {/* Hero Image Placeholder */}
        <SlideIn delay={0.2}>
          <div className="mt-12 aspect-video w-full bg-muted">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <svg
                className="h-32 w-32"
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
        </SlideIn>
      </div>

      {/* Content Sections */}
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Overview */}
          <CaseStudySection title="Overview" delay={0.3}>
            <p className="text-lg leading-relaxed">{project.overview}</p>
          </CaseStudySection>

          {/* Challenge */}
          <CaseStudySection title="The Challenge" delay={0.4}>
            <p className="text-lg leading-relaxed">{project.challenge}</p>
          </CaseStudySection>

          {/* Process */}
          <CaseStudySection title="Design Process" delay={0.5}>
            <div className="relative overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max pb-4">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-center">
                    {/* Process Card */}
                    <div className="relative flex flex-col items-center w-64 group">
                      {/* Step Number */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4 shadow-md">
                        {index + 1}
                      </div>

                      {/* Card */}
                      <div className="w-full p-6 rounded-lg border-2 border-border bg-card hover:border-primary transition-all hover:shadow-lg">
                        <h3 className="text-base font-semibold mb-3 text-center min-h-[2.5rem] flex items-center justify-center">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center line-clamp-3">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < project.process.length - 1 && (
                      <div className="flex items-center px-3 pb-16">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline info */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{project.duration}</span> (2024-2025)
            </div>
          </CaseStudySection>

          {/* Solution */}
          <CaseStudySection title="The Solution" delay={0.6}>
            <p className="text-lg leading-relaxed">{project.solution}</p>
          </CaseStudySection>

          {/* Design Details */}
          {project.designDetails && project.designDetails.length > 0 && (
            <CaseStudySection title="Design Evolution" delay={0.65}>
              <div className="space-y-16">
                {project.designDetails.map((detail, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          detail.phase === 'exploration'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}
                      >
                        {detail.phase === 'exploration' ? 'Early Exploration' : 'Final Design'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{detail.title}</h3>

                    <div className="aspect-video w-full rounded-lg bg-muted overflow-hidden">
                      <div className="flex h-full items-center justify-center text-muted-foreground">
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

                    {detail.insights && detail.insights.length > 0 && (
                      <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
                        <h4 className="mb-2 text-sm font-semibold text-blue-900 dark:text-blue-100">
                          Insights from UXR
                        </h4>
                        <ul className="space-y-1">
                          {detail.insights.map((insight, i) => (
                            <li key={i} className="text-sm text-blue-800 dark:text-blue-200 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {detail.updates && detail.updates.length > 0 && (
                      <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                        <h4 className="mb-2 text-sm font-semibold text-green-900 dark:text-green-100">
                          Design Update
                        </h4>
                        <ul className="space-y-1">
                          {detail.updates.map((update, i) => (
                            <li key={i} className="text-sm text-green-800 dark:text-green-200 flex items-start">
                              <span className="mr-2">✓</span>
                              <span>{update}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CaseStudySection>
          )}

          {/* Outcomes */}
          <CaseStudySection title="Outcomes & Impact" delay={0.7}>
            <div className="grid gap-8 md:grid-cols-3">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="rounded-lg bg-muted p-6 text-center">
                  <div className="mb-2 text-4xl font-bold">{outcome.value}</div>
                  <div className="mb-2 text-xl font-semibold">{outcome.metric}</div>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>
        </div>

        {/* Next Project */}
        <FadeIn delay={0.8}>
          <div className="mt-20 border-t border-border pt-20">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-muted-foreground">Next Project</p>
              <h3 className="mb-8 text-3xl font-bold">{nextProject.title}</h3>
              <Link href={`/work/${nextProject.slug}`}>
                <Button size="lg">View Case Study</Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
