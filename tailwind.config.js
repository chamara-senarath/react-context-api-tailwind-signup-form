/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        xl: '1440px',
      },
      colors: {
        primary: {
          red: 'hsl(0, 100%, 74%)',
          green: 'hsl(154, 59%, 51%)',
        },
        accent: {
          blue: 'hsl(248, 32%, 49%)',
        },
        neutral: {
          darkBlue: 'hsl(249, 10%, 26%)',
          grayishBlue: 'hsl(246, 25%, 77%)',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans'],
      },
      fontSize: {
        'body': '16px',
      },
      fontWeight: {
        'body': '400',
        'medium': '500',
        'semi-bold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
}

