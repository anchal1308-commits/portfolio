import { Hero } from '@/components/sections/Hero'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { Container } from '@/components/ui/Container'
import { projects } from '@/data/projects'
import { aboutData } from '@/data/about'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <>
      <Hero />

      <hr className="border-t border-foreground/8 mt-16 md:mt-24" />

      {/* Featured Work — white background (same as Hero) */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-32 md:pb-40">
        <Container>
          <FadeIn>
            <div className="mb-10 md:mb-12 grid md:grid-cols-2 gap-6 md:gap-8 items-end">
              <h2 className="text-[clamp(28px,5vw,64px)] font-light leading-tight tracking-normal">
                Recent projects
              </h2>
            </div>
          </FadeIn>
          <ProjectGrid projects={featuredProjects} />
        </Container>
      </section>

      {/* Work Experience — gray bg extends to footer */}
      <div className="bg-muted flex-1">
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-32 md:pb-40">
          <Container>
            <FadeIn>
              <div className="mb-10 md:mb-12 grid md:grid-cols-2 gap-6 md:gap-8 items-end">
                <h2 className="text-[clamp(28px,5vw,64px)] font-light leading-tight tracking-normal">
                  Work experience
                </h2>
              </div>
            </FadeIn>

            <div className="divide-y divide-border">
              {aboutData.experience.map((exp, index) => (
                <SlideIn key={index} delay={0.1 + index * 0.1} direction="left">
                  <div className="py-6 md:py-8 grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-start hover:bg-foreground/[0.03] transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">{exp.role}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 md:mt-3 max-w-xl leading-relaxed">{exp.description}</p>
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-light text-foreground/50 shrink-0 tracking-tight whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </SlideIn>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}
