// Constraint Example: strict rules for types

type 

const addStudentCoursewithConstraint = <T extends { id: number; name: string, dateofBirth: Date }>(studentInfo: T) => {
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

const studentwithConstraint2 = {
    id: 2,
    name : 'Jhankar Mahbub',
    hasCar: true,
}

const studentwithConstraint3 = {
    hasLaptop: true,
    
}

const CONSTRresult = addStudentCoursewithConstraint(studentwithConstraint1);
const CONSTRresult2 = addStudentCoursewithConstraint(studentwithConstraint2);

