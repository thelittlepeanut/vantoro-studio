'use client';

import Link from 'next/link';
import { useLang } from './LangContext';

interface NavLink {
  href: string;
  key: string;
}

interface NavProps {
  links?: NavLink[];
  ctaKey?: string;
  ctaHref?: string;
  backHref?: string;
  backKey?: string;
  brandText?: string;
  brandHref?: string;
}

function SweepIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="sweep-nav-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5841D8" />
          <stop offset="1" stopColor="#4833C8" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="url(#sweep-nav-grad)" />
      <path d="M14 7l-5 9h10L14 7z" fill="white" opacity=".9" />
      <path d="M9 16l5 5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".6" />
    </svg>
  );
}

export default function Nav({
  links,
  ctaKey,
  ctaHref = '#',
  backHref,
  backKey = 'nav.back',
  brandText = 'Sweep',
  brandHref = '/sweep',
}: NavProps) {
  const { lang, setLang, t } = useLang();

  return (
    <nav
      style={{ background: 'rgba(9,9,13,.8)' }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-[52px] py-[18px] backdrop-blur-[20px] border-b border-[var(--color-border)]"
    >
      {/* Brand */}
      <Link
        href={brandHref}
        className="flex items-center gap-[10px] no-underline text-[var(--color-text)] text-[17px] font-bold tracking-[-0.3px]"
      >
        <SweepIcon size={28} />
        <span>{brandText}</span>
      </Link>

      {/* Nav links */}
      {links && links.length > 0 && (
        <div className="hidden md:flex gap-7 items-center">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[var(--color-text-muted)] text-[14px] font-medium no-underline hover:text-[var(--color-text)] transition-colors duration-200"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      )}

      {/* Right side: lang toggle + optional CTA or back link */}
      <div className="flex items-center gap-4">
        {/* Lang toggle */}
        <div className="flex items-center gap-[6px]">
          <button
            onClick={() => setLang('en')}
            className={`bg-transparent border-none cursor-pointer text-[12px] font-bold tracking-[0.5px] px-[2px] py-1 transition-colors duration-200 ${
              lang === 'en' ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'
            }`}
            style={{ fontFamily: 'inherit' }}
          >
            EN
          </button>
          <span className="text-[var(--color-text-faint)] text-[11px]">|</span>
          <button
            onClick={() => setLang('fr')}
            className={`bg-transparent border-none cursor-pointer text-[12px] font-bold tracking-[0.5px] px-[2px] py-1 transition-colors duration-200 ${
              lang === 'fr' ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'
            }`}
            style={{ fontFamily: 'inherit' }}
          >
            FR
          </button>
        </div>

        {/* Back link */}
        {backHref && (
          <Link
            href={backHref}
            className="text-[var(--color-text-muted)] text-[13px] font-medium no-underline hover:text-[var(--color-text)] transition-colors duration-200 flex items-center gap-[6px]"
          >
            {t(backKey)}
          </Link>
        )}

        {/* CTA button */}
        {ctaKey && (
          <a
            href={ctaHref}
            className="bg-[var(--color-accent)] text-white px-5 py-[9px] rounded-full text-[13px] font-semibold no-underline hover:opacity-85 hover:-translate-y-px transition-all duration-200"
          >
            {t(ctaKey)}
          </a>
        )}
      </div>
    </nav>
  );
}
