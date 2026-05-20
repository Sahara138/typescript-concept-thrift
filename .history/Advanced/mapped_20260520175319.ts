// mapped types

// map

const arrayOfNum : number[] = [1, 2, 3, 4, 5];

const arrayOfString : string[] = ['1', '2', '3', '4', '5'];

const arrayOfBoolean : boolean[] = [true, false, true, true, false];


const arrayOfStringUsingMap : string[] = arrayOfNum.map(num => num.toString());

type AreaOfString = {