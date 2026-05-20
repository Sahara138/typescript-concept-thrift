let anything: any;

anything = 123;

(anything as number).toFixed
// Type Assertion means that we are telling the compiler to treat a variable as a certain type, even if it cannot be inferred from the context. In this case, we are asserting that 'anything' is of type 'number', which allows us to call the 'toFixed' method on it without any type errors.we can call also type narrowing to make sure that the variable is of the expected type before performing operations on it.

if (typeof anything === 'number') {

// Type assertions are useful when we have information about the type of a variable that the compiler cannot infer, such as when we are working with third-party libraries or when we are dealing with dynamic data. However, it is important to use type assertions with caution, as they can lead to runtime errors if the asserted type is incorrect.

const kgToGMConverter