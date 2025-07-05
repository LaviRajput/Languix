import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const supportedLocales = routing.locales;


function getPreferredLocale(req: NextRequest): string {

  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  if (
    cookieLocale &&
    supportedLocales.includes(cookieLocale as typeof supportedLocales[number])
  ) {
    return cookieLocale;
  }
  // Force default to English
  return 'en';
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Match locale in URL: "/en", "/fr", etc.

  const urlLocale = pathname.split('/')[1];
  const preferredLocale = getPreferredLocale(req);

  // Ensure urlLocale is one of the supported locales
  if (supportedLocales.some(locale => locale === urlLocale) && urlLocale !== preferredLocale) {
    // Redirect to preferred locale
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = `/${preferredLocale}${pathname.substring(urlLocale.length + 1)}`;
    return NextResponse.redirect(newUrl);
  }

  // Fallback to next-intl middleware
  return createMiddleware(routing)(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};