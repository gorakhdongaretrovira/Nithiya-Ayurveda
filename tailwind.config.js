/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5344",      // deep forest green - premium
        secondary: "#FAF8F3",    // luxury cream - premium
        accent: "#D4AF37",       // luxury gold
        dark: "#1A2E28",         // deep charcoal-green
        "premium-bronze": "#8B6F47",
        "premium-terracotta": "#A0614A",
        "premium-sage": "#4A6B53",
        "premium-cream": "#F5F1E8",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      fontSize: {
        // Hero & Large Headings
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        // Body text
        'base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};