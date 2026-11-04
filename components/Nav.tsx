'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from './LangContext';

interface SectionLink {
  href: string;
  key: string;
  tone?: 'green' | 'blue' | 'grey';
}

export default function Nav({ sections }: { sections?: SectionLink[] }) {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="wrap">
        <Link href="/" className="nav-brand" aria-label="Vantoro Studio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/vantoro-logo.png" alt="" width={32} height={32} />
          <span>Vantoro Studio</span>
        </Link>

        <nav aria-label={t('nav.menu')} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {sections && (
            <ul className="nav-links nav-sections">
              {sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="nav-link" data-tone={s.tone}>
                    {t(s.key)}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <ul className="nav-links">
            <li>
              <Link
                href="/flickflush"
                className="nav-link"
                aria-current={pathname === '/flickflush' ? 'page' : undefined}
              >
                {t('nav.flickflush')}
              </Link>
            </li>
            <li>
              <Link
                href="/quotient"
                className="nav-link"
                aria-current={pathname === '/quotient' ? 'page' : undefined}
              >
                {t('q.nav')}
              </Link>
            </li>
            <li>
              <Link
                href="/flickflush/support"
                className="nav-link"
                aria-current={pathname.startsWith('/flickflush/support') ? 'page' : undefined}
              >
                {t('nav.support')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lang" role="group" aria-label={t('nav.lang')}>
          <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
            EN
          </button>
          <button type="button" aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>
            FR
          </button>
        </div>
      </div>
    </header>
  );
}
