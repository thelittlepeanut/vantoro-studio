'use client';

import { useLang } from '@/components/LangContext';
import { LegalShell, LegalSection, type Block } from '@/components/Legal';

const SECTIONS: { h: string; blocks: Block[] }[] = [
  { h: 'terms.s1.h2', blocks: [{ p: 'terms.s1.p1' }, { p: 'terms.s1.p2' }] },
  { h: 'terms.s2.h2', blocks: [{ p: 'terms.s2.p1' }] },
  {
    h: 'terms.s3.h2',
    blocks: [
      { p: 'terms.s3.p1' },
      { p: 'terms.s3.sub1' },
      { p: 'terms.s3.p2' },
      { p: 'terms.s3.p3' },
      { p: 'terms.s3.p4' },
      { p: 'terms.s3.p5' },
    ],
  },
  {
    h: 'terms.s4.h2',
    blocks: [
      { p: 'terms.s4.p1' },
      { p: 'terms.s4.p2' },
      { ul: ['terms.s4.li1', 'terms.s4.li2', 'terms.s4.li3', 'terms.s4.li4'] },
    ],
  },
  { h: 'terms.s5.h2', blocks: [{ p: 'terms.s5.p1' }, { p: 'terms.s5.p2' }] },
  { h: 'terms.s6.h2', blocks: [{ p: 'terms.s6.p1' }] },
  { h: 'terms.s7.h2', blocks: [{ p: 'terms.s7.p1' }, { p: 'terms.s7.p2' }] },
  { h: 'terms.s8.h2', blocks: [{ p: 'terms.s8.p1' }, { p: 'terms.s8.p2' }] },
  { h: 'terms.s9.h2', blocks: [{ p: 'terms.s9.p1' }] },
  { h: 'terms.s10.h2', blocks: [{ p: 'terms.s10.p1' }] },
  {
    h: 'terms.sapple.h2',
    blocks: [
      { p: 'terms.sapple.p1' },
      { p: 'terms.sapple.p2' },
      { p: 'terms.sapple.p3' },
      { p: 'terms.sapple.p4' },
      { p: 'terms.sapple.p5' },
    ],
  },
  { h: 'terms.s11.h2', blocks: [{ p: 'terms.s11.p1' }] },
  { h: 'terms.s12.h2', blocks: [{ p: 'terms.s12.p1' }, { p: 'terms.s12.p2' }] },
];

export default function TermsPage() {
  const { t } = useLang();
  return (
    <LegalShell title={t('terms.page.h1')} meta={t('terms.page.updated')} tone="grey">
      <div className="prose">
        {SECTIONS.map((s) => (
          <LegalSection
            key={s.h}
            heading={s.h}
            blocks={s.blocks}
            privacy={{ label: t('terms.s9.link'), href: '/flickflush/privacy' }}
          />
        ))}
      </div>
    </LegalShell>
  );
}
