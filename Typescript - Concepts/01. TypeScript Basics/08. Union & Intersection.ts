// Union  = OR logic
// Intersection = AND logic

export{};

// 2. Union Types
type Animal = "cat" | "dog" | "bird";

let pet: Animal;

pet = "cat";
pet = "dog";
// pet = "fish";

console.log(pet);

// 3. Intersection Types
type Person = {name: string } & {age: number};

let user: Person = {
    name: "John",
    age: 30
};

console.log(user);