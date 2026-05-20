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
const arrString = c('Hello');
const arrNumber = createArrayWithNumber(42);
const arrBoolean = createArrayWithBoolean(true);
const arrObject = createArrayWithObject({ id: 1, name: 'John', age: 30 });
