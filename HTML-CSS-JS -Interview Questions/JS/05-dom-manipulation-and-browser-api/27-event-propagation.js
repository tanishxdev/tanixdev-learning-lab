// ==============================
// STEP 1: Select all elements
// ==============================

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// ==============================
// STEP 2: CAPTURING PHASE
// Top → Bottom
// useCapture = true
// ==============================

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent - Capturing");
  },
  true, // capturing phase
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent - Capturing");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    console.log("Child - Capturing");
  },
  true,
);

// ==============================
// STEP 3: TARGET PHASE
// Actual clicked element
// ==============================

child.addEventListener("click", () => {
  console.log("Child - Target");
});

// ==============================
// STEP 4: BUBBLING PHASE
// Bottom → Top (DEFAULT)
// ==============================

child.addEventListener("click", () => {
  console.log("Child - Bubbling");
});

parent.addEventListener("click", () => {
  console.log("Parent - Bubbling");
});

grandparent.addEventListener("click", () => {
  console.log("Grandparent - Bubbling");
});
