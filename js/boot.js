var bootState = {
    preload: function () {
        'use strict';
        game.load.image('progressBar', 'assets/progressBar.png');
    },
    create: function () {
        'use strict';
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load');
    }
};