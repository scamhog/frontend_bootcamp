var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');


//series
gulp.series(  
    gulp.task('compress', function (cb) {
        pump([
            gulp.src('src/*.js'),
            uglify(),
            gulp.dest('dist/pokedex.min.js')
        ],
            cb
        );
    })
)