import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

const fireLifeSafetyServices = [
  {
    title: "Fire Alarm Systems",
    summary: "Addressable detection and control solutions designed for early warning, compliance, and reduced nuisance alarms.",
  },
  {
    title: "Smoke Ventilation Systems",
    summary: "Natural and mechanical smoke control systems that protect escape routes and support safer evacuation.",
  },
  {
    title: "Emergency Voice Communications Systems",
    summary: "Two-way monitored communication systems to support disabled refuge points and fire team coordination.",
  },
  {
    title: "Voice Alarm & Public Address Systems",
    summary: "Clear live and pre-recorded announcements that improve evacuation response and day-to-day communications.",
  },
  {
    title: "Suppression Systems",
    summary: "Gas suppression solutions tailored to hazards, designed to limit damage while protecting people and assets.",
  },
  {
    title: "Smoke & Fire Dampers",
    summary: "Critical passive fire components with planned testing and maintenance to help prevent fire and smoke spread.",
  },
  {
    title: "Fire Extinguishers",
    summary: "Extinguisher coverage integrated into site fire strategy with support for ongoing servicing and compliance.",
  },
];

const lifeSafetySystemsLinks = [
  "Fire Alarm Systems",
  "Smoke Ventilation Systems",
  "Emergency Voice Communications Systems",
  "Voice Alarm & Public Address Systems",
  "Suppression Systems",
  "Smoke & Fire Dampers",
  "Fire Extinguishers",
];

const electronicSecurityServices = [
  {
    title: "Intruder Alarm Systems",
    summary: "Individually designed wired and wireless alarm systems for sites ranging from single units to large facilities.",
  },
  {
    title: "CCTV Systems",
    summary: "HD and IP camera platforms with remote access, analytics, and flexible local or cloud recording options.",
  },
  {
    title: "Access Control Systems",
    summary: "Scalable access solutions that control who can enter and when across doors, buildings, and multi-site estates.",
  },
  {
    title: "Door Entry Intercom Systems",
    summary: "Audio, video, wireless, and GSM intercom options for residential and commercial entry management.",
  },
  {
    title: "Emergency Call Systems",
    summary: "Designed, installed, and maintained emergency call systems with commissioning support across environments.",
  },
  {
    title: "Remote Monitoring",
    summary: "24/7 monitoring with verified signal handling and escalation through a dedicated alarm receiving centre.",
  },
  {
    title: "Maintenance and Service",
    summary: "Planned and reactive maintenance delivered to SSAIB-aligned standards with 24-hour emergency support.",
  },
];

const maintenanceHighlights = [
  "Service provision 24/7, 365 days a year",
  "BAFE accredited service and planned maintenance for fire alarm systems",
  "SSAIB accredited service and planned maintenance for electronic security systems",
  "Remote monitoring via 3rd party remote receiving centre (ARC)",
];

const sectors = [
  "Commercial Offices",
  "Industrial Facilities",
  "Education",
  "Healthcare",
  "Residential and Multi-site",
  "Public Sector",
  "Retail",
  "Data and Critical Infrastructure",
];

const accreditations = ["BAFE", "SSAIB", "IFCC SDI19", "Siemens Partnership"];

export default function Home() {
  return (
    <div className="page-wrap">
      <SiteHeader homeHref="#top" />

      <main id="top" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-5 py-8 md:gap-24 md:px-8 md:py-12">
        <section className="hero reveal" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow">Provider of Fire, Life Safety and Security Solutions</p>
            <h1 id="hero-title" className="hero__title">
              Integrated systems expertise for fire, life safety and electronic security.
            </h1>
            <p className="hero__copy">
              LTL Systems Limited is an independent, local company with an established reputation for
              technical ability and service delivery. We support clients through the full lifecycle of
              commercial projects, from design and installation to service and planned maintenance.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#services">
                View Service Portfolio
              </a>
              <a className="btn" href="/projects">
                View Project Portfolio
              </a>
              <a className="btn btn--primary" href="#contact">
                Arrange a Consultation
              </a>
            </div>
          </div>
          <aside className="trust-panel" aria-label="Key service stats">
            <dl className="stat-grid">
              <div className="stat-item">
                <dt className="stat-item__value">24/7/365</dt>
                <dd className="stat-item__label">Service Response Capability</dd>
              </div>
              <div className="stat-item">
                <dt className="stat-item__value">ARC</dt>
                <dd className="stat-item__label">Remote Monitoring Support</dd>
              </div>
              <div className="stat-item stat-item--wide">
                <dt className="stat-item__value">End-to-End</dt>
                <dd className="stat-item__label">Design, Delivery, Maintenance</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="accreditation-marquee" aria-label="Accreditations and certifications">
          <div className="accreditation-marquee__track">
            <Image
              src="/Screenshot 2026-04-16 at 15.18.39.png"
              alt="LTL accreditations including BAFE, Gold Partner, SafeContractor, SE Controls, IFC and SSAIB"
              width={2000}
              height={310}
              className="accreditation-strip"
              priority
            />
            <Image
              src="/Screenshot 2026-04-16 at 15.18.39.png"
              alt=""
              width={2000}
              height={310}
              className="accreditation-strip"
              aria-hidden="true"
            />
          </div>
        </section>

        <section id="about" className="split reveal reveal--delay-1" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">About LTL Systems</p>
            <h2 id="about-title" className="section-title">
              Industry expertise with dependable project lifecycle support.
            </h2>
          </div>
          <div className="space-y-4 text-[1.01rem] leading-8 text-[var(--ink-soft)]">
            <p>
              We deliver Fire, Life Safety and Electronic Security systems to a wide variety of commercial
              projects, combining technical excellence with practical delivery.
            </p>
            <p>
              As the company has grown, our workforce has expanded to meet every challenge. With extensive
              industry experience, the team at LTL Systems provides dependable support from planning and
              installation through service and maintenance.
            </p>
          </div>
        </section>

        <section className="pillars reveal reveal--delay-2" aria-label="Delivery principles">
          <article>
            <h3>Technical Governance</h3>
            <p>Structured design and installation standards focused on compliance, safety and continuity.</p>
          </article>
          <article>
            <h3>Project Lifecycle Support</h3>
            <p>Single-team accountability from initial scope through commissioning and ongoing maintenance.</p>
          </article>
          <article>
            <h3>Operational Assurance</h3>
            <p>Planned maintenance and rapid response services to protect uptime and reduce operational risk.</p>
          </article>
        </section>

        <section id="services" className="space-y-8" aria-labelledby="services-title">
          <div className="reveal reveal--delay-2">
            <p className="eyebrow">Our Services</p>
            <h2 id="services-title" className="section-title">
              Integrated systems portfolio aligned to commercial risk and compliance needs.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="service-card reveal reveal--delay-1" aria-labelledby="fire-title">
              <h3 id="fire-title">Fire & Life Safety Systems</h3>
              <ul>
                {fireLifeSafetyServices.map((item) => (
                  <li key={item.title}>
                    <details className="service-item">
                      <summary className="service-item__title">
                        <span>{item.title}</span>
                        <span className="service-item__icon" aria-hidden="true"></span>
                      </summary>
                      <span className="service-item__summary">{item.summary}</span>
                    </details>
                  </li>
                ))}
              </ul>
            </article>
            <article className="service-card reveal reveal--delay-2" aria-labelledby="security-title">
              <h3 id="security-title">Electronic Security Systems</h3>
              <ul>
                {electronicSecurityServices.map((item) => (
                  <li key={item.title}>
                    <details className="service-item">
                      <summary className="service-item__title">
                        <span>{item.title}</span>
                        <span className="service-item__icon" aria-hidden="true"></span>
                      </summary>
                      <span className="service-item__summary">{item.summary}</span>
                    </details>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <article className="service-card service-card--wide reveal reveal--delay-3" aria-labelledby="maintenance-title">
            <h3 id="maintenance-title">Service and Maintenance</h3>
            <p>
              LTL Systems Limited offers the expertise needed to deliver servicing requirements at a
              competitive cost.
            </p>
            <ul>
              {maintenanceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="service-card service-card--wide reveal reveal--delay-3" aria-labelledby="life-safety-title">
            <h3 id="life-safety-title">Life Safety Systems</h3>
            <p>Detailed service coverage from our dedicated Fire & Life Safety Systems portfolio:</p>
            <ul>
              {lifeSafetySystemsLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="reveal reveal--delay-2" aria-labelledby="sectors-title">
          <p className="eyebrow">Sectors</p>
          <h2 id="sectors-title" className="section-title">
            Supporting organisations across high-demand operating environments.
          </h2>
          <ul className="sector-grid">
            {sectors.map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </section>

        <section className="delivery reveal" aria-labelledby="delivery-title">
          <div>
            <p className="eyebrow">Delivery Framework</p>
            <h2 id="delivery-title" className="section-title">
              A clear, accountable delivery model.
            </h2>
          </div>
          <ol>
            <li>
              <h3>01. Discovery and Scope</h3>
              <p>Define compliance, operational and security requirements with key stakeholders.</p>
            </li>
            <li>
              <h3>02. Engineering and Installation</h3>
              <p>Implement integrated systems with coordinated commissioning and quality controls.</p>
            </li>
            <li>
              <h3>03. Service and Maintenance</h3>
              <p>Provide planned maintenance, response support and monitoring throughout system life.</p>
            </li>
          </ol>
        </section>

        <section id="contact" className="contact reveal" aria-labelledby="contact-title">
          <div className="contact__intro">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              If you have a project in mind, speak with our team today.
            </h2>
            <p>
              We support clients across design, delivery and maintenance. Reach out to discuss your
              requirements and timelines.
            </p>
            <div className="hero__actions">
              <a className="btn" href="tel:+441670735275">
                Call 01670 735275
              </a>
              <a className="btn btn--ghost" href="mailto:sales@ltlsystems.co.uk">
                Email Sales Team
              </a>
            </div>
          </div>
          <div className="contact__panel" role="group" aria-label="Contact details">
            <h3>Contact Us</h3>
            <p>
              <a href="tel:01670735275">01670 735275</a>
            </p>
            <p>
              <a href="mailto:sales@ltlsystems.co.uk">sales@ltlsystems.co.uk</a>
            </p>
            <h4>Office</h4>
            <address>
              LTL Systems
              <br />
              Poplar Court, Atley Way
              <br />
              North Nelson Park Industrial Estate
              <br />
              Cramlington, Northumberland
              <br />
              NE23 1WR
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 LTL Systems. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="https://www.ltlsystems.co.uk/privacy/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://www.ltlsystems.co.uk/services/" target="_blank" rel="noopener noreferrer">
              Full Services
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
