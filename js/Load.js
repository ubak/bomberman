var Load = function(){
    phaser.load.image('background', 'assets/background.jpg');
    phaser.load.image('piedra', 'assets/piedra.jpg');
    phaser.load.image('player1', 'assets/player.png');
    phaser.load.image('player2', 'assets/player2.png');
    phaser.load.image('tileset', 'assets/tileset.png'); 
    phaser.load.tilemap('map', 'assets/mapa.json', null, Phaser.Tilemap.TILED_JSON);
}