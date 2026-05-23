import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────────────────────
// Tailwind v4: Most theme customization has moved to CSS @theme
// in app/globals.css. This file only needs to specify content
// paths for class scanning.
// ─────────────────────────────────────────────────────────────
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Also covers projects without the src/ folder:
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config