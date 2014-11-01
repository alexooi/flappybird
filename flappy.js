// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(854, 480, Phaser.AUTO, 'game', stateActions);
var score = 0;
var player;
var score_text;
var x = 100;
var y = 300;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/flappyBird.png");
    game.load.audio("score", "assets/point.ogg");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor('#66FFFF');
    game.add.text(300, 240, "Welcome to my game!!", {font: "30px Helvetica", fill: '#ffffff'});
    player = game.add.sprite(x, y, "playerImg");
    score_text = game.add.text(60, 60, "Score" + " " + score);
    // game.add.sprite(700, 400, "playerImg");
    game.add.audio("score");
    game.input.onDown.add(clickHandler);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(spaceHandler);

    var right_key = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    right_key.onDown.add(rightHandler);
    var left_key = game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add(leftHandler);
    var up_key = game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add(upHandler);
    var down_key = game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add(downHandler);
}

function clickHandler(event){
    //alert("click!");
    //alert(event.x + ":" + event.y);
    //game.add.sprite(event.x-25, event.y-25, "playerImg");
    game.sound.play("score");
}

function spaceHandler(){
    //alert("spacebar!");
    //game.add.sprite(event.x*Math.random()*max_value, event.y*Math.random()*max_value, "playerImg");

    score++;
    score_text.setText("Score" + " "+ score);
    game.sound.play("score");
    //alert(score);
}

function rightHandler(){
    player.x+=20;
}

function leftHandler(){
    player.x-=20;
}

function upHandler(){
    player.y-=20;
}

function downHandler(){
    player.y+=20;
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}