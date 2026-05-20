// Type Guard Example: checking types at runtime

// in typeof operator

const add = (num1: number | , num2: number) => {
    return num1 + num2;
};

add(5, 10); // 15

add(2,"3"); // 23