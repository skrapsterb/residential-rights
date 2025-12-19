import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Residential Rights Legal Counsel',
  description:
    'Contact Bret Sparks, Attorney at Law (Texas), to ask a question or inquire about fixed-fee services for residential and HOA matters.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
