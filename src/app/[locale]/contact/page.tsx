"use client";

import {useTranslations} from 'next-intl';


// Page content is now wrapped by layout, header, and footer. Remove local language switcher and nav.

export default function ContactPage() {
  const t = useTranslations('ContactPage');




  return (
    <section className="max-w-2xl mx-auto bg-gradient-to-br from-[#0A174E] via-[#A259F7]/30 to-[#00FFD0]/30 rounded-xl shadow-lg p-10 mt-10 mb-10 border border-[#A259F7]">
      <h1 className="text-3xl font-bold text-[#00FFD0] mb-4 text-center drop-shadow">{t('title')}</h1>
      <p className="text-lg text-white mb-6 text-center">{t('description')}</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <li className="bg-[#A259F7] rounded-lg p-4 flex flex-col items-center justify-center min-h-[80px] break-words text-center font-semibold text-white shadow">
          <span className="break-words w-full" title={t('email')}>{t('email')}</span>
        </li>
        <li className="bg-[#00FFD0] rounded-lg p-4 flex flex-col items-center justify-center min-h-[80px] break-words text-center font-semibold text-[#0A174E] shadow">
          <span className="break-words w-full" title={t('phone')}>{t('phone')}</span>
        </li>
        <li className="bg-[#A259F7] rounded-lg p-4 flex flex-col items-center justify-center min-h-[80px] break-words text-center font-semibold text-white shadow">
          <span className="break-words w-full" title={t('address')}>{t('address')}</span>
        </li>
      </ul>
    </section>
  );
}
