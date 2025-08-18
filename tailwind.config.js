/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1150px', // change the value of lg to 1150px
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      // New Prism Lab color palette
      'primary': '#2622B2', // Deep Indigo - Primary headers, anchors
      'primary-light': '#5955EB', // Bright Violet - CTA buttons, highlights
      'primary-lighter': '#E7E0FF', // Soft Lavender - Cards, sidebars, subtle accents
      'secondary': '#E7E0FF', // Soft Lavender
      'tertiary': '#FBFAFF', // Porcelain White - Backgrounds, whitespace
      // Legacy colors for compatibility
      'blue': '#5955EB', // Bright Violet
      'lightblue': '#E7E0FF', // Soft Lavender
      'darkpurple': '#2622B2', // Deep Indigo
      'lightgrey': '#FBFAFF', // Porcelain White
      'navyblue': '#49495A', // Charcoal Gray
      'darkblue': '#2622B2', // Deep Indigo
      'offwhite': 'rgba(255, 255, 255, 0.75)',
      'lightblack': '#49495A', // Charcoal Gray
      'bluish' : '#5955EB', // Bright Violet
      'testColor' : 'rgba(54, 54, 54, 0.75)',
      'grey': '#49495A', // Charcoal Gray - Body text
      'bgblue' : '#5955EB', // Bright Violet
      'darkgrey' : '#49495A', // Charcoal Gray
      'faqblue' : '#FBFAFF', // Porcelain White
      'gold' : '#FAAF38',
      'hoblue': '#2622B2', // Deep Indigo
      'btnblue' : "#5955EB", // Bright Violet
      'bggrey' : '#FBFAFF', // Porcelain White
      'footer' : 'rgba(226, 223, 223, 0.75)',
      'linegrey' : "#E7E0FF" // Soft Lavender
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '65xl': ['65px', { lineHeight: '1' }],
      '80xl': ['80px', { lineHeight: '6rem' }],
    },
    extend: {},
  },
  plugins: [],
}
