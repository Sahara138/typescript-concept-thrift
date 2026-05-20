// Conditionals in TypeScript : je type condition er upor nirvor kore

type A = null
type B = undefined

type C = A extends null ? true : false  ; 

type D = A extends number  ? true : B extends undefined ? true : false  ;


type RichPeoplesVehicle = {
    bike: string;
    car: string;
    yacht: string;
};

type checkVehicle<T> = T 