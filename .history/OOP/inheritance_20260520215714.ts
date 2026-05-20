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

    getSleepSchedule( numberOfHours: number) {
        return `${this.name} sleeps from 10 PM to 6 AM. Total hours: ${numberOfHours}`;
    }
}

class Teacher {
    name: string;
    subject: string;
    des
}

const student1 = new Student('John', 20, 'A', { city: 'New York', country: 'USA' });
const teacher1 = new Teacher('Alice', 'Math');

student1.getSleepSchedule(8);