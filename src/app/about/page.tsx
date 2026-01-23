import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { aboutData } from '@/data/about'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${aboutData.name}, their experience, skills, and design philosophy`
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">About Me</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {aboutData.title} based in {aboutData.location}
            </p>
          </div>
        </FadeIn>

        {/* Bio Section */}
        <SlideIn delay={0.2}>
          <section className="mb-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed md:text-xl">{aboutData.bio}</p>
            </div>
          </section>
        </SlideIn>

        {/* Skills & Tools */}
        <section className="mb-20">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn delay={0.3}>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {aboutData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-muted px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Tools</h2>
                <div className="flex flex-wrap gap-3">
                  {aboutData.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-muted px-4 py-2 text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <FadeIn delay={0.5}>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Experience</h2>
          </FadeIn>

          <div className="mx-auto max-w-3xl space-y-8">
            {aboutData.experience.map((exp, index) => (
              <SlideIn key={index} delay={0.6 + index * 0.1} direction="left">
                <div className="border-l-2 border-border pl-6">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mb-2 font-medium text-muted-foreground">{exp.company}</p>
                  <p className="leading-relaxed text-muted-foreground">{exp.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <FadeIn delay={0.9}>
            <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 md:p-12">
              <h2 className="mb-6 text-3xl font-bold">Design Philosophy</h2>
              <p className="text-lg leading-relaxed">{aboutData.philosophy}</p>
            </div>
          </FadeIn>
        </section>
      </Container>
    </div>
  )
}
