import { NextResponse, NextRequest } from 'next/server'
import { kv } from '@vercel/kv';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.slice(1)

  if (!pathname || pathname.includes('_next') || pathname.includes('favicon')) {
    return NextResponse.next()
  }
  console.log('pathname: ' + pathname)
  const shortendUrl = await kv.hget('links', pathname) as string;
  console.log('shortendUrl: ' + shortendUrl)
  if (shortendUrl && typeof shortendUrl === 'string') {
    const statusCode = 308
    return NextResponse.redirect(shortendUrl, statusCode)
  }

  // No redirect found, continue without redirecting
  return NextResponse.next()
}