/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1abc9c',
        secondary: '#2c3e50',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};