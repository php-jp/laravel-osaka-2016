"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var bourbon = require("node-bourbon");
var neat = require("node-neat");

/**
 * SCSS with bourbon neat
 * npm i gulp-jade node-bourbon node-neat --save
 */
class Jade{
    constructor(path){
        this.path = path;
        this.target = [
            `${this.path.src}assets/tmpl/**/*.jade`,
        ]
    }

    build(path,options){
        options = Object.assign({},{
            locals:{
                sessions: require("../../assets/data/sessions.js")
            },
            pretty:true
        },options);

        gulp.src([
            `${path.src}assets/tmpl/**/*.jade`,
            `!${path.src}assets/tmpl/**/_*`,
        ])
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.jade(options))
        .pipe(gulp.dest(`${path.dist}/`));
    }

    watch(tasks){
        gulp.watch([
        ],tasks)
    }
}

module.exports = function(path){
    return new Jade(path);
};
