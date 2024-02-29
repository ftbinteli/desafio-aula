// Define uma nova cena chamada Cena03.
class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03'); // Inicializa a cena com o nome 'Cena03'.
    }

    init(data) {
        this.playerName = data.playerName; // Recebe o nome do jogador passado pela Cena02.
    }

    preload() {
        this.load.image("feliz", "./assets/feliz.png"); // Pré-carrega a imagem a ser usada na cena.
    }

    create() {
        // Adiciona um texto indicando que o jogador está feliz.
        this.text = this.add.text(-100, 700, `${this.playerName} está bão demais :D`, { fill: '#333' });

        // Adiciona uma imagem à cena.
        this.add.image(400, 300 , "feliz");
    }

    update(){
        // Anima o texto movendo-o até uma posição definida.
        if(this.text.x < 300){
            this.text.x += 10;
        }
        if(this.text.y > 300){
            this.text.y -= 10;
        }
    }
}
