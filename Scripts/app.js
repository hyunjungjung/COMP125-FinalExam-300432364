/**
 * FileName : app.js
 * 
 * @author Joanne Jung
 * @date August 17, 2016
 * Student ID : 300432364
 * website : http://comp125-finalexam-300432364.azurewebsites.net
 * @description the main JavaScript file for the final exam - the dice roller
 */


var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var RollButton;
    var rollButton = new createjs.bitmap("../Assets/images");
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enable mouse over 
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    /**
     * Event method that triggers every frame
     * 
     * @method gameLoop
     */
    function gameLoop() {


        stage.update();
    }
    var imgDice = new Array("images/1.png,", "images/2.png,", "images/3.png,", "images/4.png,", "images/5.png,", "images/6.png,")

    function rollButton_clicked() {
        var randomDice = Math.floor(Math.random() * imgDice.length);
        document.getElementById("pictures").src = imgDice[randomDice];
    }

    function main() {

        //button bitmap
        rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        rollButton.regX = rollButton.getBounds().width * 0.5;
        rollButton.regY = rollButton.getBounds().height * 0.5;
        rollButton.x = CANVAS_WIDTH * 0.5;
        rollButton.y = CANVAS_HEIGHT * 0.5;
        stage.addChild(rollButton);
        rollButton.on("click", clickMeButton_clicked);

    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map