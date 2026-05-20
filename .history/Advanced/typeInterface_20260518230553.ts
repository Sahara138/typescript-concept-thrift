type User = {
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