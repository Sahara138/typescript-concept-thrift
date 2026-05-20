// nullable and unknown types in TypeScript

const getUserById = (input: string) => {
    if (input) {
        console.log(`Fetching user with ID: ${input}`);
    } else {
        console.log("No user ID provided");
    }
};

getUserById("12345"); // Fetching user



const discountCalculator = (price: number, discount?: number) => {
    if (discount) {
        return price - (price * discount / 100);