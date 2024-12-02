import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monospace: 'monospace'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white1: '#fafafa',
        gray0: '#fafafa',
        gray1: '#f2f2f2'
      },
    },
  },
  plugins: [],
} satisfies Config;
