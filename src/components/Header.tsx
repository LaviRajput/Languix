"use client";
import { Link, usePathname } from '@/i18n/navigation';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import {useTranslations} from 'next-intl';
import Image from "next/image";


export default function Header() {
  const t = useTranslations('Common');

  const pathname = usePathname();

  return (
    <header className="bg-[#0A174E] shadow-md border-b py-3 border-[#2D3250]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-block  corner">
      <Image
        src="/logo.png"
        alt="Languix Logo"
        width={60}
        height={60}
        priority
      />
    </Link>
          <Link href="/about" className={`text-[#00FFD0] hover:text-[#A259F7] transition-colors font-medium${pathname.startsWith('/about') ? ' underline' : ''}`}>{t('about')}</Link>
          <Link href="/contact" className={`text-[#00FFD0] hover:text-[#A259F7] transition-colors font-medium${pathname.startsWith('/contact') ? ' underline' : ''}`}>{t('contact')}</Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#A259F7] font-semibold text-sm">{t('language')}</span>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
