'use client';

import { FormEvent, useState } from 'react';
import Container from '../components/Container';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', serviceType: '', message: '' });
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-neutral-700">
              Have a question or want to request a fixed-fee service? Send a message and you should receive a reply within one to two business days.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Message received</h2>
                <p className="text-neutral-700 mb-6">
                  Thanks — your message has been sent. You should receive a reply within one to two business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary-700 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-neutral-900 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-neutral-900 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="serviceType" className="block text-neutral-900 font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="lease-review">Residential Lease Review</option>
                    <option value="deposit-letter">Residential Response/Demand Letter</option>
                    <option value="exit-consult">Lease Exit/Move-Out Strategy Consult</option>
                    <option value="hoa-review">HOA Violation Letter Review</option>
                    <option value="hoa-letter">HOA Response/Demand Letter</option>
                    <option value="hoa-consult">HOA Dispute Consult</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-900 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell me what’s going on, what you’re trying to accomplish, and any deadlines…"
                  />
                </div>

                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
