import Phaser from 'phaser'


export default class Game extends Phaser.Scene {
    private perso!: Phaser.Physics.Arcade.Sprite
    private tree!: Phaser.Physics.Arcade.Sprite
    private tree1!: Phaser.Physics.Arcade.Sprite
    private tree2!: Phaser.Physics.Arcade.Sprite
    private tree3!: Phaser.Physics.Arcade.Sprite
    private tree4!: Phaser.Physics.Arcade.Sprite
    private tree5!: Phaser.Physics.Arcade.Sprite
    private tree6!: Phaser.Physics.Arcade.Sprite
    private tree7!: Phaser.Physics.Arcade.Sprite
    private tree8!: Phaser.Physics.Arcade.Sprite
    private tree9!: Phaser.Physics.Arcade.Sprite
    private tree10!: Phaser.Physics.Arcade.Sprite
    private tree11!: Phaser.Physics.Arcade.Sprite
    private tree12!: Phaser.Physics.Arcade.Sprite
    private tree13!: Phaser.Physics.Arcade.Sprite
    private tree14!: Phaser.Physics.Arcade.Sprite
    private tree15!: Phaser.Physics.Arcade.Sprite
    private tree16!: Phaser.Physics.Arcade.Sprite
    private tree17!: Phaser.Physics.Arcade.Sprite
    private tree18!: Phaser.Physics.Arcade.Sprite
    private tree19!: Phaser.Physics.Arcade.Sprite
    private bush!: Phaser.Physics.Arcade.Sprite
    private bush1!: Phaser.Physics.Arcade.Sprite
    private bush2!: Phaser.Physics.Arcade.Sprite
    private bush3!: Phaser.Physics.Arcade.Sprite
    private bush4!: Phaser.Physics.Arcade.Sprite
    private bush5!: Phaser.Physics.Arcade.Sprite
    private bush6!: Phaser.Physics.Arcade.Sprite
    private bush7!: Phaser.Physics.Arcade.Sprite
    private bush8!: Phaser.Physics.Arcade.Sprite
    private bush9!: Phaser.Physics.Arcade.Sprite
    private bush10!: Phaser.Physics.Arcade.Sprite
    private bush11!: Phaser.Physics.Arcade.Sprite
    private bush12!: Phaser.Physics.Arcade.Sprite
    private bush13!: Phaser.Physics.Arcade.Sprite
    private bush14!: Phaser.Physics.Arcade.Sprite
    private bush15!: Phaser.Physics.Arcade.Sprite
    private bush16!: Phaser.Physics.Arcade.Sprite
    private bush17!: Phaser.Physics.Arcade.Sprite
    private bush18!: Phaser.Physics.Arcade.Sprite
    private bush19!: Phaser.Physics.Arcade.Sprite
    

    constructor() {
        super('accueil')
    }

    preload() {
        
    }
    create() {
        this.perso = this.physics.add.sprite(100, 500, 'perso', 'male-walking-right-2.png')
        this.perso.body.setSize(this.perso.width * 0.5, this.perso.height * 0.8)
        this.perso.setScale(2)

        this.tree = this.physics.add.sprite(920, 515, 'tree', 'tree.png')
        this.tree1 = this.physics.add.sprite(1920, 515, 'tree1', 'tree.png')
        this.tree2 = this.physics.add.sprite(2920, 515, 'tree2', 'tree.png')
        this.tree3 = this.physics.add.sprite(3920, 515, 'tree3', 'tree.png')
        this.tree4 = this.physics.add.sprite(4920, 515, 'tree4', 'tree.png')
        this.tree5 = this.physics.add.sprite(5920, 515, 'tree5', 'tree.png')
        this.tree6 = this.physics.add.sprite(6920, 515, 'tree6', 'tree.png')
        this.tree7 = this.physics.add.sprite(7920, 515, 'tree7', 'tree.png')
        this.tree8 = this.physics.add.sprite(8920, 515, 'tree8', 'tree.png')
        this.tree9 = this.physics.add.sprite(9920, 515, 'tree9', 'tree.png')
        this.tree10 = this.physics.add.sprite(10920, 515, 'tree10', 'tree.png')
        this.tree11 = this.physics.add.sprite(11920, 515, 'tree11', 'tree.png')
        this.tree12 = this.physics.add.sprite(12920, 515, 'tree12', 'tree.png')
        this.tree13 = this.physics.add.sprite(13920, 515, 'tree13', 'tree.png')
        this.tree14 = this.physics.add.sprite(14920, 515, 'tree14', 'tree.png')
        this.tree15 = this.physics.add.sprite(15920, 515, 'tree15', 'tree.png')
        this.tree16 = this.physics.add.sprite(16920, 515, 'tree16', 'tree.png')
        this.tree17 = this.physics.add.sprite(17920, 515, 'tree17', 'tree.png')
        this.tree18 = this.physics.add.sprite(18920, 515, 'tree18', 'tree.png')
        this.tree19 = this.physics.add.sprite(19920, 515, 'tree19', 'tree.png')

        this.bush = this.physics.add.sprite(1120, 552, 'bush', 'bush.png')
        this.bush1 = this.physics.add.sprite(2120, 552, 'bush1', 'bush.png')
        this.bush2 = this.physics.add.sprite(3120, 552, 'bush2', 'bush.png')
        this.bush3 = this.physics.add.sprite(4120, 552, 'bush3', 'bush.png')
        this.bush4 = this.physics.add.sprite(5120, 552, 'bush4', 'bush.png')
        this.bush5 = this.physics.add.sprite(6120, 552, 'bush5', 'bush.png')
        this.bush6 = this.physics.add.sprite(7120, 552, 'bush6', 'bush.png')
        this.bush7 = this.physics.add.sprite(8120, 552, 'bush7', 'bush.png')
        this.bush8 = this.physics.add.sprite(9120, 552, 'bush8', 'bush.png')
        this.bush9 = this.physics.add.sprite(10120, 552, 'bush9', 'bush.png')
        this.bush10 = this.physics.add.sprite(11120, 552, 'bush10', 'bush.png')
        this.bush11 = this.physics.add.sprite(12120, 552, 'bush11', 'bush.png')
        this.bush12 = this.physics.add.sprite(13120, 552, 'bush12', 'bush.png')
        this.bush13 = this.physics.add.sprite(14120, 552, 'bush13', 'bush.png')
        this.bush14 = this.physics.add.sprite(15120, 552, 'bush14', 'bush.png')
        this.bush15 = this.physics.add.sprite(16120, 552, 'bush15', 'bush.png')
        this.bush16 = this.physics.add.sprite(17120, 552, 'bush16', 'bush.png')
        this.bush17 = this.physics.add.sprite(18120, 552, 'bush17', 'bush.png')
        this.bush18 = this.physics.add.sprite(19120, 552, 'bush18', 'bush.png')
        this.bush19 = this.physics.add.sprite(20120, 552, 'bush19', 'bush.png')



        this.input.on('pointerdown', function(pointer){
            console.log(pointer.x,pointer.y);
        });
        const speed = 125;
        
        this.tree.setVelocity(-speed, 0)
        this.tree1.setVelocity(-speed, 0)
        this.tree2.setVelocity(-speed, 0)
        this.tree3.setVelocity(-speed, 0)
        this.tree4.setVelocity(-speed, 0)
        this.tree5.setVelocity(-speed, 0)
        this.tree6.setVelocity(-speed, 0)
        this.tree7.setVelocity(-speed, 0)
        this.tree8.setVelocity(-speed, 0)
        this.tree9.setVelocity(-speed, 0)
        this.tree10.setVelocity(-speed, 0)
        this.tree11.setVelocity(-speed, 0)
        this.tree12.setVelocity(-speed, 0)
        this.tree13.setVelocity(-speed, 0)
        this.tree14.setVelocity(-speed, 0)
        this.tree15.setVelocity(-speed, 0)
        this.tree16.setVelocity(-speed, 0)
        this.tree17.setVelocity(-speed, 0)
        this.tree18.setVelocity(-speed, 0)
        this.tree19.setVelocity(-speed, 0)

        
        this.bush.setVelocity(-speed, 0)
        this.bush1.setVelocity(-speed, 0)
        this.bush2.setVelocity(-speed, 0)
        this.bush3.setVelocity(-speed, 0)
        this.bush4.setVelocity(-speed, 0)
        this.bush5.setVelocity(-speed, 0)
        this.bush6.setVelocity(-speed, 0)
        this.bush7.setVelocity(-speed, 0)
        this.bush8.setVelocity(-speed, 0)
        this.bush9.setVelocity(-speed, 0)
        this.bush10.setVelocity(-speed, 0)
        this.bush11.setVelocity(-speed, 0)
        this.bush12.setVelocity(-speed, 0)
        this.bush13.setVelocity(-speed, 0)
        this.bush14.setVelocity(-speed, 0)
        this.bush15.setVelocity(-speed, 0)
        this.bush16.setVelocity(-speed, 0)
        this.bush17.setVelocity(-speed, 0)
        this.bush18.setVelocity(-speed, 0)
        this.bush19.setVelocity(-speed, 0)

        this.time.delayedCall(180000, () => {
            this.scene.restart()
        })
       
                
        
        //this.time.events.repeat(Phaser.Time.SECOND * 2, 10, createBall, this);
        
        
        
        
        let buttonPlay = this.add.sprite(575, 900, 'buttonPlay').setInteractive();
        let logoeco = this.add.sprite(80, 80, "logoeco")
        logoeco.setScale(0.4)
        let herbe = this.add.sprite(80, 690, "herbe")
        //herbe.setScale(20)
        let ecohouse = this.add.sprite(500, 100, "ecohouse")
        
        
        let gameFinish = false;
        buttonPlay.visible = true;
        
        

        buttonPlay.on('pointerdown',  (pointer) => {
            console.log(pointer.x);
            buttonPlay.visible = true;
            gameFinish = true;
            if(gameFinish = true){
                this.time.delayedCall(100, () => {
                    this.scene.switch('game')
                })
            }
            
        })
        

        this.anims.create({
            key: 'perso-run-right',
            frames: this.anims.generateFrameNames('perso', { start: 1, end: 6, prefix: 'male-walking-right-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        })
        
        this.perso.anims.play('perso-run-right', true)
        this.perso.setVelocity(0, 0)
    }
    
    update(t: number, dt: number) {
        
        
    }



}