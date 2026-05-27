import type { Metadata } from 'next';
import { LangProvider } from '@/components/LangContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vantoro Studio',
  description: 'Indie apps, thoughtfully made.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
