var FullGame = function(){
    
    var map = null;
    var player1 = null;
    var player2 = null;
        
    this.cursor = {
        space: phaser.input.keyboard.addKey(13),
		up: phaser.input.keyboard.addKey(38),
        down: phaser.input.keyboard.addKey(40),
		left: phaser.input.keyboard.addKey(37),
		right: phaser.input.keyboard.addKey(39)
    };
    
    this.wasd = {
        space: phaser.input.keyboard.addKey(32),
		up: phaser.input.keyboard.addKey(Phaser.Keyboard.W),
        down: phaser.input.keyboard.addKey(Phaser.Keyboard.S),
		left: phaser.input.keyboard.addKey(Phaser.Keyboard.A),
		right: phaser.input.keyboard.addKey(Phaser.Keyboard.D)
    };
    
    this.update = function(){
        
        player1.update(this.cursor);
        player2.update(this.wasd);
        
        
        
              
    }
    
    var enablePhysics = function(){
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
    
     (function() {      
        enablePhysics();
        
        map = new Map();
        player1 = new Player('player1',map.getPhysicsReference());
        player2 = new Player('player2',map.getPhysicsReference());
    })();
}