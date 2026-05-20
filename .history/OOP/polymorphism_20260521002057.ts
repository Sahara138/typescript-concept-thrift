// 2nd Piller of OOP - Polymorphism-bohurupi


// polymorphism means many forms. It allows us to use a single interface to represent different types of objects. In TypeScript, we can achieve polymorphism through method overriding and interfaces.

// Method Overriding Example


class HealthyPeople{
    getSleep(){
        console.log(`I am a normal healthy person. I sleep for 8 hours`)
    }
}

class People extends HealthyPeople{
    getSleep(){
        console.log(`I am a normal person. I sleep for 6 hours`)
    }
}

class NextLevelDeveloper extends HealthyPeople{
    getSleep(){
        console.log(`I am a next level developer. I sleep for 4 hours`)
    }
}

const healthyPerson = new HealthyPeople();
const normalPerson = new People();
const nextLevelDeveloper = new NextLevelDeveloper();

healthyPerson.getSleep(); // Output: I am a normal healthy person. I sleep for 8 hours
normalPerson.getSleep(); // Output: I am a normal person. I sleep for 6 hours
nextLevelDeveloper.getSleep(); // Output: I am a next level developer. I sleep for 4 hours


class Shape {
    getArea(){
        return 0;
    }
}
class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius; // Area of circle with given radius     
    }
}

class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea(): number {
        return this.length * this.width; // Area of rectangle with given length and width
    }
}

const getArea = (param: Shape) => {