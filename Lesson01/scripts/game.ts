/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />

//class Person {
//    constructor() {
//    }
//    public walks() {
//        console.log("hello walk");
//    }
//    public sayHello() {
//        console.log("how are you?");
//    }
//}
//function init() {
//    var john = new Person();
//    john.sayHello();
//}

var stage: createjs.Stage;
var canvas = document.getElementById("canvas");

function init() {
    console.log("game is starting");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);
    main();
}

function gameLoop() {
    stage.update();
}

function main() {
    console.log("game started");
    var helloText: createjs.Text = new createjs.Text("Hello World", "40px Consolas ", "#000000");
    helloText.x = 10;
    helloText.y = 200;
    stage.addChild(helloText);
}