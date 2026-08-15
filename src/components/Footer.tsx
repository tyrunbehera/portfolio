"use client";

import { useInView } from "@/hooks/useInView";

export default function Footer() {
  const { ref, inView } = useInView(0.5);

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="border-t border-[rgba(143,170,200,0.08)] py-16"
    >
      <div className="max-w-[1220px] mx-auto px-6 flex justify-center">
        <p
          className={`text-2xl md:text-4xl font-extrabold tracking-tight text-center leading-tight ${inView ? "anim-rise" : "opacity-0 translate-y-10"}`}
          style={{
            background: "linear-gradient(135deg, #4cc9f0 0%, #7ce8d4 50%, #7ae8af 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            willChange: "transform, opacity",
          }}
        >
          I will be your better choice.
        </p>
      </div>
    </footer>
  );
}
