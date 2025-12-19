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
          <h1 className="text-3xl font-bold mb-4">Payment Received</h1>
            <p className="text-neutral-700 mb-6">
              Thank you for your purchase. Your payment has been received successfully.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-4 text-sm">
              <h2 className="font-semibold text-neutral-900">
                What happens next
              </h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  You will receive a confirmation email with next steps and any required intake information.
                </li>
                <li>
                  A conflict check will be performed before any legal work begins.
                </li>
                <li>
                  Once confirmed, you will be contacted regarding document submission and timing.
                </li>
                <li>
                  Most services are completed within the timeframe stated on the Services page.
                </li>
              </ul>
              <p className="text-neutral-600">
                If you have questions in the meantime, you may reply to the confirmation email 
                or contact us through the website.
              </p>
            </div>
         </div>
      </Container>
    </section>
  );
}
