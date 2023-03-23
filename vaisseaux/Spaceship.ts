class Spaceship {
    name: string
    weight: number;
    size: number;
    speed: number;
    artillery: string;

    constructor(name: string, weight: number, size: number, speed: number, artillery: string) {
        this.name = name
        this.weight = weight;
        this.size = size;
        this.speed = speed;
        this.artillery = artillery;
    }
    SpaceshipName() {
        console.log(`Ce vaisseau s'appelle ${this.name}.`)
    }
    SpaceshipWeight() {
        console.log(`Ce vaisseau pèse ${this.weight} tonnes.`)
    }
    SpaceshipSize() {
        console.log(`Ce vaisseau fait ${this.size} mètres de long.`)
    }
    SpaceshipSpeed(){
        console.log(`La vitesse de pointe de ce vaisseau est de ${this.speed} Km/sec.`)
    }
    SpaceshipArtillery(){
        console.log(`Ce vaisseau possède ${this.artillery}.`)
    }
}


export default Spaceship