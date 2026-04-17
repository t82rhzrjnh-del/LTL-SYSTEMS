import SiteHeader from "../components/SiteHeader";

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrap">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-8 md:px-8 md:py-12">
        <section className="hero" aria-labelledby="privacy-title">
          <div className="hero__content">
            <p className="eyebrow">Legal</p>
            <h1 id="privacy-title" className="hero__title">
              Privacy Policy
            </h1>
            <p className="hero__copy">
              This policy explains how LTL Systems Limited collects, uses, stores, and protects personal
              data when you use this website or contact us about our services.
            </p>
          </div>
        </section>

        <section className="service-card space-y-4" aria-label="Privacy policy content">
          <p className="text-[var(--ink-soft)] leading-7">
            <strong>Last updated:</strong> 17 April 2026
          </p>

          <h2>1. Who We Are</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            LTL Systems Limited is the data controller for personal data processed through this website and
            through direct enquiries.
          </p>

          <h2>2. Personal Data We Collect</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Depending on how you interact with us, we may collect:
          </p>
          <ul className="space-y-2 pl-5 text-[var(--ink-soft)]">
            <li>Name and job title</li>
            <li>Business contact details (email address, phone number, company details)</li>
            <li>Enquiry and project information you provide</li>
            <li>Technical data such as IP address, browser type, and basic website usage analytics</li>
          </ul>

          <h2>3. How We Use Personal Data</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We process personal data to:
          </p>
          <ul className="space-y-2 pl-5 text-[var(--ink-soft)]">
            <li>Respond to enquiries and provide quotations</li>
            <li>Deliver contracted services and project support</li>
            <li>Manage business records, administration, and compliance obligations</li>
            <li>Improve website performance, security, and user experience</li>
          </ul>

          <h2>4. Lawful Bases for Processing (UK GDPR)</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Our lawful bases may include one or more of the following:
          </p>
          <ul className="space-y-2 pl-5 text-[var(--ink-soft)]">
            <li>Legitimate interests (responding to business enquiries and managing client relationships)</li>
            <li>Performance of a contract (where services are requested or supplied)</li>
            <li>Legal obligation (where processing is required by law)</li>
            <li>Consent (where explicitly requested, such as optional communications)</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We do not sell personal data. We may share data with trusted service providers (for example,
            IT hosting, communications, and support services) where necessary to operate our business and
            website. Where third parties process data on our behalf, we require suitable safeguards.
          </p>

          <h2>6. International Transfers</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            If personal data is transferred outside the UK, we will use appropriate safeguards as required
            by applicable data protection law.
          </p>

          <h2>7. Data Retention</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We retain personal data only as long as necessary for the purposes for which it was collected,
            including legal, regulatory, contractual, and reporting requirements.
          </p>

          <h2>8. Your Data Protection Rights</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Subject to applicable law, you may have rights to:
          </p>
          <ul className="space-y-2 pl-5 text-[var(--ink-soft)]">
            <li>Access personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of data in certain circumstances</li>
            <li>Restrict or object to processing in certain circumstances</li>
            <li>Request transfer of your data where applicable</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>

          <h2>9. Cookies and Analytics</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            This website may use essential cookies and basic analytics to improve functionality and
            performance. You can control cookies through your browser settings.
          </p>

          <h2>10. Security</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We use appropriate technical and organisational measures to protect personal data against
            unauthorised access, loss, or misuse.
          </p>

          <h2>11. Complaints</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            If you have concerns about our use of your data, please contact us first. You also have the
            right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO):
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer"> ico.org.uk</a>.
          </p>

          <h2>12. Contact</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            For privacy-related enquiries or data rights requests, contact us at{" "}
            <a href="mailto:sales@ltlsystems.co.uk">sales@ltlsystems.co.uk</a>.
          </p>

          <h2>13. Changes to This Policy</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We may update this policy from time to time. Any changes will be posted on this page with an
            updated revision date.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 LTL Systems. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/">Back to Home</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
