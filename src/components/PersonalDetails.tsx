import { personal } from "@/data/resume";

export default function PersonalDetails() {
  return (
    <section className="py-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="section-card">
          <span className="section-label">Personal Details</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e8f0fb] mb-8">
            A Bit More About Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Date of Birth", value: personal.dob },
              { label: "Phone", value: personal.phone },
              { label: "Email", value: personal.email },
              { label: "Languages", value: personal.languages.join(", ") },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-[rgba(143,170,200,0.13)] bg-[rgba(10,18,28,0.7)] p-4 hover:border-[rgba(76,201,240,0.2)] transition-colors"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[#4cc9f0] font-bold mb-1.5">
                  {label}
                </p>
                <p className="text-[#e8f0fb] text-sm font-medium leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
