import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bigroos Tech Australia | Professional Websites for Trade Businesses',
  description:
    'We build modern, fast, and professional websites for trade and service businesses in Australia. Plumbers, electricians, painters, builders and more.',
  keywords:
    'website design Australia, trade business website, plumber website, electrician website, builder website',
  openGraph: {
    title: 'Bigroos Tech Australia',
    description: 'Professional websites for trade & service businesses.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
