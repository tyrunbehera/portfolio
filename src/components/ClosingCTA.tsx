import { personal } from "@/data/resume";

export default function ClosingCTA() {
  return (
    <section className="py-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div
          className="relative rounded-2xl overflow-hidden border border-[rgba(76,201,240,0.22)] p-10 md:p-14 text-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(76,201,240,0.12) 0%, rgba(8,16,30,0.95) 65%), radial-gradient(ellipse at 80% 100%, rgba(124,232,212,0.07) 0%, transparent 55%)",
          }}
        >
          {/* Top shimmer */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg,transparent 0%,rgba(76,201,240,0.7) 35%,rgba(124,232,212,0.7) 65%,transparent 100%)",
            }}
          />

          {/* Quote mark */}
          <p className="text-[5rem] leading-none text-[rgba(76,201,240,0.12)] font-serif select-none mb-2">
            &ldquo;
          </p>

          {/* Main message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#e2ecf8] leading-tight mb-5 max-w-3xl mx-auto tracking-tight">
            I will be your{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #4cc9f0 0%, #7ce8d4 50%, #7ae8af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              better choice.
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-[#a7bbd2] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you need to ship faster, cut cloud costs, harden your security posture, or build
            a platform that&apos;s ready to scale — I bring 4+ years of real-world DevOps experience,
            proven results, and full ownership from day one.
          </p>

          {/* Key proof points */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "40% Cloud Cost Reduction",
              "30% Faster Deployments",
              "99.9% Uptime",
              "4+ Years Experience",
              "AWS · Kubernetes · Terraform",
            ].map((point) => (
              <span
                key={point}
                className="px-4 py-1.5 rounded-full border border-[rgba(76,201,240,0.22)] bg-[rgba(76,201,240,0.07)] text-[#7ce8d4] text-xs font-semibold tracking-wide"
              >
                {point}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#4cc9f0] text-[#020c1b] font-extrabold text-sm hover:bg-[#38b8de] transition-colors shadow-[0_6px_28px_rgba(76,201,240,0.35)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#020c1b] opacity-60" />
              Let&apos;s Talk — {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[rgba(76,201,240,0.3)] text-[#4cc9f0] font-bold text-sm hover:bg-[rgba(76,201,240,0.1)] transition-colors"
            >
              Connect on LinkedIn ↗
            </a>
          </div>

          {/* Bottom quote close */}
          <p className="text-[5rem] leading-none text-[rgba(76,201,240,0.12)] font-serif select-none mt-2 rotate-180 inline-block">
            &rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
