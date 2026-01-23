import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: 'https://linkedin.com/in/yourname', label: 'LinkedIn' },
    { href: 'https://behance.net/yourname', label: 'Behance' },
    { href: 'https://dribbble.com/yourname', label: 'Dribbble' },
    { href: 'https://twitter.com/yourname', label: 'Twitter' }
  ]

  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
