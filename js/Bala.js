var Bala = function(map){
    
    var balas = null;
    var bala = null;
    
    phaser.physics.arcade.enable(map);
    
    this.update = function(pj){
        if(phaser.physics.arcade.collide(bala, map)) bala.kill();
        balas.forEachAlive(this.checkPositions,this);
    };
    
    this.checkPostions = function(){
        if(game.physics.arcade.overlap(bala,pj)){
            bala.kill();
        }
    }
    
    this.shoot = function(x,y,lastSideX,lastSideY){
        bala = balas.getFirstDead();
        
        if(!bala) {
            return;
        }
        bala.anchor.setTo(0.5,0.5);
        bala.reset(x,y);
        bala.body.velocity.x= lastSideX * 500;
        bala.body.velocity.y= lastSideY * 500;
        bala.checkWorldBounds = true;
        bala.outOfBoundsKill = true;
        
        phaser.physics.arcade.enable(bala);
    };
    
    (function() {        
        balas = phaser.add.group();
        balas.enableBody = true;
        balas.createMultiple(10, 'bala');
        
    })();
}