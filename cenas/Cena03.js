class Cena03 extends Phaser.Scene {
    constructor() {
        super('Cena03');
    }

    init(data) {
        this.playerName = data.playerName;
    }

    preload() {
        this.load.image("feliz", "./assets/feliz.png");

    }

    create() {
        this.text = this.add.text(-100, 700, `${this.playerName} está bão demais :D`, { fill: '#333' });

        this.add.image(400, 300 , "feliz");

    }

    update(){
        if(this.text.x < 300){
            this.text.x += 10;
        }
        if(this.text.y>300){
            this.text.y -=10;
        }
    }
}