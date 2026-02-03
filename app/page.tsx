import Link from 'next/link';
import Container from './components/Container';

export const metadata = {
  title: 'Home',
  description:
    'Residential Rights Legal Counsel provides fixed-fee legal services for Texas tenants and homeowners — lease reviews, security deposit recovery, repair demands, HOA disputes, and emergency lockout protection.',
};

export default function Home() {
  const featuredServices = [
    {
      title: 'Lease Review',
      price: '$299',
      description:
        'A clear, plain-English review of your residential lease before you sign or renew — with specific risks, unfair terms, and negotiation points flagged.',
      bullets: [
        'Line-by-line review with risk flags',
        'Plain-English summary of key obligations',
        'Identification of one-sided clauses',
        'Actionable negotiation points',
      ],
    },
    {
      title: 'Security Deposit Recovery',
      price: '$249',
      description:
        'A professional demand letter when your landlord withholds or improperly deducts from your security deposit, grounded in Texas statutory deadlines.',
      bullets: [
        'Review of lease and deduction statement',
        'Custom demand letter citing Texas law',
        'Statutory penalty calculations',
        'Clear next steps if landlord doesn\'t respond',
      ],
    },
    {
      title: 'Lease Exit Strategy',
      price: '$349',
      description:
        'A strategic analysis of your options when you need to leave your lease early — covering penalties, protections, and the most cost-effective path out.',
      bullets: [
        'Full review of termination provisions',
        'Early termination penalty analysis',
        'Applicable statutory protections',
        'Cost-benefit comparison of exit paths',
      ],
    },
    {
      title: 'Emergency Lockout / Utility Shutoff',
      price: '$349',
      description:
        'Urgent demand letter when your landlord has locked you out or shut off utilities — citing Texas statutory penalties and demanding immediate restoration.',
      bullets: [
        'Rapid review of facts and documentation',
        'Emergency demand citing Prop. Code penalties',
        'Demand for immediate restoration',
        '24-hour turnaround — always expedited',
      ],
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Choose Your Service',
      description:
        'Browse 8 fixed-fee services for lease issues, deposit disputes, HOA conflicts, and emergency situations. Each one is clearly scoped with transparent pricing.',
    },
    {
      step: '02',
      title: 'Share Your Documents',
      description:
        'Securely upload your lease, letters, emails, notices, or photos. You\'ll answer a focused intake questionnaire — no endless forms.',
    },
    {
      step: '03',
      title: 'Receive Structured Legal Work',
      description:
        'Within the stated timeframe, you receive clear written analysis, a plan of action, and (where applicable) drafts you can send.',
    },
    {
      step: '04',
      title: 'Move Forward With Clarity',
      description:
        'You stay in control. Use the work product to negotiate, respond, or decide on next steps without guessing in the dark.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-primary-900 text-white">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
            {/* Left: message */}
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary-300 mb-4">
                Texas · Residential · Focused
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Clear, fixed-fee legal counsel for
                <span className="block text-primary-200">
                  leases, deposits, and HOAs.
                </span>
              </h1>
              <p className="text-base md:text-lg text-neutral-200 mb-8 max-w-xl">
                From lease reviews to emergency lockout demands — structured legal
                work with clear pricing. 8 fixed-fee services for Texas tenants and
                homeowners, each with a defined scope and written deliverable.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-primary-500 hover:bg-primary-400 text-neutral-950 shadow-sm transition-colors"
                >
                  View Services & Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-neutral-600 text-neutral-50 hover:border-neutral-300 hover:text-white transition-colors"
                >
                  Ask a Question First
                </Link>
              </div>

              <p className="mt-4 text-xs text-neutral-400">
                Serving clients across Texas. This website provides general
                information and does not create an attorney-client relationship
                until you engage a service and receive confirmation.
              </p>
            </div>

            {/* Right: compact info card */}
            <div className="bg-neutral-900/60 border border-neutral-700/70 rounded-2xl p-6 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.5)] backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-3">
                Bret Sparks, Attorney at Law
              </p>
              <p className="text-sm text-neutral-200 mb-4">
                Texas attorney focused on residential issues — leases, deposits,
                repairs, HOA disputes, and emergency situations. The goal:
                practical, grounded legal work you can actually use.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-200 mb-5">
                <div className="rounded-xl border border-neutral-700/80 px-3 py-2">
                  <p className="text-neutral-400">Designed For</p>
                  <p className="font-medium mt-1">
                    Tenants & homeowners,
                    <br />
                    not corporations.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-700/80 px-3 py-2">
                  <p className="text-neutral-400">Fee Structure</p>
                  <p className="font-medium mt-1">
                    Clear, fixed fees for
                    <br />
                    defined work product.
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-400">
                No surprise hourly bills. No pressure to &quot;escalate&quot; if you don&apos;t
                want to. Just clear options, risks, and next steps.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-3">
                Fixed-fee legal services for Texas tenants and homeowners.
              </h2>
              <p className="text-sm md:text-base text-neutral-600 max-w-xl">
                8 services covering the situations that most often derail
                people&apos;s housing stability and peace of mind — from lease
                reviews to emergency lockout demands.
              </p>
            </div>
            <p className="text-xs text-neutral-500 max-w-xs">
              All services are scoped in writing before payment. If what you
              need is outside the packaged services, you&apos;ll know that before you
              commit.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <span className="text-lg font-bold text-primary-600 flex-shrink-0 ml-4">
                    {service.price}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 mb-5">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Link
                    href="/services"
                    className="inline-flex text-sm font-semibold text-primary-700 hover:text-primary-600"
                  >
                    View details & pricing →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-primary-600 text-white hover:bg-primary-700 shadow-sm transition-colors"
            >
              View all 8 services →
            </Link>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-3">
              A calm, structured process.
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              The goal is to remove guesswork, not to turn your housing issue
              into a years-long war. You get clarity, options, and work product
              tailored to what you actually want to do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-neutral-200 bg-neutral-50/60 px-4 py-5 flex flex-col"
              >
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-3">
                  {item.step}
                </span>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why This Practice */}
      <section className="py-16 md:py-20 bg-neutral-950 text-neutral-50">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Residential work is the whole focus.
              </h2>
              <p className="text-sm md:text-base text-neutral-300 mb-4 max-w-xl">
                Residential Rights Legal Counsel is intentionally narrow:
                housing, not everything under the sun. That focus keeps the work
                practical, fast, and aligned with what actually matters to you
                day-to-day.
              </p>
              <p className="text-sm md:text-base text-neutral-300 max-w-xl">
                You&apos;re not a case file on a stack. You&apos;re someone whose home,
                credit, and mental bandwidth are impacted by a single document
                or email you aren&apos;t sure how to handle. The work is built around
                that reality.
              </p>
            </div>

            <div className="grid gap-4 text-sm">
              <div className="rounded-2xl border border-neutral-700/70 bg-neutral-900/60 px-4 py-4">
                <h3 className="text-sm font-semibold mb-1">
                  Fixed-fee, scoped work.
                </h3>
                <p className="text-xs text-neutral-300">
                  You know the fee and the deliverables before you pay. No
                  &quot;meter is running&quot; anxiety, no surprise invoices.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-700/70 bg-neutral-900/60 px-4 py-4">
                <h3 className="text-sm font-semibold mb-1">
                  Plain-language explanations.
                </h3>
                <p className="text-xs text-neutral-300">
                  Legal nuance where it matters, plain English everywhere else.
                  You should be able to explain your options to a friend.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-700/70 bg-neutral-900/60 px-4 py-4">
                <h3 className="text-sm font-semibold mb-1">
                  Strategy, not just paperwork.
                </h3>
                <p className="text-xs text-neutral-300">
                  Drafts and letters are paired with a strategy memo: why this
                  approach, what to expect, and when to consider the next level.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
