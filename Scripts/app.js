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

    //var dice1 = new createjs.Bitmap("Assets/images/blank.png");
    //var dice2 = new createjs.Bitmap("Assets/images/blank.png");

    var diceRoll1 = new createjs.Bitmap("Assets/images/1.png");
    var diceRoll2 = new createjs.Bitmap("Assets/images/2.png");
    var diceRoll3 = new createjs.Bitmap("Assets/images/3.png");
    var diceRoll4 = new createjs.Bitmap("Assets/images/4.png");
    var diceRoll5 = new createjs.Bitmap("Assets/images/5.png");
    var diceRoll6 = new createjs.Bitmap("Assets/images/6.png");

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

    function rollButton_clicked() {
        //var randomDice = Math.floor(Math.random() * 6) + 1;
        //document.getElementById("pictures").src = imgDice[randomDice];
    }

    function main() {
        //dice1 bitmap
        var dice1 = new createjs.Bitmap("Assets/images/blank.png");
        dice1.x = 50;
        dice1.y = 50;
        stage.addChild(dice1);
        //dice2 bitmap
        var dice2 = new createjs.Bitmap("Assets/images/blank.png");
        dice2.x=400;
        dice2.y=50;
        stage.addChild(dice2);
        //button bitmap
        var rollButton = new createjs.Bitmap(" Assets/images/rollButton.png");
        rollButton.x = 250;
        rollButton.y = 400;
        stage.addChild(rollButton);
        rollButton.addEventListener("click", rollButton_clicked);

    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map