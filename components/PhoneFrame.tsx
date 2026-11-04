interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
}

export default function PhoneFrame({ src, alt, width = 270, className = '', priority = false }: PhoneFrameProps) {
  return (
    <div className={`phone ${className}`} style={{ width, maxWidth: '100%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={700}
        height={1517}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
