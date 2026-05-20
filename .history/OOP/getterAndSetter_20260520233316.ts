// Getter and Setter in TypeScript

class BankEmployee {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }   

    // Getter
    get name(): string {
        return this._name;
    }

    // Setter
    set name(value: string) {
        this._name = value;
    }
}

const employee = new BankEmployee("Alice");
console.log(employee.name); // Output: Alice