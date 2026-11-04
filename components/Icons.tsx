interface IconProps {
  size?: number;
  className?: string;
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 32 32',
  'aria-hidden': true,
};

export function CheckIcon({ size = 32, className }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M6 17l7 7 13-15" />
    </svg>
  );
}

export function HeartIcon({ size = 32, className }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M16 27S4 19.5 4 11.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 12 3.5C28 19.5 16 27 16 27z" />
    </svg>
  );
}

export function TrashIcon({ size = 32, className }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M5 9h22M12 9V5h8v4M8 9l1.5 18h13L24 9M13 14v8M19 14v8" />
    </svg>
  );
}

export function ArrowIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M5 16h21M18 8l8 8-8 8" />
    </svg>
  );
}

export function UndoIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M7 13h12a6 6 0 0 1 0 12h-6M7 13l5-5M7 13l5 5" />
    </svg>
  );
}

/* Prohibition signs: a circle and a slash over a pictogram */
function Prohibited({ children, size = 72 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="36" cy="36" r="31" stroke="var(--yellow)" />
      <g strokeWidth="4">{children}</g>
      <path d="M14 58L58 14" stroke="var(--yellow)" />
    </svg>
  );
}

export function NoUploadSign({ size }: { size?: number }) {
  return (
    <Prohibited size={size}>
      <path d="M25 46h-1a8 8 0 0 1-1.5-15.9 12 12 0 0 1 23.2-1.6A9.5 9.5 0 0 1 47 46h-2" />
      <path d="M36 52V36M30 41l6-6 6 6" />
    </Prohibited>
  );
}

export function NoAccountSign({ size }: { size?: number }) {
  return (
    <Prohibited size={size}>
      <circle cx="36" cy="28" r="7" />
      <path d="M22 51c1.5-8 7-11 14-11s12.5 3 14 11" />
    </Prohibited>
  );
}

export function OfflineSign({ size }: { size?: number }) {
  return (
    <Prohibited size={size}>
      <path d="M21 35a21 21 0 0 1 30 0M27 41a13 13 0 0 1 18 0" />
      <circle cx="36" cy="48" r="1.5" fill="currentColor" />
    </Prohibited>
  );
}
