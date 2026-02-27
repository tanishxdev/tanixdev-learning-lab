// 39

let varA = 5,
  varB = 10;
[varA, varB] = [varB, varA];

console.log(varA, varB);

// 40
{
  let blockScopX = 10;
  console.log(blockScopX);
}
// console.log(blockScopX); // ReferenceError: blockScopX is not defined

// 41
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

const person = {
  name: "tanish",
  age: 20,
};

person.age = 25;

console.log(person);
