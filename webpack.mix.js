let mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss');
require('mix-html-builder');

mix.js('src/app.js', 'public/assets').sass('src/app.scss', 'public/assets')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .copyDirectory('src/assets', 'public/assets')
    .html({
        htmlRoot: './src/index.html',
        output: 'public',
        partialRoot: './src/partials',    // default partial path
        layoutRoot: './src/layouts',    // default partial path
        minify: false
    })
    .purgeCss({
        enabled: mix.inProduction(),
        folders: ['public'],
        extensions: ['html', 'js', 'php', 'vue'],
    });