class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02');
    }

    init(data) {
        this.playerName = data.playerName;
    }

    preload(){
        this.load.image('button', './assets/botao.png')
    }

    create() {
        this.text = this.add.text(-100, 700, `Olá ${this.playerName}, bão?`, { fill: '#333' });

        const botao = this.add.sprite( 700, 500, 'button').setInteractive().setScale(0.1);

        this.add.text (100, 500, `Clique aqui para saber como ${this.playerName} está se sentindo`).setColor(0xFFFFFF)

        botao.on('pointerdown', () => {
            this.scene.start('Cena03', { playerName: this.playerName } )
        })
    }

    update(){
        if(this.text.x < 400){
            this.text.x += 10;
        }
        if(this.text.y>300){
            this.text.y -=10;
        }
    }
}