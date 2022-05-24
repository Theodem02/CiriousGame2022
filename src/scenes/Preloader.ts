import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.atlas('perso', '/images/perso.png', '/json/perso.json');
        this.load.image('tiles', '/images/all.png');
        this.load.tilemapTiledJSON('house', '/json/map.json');
        this.load.tilemapTiledJSON('house1', '/json/stage1.json');
        this.load.tilemapTiledJSON('house2', '/json/stage2.json');
        this.load.spritesheet('fullscreen', '/images/fullscreen.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('off', '/images/switch_off.png');
        this.load.image('on', '/images/switch_on.png');
        this.load.image('light_on', '/images/light_on.png');
        this.load.image('light_off', '/images/light_off.png');
        this.load.image('back', '/images/lumiere.jpg');
        this.load.image('remote', '/images/remoteTV.png');
        this.load.atlas('anim', '/images/animTV.png', '/json/animTV.json');
        this.load.atlas('clim', '/images/clim.png', '/json/clim.json');
        this.load.image('machine 2', '/images/machine20.png');
        this.load.image('machine 3', '/images/machine30.png');
        this.load.image('machine 4', '/images/machine40.png');
        this.load.image('machine 5', '/images/machine50.png');
        this.load.image('machine 6', '/images/machine60.png');
        this.load.image('machine 7', '/images/machine70.png');
        this.load.image('machine 8', '/images/machine80.png');
        this.load.image('machine 9', '/images/machine90.png');
        this.load.image('button+','/images/button.png');
        this.load.image('button-','/images/button-.png');
        this.load.image('dialogue1', '/images/popup1.png')
        this.load.image('dialogue2', '/images/popup2.png');
        this.load.image('dialogue3', '/images/popup3.png');
        this.load.image('dialogue4', '/images/popup4.png');
        this.load.image('dialogue5', '/images/popup5.png');
        this.load.image('dialogue6', '/images/popup6.png');
        this.load.image('dialogue7', '/images/popup7.png');
        this.load.image('dialogue8', '/images/popup8.png')
        this.load.image('pcbuttOn','/images/pcbutt0.png');
        this.load.image('pcbuttOff','/images/pcbutt2.png');
        this.load.atlas('pc', '/images/pc.png', '/json/pc.json');
        this.load.image('buttonPlay', '/images/buttonPlay.png');
        this.load.image('logoeco', '/images/logoeco.png');
        this.load.image('tree', '/images/tree.png');
        this.load.image('tree1', '/images/tree.png');
        this.load.image('tree2', '/images/tree.png');
        this.load.image('tree3', '/images/tree.png');
        this.load.image('tree4', '/images/tree.png');
        this.load.image('tree5', '/images/tree.png');
        this.load.image('tree6', '/images/tree.png');
        this.load.image('tree7', '/images/tree.png');
        this.load.image('tree8', '/images/tree.png');
        this.load.image('tree9', '/images/tree.png');
        this.load.image('tree10', '/images/tree.png');
        this.load.image('tree11', '/images/tree.png');
        this.load.image('tree12', '/images/tree.png');
        this.load.image('tree13', '/images/tree.png');
        this.load.image('tree14', '/images/tree.png');
        this.load.image('tree15', '/images/tree.png');
        this.load.image('tree16', '/images/tree.png');
        this.load.image('tree17', '/images/tree.png');
        this.load.image('tree18', '/images/tree.png');
        this.load.image('tree19', '/images/tree.png');
        this.load.image('bush', '/images/bush.png');
        this.load.image('bush1', '/images/bush.png');
        this.load.image('bush2', '/images/bush.png');
        this.load.image('bush3', '/images/bush.png');
        this.load.image('bush4', '/images/bush.png');
        this.load.image('bush5', '/images/bush.png');
        this.load.image('bush6', '/images/bush.png');
        this.load.image('bush7', '/images/bush.png');
        this.load.image('bush8', '/images/bush.png');
        this.load.image('bush9', '/images/bush.png');
        this.load.image('bush10', '/images/bush.png');
        this.load.image('bush11', '/images/bush.png');
        this.load.image('bush12', '/images/bush.png');
        this.load.image('bush13', '/images/bush.png');
        this.load.image('bush14', '/images/bush.png');
        this.load.image('bush15', '/images/bush.png');
        this.load.image('bush16', '/images/bush.png');
        this.load.image('bush17', '/images/bush.png');
        this.load.image('bush18', '/images/bush.png');
        this.load.image('bush19', '/images/bush.png');
        this.load.image('ecohouse', '/images/ecohouse.png');
        this.load.image('restart', '/images/restart.png');
        this.load.image('herbe', '/images/herbe.png');
        this.load.image('fourAll','/images/fourAll.png');
        this.load.image('fourEt','/images/fourEt.png');
        this.load.image('fourButt','/images/fourButt.png');

    }

    create() {
        this.scene.start('accueil');
    }
}