type User = {
    name: string;
    age: number;
}

// interface: object structure:(object, array )type: can be used for primitive types, union types, intersection types, etc.
interface IUser {
    name: string;
    age: number;
}
type Role = 'admin' | 'user' | 'guest';

type UserWithRole = User & Role;

const user1: User = {
    name: 'John',
    age: 30
}

const user2: User = {
    name: 'Jane',
    age: 25
}

interface IUserWithRole extends IUser {
    role: Role;
}

type IsAdmin = boolean;

const isAdmin: IsAdmin = true;



type Add = (a: number, b: number) => number;

interface IAdd {
    (a: number, b: number): number;
}
const add: Add = (a, b) => a + b;
const addInterface: IAdd = (a, b) => a + b;


type Friends = string[];

const friends: Friends = ['Alice', 'Bob', 'Charlie'];

interface IFriends {
    [index: number]: string;
}