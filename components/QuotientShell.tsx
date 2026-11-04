'use client';

import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import { useLang } from './LangContext';

export const bodyStyle = { color: 'var(--color-text-sub)' } as const;
export const linkStyle = { color: 'var(--color-accent-light)' } as const;

function QuotientIcon({ size = 28 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/quotient-icon.png"
      alt="Quotient"
      width={size}
      height={size}
      style={{ borderRadius: Math.round(size * 0.25), display: 'block' }}
    />
  );
}

export { QuotientIcon };

/** Wraps help@vantoro.studio in a mailto link and fills {privacy}. */
export function Rich({ text, privacy }: { text: string; privacy?: { label: string; href: string } }) {
  const re = /(help@vantoro\.studio|reportaproblem\.apple\.com|\{privacy\})/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const token = m[0];
    if (token === '{privacy}' && privacy) {
      nodes.push(<Link key={i} href={privacy.href} className="no-underline hover:underline" style={linkStyle}>{privacy.label}</Link>);
    } else if (token === 'help@vantoro.studio') {
      nodes.push(<a key={i} href="mailto:help@vantoro.studio" className="no-underline hover:underline" style={linkStyle}>{token}</a>);
    } else if (token === 'reportaproblem.apple.com') {
      nodes.push(<a key={i} href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline" style={linkStyle}>{token}</a>);
    }
    last = m.index + token.length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

export function QuotientNav({ backHref = '/quotient', backKey = 'q.back' }: { backHref?: string; backKey?: string }) {
  return (
    <Nav
      brandText="Quotient"
      brandHref="/quotient"
      brandIcon={<QuotientIcon size={28} />}
      backHref={backHref}
      backKey={backKey}
    />
  );
}

export function QuotientFooter() {
  const { t } = useLang();
  const link = 'text-[12px] no-underline hover:text-[var(--color-text)] transition-colors';
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-[52px] py-7"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="flex items-center gap-2 text-[14px] font-bold">
        <Link href="/" className="no-underline text-[var(--color-text)] hover:opacity-70 transition-opacity">
          Vantoro Studio
        </Link>
      </div>
      <div className="flex gap-5">
        <Link href="/quotient/privacy" className={link} style={{ color: 'var(--color-text-muted)' }}>{t('footer.privacy')}</Link>
        <Link href="/quotient/terms" className={link} style={{ color: 'var(--color-text-muted)' }}>{t('footer.terms')}</Link>
        <Link href="/quotient/support" className={link} style={{ color: 'var(--color-text-muted)' }}>{t('footer.support')}</Link>
      </div>
      <p className="text-[12px]" style={{ color: 'var(--color-text-faint)' }}>{t('q.copy')}</p>
    </footer>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.8px] uppercase px-[14px] py-[6px] rounded-full mb-6"
      style={{
        background: 'rgba(88,65,216,.12)',
        border: '1px solid rgba(88,65,216,.3)',
        color: 'var(--color-accent-light)',
      }}
    >
      {children}
    </div>
  );
}

export type Block = { p: string } | { ul: string[] };

/** A legal document (privacy policy, terms) in the site's dark style. */
export function LegalDoc({
  title,
  updated,
  tldr,
  sections,
  privacy,
}: {
  title: string;
  updated: string;
  tldr?: string;
  sections: { h: string; blocks: Block[] }[];
  privacy?: { label: string; href: string };
}) {
  const { t } = useLang();
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <QuotientNav />
      <div className="max-w-[720px] mx-auto px-6 md:px-[52px] pt-[130px] pb-[100px]">
        <Badge>{t('q.legal.badge')}</Badge>
        <h1 className="font-extrabold leading-[1.05] mb-3" style={{ fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-2px' }}>
          {title}
        </h1>
        <p className="text-[13px] mb-10" style={{ color: 'var(--color-text-muted)' }}>{updated}</p>
        {tldr && (
          <div
            className="rounded-[16px] px-7 py-6 mb-[52px] text-[15px] leading-[1.75]"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
          >
            {tldr}
          </div>
        )}
        {sections.map((s) => (
          <div key={s.h} className="mb-[40px]">
            <h2 className="text-[18px] font-bold tracking-[-0.3px] mb-3 text-[var(--color-text)]">{t(s.h)}</h2>
            {s.blocks.map((b, i) =>
              'p' in b ? (
                <p key={i} className="text-[15px] leading-[1.75] mb-[14px]" style={bodyStyle}>
                  <Rich text={t(b.p)} privacy={privacy} />
                </p>
              ) : (
                <ul key={i} className="mb-[14px] p-0 list-none">
                  {b.ul.map((k) => (
                    <li key={k} className="text-[15px] leading-[1.75] mb-1" style={bodyStyle}>
                      – <Rich text={t(k)} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </div>
        ))}
      </div>
      <QuotientFooter />
    </div>
  );
}
