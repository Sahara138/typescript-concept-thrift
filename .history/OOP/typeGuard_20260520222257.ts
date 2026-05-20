// Type Guard Example: checking types at runtime

// in typeof operator
type 
const add = (num1: number | string, num2: number | string) => {
    // Type guard to check if both arguments are numbers
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }else{
        return num1.toString() + num2.toString();
    }
    // If not both numbers, convert to strings and concatenate
    // return String(num1) + String(num2);
};

add(5, 10); // 15

add(2,"3"); // 23

add('3', '4'); // '34'