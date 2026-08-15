import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-8">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="section-card">
          <span className="section-label">Education</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#e8f0fb] mb-8">
            Academic Background
          </h2>

          <div className="overflow-x-auto rounded-xl border border-[rgba(143,170,200,0.14)]">
            <table className="w-full text-sm" aria-label="Education history">
              <thead>
                <tr className="bg-[rgba(12,25,35,0.9)] border-b border-[rgba(143,170,200,0.12)]">
                  {["Qualification", "Institution / Board", "Year", "Score"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-4 text-[0.68rem] uppercase tracking-[0.1em] text-[#4cc9f0] font-bold whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {education.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[rgba(255,255,255,0.05)] transition-colors hover:bg-[rgba(76,201,240,0.04)] ${
                      i === education.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-5 py-4 text-[#e8f0fb] font-semibold">{row.degree}</td>
                    <td className="px-5 py-4 text-[#a7bbd2]">{row.institution}</td>
                    <td className="px-5 py-4 text-[#a7bbd2] font-mono">{row.year}</td>
                    <td className="px-5 py-4">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-[rgba(76,201,240,0.08)] border border-[rgba(76,201,240,0.16)] text-[#4cc9f0] font-mono font-semibold text-xs">
                        {row.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
