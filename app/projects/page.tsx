import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    title: "NHS",
    sector: "Healthcare",
    scope: "Project details to be added.",
    imagePlaceholder: "NHS image area",
  },
  {
    title: "Newcastle International Airport",
    sector: "Aviation",
    scope: "Project details to be added.",
    imagePlaceholder: "Newcastle airport image area",
  },
  {
    title: "Mandarin Oriental Canouan",
    sector: "Hospitality",
    scope: "Project details to be added.",
    imagePlaceholder: "Mandarin Oriental Canouan image area",
  },
  {
    title: "Komatsu UK",
    sector: "Industrial",
    scope: "Project details to be added.",
    imagePlaceholder: "Komatsu UK image area",
  },
  {
    title: "Northumbria University",
    sector: "Education",
    scope: "Project details to be added.",
    imagePlaceholder: "Northumbria University image area",
  },
  {
    title: "Robert McAlpine",
    sector: "Construction",
    scope: "Project details to be added.",
    imagePlaceholder: "Robert McAlpine image area",
  },
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
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="service-card p-4">
                <h3>{project.title}</h3>
                <p className="mb-3 font-semibold text-[var(--accent)]">{project.sector}</p>
                <div className="grid gap-4 md:grid-cols-[minmax(14rem,18rem)_1fr] md:items-center">
                  <div className="flex min-h-40 items-center justify-center rounded-lg border border-[var(--corp-border)] bg-[var(--bg-muted)] px-4 text-center text-sm font-semibold uppercase tracking-[0.06em] text-[var(--ink-soft)]">
                    {project.imagePlaceholder}
                  </div>
                  <div>
                    <p className="leading-7 text-[var(--ink-soft)]">{project.scope}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
