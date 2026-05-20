type User = {
    name: string;
    age: number;
}

// interface: object structure:object, array type: can be used for primitive types, union types, intersection types, etc.
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

type IsAdmin = boolean;

const isAdmin: IsAdmin = true;


co