import Phaser from 'phaser'
import Preloader from './scenes/Preloader'
import Game from './scenes/Game'
import Level1 from './scenes/level1'
import Level2 from './scenes/level2'
import MiniJeu1 from './scenes/miniJeu1'
import MiniJeu1A from './scenes/miniJeu1A'
import miniJeu1B from './scenes/miniJeu1B'
import MiniJeu2 from './scenes/miniJeu2'
import MiniJeu2A from './scenes/miniJeu2A'
import MiniJeu3 from './scenes/miniJeu3'
import MiniJeu4 from './scenes/miniJeu4'
import MiniJeu4A from './scenes/miniJeu4A'
import MiniJeu5 from './scenes/miniJeu5'
import MiniJeu6 from './scenes/miniJeu6'
import MiniJeu7 from './scenes/miniJeu7'
import Rules from './scenes/rules'
import RulesA from './scenes/rulesA'
import RulesB from './scenes/rulesB'
import Rules1 from './scenes/rules1'
import Rules1A from './scenes/rules1A'
import Rules2 from './scenes/rules2'
import Rules3 from './scenes/rules3'
import Rules3B from './scenes/rules3B'
import Rules4 from './scenes/rules4'
import Rules5 from './scenes/rules5'
import Rules6 from './scenes/rules6'
import Rules7 from './scenes/rules7'
import End from './scenes/End'
import Accueil from './scenes/accueil'


export default new Phaser.Game({
	type: Phaser.AUTO,
	width: 1000,
	height: 1000,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			//debug: true
		}
	},
	scene: [Preloader, Accueil, Game, Level1, Level2, Rules, RulesA, RulesB, Rules1, Rules1A, Rules2, Rules3, Rules3B, Rules4, Rules5, Rules6, Rules7, MiniJeu1, MiniJeu2, MiniJeu3, MiniJeu4 , MiniJeu1A , miniJeu1B, MiniJeu2A , MiniJeu4A, MiniJeu5, MiniJeu6, MiniJeu7, End],
	backgroundColor: "#d3d3d3",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	
	}
})