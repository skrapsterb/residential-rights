'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    plausible?: (...args: any[]) => void;
  }
}

export function ServicePageViewTracker() {
  useEffect(() => {
    window.plausible?.('Service Page View');
  }, []);
  return null;
}

export function StripeCheckoutLink({
  href,
  className,
  serviceType,
  children,
}: {
  href: string;
  className: string;
  serviceType: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.plausible?.('Stripe Checkout Initiated', {
          props: { service: serviceType },
        });
      }}
    >
      {children}
    </a>
  );
}

export function BlogServicesLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.plausible?.('Blog to Services Click');
      }}
    >
      {children}
    </a>
  );
}
