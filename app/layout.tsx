import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { portfolio } from '@/data/portfolio';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['500','600','700'], variable: '--font-barlow', display: 'swap' });

export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  metadataBase: new URL(portfolio.seo.url),
  openGraph: { title: portfolio.seo.title, description: portfolio.seo.description, type: 'website', locale: 'es_PY', url: '/' },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" className={`${inter.variable} ${barlow.variable}`}><body className="font-sans antialiased">{children}</body></html>;
}
