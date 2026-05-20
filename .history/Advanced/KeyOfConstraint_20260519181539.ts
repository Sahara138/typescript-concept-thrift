// keyof: type operator to get keys of an object type
 
type Vehicle = {
    car: string; //key : value
    bike: string;
    boat: string;
}
type myVehicle = keyof Vehicle; // 'car' | 'bike' | 'boat'

const myVehicle1: myVehicle = 'car';


