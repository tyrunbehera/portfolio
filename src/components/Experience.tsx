"use client";

import { useInView } from "@/hooks/useInView";
import { experience } from "@/data/resume";

const DELAYS = ["anim-d1","anim-d2","anim-d3"];

export default function Experience() {
  const { ref, inView } = useInView(0.08);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="experience" className="py-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div
          className={`section-card ${inView ? "anim-pop" : "opacity-0 scale-95"}`}
          style={{ willChange: "transform, opacity" }}
        >
          <span className="section-label">Professional Experience</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e2ecf8] mb-2">
            Where I&apos;ve Worked
          </h2>
          <p className="text-[#a7bbd2] text-sm mb-8 max-w-xl">
            4+ years of progressive DevOps experience across startups and product companies.
          </p>

          <div className="relative">
            <div aria-hidden="true" className="absolute left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-[#4cc9f0] via-[rgba(76,201,240,0.25)] to-transparent" />

            <div className="space-y-6 pl-8">
              {experience.map((job, idx) => (
                <article
                  key={idx}
                  className={`relative ${inView ? `anim-pop ${DELAYS[idx] ?? ""}` : "opacity-0"}`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -left-[26px] top-6 w-3 h-3 rounded-full border-2 transition-all ${
                      job.current
                        ? "border-[#4cc9f0] bg-[#4cc9f0] shadow-[0_0_12px_rgba(76,201,240,0.7)]"
                        : "border-[rgba(76,201,240,0.6)] bg-[rgba(76,201,240,0.1)]"
                    }`}
                  />

                  <div className="rounded-2xl border border-[rgba(143,170,200,0.14)] bg-[rgba(10,18,28,0.75)] p-6 hover:border-[rgba(76,201,240,0.25)] hover:bg-[rgba(10,22,36,0.85)] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-[#e2ecf8]">{job.role}</h3>
                          {job.current && (
                            <span className="text-[0.6rem] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[rgba(122,232,175,0.12)] border border-[rgba(122,232,175,0.3)] text-[#7ae8af] font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7ae8af] animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-[#7ce8d4] font-bold text-base">{job.company}</p>
                          <span className="text-[#a7bbd2] text-xs">·</span>
                          <p className="text-[#a7bbd2] text-xs">{job.location}</p>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-lg bg-[rgba(76,201,240,0.07)] border border-[rgba(76,201,240,0.14)] text-[#4cc9f0] text-xs font-mono font-semibold">
                        {job.period}
                      </span>
                    </div>

                    <p className="text-[#7ce8d4] text-sm italic mb-4 border-l-2 border-[rgba(124,232,212,0.3)] pl-3">
                      {job.summary}
                    </p>

                    <ul className="space-y-2.5">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3 text-[#a7bbd2] text-sm leading-relaxed">
                          <span aria-hidden="true" className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#4cc9f0] shrink-0 opacity-80" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
