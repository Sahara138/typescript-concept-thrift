class Student {
    name: string;
    age: number;
    grade: string;
    address: {
        city: string;
        country: string;
    }

    constructor(name: string, age: number, grade: string, address: { city: string; country: string }) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getSleepSchedule() {
        return `${this.name} sleeps from 10 PM to 6 AM.`;
    }
}

const stude