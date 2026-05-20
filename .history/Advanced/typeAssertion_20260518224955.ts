let anything: any;

anything = 123;

(anything as number).toFixed
// Type Assertion means that we are telling the compiler to treat a variable as a certain type, even if it cannot be inferred from the context. In this case, we are asserting that 'anything' is of type 'number', which allows us to call the 'toFixed' method on it without any type errors.