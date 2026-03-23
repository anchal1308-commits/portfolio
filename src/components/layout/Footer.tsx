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
    <footer className="bg-[#0a0a0a] text-white">
      {/* CTA Section */}
      <Container>
        <div className="py-16 md:py-28 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-[clamp(36px,7vw,96px)] font-extrabold leading-[0.95] tracking-tight text-white">
            Let&apos;s Connect<br />There
          </h2>
          <Link
            href="mailto:anchal1308@gmail.com"
            className="flex items-center gap-3 rounded-full border border-white/60 px-5 sm:px-6 py-3 text-sm font-medium text-white whitespace-nowrap hover:bg-white hover:text-black transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs">»</span>
            Hire Me Now
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 md:py-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 md:gap-6">
          {/* Logo + description */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-white mb-1">Anchal Aggarwal</p>
            <p className="text-xs text-white/70">Senior Product Designer · Microsoft</p>
          </div>

          {/* Social */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/60 text-center sm:text-right">
            © {currentYear} Anchal Aggarwal. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
