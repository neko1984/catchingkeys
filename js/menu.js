var menuState = {
    create: function () {
        'use strict';
        game.add.image(0, 0, 'background');
        var nameLabel = game.add.text(game.world.centerX, 80, 'Super Coin Box', {
            font: '50px Arial',
            fill: '#ffffff'
        });
        nameLabel.anchor.setTo(0.5, 0.5);
        var scoreLabel = game.add.text(game.world.centerX, game.world.centerY,
            'score: ' + game.global.score, {
                font: '25px Arial',
                fill: '#ffffff'
            });
        scoreLabel.anchor.setTo(0.5, 0.5);
        var startLabel = game.add.text(game.world.centerX, game.world.height - 80,
            'press the up arrow key to start', {
                font: '25px Arial',
                fill: '#ffffff'
            });
        startLabel.anchor.setTo(0.5, 0.5);
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.addOnce(this.start, this);
    },
    start: function () {
        'use strict';
        game.state.start('play');
    }
};