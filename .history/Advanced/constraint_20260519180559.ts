// Constraint Example: strict rules for types


const addStudentCoursewithConstraint = <T extends { id: number; name: string, dateofBirth: Date }>(studentInfo: T) => {
    return {
        ...studentInfo,
        course: 'TypeScript'
    }
}
 
const studentwithConstraint1 = {
    id: 1,
    name : 'John',
    dateofBirth: new Date('1990-01-01'),
}

const studentwithConstraint2 = {
    id: 2,
    name : 'Jhankar Mahbub',
    dateofBirth: true,
}

const studentwithConstraint3 = {
    hasLaptop: true,
    dateofBirth: new Date('1990-01-01')
}

const CONSTRresult = addStudentCoursewithConstraint(studentwithConstraint1);
const CONSTRresult2 = addStudentCoursewithConstraint(studentwithConstraint2);

