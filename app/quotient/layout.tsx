import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotient',
  description: 'Your screen time as a percentage of a daily limit, in the app and in widgets.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
