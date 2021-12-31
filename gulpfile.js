const { src, dest, parallel, watch } = require("gulp");
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const notify = require("gulp-notify");
const purgecss = require("gulp-purgecss");
const plumber = require("gulp-plumber");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

const jsSRC = "main.js";
const jsFOLDER = "src/js/";
const jsFILES = [jsSRC];

const autoprefixBrowsers = [
  "> 1%",
  "last 2 versions",
  "firefox >= 4",
  "safari 7",
  "safari 8",
  "IE 8",
  "IE 9",
  "IE 10",
  "IE 11"
];

const onError = function (err) {
  notify.onError({
    title: "Error",
    message: err.message,
    sound: "Beep"
  })(err);
  this.emit("end");
};

function css() {
  return src("src/sass/main.scss")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: autoprefixBrowsers
      })
    )
    .pipe(minifyCSS())
    .pipe(
      purgecss({
        content: ["./**/*.html"]
      })
    )
    .pipe(dest("css"));
}

function js(done) {
  jsFILES.map(function (entry) {
    return browserify({
      entries: [jsFOLDER + entry]
    })
      .transform(babelify, { presets: ["@babel/env"] })
      .bundle()
      .on("error", onError)
      .pipe(source(entry))
      .pipe(buffer())
      .pipe(dest("js"));
  });
  done();
}

function watchFiles() {
  watch("src/js/**/*.js", js);
  watch("src/sass/**/*.scss", css);
  watch("templates/**/**/*.html.twig", css, js);
}

exports.css = css;
exports.js = js;
exports.default = parallel(css, js, watchFiles);