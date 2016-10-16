var gulp = require('gulp');
// var uglify = require('gulp-uglify'); //js代码压缩
var config = require('../config').plugins;
var handleErrors = require('../util/handleErrors');
// var handleErrors = require('../util/convertToUtf8');
// var utf8Convert = require('gulp-utf8-convert');
    
gulp.task('plugins', function(){
    return gulp.src(config.src, {base: './src'})
    .pipe(gulp.dest(config.dest));   //输出目录
});