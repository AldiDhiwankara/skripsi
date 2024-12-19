module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E3A8A',
        secondaryRed: '#EF4444',
        lightGray: '#F3F4F6',
        'custom-blue': '#1b557a',
        'custom-dark-blue': '#205e83',
        'custom-pink': '#ec4899',
        'custom-green': '#22c55e',
      },
      backgroundImage: theme => ({
        'login-bg': "url('/img/bg_login.png')",
      }),
      backgroundSize: {
        'half': '50%',
        'three-quarter': '75%',
        'contain': 'contain',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
      };
      addUtilities(newUtilities);
    }
  ],
};
