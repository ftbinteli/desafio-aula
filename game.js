window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        backgroundColor: "b9eaff",
        scene: [Cena01, Cena02, Cena03]
        // scene: [ Cena02, Cena03]
    };

    const game = new Phaser.Game(config);
}
