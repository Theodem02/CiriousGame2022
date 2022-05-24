import Phaser from 'phaser'


export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private perso!: Phaser.Physics.Arcade.Sprite
    porte1!: Phaser.Tilemaps.TilemapLayer
    porte2!: Phaser.Tilemaps.TilemapLayer
    porte3!: Phaser.Tilemaps.TilemapLayer
    porte4!: Phaser.Tilemaps.TilemapLayer
    porte1ouv!: Phaser.Tilemaps.TilemapLayer
    porte2ouv!: Phaser.Tilemaps.TilemapLayer
    porte3ouv!: Phaser.Tilemaps.TilemapLayer
    porte4ouv!: Phaser.Tilemaps.TilemapLayer
    map1!: Phaser.Tilemaps.Tilemap
    tileset1!: Phaser.Tilemaps.Tileset 
    task1 !: Phaser.Tilemaps.TilemapLayer
    task3 !: Phaser.Tilemaps.TilemapLayer
    task4 !: Phaser.Tilemaps.TilemapLayer
    task5 !: Phaser.Tilemaps.TilemapLayer
    task6 !: Phaser.Tilemaps.TilemapLayer
    blocage !: Phaser.Tilemaps.TilemapLayer
    collide!: Phaser.Physics.Arcade.Collider
    nextlevel!: Phaser.Tilemaps.TilemapLayer
    rulesA!: number
    rules1A!: number
    rules3!: number
    rules4!: number
    rules5!: number
    
    
    constructor() {
        super('level1');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        this.map1 = this.make.tilemap({ key: 'house1' })
        this.tileset1 = this.map1.addTilesetImage('all', 'tiles')
        const sol = this.map1.createLayer('sols', this.tileset1)
        const mur = this.map1.createLayer('mur',this.tileset1)
        const deco = this.map1.createLayer('déco', this.tileset1)
        const deco2 = this.map1.createLayer('deco2', this.tileset1)
        this.blocage = this.map1?.createLayer('blocage', this.tileset1)
        let button = this.add.image(950, 50, 'fullscreen', 0).setInteractive();
        let camera = this.cameras.main
        sol.setCollisionByProperty({ collides: true })
        mur.setCollisionByProperty({ collides: true })
        deco.setCollisionByProperty({ collides: true})
        deco2.setCollisionByProperty({ collides: true})
        this.blocage.setCollisionByProperty({ collides: true})
        this.blocage.visible = false;
        this.porte1 = this.map1.createLayer('porte1', this.tileset1)
        this.porte2 = this.map1.createLayer('porte2', this.tileset1)
        this.porte3 = this.map1.createLayer('porte3', this.tileset1)
        this.porte4 = this.map1.createLayer('porte4', this.tileset1)
        this.porte1ouv = this.map1?.createLayer('porte1ouv', this.tileset1)
        this.porte1ouv.visible = false
        this.porte2ouv = this.map1?.createLayer('porte2ouv', this.tileset1)
        this.porte2ouv.visible = false
        this.porte3ouv = this.map1?.createLayer('porte3ouv', this.tileset1)
        this.porte3ouv.visible = false
        this.porte4ouv = this.map1?.createLayer('porte4ouv', this.tileset1)
        this.porte4ouv.visible = false
        this.task1 = this.map1?.createLayer('task1', this.tileset1)
        this.task3 = this.map1?.createLayer('task3', this.tileset1)
        this.task4 = this.map1?.createLayer('task4', this.tileset1)
        this.task5 = this.map1?.createLayer('task5', this.tileset1)
        this.task6 = this.map1?.createLayer('task6', this.tileset1)
        this.nextlevel = this.map1?.createLayer('nextlevel', this.tileset1)
        this.nextlevel.visible = false;

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
        deco.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        deco2.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        })
        */
       

        this.perso = this.physics.add.sprite(430, 100, 'perso', 'male-walking-front-2.png')
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

        this.collide = this.physics.add.collider(this.perso, this.blocage)
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

        
        //TP PORTE 2
        
        if(144 <= this.perso.x && this.perso.x <= 189){
            if(495 <= this.perso.y && this.perso.y <= 500 ){
                this.porte2.visible = false
                this.porte2ouv.visible = true
                this.perso.x = 159
                this.perso.y = 607
            }
        }
        
        if(144 <= this.perso.x && this.perso.x <= 189){
            if(600 <= this.perso.y && this.perso.y <= 605 ){
                this.porte2.visible = true
                this.porte2ouv.visible = false
                this.perso.x = 159
                this.perso.y = 493
            }
        }
        //TP PORTE 1
        if(162 <= this.perso.x && this.perso.x <= 189){
            if(410 <= this.perso.y && this.perso.y <= 415 ){
                this.porte1.visible = false
                this.porte1ouv.visible = true
                this.perso.x = 174
                this.perso.y = 300
            }
        }

        if(162 <= this.perso.x && this.perso.x <= 189){
            if(305 <= this.perso.y && this.perso.y <= 310 ){
                this.porte1.visible = true
                this.porte1ouv.visible = false
                this.perso.x = 174
                this.perso.y = 420
            }
        }
        // TP PORTE 3
        if(591 <= this.perso.x && this.perso.x <= 620){
            if(290 <= this.perso.y && this.perso.y <= 300 ){
                this.porte3.visible = false
                this.porte3ouv.visible = true
                this.perso.x = 609
                this.perso.y = 190
            }
        }
        
        if(591 <= this.perso.x && this.perso.x <= 620){
            if(195 <= this.perso.y && this.perso.y <= 200 ){
                this.porte3.visible = true
                this.porte3ouv.visible = false
                this.perso.x = 609
                this.perso.y = 312
            }
        }
        //TP PORTE 4
        if(608 <= this.perso.x && this.perso.x <= 638){
            if(385 <= this.perso.y && this.perso.y <= 390 ){
                this.porte4.visible = false
                this.porte4ouv.visible = true
                this.perso.x = 624
                this.perso.y = 513
            }
        }

        if(608 <= this.perso.x && this.perso.x <= 638){
            if(490 <= this.perso.y && this.perso.y <= 495 ){
                this.porte4.visible = true
                this.porte4ouv.visible = false
                this.perso.x = 624
                this.perso.y = 383
            }
        }

        if(749 <= this.perso.x && this.perso.x <= 789){
            if( 665<= this.perso.y && this.perso.y <= 700){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('RulesA')
                    this.task1.visible = false ;
                    this.rulesA = 1;
                }
            }
        }

        if(273 <= this.perso.x && this.perso.x <= 333){
            if( 153<= this.perso.y && this.perso.y <= 240){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules1A')
                    this.task3.visible = false ;
                    this.rules1A = 1;
                }
            }
        }

        if(634 <= this.perso.x && this.perso.x <= 675){
            if( 100<= this.perso.y && this.perso.y <= 150){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules3')
                    this.task4.visible = false ;
                    this.rules3 = 1;
                }
            }
        }

        if(415 <= this.perso.x && this.perso.x <= 445){
            if(10 <= this.perso.y && this.perso.y <= 15 ){
                this.scene.switch('game')
                this.perso.x = 430
                this.perso.y = 100

            }
        }
        if(this.rulesA == 1 && this.rules1A == 1 && this.rules3 == 1 && this.rules4 == 1 && this.rules5 == 1){
            if(354 <= this.perso.x && this.perso.x <= 372){
                if(15 <= this.perso.y && this.perso.y <= 20 ){
                    this.scene.switch('level2')
                    this.perso.x = 370
                    this.perso.y = 100
    
                }
            }
        }
        

        if(241 <= this.perso.x && this.perso.x <= 300){
            if(625 <= this.perso.y && this.perso.y <= 660 ){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules4')
                    this.task5.visible = false ;
                    this.rules4 = 1;
                }
            }
        }

        if(47 <= this.perso.x && this.perso.x <= 106){
            if(625 <= this.perso.y && this.perso.y <= 660 ){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules5')
                    this.task6.visible = false;
                    this.rules5 = 1;
                }
            }
        }

        if(this.rulesA == 1 && this.rules1A == 1 && this.rules3 == 1 && this.rules4 == 1 && this.rules5 == 1){
            this.nextlevel.visible = true;
            this.physics.world.removeCollider(this.collide)
        }
    }

}
