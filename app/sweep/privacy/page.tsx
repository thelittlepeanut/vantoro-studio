'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import Nav from '@/components/Nav';

function SweepFooterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="sweep-priv-footer" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5841D8" />
          <stop offset="1" stopColor="#4833C8" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="url(#sweep-priv-footer)" />
      <path d="M14 7l-5 9h10L14 7z" fill="white" opacity=".9" />
      <path d="M9 16l5 5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".6" />
    </svg>
  );
}

export default function PrivacyPage() {
  const { t } = useLang();

  const sections = [
    {
      h2: t('privacy.s1.h2'),
      content: (
        <>
          <p className="text-[15px] leading-[1.75] mb-[14px]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s1.p1')}</p>
          <p className="text-[15px] leading-[1.75] mb-[14px]" style={{ color: 'var(--color-text-sub)' }}>
            {t('privacy.s1.p2').replace('hello@sweepapp.io', '')}{' '}
            <a href="mailto:hello@sweepapp.io" className="no-underline hover:underline" style={{ color: 'var(--color-accent-light)' }}>hello@sweepapp.io</a>
          </p>
        </>
      ),
    },
    {
      h2: t('privacy.s2.h2'),
      content: (
        <>
          <p className="text-[15px] leading-[1.75] mb-[14px]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s2.p1')}</p>
          <ul className="mb-[14px] p-0 list-none">
            {['privacy.s2.li1','privacy.s2.li2','privacy.s2.li3','privacy.s2.li4','privacy.s2.li5','privacy.s2.li6'].map((k) => (
              <li key={k} className="text-[15px] leading-[1.7] py-[6px] pl-[22px] relative" style={{ color: 'var(--color-text-sub)' }}>
                <span className="absolute left-0" style={{ color: 'var(--color-text-faint)' }}>–</span>
                {t(k)}
              </li>
            ))}
          </ul>
          <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s2.p2')}</p>
        </>
      ),
    },
    {
      h2: t('privacy.s3.h2'),
      content: (
        <>
          <p className="text-[15px] leading-[1.75] mb-[14px]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s3.p1')}</p>
          <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s3.p2')}</p>
        </>
      ),
    },
    {
      h2: t('privacy.s4.h2'),
      content: (
        <>
          <p className="text-[15px] leading-[1.75] mb-[14px]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s4.p1')}</p>
          <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>
            {t('privacy.s4.p2')}{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener" className="no-underline hover:underline" style={{ color: 'var(--color-accent-light)' }}>revenuecat.com/privacy</a>.
          </p>
        </>
      ),
    },
    {
      h2: t('privacy.s5.h2'),
      content: (
        <>
          <p className="text-[15px] leading-[1.75] mb-[14px]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s5.p1')}</p>
          <ul className="mb-[14px] p-0 list-none">
            {['privacy.s5.li1','privacy.s5.li2'].map((k) => (
              <li key={k} className="text-[15px] leading-[1.7] py-[6px] pl-[22px] relative" style={{ color: 'var(--color-text-sub)' }}>
                <span className="absolute left-0" style={{ color: 'var(--color-text-faint)' }}>–</span>
                {t(k)}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      h2: t('privacy.s6.h2'),
      content: (
        <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>
          {t('privacy.s6.p1').replace('hello@sweepapp.io', '')}{' '}
          <a href="mailto:hello@sweepapp.io" className="no-underline hover:underline" style={{ color: 'var(--color-accent-light)' }}>hello@sweepapp.io</a>.
        </p>
      ),
    },
    {
      h2: t('privacy.s7.h2'),
      content: (
        <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>{t('privacy.s7.p1')}</p>
      ),
    },
    {
      h2: t('privacy.s8.h2'),
      content: (
        <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>
          {t('privacy.s8.p1').replace('hello@sweepapp.io', '')}{' '}
          <a href="mailto:hello@sweepapp.io" className="no-underline hover:underline" style={{ color: 'var(--color-accent-light)' }}>hello@sweepapp.io</a>
        </p>
      ),
    },
  ];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Nav brandText="Sweep" brandHref="/sweep" backHref="/sweep" backKey="nav.back" />

      <div className="max-w-[720px] mx-auto px-6 md:px-[52px] pt-[130px] pb-[100px]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.8px] uppercase px-[14px] py-[6px] rounded-full mb-6"
          style={{
            background: 'rgba(88,65,216,.12)',
            border: '1px solid rgba(88,65,216,.3)',
            color: 'var(--color-accent-light)',
          }}
        >
          {t('privacy.page.badge')}
        </div>

        <h1
          className="font-extrabold leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-2px' }}
        >
          {t('privacy.page.h1')}
        </h1>

        <p className="text-[13px] mb-[60px]" style={{ color: 'var(--color-text-muted)' }}>
          {t('privacy.page.updated')}
        </p>

        {/* TL;DR Box */}
        <div
          className="rounded-[16px] px-7 py-6 mb-[14px]"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--color-text-sub)' }}>
            <strong className="text-[var(--color-text)]">TL;DR — </strong>
            {t('privacy.tldr')}
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.h2} className="mb-[52px]">
            <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">{section.h2}</h2>
            {section.content}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-[52px] py-7"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center gap-2 text-[14px] font-bold">
          <SweepFooterIcon />
          Sweep
        </div>
        <div className="flex gap-5">
          <Link href="/sweep/privacy" className="text-[12px] no-underline hover:text-[var(--color-text)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>{t('footer.privacy')}</Link>
          <Link href="/sweep/terms" className="text-[12px] no-underline hover:text-[var(--color-text)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>{t('footer.terms')}</Link>
        </div>
        <p className="text-[12px]" style={{ color: 'var(--color-text-faint)' }}>{t('footer.copy')}</p>
      </footer>
    </div>
  );
}
