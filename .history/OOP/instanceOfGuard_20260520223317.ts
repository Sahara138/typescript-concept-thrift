// Instance of Guard Example: checking if an object is an instance of a specific class

class Car {
    constructor(public name: string, public model: string) {}
}

class Bike extends Car {
    constructor(name: string, model: string, public type: string) {
        super(name, model);
    }
    