var Player = function(p,map){
    var vida = null;
    var speed = null;
    var radio = null;
    
    var imagen = null;
    
    phaser.physics.arcade.enable(map);
    
    this.update = function(teclas){
        
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
            console.log("down");
            this.moveRight();
        }
    }
    
    this.moveUP = function(){
        imagen.position.y -= speed;
    }
    
    this.moveDown = function(){
        imagen.position.y += speed;
    }
    
    this.moveLeft = function(){
        imagen.position.x -= speed;
    }
    
    this.moveRight = function(){
        imagen.position.x += speed;
    }
    
    var enablePhysics = function() {        
        phaser.physics.arcade.enable(imagen);
        imagen.body.bounce.y = 0.2;
        imagen.body.collideWorldBounds = true;    
    };
    
    (function() {
        vida = 4;
        speed = 5;
        radio = 15;
    
        imagen = phaser.add.sprite(0,0, p);
        enablePhysics();
    
    })();
}