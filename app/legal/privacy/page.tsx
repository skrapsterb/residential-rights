import Container from '../../components/Container';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Residential Rights Legal Counsel describing how inquiry and client information may be collected and used.',
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <section className="bg-neutral-950 text-neutral-50">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-400 mb-3">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-sm prose-neutral">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy describes how Residential Rights Legal Counsel
              (&quot;RRLC,&quot; &quot;we,&quot; or &quot;us&quot;) may collect,
              use, and safeguard information obtained through this website. By
              using this website, you consent to the practices described in this
              Policy.
            </p>

            <h2>2. Information You Provide</h2>
            <p>
              You may choose to provide information to RRLC when you use the
              Contact form or otherwise communicate through this website. This
              may include:
            </p>
            <ul>
              <li>Your name and contact information (such as email address);</li>
              <li>Basic details about your legal issue;</li>
              <li>
                Documents or information you upload or describe in connection
                with a potential representation.
              </li>
            </ul>

            <h2>3. How Information May Be Used</h2>
            <p>
              RRLC may use information you provide for purposes including, but
              not limited to:
            </p>
            <ul>
              <li>Evaluating whether RRLC can assist with your matter;</li>
              <li>Responding to your inquiries and communicating with you;</li>
              <li>
                Providing legal services if an attorney–client relationship is
                formed;
              </li>
              <li>
                Maintaining internal records consistent with legal and ethical
                obligations; and
              </li>
              <li>
                Improving the website and understanding how it is used in a
                general, non-identifiable way.
              </li>
            </ul>

            <h2>4. Attorney–Client Privilege and Confidentiality</h2>
            <p>
              Information provided in the context of seeking legal advice or
              engaging RRLC for representation may be protected by
              attorney–client privilege and related confidentiality rules under
              Texas law. However, simply sending unsolicited information through
              this website does not guarantee that an attorney–client
              relationship has been formed.
            </p>
            <p>
              RRLC endeavors to maintain the confidentiality of information
              consistent with professional responsibility obligations, but
              cannot guarantee the security of information transmitted over the
              internet.
            </p>

            <h2>5. Log Data and Basic Analytics</h2>
            <p>
              Like many websites, basic technical information may be collected
              automatically when you visit this site, such as your IP address,
              browser type, and pages visited. This information is typically
              used in aggregate to understand general usage patterns and improve
              the website. RRLC does not sell this information.
            </p>

            <h2>6. Cookies and Similar Technologies</h2>
            <p>
              This website may use cookies or similar technologies to improve
              functionality and user experience. You can usually modify your
              browser settings to decline cookies; however, doing so may affect
              some aspects of site functionality.
            </p>

            <h2>7. Information Sharing</h2>
            <p>
              RRLC does not sell or rent your personal information. Information
              may be shared:
            </p>
            <ul>
              <li>
                With service providers who assist in operating the website or
                practice (such as secure email, document storage, or payment
                processors), subject to appropriate confidentiality obligations;
              </li>
              <li>As required by law, court order, or applicable rules; or</li>
              <li>
                When necessary to protect the rights, property, or safety of
                RRLC, clients, or others.
              </li>
            </ul>

            <h2>8. Data Retention</h2>
            <p>
              Information may be retained for as long as necessary to evaluate
              potential matters, provide legal services (if engaged), comply
              with legal or ethical obligations, or maintain appropriate
              internal records. Client file retention is generally guided by
              applicable professional responsibility rules and practice
              considerations.
            </p>

            <h2>9. Your Choices</h2>
            <p>
              You may choose not to provide certain information through this
              website. However, that may limit RRLC&apos;s ability to evaluate
              or respond to your inquiry. If you believe information held about
              you is inaccurate or if you wish to request that certain
              information be updated, you may contact RRLC using the Contact
              page.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              This website is not directed to children under the age of 18. RRLC
              does not knowingly collect personal information from children. If
              you believe information has been provided regarding a minor in a
              way that raises privacy concerns, please contact RRLC.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              RRLC may update this Privacy Policy from time to time. The
              &quot;Last updated&quot; date above reflects when the most recent
              changes took effect. Your continued use of the website after any
              changes indicates your acceptance of the updated Policy.
            </p>

            <h2>12. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how your
              information may be handled, you may reach out through the Contact
              page on this website.
            </p>

            <p className="text-[0.7rem] text-neutral-500 mt-6">
              <strong>Note:</strong> This Privacy Policy is a general template
              and may not address every regulatory requirement applicable to
              your practice. You should review and adapt it as needed and seek
              guidance where specific privacy or data protection laws may apply.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
