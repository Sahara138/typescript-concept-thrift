// keyof: type operator to get keys of an object type
 
type Vehicle = {
    // car: string;k
    bike: string;
    boat: string;
}
type myVehicle = keyof Vehicle; // 'car' | 'bike' | 'boat'

type RichPeoplesVehicles = {
    car: string;
    bike: string;
    boat: string;
}
const myVehicle1: myVehicle = 'car';


