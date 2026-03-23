import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { aboutData } from '@/data/about'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${aboutData.name}, their experience, skills, and design philosophy`
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground mb-6">
      {children}
    </span>
  )
}

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-32 pb-12 md:pb-20">
      <Container>

        {/* Intro */}
        <FadeIn>
          <SectionLabel>About Me</SectionLabel>
          <h1 className="text-[clamp(28px,5vw,72px)] font-extrabold leading-tight tracking-tight max-w-3xl mb-6">
            Design has always been more than just a job — it&apos;s my passion.
          </h1>
        </FadeIn>

        <SlideIn delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{aboutData.bio}</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">8+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Years of experience in product design</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">40+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Products shipped across Microsoft</p>
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Skills & Tools */}
        <section className="mb-16 md:mb-24">
          <FadeIn delay={0.3}>
            <SectionLabel>Skills &amp; Tools</SectionLabel>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-5 md:mb-6">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {aboutData.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-muted px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-5 md:mb-6">Tools</h2>
                <div className="flex flex-wrap gap-2">
                  {aboutData.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-muted px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experience */}
        <section className="mb-16 md:mb-24">
          <FadeIn delay={0.4}>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="text-[clamp(24px,4vw,56px)] font-extrabold tracking-tight mb-10 md:mb-12">
              A yearly snapshot of my creative growth
            </h2>
          </FadeIn>

          <div className="divide-y divide-border">
            {aboutData.experience.map((exp, index) => (
              <SlideIn key={`${exp.company}-${exp.period}`} delay={0.5 + index * 0.1} direction="left">
                <div className="py-6 md:py-8 grid md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground mt-1 font-medium text-sm sm:text-base">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 md:mt-3 max-w-xl leading-relaxed">{exp.description}</p>
                  </div>
                  <span className="text-base sm:text-lg md:text-2xl font-extrabold text-muted-foreground/40 shrink-0 tracking-tight">
                    {exp.period}
                  </span>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <FadeIn delay={0.9}>
            <SectionLabel>Design Philosophy</SectionLabel>
            <blockquote className="text-[clamp(18px,3vw,36px)] font-bold leading-snug tracking-tight max-w-3xl">
              &ldquo;{aboutData.philosophy}&rdquo;
            </blockquote>
          </FadeIn>
        </section>

      </Container>
    </div>
  )
}
