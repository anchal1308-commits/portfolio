import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/sections/ContactForm'
import { FadeIn } from '@/components/animations/FadeIn'
import { SlideIn } from '@/components/animations/SlideIn'
import { aboutData } from '@/data/about'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for design projects and collaborations'
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">Let's Connect</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Interested in collaborating, speaking opportunities, or discussing enterprise design? I'd love to hear from you.
            </p>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <SlideIn delay={0.2}>
          <ContactForm />
        </SlideIn>

        {/* Alternative Contact Methods */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="mb-4 text-muted-foreground">You can also reach me at:</p>
            <a
              href={`mailto:${aboutData.email}`}
              className="text-lg font-semibold hover:text-muted-foreground transition-colors"
            >
              {aboutData.email}
            </a>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.5}>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Behance
            </a>
            <a
              href="https://dribbble.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Dribbble
            </a>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
