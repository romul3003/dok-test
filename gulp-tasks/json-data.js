'use strict'

import {paths} from '../gulpfile.babel'
import gulp from 'gulp'
import path from 'path'
import merge from 'gulp-merge-json'
import browsersync from 'browser-sync'

gulp.task('json-data', () => {
  return gulp.src(paths.data.src)
    .pipe(merge({
      fileName: 'data.json',
      edit: (json, file) => {
        // Extract the filename and strip the extension
        const filename = path.basename(file.path)
        const primaryKey = filename.replace(path.extname(filename), '')

        // Set the filename as the primary key for our JSON data
        const data = {}
        data[primaryKey] = json

        return data
      }
    }))
    .pipe(gulp.dest(paths.data.dist))
    .pipe(browsersync.stream())
})
