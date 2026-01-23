import { FadeIn } from '@/components/animations/FadeIn'

interface CaseStudySectionProps {
  title: string
  children: React.ReactNode
  delay?: number
}

export function CaseStudySection({ title, children, delay = 0 }: CaseStudySectionProps) {
  return (
    <FadeIn delay={delay}>
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="prose prose-lg max-w-none">{children}</div>
      </section>
    </FadeIn>
  )
}
