/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },

      'xl': { 'max': '1279px' },

      '2lg': { 'max': '1199px' },

      'lg': { 'max': '991px' },

      'md': { 'max': '767px' },

      'sm': { 'max': '500px' },
    },
  },
  plugins: [],
}
