/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'red':'hsl(1, 90%, 64%)',
        'blue':'hsl(219, 85%, 26%)',
        'vlGreyBlue':' hsl(210, 60%, 98%)',
        'GreyBlueT':'hsl(205, 33%, 90%)',
        'GreyBlueO':' hsl(211, 68%, 94%)',
        'GreyishBlue':'hsl(219, 14%, 63%)',
        'darkGreyishBlue':'hsl(219, 12%, 42%)',
        'vdBlue':'hsl(224, 21%, 14%)',
        'white':'hsl(0, 0%, 100%)'
      },
      fontFamily:{
        SansExtraBold:'SansExtraBold',
        SansMed:'SansMed'
      }
    },
  },
  plugins: [],
}

