import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('MiniJeu7')
    }

    create() {
        let fourAll = this.add.sprite(400, 350, 'fourAll');
        let fourEt = this.add.sprite(400, 350, 'fourEt');
        let butt = this.add.sprite(414,314,'fourButt').setInteractive();
        fourEt.visible = false;

        butt.on('pointerdown',(pointer) =>{
            butt.visible = false;
            fourEt.visible = true;
            fourAll.visible = false;
            this.time.delayedCall(1000, () => {
                this.scene.switch('game')
            })
        });
    }
};


