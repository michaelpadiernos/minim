const { emitWarning } = process;

process.emitWarning =
  (warning, type, code, ...extraArgs) =>
    code !== 'DEP0180' && emitWarning(warning, type, code, ...extraArgs);

import { src, dest, series, task, watch } from 'gulp'

//import fs from 'fs'

import { transform } from 'lightningcss'

// gulpjs modules
import gulp_maps from 'gulp-sourcemaps'
import gulp_pc from 'gulp-postcss'
import gulp_rename from 'gulp-rename'
import gulp_uglify from 'gulp-uglify'

// postcss modules
import postcss_autoprefixer from 'autoprefixer'
import postcss_brands from 'postcss-brand-colors'
import postcss_colors from 'postcss-color-mod-function'
import postcss_cssnano from 'cssnano'
import postcss_custom_p from 'postcss-custom-properties'
import postcss_custom_s from 'postcss-custom-selectors'
import postcss_font_magician from 'postcss-font-magician'
import postcss_fontsize from 'postcss-fontsize'
import postcss_glob from 'postcss-import-ext-glob'
import postcss_imports from 'postcss-import'
import postcss_lightningcss from 'postcss-lightningcss'
import postcss_mixins from 'postcss-mixins'
import postcss_nesting from 'postcss-nesting'
import postcss_presets from 'postcss-preset-env'
import postcss_variables from 'postcss-css-variables'

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

  const processors = [
    postcss_autoprefixer,
    postcss_brands,
    postcss_colors,
    postcss_cssnano,
    postcss_custom_p,
    postcss_custom_s,
    postcss_font_magician,
    postcss_fontsize,
    postcss_glob,
    postcss_imports,
    postcss_lightningcss,
    postcss_mixins,
    postcss_nesting,
    postcss_presets,
    postcss_variables
  ]
  return src(path.styles.src)
    .pipe(gulp_maps.init())
    .pipe(gulp_pc(processors))
    .pipe(gulp_rename('minim.theme.css'))
    .pipe(gulp_maps.write('./'))
    .pipe(dest(path.styles.dest))
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

task('watch', () => {
  watch('./source/**/*.css', styles)
  watch('./source/**/*.js', scripts)
});

task('run', series(styles, scripts))

task('default', series(['run'], ['watch']))
