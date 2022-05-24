import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('MiniJeu2A')
    }
    create() {
        let tv = this.add.sprite(500, 400, 'anim');
        let gameFinish = false;
        this.anims.create({
        key: 'offTV',
        frames: [{
            key: 'anim',
            frame: 'tv trans 0.png'
        },
        {
            key: 'anim',
            frame: 'tv trans 1.png'
        },
        {
            key: 'anim',
            frame: 'tv trans 2.png'
        },
        {
            key: 'anim',
            frame: 'tv trans 3.png'
        },
        {
            key: 'anim',
            frame: 'tv trans 4.png'
        },
        {
            key: 'anim',
            frame: 'tv trans 5.png'
        },
        {
            key: 'anim',
            frame: 'tv trans 6.png'
        }],
        frameRate: 8,
        });

        let remote = this.add.sprite(500, 670, 'remote').setInteractive();

        remote.on('pointerdown',  () => {
            tv.play('offTV');
            gameFinish = true;
            if(gameFinish = true){
                this.time.delayedCall(1000, () => {
                    this.scene.switch('level1')
                })
            }   
        })
        remote.on('pointerover', function () {
            remote.y += 10
        });
        remote.on('pointerout', function () {
            remote.y -= 10
        })
    }
}



