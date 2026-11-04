'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import { Badge, QuotientFooter, QuotientNav, Rich, bodyStyle, linkStyle } from '@/components/QuotientShell';

const FAQ = [1, 2, 3, 4, 5, 6];

export default function QuotientSupportPage() {
  const { t } = useLang();

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <QuotientNav />

      <div className="max-w-[720px] mx-auto px-6 md:px-[52px] pt-[130px] pb-[100px]">
        <Badge>{t('q.support.badge')}</Badge>

        <h1 className="font-extrabold leading-[1.05] mb-3" style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-2px' }}>
          {t('q.support.h1')}
        </h1>
        <p className="text-[15px] leading-[1.75] mb-[60px]" style={bodyStyle}>{t('q.support.sub')}</p>

        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">{t('q.support.contact.h2')}</h2>
          <div
            className="rounded-[16px] px-7 py-6 mb-[14px]"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <p className="text-[15px] leading-[1.75] mb-3" style={bodyStyle}>{t('q.support.contact.p1')}</p>
            <a
              href="mailto:help@vantoro.studio?subject=Quotient"
              className="text-[18px] font-bold no-underline hover:underline"
              style={linkStyle}
            >
              help@vantoro.studio
            </a>
          </div>
          <p className="text-[15px] leading-[1.75]" style={bodyStyle}>{t('q.support.contact.p2')}</p>
        </div>

        <div className="mb-[52px]">
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-5 text-[var(--color-text)]">{t('q.support.faq.h2')}</h2>
          {FAQ.map((n) => (
            <div key={n} className="mb-6">
              <h3 className="text-[15px] font-semibold mb-1 text-[var(--color-text)]">{t(`q.support.faq.q${n}`)}</h3>
              <p className="text-[15px] leading-[1.75]" style={bodyStyle}>
                <Rich text={t(`q.support.faq.a${n}`)} />
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">{t('q.support.legal.h2')}</h2>
          <div className="flex gap-5">
            <Link href="/quotient/privacy" className="text-[15px] no-underline hover:underline" style={linkStyle}>
              {t('footer.privacy')}
            </Link>
            <Link href="/quotient/terms" className="text-[15px] no-underline hover:underline" style={linkStyle}>
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>

      <QuotientFooter />
    </div>
  );
}
