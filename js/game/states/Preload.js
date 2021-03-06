GameJam.Preload = {
    preload: function() {
        this.ready = false;

        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);
        this.splash.scale.setTo(1)
        this.load.image('background', 'assets/images/background.png');
        this.load.image('dark', 'assets/images/dark.png');
        this.load.spritesheet('mario', 'assets/images/mario.png', 454, 865, 10);
        this.load.spritesheet('browser', 'assets/images/browser.png', 1260, 1030, 2);
        this.load.spritesheet('monster', 'assets/images/monster.png', 220, 226, 2);
        this.load.spritesheet('pianta', 'assets/images/pianta.png', 220, 226, 2);
        this.load.spritesheet('fly', 'assets/images/fly.png', 209, 281, 2);

        this.load.image('square', 'assets/images/square.png');
        this.load.image('flower', 'assets/images/flower.png');

         this.load.image('ground', 'assets/images/ground.png');
         this.load.image('grass', 'assets/images/grass.png');
         this.load.image('block', 'assets/images/block.png');
         this.load.image('menu', 'assets/images/menu.png');
         this.load.image('logo', 'assets/images/mariologo.png');
         this.load.image('start', 'assets/images/start.png');
         this.load.image('asta', 'assets/images/asta.png');
         this.load.image('fumetto', 'assets/images/fumetto.png');

         this.load.image('gameOver', 'assets/images/gameOver.png');

        
            //text
            this.load.image('firstweek', 'assets/images/firstweek.png');
            this.load.image('itspride', 'assets/images/itspride.png');
            this.load.image('noitsnot', 'assets/images/notitsnot.png');
            this.load.image('timeto', 'assets/images/timeto.png');
            this.load.image('thereis', 'assets/images/thereis.png');
            this.load.image('thanks', 'assets/images/thanks.png');
            this.load.image('rising', 'assets/images/rising.png');
            this.load.image('pride', 'assets/images/pride.png');
            //finish
            this.load.audio('enemyHit', 'assets/audio/enemyhit.wav');
            this.load.audio('jump', 'assets/audio/jump.wav')
            this.load.audio('gameover', 'assets/audio/gameover.wav')
            this.load.audio('soundtrack', 'assets/audio/soundtrack.mp3')


            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        
        this.load.setPreloadSprite(this.preloadBar);


        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function() {
        // this.preloadBar.cropEnabled = false;
    },
    update: function() {
        if (this.ready === true) {
            this.state.start('Menu');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};