'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="pt-20 md:pt-32 pb-12 md:pb-20">
      <Container>
        <p className="text-xs text-muted-foreground mb-4">Error</p>
        <h1 className="text-[clamp(28px,5vw,72px)] font-extrabold leading-tight tracking-tight max-w-xl mb-6">
          Something went wrong
        </h1>
        <p className="text-base text-muted-foreground mb-8 max-w-md">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-200"
        >
          Try again
        </button>
      </Container>
    </div>
  )
}
