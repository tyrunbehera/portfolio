import { whatIDo } from "@/data/resume";

export default function WhatIDo() {
  return (
    <section className="pt-0 pb-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="section-card">
          <span className="section-label">What I Do</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e8f0fb] mb-2">
            Core Areas of Expertise
          </h2>
          <p className="text-[#a7bbd2] text-sm mb-6 max-w-xl">
            End-to-end ownership of cloud platforms — from provisioning to security, monitoring to cost control.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatIDo.map(({ icon, tag, title, description, tools }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[rgba(143,170,200,0.14)] bg-[rgba(10,18,28,0.7)] p-5 hover:border-[rgba(76,201,240,0.25)] hover:bg-[rgba(10,22,36,0.88)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-3"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(76,201,240,0.08)] border border-[rgba(76,201,240,0.14)] flex items-center justify-center text-base shrink-0">
                    {icon}
                  </div>
                  <div>
                    <span className="text-[0.58rem] uppercase tracking-[0.14em] text-[#4cc9f0] font-bold">
                      {tag}
                    </span>
                    <h3 className="text-[#e8f0fb] font-bold text-sm leading-tight">{title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#a7bbd2] text-[0.8rem] leading-relaxed">{description}</p>

                {/* Tool pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1 border-t border-[rgba(255,255,255,0.05)]">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[0.65rem] px-2 py-0.5 rounded-md bg-[rgba(76,201,240,0.06)] border border-[rgba(76,201,240,0.12)] text-[#a7bbd2] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
