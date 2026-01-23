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
            <div className="space-y-12">
              {project.process.map((step, index) => (
                <div key={index}>
                  <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed">{step.description}</p>
                  {step.image && (
                    <div className="aspect-video w-full rounded-lg bg-muted">
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
                  )}
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* Solution */}
          <CaseStudySection title="The Solution" delay={0.6}>
            <p className="text-lg leading-relaxed">{project.solution}</p>
          </CaseStudySection>

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
