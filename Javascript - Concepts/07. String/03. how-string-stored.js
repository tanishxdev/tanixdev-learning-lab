// Engine Model → Stack & Heap

// JavaScript has:

// Stack → variables + references
// Heap → actual data (objects, strings, arrays, functions)

// Strings are stored on the heap
// Variables store references on the stack

// ✅ Scenario Code
let a = "GeeksforGeeks";
let b = "GeeksforGeeks";

let c = "Geeks" + "for" + "Geeks";

let x = new String("Hello");
let y = new String("Hello");

/*
🟦 1. Literals → Interned (Shared Heap Memory)

let a = "GeeksforGeeks";
let b = "GeeksforGeeks";

👉 Both variables share the same heap memory location
because JS engine interns identical literals.

👉 Interned literals are stored on the heap.

👉 Clean Diagram

STACK                         HEAP
──────────                   ─────────────────────
a ───────────────▶  ┌──────────────────────────┐
                    │  "GeeksforGeeks" (intern)│
b ───────────────▶  └──────────────────────────┘

👉 Both a and b → refer to the SAME interned string.

*/

/*
🟦 2. Runtime-built string → Usually NEW string

let c = "Geeks" + "for" + "Geeks";

👉 Even though the VALUE is identical,
runtime concatenation creates a new string in memory.

👉 Diagram (now including c)

STACK                         HEAP
──────────                   ───────────────────────────────
a ───────────────▶     ┌──────────────────────────────┐
b ───────────────▶     │ "GeeksforGeeks" (interned)   │
                       └──────────────────────────────┘

c ───────────────▶     ┌──────────────────────────────┐
                       │ "GeeksforGeeks" (new string) │
                       └──────────────────────────────┘

👉 Important:
Even though the text is the same, c has a DIFFERENT memory address.

👉 c === a or c === b → false (in most V8 builds)
*/


/*
🟦 3. Wrapper Objects (new String)

let x = new String("Hello");
let y = new String("Hello");

👉 This creates:

A wrapper object on heap
That object contains a reference to a primitive string (also on heap)

Each new String() allocates a completely new object.

👉 Diagram (full version)

STACK                         HEAP
──────────                  ──────────────────────────────────────────
a ───────────────▶     ┌──────────────────────────────┐
b ───────────────▶     │ "GeeksforGeeks" (interned)   │
                       └──────────────────────────────┘

c ───────────────▶     ┌──────────────────────────────┐
                       │ "GeeksforGeeks" (new string) │
                       └──────────────────────────────┘


x ───────────────▶     ┌─────────────── Object ───────────────┐
                       │ String Object                         │
                       │   [[StringData]] ────────▶ "Hello"    │
                       └────────────────────────────────────────┘

y ───────────────▶     ┌─────────────── Object ───────────────┐
                       │ String Object (new one)               │
                       │   [[StringData]] ────────▶ "Hello"    │
                       └────────────────────────────────────────┘

👉 Key Notes

x and y are different objects

Their internal primitive "Hello" may be interned, but
the wrapper objects themselves are NOT shared


*/

/*
🟦 FINAL COMPARISON TABLE

| Variable | Type      | Shared Memory? | Why                    |
| -------- | --------- | -------------- | ---------------------- |
| `a`      | primitive | YES            | Literal interned       |
| `b`      | primitive | YES            | Same literal reused    |
| `c`      | primitive | NO             | Runtime-created string |
| `x`      | object    | NO             | New object wrapper     |
| `y`      | object    | NO             | New object wrapper     |

*/
