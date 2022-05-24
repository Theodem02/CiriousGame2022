import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private perso!: Phaser.Physics.Arcade.Sprite
    porte1!: Phaser.Tilemaps.TilemapLayer
    porte2!: Phaser.Tilemaps.TilemapLayer
    porte3!: Phaser.Tilemaps.TilemapLayer
    porte4!: Phaser.Tilemaps.TilemapLayer
    porte5!: Phaser.Tilemaps.TilemapLayer
    porte1ouv!: Phaser.Tilemaps.TilemapLayer
    porte2ouv!: Phaser.Tilemaps.TilemapLayer
    porte3ouv!: Phaser.Tilemaps.TilemapLayer
    porte4ouv!: Phaser.Tilemaps.TilemapLayer
    porte5ouv!: Phaser.Tilemaps.TilemapLayer
    map2!: Phaser.Tilemaps.Tilemap
    tileset2!: Phaser.Tilemaps.Tileset 
    task1!: Phaser.Tilemaps.TilemapLayer
    task4!: Phaser.Tilemaps.TilemapLayer
    rules3B!: number
    rulesB!: number
    
    constructor() {
        super('level2')
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys()
        //this.load.audio('musique', 'assets/musique.ogg');   
    }

    create() {
        
        this.map2 = this.make.tilemap({ key: 'house2' })
        this.tileset2 = this.map2.addTilesetImage('all', 'tiles')
        const sol = this.map2.createLayer('sols', this.tileset2)
        const mur = this.map2.createLayer('murs',this.tileset2)
        const deco = this.map2.createLayer('deco', this.tileset2)
        const deco2 = this.map2.createLayer('deco2', this.tileset2)
        let button = this.add.image(950, 50, 'fullscreen', 0).setInteractive();
        let camera = this.cameras.main
        sol.setCollisionByProperty({ collides: true })
        mur.setCollisionByProperty({ collides: true })
        deco.setCollisionByProperty({ collides: true})
        deco2.setCollisionByProperty({ collides: true})
        this.porte1 = this.map2.createLayer('porte1', this.tileset2)
        this.porte2 = this.map2.createLayer('porte2', this.tileset2)
        this.porte3 = this.map2.createLayer('porte3', this.tileset2)
        this.porte4 = this.map2.createLayer('porte4', this.tileset2)
        this.porte5 = this.map2.createLayer('porte5', this.tileset2)
        this.porte1ouv = this.map2?.createLayer('porte1ouv', this.tileset2)
        this.porte1ouv.visible = false
        this.porte2ouv = this.map2?.createLayer('porte2ouv', this.tileset2)
        this.porte2ouv.visible = false
        this.porte3ouv = this.map2?.createLayer('porte3ouv', this.tileset2)
        this.porte3ouv.visible = false
        this.porte4ouv = this.map2?.createLayer('porte4ouv', this.tileset2)
        this.porte4ouv.visible = false
        this.porte5ouv = this.map2?.createLayer('porte5ouv', this.tileset2)
        this.porte5ouv.visible = false
        this.task1 = this.map2?.createLayer('task1', this.tileset2)
        this.task4 = this.map2?.createLayer('task4', this.tileset2)
        
        //const debugGraphics = this.add.graphics().setAlpha(0.7) 
        /*
        sol.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        mur.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        */
       

        this.perso = this.physics.add.sprite(400, 100, 'perso', 'male-walking-front-2.png')
        this.perso.body.setSize(this.perso.width * 0.5, this.perso.height * 0.8)
        this.anims.create({
            key: 'perso-idle-down',
            frames: [{ key: 'perso', frame: 'male-sitting-1.png' }]
        })

        this.anims.create({
            key: 'perso-idle-up',
            frames: [{ key: 'perso', frame: 'male-sitting-2.png' }]
        })

        this.anims.create({
            key: 'perso-idle-left',
            frames: [{ key: 'perso', frame: 'male-sitting-4.png' }]
        })

        this.anims.create({
            key: 'perso-idle-right',
            frames: [{ key: 'perso', frame: 'male-sitting-3.png' }]
        })

        this.anims.create({
            key: 'perso-run-down',
            frames: this.anims.generateFrameNames('perso', { start: 1, end: 6, prefix: 'male-walking-front-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        })

        this.anims.create({
            key: 'perso-run-up',
            frames: this.anims.generateFrameNames('perso', { start: 1, end: 6, prefix: 'male-walking-back-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        })

        this.anims.create({
            key: 'perso-run-left',
            frames: this.anims.generateFrameNames('perso', { start: 1, end: 6, prefix: 'male-walking-left-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        })

        this.anims.create({
            key: 'perso-run-right',
            frames: this.anims.generateFrameNames('perso', { start: 1, end: 6, prefix: 'male-walking-right-', suffix: '.png' }),
            repeat: -1,
            frameRate: 10
        })


        this.physics.add.collider(this.perso, sol)
        this.physics.add.collider(this.perso, mur)
        this.physics.add.collider(this.perso, deco)
        this.physics.add.collider(this.perso, deco2)
        this.cameras.main.startFollow(this.perso, true)
        this.input.on('pointerdown', function(pointer){
            console.log(pointer.x,pointer.y);
        });
        button.setScrollFactor(0, 0)
        button.on('pointerup',  () => {

            if (this.scale.isFullscreen)
            {
                button.x = 950
                button.y = 50
                button.setFrame(0);
                camera.setZoom(1);
                camera.zoom = 1;
                this.scale.stopFullscreen();
            }
            else
            {   
                button.x = 750
                button.y = 250
                button.setFrame(1);
                camera.setZoom(1.75);
                camera.zoom = 1.75;

                this.scale.startFullscreen();
            }

        }, this);

        if(this.scale.isFullscreen){
            button.setFrame(1);
            button.setScrollFactor(0, 0)
            button.x = 750
            button.y = 250
            camera.setZoom(1.75);
            camera.zoom = 1.75;
        }
    }
    
    update(t: number, dt: number) {
        
        const speed = 150
        if (this.cursors.left?.isDown) {
            this.perso.anims.play('perso-run-left', true)
            this.perso.setVelocity(-speed, 0)
        }
        else if (this.cursors.right?.isDown) {
            this.perso.anims.play('perso-run-right', true)
            this.perso.setVelocity(speed, 0)
        }
        else if (this.cursors.up?.isDown) {
            this.perso.anims.play('perso-run-up', true)
            this.perso.setVelocity(0, -speed)
        }
        else if (this.cursors.down?.isDown) {
            this.perso.anims.play('perso-run-down', true)
            this.perso.setVelocity(0, speed)
        }
        else {
            this.perso.anims.play('perso-idle-down', true)
            this.perso.setVelocity(0, 0)
        }

        
        //TP to level 1
        if(385 <= this.perso.x && this.perso.x <= 410){
            if(5 <= this.perso.y && this.perso.y <= 10 ){
                this.scene.switch('level1')
                this.perso.x = 400
                this.perso.y = 80

            }
        }

        //Mini jeu lampe
        
        if(750 <= this.perso.x && this.perso.x <= 788){
            if(100<= this.perso.y && this.perso.y <= 155){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('RulesB')
                    this.task1.visible = false;
                    this.rulesB = 1;
                    
                }
            }
        }
        //Mini jeu Machine à laver
        if(268 <= this.perso.x && this.perso.x <= 331){
            if( 625<= this.perso.y && this.perso.y <= 650){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules3B')
                    this.task4.visible = false;
                    this.rules3B = 1;
                }
            }
        }
        
        if(this.rulesB == 1 && this.rules3B == 1){
            this.time.delayedCall(5000, () => {
                this.scene.switch('End')
            })
        }
        
        //TP Porte 1
        if(160 <= this.perso.x && this.perso.x <= 190){
            if(490 <= this.perso.y && this.perso.y <= 495 ){
                this.porte1.visible = false
                this.porte1ouv.visible = true
                this.perso.x = 177
                this.perso.y = 618
            }
        }
        
        if(160 <= this.perso.x && this.perso.x <= 190){
            if(605 <= this.perso.y && this.perso.y <= 610 ){
                this.porte1.visible = true
                this.porte1ouv.visible = false
                this.perso.x = 177
                this.perso.y = 488
            }
        }

        //TP Porte 2
        if(160 <= this.perso.x && this.perso.x <= 190){
            if(335 <= this.perso.y && this.perso.y <= 340 ){
                this.porte2.visible = false
                this.porte2ouv.visible = true
                this.perso.x = 177
                this.perso.y = 447
            }
        }
        
        if(160 <= this.perso.x && this.perso.x <= 190){
            if(440<= this.perso.y && this.perso.y <= 445 ){
                this.porte2.visible = true
                this.porte2ouv.visible = false
                this.perso.x = 177
                this.perso.y = 333
            }
        }

        //TP Porte 3
        if(160 <= this.perso.x && this.perso.x <= 190){
            if(285 <= this.perso.y && this.perso.y <= 290 ){
                this.porte3.visible = false
                this.porte3ouv.visible = true
                this.perso.x = 177
                this.perso.y = 173
            }
        }
        
        if(160 <= this.perso.x && this.perso.x <= 190){
            if(175<= this.perso.y && this.perso.y <= 180 ){
                this.porte3.visible = true
                this.porte3ouv.visible = false
                this.perso.x = 177
                this.perso.y = 292
            }
        }

        //TP Porte 4
        if(607 <= this.perso.x && this.perso.x <= 637){
            if(385 <= this.perso.y && this.perso.y <= 390 ){
                this.porte4.visible = false
                this.porte4ouv.visible = true
                this.perso.x = 618
                this.perso.y = 503
            }
        }
        
        if(607 <= this.perso.x && this.perso.x <= 637){
            if(495<= this.perso.y && this.perso.y <= 500 ){
                this.porte4.visible = true
                this.porte4ouv.visible = false
                this.perso.x = 618
                this.perso.y = 383
            }
        }

        //TP Porte 5
        if(607 <= this.perso.x && this.perso.x <= 637){
            if(330 <= this.perso.y && this.perso.y <= 335 ){
                this.porte5.visible = false
                this.porte5ouv.visible = true
                this.perso.x = 618
                this.perso.y = 217
            }
        }
        
        if(607 <= this.perso.x && this.perso.x <= 637){
            if(222<= this.perso.y && this.perso.y <= 228 ){
                this.porte5.visible = true
                this.porte5ouv.visible = false
                this.perso.x = 618
                this.perso.y = 338
            }
        }
        
    }
}
