import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'fr', label: 'Franch' },
  { code: 'es', label: 'Spanish' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      className="px-4 py-2 rounded bg-[#00FFD0] text-[#0A174E] font-semibold focus:outline-none focus:ring-2 focus:ring-[#A259F7] border border-[#A259F7] shadow-sm hover:bg-[#A259F7] hover:text-white transition-colors"
      aria-label="Select language"
    >
      {languages.map(lang => (
        <option key={lang.code} value={lang.code} className="text-[#0A174E] bg-[#00FFD0]">
          {lang.label}
        </option>
      ))}
    </select>
  );
}
