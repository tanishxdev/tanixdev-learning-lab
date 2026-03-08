// 1. Variable Type Annotations

const str: string = "Hello";
const num: number = 10;
const arr: number[] = [1, 2, 3];
const arr2: (number | string | boolean)[] = [1, "2", true];

console.log(typeof str);
console.log(typeof num);
console.log(typeof arr);
console.log(typeof arr2);

// 2. Function Type Annotations
function greet(name: string): string {
    return `Hello ${name}`;
}
console.log(greet("Alice"));

// 3. Object Type Annotations
const person: {
    name: string;
    age: number;
} = {
    name: "John",
    age: 30
};

console.log(person);

// 4. Array Type Annotations
const number: number[] = [1, 2, 3];
console.log(number);

// 5. Class Type Annotations
class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}
const rect = new Rectangle(10, 20);
console.log(rect);
console.log(rect.area());