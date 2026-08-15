import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "#020c1b",
          2: "#0a1628",
          3: "#0d1f3c",
        },
        accent: {
          DEFAULT: "#4cc9f0",
          teal: "#7ce8d4",
          green: "#7ae8af",
          orange: "#ff9d5c",
        },
        muted: "#a7bbd2",
        panel: "rgba(9,18,28,0.88)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderColor: {
        subtle: "rgba(143,170,200,0.18)",
      },
      boxShadow: {
        card: "0 24px 52px rgba(0,0,0,0.42)",
      },
    },
  },
  plugins: [],
};

export default config;
