import SiteHeader from "../components/SiteHeader";

export default function TermsPage() {
  return (
    <div className="page-wrap">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-8 md:px-8 md:py-12">
        <section className="hero" aria-labelledby="terms-title">
          <div className="hero__content">
            <p className="eyebrow">Legal</p>
            <h1 id="terms-title" className="hero__title">
              Terms &amp; Conditions
            </h1>
            <p className="hero__copy">
              These Terms &amp; Conditions govern use of this website and set out the general framework for
              services provided by LTL Systems Limited.
            </p>
          </div>
        </section>

        <section className="service-card space-y-4" aria-label="Terms and conditions content">
          <p className="text-[var(--ink-soft)] leading-7">
            <strong>Last updated:</strong> 17 April 2026
          </p>

          <h2>1. Introduction</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            By accessing this website, you agree to these Terms &amp; Conditions. If you do not agree, please
            discontinue use of this site.
          </p>

          <h2>2. Company Information</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            References to "LTL Systems", "we", "our", or "us" mean LTL Systems Limited.
          </p>

          <h2>3. Website Content</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Content on this website is provided for general information purposes. We may update content at
            any time without notice.
          </p>

          <h2>4. Intellectual Property</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            All content, branding, graphics, text, and layout on this website are owned by or licensed to
            LTL Systems Limited unless otherwise stated. You may not reproduce or distribute content without
            prior written permission.
          </p>

          <h2>5. Acceptable Use</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            You agree not to misuse this website, including introducing malicious code, attempting
            unauthorised access, or using the site for unlawful activities.
          </p>

          <h2>6. Enquiries and Quotations</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Any information submitted through contact channels does not create a binding contract. Quotations
            and project proposals are subject to scope review, written agreement, and formal acceptance.
          </p>

          <h2>7. Service Information</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Project and service information is indicative and subject to confirmation through formal
            proposals and contracts.
          </p>

          <h2>8. Third-Party Links</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            This website may contain links to third-party websites. We are not responsible for third-party
            content, terms, or privacy practices.
          </p>

          <h2>9. Warranties and Availability</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We aim to keep this website accurate and available but do not guarantee uninterrupted access,
            error-free content, or that all information is current at all times.
          </p>

          <h2>10. Liability</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            To the extent permitted by law, LTL Systems is not liable for indirect losses resulting from use
            of this website.
          </p>

          <h2>11. Limitation of Liability for Services</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            Liability in relation to contracted services is governed by the specific terms of the relevant
            signed proposal, contract, or service agreement.
          </p>

          <h2>12. Governing Law and Jurisdiction</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            These terms are governed by the laws of England and Wales, and disputes will be subject to the
            exclusive jurisdiction of the courts of England and Wales, unless otherwise required by law.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            We may update these terms at any time. Changes will take effect when published on this page.
          </p>

          <h2>14. Contact</h2>
          <p className="text-[var(--ink-soft)] leading-7">
            For questions regarding these Terms &amp; Conditions, contact{" "}
            <a href="mailto:sales@ltlsystems.co.uk">sales@ltlsystems.co.uk</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 LTL Systems. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/">Back to Home</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
