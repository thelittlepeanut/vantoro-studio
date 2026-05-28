'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import Nav from '@/components/Nav';
import PhoneFrame from '@/components/PhoneFrame';

const NAV_LINKS = [
  { href: '#swipe', key: 'nav.swipe' },
  { href: '#duplicates', key: 'nav.duplicates' },
  { href: '#album', key: 'nav.album' },
  { href: '#modes', key: 'nav.modes' },
  { href: '#stats', key: 'nav.stats' },
  { href: '#privacy', key: 'nav.privacy' },
];

function AppleLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
      <path d="M18.09 14.84c-.02-2.54 2.08-3.78 2.17-3.83-1.18-1.73-3.02-1.96-3.68-1.99-1.56-.16-3.06.93-3.86.93-.8 0-2.02-.9-3.32-.88-1.7.03-3.28 1-4.15 2.52-1.78 3.08-.45 7.63 1.27 10.12.85 1.22 1.85 2.59 3.16 2.54 1.27-.05 1.75-.82 3.29-.82 1.53 0 1.97.82 3.3.8 1.37-.03 2.23-1.24 3.07-2.46.97-1.4 1.37-2.76 1.39-2.83-.03-.01-2.62-1-2.64-3.9zM15.6 7.26c.7-.85 1.18-2.03 1.05-3.21-1.01.04-2.24.67-2.97 1.51-.65.75-1.22 1.96-1.07 3.11 1.13.09 2.27-.57 2.99-1.41z" />
    </svg>
  );
}

function AndroidLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" opacity=".6">
      <path d="M7.08 9.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75s.75-.336.75-.75v-7.5a.75.75 0 0 0-.75-.75zm13.84 0a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75s.75-.336.75-.75v-7.5a.75.75 0 0 0-.75-.75zM9.5 20a.75.75 0 0 0 .75.75h1.25v2.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2.5h1v2.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2.5H18A.75.75 0 0 0 18.5 20V10h-9v10zM14 3.25c-2.07 0-3.9.9-5.2 2.34l-.9-1.55a.5.5 0 1 0-.87.5l.95 1.64A7.43 7.43 0 0 0 6.5 9.5h15a7.43 7.43 0 0 0-1.48-3.32l.95-1.64a.5.5 0 1 0-.87-.5l-.9 1.55A7.46 7.46 0 0 0 14 3.25zm-2 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm4 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
    </svg>
  );
}

function StoreBadges({ center = false }: { center?: boolean }) {
  const { t } = useLang();
  return (
    <div className={`flex gap-3 flex-wrap mb-12 ${center ? 'justify-center' : ''}`}>
      {/* iOS */}
      <a
        href="#"
        className="inline-flex items-center gap-3 px-[22px] py-3 rounded-[14px] no-underline transition-all duration-200 hover:-translate-y-px"
        style={{
          background: '#000',
          border: '1px solid rgba(255,255,255,.12)',
          color: '#fff',
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#1a1a1a'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#000'; }}
      >
        <div className="flex-shrink-0"><AppleLogo /></div>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium tracking-[0.3px] opacity-80 leading-[1.2]">{t('badge.ios.line1')}</span>
          <span className="text-[18px] font-bold tracking-[-0.5px] leading-[1.1]">{t('badge.ios.line2')}</span>
        </div>
      </a>

      {/* Android */}
      <div
        className="inline-flex items-center gap-3 px-[22px] py-3 rounded-[14px] cursor-default opacity-60"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-muted)',
        }}
      >
        <div className="flex-shrink-0"><AndroidLogo /></div>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium tracking-[0.3px] opacity-80 leading-[1.2]">{t('badge.android.line1')}</span>
          <span className="text-[16px] font-bold tracking-[-0.5px] leading-[1.1]">{t('badge.android.line2')}</span>
        </div>
      </div>
    </div>
  );
}

interface BulletProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  iconStyle?: React.CSSProperties;
}

function Bullet({ icon, title, desc, iconStyle }: BulletProps) {
  return (
    <div className="flex gap-[14px] items-start">
      <div
        className="w-[34px] h-[34px] rounded-[9px] flex-shrink-0 flex items-center justify-center text-[15px]"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          ...iconStyle,
        }}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-[14px] font-bold mb-[2px]">{title}</h4>
        <p className="text-[13px] leading-[1.5]" style={{ color: 'var(--color-text-muted)' }}>{desc}</p>
      </div>
    </div>
  );
}

function FeatureLabel({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.2px] uppercase mb-[18px]"
      style={{ color: 'var(--color-accent-light)' }}
    >
      <span style={{ width: 16, height: 1.5, background: 'var(--color-accent-light)', display: 'inline-block', flexShrink: 0 }} />
      {label}
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const children = el.querySelectorAll('.reveal');
    children.forEach((child) => observer.observe(child));

    // Also observe the element itself if it has reveal class
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default function SweepPage() {
  const { t } = useLang();
  const pageRef = useReveal();

  return (
    <div ref={pageRef} style={{ background: 'var(--color-bg)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Nav
        links={NAV_LINKS}
        ctaKey="nav.cta"
        ctaHref="#"
        brandText="Sweep"
        brandHref="/"
      />

      {/* ── HERO ── */}
      <section
        className="min-h-screen pt-[130px] pb-20 px-6 md:px-[52px] grid md:grid-cols-2 gap-[60px] items-center max-w-[1300px] mx-auto relative"
      >
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '5%',
            top: '20%',
            width: 600,
            height: 700,
            background: 'radial-gradient(ellipse, rgba(88,65,216,.22) 0%, transparent 65%)',
          }}
        />

        {/* Text */}
        <div className="relative z-[2]">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.8px] uppercase px-[14px] py-[6px] rounded-full mb-7"
            style={{
              background: 'rgba(88,65,216,.12)',
              border: '1px solid rgba(88,65,216,.3)',
              color: 'var(--color-accent-light)',
            }}
          >
            <span
              className="animate-pulse-dot inline-block rounded-full"
              style={{ width: 6, height: 6, background: 'var(--color-accent-light)' }}
            />
            {t('hero.badge')}
          </div>

          <h1
            className="font-extrabold leading-none mb-6"
            style={{ fontSize: 'clamp(46px, 5.5vw, 80px)', letterSpacing: '-3px' }}
          >
            {t('hero.title.line1')}
            <br />
            <span className="gradient-text">{t('hero.title.line2')}</span>
          </h1>

          <p className="text-[18px] leading-[1.65] max-w-[460px] mb-11" style={{ color: 'var(--color-text-sub)' }}>
            {t('hero.sub')}
          </p>

          <StoreBadges />

          {/* Stats */}
          <div className="flex gap-8">
            <div>
              <div className="text-[26px] font-extrabold tracking-[-1px]" style={{
                background: 'linear-gradient(135deg, #7b6ff5, #5841D8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t('stat.fps')}</div>
              <div className="text-[11px] font-medium mt-[1px]" style={{ color: 'var(--color-text-faint)' }}>{t('stat.fps.label')}</div>
            </div>
            <div>
              <div className="text-[26px] font-extrabold tracking-[-1px]" style={{
                background: 'linear-gradient(135deg, #7b6ff5, #5841D8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t('stat.local')}</div>
              <div className="text-[11px] font-medium mt-[1px]" style={{ color: 'var(--color-text-faint)' }}>{t('stat.local.label')}</div>
            </div>
            <div>
              <div className="text-[26px] font-extrabold tracking-[-1px]" style={{
                background: 'linear-gradient(135deg, #7b6ff5, #5841D8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t('stat.data')}</div>
              <div className="text-[11px] font-medium mt-[1px]" style={{ color: 'var(--color-text-faint)' }}>{t('stat.data.label')}</div>
            </div>
          </div>
        </div>

        {/* Phone cluster */}
        <div className="relative h-[680px] flex items-center justify-center z-[2]">
          {/* Left phone */}
          <div
            className="absolute"
            style={{
              left: 0,
              top: '50%',
              transform: 'translateY(-44%) rotate(-8deg) scale(.88)',
              zIndex: 2,
              opacity: 0.85,
              filter: 'drop-shadow(0 20px 50px rgba(0,0,0,.7))',
            }}
          >
            <PhoneFrame src="/screenshots/screen_11.png" alt="Sweep home screen" width={270} />
          </div>

          {/* Main phone */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) rotate(-3deg)',
              width: 260,
              zIndex: 3,
              filter: 'drop-shadow(0 30px 80px rgba(88,65,216,.3))',
            }}
          >
            <PhoneFrame src="/screenshots/screen_3.png" alt="Sweep swipe screen" width={260} />
          </div>

          {/* Right phone */}
          <div
            className="absolute"
            style={{
              right: 0,
              top: '50%',
              transform: 'translateY(-46%) rotate(7deg) scale(.88)',
              zIndex: 2,
              opacity: 0.85,
              filter: 'drop-shadow(0 20px 50px rgba(0,0,0,.7))',
            }}
          >
            <PhoneFrame src="/screenshots/screen_10.png" alt="Sweep session complete" width={270} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="overflow-hidden py-4"
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="flex gap-3 animate-marquee" style={{ width: 'max-content' }}>
          {[
            { color: '#1D9E75', key: 'chip.keep' },
            { color: '#E24B4A', key: 'chip.delete' },
            { color: '#5841D8', key: 'chip.dupes' },
            { color: '#a194f5', key: 'chip.album' },
            { color: '#ff156f', key: 'chip.fav' },
            { color: '#f59e0b', key: 'chip.stats' },
            { color: '#38EFC3', key: 'chip.local' },
            { color: '#4D96FF', key: 'chip.undo' },
            { color: '#1D9E75', key: 'chip.keep' },
            { color: '#E24B4A', key: 'chip.delete' },
            { color: '#5841D8', key: 'chip.dupes' },
            { color: '#a194f5', key: 'chip.album' },
            { color: '#ff156f', key: 'chip.fav' },
            { color: '#f59e0b', key: 'chip.stats' },
            { color: '#38EFC3', key: 'chip.local' },
            { color: '#4D96FF', key: 'chip.undo' },
          ].map((chip, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold whitespace-nowrap"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-sub)',
              }}
            >
              <span className="rounded-full" style={{ width: 7, height: 7, background: chip.color, display: 'inline-block', flexShrink: 0 }} />
              {t(chip.key)}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-[52px] pb-10">

        {/* Feature 1: Swipe */}
        <div id="swipe" className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <RevealSection>
            <FeatureLabel label={t('f1.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f1.title.line1')}<br />{t('f1.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f1.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
                title={t('f1.b1.h')}
                desc={t('f1.b1.p')}
                iconStyle={{ background: 'rgba(229,68,68,.1)', borderColor: 'rgba(229,68,68,.2)' }}
              />
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                title={t('f1.b2.h')}
                desc={t('f1.b2.p')}
                iconStyle={{ background: 'rgba(29,158,117,.1)', borderColor: 'rgba(29,158,117,.2)' }}
              />
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a194f5" strokeWidth="2.5" strokeLinecap="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>}
                title={t('f1.b3.h')}
                desc={t('f1.b3.p')}
                iconStyle={{ background: 'rgba(88,65,216,.1)', borderColor: 'rgba(88,65,216,.2)' }}
              />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1">
            <div className="flex items-center justify-center" style={{ gap: 0 }}>
              <div style={{ transform: 'rotate(-5deg) translateX(20px)', zIndex: 2, width: 240, filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.7))' }}>
                <PhoneFrame src="/screenshots/screen_5.png" alt="Swipe left to delete" width={240} />
              </div>
              <div style={{ transform: 'rotate(5deg) translateX(-20px)', zIndex: 1, width: 240, filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.6))' }}>
                <PhoneFrame src="/screenshots/screen_6.png" alt="Swipe right to keep" width={240} />
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Feature 2: More choices (flip) */}
        <div id="modes" className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <RevealSection className="md:order-2">
            <FeatureLabel label={t('f2.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f2.title.line1')}<br />{t('f2.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f2.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="#ff156f"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>}
                title={t('f2.b1.h')}
                desc={t('f2.b1.p')}
                iconStyle={{ background: 'rgba(255,21,111,.1)', borderColor: 'rgba(255,21,111,.2)' }}
              />
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a194f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>}
                title={t('f2.b2.h')}
                desc={t('f2.b2.p')}
                iconStyle={{ background: 'rgba(161,148,245,.1)', borderColor: 'rgba(161,148,245,.2)' }}
              />
              <Bullet icon="⚡" title={t('f2.b3.h')} desc={t('f2.b3.p')} />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1 md:order-1 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-[10%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(88,65,216,.2) 0%, transparent 70%)' }} />
              <PhoneFrame src="/screenshots/screen_7.png" alt="Favorite swipe" width={280} className="[filter:drop-shadow(0_40px_100px_rgba(0,0,0,.7))]" />
            </div>
          </RevealSection>
        </div>

        {/* Feature 3: Album */}
        <div id="album" className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <RevealSection>
            <FeatureLabel label={t('f3.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f3.title.line1')}<br />{t('f3.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f3.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a194f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>}
                title={t('f3.b1.h')}
                desc={t('f3.b1.p')}
                iconStyle={{ background: 'rgba(161,148,245,.1)', borderColor: 'rgba(161,148,245,.2)' }}
              />
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a194f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
                title={t('f3.b2.h')}
                desc={t('f3.b2.p')}
                iconStyle={{ background: 'rgba(88,65,216,.1)', borderColor: 'rgba(88,65,216,.2)' }}
              />
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="#ff156f"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>}
                title={t('f3.b3.h')}
                desc={t('f3.b3.p')}
                iconStyle={{ background: 'rgba(255,21,111,.1)', borderColor: 'rgba(255,21,111,.2)' }}
              />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-[10%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(88,65,216,.2) 0%, transparent 70%)' }} />
              <PhoneFrame src="/screenshots/screen_8.png" alt="Add to album" width={280} className="[filter:drop-shadow(0_40px_100px_rgba(0,0,0,.7))]" />
            </div>
          </RevealSection>
        </div>

        {/* Feature 4: Duplicates (flip) */}
        <div id="duplicates" className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <RevealSection className="md:order-2">
            <FeatureLabel label={t('f4.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f4.title.line1')}<br />{t('f4.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f4.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a194f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="14" height="14" rx="2"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M8 3h3"/><path d="M21 8v3"/></svg>}
                title={t('f4.b1.h')}
                desc={t('f4.b1.p')}
                iconStyle={{ background: 'rgba(88,65,216,.1)', borderColor: 'rgba(88,65,216,.2)' }}
              />
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="m19 6-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>}
                title={t('f4.b2.h')}
                desc={t('f4.b2.p')}
                iconStyle={{ background: 'rgba(229,68,68,.1)', borderColor: 'rgba(229,68,68,.2)' }}
              />
              <Bullet icon="🎯" title={t('f4.b3.h')} desc={t('f4.b3.p')} />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1 md:order-1 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-[10%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(88,65,216,.2) 0%, transparent 70%)' }} />
              <PhoneFrame src="/screenshots/screen_dupes.png" alt="Duplicate detection" width={280} className="[filter:drop-shadow(0_40px_100px_rgba(0,0,0,.7))]" />
            </div>
          </RevealSection>
        </div>

        {/* Feature 5: Smart tools */}
        <div className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <RevealSection>
            <FeatureLabel label={t('f5.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f5.title.line1')}<br />{t('f5.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f5.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet icon="⚡" title={t('f5.b1.h')} desc={t('f5.b1.p')} />
              <Bullet icon="◈" title={t('f5.b2.h')} desc={t('f5.b2.p')} />
              <Bullet icon="🗂️" title={t('f5.b3.h')} desc={t('f5.b3.p')} />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-[10%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(88,65,216,.2) 0%, transparent 70%)' }} />
              <PhoneFrame src="/screenshots/screen_11.png" alt="Home screen with tools" width={280} className="[filter:drop-shadow(0_40px_100px_rgba(0,0,0,.7))]" />
            </div>
          </RevealSection>
        </div>

        {/* Feature 6: Session stats (flip) */}
        <div id="stats" className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <RevealSection className="md:order-2">
            <FeatureLabel label={t('f6.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f6.title.line1')}<br />{t('f6.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f6.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="m19 6-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>}
                title={t('f6.b1.h')}
                desc={t('f6.b1.p')}
                iconStyle={{ background: 'rgba(229,68,68,.1)', borderColor: 'rgba(229,68,68,.2)' }}
              />
              <Bullet
                icon="💾"
                title={t('f6.b2.h')}
                desc={t('f6.b2.p')}
                iconStyle={{ background: 'rgba(29,158,117,.1)', borderColor: 'rgba(29,158,117,.2)' }}
              />
              <Bullet icon="📊" title={t('f6.b3.h')} desc={t('f6.b3.p')} />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1 md:order-1 flex items-center justify-center">
            <div className="flex items-center justify-center" style={{ gap: 0 }}>
              <div style={{ transform: 'rotate(-5deg) translateX(20px)', zIndex: 2, width: 240, filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.7))' }}>
                <PhoneFrame src="/screenshots/screen_10.png" alt="Session complete" width={240} />
              </div>
              <div style={{ transform: 'rotate(5deg) translateX(-20px)', zIndex: 1, width: 240, filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.6))' }}>
                <PhoneFrame src="/screenshots/screen_9.png" alt="Trash review" width={240} />
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Feature 7: Privacy */}
        <div id="privacy" className="grid md:grid-cols-2 gap-[100px] items-center py-[120px]">
          <RevealSection>
            <FeatureLabel label={t('f7.label')} />
            <h2 className="font-extrabold leading-[1.05] mb-[18px]" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
              {t('f7.title.line1')}<br />{t('f7.title.line2')}
            </h2>
            <p className="text-[17px] leading-[1.65] max-w-[440px] mb-9" style={{ color: 'var(--color-text-sub)' }}>{t('f7.desc')}</p>
            <div className="flex flex-col gap-[14px]">
              <Bullet
                icon="🔒"
                title={t('f7.b1.h')}
                desc={t('f7.b1.p')}
                iconStyle={{ background: 'rgba(88,65,216,.1)', borderColor: 'rgba(88,65,216,.2)' }}
              />
              <Bullet icon="📵" title={t('f7.b2.h')} desc={t('f7.b2.p')} />
              <Bullet icon="👤" title={t('f7.b3.h')} desc={t('f7.b3.p')} />
            </div>
          </RevealSection>

          <RevealSection className="reveal-d1 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-[10%] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(88,65,216,.2) 0%, transparent 70%)' }} />
              <PhoneFrame src="/screenshots/screen_2.png" alt="Privacy screen" width={280} className="[filter:drop-shadow(0_40px_100px_rgba(0,0,0,.7))]" />
            </div>
          </RevealSection>
        </div>

      </div>

      {/* ── MODES ── */}
      <div id="about" style={{ borderTop: '1px solid var(--color-border)' }} className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-[52px] text-center">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.2px] uppercase mb-[18px]"
            style={{ color: 'var(--color-accent-light)' }}
          >
            <span style={{ width: 16, height: 1.5, background: 'var(--color-accent-light)', display: 'inline-block' }} />
            {t('modes.label')}
          </div>
          <h2 className="font-extrabold leading-[1.05] mb-4 mx-auto" style={{ fontSize: 'clamp(34px,4vw,54px)', letterSpacing: '-2px' }}>
            {t('modes.title')}
          </h2>
          <p className="text-[18px] max-w-[500px] mx-auto mb-[60px] leading-[1.6]" style={{ color: 'var(--color-text-sub)' }}>
            {t('modes.sub')}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { numKey: 'mode1.num', icon: '⚡', iconStyle: { background: 'rgba(88,65,216,.12)', borderColor: 'rgba(88,65,216,.25)' }, titleKey: 'mode1.title', descKey: 'mode1.desc', delay: '' },
              { numKey: 'mode2.num', icon: '◈', iconStyle: { background: 'rgba(161,148,245,.08)', borderColor: 'rgba(161,148,245,.2)' }, titleKey: 'mode2.title', descKey: 'mode2.desc', delay: 'reveal-d1' },
              { numKey: 'mode3.num', icon: '🗂️', iconStyle: { background: 'rgba(29,158,117,.08)', borderColor: 'rgba(29,158,117,.2)' }, titleKey: 'mode3.title', descKey: 'mode3.desc', delay: 'reveal-d2' },
            ].map((mode) => (
              <RevealSection key={mode.numKey} className={mode.delay}>
                <div
                  className="rounded-[20px] p-8 text-left relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="text-[10px] font-bold tracking-[1.5px] uppercase mb-[18px]" style={{ color: 'rgba(161,148,245,.6)' }}>{t(mode.numKey)}</div>
                  <div
                    className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[22px] mb-[18px]"
                    style={{ border: '1px solid var(--color-border)', ...mode.iconStyle }}
                  >
                    {mode.icon}
                  </div>
                  <h3 className="text-[19px] font-bold tracking-[-0.4px] mb-[10px]">{t(mode.titleKey)}</h3>
                  <p className="text-[14px] leading-[1.6]" style={{ color: 'var(--color-text-muted)' }}>{t(mode.descKey)}</p>
                  {/* Top gradient line on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(88,65,216,.5), transparent)' }}
                  />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="relative overflow-hidden py-[140px] px-6 md:px-[52px] text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(88,65,216,.18) 0%, transparent 60%)' }} />
        <div
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[1.2px] uppercase mb-[18px]"
          style={{ color: 'var(--color-accent-light)' }}
        >
          <span style={{ width: 16, height: 1.5, background: 'var(--color-accent-light)', display: 'inline-block' }} />
          {t('cta.label')}
        </div>
        <h2 className="font-extrabold leading-[1.05] max-w-[660px] mx-auto mb-5" style={{ fontSize: 'clamp(40px,5.5vw,68px)', letterSpacing: '-2px' }}>
          {t('cta.title.line1')}<br /><span className="gradient-text">{t('cta.title.line2')}</span>
        </h2>
        <p className="text-[18px] max-w-[440px] mx-auto mb-12" style={{ color: 'var(--color-text-sub)' }}>
          {t('cta.sub')}
        </p>
        <StoreBadges center />
      </div>

      {/* ── FOOTER ── */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-[52px] py-9"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center gap-2 text-[14px] font-bold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sweep-logo.png" alt="Sweep" width={22} height={22} style={{ borderRadius: 5, display: 'block' }} />
          <Link href="/" className="no-underline text-[var(--color-text)] hover:opacity-70 transition-opacity">Vantoro Studio</Link>
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
