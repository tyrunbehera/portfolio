"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
    tooltip: "Who I am & what I do",
  },
  {
    label: "Skills",
    href: "#skills",
    tooltip: "Tools, cloud platforms & tech stack",
  },
  {
    label: "Experience",
    href: "#experience",
    tooltip: "4+ years across 3 companies",
  },
  {
    label: "Certifications",
    href: "#certifications",
    tooltip: "AWS · Cisco · Oracle · FinOps",
  },
  {
    label: "Education",
    href: "#education",
    tooltip: "B.Tech Computer Engineering — GTU",
  },
  {
    label: "Contact",
    href: "#contact",
    tooltip: "Get in touch — reply within 24h",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((n) => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(1,11,20,0.95)] backdrop-blur-xl border-b border-[rgba(143,170,200,0.14)] shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "bg-[rgba(1,11,20,0.6)] backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-6 h-14 flex items-center justify-between gap-6">

        {/* No brand text — just spacer to keep layout balanced */}
        <div className="w-8 shrink-0" />

        {/* Nav links with tooltips */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            const isHovered = hoveredId === id;

            return (
              <div
                key={id}
                className="relative"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center px-3 py-1.5 rounded-lg text-[0.72rem] uppercase tracking-widest font-bold transition-all duration-200 border ${
                    isActive
                      ? "bg-[rgba(76,201,240,0.12)] text-[#4cc9f0] border-[rgba(76,201,240,0.2)]"
                      : "text-[#a7bbd2] border-transparent hover:text-[#e8f0fb] hover:bg-[rgba(76,201,240,0.06)] hover:border-[rgba(76,201,240,0.1)]"
                  }`}
                  onClick={() => setActive(id)}
                >
                  {isActive && (
                    <span className="mr-1.5 w-1 h-1 rounded-full bg-[#4cc9f0] inline-block" />
                  )}
                  {item.label}
                </a>

                {/* Tooltip popup */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 transition-all duration-200 pointer-events-none ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1"
                  }`}
                >
                  {/* Arrow */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0d1825] border-l border-t border-[rgba(76,201,240,0.25)]" />
                  {/* Box */}
                  <div className="relative mt-0.5 px-3 py-2 rounded-lg bg-[#0d1825] border border-[rgba(76,201,240,0.25)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] whitespace-nowrap">
                    <p className="text-[0.7rem] text-[#e8f0fb] font-medium">{item.tooltip}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="mailto:tyrunbehera@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg bg-[rgba(76,201,240,0.1)] border border-[rgba(76,201,240,0.3)] text-[#4cc9f0] hover:bg-[rgba(76,201,240,0.18)] hover:border-[rgba(76,201,240,0.5)] transition-all duration-200 shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7ae8af] animate-pulse" />
          Hire Me
        </a>
      </div>
    </header>
  );
}
