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
        this.address = address;
    }

    getSleepSchedule( numberOfHours: number) {
        return `${this.name} sleeps from 10 PM to 6 AM. Total hours: ${numberOfHours}`;
    }
}

class Teacher {
    name: string;
    age: number;
    subject: string;
    designation: string;
    address: {
        city: string;
        country: string;
    }

    constructor(name: string, age: number, subject: string, designation: string, address: { city: string; country: string }) {
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.designation = designation;
        this.address = address;
    }

    takeClass(numberOfClasses: number) {
        return `${this.name} takes ${numberOfClasses} classes per day.`;
    }
}

const stu1 = new Student('John', 20, 'A', { city: 'New York', country: 'USA' });


const teacher1 = new Teacher('Ms. Smith', 35, 'Mathematics', 'Senior Teacher', { city: 'Los Angeles', country: 'USA' });

stu1.getSleepSchedule(8);
teacher1.takeClass(5);