import Link from 'next/link';
import Container from '../components/Container';

export const metadata = {
  title: 'Services | Residential Rights Legal Counsel',
  description:
    'Fixed-fee legal services for Texas residential tenant and HOA matters. Clear scope, transparent pricing, fast turnaround.',
};

type Service = {
  id: string;
  title: string;
  price: string;
  turnaround: string;
  description: string;
  included: string[];
  ideal: string;
  badge?: string;
};

export default function ServicesPage() {
  const services: Service[] = [
    // Residential / Tenant
    {
      id: 'lease-review',
      title: 'Residential Lease Review',
      price: '$299',
      turnaround: '1–2 business days',
      description:
        'A practical, plain-English review of your residential lease before you sign or renew, focused on risk, leverage, and clarity.',
      included: [
        'Line-by-line review with red flags',
        'Summary of key obligations and risks',
        'Plain-English explanations of confusing terms',
        'Actionable recommendations and negotiation points',
        'One round of follow-up questions by email',
      ],
      ideal: 'Best for tenants signing a new lease or renewing an existing lease.',
    },
    {
      id: 'residential-response-letter',
      title: 'Residential Lease Response/Demand Letter',
      price: '$249',
      turnaround: '2–3 business days',
      description:
        'A professional demand letter to pursue return of your security deposit, with clear documentation and a firm, credible tone.',
      included: [
        'Custom drafted demand letter',
        'Fact framing + supporting structure',
        'Clear deadline and response path',
        'Guidance on next steps if ignored',
        'Deliverable in editable format',
      ],
      ideal: 'Best when a deposit is withheld or deductions appear improper.',
    },
    {
      id: 'lease-exit-consult',
      title: 'Lease Exit/Move-Out Strategy Consult',
      price: '$199',
      turnaround: 'Scheduled within 48 hours',
      description:
        'A focused strategy session to minimize liability and reduce chaos when you need to exit, transfer, or navigate a move-out dispute.',
      included: [
        '30-minute consult (phone/video)',
        'Review of exit options under your lease',
        'Strategy to reduce fees/penalties',
        'Suggested communication plan',
        'Written recap with next steps',
      ],
      ideal: 'Best when you need a plan fast and want to avoid expensive mistakes.',
    },

    // HOA
    {
      id: 'hoa-bylaws-covenant-violation-letter-review',
      title: 'HOA Violation Letter Review',
      price: '$299',
      turnaround: '1–2 business days',
      description:
        'A targeted review of HOA governing documents to spot the rules that matter for your situation and clarify practical options.',
      included: [
        'Issue-spotting review of relevant provisions',
        'Plain-English summary of key sections',
        'Risk notes and practical guidance',
        'Questions to ask your HOA / management',
        'Written deliverable you can use immediately',
      ],
      ideal: 'Best when you need clarity before you respond, build, modify, rent, or dispute.',
      badge: 'HOA',
    },
    {
      id: 'hoa-response-demand-letter',
      title: 'HOA Response/Demand Letter',
      price: '$249',
      turnaround: '2–3 business days',
      description:
        'A professionally drafted HOA letter—demanding action or responding to a violation, fine, or enforcement issue.',
      included: [
        'Clear fact narrative and position',
        'Professional tone calibrated for results',
        'Structured asks / relief requested',
        'Next-step options if HOA escalates',
        'Deliverable in editable format',
      ],
      ideal: 'Best for violations, enforcement threats, and HOA communication that needs teeth.',
      badge: 'HOA',
    },
    {
      id: 'hoa-dispute-consult',
      title: 'HOA Dispute Consult',
      price: '$199',
      turnaround: 'Scheduled within 48 hours',
      description:
        'A concise appeal package to challenge a fine or violation, including the core letter and supporting structure.',
      included: [
        'Appeal letter draft (or hearing submission)',
        'Evidence checklist (what to gather)',
        'Argument structure and framing',
        'Optional one-round revisions',
        'Editable final package',
      ],
      ideal: 'Best when a fine/violation feels wrong, inconsistent, or procedurally flawed.',
      badge: 'HOA',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Services</h1>
            <p className="text-xl text-neutral-700">
              Fixed-fee services for Texas residential tenant and HOA matters—clear scope, transparent pricing, fast turnaround.
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              Texas jurisdiction for now. Expansion can come later.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="space-y-10">
            {services.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-bold text-neutral-900">{service.title}</h2>
                        {service.badge ? (
                          <span className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 border border-primary-100 px-3 py-1 text-xs font-semibold">
                            {service.badge}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-neutral-600">{service.ideal}</p>
                    </div>

                    <div className="md:text-right">
                      <div className="text-3xl font-bold text-primary-600">{service.price}</div>
                      <div className="text-sm text-neutral-600">{service.turnaround}</div>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-700 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">What’s included</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Checkout form – posts directly to /api/checkout */}
                    <form action="/api/checkout" method="POST" className="sm:flex-1">
                      <input type="hidden" name="serviceId" value={service.id} />
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm md:text-base hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                      >
                        Get Started
                      </button>
                    </form>

                    <Link
                      href="/contact"
                      className="sm:flex-1 inline-flex items-center justify-center px-8 py-3 rounded-xl bg-neutral-100 text-neutral-900 font-semibold text-sm md:text-base hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 transition-colors"
                    >
                      Ask a Question First
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
