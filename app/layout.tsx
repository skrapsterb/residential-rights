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
    'Residential Rights Legal Counsel provides fixed-fee legal services for Texas tenants and homeowners — lease reviews, security deposit recovery, repair demands, HOA disputes, and emergency lockout protection.',
  keywords: [
    'Texas attorney',
    'residential rights',
    'tenant lawyer',
    'HOA disputes',
    'lease review',
    'security deposit',
    'repair demand',
    'lease exit',
    'move out rights',
    'emergency lockout',
    'utility shutoff',
    'CC&R review',
    'Bret Sparks',
    'fixed fee attorney',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Residential Rights Legal Counsel',
    title: 'Residential Rights Legal Counsel',
    description:
      'Fixed-fee legal services for Texas tenants and homeowners — lease reviews, deposit recovery, repair demands, HOA disputes, and more.',
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
        {/* Legal disclaimer */}
        <section className="bg-neutral-100 border-t border-neutral-300 text-xs text-neutral-700">
          <div className="max-w-5xl mx-auto px-4 py-6 space-y-3 leading-relaxed">
            <p>
              <strong>No Attorney–Client Relationship.</strong> 
              Visiting this website, submitting information, or purchasing a fixed-fee service 
              does not create an attorney–client relationship. An attorney–client relationship 
              is formed only upon written confirmation following a conflict check.
            </p>

            <p>
              <strong>Limited-Scope Services.</strong> 
              Services offered through this website are limited-scope, fixed-fee legal services 
              focused on document review, strategy, and written guidance. 
              No court appearances, negotiations, or ongoing representation are provided.
            </p>

            <p>
              <strong>Use of Technology & AI.</strong> 
              Certain services may incorporate technology-assisted review tools, including AI-assisted 
              research and drafting, under attorney supervision. All final work product is reviewed 
              by a licensed attorney.
            </p>

            <p>
              <strong>Jurisdiction.</strong> 
              Services are provided by a Texas-licensed attorney and are limited to matters governed 
              by Texas law unless otherwise stated.
            </p>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
