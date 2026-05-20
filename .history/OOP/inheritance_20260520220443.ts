class Parent {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    }
    constructor(name: string, age: number, address: { city: string; country: string }) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleepSchedule(numberOfHours: number) {
        return `${this.name} sleeps from 10 PM to 6 AM. Total hours: ${numberOfHours}`;
    }

}

// class Student extends Parent {
//     name: string;
//     age: number;
//     grade: string;
//     address: {
//         city: string;
//         country: string;
//     }

//     constructor(name: string, age: number, grade: string, address: { city: string; country: string }) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//         this.address = address;
//     }

//     getSleepSchedule( numberOfHours: number) {
//         return `${this.name} sleeps from 10 PM to 6 AM. Total hours: ${numberOfHours}`;
//     }
// }

class Student extends Parent {
    grade: string;
    constructor(name: string, age: number, grade: string, address: { city: string; country: string }) {
        super(name, age, address);
        this.grade = grade;
    }   

}

// class Teacher {
//     name: string;
//     age: number;
//     subject: string;
//     designation: string;
//     address: {
//         city: string;
//         country: string;
//     }

//     constructor(name: string, age: number, subject: string, designation: string, address: { city: string; country: string }) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//         this.designation = designation;
//         this.address = address;
//     }

//     getSleepSchedule(numberOfHours: number) {
//         return `${this.name} sleeps from 10 PM to 6 AM. Total hours: ${numberOfHours}`;
//     }

//     takeClass(numberOfClasses: number) {
//         return `${this.name} takes ${numberOfClasses} classes per day.`;
//     }
// }
class Teacher extends Parent {
    subject: string;
    designation: string;    

    

const stu1 = new Student('John', 20, 'A', { city: 'New York', country: 'USA' });


const teacher1 = new Teacher('Ms. Smith', 35, 'Mathematics', 'Senior Teacher', { city: 'Los Angeles', country: 'USA' });

stu1.getSleepSchedule(8);
teacher1.takeClass(5);