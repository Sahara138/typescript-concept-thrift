// keyof: type operator to get keys of an object type
 
type Vehicle = {
    car: string; //key : value
    bike: string;
    boat: string;
}
type myVehicle = keyof Vehicle; // 'car' | 'bike' | 'boat'
type userType = {
    id: string;
    name: string;
    age: number;
    email: string;
    address: {
        city: string;
        country: string;
    }
};

const myVehicle1: myVehicle = 'car';
const myVehicle2: myVehicle = 'bike';

const users : userType = {
    id: '1',
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address:{
        city: 'New York',
        country: 'USA'
     }
}
const myId = users["id"];
const myName = users["name"];
const myAge = user["age"];
const myEmail = user["email"];
const myCity = user["address"]["city"];
const myCountry = user["address"]["country"];

const getFromObject  = (obj: object, key: string) => {
    return obj[key];
}