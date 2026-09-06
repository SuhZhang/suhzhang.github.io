import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Shihua Zhang | National University of Singapore',
  description: 'Shihua Zhang is a Ph.D. student at the National University of Singapore, working on vision-language models, video generation, and world models.',
  authors: [{ name: 'Shihua Zhang' }],
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
