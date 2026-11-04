'use client';

import { useLang } from '@/components/LangContext';
import { LegalShell, LegalSection, Rich, type Block } from '@/components/Legal';

const SECTIONS: { h: string; blocks: Block[] }[] = [
  { h: 'privacy.s1.h2', blocks: [{ p: 'privacy.s1.p1' }, { p: 'privacy.s1.p2' }] },
  {
    h: 'privacy.s2.h2',
    blocks: [
      { p: 'privacy.s2.p1' },
      { ul: ['privacy.s2.li1', 'privacy.s2.li2', 'privacy.s2.li3', 'privacy.s2.li4', 'privacy.s2.li5', 'privacy.s2.li6'] },
      { p: 'privacy.s2.p2' },
    ],
  },
  { h: 'privacy.s3.h2', blocks: [{ p: 'privacy.s3.p1' }, { p: 'privacy.s3.p2' }] },
  { h: 'privacy.s4.h2', blocks: [{ p: 'privacy.s4.p1' }, { p: 'privacy.s4.p2' }] },
  { h: 'privacy.s5.h2', blocks: [{ p: 'privacy.s5.p1' }, { ul: ['privacy.s5.li1', 'privacy.s5.li2'] }] },
  { h: 'privacy.s6.h2', blocks: [{ p: 'privacy.s6.p1' }] },
  { h: 'privacy.s7.h2', blocks: [{ p: 'privacy.s7.p1' }] },
  { h: 'privacy.s8.h2', blocks: [{ p: 'privacy.s8.p1' }] },
];

export default function PrivacyPage() {
  const { t } = useLang();
  return (
    <LegalShell title={t('privacy.page.h1')} meta={t('privacy.page.updated')} tone="blue">
      <div className="prose">
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 2.6vw, 32px)',
            lineHeight: 1.2,
            margin: 0,
            padding: '24px 28px',
            background: 'var(--yellow)',
            borderRadius: '20px 20px 5px 5px',
          }}
        >
          <Rich text={t('privacy.tldr')} />
        </p>
        {SECTIONS.map((s) => (
          <LegalSection key={s.h} heading={s.h} blocks={s.blocks} />
        ))}
      </div>
    </LegalShell>
  );
}
