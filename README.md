

emulator -avd Pixel_4_API_28

mix-compile 
    src/main.js         - copy ->       public/js/app.js
    src/main.scss       - copy ->       public/css/app.css
    src/index.html      - copy ->       public/index.html
    src/assets/         - copy ->       public/assets/index.html
        androidjs.js


androidjs build
    public/             - cmpl ->       dist/


adb install
    dist/               - inst ->       $device


