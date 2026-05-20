// Conditionals in TypeScript : je type condition er upor nirvor kore

type A = null
type B = undefined

type C = A extends null ? true : false  ; // C will be string


type D = A extends number  ? true : B extends 