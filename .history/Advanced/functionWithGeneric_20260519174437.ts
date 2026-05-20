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



// tuple 