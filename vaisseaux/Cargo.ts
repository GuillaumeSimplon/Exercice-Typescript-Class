import Spaceship from "./Spaceship";


class Cargo extends Spaceship {
    constructor(
        name: string,
        weight: number,
        size: number,
        speed: number,
        artillery: string
    ) {
        super(name, weight, size, speed, artillery)
    }
}

export default Cargo