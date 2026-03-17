/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        'signal-orange': '#FF5A00',
        'steel-blue': '#2B4F6E',
        'warm-copper': '#B87333',
        'anthrazit': '#1A1A1A',
        'off-white': '#F8F8F8',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dachdecker: {
          primary: '#FF5A00',
          secondary: '#2B4F6E',
          accent: '#B87333',
          neutral: '#1A1A1A',
          'base-100': '#F8F8F8',
          'base-content': '#1A1A1A',
        },
      },
    ],
    darkTheme: 'dachdecker',
    logs: false,
  },
};
