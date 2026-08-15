"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { personal } from "@/data/resume";

// Full about text joined for typewriter
const ABOUT_FULL = personal.about.join("\n\n");

function TypewriterAbout() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  const raf = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    setDone(false);

    const type = () => {
      if (idx.current < ABOUT_FULL.length) {
        idx.current++;
        setDisplayed(ABOUT_FULL.slice(0, idx.current));
        raf.current = setTimeout(type, 18);
      } else {
        setDone(true);
      }
    };

    // Small delay before starting
    raf.current = setTimeout(type, 600);
    return () => { if (raf.current) clearTimeout(raf.current); };
  }, []);

  return (
    <div className="space-y-4">
      {displayed.split("\n\n").map((para, i) => (
        <p key={i} className="text-[#a7bbd2] leading-[1.9] text-[0.97rem]">
          {para}
          {/* Blinking cursor only on last paragraph while typing */}
          {!done && i === displayed.split("\n\n").length - 1 && (
            <span className="inline-block w-[2px] h-[1em] bg-[#4cc9f0] ml-0.5 align-middle animate-pulse" />
          )}
        </p>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-8 pb-8"
    >
      {/* Background glow blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-[rgba(76,201,240,0.07)] blur-[100px]" />
        <div className="absolute top-[30%] right-[-8%] w-[340px] h-[340px] rounded-full bg-[rgba(124,232,212,0.06)] blur-[90px]" />
        <div className="absolute bottom-[5%] left-[30%] w-[300px] h-[300px] rounded-full bg-[rgba(255,157,92,0.04)] blur-[80px]" />
        <div
          className="absolute -left-8 top-28 w-52 h-52 opacity-40"
          style={{ background: "linear-gradient(135deg,rgba(255,109,77,0.85),rgba(251,91,59,0.8))", clipPath: "polygon(0 0,100% 0,0 100%)" }}
        />
        <div
          className="absolute -right-4 top-56 w-48 h-48 opacity-35"
          style={{ background: "linear-gradient(135deg,rgba(33,200,240,0.7),rgba(34,158,197,0.75))", clipPath: "polygon(100% 0,100% 100%,0 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-6 w-full">
        {/* Hero card */}
        <div className="rounded-2xl border border-[rgba(143,170,200,0.18)] bg-[rgba(9,18,28,0.85)] shadow-[0_24px_60px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-sm">
          <div aria-hidden="true" className="h-[2px] w-full" style={{ background: "linear-gradient(90deg,transparent 0%,rgba(76,201,240,0.6) 35%,rgba(124,232,212,0.6) 65%,transparent 100%)" }} />

          {/* Profile row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7 px-8 pt-8 pb-7">
            {/* Photo */}
            <div className="relative shrink-0">
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-[rgba(124,232,212,0.45)]" style={{ boxShadow: "0 0 0 6px rgba(76,201,240,0.1), 0 0 30px rgba(76,201,240,0.12)" }}>
                <Image src="/assets/profile.png" alt="Tarun N. Behera" width={260} height={260} className="object-cover w-full h-full" quality={100} priority />
              </div>
              <span className="absolute bottom-1.5 right-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#020c1b] border-2 border-[#020c1b]">
                <span className="w-3 h-3 rounded-full bg-[#7ae8af] shadow-[0_0_8px_rgba(122,232,175,0.9)]" />
              </span>
            </div>

            {/* Name + headline */}
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#e2ecf8] leading-tight mb-1.5">{personal.name}</h1>
              <p className="text-xl font-semibold text-[#4cc9f0] mb-2">{personal.headline}</p>
              <p className="text-sm text-[#a7bbd2] leading-relaxed max-w-xl">{personal.tagline}</p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4cc9f0] text-[#010b14] font-bold text-sm hover:bg-[#38b8de] transition-colors shadow-[0_4px_20px_rgba(76,201,240,0.3)] anim-left anim-d1">Email Me</a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(76,201,240,0.3)] text-[#4cc9f0] font-semibold text-sm hover:bg-[rgba(76,201,240,0.1)] transition-colors anim-left anim-d2">LinkedIn ↗</a>
                <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(143,170,200,0.2)] text-[#a7bbd2] font-semibold text-sm hover:bg-[rgba(255,255,255,0.04)] transition-colors anim-left anim-d3">GitHub ↗</a>
              </div>
            </div>

            {/* System status */}
            <div className="shrink-0 w-full sm:w-auto border border-[rgba(143,170,200,0.16)] rounded-xl bg-[rgba(6,14,24,0.95)] p-5 min-w-[210px]">
              <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#4cc9f0] font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ae8af] animate-pulse" />
                System Status
              </p>
              {[
                { label: "Status", value: personal.availability, green: true },
                { label: "Timezone", value: personal.timezone },
                { label: "Response", value: personal.response },
              ].map(({ label, value, green }) => (
                <div key={label} className="flex items-center justify-between gap-4 py-2 border-t border-[rgba(255,255,255,0.05)]">
                  <span className="text-[#a7bbd2] text-xs">{label}</span>
                  <span className={`font-semibold text-xs text-right ${green ? "text-[#7ae8af]" : "text-[#e8f0fb]"}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[rgba(143,170,200,0.1)]">
            {personal.stats.map(({ label, value }, i) => (
              <div key={label} className={`px-8 py-5 text-center ${i < personal.stats.length - 1 ? "border-r border-[rgba(143,170,200,0.1)]" : ""}`}>
                <p className="text-3xl font-extrabold text-[#4cc9f0] font-mono leading-none">{value}</p>
                <p className="text-[0.68rem] text-[#a7bbd2] uppercase tracking-widest mt-1.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Me — typewriter, no heading */}
        <div className="mt-6 section-card">
          <span className="section-label">About Me</span>
          <TypewriterAbout />
        </div>
      </div>
    </section>
  );
}
