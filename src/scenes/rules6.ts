import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('Rules6')
    }

    create() {
        this.add.image(500, 500, 'dialogue6')
        this.input.keyboard.on('keydown-SPACE',  () => {
            this.scene.switch('game')
        });
    }
};


