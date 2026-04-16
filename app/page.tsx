import Image from "next/image";

const fireLifeSafetyServices = [
  "Fire Alarm Systems",
  "Smoke Ventilation Systems",
  "Emergency Voice Communications Systems",
  "Voice Alarm & Public Address Systems",
  "Suppression Systems",
  "Smoke & Fire Dampers",
  "Fire Extinguishers",
];

const lifeSafetySystemsLinks = [
  {
    title: "Fire Alarm Systems",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/fire-alarm-systems/",
  },
  {
    title: "Smoke Ventilation Systems",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/mechanical-natural-smoke-ventilation-systems/",
  },
  {
    title: "Emergency Voice Communications Systems",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/emergency-voice-communications-systems/",
  },
  {
    title: "Voice Alarm & Public Address Systems",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/voice-alarm-public-address-systems/",
  },
  {
    title: "Suppression Systems",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/suppression-systems-fire-extinguishers/",
  },
  {
    title: "Smoke & Fire Dampers",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/smoke-and-fire-dampers/",
  },
  {
    title: "Fire Extinguishers",
    href: "https://www.ltlsystems.co.uk/services/life-safety-systems/suppression-systems-fire-extinguishers/",
  },
];

const electronicSecurityServices = [
  "Intruder Alarm Systems",
  "CCTV Systems",
  "Access Control Systems",
  "Door Entry Intercom Systems",
  "Emergency Call Systems",
  "Remote Monitoring",
  "Maintenance and Service",
  "Recording and Viewing Equipment",
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
      <header className="site-header sticky top-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-0 md:px-8">
          <a href="#top" className="brand-mark" aria-label="LTL Systems homepage">
            <Image
              src="/ltl-logo-full.png"
              alt="LTL Systems Logo"
              width={160}
              height={73}
              priority
            />
          </a>
          <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
          <a className="btn btn--sm" href="#contact">
            Enquire Now
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-5 py-10 md:gap-24 md:px-8 md:py-14">
        <section className="hero reveal" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow">Provider of Fire, Life Safety and Security Solutions</p>
            <h1 id="hero-title" className="hero__title">
              Corporate-grade systems engineering for fire, life safety and electronic security.
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
              <a className="btn btn--ghost" href="#contact">
                Arrange a Consultation
              </a>
            </div>
          </div>
          <aside className="trust-panel" aria-label="Accreditations and trust markers">
            <h2>Accreditations and Partnerships</h2>
            <ul>
              {accreditations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Service provision available 24/7, 365 days a year.</p>
          </aside>
        </section>

        <section className="kpi-strip reveal reveal--delay-1" aria-label="Operational highlights">
          <div>
            <strong>24/7</strong>
            <span>Service Response Capability</span>
          </div>
          <div>
            <strong>365</strong>
            <span>Days Annual Coverage</span>
          </div>
          <div>
            <strong>ARC</strong>
            <span>Remote Monitoring Support</span>
          </div>
          <div>
            <strong>End-to-End</strong>
            <span>Design, Delivery, Maintenance</span>
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
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="service-card reveal reveal--delay-2" aria-labelledby="security-title">
              <h3 id="security-title">Electronic Security Systems</h3>
              <ul>
                {electronicSecurityServices.map((item) => (
                  <li key={item}>{item}</li>
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
                <li key={service.title}>
                  <a href={service.href} target="_blank" rel="noopener noreferrer">
                    {service.title}
                  </a>
                </li>
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
                Call +44 1670 735275
              </a>
              <a className="btn btn--ghost" href="mailto:sales@ltlsystems.co.uk">
                Email Sales Team
              </a>
            </div>
          </div>
          <div className="contact__panel" role="group" aria-label="Contact details">
            <h3>Contact Us</h3>
            <p>
              <a href="tel:+441670735275">+44 1670 735275</a>
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
