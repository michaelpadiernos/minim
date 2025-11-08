module.exports = {
  plugins: [
    // Import processors - must be first
    require('postcss-import-ext-glob'),  // Process @import-glob first
    require('postcss-import'),           // Then process regular @import

    // Variable processors
    require('postcss-custom-properties'),
    require('postcss-custom-selectors'),
    require('postcss-css-variables'),

    // Language features
    require('postcss-nesting'),
    require('postcss-mixins'),
    require('@zeecoder/postcss-container-query'),
    require('postcss-preset-env'),

    // Enhancement processors
    require('autoprefixer'),
    require('postcss-brand-colors'),
    require('postcss-color-mod-function'),
    require('postcss-font-magician'),
    require('postcss-fontsize'),

    // Optimization processors - must be last
    require('postcss-lightningcss'),
    require('cssnano')
  ]
}
