/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        'animate-first': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'animate-second': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'animate-third': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'animate-fourth': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'glowing-text': {
          '0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%': {
            color: '#0e3742',
            textShadow: 'none',
          },
          '18.1%,20.1%,30%,50%,60.1%,80%,90%,92.1%,100%': {
            color: '#fff',
            textShadow:
              '0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4, 0 0 160px #03bcf4',
          },
        },
      },
      animation: {
        first: 'animate-first 2s linear infinite',
        second: 'animate-second 2s linear 1s infinite',
        third: 'animate-third 2s linear  infinite',
        fourth: 'animate-fourth 2s linear 1s infinite',
        'text-glow': 'glowing-text 5s linear infinite',
      },
      colors: {
        'neon-blue': '#03bcf4',
      },
    },
  },
  plugins: [],
};
