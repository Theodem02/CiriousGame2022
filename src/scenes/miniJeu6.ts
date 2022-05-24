import Phaser from "phaser";

export default class Game extends Phaser.Scene {
    constructor() {
        super('MiniJeu6')
    }

    create() {
        let pc = this.add.sprite(500, 300, 'pc');
        let up = this.add.sprite(300, 350, 'pcbuttOn').setInteractive();
        let down = this.add.sprite(300, 350, 'pcbuttOff').setInteractive();
        up.setScale(0.2);
        down.setScale(0.2);
        down.visible = false;
    
    
        this.anims.create({
            key: 'off',
            frames: [{
                key: 'pc',
                frame: 'pc0.png'
            },
            {
                key: 'pc',
                frame: 'pc1.png'
            },
            {
                key: 'pc',
                frame: 'pc2.png'
            },
            {
                key: 'pc',
                frame: 'pc3.png'
            },
    
            {
                key: 'pc',
                frame: 'pc7.png'
    
    
            },
            {
                key: 'pc',
                frame: 'pc8.png'
            }],
            frameRate: 10,
        });
        
        up.on('pointerdown',  (pointer) => {
            up.visible = false;
            down.visible = true;
            pc.play('off');
            this.time.delayedCall(1000, () => {
                this.scene.switch('level1')
            })
        })
    
        down.on('pointerdown',(pointer) =>{
            down.visible = false;
            up.visible = true;
            
        })
       
    }
}