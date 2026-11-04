'use client';

import { useLang } from '@/components/LangContext';
import { LegalDoc, type Block } from '@/components/QuotientShell';

const SECTIONS: { h: string; blocks: Block[] }[] = [
  { h: 'q.terms.s1.h2', blocks: [{ p: 'q.terms.s1.p1' }, { p: 'q.terms.s1.p2' }] },
  { h: 'q.terms.s2.h2', blocks: [{ p: 'q.terms.s2.p1' }, { p: 'q.terms.s2.p2' }] },
  { h: 'q.terms.s3.h2', blocks: [{ p: 'q.terms.s3.p1' }, { p: 'q.terms.s3.p2' }] },
  {
    h: 'q.terms.s4.h2',
    blocks: [
      { p: 'q.terms.s4.p1' },
      { p: 'q.terms.s4.p2' },
      { ul: ['q.terms.s4.li1', 'q.terms.s4.li2', 'q.terms.s4.li3', 'q.terms.s4.li4'] },
    ],
  },
  { h: 'q.terms.s5.h2', blocks: [{ p: 'q.terms.s5.p1' }] },
  { h: 'q.terms.s6.h2', blocks: [{ p: 'q.terms.s6.p1' }, { p: 'q.terms.s6.p2' }] },
  { h: 'q.terms.s7.h2', blocks: [{ p: 'q.terms.s7.p1' }, { p: 'q.terms.s7.p2' }] },
  { h: 'q.terms.s8.h2', blocks: [{ p: 'q.terms.s8.p1' }] },
  { h: 'q.terms.s9.h2', blocks: [{ p: 'q.terms.s9.p1' }] },
  {
    h: 'q.terms.s10.h2',
    blocks: [
      { p: 'q.terms.s10.p1' },
      { p: 'q.terms.s10.p2' },
      { p: 'q.terms.s10.p3' },
      { p: 'q.terms.s10.p4' },
      { p: 'q.terms.s10.p5' },
    ],
  },
  { h: 'q.terms.s11.h2', blocks: [{ p: 'q.terms.s11.p1' }] },
  { h: 'q.terms.s12.h2', blocks: [{ p: 'q.terms.s12.p1' }, { p: 'q.terms.s12.p2' }] },
];

export default function QuotientTermsPage() {
  const { t } = useLang();
  return (
    <LegalDoc
      title={t('q.terms.h1')}
      updated={t('q.terms.updated')}
      sections={SECTIONS}
      privacy={{ label: t('q.terms.s8.link'), href: '/quotient/privacy' }}
    />
  );
}
