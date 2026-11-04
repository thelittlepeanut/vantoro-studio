import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { LangProvider } from '@/components/LangContext';
import './globals.css';

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Vantoro Studio',
    template: '%s | Vantoro Studio',
  },
  description: 'Independent iOS apps, made in France. Home of FlickFlush, the swipe-to-sort photo cleaner.',
};

export const viewport: Viewport = {
  themeColor: '#101010',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
