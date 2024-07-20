// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const userAgent = req.headers.get('user-agent') || '';

  // Allow access to the unsupported browser page
  if (url.pathname === '/404') {
    return NextResponse.next();
  }

  // Check if the user-agent is from Chrome but not Edge or Chromium
  const isChrome = /Chrome/.test(userAgent) && !/Chromium|Edg/.test(userAgent);

  if (!isChrome) {
    // Redirect to an absolute URL
    url.pathname = '/404';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
