'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/'

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(from)
      router.refresh()
    } else {
      setError('Incorrect password. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect width="9" height="9" fill="currentColor" />
            <rect x="11" y="11" width="9" height="9" fill="currentColor" />
          </svg>
          <span className="text-sm font-bold tracking-tight">Anchal</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight mb-2">Private preview</h1>
        <p className="text-sm text-muted-foreground mb-8">This site is password protected.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
            required
            autoFocus
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-foreground text-background rounded-sm px-4 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Enter →'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
