import { Hero } from '@/components/sections/Hero'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { Container } from '@/components/ui/Container'
import { projects } from '@/data/projects'
import { FadeIn } from '@/components/animations/FadeIn'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Featured Work Section */}
      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Featured Work</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                A selection of recent projects showcasing user-centered design solutions
              </p>
            </div>
          </FadeIn>

          <ProjectGrid projects={featuredProjects} />
        </Container>
      </section>
    </>
  )
}
