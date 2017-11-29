document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM");




    var Game = require("./game.js");


    var game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    })

});