class Cena01 extends Phaser.Scene {
    constructor() {
        super('Cena01');
    }

    create() {
        // Serve para exibir o overlay de entrada
        document.getElementById('inputOverlay').style.display = 'block';

        // Configura o evento de clique no botão
        document.getElementById('startButton').addEventListener('click', () => {
            const playerName = document.getElementById('nameInput').value;
            this.scene.start('Cena02', { playerName: playerName });
            // Oculta o overlay após iniciar
            document.getElementById('inputOverlay').style.display = 'none';
        });
    }
}