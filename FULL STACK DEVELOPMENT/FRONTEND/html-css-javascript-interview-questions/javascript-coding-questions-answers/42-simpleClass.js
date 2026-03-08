class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Creating instances of the Animal class
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

dog.makeSound(); // Output: Buddy makes a sound.
cat.makeSound(); // Output: Whiskers makes a sound.
