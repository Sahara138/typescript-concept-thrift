// Generic Function Example

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithBoolean = (value: boolean) => [value];

const createArrayWithObject = (value: { id: number; name: string; age: number }) =>{    
    return [value];
}

const createArrayWithGeneric = <T>(value: T): T[] => {
    return [value];
}
const arrString = createArrayWithGeneric('Hello');
const arrNumber = createArrayWithGeneric(42);
const arrBoolean = createArrayWithGeneric(true);
const arrObject = createArrayWithGeneric<{ id: number; name: string; age: number }>({ id: 1, name: 'John', age: 30 });



// tuple example

const createArrayWithTuple = <T1, T2>(param1: T1, param2: T2): [T1, T2] => {
    return [param1, param2];
}


const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}

const tuple1 = createArrayWithTuple('Hello', 42);
const tuple2 = createArrayWithTuple(true, { id: 1, name: 'John', age: 30 });
const tuple3 = createArrayTupleWithGeneric('World', false);
const tuple4 = createArrayTupleWithGeneric({ id: 2, name: 'Jane', age: 25 }, [1, 2, 3]);


const addStudentCourse = (studentInfo: T) => {
    return {
        ...studentInfo,
    }
}
 
const student1 = {
    id: 1,
    name : 'John',
    hasPencil: true,
}

const student2 = {
    id: 2,
    name : 'Jhankar Mahbub',
    hasCar: true,
}