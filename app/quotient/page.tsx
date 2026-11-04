'use client';

import Link from 'next/link';
import { useLang } from '@/components/LangContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PhoneFrame from '@/components/PhoneFrame';
import { ArrowIcon } from '@/components/Icons';

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '28px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 12, fontSize: 18 }}>
      {items.map((text) => (
        <li key={text} style={{ paddingLeft: 22, position: 'relative' }}>
          <span aria-hidden style={{ position: 'absolute', left: 0 }}>·</span>
          {text}
        </li>
      ))}
    </ul>
  );
}

export default function QuotientPage() {
  const { t } = useLang();
  const trio = (prefix: string) => [1, 2, 3].map((n) => t(`${prefix}.p${n}`));

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="ground-yellow" style={{ paddingBlock: 'clamp(40px, 6vw, 80px) clamp(56px, 8vw, 110px)' }}>
          <div className="wrap feature">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/quotient-icon.png"
                alt=""
                width={72}
                height={72}
                style={{ borderRadius: 18, display: 'block', marginBottom: 28 }}
              />
              <h1 className="display display-xl" style={{ margin: 0 }}>
                {t('q.title.1')}
                <br />
                {t('q.title.2')}
              </h1>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('q.sub')}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36 }}>
                <span className="status">{t('soon.label')}</span>
                <Link href="/quotient/support" className="btn">
                  {t('q.cta')}
                  <ArrowIcon size={24} />
                </Link>
              </div>
            </div>
            <div className="phones">
              <div className="rise" style={{ width: 'min(70%, 340px)' }}>
                <PhoneFrame src="/screenshots/quotient-app-top.jpg" alt={t('q.alt.app')} width={400} priority />
              </div>
            </div>
          </div>
        </section>

        {/* The percentage */}
        <section className="ground-green section">
          <div className="wrap feature" data-flip="true">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('q.f1.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('q.f1.desc')}</p>
              <List items={trio('q.f1')} />
            </div>
            <div className="phones">
              <div className="rise" style={{ width: 'min(70%, 340px)' }}>
                <PhoneFrame src="/screenshots/quotient-app-history.jpg" alt={t('q.alt.history')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Widgets */}
        <section className="ground-blue section">
          <div className="wrap feature">
            <div>
              <h2 className="display display-l" style={{ margin: 0 }}>{t('q.f2.title')}</h2>
              <p className="lead" style={{ margin: '28px 0 0' }}>{t('q.f2.desc')}</p>
              <List items={trio('q.f2')} />
            </div>
            <div className="phones" style={{ gap: 'clamp(12px, 2vw, 28px)' }}>
              <div className="rise" style={{ width: '46%' }}>
                <PhoneFrame src="/screenshots/quotient-home.jpg" alt={t('q.alt.home')} width={400} />
              </div>
              <div className="rise" style={{ width: '46%', marginTop: 64 }}>
                <PhoneFrame src="/screenshots/quotient-lock.jpg" alt={t('q.alt.lock')} width={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Notifications and history */}
        <section className="ground-paper section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <h2 className="display display-l" style={{ margin: 0 }}>{t('q.f3.title')}</h2>
            <p className="lead" style={{ margin: '28px 0 0' }}>{t('q.f3.desc')}</p>
            <List items={trio('q.f3')} />
          </div>
        </section>

        {/* Privacy */}
        <section className="ground-ink section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <h2 className="display display-l" style={{ margin: 0 }}>{t('q.private.title')}</h2>
            <p className="lead" style={{ margin: '28px 0 0' }}>{t('q.private.desc')}</p>
            <List items={trio('q.private')} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36 }}>
              <Link href="/quotient/privacy" className="btn" data-variant="yellow">
                {t('footer.privacy')}
                <ArrowIcon size={24} />
              </Link>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="ground-yellow section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <h2 className="display display-l" style={{ margin: 0 }}>{t('q.facts.title')}</h2>
            <List items={[1, 2, 3, 4].map((n) => t(`q.facts.${n}`))} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
