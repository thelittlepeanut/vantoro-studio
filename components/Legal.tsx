'use client';

import Link from 'next/link';
import React from 'react';
import { useLang } from './LangContext';
import Nav from './Nav';
import Footer from './Footer';

/** Wraps emails and known URLs in links, bolds a leading "Label." and fills {privacy}. */
export function Rich({ text, privacy }: { text: string; privacy?: { label: string; href: string } }) {
  const lead = text.match(/^(Refunds\.|Free trials\.|Remboursements\s?\.|Essais gratuits\s?\.)\s/);
  const body = lead ? text.slice(lead[0].length) : text;

  const nodes: React.ReactNode[] = [];
  const re = /(help@vantoro\.studio|reportaproblem\.apple\.com|\{privacy\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(body))) {
    if (m.index > last) nodes.push(body.slice(last, m.index));
    const token = m[0];
    if (token === '{privacy}' && privacy) {
      nodes.push(<Link key={i} href={privacy.href}>{privacy.label}</Link>);
    } else if (token === 'help@vantoro.studio') {
      nodes.push(<a key={i} href="mailto:help@vantoro.studio">{token}</a>);
    } else if (token === 'reportaproblem.apple.com') {
      nodes.push(<a key={i} href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">{token}</a>);
    }
    last = m.index + token.length;
    i++;
  }
  if (last < body.length) nodes.push(body.slice(last));

  return (
    <>
      {lead && <strong>{lead[0]}</strong>}
      {lead && ' '}
      {nodes}
    </>
  );
}

interface ShellProps {
  title: string;
  meta?: string;
  tone?: 'yellow' | 'green' | 'blue' | 'grey';
  /** Where the "back" link goes. Defaults to the FlickFlush page. */
  back?: { href: string; label: string };
  children: React.ReactNode;
}

export function LegalShell({ title, meta, tone = 'yellow', back, children }: ShellProps) {
  const { t } = useLang();
  return (
    <>
      <Nav />
      <main>
        <section className={`ground-${tone}`} style={{ paddingBlock: 'clamp(48px, 8vw, 104px) clamp(40px, 6vw, 72px)' }}>
          <div className="wrap">
            <Link href={back?.href ?? '/flickflush'} style={{ color: 'inherit', fontWeight: 600 }}>
              ← {back?.label ?? t('legal.back')}
            </Link>
            <h1 className="display display-l" style={{ margin: '28px 0 0' }}>{title}</h1>
            {meta && <p className="lead" style={{ margin: '20px 0 0' }}>{meta}</p>}
          </div>
        </section>
        <section className="ground-paper" style={{ paddingBlock: 'clamp(48px, 7vw, 88px) clamp(72px, 10vw, 140px)' }}>
          <div className="wrap">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export type Block = { p: string } | { ul: string[] };

export function LegalSection({
  heading,
  blocks,
  privacy,
}: {
  heading: string;
  blocks: Block[];
  privacy?: { label: string; href: string };
}) {
  const { t } = useLang();
  return (
    <>
      <h2>{t(heading)}</h2>
      {blocks.map((b, i) =>
        'p' in b ? (
          <p key={i}><Rich text={t(b.p)} privacy={privacy} /></p>
        ) : (
          <ul key={i}>
            {b.ul.map((k) => (
              <li key={k}><Rich text={t(k)} /></li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}
