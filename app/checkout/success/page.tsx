import Container from '@/app/components/Container';

export const metadata = {
  title: 'Payment Confirmed | Residential Rights Legal Counsel',
  description: 'Your payment was successful.',
};

export default function CheckoutSuccessPage() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 md:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Payment confirmed ✅
          </h1>
          <p className="text-neutral-700 text-lg mb-6">
            Thanks — your payment was successful. You should receive an email confirmation shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="text-center bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
            >
              Send details / documents
            </a>
            <a
              href="/services"
              className="text-center bg-neutral-100 text-neutral-900 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition"
            >
              Back to services
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
