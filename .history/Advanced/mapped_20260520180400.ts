// mapped types

// map

const arrayOfNum : number[] = [1, 2, 3, 4, 5];

const arrayOfString : string[] = ['1', '2', '3', '4', '5'];

const arrayOfBoolean : boolean[] = [true, false, true, true, false];


const arrayOfStringUsingMap : string[] = arrayOfNum.map(num => num.toString());

// type AreaOfString = {
//     height: string;
//     width: string;
// }
type AreaOfNumber = {
    height: number;
    width: number;
}

type AreaOfString = {
    [key in "height" | "width"]: string;
}


type AreaOfBoolean = {
    [key in keyof AreaOfNumber]: boolean;
}

type area<T> = {
    [key in keyof T]: string;
}

const area1 : area<AreaOfNumber> = {
    height: '10',
    width: '20'
}