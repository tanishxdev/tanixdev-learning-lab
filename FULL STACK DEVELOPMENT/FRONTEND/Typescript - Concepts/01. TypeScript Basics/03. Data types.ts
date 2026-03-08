export {};

/* ================================
   PRIMITIVE DATA TYPES
================================ */

// number type
let price: number = 99.5;
let age: number = 30;

// string type
let name: string = "John";
let username: string = "johndoe";
let msg: string = `Hello, ${username}`; // template string

// boolean type
let isActive: boolean = true;
let isLoggedIn: boolean = false;

// null type
let result: null = null;

// undefined type
let data: undefined;

// symbol type (unique value)
let id: symbol = Symbol("id");

// bigint type (very large integer)
let bigNumber: bigint = 9007199254740991n;


/* ================================
   OBJECT DATA TYPES
================================ */

// array of numbers
let marks: number[] = [90, 85, 78];

// array of strings
let names: string[] = ["Amit", "Ravi", "Tanish"];

// alternative array syntax
let score: Array<number> = [90, 85, 78];

// tuple (fixed types and order)
let student: [string, number] = ["Tanish", 21];

// enum (named constants)
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;


// function with typed parameters & return type
function add(a: number, b: number): number {
  return a + b;
}


// object type definition
let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30
};


// interface type
interface User {
  name: string;
  age: number;
}

let person: User = {
  name: "John",
  age: 30
};


/* ================================
   ADVANCED DATA TYPES
================================ */

// union type
let userId: number | string;
userId = 101;
userId = "A101";


// type aliases
type A = {
  name: string;
  age: number;
};

type B = {
  name: string;
  age: number;
};

let user1: A = {
  name: "John",
  age: 30
};

let user2: B = {
  name: "John",
  age: 30
};


// literal type
let status: "success" | "fail";
status = "success";
status = "fail";


// readonly type
type ReadOnlyUser = {
  readonly name: string;
  readonly age: number;
};
