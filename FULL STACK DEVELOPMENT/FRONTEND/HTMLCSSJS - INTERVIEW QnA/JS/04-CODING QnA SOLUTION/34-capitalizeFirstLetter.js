function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" "); // Split the sentence into words

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize the first letter and concatenate with the rest of the word
  }

  return words.join(" "); // Join the words back into a sentence
}
console.log(capitalizeFirstLetter("hello world programming"));

// Step 1: ["hello", "world", "programming"]
// Step 3 iterations:
//   - "hello" → "H" + "ello" = "Hello"
//   - "world" → "W" + "orld" = "World"
//   - "programming" → "P" + "rogramming" = "Programming"
// Step 4: "Hello World Programming"

