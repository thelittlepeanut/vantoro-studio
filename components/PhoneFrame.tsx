interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

export default function PhoneFrame({ src, alt, width = 270, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width }}
    >
      {/* Side buttons */}
      <div
        className="absolute rounded-sm"
        style={{
          right: -3,
          top: 110,
          width: 3,
          height: 56,
          background: 'rgba(255,255,255,.1)',
        }}
      />
      <div
        className="absolute rounded-sm"
        style={{
          left: -3,
          top: 90,
          width: 3,
          height: 34,
          background: 'rgba(255,255,255,.1)',
        }}
      />
      <div
        className="absolute rounded-sm"
        style={{
          left: -3,
          top: 138,
          width: 3,
          height: 60,
          background: 'rgba(255,255,255,.1)',
        }}
      />

      {/* Phone bezel */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 42,
          border: '2px solid rgba(255,255,255,.14)',
          background: '#0a0a0e',
          boxShadow:
            '0 0 0 1px rgba(0,0,0,.7), 0 40px 100px rgba(0,0,0,.8), inset 0 0 0 1px rgba(255,255,255,.04)',
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute z-[5] pointer-events-none"
          style={{
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 95,
            height: 28,
            background: '#000',
            borderRadius: 18,
          }}
        />

        {/* Screenshot */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            borderRadius: 40,
          }}
        />
      </div>
    </div>
  );
}
