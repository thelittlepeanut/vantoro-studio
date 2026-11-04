'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PhoneFrame from '@/components/PhoneFrame';
import { ArrowIcon, NoAccountSign, NoUploadSign, OfflineSign } from '@/components/Icons';

const SECTIONS = [
  { href: '#keep', key: 'nav.keep', tone: 'green' as const },
  { href: '#favorite', key: 'nav.favorite', tone: 'blue' as const },
  { href: '#dupes', key: 'nav.dupes' },
  { href: '#bin', key: 'nav.bin', tone: 'grey' as const },
  { href: '#privacy', key: 'nav.private' },
];

function Points({ items }: { items: { h: string; p: string }[] }) {
  return (
    <ul className="points">
      {items.map((it) => (
        <li key={it.h}>
          <h3>{it.h}</h3>
          <p>{it.p}</p>
        </li>
      ))}
    </ul>
  );
}

export default function FlickFlushPage() {
  const { t } = useLang();

  const trio = (prefix: string) =>
    [1, 2, 3].map((n) => ({ h: t(`${prefix}.b${n}.h`), p: t(`${prefix}.b${n}.p`) }));

  return (
    <>
      <Nav sections={SECTIONS} />
      <main>
        {/* Hero */}
        <section className="ground-yellow" style={{ paddingBlock: 'clamp(40px, 6vw, 80px) clamp(56px, 8vw, 110px)' }}>
          <div className="wrap feature">
            <div>
              <h1 className="display display-xl" style={{ margin: 0 }}>
                {t('ff.title.1')}
                <br />
                {t('ff.title.2')}
              </h1>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('ff.sub')}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36 }}>
                <span className="status">{t('soon.label')}</span>
                <a href="#keep" className="btn">
                  {t('nav.keep')}
                  <ArrowIcon size={24} />
                </a>
              </div>
              <p style={{ margin: '20px 0 0', fontSize: 15, color: 'var(--sub)' }}>{t('soon.android')}</p>
            </div>

            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div style={{ width: '48%', marginTop: 72 }}>
                <PhoneFrame src="/screenshots/s_11.jpg" alt={t('modes.alt')} width={400} priority />
              </div>
              <div style={{ width: '48%' }}>
                <PhoneFrame src="/screenshots/s_3.jpg" alt={t('keep.alt.keep')} width={400} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Keep */}
        <section id="keep" className="ground-green section">
          <div className="wrap feature">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('keep.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('keep.desc')}</p>
              <Points items={trio('keep')} />
            </div>
            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div className="rise" style={{ width: '46%', marginTop: 64 }}>
                <PhoneFrame src="/screenshots/s_5.jpg" alt={t('keep.alt.bin')} width={400} />
              </div>
              <div className="rise" style={{ width: '46%' }}>
                <PhoneFrame src="/screenshots/s_6.jpg" alt={t('keep.alt.keep')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Favorite */}
        <section id="favorite" className="ground-blue section">
          <div className="wrap feature" data-flip="true">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('fav.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('fav.desc')}</p>
              <Points items={trio('fav')} />
            </div>
            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div className="rise" style={{ width: '46%' }}>
                <PhoneFrame src="/screenshots/s_7.jpg" alt={t('fav.alt.fav')} width={400} />
              </div>
              <div className="rise" style={{ width: '46%', marginTop: 64 }}>
                <PhoneFrame src="/screenshots/s_8.jpg" alt={t('fav.alt.album')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Duplicates */}
        <section id="dupes" className="ground-paper section">
          <div className="wrap feature">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('dupes.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('dupes.desc')}</p>
              <Points items={trio('dupes')} />
            </div>
            <div
              className="phones"
              style={{
                background: 'var(--yellow)',
                padding: 'clamp(32px, 6vw, 64px) 0 0',
                borderRadius: '28px 28px 6px 6px',
                alignItems: 'flex-end',
                overflow: 'hidden',
              }}
            >
              <div className="rise" style={{ width: 'min(70%, 340px)', marginBottom: -120 }}>
                <PhoneFrame
                  src="/screenshots/s_dupes.jpg"
                  alt={t('dupes.alt')}
                  width={400}
                  className="phone--cut"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Modes */}
        <section className="ground-yellow section">
          <div className="wrap feature" data-flip="true">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('modes.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('modes.desc')}</p>
              <Points
                items={[1, 2, 3].map((n) => ({ h: t(`mode${n}.title`), p: t(`mode${n}.desc`) }))}
              />
            </div>
            <div className="phones">
              <div className="rise" style={{ width: 'min(72%, 340px)' }}>
                <PhoneFrame src="/screenshots/s_11.jpg" alt={t('modes.alt')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Bin and recap */}
        <section id="bin" className="ground-grey section">
          <div className="wrap feature">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('trash.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('trash.desc')}</p>
              <Points items={trio('trash')} />
            </div>
            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div className="rise" style={{ width: '46%', marginTop: 64 }}>
                <PhoneFrame src="/screenshots/s_9.jpg" alt={t('trash.alt.basket')} width={400} />
              </div>
              <div className="rise" style={{ width: '46%' }}>
                <PhoneFrame src="/screenshots/s_10.jpg" alt={t('trash.alt.recap')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section id="privacy" className="ground-ink section">
          <div className="wrap">
            <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', alignItems: 'end' }}>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('priv.title')}</h2>
              <p className="lead" style={{ margin: 0 }}>{t('priv.desc')}</p>
            </div>

            <div
              style={{
                display: 'grid',
                gap: '0 clamp(24px, 4vw, 56px)',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                marginTop: 'clamp(40px, 6vw, 72px)',
              }}
            >
              {[
                { icon: <NoUploadSign />, k: 'priv.b1' },
                { icon: <NoAccountSign />, k: 'priv.b2' },
                { icon: <OfflineSign />, k: 'priv.b3' },
              ].map((s) => (
                <div key={s.k} className="sign">
                  <div className="sign__icon" style={{ color: '#fff' }}>{s.icon}</div>
                  <div>
                    <h3 className="display" style={{ margin: '0 0 6px', fontSize: 30, lineHeight: 1 }}>{t(`${s.k}.h`)}</h3>
                    <p style={{ margin: 0, color: 'var(--sub)', fontSize: 17 }}>{t(`${s.k}.p`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/flickflush/privacy"
              className="btn"
              data-variant="outline"
              style={{ marginTop: 40 }}
            >
              {t('priv.link')}
              <ArrowIcon size={24} />
            </Link>
          </div>
        </section>

        {/* Closing */}
        <section className="ground-yellow section">
          <div
            className="wrap"
            style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', alignItems: 'end' }}
          >
            <h2 className="display display-xl" style={{ margin: 0 }}>
              {t('cta.title.1')}
              <br />
              {t('cta.title.2')}
            </h2>
            <div>
              <p className="lead" style={{ margin: '0 0 28px' }}>{t('cta.sub')}</p>
              <span className="status">{t('soon.label')}</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
