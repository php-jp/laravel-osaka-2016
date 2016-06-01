"use strict"
/**
 * common installers
 * npm i gulp gulp-load-plugins gulp-plumber gulp-notify run-sequence --save
 */
var gulp = require("gulp");
var runSequence = require("run-sequence");

var src = "./frontend/";
if(process.env.APP_MODE=="build"){
    var dist = "./build/";
}else{
    var dist = "./public/";
}

var path = {src,dist}

var tasks = require("./frontend/libs/gulp/gulp-tasks.js")(path);

gulp.task("sass",()=>{
    tasks.sass().bourbon(path)
});
gulp.task("watch:sass",()=>{
    gulp.watch(tasks.sass().target,["sass"])
});

gulp.task("jade",()=>{
    tasks.jade().build(path,{})
});
gulp.task("watch:jade",()=> {
    gulp.watch(tasks.jade().target, ["jade"])
});

//gulp.task("webpack",tasks.webpack().build);
//gulp.task("watch:webpack",()=>{
//    gulp.watch(tasks.webpack().target,["webpack"]);
//});

gulp.task("server",()=>{
    tasks.browserSync().start(path)
});

gulp.task("watch",[
    "watch:sass",
    "watch:jade",
    //"watch:webpack",
]);

gulp.task("build",function(cb){
    runSequence([
        "sass",
        "jade",
        //"webpack"
    ],cb);
});

gulp.task("default",["watch"])

