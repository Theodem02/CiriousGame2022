import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('Rules3B')
    }

    create() {
        let done = 0
        this.add.image(500, 500, 'dialogue4')
        this.input.keyboard.on('keydown-SPACE',  () => {
            if(done == 0){
                this.scene.switch('MiniJeu4A')
                done = 1;
            }
            else if(done ==1){
                this.scene.switch('level2')
            }
        });
    }
};


