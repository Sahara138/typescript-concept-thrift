class Student {
    name: string;
    age: number;
    grade: string;
    address: {
        city: string;
        country: string;
    }

    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}