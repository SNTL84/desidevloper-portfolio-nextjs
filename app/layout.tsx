import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SNTL84 | AI Workflow Pro & Full-Stack Builder 🇮🇳',
  description:
    'desidevloper.com — AI Systems, Full-Stack Web Dev, Supply Chain BI & Digital Marketing. Built for founders who move fast, automate smart, and waste nothing.',
  keywords: [
    'SNTL84',
    'desidevloper',
    'AI Workflow',
    'Full Stack Developer',
    'Surat India',
    'Automation',
    'Next.js',
    'n8n',
  ],
  authors: [{ name: 'SNTL84', url: 'https://desidevloper.com' }],
  openGraph: {
    title: 'SNTL84 | desidevloper.com',
    description: 'AI Workflow Pro & Full-Stack Builder 🇮🇳 | Surat, India',
    url: 'https://desidevloper.com',
    siteName: 'desidevloper.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
