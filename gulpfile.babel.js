'use strict'

import gulp from 'gulp'

const requireDir = require('require-dir'),
  paths = {
    views: {
      src: [
        './src/views/index.pug',
        './src/views/pages/*.pug'
      ],
      dist: './build/',
      watch: [
        './src/blocks/**/*.pug',
        './src/views/**/*.pug'
      ]
    },
    data: {
      src: './src/data/**/*.json',
      dist: './temp',
      watch: './src/data/**/*.json',
    },
    styles: {
      src: './src/styles/main.{scss,sass}',
      dist: './build/styles/',
      watch: [
        './src/blocks/**/*.{scss,sass}',
        './src/styles/**/*.{scss,sass}'
      ]
    },
    scripts: {
      src: './src/js/index.js',
      dist: './build/js/',
      watch: [
        './src/blocks/**/*.js',
        './src/js/**/*.js'
      ]
    },
    images: {
      src: [
        './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
        '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
      ],
      dist: './build/img/',
      watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}'
    },
    webp: {
      src: [
        './src/img/**/*.{jpg,jpeg,png,tiff}',
        '!./src/img/favicon/*.{jpg,jpeg,png,gif}'
      ],
      dist: './build/img/',
      watch: [
        './src/img/**/*.{jpg,jpeg,png,tiff}',
        '!./src/img/favicon.{jpg,jpeg,png,gif}'
      ]
    },
    sprites: {
      src: './src/img/svg/*.svg',
      dist: './build/img/sprites/',
      watch: './src/img/svg/*.svg'
    },
    fonts: {
      src: './src/fonts/**/*.{woff,woff2}',
      dist: './build/fonts/',
      watch: './src/fonts/**/*.{woff,woff2}'
    },
    favicons: {
      src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      dist: './build/img/favicons/',
    },
    gzip: {
      src: './src/.htaccess',
      dist: './build/'
    }
  }

requireDir('./gulp-tasks/')

export { paths }

export const development = gulp.series('clean', 'smart-grid', 'json-data',
  gulp.parallel(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'favicons']),
  gulp.parallel('serve'))

export const prod = gulp.series('clean', 'json-data',
  gulp.series(['views', 'styles', 'scripts', 'images', 'webp', 'sprites', 'fonts', 'favicons', 'gzip']))

export default development
