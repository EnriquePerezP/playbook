export default class Pokemon {
    constructor(name) {
        this.name = name
    }
    sayHello (name) {
        console.log(`Mi pokemon ${this.name} te saluda`)
    }
}