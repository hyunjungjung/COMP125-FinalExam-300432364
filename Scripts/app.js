/**
 * FileName : app.js
 * 
 * @author Joanne Jung
 * @date August 17, 2016
 * 
 * Student ID : 300432364
 * website : http://joannejung-assign2-updated-miniportfolio.azurewebsites.net
 * @description the main JavaScript file for the Assignment 3 - miniportfolio updated version
 */


var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
    function main() {
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map