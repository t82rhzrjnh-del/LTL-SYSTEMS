"use client";

import Image from "next/image";
import { useState } from "react";

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
    label: "About",
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
    label: "Contact",
    href: "/#contact",
    items: [
      { label: "Call +44 1670 735275", href: "tel:+441670735275" },
      { label: "Email Sales Team", href: "mailto:sales@ltlsystems.co.uk" },
      { label: "Visit Head Office", href: "/#contact" },
    ],
  },
];

export default function SiteHeader({ homeHref = "/" }: { homeHref?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setOpenSection((prev) => (prev === label ? null : label));
  };

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
              <a
                className="nav-link nav-link--trigger"
                href={section.href}
              >
                {section.label}
              </a>
              <div className={`nav-dropdown__menu${section.wide ? " nav-dropdown__menu--services" : ""}`}>
                {section.items.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="btn btn--sm hidden md:inline-flex" href="/#contact">
            Enquire Now
          </a>

          <button
            className="mobile-menu-toggle md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => { setMenuOpen((v) => !v); setOpenSection(null); }}
          >
            <span className={`hamburger${menuOpen ? " hamburger--open" : ""}`} />
            <span className="mobile-menu-toggle__label">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
          {navSections.map((section) => (
            <div key={section.label} className="mobile-section">
              <button
                className="mobile-section__trigger"
                onClick={() => toggleSection(section.label)}
                aria-expanded={openSection === section.label}
              >
                {section.label}
                <span className={`mobile-chevron${openSection === section.label ? " mobile-chevron--open" : ""}`}>▾</span>
              </button>
              {openSection === section.label && (
                <div className="mobile-section__items">
                  {section.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a className="btn w-full text-center mt-4" href="/#contact" onClick={() => setMenuOpen(false)}>
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
