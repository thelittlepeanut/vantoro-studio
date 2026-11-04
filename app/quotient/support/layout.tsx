import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotient Support',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
