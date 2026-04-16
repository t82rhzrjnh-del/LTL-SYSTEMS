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

const navSections = [
  {
    label: "About Us",
    href: "/#about",
    items: [
      { label: "Who We Are", href: "/#about" },
      { label: "Delivery Framework", href: "/#delivery-title" },
      { label: "Sectors", href: "/#sectors-title" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    wide: true,
    items: [
      ...fireLifeSafetyServices.map((s) => ({ label: s, href: "/#services" })),
      ...electronicSecurityServices.map((s) => ({ label: s, href: "/#services" })),
      { label: "Service and Maintenance", href: "/#services" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    items: [
      { label: "Project Portfolio", href: "/projects" },
      { label: "Featured Projects", href: "/projects#featured" },
      { label: "Project Sectors", href: "/projects#sectors" },
    ],
  },
  {
    label: "Contact Us",
    href: "/#contact",
    items: [
      { label: "Call +44 1670 735275", href: "tel:+441670735275" },
      { label: "Email Sales Team", href: "mailto:sales@ltlsystems.co.uk" },
      { label: "Visit Head Office", href: "/#contact" },
    ],
  },
];

export default function SiteHeader({ homeHref = "/" }: { homeHref?: string }) {
  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-0 md:px-8">
        <a href={homeHref} className="brand-mark" aria-label="LTL Systems homepage">
          <div className="logo-container">
            <Image
              src="/Untitled design-12.png"
              alt="LTL Systems Logo"
              width={280}
              height={93}
              priority
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="site-nav hidden md:flex">
          {navSections.map((section) => (
            <div key={section.label} className="nav-dropdown">
              <a className="nav-link nav-link--trigger" href={section.href}>
                {section.label}
              </a>
              <div className={`nav-dropdown__menu${section.wide ? " nav-dropdown__menu--services" : ""}`}>
                {section.items.map((item) => (
                  <a key={item.label} className="nav-dropdown__item" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <a className="btn btn--sm hidden md:inline-flex" href="/#contact">
          Enquire Now
        </a>
      </div>

      {/* Mobile quick-nav */}
      <nav className="mobile-quick-nav md:hidden" aria-label="Mobile quick navigation">
        {navSections.map((section) => (
          <a key={section.label} href={section.href} className="mobile-quick-nav__link">
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
