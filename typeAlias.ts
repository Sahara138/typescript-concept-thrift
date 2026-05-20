// type alias

type User = {
    id: number,
    name: { firstName: string, lastName: string },
    age: number,
    email: string,
    gender: string,
    favouriteColor: string,
    contact : {
        phone: string,
        address: string,
    }
}

const user1 : User = {
    id: 1,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    email: "john.doe@example.com",
    gender: "male",
    favouriteColor: "Black",
    contact: {
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA"
    }
}

type IsAdmnin = true;
const isAdmin : IsAdmnin = true;

type ID = number | string;
const userId : ID = 12345;
const anotherUserId : ID = "abcde";