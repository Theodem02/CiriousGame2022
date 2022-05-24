import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('MiniJeu3')
    }
    create() {
        let clim = this.add.sprite(500, 400, 'clim').setInteractive();
        let gameFinish = false;
        this.anims.create({
        key: 'climatisor',
        frames: [{
            key: 'clim',
            frame: 'clim 0.png'
        },
        {
            key: 'clim',
            frame: 'clim 1.png'
        },
        {
            key: 'clim',
            frame: 'clim 2.png'
        },
        {
            key: 'clim',
            frame: 'clim 3.png'
        },
        {
            key: 'clim',
            frame: 'clim 4.png'
        },
        {
            key: 'clim',
            frame: 'clim 6.png'
        }],
        frameRate: 8,
        });

        

        clim.on('pointerdown',  () => {
            clim.play('climatisor');
            gameFinish = true;
            if(gameFinish = true){
                this.time.delayedCall(1000, () => {
                    this.scene.switch('game')
                })
            }   
        })
    }
}