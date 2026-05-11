/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        vitalia: {
          cyan: '#01B2F8',
          purple: '#7B2D91',
          yellow: '#FEE209',
          navy: '#180D95',
          dark: '#0a0545', // Darker navy for backgrounds
          darker: '#06032a', // Even darker navy
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
