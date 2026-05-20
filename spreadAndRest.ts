// spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

const friends = ["Alice", "Bob"];

const schoolFriends = ["Charlie", "David"];

const newFriends = ["Eve", "Frank"];

const allFriends = [...friends, ...schoolFriends, ...newFriends];
console.log(allFriends); // Output: ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]


const person1 = { name: "Alice", age: 30 };


const otherInfo = { hobby : "painting", city: "New York" };

const combinedPerson = { ...person1, ...otherInfo };
console.log(combinedPerson); // Output: { name: "Alice", age: 30, hobby: "painting", city: "New York" }


// Rest operator
const sendInvitation = (event: string, ...guests: string[]) => {
    console.log(`Event: ${event}`);
    console.log("Guests:");
    guests.forEach(guest => console.log(guest));
}

sendInvitation("Birthday Party", "Alice", "Bob", "Charlie");