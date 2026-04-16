import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "Multi-Site Fire Alarm Upgrade",
    sector: "Commercial Offices",
    scope: "End-to-end design, phased install, and ongoing planned maintenance.",
  },
  {
    title: "Integrated Security Deployment",
    sector: "Industrial Facilities",
    scope: "Access control, CCTV, intruder alarms, and remote monitoring integration.",
  },
  {
    title: "Education Campus Life Safety",
    sector: "Education",
    scope: "Voice alarm, emergency communication, and compliance-focused service support.",
  },
  {
    title: "Healthcare Critical Systems",
    sector: "Healthcare",
    scope: "Resilient fire and life safety systems designed for continuous operation.",
  },
  {
    title: "Public Sector Security Programme",
    sector: "Public Sector",
    scope: "Cross-site rollout of detection, monitoring, and controlled access systems.",
  },
  {
    title: "Retail Estate Monitoring",
    sector: "Retail",
    scope: "Portfolio-wide CCTV and alarm management with 24/7 support response.",
  },
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

export default function ProjectsPage() {
  return (
    <div className="page-wrap">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-14 px-5 py-8 md:gap-20 md:px-8 md:py-12">
        <section className="hero" aria-labelledby="projects-title">
          <div className="hero__content">
            <p className="eyebrow">Project Portfolio</p>
            <h1 id="projects-title" className="hero__title">
              Proven delivery across life safety and security projects.
            </h1>
            <p className="hero__copy">
              From concept and design through commissioning and maintenance, LTL Systems delivers
              dependable project outcomes in critical commercial environments.
            </p>
            <div className="hero__actions">
              <a className="btn" href="/#contact">
                Discuss Your Project
              </a>
              <a className="btn btn--ghost" href="/#services">
                View Services
              </a>
            </div>
          </div>
        </section>

        <section id="featured" aria-labelledby="featured-title">
          <p className="eyebrow">Featured</p>
          <h2 id="featured-title" className="section-title">
            Recent delivery examples
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="service-card">
                <h3>{project.title}</h3>
                <p className="text-[var(--accent)] font-semibold mb-3">{project.sector}</p>
                <p className="text-[var(--ink-soft)] leading-7">{project.scope}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sectors" aria-labelledby="project-sectors-title">
          <p className="eyebrow">Sectors</p>
          <h2 id="project-sectors-title" className="section-title">
            Environments we support
          </h2>
          <ul className="sector-grid">
            {sectors.map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 LTL Systems. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/">Back to Home</a>
            <a href="mailto:sales@ltlsystems.co.uk">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
