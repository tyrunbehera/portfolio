"use client";

import { useInView } from "@/hooks/useInView";
import { skills } from "@/data/resume";

const DELAYS = ["anim-d1","anim-d2","anim-d3","anim-d4","anim-d5","anim-d6","anim-d1","anim-d2"];

export default function Skills() {
  const { ref, inView } = useInView(0.08);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className="py-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div
          className={`section-card ${inView ? "anim-pop" : "opacity-0 translate-y-10"}`}
          style={{ willChange: "transform, opacity" }}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e2ecf8] mb-2">
            Tools &amp; Technologies
          </h2>
          <p className="text-[#a7bbd2] text-sm mb-8 max-w-xl">
            Everything I use day-to-day to build, secure, monitor, and optimise cloud platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map(({ category, items }, i) => (
              <div
                key={category}
                className={`rounded-xl border border-[rgba(143,170,200,0.14)] bg-[rgba(10,18,28,0.7)] p-5 hover:border-[rgba(76,201,240,0.22)] transition-colors ${inView ? `anim-pop ${DELAYS[i] ?? ""}` : "opacity-0"}`}
              >
                <p className="text-[0.65rem] uppercase tracking-[0.14em] text-[#4cc9f0] font-bold mb-3 flex items-center gap-2">
                  <span className="w-1 h-3 rounded-full bg-[#4cc9f0] inline-block" />
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="text-[0.72rem] px-2 py-0.5 rounded-md bg-[rgba(76,201,240,0.06)] border border-[rgba(76,201,240,0.12)] text-[#a7bbd2] font-medium hover:text-[#e2ecf8] hover:bg-[rgba(76,201,240,0.12)] transition-colors cursor-default">
                      {item}
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
