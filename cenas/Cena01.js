// Define uma nova cena no Phaser chamada Cena01.
class Cena01 extends Phaser.Scene {
    constructor() {
        super('Cena01'); // Chama o construtor da classe Scene com o nome 'Cena01'.
    }

    create() {
        // Exibe o overlay de entrada configurado no HTML ao criar a cena.
        document.getElementById('inputOverlay').style.display = 'block';

        // Adiciona um ouvinte de evento de clique ao botão de início.
        document.getElementById('startButton').addEventListener('click', () => {
            const playerName = document.getElementById('nameInput').value; // Pega o nome do jogador do campo de entrada.
            this.scene.start('Cena02', { playerName: playerName }); // Inicia a Cena02, passando o nome do jogador como dado.
            // Oculta o overlay de entrada após iniciar a cena.
            document.getElementById('inputOverlay').style.display = 'none';
        });
    }
}
