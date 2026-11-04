'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import { LegalShell, Rich } from '@/components/Legal';
import { ArrowIcon } from '@/components/Icons';

const FAQ = [1, 2, 3, 4, 5, 6];

export default function QuotientSupportPage() {
  const { t } = useLang();

  return (
    <LegalShell
      title={t('q.support.h1')}
      meta={t('q.support.sub')}
      tone="yellow"
      back={{ href: '/quotient', label: t('q.back') }}
    >
      <div className="prose" style={{ maxWidth: '60rem' }}>
        <div
          style={{
            display: 'grid',
            gap: 28,
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            alignItems: 'start',
            marginBottom: 72,
          }}
        >
          <div>
            <h2 style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>{t('q.support.contact.h2')}</h2>
            <p>{t('q.support.contact.p1')}</p>
            <a href="mailto:help@vantoro.studio?subject=Quotient" className="btn" style={{ color: '#fff', marginTop: 8 }}>
              {t('support.mail')}
              <ArrowIcon size={24} />
            </a>
            <p style={{ marginTop: 14, fontSize: 15 }}>help@vantoro.studio</p>
          </div>
          <p style={{ margin: 0, padding: '24px 28px', background: 'var(--yellow)', borderRadius: '20px 20px 5px 5px' }}>
            {t('q.support.contact.p2')}
          </p>
        </div>

        <h2 style={{ marginTop: 0 }}>{t('q.support.faq.h2')}</h2>
        <div className="faq">
          {FAQ.map((n) => (
            <details key={n}>
              <summary>{t(`q.support.faq.q${n}`)}</summary>
              <p><Rich text={t(`q.support.faq.a${n}`)} /></p>
            </details>
          ))}
        </div>

        <h2>{t('q.support.legal.h2')}</h2>
        <ul>
          <li><Link href="/quotient/privacy">{t('footer.privacy')}</Link></li>
          <li><Link href="/quotient/terms">{t('footer.terms')}</Link></li>
        </ul>
      </div>
    </LegalShell>
  );
}
