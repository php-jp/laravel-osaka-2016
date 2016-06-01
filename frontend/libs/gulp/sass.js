"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var bourbon = require("node-bourbon");
var neat = require("node-neat");

var path;
/**
 * SCSS with bourbon neat
 * npm i gulp-sass node-bourbon node-neat --save
 */
class Sass{
    constructor(path){
        this.path = path;
        this.target = [
            `${this.path.src}assets/scss/**/*.scss`
        ]
    }

    bourbon(path){
        gulp
            .src([
                `${path.src}assets/scss/**/*.scss`,
                `!${path.src}assets/scss/**/_*`,
            ])
            .pipe($.plumber({
                errorHandler: $.notify.onError('<%= error.message %>')
            }))
            .pipe($.sass({
                sourceMap: true,
                includePaths: bourbon.with(neat.includePaths)
            }))
            .pipe(gulp.dest(`${path.dist}assets/css/`));
    }

    watch(tasks){
        gulp.watch([
            ],tasks)
    }
}

module.exports = function(path){
    return new Sass(path);
};
