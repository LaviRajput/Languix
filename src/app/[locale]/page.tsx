"use client";
import {useTranslations} from 'next-intl';


// Page content is now wrapped by layout, header, and footer. Remove local language switcher and nav.

export default function HomePage() {
  const t = useTranslations('HomePage');




  // ...existing code...
  return (
    <section className="max-w-2xl mx-auto bg-gradient-to-br from-[#0A174E] via-[#A259F7]/30 to-[#00FFD0]/30 rounded-xl shadow-lg p-8 mt-10 mb-10 border border-[#A259F7]">
      <h1 className="text-3xl font-bold text-[#00FFD0] mb-4 text-center drop-shadow">{t('title')}</h1>
      <p className="text-lg text-white mb-6 text-center">{t('content')}</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <li className="bg-[#A259F7] rounded-lg p-4 text-center font-semibold text-white shadow">{t('feature1')}</li>
        <li className="bg-[#00FFD0] rounded-lg p-4 text-center font-semibold text-[#0A174E] shadow">{t('feature2')}</li>
        <li className="bg-[#A259F7] rounded-lg p-4 text-center font-semibold text-white shadow">{t('feature3')}</li>
      </ul>
      <div className="flex justify-center gap-6">
        <a href="/about" className="px-6 py-2 rounded-full bg-[#0A174E] text-[#00FFD0] font-semibold shadow hover:scale-105 hover:bg-[#A259F7] hover:text-white transition-transform border border-[#00FFD0]">{t('about')}</a>
        <a href="/contact" className="px-6 py-2 rounded-full bg-[#0A174E] text-[#00FFD0] font-semibold shadow hover:scale-105 hover:bg-[#A259F7] hover:text-white transition-transform border border-[#00FFD0]">{t('contact')}</a>
      </div>
    </section>
  );
}