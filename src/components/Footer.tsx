import {useTranslations} from 'next-intl';
export default function Footer() {
  const t = useTranslations('Common');
  return (
    <footer className="bg-[#0A174E] text-[#00FFD0] py-4 shadow-inner border-t border-[#2D3250]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <span className="font-semibold">&copy; {new Date().getFullYear()} {t('footerText')} </span>
        <span className="text-sm mt-2 md:mt-0">Made with <span className="text-[#A259F7]">&#10084;</span> {t('madeWithLove')} </span>
      </div>
    </footer>
  );
}
