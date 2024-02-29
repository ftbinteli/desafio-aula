// Define uma nova cena chamada Cena02.
class Cena02 extends Phaser.Scene {
    constructor() {
        super('Cena02'); // Inicializa a cena com o nome 'Cena02'.
    }

    init(data) {
        this.playerName = data.playerName; // Recebe o nome do jogador passado pela Cena01.
    }

    preload(){
        this.load.image('button', './assets/botao.png'); // Pré-carrega a imagem do botão a ser usado na cena.
    }

    create() {
        // Adiciona um texto de saudação para o jogador.
        this.text = this.add.text(-100, 700, `Olá ${this.playerName}, bão?`, { fill: '#333' });

        // Adiciona um botão interativo na cena.
        const botao = this.add.sprite(700, 500, 'button').setInteractive().setScale(0.1);

        // Adiciona um texto explicativo sobre o botão.
        this.add.text(100, 500, `Clique aqui para saber como ${this.playerName} está se sentindo`).setColor(0xFFFFFF);

        // Configura o evento de clique no botão para iniciar a Cena03, passando o nome do jogador.
        botao.on('pointerdown', () => {
            this.scene.start('Cena03', { playerName: this.playerName });
        });
    }

    update(){
        // Anima o texto movendo-o até uma posição definida.
        if(this.text.x < 400){
            this.text.x += 10;
        }
        if(this.text.y > 300){
            this.text.y -= 10;
        }
    }
}
