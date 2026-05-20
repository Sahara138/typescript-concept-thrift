// ? : ternary operator : decision making
//  ?? : nullish coalescing operator : default value
// ?. : optional chaining operator : safe property access


// Ternary operator
const userAge = 21

const biyerJonneEligible = (age:number) => {
    // if(userAge >= 21) {
    //     console.log("You are ekligible")
    // } else {
    //     console.log("You are not eligible")
    // }

    const message = age >= 21 ? "You are ekligible" : "You are not eligible";
    console.log(message);
};

biyerJonneEligible(90); // You are ekligible



const userTheme = undefined;

const selectedTheme = userTheme ?? "light";