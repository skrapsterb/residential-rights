import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-2">
              Residential Rights Legal Counsel
            </h3>
            <p className="text-sm text-neutral-400 mb-3">
              Modern, fixed-fee legal services for Texas tenants and homeowners.
            </p>
            <p className="text-xs text-neutral-500">
              Practicing law in Texas.{' '}
              <span className="text-neutral-300">
                Bret Sparks, Attorney at Law.
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-3">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-primary-300">
                Home
              </Link>
              <Link href="/services" className="hover:text-primary-300">
                Services
              </Link>
              <Link href="/about" className="hover:text-primary-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-3">
              Legal
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/legal/terms" className="hover:text-primary-300">
                Terms of Service
              </Link>
              <Link href="/legal/privacy" className="hover:text-primary-300">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 mt-4">
          <p className="text-xs text-neutral-500 text-center">
            © {currentYear} Residential Rights Legal Counsel. All rights
            reserved. This website provides general information and is not legal
            advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
