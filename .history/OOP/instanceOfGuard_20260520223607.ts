// Instance of Guard Example: checking if an object is an instance of a specific class

class MyVehicle {
    constructor(public name: string, public model: string) {}

    engineStart() {
        return `${this.name} ${this.model} engine started.`;
    }
}

class Bike extends MyVehicle {
    constructor(name: string, model: string, public type: string) {
        super(name, model);
    }

}

class Car extends MyVehicle {
    constructor(name: string, model: string, public brand: string) {
        super(name, model);
    }   

    giveService() {
        return `${this.name} ${this.model} is being serviced.`;
    }
}


const  