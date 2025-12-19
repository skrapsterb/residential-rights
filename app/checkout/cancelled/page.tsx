import Container from '@/app/components/Container';
import Link from 'next/link';

export default function CheckoutCancelledPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Checkout cancelled
            </h1>
            <p className="text-xl text-neutral-700">
              No problem — you weren’t charged.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-2xl p-8">
            <p className="text-neutral-700 mb-6">
              If you ran into an issue, you can try again or send a message and we’ll help.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Try checkout again
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-neutral-100 text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors font-semibold"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
