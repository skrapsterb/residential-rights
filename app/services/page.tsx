import Link from 'next/link';
import Container from '../components/Container';

export const metadata = {
  title: 'Services & Pricing | Residential Rights Legal Counsel',
  description:
    '8 fixed-fee legal services for Texas tenants and homeowners. Lease reviews from $299, security deposit recovery from $249, emergency lockout demands, HOA dispute responses, and more.',
};

type Service = {
  title: string;
  serviceType: string;
  price: string;
  expeditedPrice: string | null;
  turnaround: string;
  deliverable: string;
  description: string;
  included: string[];
  bestFor: string;
  category: 'Tenant' | 'HOA' | 'Emergency';
};

const tenantServices: Service[] = [
  {
    title: 'Lease Review',
    serviceType: 'LEASE_REVIEW',
    price: '$299',
    expeditedPrice: '$399',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Analysis Memo',
    description:
      'A clear, plain-English review of your residential lease before you sign or renew — with specific risks, unfair terms, and negotiation points flagged.',
    included: [
      'Line-by-line review with risk flags',
      'Plain-English summary of key obligations',
      'Identification of one-sided or unenforceable clauses',
      'Actionable negotiation points',
    ],
    bestFor: 'Tenants signing a new lease or renewing an existing one.',
    category: 'Tenant',
  },
  {
    title: 'Security Deposit Recovery',
    serviceType: 'SECURITY_DEPOSIT',
    price: '$249',
    expeditedPrice: '$349',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Demand Letter',
    description:
      'A professional demand letter when your landlord withholds or improperly deducts from your security deposit, grounded in Texas statutory deadlines and penalties.',
    included: [
      'Review of lease, correspondence, and deduction statement',
      'Custom demand letter citing Texas Property Code deadlines',
      'Statutory penalty calculations',
      'Clear next steps if landlord doesn\'t respond',
    ],
    bestFor: 'Tenants whose deposit was withheld or improperly deducted.',
    category: 'Tenant',
  },
  {
    title: 'Repair & Habitability Demand',
    serviceType: 'REPAIR_DEMAND',
    price: '$249',
    expeditedPrice: '$349',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Statutory Demand Letter',
    description:
      'A statutory demand letter when your landlord fails to make repairs affecting your health, safety, or habitability — with clear legal deadlines and consequences.',
    included: [
      'Review of repair requests, photos, and correspondence',
      'Statutory demand letter citing Texas Property Code requirements',
      'Documentation of habitability issues and timeline',
      'Clear deadlines and consequences for non-compliance',
    ],
    bestFor: 'Tenants dealing with unresolved repair or habitability issues.',
    category: 'Tenant',
  },
  {
    title: 'Lease Exit Strategy',
    serviceType: 'LEASE_EXIT',
    price: '$349',
    expeditedPrice: '$449',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Options Memo',
    description:
      'A strategic analysis of your options when you need to leave your lease early — covering penalties, mitigation, military/DV protections, and the most cost-effective path out.',
    included: [
      'Full review of lease termination provisions',
      'Analysis of early termination penalties and mitigation options',
      'Identification of applicable statutory protections',
      'Cost-benefit comparison of available exit paths',
    ],
    bestFor: 'Tenants who need to leave a lease early and want the best path out.',
    category: 'Tenant',
  },
  {
    title: 'Move-Out Rights Review',
    serviceType: 'MOVE_OUT_RIGHTS',
    price: '$199',
    expeditedPrice: '$299',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Checklist Memo',
    description:
      'A concise guide to your rights and obligations during the move-out process — notice requirements, deposit protections, inspection procedures, and documentation checklists.',
    included: [
      'Review of lease move-out provisions and notice requirements',
      'Security deposit protection checklist',
      'Inspection and documentation procedures',
      'Timeline of key deadlines and obligations',
    ],
    bestFor: 'Tenants preparing to move out who want to protect their deposit and rights.',
    category: 'Tenant',
  },
];

const hoaServices: Service[] = [
  {
    title: 'HOA Fine Dispute',
    serviceType: 'HOA_FINE_DISPUTE',
    price: '$299',
    expeditedPrice: '$399',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Dispute Response Letter',
    description:
      'A structured dispute response when your HOA issues a fine or violation notice that seems wrong, inconsistent, or procedurally flawed.',
    included: [
      'Review of violation notice, governing documents, and correspondence',
      'Analysis of procedural and substantive defenses',
      'Custom dispute response letter with supporting arguments',
      'Guidance on hearing preparation if applicable',
    ],
    bestFor: 'Homeowners facing HOA fines or violation notices they want to challenge.',
    category: 'HOA',
  },
  {
    title: 'CC&R Review',
    serviceType: 'CCR_REVIEW',
    price: '$299',
    expeditedPrice: '$399',
    turnaround: '72 hours standard · 24 hours expedited',
    deliverable: 'Analysis Memo',
    description:
      'An analysis of your HOA\'s governing documents focused on the restrictions, assessment authority, and enforcement provisions that affect your specific situation.',
    included: [
      'Targeted review of CC&Rs, bylaws, and rules',
      'Plain-English summary of restrictions affecting your situation',
      'Assessment authority and fee structure analysis',
      'Enforcement provisions and procedural requirements',
    ],
    bestFor: 'Homeowners who need clarity on what their HOA can and can\'t do.',
    category: 'HOA',
  },
];

const emergencyService: Service = {
  title: 'Emergency Lockout / Utility Shutoff',
  serviceType: 'EMERGENCY_LOCKOUT',
  price: '$349',
  expeditedPrice: null,
  turnaround: '24 hours — always expedited',
  deliverable: 'Emergency Demand Letter',
  description:
    'Urgent demand letter when your landlord has locked you out or shut off utilities — citing Texas statutory penalties and demanding immediate restoration of access.',
  included: [
    'Rapid review of facts and supporting documentation',
    'Emergency demand letter citing Texas Prop. Code penalties',
    'Clear demand for immediate restoration of access or utilities',
    'Statutory penalty calculations and next-step options',
  ],
  bestFor: 'Tenants locked out or with utilities shut off who need immediate legal action.',
  category: 'Emergency',
};

const platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL || 'https://portal.residentialrights.com';

function getBadgeStyles(category: Service['category']) {
  switch (category) {
    case 'Tenant':
      return 'bg-primary-50 text-primary-700 border-primary-100';
    case 'HOA':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'Emergency':
      return 'bg-amber-50 text-amber-700 border-amber-200';
  }
}

function ServiceCard({ service }: { service: Service }) {
  const isEmergency = service.category === 'Emergency';

  return (
    <article
      className={`bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${
        isEmergency ? 'border-amber-300 ring-1 ring-amber-200' : 'border-neutral-200'
      }`}
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-neutral-900">{service.title}</h2>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getBadgeStyles(service.category)}`}
              >
                {service.category}
              </span>
            </div>
            <p className="text-neutral-600">{service.bestFor}</p>
          </div>

          <div className="md:text-right flex-shrink-0">
            <div className="text-3xl font-bold text-primary-600">{service.price}</div>
            {service.expeditedPrice ? (
              <div className="text-sm text-neutral-500">expedited: {service.expeditedPrice}</div>
            ) : null}
            <div className="text-sm text-neutral-600 mt-1">{service.turnaround}</div>
          </div>
        </div>

        <p className="text-lg text-neutral-700 mb-6">{service.description}</p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-3">What&apos;s included</h3>
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
          <a
            href={`${platformUrl}/public/intake?service=${service.serviceType}`}
            className={`sm:flex-1 inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm md:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isEmergency
                ? 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500'
                : 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500'
            }`}
          >
            Get Started →
          </a>
          <Link
            href="/contact"
            className="sm:flex-1 inline-flex items-center justify-center px-8 py-3 rounded-xl bg-neutral-100 text-neutral-900 font-semibold text-sm md:text-base hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 transition-colors"
          >
            Ask a Question First
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Services & Pricing</h1>
            <p className="text-xl text-neutral-700">
              8 fixed-fee legal services for Texas tenants and homeowners — clear scope, transparent pricing, fast turnaround.
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              All services include a written deliverable in Word and PDF. Expedited turnaround available on every service.
            </p>
          </div>
        </Container>
      </section>

      {/* Tenant Services */}
      <section className="py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Tenant Services</h2>
            <p className="text-neutral-600">Legal services for Texas residential tenants — leases, deposits, repairs, and move-out rights.</p>
          </div>
          <div className="space-y-10">
            {tenantServices.map((service) => (
              <ServiceCard key={service.serviceType} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* HOA Services */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">HOA Services</h2>
            <p className="text-neutral-600">Legal services for Texas homeowners dealing with HOA fines, disputes, and governing documents.</p>
          </div>
          <div className="space-y-10">
            {hoaServices.map((service) => (
              <ServiceCard key={service.serviceType} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Emergency Service */}
      <section className="py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Emergency Service</h2>
            <p className="text-neutral-600">Urgent legal action when you need it most — always expedited, 24-hour turnaround.</p>
          </div>
          <ServiceCard service={emergencyService} />
        </Container>
      </section>

      {/* Add-On: Strategy Call */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold text-neutral-900">
                  Add a 30-Minute Strategy Call to any service
                </h2>
                <div className="text-2xl font-bold text-primary-600 flex-shrink-0">$199</div>
              </div>
              <p className="text-neutral-700 mb-4">
                A focused conversation with your attorney after document review to discuss strategy, answer questions, and plan next steps.
              </p>
              <p className="text-sm text-neutral-500">
                You can add this during the intake process. The call is scheduled after your attorney completes the initial document review.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
