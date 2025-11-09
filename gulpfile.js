/// <reference path="./types/gulpfile.d.ts" />

const { emitWarning } = process;

process.emitWarning =
  (warning, type, code, ...extraArgs) =>
    code !== 'DEP0180' && emitWarning(warning, type, code, ...extraArgs);

import gulp, { src, dest, series, watch } from 'gulp'

//import fs from 'fs'

// gulp.js modules
import gulp_pc                from 'gulp-postcss'
import gulp_rename            from 'gulp-rename'
import gulp_uglify            from 'gulp-uglify'

// postcss modules (only used ones)
import postcss_brands         from 'postcss-brand-colors'
import postcss_container      from '@zeecoder/postcss-container-query'
import postcss_fontsize       from 'postcss-fontsize'
import postcss_glob           from 'postcss-import-ext-glob'
import postcss_imports        from 'postcss-import'
import postcss_lightningcss   from 'postcss-lightningcss'
import postcss_mixins         from 'postcss-mixins'
import postcss_nesting        from 'postcss-nesting'

const path = {
  styles: {
    src: './source/minim.source.css',
    dest: './assets/css/'
  },
  scripts: {
    src: './source/minim.source.js',
    dest: './assets/js/'
  }
}

function styles() {

  // Optimized processor pipeline - Lightning CSS handles most transformations
  const processors = [
    // Modules without configuration - processed first
    postcss_glob,             // Process @import-glob first
    postcss_imports,          // Then process regular @import
    postcss_mixins,           // Mixin processing
    postcss_brands,           // Brand color processing

    // Modules with configuration - processed after simple modules
    // CSS nesting with modern pseudo-selector support
    postcss_nesting({
      noIsPseudoSelector: false,
      preserveEmpty: true
    }),

    // Container query support - transforms @container rules
    postcss_container({
      // Enable support for container names and types
      unitPrecision: 3,
      // Custom property fallbacks for unsupported browsers
      useCustomProperties: true
    }),

    // Responsive font sizing with rem/px fallbacks
    postcss_fontsize({
      baseFontSize: 16,
      minFontSize: 12,
      maxFontSize: 72,
      defaultUnit: 'rem',
      unitPrecision: 3,
      fallback: true,
      fallbackUnit: 'px'
    }),

    // Modern CSS optimization with minification
    postcss_lightningcss({
      minify: true,
      sourceMap: true,
      targets: {
        chrome: 90,
        firefox: 88,
        safari: 14,
        edge: 90,
        ios_saf: 14,
        android: 90
      },
      include: [
        'custom-media-queries',
        'media-query-ranges',
        'logical-properties',
        'dir-pseudo-class',
        'lang-pseudo-class',
        'is-pseudo-class',
        'where-pseudo-class',
        'focus-visible-pseudo-class',
        'focus-within-pseudo-class',
        'any-link-pseudo-class',
        'color-function',
        'space-separated-color-notation',
        'hex-alpha-notation',
        'rebeccapurple',
        'hwb-function',
        'lab-function',
        'lch-function',
        'oklab-function',
        'oklch-function',
        'color-mix-function'
      ],
      exclude: [
        'css-modules'
      ],
      cssModules: false,
      analyzeDependencies: true,
      errorRecovery: true
    })
  ]

  return src(path.styles.src, { sourcemaps: true })
    .pipe(gulp_pc(processors))
    .pipe(gulp_rename('minim.theme.css'))
    .pipe(dest(path.styles.dest, { sourcemaps: '.' }))
}

function scripts() {
  return src(path.scripts.src)
    .pipe(gulp_uglify({
      mangle: {
        toplevel: true
      }
    }))
    .pipe(gulp_rename('minim.theme.js'))
    .pipe(dest(path.scripts.dest))
}

// Individual tasks
gulp.task('styles', styles)
gulp.task('scripts', scripts)

// Build tasks (one-time execution)
gulp.task('build', series(styles, scripts))

// Watch tasks (continuous execution)
gulp.task('watch-styles', () => {
  return watch('./source/**/*.css', styles)
})

gulp.task('watch-scripts', () => {
  return watch('./source/**/*.js', scripts)
})

gulp.task('watch', () => {
  watch('./source/**/*.css', styles)
  watch('./source/**/*.js', scripts)
})

// Default task (build + watch)
gulp.task('default', series('build', 'watch'))
