// Conditionals in TypeScript : je type condition er upor nirvor kore

type A = null
type B = undefined

type C = A extends null ? true : number; // C will be string