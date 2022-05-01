
mix.js('src/main.js', 'public/assets/js')
  .scss('src/css/app.css', 'public/assets/css')
  .sourceMaps()
  .vue();

/*
  .postCss('resources/css/app.css', 'public/assets/css', [
      require('tailwindcss'),
  ]); /**/