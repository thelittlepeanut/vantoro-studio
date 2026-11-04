import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotient Terms of Use',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
