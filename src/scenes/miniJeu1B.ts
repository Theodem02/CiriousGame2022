import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('MiniJeu1B')
    }

    create() {
        let back = this.add.sprite(200, 550, 'back');
        back.setScale(3);
        let on = this.add.sprite(500, 600, 'on').setInteractive();
        let off = this.add.sprite(500, 600, 'off').setInteractive();
        let lightOn = this.add.sprite(500, 300, 'light_on').setInteractive();
        let lighOff = this.add.sprite(500, 300, 'light_off').setInteractive();
        let gameFinish = false;
        back.visible = true;
        lightOn.visible = true;
        on.visible = true;
        off.visible = false;
        lighOff.visible = false;
        on.setScale(0.8);
        off.setScale(0.8);
        lightOn.setScale(0.2);

        off.on('pointerdown', function (pointer) {
            console.log(pointer.x);
            off.visible = false;
            on.visible = true;
            lightOn.visible = true;
            lighOff.visible = false;
            back.visible = true;

        })

        on.on('pointerdown',  (pointer) => {
            on.visible = false;
            off.visible = true;
            lightOn.visible = false;
            lighOff.visible = true;
            back.visible = false;
            gameFinish = true;
            if(gameFinish = true){
                this.time.delayedCall(1000, () => {
                    this.scene.switch('level2')
                })
            }
        })
    }
};


