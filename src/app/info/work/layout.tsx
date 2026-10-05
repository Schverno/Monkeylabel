import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work - Monkey Label',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
