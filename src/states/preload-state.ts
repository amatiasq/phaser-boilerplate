import State = Phaser.State;
import Sprite = Phaser.Sprite;


export default class PreloadState extends State {

  preload() {
    const world = this.game.world;
    const preloadBar: Sprite = this.add.sprite(world.centerX, world.centerY, 'bar');
    preloadBar.anchor.set(0.5);
    preloadBar.scale.setTo(3);
    this.load.setPreloadSprite(preloadBar);

    // Load assets
  }

  create() {
    this.game.state.start('Game');
  }

}
