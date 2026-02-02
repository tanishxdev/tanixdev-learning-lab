const text = "Hello World";
console.log(text.length);
console.log(text.charAt(6));
console.log(text.charCodeAt(6));

// case conversions
console.log((lowercase = text.toLowerCase()));
console.log((uppercase = text.toUpperCase()));

// first letter capital

console.log(text.charAt(0).toUpperCase() + text.slice(1));

// find
console.log(text.indexOf(`H`));
console.log(text.indexOf(`World`));
console.log(text.indexOf(`JS`)); // -1 not found

// last index of
console.log(text.lastIndexOf("W"));

// includes
console.log(text.includes("World"));
console.log(text.includes("JS"));

// extracting substrings

console.log(text.slice(0, 5)); // Hello
console.log(text.slice(7)); // World
console.log(text.slice(-5)); // World

// substring
console.log(text.substring(0, 5)); // Hello
console.log(text.substring(7)); // World
console.log(text.substring(-5)); // World

// substr
console.log(text.substr(0, 5)); // Hello
console.log(text.substr(7)); // World
console.log(text.substr(-5)); // World

// replace
console.log(text.replace("World", "JavaScript"));