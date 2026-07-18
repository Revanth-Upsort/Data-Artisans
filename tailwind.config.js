/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial Charcoal palette
        ink: '#1B2430', // charcoal — nav, hero bg, primary text on light
        paper: {
          DEFAULT: '#F7F5F0', // off-white page background
          dim: '#EAE6DC', // secondary card background on light sections
        },
        fg: {
          'on-ink': '#F7F5F0', // text on charcoal
          muted: '#B7BBC2', // secondary text on charcoal
        },
        accent: {
          DEFAULT: '#D8823A', // amber-orange — the ONLY accent color
          hover: '#C26F2C',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        // fluid hero + section scales
        hero: ['clamp(1.75rem, 1.1rem + 3vw, 3.5rem)', { lineHeight: '1.1' }],
        section: ['clamp(1.5rem, 1.2rem + 1.4vw, 2rem)', { lineHeight: '1.15' }],
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(27, 36, 48, 0.06)',
        lift: '0 8px 24px rgba(27, 36, 48, 0.10)',
      },
      maxWidth: {
        content: '72rem', // 1152px main container
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
