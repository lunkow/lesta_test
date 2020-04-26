'use strict';
var gulp = require('gulp');
/* Первым делом подключим gulp. require указывает, что надо проверить папку node_modules и найти там папку gulp.
Если такая имеется, то ее содержимое записывается в переменную gulp.*/

var sass = require('gulp-sass');
// Затем подключим наш плагин

var rename = require('gulp-rename');


gulp.task('sass', function () {
    return gulp.src('./src/scss/base.scss')// путь к файлам-исходникам
        .pipe(sass().on('error', sass.logError))// название плагина, через который прогоняем их
        .pipe(rename('main.css')) //переименуем собранный scss в main.css
        .pipe(gulp.dest('public/css'));// путь к папке, куда помещаем конечные файлы
});


gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    console.log('Watching scss..');
});

// Запустим в командной строке gulp watch.
// Он запустится, но потом зависнет и будет ждать отслеживаемых изменений в файле.

//// https://medium.com/@mariiasukhareva/первое-знакомство-с-gulp-устанавливаем-и-пишем-задачу-b6cafc4601a9



// ЕЩЁ
//browser sync