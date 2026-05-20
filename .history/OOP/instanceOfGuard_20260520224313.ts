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

// Function Guard to check the type of vehicle
CONST getVehicleInfo = (vehicle: MyVehicle) => {
const getVehicleInfo = (vehicle: MyVehicle) => {
    if (vehicle instanceof Car) {
        vehicle.giveService(); // Accessing Car-specific method
        return `Car: ${vehicle.name} ${vehicle.model}, Brand: ${vehicle.brand}`;
    } else if (vehicle instanceof Bike) {
        return `Bike: ${vehicle.name} ${vehicle.model}, Type: ${vehicle.type}`;
    } else {
        return `Vehicle: ${vehicle.name} ${vehicle.model}`;
    }
}

const myCar = new Car("Toyota", "Camry", "Toyota");
const myBike = new Bike("Yamaha", "R15", "Sport");