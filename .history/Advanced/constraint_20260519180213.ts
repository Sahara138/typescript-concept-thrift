// Constraint Example: strict rules for types


const addStudentCoursewithConstraint = <T extends { id: number; name: string }>(studentInfo: T) => {
    return {
        ...studentInfo,
        course: 'TypeScript'
    }
}
 
const studentwithConstraint1 = {
    id: 1,
    name : 'John',
    hasPencil: true,
}

const student2 = {
    id: 2,
    name : 'Jhankar Mahbub',
    hasCar: true,
}

const student3 = {
    hasLaptop: true,
}

const result = addStudentCourse(student1);
const result2 = addStudentCourse(student2);

