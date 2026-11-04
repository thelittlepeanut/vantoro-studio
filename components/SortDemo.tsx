'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangContext';
import { CheckIcon, HeartIcon, TrashIcon, UndoIcon } from './Icons';

type BinId = 'keep' | 'fav' | 'bin';

const PHOTOS = [
  { id: 'dune', src: '/photos/dune.jpg' },
  { id: 'lake', src: '/photos/lake.jpg' },
  { id: 'falls', src: '/photos/falls.jpg' },
] as const;

const BINS: { id: BinId; icon: React.ReactNode; labelKey: string }[] = [
  { id: 'keep', icon: <CheckIcon size={34} />, labelKey: 'bin.keep' },
  { id: 'fav', icon: <HeartIcon size={34} />, labelKey: 'bin.fav' },
  { id: 'bin', icon: <TrashIcon size={34} />, labelKey: 'bin.bin' },
];

const SWIPE = 80;
const FLY_MS = 380;

interface Drag {
  x: number;
  y: number;
}

interface Flight {
  x: number;
  y: number;
}

export default function SortDemo() {
  const { t } = useLang();
  const [history, setHistory] = useState<{ id: string; bin: BinId }[]>([]);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [hot, setHot] = useState<BinId | null>(null);
  const [flight, setFlight] = useState<Flight | null>(null);
  const [popped, setPopped] = useState<BinId | null>(null);
  const [announce, setAnnounce] = useState('');

  const cardRef = useRef<HTMLDivElement>(null);
  const binRefs = useRef<Record<BinId, HTMLButtonElement | null>>({ keep: null, fav: null, bin: null });
  const start = useRef<{ x: number; y: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const done = history.length >= PHOTOS.length;
  const current = done ? null : PHOTOS[history.length];
  const next = history.length + 1 < PHOTOS.length ? PHOTOS[history.length + 1] : null;
  const busy = flight !== null;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const count = (bin: BinId) => history.filter((h) => h.bin === bin).length;

  const reducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const commit = (bin: BinId) => {
    if (!current) return;
    setHistory((h) => [...h, { id: current.id, bin }]);
    setFlight(null);
    setDrag(null);
    setHot(null);
    setPopped(bin);
    setAnnounce(t('demo.moved').replace('{bin}', t(`bin.${bin}`)));
  };

  const sort = (bin: BinId) => {
    if (!current || busy) return;
    const card = cardRef.current?.getBoundingClientRect();
    const target = binRefs.current[bin]?.getBoundingClientRect();
    if (reducedMotion() || !card || !target) {
      commit(bin);
      return;
    }
    const dx = target.left + target.width / 2 - (card.left + card.width / 2);
    const dy = target.top + target.height / 2 - (card.top + card.height / 2);
    setFlight({ x: dx, y: dy });
    timer.current = setTimeout(() => commit(bin), FLY_MS);
  };

  const binAt = (x: number, y: number): BinId | null => {
    for (const b of BINS) {
      const r = binRefs.current[b.id]?.getBoundingClientRect();
      if (r && x >= r.left && x <= r.right && y >= r.top - 12 && y <= r.bottom) return b.id;
    }
    return null;
  };

  const byThreshold = (dx: number, dy: number): BinId | null => {
    if (dx > SWIPE) return 'keep';
    if (dx < -SWIPE) return 'bin';
    if (dy < -SWIPE) return 'fav';
    return null;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (busy) return;
    start.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!start.current || busy) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    setDrag({ x: dx, y: dy });
    setHot(binAt(e.clientX, e.clientY) ?? byThreshold(dx, dy));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    start.current = null;
    const target = binAt(e.clientX, e.clientY) ?? byThreshold(dx, dy);
    if (target) sort(target);
    else {
      setDrag(null);
      setHot(null);
    }
  };

  const onPointerCancel = () => {
    start.current = null;
    setDrag(null);
    setHot(null);
  };

  const undo = () => {
    if (busy || history.length === 0) return;
    const last = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setPopped(null);
    setAnnounce(`${t('demo.undo')}: ${t(`demo.alt.${last.id}`)}`);
  };

  const replay = () => {
    setHistory([]);
    setPopped(null);
    setAnnounce('');
  };

  const cardStyle: React.CSSProperties = flight
    ? {
        transform: `translate(${flight.x}px, ${flight.y}px) scale(0.22) rotate(${flight.x / 14}deg)`,
        opacity: 0.2,
        transition: `transform ${FLY_MS}ms var(--ease-out), opacity ${FLY_MS}ms ease-in`,
      }
    : drag
      ? { transform: `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x / 18}deg)`, transition: 'none' }
      : { transform: 'none', transition: 'transform 0.4s var(--ease-out)' };

  return (
    <div role="group" aria-label={t('demo.label')} style={{ width: '100%' }}>
      <div className="demo-stage">
        {next && (
          <div className="photo-card" data-pos="next" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={next.src} alt="" />
          </div>
        )}
        {current && (
          <div
            key={current.id}
            ref={cardRef}
            className="photo-card"
            style={{ ...cardStyle, zIndex: 2 }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={t(`demo.alt.${current.id}`)} draggable={false} />
          </div>
        )}
        {done && (
          <div className="demo-done">
            <h3 className="display display-m" style={{ margin: 0 }}>{t('demo.done.title')}</h3>
            <p style={{ margin: 0, maxWidth: '20rem' }}>
              {t('demo.done.body').replace('{n}', String(history.length))}
            </p>
            <button type="button" className="btn" onClick={replay}>
              {t('demo.replay')}
            </button>
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          margin: '14px auto 0',
          width: 'min(100%, 360px)',
          fontSize: 15,
          color: 'var(--sub)',
        }}
      >
        <span>{done ? t('demo.note') : t('demo.hint')}</span>
        <button
          type="button"
          onClick={undo}
          disabled={history.length === 0 || busy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 0,
            padding: '4px 2px',
            font: 'inherit',
            fontWeight: 700,
            color: 'inherit',
            cursor: history.length === 0 ? 'default' : 'pointer',
            opacity: history.length === 0 ? 0.4 : 1,
          }}
        >
          <UndoIcon size={20} />
          {t('demo.undo')}
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(10px, 2.4vw, 28px)',
          marginTop: 36,
        }}
      >
        {BINS.map((b) => (
          <button
            key={b.id}
            type="button"
            ref={(el) => {
              binRefs.current[b.id] = el;
            }}
            className={`bin${hot === b.id ? ' is-hot' : ''}${popped === b.id ? ' is-pop' : ''}`}
            data-bin={b.id}
            disabled={done}
            onClick={() => sort(b.id)}
            style={done ? { cursor: 'default' } : undefined}
          >
            <span className="bin__lid" aria-hidden />
            <span className="bin__body">
              {b.icon}
              <span className="bin__name">{t(b.labelKey)}</span>
              <span className="bin__count num" key={`${b.id}-${count(b.id)}`}>{count(b.id)}</span>
            </span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        {announce}
      </p>
    </div>
  );
}
