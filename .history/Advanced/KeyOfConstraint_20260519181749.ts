// keyof: type operator to get keys of an object type
 
type Vehicle = {
    car: string; //key : value
    bike: string;
    boat: string;
}
type myVehicle = keyof Vehicle; // 'car' | 'bike' | 'boat'

const myVehicle1: myVehicle = 'car';
const myVehicle2: myVehicle = 'bike';

const userList = {
    id: 1,
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address:{
        city: 'New York',
        country: 'USA'
     }
}
const myId = user["id"]