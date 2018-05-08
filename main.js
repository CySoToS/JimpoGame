var game = new Phaser.Game(600,400,Phaser.AUTO);
game.state.add('state1',jimpoGame.state1);
game.state.start('state1');