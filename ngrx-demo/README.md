# NgrxDemo

link corso https://www.learnbydo.ing/courses/angular/ngrx-book

## Tailwind
Installazione 
npm install -D tailwindcss@3.4.4 postcss@8.4.39 autoprefixer@10.4.19

configurazione 
npx tailwindcss init

nel tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

