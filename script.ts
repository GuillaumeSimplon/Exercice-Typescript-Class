import Spaceship from "./vaisseaux/Spaceship";
import Fighter from "./vaisseaux/Fighter";
import Explorer from "./vaisseaux/Explorer";
import Cargo from "./vaisseaux/Cargo";


const mySpaceship = new Spaceship('"Le Glorieux"', 480, 110, 180000, '4 canons à impulsion')
console.log(mySpaceship.SpaceshipName())
console.log(mySpaceship.SpaceshipWeight())
console.log(mySpaceship.SpaceshipSize())
console.log(mySpaceship.SpaceshipSpeed())
console.log(mySpaceship.SpaceshipArtillery())

const myFighter = new Spaceship('"Le destructeur"', 30, 22, 100000, '2 canons laser et 2 lance-missiles à impulsion éléctromagnétique')
console.log(myFighter.SpaceshipName())
console.log(myFighter.SpaceshipWeight())
console.log(myFighter.SpaceshipSize())
console.log(myFighter.SpaceshipSpeed())
console.log(myFighter.SpaceshipArtillery())

const myExplorer = new Spaceship('"Le Vadrouilleur"', 45, 38, 110000, '2 canons laser et 2 bras-pince Tesla')
console.log(myExplorer.SpaceshipName())
console.log(myExplorer.SpaceshipWeight())
console.log(myExplorer.SpaceshipSize())
console.log(myExplorer.SpaceshipSpeed())
console.log(myExplorer.SpaceshipArtillery())

const myCargo = new Spaceship('"L\'Hyperdone"', 350, 92, 140000, '12 canons à impulsion')
console.log(myCargo.SpaceshipName())
console.log(myCargo.SpaceshipWeight())
console.log(myCargo.SpaceshipSize())
console.log(myCargo.SpaceshipSpeed())
console.log(myCargo.SpaceshipArtillery())