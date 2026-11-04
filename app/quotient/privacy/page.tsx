'use client';

import { useLang } from '@/components/LangContext';
import { LegalDoc, type Block } from '@/components/QuotientShell';

const SECTIONS: { h: string; blocks: Block[] }[] = [
  { h: 'q.privacy.s1.h2', blocks: [{ p: 'q.privacy.s1.p1' }, { p: 'q.privacy.s1.p2' }] },
  {
    h: 'q.privacy.s2.h2',
    blocks: [
      { p: 'q.privacy.s2.p1' },
      { ul: ['q.privacy.s2.li1', 'q.privacy.s2.li2', 'q.privacy.s2.li3', 'q.privacy.s2.li4', 'q.privacy.s2.li5'] },
      { p: 'q.privacy.s2.p2' },
    ],
  },
  { h: 'q.privacy.s3.h2', blocks: [{ p: 'q.privacy.s3.p1' }, { p: 'q.privacy.s3.p2' }] },
  { h: 'q.privacy.s4.h2', blocks: [{ p: 'q.privacy.s4.p1' }] },
  { h: 'q.privacy.s5.h2', blocks: [{ p: 'q.privacy.s5.p1' }] },
  { h: 'q.privacy.s6.h2', blocks: [{ p: 'q.privacy.s6.p1' }] },
  { h: 'q.privacy.s7.h2', blocks: [{ p: 'q.privacy.s7.p1' }] },
  { h: 'q.privacy.s8.h2', blocks: [{ p: 'q.privacy.s8.p1' }] },
  { h: 'q.privacy.s9.h2', blocks: [{ p: 'q.privacy.s9.p1' }] },
  { h: 'q.privacy.s10.h2', blocks: [{ p: 'q.privacy.s10.p1' }] },
];

export default function QuotientPrivacyPage() {
  const { t } = useLang();
  return (
    <LegalDoc
      title={t('q.privacy.h1')}
      updated={t('q.privacy.updated')}
      tldr={t('q.privacy.tldr')}
      sections={SECTIONS}
    />
  );
}
