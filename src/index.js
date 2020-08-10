import Phaser from "phaser";
import mp3 from "./assets/Orbital\ Colossus.mp3";
import background from "./assets/scifi_platform_BG1.jpg";
import tiles from "./assets/scifi_platformTiles_32x32.png";

var config = {
  /*
    The type property can be either Phaser.CANVAS, Phaser.WEBGL, or Phaser.AUTO. This is the rendering context that you
    want to use for your game. The recommended value is Phaser.AUTO which automatically tries to use WebGL, but if the
    browser or device doesn't support it it'll fall back to Canvas. The canvas element that Phaser creates will be 
    simply be appended to the document at the point the script was called, but you can also specify a parent container 
    in the game config should you wish.
  */
  type: Phaser.AUTO,
  width: 800, // 800px
  height: 600, // 600px
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: function preload() {
      // this.load.setBaseURL("http://labs.phaser.io");

      this.load.image("background", background);

      /*
        Due to different browsers supporting different audio file types you should usually provide your audio files in a
        variety of formats. ogg, mp3 and m4a are the most common. If you provide an array of URLs then the Loader will
        determine which one file to load based on browser support.
      */
      this.load.audio({
        key: 'music',
        url: [mp3 /*, ogg, m4a */] // import more files and add here for more support
      });
      this.load.spritesheet('tiles', tiles, {
        frameWidth: 32,
        frameHeight: 32
      });
    },
    create: function create() {
      // this.sound.add('music');
      this.sound.play('music');
      this.add.image(400, 300, "background");

      // var particles = this.add.particles("red");

      // var emitter = particles.createEmitter({
      //   speed: 100,
      //   scale: { start: 1, end: 0 },
      //   blendMode: "ADD",
      // });

      var box = this.physics.add.image(400, 100, "tiles", 15);

      box.setVelocity(100, 200);
      box.setBounce(1, 1);
      box.setCollideWorldBounds(true);

      // emitter.startFollow(box);
    },
    update: function () {},
  },
};

var game = new Phaser.Game(config);
