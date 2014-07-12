
var BasicGame = {};

BasicGame.Boot = function (game) {
    "use strict";
};

BasicGame.Boot.prototype = {

    preload: function () {
        "use strict";
    },

    create: function () {
        "use strict";
        this.stage.backgroundColor = '#AAD2D5';
        this.physics.startSystem(Phaser.Physics.ARCADE);

    }

};

var game = {};
var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'gameContainer');

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');