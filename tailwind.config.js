/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:      '#FDFAF4',
        'cream-d':  '#F5EFE0',
        blush:      '#F2C4CE',
        'blush-l':  '#FBE8ED',
        'blush-d':  '#E8A0B4',
        rose:       '#A0526A',
        'rose-d':   '#7A3050',
        dusty:      '#C48A9A',
        gold:       '#C9A05A',
        'gold-l':   '#E8C880',
        'gold-p':   '#F5E6C0',
        sage:       '#4A6741',
        'sage-l':   '#7A9B6E',
        'sage-p':   '#D4E4CF',
        dark:       '#2B1A2A',
        'dark-m':   '#4A2A3A',
        ink:        '#3D2535',
        'ink-l':    '#7A5A6A',
      },
      fontFamily: {
        script:  ['"Great Vibes"', 'cursive'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Jost"', 'sans-serif'],
      },
      animation: {
        'petal-fall': 'petalFall 7s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'fade-up':  'fadeUp 0.8s ease both',
        'scale-in': 'scaleIn 0.8s ease both',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
      },
      keyframes: {
        petalFall: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '0.6' },
          '80%':  { opacity: '0.4' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        dotPulse: {
          '0%':   { boxShadow: '0 0 0 0 rgba(201,160,90,0.5)' },
          '70%':  { boxShadow: '0 0 0 10px rgba(201,160,90,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201,160,90,0)' },
        },
      },
      backgroundImage: {
        'dark-grad':  'linear-gradient(145deg, #2B1A2A 0%, #4A2A3A 40%, #1E1014 100%)',
        'gold-grad':  'linear-gradient(160deg, #E8C880, #C9A05A)',
        'rose-grad':  'linear-gradient(135deg, #A0526A, #7A3050)',
        'cream-grad': 'linear-gradient(135deg, #FDFAF4, #F5EFE0)',
      },
    },
  },
  plugins: [],
}