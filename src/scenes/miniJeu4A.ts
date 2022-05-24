import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('MiniJeu4A')
    }

    create() {
        let machine2 = this.add.sprite(500, 500, 'machine 2');
        let machine3 = this.add.sprite(500, 500, 'machine 3');
        let machine4 = this.add.sprite(500, 500, 'machine 4');
        let machine5 = this.add.sprite(500, 500, 'machine 5');
        let machine6 = this.add.sprite(500, 500, 'machine 6');
        let machine7 = this.add.sprite(500, 500, 'machine 7');
        let machine8 = this.add.sprite(500, 500, 'machine 8');
        let machine9 = this.add.sprite(500, 500, 'machine 9');
        let plus = this.add.sprite(587,451, 'button+').setInteractive();
        let moins = this.add.sprite(625, 451, 'button-').setInteractive();
        let i = 9;
        machine2.visible = false;
        machine3.visible = false;
        machine4.visible = false;
        machine5.visible = false;
        machine6.visible = false;
        machine7.visible = false;
        machine8.visible = false;
        machine9.visible = true;

        plus.on('pointerdown',  (pointer) => {
            console.log(pointer.x,pointer.y)
            i++;
            switch (i) {
                case 2:
                    machine2.visible = false;
                case 3:
                    machine3.visible = false;
                    machine2.visible = false;
                    break;
                case 4:
                    machine4.visible = true;
                    machine3.visible = false;
                    this.time.delayedCall(1000, () => {
                        this.scene.switch('level2')
                    })
                    break;
                case 5:
                    machine5.visible = true;
                    machine4.visible = false;
                    break;
                case 6:
                    machine6.visible = true;
                    machine5.visible = false;
                    break;
                case 7:
                    machine7.visible = true;
                    machine6.visible = false;
                    break;
                case 8:
                    machine8.visible = true;
                    machine7.visible = false;
                    break;
                case 9:
                    machine8.visible =false;
                    machine9.visible = true;
                    break;
                case 10:
                    i = 9;
                    break;
        

            }
        })

        moins.on('pointerdown',  (pointer) => {
            i--;
            console.log(pointer.x,pointer.y)
            switch (i) {
                case 1:
                    i = 2;
                    console.log('min');
                    break;
                case 2:
                    machine2.visible = false;
                    machine3.visible = false;
                    plus.visible = false;
                    moins.visible = false;
                    machine4.visible = true;
                    break;
                case 3:
                    machine3.visible = false;
                    plus.visible = false;
                    moins.visible = false;
                    machine4.visible = true;
                    break;
                case 4:
                    machine4.visible = true;
                    machine5.visible = false;
                    this.time.delayedCall(1000, () => {
                        this.scene.switch('level2')
                    })
                    break;
                case 5:
                    machine5.visible = true;
                    machine6.visible = false;
                    break;
                case 6:
                    machine6.visible = true;
                    machine7.visible = false;
                    break;
                case 7:
                    machine7.visible = true;
                    machine8.visible = false;
                    break;
                case 8:
                    machine8.visible = true;
                    machine9.visible = false;
                    break;
           
            }
        })
    }
}