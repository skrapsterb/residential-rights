import Container from '../../components/Container';

export const metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Residential Rights Legal Counsel, a Texas law practice focused on residential and HOA matters.',
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-xs text-neutral-400">Last updated: {lastUpdated}</p>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-sm prose-neutral">
            <h2>1. Overview</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the
              website operated by Residential Rights Legal Counsel
              (&quot;RRLC,&quot; &quot;we,&quot; or &quot;us&quot;). By
              accessing or using this website, you agree to be bound by these
              Terms. If you do not agree to these Terms, you should not use this
              website.
            </p>

            <h2>2. No Legal Advice From Website Content</h2>
            <p>
              The information provided on this website is for general
              informational purposes only and does not constitute legal advice.
              Website content may not reflect the most current legal
              developments. You should not act or refrain from acting based on
              information on this website without seeking advice from a licensed
              attorney about your specific situation.
            </p>

            <h2>3. Attorney–Client Relationship</h2>
            <p>
              Viewing this website, contacting RRLC through this website, or
              submitting an inquiry does not by itself create an
              attorney–client relationship. An attorney–client relationship is
              formed only when:
            </p>
            <ul>
              <li>You receive a written description of the proposed scope of services;</li>
              <li>You agree to that scope; and</li>
              <li>RRLC confirms acceptance of your matter, typically in writing.</li>
            </ul>
            <p>
              Until that point, you should not send confidential information
              that you would not want disclosed.
            </p>

            <h2>4. Jurisdiction and Licensing</h2>
            <p>
              Residential Rights Legal Counsel is a law practice focused on
              matters governed by Texas law. Bret Sparks, Attorney at Law, is
              licensed to practice law in the State of Texas. RRLC does not
              seek to represent anyone in a jurisdiction where this website
              would not comply with applicable laws and rules.
            </p>

            <h2>5. Scope of Services and Limitations</h2>
            <p>
              The fixed-fee services described on this website are limited in
              scope and are designed for specific residential and HOA-related
              issues. The exact scope of any engagement will be described in
              writing before you are asked to pay for a service.
            </p>
            <p>Unless explicitly agreed in writing, RRLC&apos;s services do not include:</p>
            <ul>
              <li>Filing or defending lawsuits in court;</li>
              <li>Appearing at in-person hearings or trials;</li>
              <li>Ongoing general counsel services; or</li>
              <li>Representation in matters outside the described scope.</li>
            </ul>

            <h2>6. Payments and Refunds</h2>
            <p>
              Fixed-fee services will generally require payment in full before
              work begins. The applicable fee and scope will be described in
              writing at the time of engagement. Because these services often
              involve a short turnaround and significant attorney time, fees may
              be non-refundable once work has commenced, except as required by
              applicable law or professional responsibility rules.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              Information you provide in connection with a potential or actual
              representation will generally be treated as confidential
              consistent with Texas rules governing attorneys. However,
              communication through this website or email may not be fully
              secure, and you should avoid sending highly sensitive information
              unless and until you are instructed to do so.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites for your
              convenience. RRLC does not control and is not responsible for the
              content or practices of third-party websites and does not endorse
              or make any representations about them.
            </p>

            <h2>9. No Warranty</h2>
            <p>
              This website is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. RRLC makes no warranties, express or
              implied, regarding the website or its content, including but not
              limited to accuracy, completeness, or fitness for a particular
              purpose.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, RRLC and its attorney(s)
              will not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of this website or reliance on its content.
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>
              RRLC may update these Terms from time to time. The &quot;Last
              updated&quot; date above reflects the effective date of the
              current version. Your continued use of the website after changes
              are posted constitutes your acceptance of the updated Terms.
            </p>

            <h2>12. Contact</h2>
            <p>
              If you have questions about these Terms, you may reach out through
              the Contact page on this website.
            </p>

            <p className="text-[0.7rem] text-neutral-500 mt-6">
              <strong>Note:</strong> This Terms of Service page is a general
              template and may not address every issue relevant to your
              practice. You should review and customize it as needed and ensure
              it complies with applicable law and professional responsibility
              requirements.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
