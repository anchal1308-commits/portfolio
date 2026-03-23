import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('portfolio_auth')
  const secret = process.env.PORTFOLIO_SECRET

  if (secret && cookie?.value === secret) {
    return NextResponse.next()
  }

  const from = request.nextUrl.pathname
  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', from)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!login|api|_next/static|_next/image|favicon.ico).*)'],
}
