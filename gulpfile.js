
const {src, dest, series, watch} = require('gulp')
const pug = require('gulp-pug')
const htmlMin = require('gulp-html-minifier')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const jsMin = require('gulp-minify')
const del = require('del')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()


function compilePugToHtml() {
    return src('src/pug/index.pug').pipe(pug({
        pretty: true
    }))
    .pipe(dest('dist'))
}

function compileScssToCss() {
    return src('src/scss/**.scss')
    .pipe(sass({}))
    .pipe(autoprefixer({}))
    .pipe(dest('dist'))
}

function js() {
    return src('src/js/**.js')
    .pipe(dest('dist'))
}

function images() {
    return src('src/img/**.png')
    .pipe(dest('dist/img'))
}

function minifyHtml() {
    return src('dist/**.html').pipe(htmlMin({
        collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function minifyCss() {
    return src('dist/**.css').pipe(csso())
    .pipe(dest('dist'))
}

function minifyJs() {
    return src('src/js/**.js')
    .pipe(jsMin())
    .pipe(dest('dist'))
}

function clear() {
    return del('dist')
}

function serve() {
    sync.init({
        server: './dist'
    })

    watch('src/pug/**.pug', series(compilePugToHtml)).on('change', sync.reload)
    watch('src/scss/**.scss', series(compileScssToCss)).on('change', sync.reload)
    watch('src/js/**.js', series(js)).on('change', sync.reload)
}

exports.build = series(clear, images, compileScssToCss, minifyCss, compilePugToHtml, minifyHtml, minifyJs)
exports.serve = series(clear, images, compileScssToCss, compilePugToHtml, js, serve)
exports.clear = clear