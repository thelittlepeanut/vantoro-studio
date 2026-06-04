'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import Nav from '@/components/Nav';

function VantoroIcon({ size = 100 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/assets/vantoro-logo.png" alt="Vantoro Studio" width={size} height={size} style={{ borderRadius: Math.round(size * 0.26), display: 'block' }} />
  );
}

function SweepIcon({ size = 28 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/assets/sweep-logo.png" alt="Sweep" width={size} height={size} style={{ borderRadius: Math.round(size * 0.25), display: 'block' }} />
  );
}

export default function StudioPage() {
  const { t } = useLang();

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Nav */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Nav brandText="Vantoro Studio" brandHref="/" brandIcon={<img src="/assets/vantoro-logo.png" alt="Vantoro Studio" width={28} height={28} style={{ borderRadius: 7, display: 'block' }} />} />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 pb-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.8px] uppercase px-[14px] py-[6px] rounded-full mb-8"
          style={{
            background: 'rgba(88,65,216,.12)',
            border: '1px solid rgba(88,65,216,.3)',
            color: 'var(--color-accent-light)',
          }}
        >
          <span
            className="animate-pulse-dot"
            style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent-light)', display: 'inline-block' }}
          />
          {t('studio.badge')}
        </div>

        {/* Logo */}
        <div className="mb-8">
          <VantoroIcon size={100} />
        </div>

        {/* Title */}
        <h1 className="text-[clamp(60px,8vw,100px)] font-extrabold tracking-[-4px] leading-none mb-4">
          {t('studio.title')}
          <span className="gradient-text"> {t('studio.gradient')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] leading-relaxed max-w-md mb-0" style={{ color: 'var(--color-text-sub)' }}>
          {t('studio.sub')}
        </p>
      </section>

      {/* Apps Section */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.2px] uppercase mb-4"
            style={{ color: 'var(--color-accent-light)' }}
          >
            <span style={{ width: 16, height: 1.5, background: 'var(--color-accent-light)', display: 'inline-block' }} />
            {t('studio.apps')}
          </div>
        </div>

        {/* Sweep Card */}
        <div
          className="rounded-[24px] overflow-hidden p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:scale-[1.01]"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Phone mockups */}
          <div className="flex gap-4 flex-shrink-0 items-end">
            {/* Phone 1 */}
            <div
              className="relative"
              style={{
                width: 140,
                transform: 'rotate(-4deg) translateY(10px)',
                filter: 'drop-shadow(0 20px 60px rgba(88,65,216,.3))',
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: 28,
                  border: '1.5px solid rgba(255,255,255,.14)',
                  background: '#0a0a0e',
                  boxShadow: '0 0 0 1px rgba(0,0,0,.7)',
                }}
              >
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{ top: 8, left: '50%', transform: 'translateX(-50%)', width: 60, height: 16, background: '#000', borderRadius: 10 }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/screenshots/screen_3.png" alt="FlickFlush swipe screen" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 26 }} />
              </div>
            </div>

            {/* Phone 2 */}
            <div
              className="relative"
              style={{
                width: 140,
                transform: 'rotate(4deg) translateY(10px)',
                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,.5))',
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: 28,
                  border: '1.5px solid rgba(255,255,255,.14)',
                  background: '#0a0a0e',
                  boxShadow: '0 0 0 1px rgba(0,0,0,.7)',
                }}
              >
                <div
                  className="absolute z-10 pointer-events-none"
                  style={{ top: 8, left: '50%', transform: 'translateX(-50%)', width: 60, height: 16, background: '#000', borderRadius: 10 }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/screenshots/screen_10.png" alt="FlickFlush session complete" style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 26 }} />
              </div>
            </div>
          </div>

          {/* App info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <SweepIcon size={44} />
              <h2 className="text-[28px]" style={{ fontFamily: 'var(--font-pacifico, var(--font-sans))' }}>FlickFlush</h2>
            </div>
            <p className="text-[16px] leading-relaxed mb-6" style={{ color: 'var(--color-text-sub)' }}>
              {t('sweep.desc')}
            </p>
            <Link
              href="/flickflush"
              className="inline-flex items-center gap-2 text-[14px] font-semibold no-underline transition-opacity duration-200 hover:opacity-70"
              style={{ color: 'var(--color-accent-light)' }}
            >
              {t('sweep.explore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-[52px] py-9"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center gap-2 text-[14px] font-bold">
          <VantoroIcon size={22} />
          Vantoro Studio
        </div>
        <p className="text-[12px]" style={{ color: 'var(--color-text-faint)' }}>
          {t('footer.studio')}
        </p>
      </footer>
    </div>
  );
}
