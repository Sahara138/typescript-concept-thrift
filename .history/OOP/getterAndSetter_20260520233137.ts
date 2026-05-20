// Getter and Setter in TypeScript

class Person {
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