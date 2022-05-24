import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('End')
    }

    create() {
        let logoeco = this.add.sprite(80, 80, "logoeco")
        logoeco.setScale(0.4)
        let ecohouse = this.add.sprite(500,100, "ecohouse")
        let restart = this.add.sprite(940,60, "restart").setInteractive();
        this.add.image(500, 575, 'dialogue8')

        restart.visible = true ;
        let gameFinish = false

        restart.on('pointerdown',  (pointer) => {
            console.log(pointer.x);
            restart.visible = true;
            gameFinish = true;
            if(gameFinish = true){
                this.time.delayedCall(100, () => {
                    location.reload();
                })
            }

        })

    }
}