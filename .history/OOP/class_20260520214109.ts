class Animal {
    name: string;
    species: string;
    sound: string;

    //Recieve the values from the user and assign them to the properties of the class
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    //Method to make the animal sound
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Buddy", "Canine", "Woof!");
console.log(dog.name); // Output: Buddy

const cat = new Animal("Whiskers", "Feline", "Meow!");
console.log(cat.); // Output: Meow!

