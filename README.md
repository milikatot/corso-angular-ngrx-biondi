# NgrxDemo

link corso https://www.learnbydo.ing/courses/angular/ngrx-book

## Tailwind
### Installazione 
```
npm install -D tailwindcss@3.4.4 postcss@8.4.39 autoprefixer@10.4.19
```

### Configurazione 
```
npx tailwindcss init
```

nel tailwind.config.ts

```
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
```

Nello styles.css aggiungere 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Daisy UI
è un bootstrap per tailwind https://daisyui.com
```
npm i -D daisyui@latest
```

nel tailwind.config.js aggiungere

```

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
```

## Ngrx
### Installazione 
```
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest @ngrx/effects
```


