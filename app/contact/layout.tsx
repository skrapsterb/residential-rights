import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Residential Rights Legal Counsel for fixed-fee legal help with leases, security deposits, repairs, or HOA disputes in Texas. Email contact@residentialrights.com or call 646-951-0711.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
