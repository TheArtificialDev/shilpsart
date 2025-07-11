/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Super Bright Magenta & Cyan Brand Colors - Eye-Catching & Playful
        'magenta': {
          DEFAULT: '#FF0080',
          light: '#FF69B4',
        },
        'cyan': {
          DEFAULT: '#00FFFF',
          light: '#40E0D0',
        },
        'pink': {
          DEFAULT: '#FF1493',
          light: '#FFB6C1',
        },
        'neon-blue': {
          DEFAULT: '#00BFFF',
          light: '#87CEEB',
        },
        'lime': {
          DEFAULT: '#00FF00',
          light: '#7FFF00',
        },
        'purple': {
          DEFAULT: '#8A2BE2',
          light: '#DA70D6',
        },
        'orange': {
          DEFAULT: '#FF4500',
          light: '#FF6347',
        },
        'gold': {
          DEFAULT: '#FFD700',
          light: '#FFFF00',
        },
        'charcoal': '#4A4A4A',
        'cream': '#F5F1E8',
      },
      fontFamily: {
        'fredoka': ['var(--font-fredoka)', 'cursive'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'caveat': ['var(--font-caveat)', 'cursive'],
      },
      animation: {
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'color-explosion': 'colorExplosion 2s ease-in-out infinite',
        'bounce-3d': 'bounce3d 2s ease-in-out infinite',
        'pulse-1': 'pulse 2s ease-in-out infinite',
        'pulse-2': 'pulse 2s ease-in-out infinite 0.2s',
        'pulse-3': 'pulse 2s ease-in-out infinite 0.4s',
        'pulse-4': 'pulse 2s ease-in-out infinite 0.6s',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        colorExplosion: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce3d: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
