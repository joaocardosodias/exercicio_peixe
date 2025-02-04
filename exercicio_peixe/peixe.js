var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixe/peixe_rosa.png');
    this.load.image('fundo', 'assets/fundox.png'); 
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400,450,'fundo').setScale(2.0);
    this.add.image(400, 100, 'logo').setScale(0.5);

    
    peixinho = this.add.image(400, 300, 'peixe').setScale(0.5, 0.5);
    peixinho.setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
