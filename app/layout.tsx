import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Residential Rights Legal Counsel',
    template: '%s | Residential Rights Legal Counsel',
  },
  description:
    'Residential Rights Legal Counsel provides modern, fixed-fee legal services for Texas tenants and homeowners, including lease reviews, security deposit disputes, and HOA issues.',
  keywords: [
    'Texas attorney',
    'residential rights',
    'tenant lawyer',
    'HOA disputes',
    'lease review',
    'security deposit',
    'Bret Sparks',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Residential Rights Legal Counsel',
    title: 'Residential Rights Legal Counsel',
    description:
      'Modern, fixed-fee legal services for Texas tenants and homeowners.',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
