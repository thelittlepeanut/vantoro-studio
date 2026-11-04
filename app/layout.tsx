import type { Metadata } from 'next';
import { Pacifico } from 'next/font/google';
import { LangProvider } from '@/components/LangContext';
import './globals.css';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'], variable: '--font-pacifico' });

export const metadata: Metadata = {
  title: 'Vantoro Studio',
  description: 'Indie apps, thoughtfully made.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pacifico.variable}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
