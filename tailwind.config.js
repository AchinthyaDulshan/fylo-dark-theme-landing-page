/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary

        'Dark-Blue-1': 'hsl(217, 28%, 15%)', //(intro and email sign up background)
        'Dark-Blue-2': 'hsl(218, 28%, 13%)', //(main background)
        'Dark-Blue-3': 'hsl(216, 53%, 9%)', //(footer background)
        'Dark-Blue-4': 'hsl(219, 30%, 18%)', //(testimonials background)

        // ### Accent

        'Cyan': 'hsl(176, 68%, 64%)', // (inside call-to-action gradient)
        'Blue': 'hsl(198, 60%, 50%)', // (inside call-to-action gradient)
        'Light-Red': 'hsl(0, 100%, 63%)', //(error)

        // ### Neutral

        'White': 'hsl(0, 0%, 100%)'
      },
      fontFamily:{
        'body':["Open Sans", 'serif'], // Headings, Call-to-actions, Header Navigation -> Weights: 400, 700
        'heading':["Raleway", 'serif'] // body -> Weights: 400, 700
      },
      backgroundImage:{
        'bg-Mobile':"url('./assets/images/bg-curvy-mobile.svg')",
        'bg-Desktop':"url('./assets/images/bg-curvy-desktop.svg')"
      }
    },
  },
  plugins: [],
}