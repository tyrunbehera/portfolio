"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { certifications } from "@/data/resume";

const colorMap = {
  orange: { tag: "bg-[rgba(255,157,92,0.12)] border-[rgba(255,157,92,0.3)] text-[#ff9d5c]", glow: "rgba(255,157,92,0.08)", border: "hover:border-[rgba(255,157,92,0.4)]", shimmer: "rgba(255,157,92,0.5)" },
  blue:   { tag: "bg-[rgba(76,201,240,0.12)] border-[rgba(76,201,240,0.3)] text-[#4cc9f0]",  glow: "rgba(76,201,240,0.08)",  border: "hover:border-[rgba(76,201,240,0.4)]",  shimmer: "rgba(76,201,240,0.5)" },
  red:    { tag: "bg-[rgba(255,107,107,0.12)] border-[rgba(255,107,107,0.3)] text-[#ff6b6b]", glow: "rgba(255,107,107,0.08)", border: "hover:border-[rgba(255,107,107,0.4)]", shimmer: "rgba(255,107,107,0.5)" },
  teal:   { tag: "bg-[rgba(124,232,212,0.12)] border-[rgba(124,232,212,0.3)] text-[#7ce8d4]", glow: "rgba(124,232,212,0.08)", border: "hover:border-[rgba(124,232,212,0.4)]", shimmer: "rgba(124,232,212,0.5)" },
};

const DELAYS = ["anim-d1","anim-d2","anim-d3","anim-d4","anim-d5"];

function CertCard({ cert, delay }: { cert: (typeof certifications)[number]; delay: string }) {
  const [bouncing, setBouncing] = useState(false);
  const c = colorMap[cert.color];
  return (
    <a
      href={cert.credlyUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => { setBouncing(true); setTimeout(() => setBouncing(false), 700); }}
      className={`group relative flex flex-col items-center text-center rounded-2xl border border-[rgba(143,170,200,0.14)] p-6 pb-5 transition-all duration-300 ${c.border} hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(0,0,0,0.5)] cursor-pointer select-none anim-pop ${delay}`}
      style={{ background: `radial-gradient(circle at top center, ${c.glow} 0%, rgba(8,16,30,0.92) 65%)` }}
    >
      <div aria-hidden="true" className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg,transparent,${c.shimmer},transparent)` }} />
      <div className={`relative w-20 h-20 mb-4 flex items-center justify-center ${bouncing ? "badge-bounce" : ""}`}>
        <Image src={cert.badgeUrl} alt={cert.name} width={80} height={80} className="object-contain w-full h-full drop-shadow-lg" unoptimized />
      </div>
      <span className={`text-[0.58rem] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full border mb-2 ${c.tag}`}>{cert.tag}</span>
      <h3 className="text-[#e2ecf8] font-bold text-sm leading-snug mb-1">{cert.name}</h3>
      <p className="text-[#a7bbd2] text-[0.65rem] font-mono tracking-wide">{cert.code}</p>
      <p className="mt-2 text-[0.6rem] text-[#4cc9f0] opacity-0 group-hover:opacity-100 transition-opacity duration-200">Verify ↗</p>
    </a>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView(0.1);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="certifications" className="py-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className={`section-card ${inView ? "anim-pop" : "opacity-0 translate-y-10"}`} style={{ willChange: "transform, opacity" }}>
          <span className="section-label">Certifications</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e2ecf8] mb-2">Industry Credentials</h2>
          <p className="text-[#a7bbd2] text-sm mb-8 max-w-xl">Validated expertise across cloud architecture, security, and financial operations. Click any badge to verify.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {inView && certifications.map((cert, i) => (
              <CertCard key={cert.name + cert.code} cert={cert} delay={DELAYS[i] ?? ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
