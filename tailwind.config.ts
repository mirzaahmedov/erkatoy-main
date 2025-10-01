import type { Config } from "tailwindcss";

export default {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f27420",
      },
    },
  },
  plugins: [],
} satisfies Config;
