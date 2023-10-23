/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dotIndicator: {
          "0%": { transform: 'translateY(0)', backgroundColor: 'transparent'},
          '50%': { transform: 'translateY(-10px)', backgroundColor: 'blue'},
          "100%": { transform: "translateY(0)", backgroundColor: 'transparent' },
        },
      },
    },
    animation: {
      dotIndicator: "dotIndicator 1s ease-in-out",
    },
  
  },
  plugins: [require("rippleui")],
}

