/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FBF8F3', 100: '#F5EFE6', 200: '#EBE1D2', 300: '#DCCBB2' },
        coffee: {
          300: '#B08968', 400: '#8B5E3C', 500: '#6F4428', 600: '#5A3620',
          700: '#462818', 800: '#2E1A10', 900: '#1C100A',
        },
        sage: { 300: '#B9CFA0', 400: '#9DBB7E', 500: '#7FA05F', 600: '#64824A' },
        gold: { 400: '#D4AF6A', 500: '#C29A4F' },
      },
      fontFamily: {
        script: ['"Kaushan Script"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        steam: {
          '0%': { transform: 'translateY(6px) scaleY(0.9)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(-14px) scaleY(1.1)', opacity: '0' },
        },
        kenburns: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.15)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        steam: 'steam 2.4s ease-out infinite',
        kenburns: 'kenburns 9s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
    },
  },
  plugins: [],
}
