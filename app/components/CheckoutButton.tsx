'use client';

import { useState } from 'react';

type Props = {
  serviceId: string;
  label: string;
  className?: string;
};

export default function CheckoutButton({ serviceId, label, className = '' }: Props) {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serviceId }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Checkout API error:', data);
        alert(data?.error || 'Checkout failed. Please try again.');
        return;
      }

      if (!data?.url) {
        alert('Checkout failed: missing redirect URL.');
        return;
      }

      window.location.assign(data.url);
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={startCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? 'Redirecting…' : label}
    </button>
  );
}
