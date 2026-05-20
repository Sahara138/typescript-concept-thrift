// Conditionals in TypeScript : je type condition er upor nirvor kore

type A = null
type B = undefined

type C = A extends null ? string : number; // C will be string