'use client';

import Link from 'next/link';
import { useLang } from './LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer ground-ink" style={{ paddingBlock: '64px 40px' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gap: 40,
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          }}
        >
          <div style={{ maxWidth: 320 }}>
            <Link
              href="/"
              className="nav-brand"
              style={{ fontSize: 32, textDecoration: 'none' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/vantoro-logo.png" alt="" width={44} height={44} />
              <span>Vantoro Studio</span>
            </Link>
            <p style={{ margin: '16px 0 0', color: 'var(--sub)' }}>{t('footer.tag')}</p>
          </div>

          <div>
            <h2>{t('footer.apps')}</h2>
            <ul>
              <li><Link href="/flickflush">FlickFlush</Link></li>
            </ul>
          </div>

          <div>
            <h2>{t('footer.help')}</h2>
            <ul>
              <li><Link href="/flickflush/support">{t('footer.support')}</Link></li>
              <li><Link href="/flickflush/privacy">{t('footer.privacy')}</Link></li>
              <li><Link href="/flickflush/terms">{t('footer.terms')}</Link></li>
            </ul>
          </div>

          <div>
            <h2>{t('footer.contact')}</h2>
            <ul>
              <li><a href="mailto:help@vantoro.studio">help@vantoro.studio</a></li>
            </ul>
          </div>
        </div>

        <p
          style={{
            margin: '56px 0 0',
            paddingTop: 20,
            borderTop: '3px solid #fff',
            fontSize: 15,
            color: 'var(--sub)',
          }}
        >
          {t('footer.copy')}
        </p>
      </div>
    </footer>
  );
}
