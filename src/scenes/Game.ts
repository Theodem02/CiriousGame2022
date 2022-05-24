import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private perso!: Phaser.Physics.Arcade.Sprite
    porte1!: Phaser.Tilemaps.TilemapLayer
    porte2!: Phaser.Tilemaps.TilemapLayer
    porte3!: Phaser.Tilemaps.TilemapLayer
    porte1ouv!: Phaser.Tilemaps.TilemapLayer
    porte2ouv!: Phaser.Tilemaps.TilemapLayer
    porte3ouv!: Phaser.Tilemaps.TilemapLayer
    map!: Phaser.Tilemaps.Tilemap
    tileset!: Phaser.Tilemaps.Tileset
    task2!: Phaser.Tilemaps.TilemapLayer
    task3!: Phaser.Tilemaps.TilemapLayer
    task1!: Phaser.Tilemaps.TilemapLayer
    taskbonus!: Phaser.Tilemaps.TilemapLayer
    blocage!: Phaser.Tilemaps.TilemapLayer
    collide!: Phaser.Physics.Arcade.Collider
    nextlevel!: Phaser.Tilemaps.TilemapLayer
    task7!: Phaser.Tilemaps.TilemapLayer
    rules!: number
    rules1!: number
    rules2!: number
    rules6!: number
    rules7!: number
    

    constructor() {
        super('game')
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        //this.add.image(500, 500,'background')
        this.map = this.make.tilemap({ key: 'house' })
        this.tileset = this.map.addTilesetImage('all', 'tiles')
        const wallandfloor = this.map.createLayer('wallandfloor', this.tileset)
        const topwall = this.map.createLayer('topwall', this.tileset)
        const objet = this.map.createLayer('objet', this.tileset)
        const objetonobjet = this.map.createLayer('objetonobjet', this.tileset)
        const escalier = this.map.createLayer('escalier', this.tileset)
        var button = this.add.image(950, 50, 'fullscreen', 0).setInteractive();
        this.porte1 = this.map.createLayer('porte1', this.tileset)
        this.porte2 = this.map.createLayer('porte2', this.tileset)
        this.porte3 = this.map.createLayer('porte3', this.tileset)
        this.porte1ouv = this.map?.createLayer('porte1ouv', this.tileset)
        this.porte1ouv.visible = false
        this.porte2ouv = this.map?.createLayer('porte2ouv', this.tileset)
        this.porte2ouv.visible = false
        this.porte3ouv = this.map?.createLayer('porte3ouv', this.tileset)
        this.porte3ouv.visible = false
        this.task1 = this.map?.createLayer('task1', this.tileset)
        this.task2 = this.map?.createLayer('task2', this.tileset)
        this.task3 = this.map?.createLayer('task3', this.tileset)
        this.task7 = this.map?.createLayer('task7', this.tileset)
        this.taskbonus = this.map?.createLayer('taskbonus', this.tileset)
        this.blocage = this.map?.createLayer('blocage', this.tileset)
        this.nextlevel = this.map?.createLayer('nextlevel', this.tileset)
        this.nextlevel.visible = false;
        wallandfloor.setCollisionByProperty({ collides: true })
        topwall.setCollisionByProperty({ collides: true })
        objet.setCollisionByProperty({ collides: true})
        objetonobjet.setCollisionByProperty({ collides: true})
        escalier.setCollisionByProperty({ collides: true})
        this.blocage.setCollisionByProperty({collides: true})
        this.blocage.visible = false;
        //const debugGraphics = this.add.graphics().setAlpha(0.7)
        /*wallandfloor.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
       })
       topwall.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor: new Phaser.Display.Color(40,39,37,255)
       })*/
        this.perso = this.physics.add.sprite(615, 757, 'perso', 'male-walking-front-2.png')
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
        this.physics.add.collider(this.perso, wallandfloor)
        this.physics.add.collider(this.perso, topwall)
        this.physics.add.collider(this.perso, objet )
        this.physics.add.collider(this.perso, objetonobjet )
        this.cameras.main.startFollow(this.perso, true)
        let camera = this.cameras.main
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
        
        this.input.on('pointerdown', function(pointer: { x: any; y: any }){
            console.log(pointer.x,pointer.y);
        });
    
        
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

        //position 1er TP
        if(304 <= this.perso.x && this.perso.x <= 332){
            if(510 <= this.perso.y && this.perso.y <= 515 ){
                this.porte1ouv.visible = true
                this.porte1.visible = false
                this.perso.x = 319
                this.perso.y = 633
            }
        }
        if(304 <= this.perso.x && this.perso.x <= 332){
            if(615 <= this.perso.y && this.perso.y <= 620 ){
                this.porte1ouv.visible = false
                this.porte1.visible = true
                this.perso.x = 319
                this.perso.y = 508
            }
        }

        //position 2eme TP
        if(273 <= this.perso.x && this.perso.x <= 300){
            if(440 <= this.perso.y && this.perso.y <= 445 ){
                this.porte2ouv.visible = true
                this.porte2.visible = false
                this.perso.x = 285
                this.perso.y = 328
            }
        }
        if(273 <= this.perso.x && this.perso.x <= 300){
            if(330 <= this.perso.y && this.perso.y <= 335 ){
                this.porte2ouv.visible = false
                this.porte2.visible = true
                this.perso.x = 285
                this.perso.y = 458
            }
        }
        //position 3eme TP
        if(640 <= this.perso.x && this.perso.x <= 678){
            if(570 <= this.perso.y && this.perso.y <= 575 ){
                this.porte3.visible = false
                this.porte3ouv.visible = true
                this.perso.x = 656
                this.perso.y = 464
            }
        }
        if(640 <= this.perso.x && this.perso.x <= 678){
            if(465 <= this.perso.y && this.perso.y <= 470 ){
                this.porte3ouv.visible = false
                this.porte3.visible = true
                this.perso.x = 656
                this.perso.y = 585
            }
        }

        if(this.rules == 1 && this.rules1 == 1 && this.rules2 == 1 && this.rules6 == 1 && this.rules7 == 1 ){
            if(512 <= this.perso.x && this.perso.x <= 540){
                if(305 <= this.perso.y && this.perso.y <= 310 ){
                    this.scene.switch('level1')
                    this.perso.x = 527
                    this.perso.y = 446
                }
            }
        }
            
        if(600 <= this.perso.x && this.perso.x <= 700){
            if(290 <= this.perso.y && this.perso.y <= 390){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules')
                    this.task1.visible = false;
                    this.rules = 1;
                }
            }
        }

        if(750 <= this.perso.x && this.perso.x <= 850){
            if(592 <= this.perso.y && this.perso.y <= 672){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules1')
                    this.task2.visible = false;
                    this.rules1 = 1;
                }
            }
        }

        if(127 <= this.perso.x && this.perso.x <= 191){
            if(623 <= this.perso.y && this.perso.y <= 643){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules2')
                    this.task3.visible = false;
                    this.rules2 = 1;
                }
            }
        }

        if(126 <= this.perso.x && this.perso.x <= 160){
            if(450 <= this.perso.y && this.perso.y <= 512 ){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules6')
                    this.taskbonus.visible = false;
                    this.rules6 = 1;
                }
            }
        }

        if(735 <= this.perso.x && this.perso.x <= 768){
            if(205 <= this.perso.y && this.perso.y <= 232 ){
                if(this.game.input.activePointer.isDown){
                    this.scene.switch('Rules7')
                    this.task7.visible = false;
                    this.rules7 =1;
                }
            }
        }

        if(this.rules == 1 && this.rules1 == 1 && this.rules2 == 1 && this.rules6 == 1 && this.rules7 == 1 ){
            this.nextlevel.visible = true
            this.physics.world.removeCollider(this.collide)
        }
    }
}

