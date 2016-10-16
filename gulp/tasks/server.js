var gulp = require('gulp');
// var uglify = require('gulp-uglify'); //js代码压缩
var config = require('../config').server;
var handleErrors = require('../util/handleErrors');
// var handleErrors = require('../util/convertToUtf8');
// var utf8Convert = require('gulp-utf8-convert');
    
gulp.task('server', function(){
    return gulp.src(config.src, {base: './src'})
    .pipe(gulp.dest(config.dest));   //输出目录
});