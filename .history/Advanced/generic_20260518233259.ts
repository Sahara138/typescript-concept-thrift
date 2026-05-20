// dynamically generalize

// type GenericArray<value> = Array<value>;
type GenericArray<T> = Array<T>;

// const friends : string[] = ['Alice', 'Bob', 'Charlie'];
const friends : GenericArray<string> = ['Alice', 'Bob', 'Charlie'];

// const rollNumbers : number[] = [1, 2, 3, 4, 5];
const rollNumbers : GenericArray<number> = [1, 2, 3, 4, 5];

// const isEligible : boolean[] = [true, false, true, true, false];
const iseligible : GenericArray<boolean> = [true, false, true, true, false];

// Tuples

const coordinates = [10, 20] as [number, number];

const user: [string, number] = ['John', 30];

type Coord