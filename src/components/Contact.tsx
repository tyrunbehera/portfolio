"use client";

import { useInView } from "@/hooks/useInView";
import { personal } from "@/data/resume";

const contactItems = [
  { label: "Email",    value: personal.email,                         href: `mailto:${personal.email}`, description: "Best way to reach me — reply within 24h", accent: "#4cc9f0" },
  { label: "Phone",    value: personal.phone,                         href: `tel:${personal.phone}`,    description: "Available during IST business hours",      accent: "#7ce8d4" },
  { label: "LinkedIn", value: "linkedin.com/in/tarun-behera-86a343235", href: personal.linkedin,        description: "Connect professionally",                   accent: "#7ae8af", external: true },
  { label: "GitHub",   value: "github.com/tyrunbehera",               href: personal.github,            description: "Projects & open-source work",              accent: "#a7bbd2", external: true },
];

export default function Contact() {
  const { ref, inView } = useInView(0.08);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className="py-8 pb-20">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className={`section-card ${inView ? "anim-pop" : "opacity-0 translate-y-10"}`} style={{ willChange: "transform, opacity" }}>
          <span className="section-label">Contact</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e2ecf8] mb-3">Let&apos;s Work Together</h2>
          <p className="text-[#a7bbd2] text-base mb-8 max-w-xl">
            Open to DevOps, SRE, and Platform Engineering roles. I reply to every genuine opportunity within 24 hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contactItems.map((item) => (
              <a key={item.label} href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-start gap-4 rounded-xl border border-[rgba(143,170,200,0.14)] bg-[rgba(10,18,28,0.7)] p-5 hover:border-[rgba(76,201,240,0.25)] hover:bg-[rgba(10,18,28,0.9)] transition-all duration-200"
              >
                <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: item.accent }} />
                <div className="min-w-0">
                  <p className="text-[0.65rem] uppercase tracking-widest text-[#a7bbd2] font-bold mb-1">{item.label}</p>
                  <p className="font-semibold text-[#e2ecf8] text-sm truncate group-hover:text-[#4cc9f0] transition-colors">{item.value}</p>
                  <p className="text-[#a7bbd2] text-xs mt-1">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="rounded-xl border border-[rgba(76,201,240,0.18)] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, rgba(76,201,240,0.06) 0%, rgba(124,232,212,0.04) 100%)" }}>
            <div>
              <p className="font-bold text-[#e2ecf8] mb-1">Ready to build something great?</p>
              <p className="text-[#a7bbd2] text-sm">Drop me an email — I reply to every genuine opportunity.</p>
            </div>
            <a href={`mailto:${personal.email}`}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(76,201,240,0.3)] text-[#4cc9f0] font-bold text-sm hover:bg-[rgba(76,201,240,0.1)] transition-colors">
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
