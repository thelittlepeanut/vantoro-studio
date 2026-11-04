'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import {
  Badge,
  QuotientFooter,
  QuotientIcon,
  QuotientNav,
  bodyStyle,
  linkStyle,
} from '@/components/QuotientShell';

function Phone({ src, alt, rotate = 0, lift = 0 }: { src: string; alt: string; rotate?: number; lift?: number }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 'min(44%, 220px)',
        transform: `rotate(${rotate}deg) translateY(${lift}px)`,
        filter: 'drop-shadow(0 20px 60px rgba(88,65,216,.28))',
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: 30, border: '1.5px solid rgba(255,255,255,.14)', background: '#0a0a0e', boxShadow: '0 0 0 1px rgba(0,0,0,.7)' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={700} height={1517} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 28 }} />
      </div>
    </div>
  );
}

function Feature({ title, desc, points }: { title: string; desc: string; points: string[] }) {
  return (
    <div
      className="rounded-[20px] p-7"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
    >
      <h2 className="text-[22px] font-bold tracking-[-0.5px] mb-3 text-[var(--color-text)]">{title}</h2>
      <p className="text-[15px] leading-[1.75] mb-4" style={bodyStyle}>{desc}</p>
      <ul className="p-0 m-0 list-none">
        {points.map((p) => (
          <li key={p} className="text-[14px] leading-[1.7] mb-1" style={bodyStyle}>– {p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function QuotientPage() {
  const { t } = useLang();
  const trio = (prefix: string) => [1, 2, 3].map((n) => t(`${prefix}.p${n}`));

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <QuotientNav backHref="/" backKey="nav.back" />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-[140px] pb-16">
        <Badge>{t('q.soon')}</Badge>
        <div className="mb-6"><QuotientIcon size={84} /></div>
        <h1 className="text-[clamp(44px,7vw,84px)] font-extrabold tracking-[-3px] leading-[1.02] mb-5">
          {t('q.title.1')}
          <span className="gradient-text"> {t('q.title.2')}</span>
        </h1>
        <p className="text-[18px] leading-relaxed max-w-xl mb-10" style={{ color: 'var(--color-text-sub)' }}>
          {t('q.sub')}
        </p>
        <div className="flex gap-4 items-end justify-center w-full max-w-[520px]">
          <Phone src="/screenshots/quotient-app-top.jpg" alt={t('q.alt.app')} rotate={-3} lift={8} />
          <Phone src="/screenshots/quotient-home.jpg" alt={t('q.alt.home')} rotate={3} lift={8} />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid gap-5 md:grid-cols-3">
        <Feature title={t('q.f1.title')} desc={t('q.f1.desc')} points={trio('q.f1')} />
        <Feature title={t('q.f2.title')} desc={t('q.f2.desc')} points={trio('q.f2')} />
        <Feature title={t('q.f3.title')} desc={t('q.f3.desc')} points={trio('q.f3')} />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 flex gap-4 justify-center">
        <Phone src="/screenshots/quotient-lock.jpg" alt={t('q.alt.lock')} />
        <Phone src="/screenshots/quotient-app-history.jpg" alt={t('q.alt.history')} />
      </section>

      {/* Privacy */}
      <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1.5px] mb-4">{t('q.private.title')}</h2>
        <p className="text-[16px] leading-[1.75] mb-6" style={bodyStyle}>{t('q.private.desc')}</p>
        <Link href="/quotient/privacy" className="text-[14px] font-semibold no-underline hover:opacity-70 transition-opacity" style={linkStyle}>
          {t('footer.privacy')} →
        </Link>
      </section>

      {/* Facts */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <h2 className="text-[18px] font-bold mb-4 text-[var(--color-text)]">{t('q.facts.title')}</h2>
        <ul className="p-0 m-0 list-none">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="text-[15px] leading-[1.75] mb-2" style={bodyStyle}>– {t(`q.facts.${n}`)}</li>
          ))}
        </ul>
      </section>

      <QuotientFooter />
    </div>
  );
}
