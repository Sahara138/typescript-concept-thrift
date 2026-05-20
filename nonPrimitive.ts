// array, object

// ts-tuple is a fixed length array where each element can have a different type

let person: [string, number] = ["John", 30];
let bazarList : string[] = ["rice", "dal", "vegetables", "fruits"];

bazarList.push("oil");

let mixedArr : (string | number)[] = ["rice", 123];
mixedArr.push("oil");
mixedArr.push(456);


let coordinates: [number, number] = [10, 20];

let couple : [string, string] = ["Alice", "Bob"];


let destination : [string, string, string, number] = ["Dhaka", "Chittagong", "Khulna", 30];

//reference type: object

//optional property: middleName is optional
const user: { 
    // organization: string;
    organization: "Tech Company"; // literal type
    firstName: string; 
    middleName?: string; 
    lastName: string 
} = {
    organization: "Tech Company",
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
};
// user.organization = "New Tech Company"; // Error: Cannot assign to 'organization' because it is a literal type