// object destrucruring
// array destructuring

const user = {
    id: 1,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    email: "john.doe@example.com",
    gender: "male",
    favouriteColor: "Black"

}

// const myFavouriteColor = user.favouriteColor;
// console.log(myFavouriteColor); // Output: "Black"

// object destructuring
const { favouriteColor : myFavouriteColor } = user;
console.log(myFavouriteColor); // Output: "Black"