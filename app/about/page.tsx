import Container from '../components/Container';

export const metadata = {
  title: 'About',
  description:
    'Learn about Residential Rights Legal Counsel and Bret Sparks, Attorney at Law – a Texas practice offering 8 fixed-fee services for tenants and homeowners.',
};

export default function AboutPage() {
  return (
    <>
      {/* Top banner */}
      <section className="bg-neutral-950 text-neutral-50">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-400 mb-3">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Residential rights as the center of the practice, not an
              afterthought.
            </h1>
            <p className="text-sm md:text-base text-neutral-300">
              Residential Rights Legal Counsel exists for everyday housing
              issues that have a very real impact: leases, deposits, repairs,
              HOA disputes, and emergencies. The work is intentionally narrow
              so it can be genuinely useful.
            </p>
          </div>
        </Container>
      </section>

      {/* Bio + philosophy */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] items-start">
            {/* Visual / placeholder for future headshot */}
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
                <img
                  src="/headshot.jpg"
                  alt="Bret Sparks, Attorney at Law"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                About Bret Sparks, Attorney At Law 
              </h2>
              <p className="text-sm md:text-base text-neutral-700">
                I’m a Texas attorney whose practice is built around a simple
                idea: residential issues deserve the same level of thought as
                high-dollar commercial disputes. A lease clause, a deposit
                deduction, or a terse HOA letter can change someone’s financial
                and mental bandwidth far more than a technical contract tweak in
                a boardroom.
              </p>
              <p className="text-sm md:text-base text-neutral-700">
                My background includes years of work in complex regulatory and
                legal environments before focusing on housing-related issues.
                That experience shapes how I approach residential matters:
                careful with the details, calm in the face of conflict, and
                always oriented around what practically moves a situation
                forward.
              </p>
              <p className="text-sm md:text-base text-neutral-700">
                Residential Rights Legal Counsel exists so tenants and
                homeowners in Texas have access to structured, reasoned legal
                work without having to guess at the final bill or feel pushed
                toward escalation they don’t actually want.
              </p>

              <div className="grid gap-4 md:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                    Narrow, on purpose.
                  </h3>
                  <p className="text-xs text-neutral-600">
                    8 fixed-fee services covering leases, security deposits,
                    repairs, move-out rights, HOA disputes, and emergency
                    situations. That focus keeps the work practical and fast,
                    instead of scattered across dozens of areas.
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                    Grounded in real-life impact.
                  </h3>
                  <p className="text-xs text-neutral-600">
                    The goal isn’t to win abstract arguments. It’s to protect
                    your home, your money, and your margin for everything else
                    you have to carry.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 mt-4">
                <p className="text-xs text-neutral-500">
                  Licensed to practice law in Texas. This website provides
                  general information and is not a substitute for individualized
                  legal advice about your specific situation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
              How the work is approached.
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              Three principles shape every engagement, no matter how small the
              document or brief the dispute.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-2">
                01
              </p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Clarity first.
              </h3>
              <p className="text-xs text-neutral-600">
                You should always understand what a document does, what a
                letter is trying to accomplish, and what your realistic options
                look like.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-2">
                02
              </p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Proportional strategy.
              </h3>
              <p className="text-xs text-neutral-600">
                Not every issue should become a war. The recommended path is
                proportionate to the stakes, your goals, and your bandwidth.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-2">
                03
              </p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Respect for your context.
              </h3>
              <p className="text-xs text-neutral-600">
                Legal advice doesn&apos;t exist in a vacuum. Family, finances,
                work, and mental load matter in deciding what “the right move”
                actually is for you.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
