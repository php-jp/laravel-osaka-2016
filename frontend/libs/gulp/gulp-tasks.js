"use strict";

class Tasks{

    constructor(path){
        this.path = path;
    }

    sass(){
        console.log(this)
        return require("./sass.js")(this.path);
    }

    jade(){
        return require("./jade.js")(this.path);
    }

    webpack(){
        return require("./webpack.js")(this.path);
    }

    browserSync(){
        return require("./browserSync.js")(this.path);
    }
}

module.exports = function(path){
    return new Tasks(path);
}