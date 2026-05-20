// dynamically generalize

type GenericArray<value> = Array<value>;

// const friends : string[] = ['Alice', 'Bob', 'Charlie'];
const friends : Array<string> = ['Alice', 'Bob', 'Charlie'];

// const rollNumbers : number[] = [1, 2, 3, 4, 5];
const rollNumbers : Array<number> = [1, 2, 3, 4, 5];

// const isEligible : boolean[] = [true, false, true, true, false];
const iseligible : Array<boolean> = [true, false, true, true, false];