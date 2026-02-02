// Selects the element with id="heading"
// Returns: HTMLElement (single element) or null
const title = document.getElementById("heading");

// Selects the element with id="heading" using CSS selector
// Returns: Element (single element) or null
const title2 = document.querySelector("#heading");

// Selects ALL elements with class="items"
// Returns: HTMLCollection (LIVE collection, auto-updates with DOM changes)
const items = document.getElementsByClassName("items");

// Selects the element with id="p"
// Returns: HTMLElement (single element) or null
const paragraph = document.getElementById("p");

// Selects ALL elements with class="items" using CSS selector
// Returns: NodeList (STATIC snapshot, does NOT auto-update)
const items2 = document.querySelectorAll(".items");

// Selects the first element with class="container"
// Returns: Element (single element) or null
const container = document.querySelector(".container");

// Selects the first <button> element in the document
// Returns: HTMLButtonElement or null
const button = document.querySelector("button");

// Selects the first <input> element in the document
// Returns: HTMLInputElement or null
const input = document.querySelector("input");

console.log(title);
console.log(title2);
console.log(items);
console.log(paragraph);
console.log(items2);
console.log(container);
console.log(button);
console.log(input);
