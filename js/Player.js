var Player = function(p,map){
    var vida = null;
    var speed = null;
    var radio = null;
    var imagen = null;
    var posX = null;
    var posY = null;
    var balas = null;
    var lastSideX = 1;
    var lastSideY = 1;
    var reloadDelay = 200;
    var delay = 0;
    
    phaser.physics.arcade.enable(map);
    
    this.update = function(teclas){
        
        balas.update(imagen);
        
        phaser.physics.arcade.collide(imagen, map);
        
        if (teclas.up.isDown){
            console.log("up");
            this.moveUP();
        }else if (teclas.down.isDown){
            console.log("down");
            this.moveDown();
        }else if (teclas.left.isDown){
            console.log("down");
            this.moveLeft();
        }else if (teclas.right.isDown){
            console.log("right");
            this.moveRight();
        }else this.moveIdle();
        
        if (teclas.space.isDown && delay < phaser.time.now){
            delay = phaser.time.now + reloadDelay;
            balas.shoot(imagen.position.x, imagen.position.y, lastSideX, lastSideY,map);  
        }
    }
        
    this.moveIdle = function(){
       imagen.body.velocity.y = 0;
       imagen.body.velocity.x = 0;
    }
    this.moveUP = function(){
        imagen.body.velocity.y = -speed;
        lastSideY = -1;
        lastSideX = 0;
    }
    
    this.moveDown = function(){
        imagen.body.velocity.y = speed;
        lastSideY = 1;
        lastSideX = 0;
    }
    
    this.moveLeft = function(){
        imagen.body.velocity.x = -speed;
        lastSideY = 0;
        lastSideX = -1;
    }
    
    this.moveRight = function(){
        imagen.body.velocity.x = speed;
        lastSideY = 0;
        lastSideX = 1;
    }
    
        
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(imagen);
        imagen.body.bounce.y = 0.2;
        imagen.body.collideWorldBounds = true;    
    };
    
    (function() {
        vida = 4;
        speed = 100;
        radio = 15;
        if(p == 'player1')  imagen = phaser.add.sprite(0,0, p);
        if(p == 'player2')  imagen = phaser.add.sprite(900,720, p);
        imagen.anchor.setTo(0.5 , 0.5);
        delay = 600;
        balas = new Bala(map);
        
        enablePhysics();
    })();
}