'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SortDemo from '@/components/SortDemo';
import PhoneFrame from '@/components/PhoneFrame';
import { ArrowIcon } from '@/components/Icons';

export default function StudioPage() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <main>
        {/* Hero: the poster. The sorting demo is the first thing on the page. */}
        <section className="ground-yellow" style={{ paddingBlock: 'clamp(40px, 6vw, 72px) clamp(48px, 7vw, 96px)' }}>
          <div
            className="wrap"
            style={{ display: 'grid', gap: 'clamp(40px, 6vw, 72px)', alignItems: 'start' }}
          >
            <div
              style={{
                display: 'grid',
                gap: 'clamp(32px, 5vw, 64px)',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                alignItems: 'start',
              }}
            >
              <div>
                <h1 className="display display-xl" style={{ margin: 0 }}>
                  {t('home.title.1')}
                  <br />
                  {t('home.title.2')}
                </h1>
                <p className="lead" style={{ margin: '28px 0 0' }}>
                  {t('home.sub')}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36 }}>
                  <Link href="/flickflush" className="btn">
                    {t('home.cta')}
                    <ArrowIcon size={24} />
                  </Link>
                  <span className="status">{t('soon.label')}</span>
                </div>
              </div>

              <SortDemo />
            </div>
          </div>
        </section>

        {/* The app */}
        <section className="ground-green section">
          <div className="wrap feature" data-flip="true">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/flickflush-logo.png"
                  alt=""
                  width={72}
                  height={72}
                  style={{ borderRadius: 18, display: 'block' }}
                />
                <h2 className="display display-l" style={{ margin: 0 }}>
                  {t('home.app.title')}
                </h2>
              </div>
              <p className="lead" style={{ margin: '28px 0 36px' }}>
                {t('home.app.desc')}
              </p>
              <Link href="/flickflush" className="btn" data-variant="light">
                {t('home.app.link')}
                <ArrowIcon size={24} />
              </Link>
            </div>

            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div className="rise" style={{ width: '44%', marginTop: 56 }}>
                <PhoneFrame src="/screenshots/s_3.jpg" alt="" width={400} />
              </div>
              <div className="rise" style={{ width: '44%' }}>
                <PhoneFrame src="/screenshots/s_dupes.jpg" alt="" width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Quotient */}
        <section className="ground-blue section">
          <div className="wrap feature">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/quotient-icon.png"
                  alt=""
                  width={72}
                  height={72}
                  style={{ borderRadius: 18, display: 'block' }}
                />
                <h2 className="display display-l" style={{ margin: 0 }}>
                  {t('q.name')}
                </h2>
              </div>
              <p className="lead" style={{ margin: '28px 0 36px' }}>
                {t('q.home.desc')}
              </p>
              <Link href="/quotient" className="btn" data-variant="light">
                {t('q.home.link')}
                <ArrowIcon size={24} />
              </Link>
            </div>

            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div className="rise" style={{ width: '44%', marginTop: 56 }}>
                <PhoneFrame src="/screenshots/quotient-home.jpg" alt={t('q.alt.home')} width={400} />
              </div>
              <div className="rise" style={{ width: '44%' }}>
                <PhoneFrame src="/screenshots/quotient-lock.jpg" alt={t('q.alt.lock')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* The studio */}
        <section className="ground-ink section">
          <div className="wrap" style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', alignItems: 'end' }}>
            <h2 className="display display-l" style={{ margin: 0 }}>
              {t('home.studio.title')}
            </h2>
            <div>
              <p className="lead" style={{ margin: '0 0 28px' }}>
                {t('home.studio.body')}
              </p>
              <a href="mailto:help@vantoro.studio" className="btn" data-variant="yellow">
                {t('home.studio.contact')}
                <ArrowIcon size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
