"use client";

import { useEffect, useRef } from "react";

// One palette per section — navy → indigo → teal → violet → indigo → teal
const SECTION_PALETTES = [
  // about — deep navy blue
  { stop1: "#020c1b", stop2: "#061526", stop3: "#0b1d38", orb1: "#1a6bbf", orb2: "#0e9fc4" },
  // skills — indigo blue
  { stop1: "#03091a", stop2: "#07112b", stop3: "#0d1a42", orb1: "#2a3dbf", orb2: "#1a4fc4" },
  // experience — dark teal navy
  { stop1: "#021018", stop2: "#051a26", stop3: "#082438", orb1: "#0e7a8a", orb2: "#0e6fc4" },
  // certifications — deep violet navy
  { stop1: "#060918", stop2: "#0c0f2a", stop3: "#10153c", orb1: "#3a1abf", orb2: "#5a1abf" },
  // education — indigo (repeat)
  { stop1: "#03091a", stop2: "#07112b", stop3: "#0d1a42", orb1: "#2a3dbf", orb2: "#1a4fc4" },
  // contact — teal (repeat)
  { stop1: "#021018", stop2: "#051a26", stop3: "#082438", orb1: "#0e7a8a", orb2: "#0e6fc4" },
];

const SECTIONS = ["about", "skills", "experience", "certifications", "education", "contact"];

export default function ScrollBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const currentIdx = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const lerp = (a: string, b: string, t: number) => {
      // parse hex to rgb
      const parse = (hex: string) => {
        const n = parseInt(hex.slice(1), 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      };
      const ca = parse(a);
      const cb = parse(b);
      const r = Math.round(ca[0] + (cb[0] - ca[0]) * t);
      const g = Math.round(ca[1] + (cb[1] - ca[1]) * t);
      const bv = Math.round(ca[2] + (cb[2] - ca[2]) * t);
      return `#${((1 << 24) | (r << 16) | (g << 8) | bv).toString(16).slice(1)}`;
    };

    let targetIdx = 0;
    let progress = 0; // 0–1 within current section

    const onScroll = () => {
      const windowH = window.innerHeight;
      let found = SECTIONS.length - 1;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i]);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowH * 0.4) {
          found = i;
        }
      }

      // compute progress within the current section
      const el = document.getElementById(SECTIONS[found]);
      if (el) {
        const rect = el.getBoundingClientRect();
        const sectionH = el.offsetHeight;
        progress = Math.max(0, Math.min(1, (-rect.top) / Math.max(sectionH - windowH, 1)));
      }

      targetIdx = found;
    };

    const animate = () => {
      currentIdx.current += (targetIdx - currentIdx.current) * 0.06;
      const idx = currentIdx.current;
      const lo = Math.floor(idx);
      const hi = Math.min(lo + 1, SECTION_PALETTES.length - 1);
      const t = idx - lo;
      const pal = {
        stop1: lerp(SECTION_PALETTES[lo].stop1, SECTION_PALETTES[hi].stop1, t),
        stop2: lerp(SECTION_PALETTES[lo].stop2, SECTION_PALETTES[hi].stop2, t),
        stop3: lerp(SECTION_PALETTES[lo].stop3, SECTION_PALETTES[hi].stop3, t),
        orb1:  lerp(SECTION_PALETTES[lo].orb1,  SECTION_PALETTES[hi].orb1,  t),
        orb2:  lerp(SECTION_PALETTES[lo].orb2,  SECTION_PALETTES[hi].orb2,  t),
      };

      if (bgRef.current) {
        bgRef.current.style.background = `linear-gradient(160deg, ${pal.stop1} 0%, ${pal.stop2} 35%, ${pal.stop3} 65%, ${pal.stop1} 100%)`;
      }
      if (orb1Ref.current) {
        orb1Ref.current.style.background = `radial-gradient(circle, ${pal.orb1} 0%, transparent 70%)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.background = `radial-gradient(circle, ${pal.orb2} 0%, transparent 70%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main gradient background */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="fixed inset-0 -z-10 transition-none"
        style={{
          background: "linear-gradient(160deg, #020c1b 0%, #061526 35%, #0b1d38 65%, #020c1b 100%)",
        }}
      />

      {/* Orb layer */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Primary orb — top left, shifts with palette */}
        <div
          ref={orb1Ref}
          className="absolute w-[650px] h-[650px] rounded-full opacity-[0.14]"
          style={{
            top: "-12%",
            left: "-8%",
            background: "radial-gradient(circle, #1a6bbf 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Secondary orb — top right */}
        <div
          ref={orb2Ref}
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.1]"
          style={{
            top: "8%",
            right: "-5%",
            background: "radial-gradient(circle, #0e9fc4 0%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />
        {/* Static subtle bottom orb */}
        <div
          className="absolute w-[500px] h-[300px] rounded-full opacity-[0.07]"
          style={{
            bottom: "-5%",
            left: "25%",
            background: "radial-gradient(circle, #1050a8 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>
    </>
  );
}
