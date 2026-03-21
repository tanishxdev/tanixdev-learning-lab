# SECTION 5 — Rendering Lists

---

## 29. Rendering Lists

### Problem

In real applications, UI is rarely static.

Most of the time, the UI must display **multiple items coming from data**.

Examples:

- list of products in an ecommerce site
- comments under a post
- notifications
- messages in a chat
- todos in a todo app
- users in an admin dashboard

Example data:

```js
const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Neha" },
];
```

We want UI like:

```
Tanish
Ravi
Neha
```

But React does not automatically convert arrays to UI.

So we need a **way to transform data → UI elements**.

This process is called **Rendering Lists**.

---

### What is Rendering in React

Rendering means:

> Converting **data or component logic into UI elements** that appear on the screen.

React rendering flow:

```
State / Props / Data
        ↓
Component Logic
        ↓
JSX
        ↓
Virtual DOM
        ↓
Real DOM Update
```

Example:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

Here React renders:

```
<h1>Hello World</h1>
```

onto the screen.

---

### What is List Rendering

List rendering means:

> Displaying multiple UI elements from a **collection of data**.

Example data:

```js
const fruits = ["Apple", "Banana", "Mango"];
```

Expected UI:

```
Apple
Banana
Mango
```

Instead of writing HTML manually:

```jsx
<li>Apple</li>
<li>Banana</li>
<li>Mango</li>
```

We generate it **dynamically from data**.

---

### Why List Rendering Is Important

Almost every real application depends on it.

Examples:

#### Ecommerce Website

Products come from API:

```
GET /products
```

Response:

```json
[
  { "id": 1, "name": "iPhone" },
  { "id": 2, "name": "MacBook" },
  { "id": 3, "name": "iPad" }
]
```

React must render:

```
iPhone
MacBook
iPad
```

---

#### Todo Application

Data:

```js
const todos = [
  { id: 1, task: "Study React" },
  { id: 2, task: "Build Project" },
];
```

UI:

```
• Study React
• Build Project
```

---

#### Chat Application

Messages array:

```js
const messages = [
  { id: 1, text: "Hello" },
  { id: 2, text: "How are you?" },
];
```

UI:

```
Hello
How are you?
```

---

### How React Renders Lists

React uses **JavaScript array methods** to transform data.

Most common method:

```
map()
```

Because `map()` converts:

```
array → new array
```

Example:

```
data → JSX elements
```

---

### Understanding map()

JavaScript `map()` takes each element of an array and transforms it.

Example:

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```
[2, 4, 6]
```

Transformation:

```
1 → 2
2 → 4
3 → 6
```

React uses the same idea.

```
data → JSX
```

---

### Basic React List Rendering Example

```jsx
function App() {
  // Array of fruits
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      {/* Using map() to convert data into JSX elements */}

      {fruits.map((fruit) => {
        // Each fruit becomes one <p> element
        return <p>{fruit}</p>;
      })}
    </div>
  );
}
```

---

### What Happens Internally

Step 1

```
fruits = ["Apple", "Banana", "Mango"]
```

Step 2

`map()` runs for each element.

Iteration 1:

```
fruit = Apple
return <p>Apple</p>
```

Iteration 2:

```
fruit = Banana
return <p>Banana</p>
```

Iteration 3:

```
fruit = Mango
return <p>Mango</p>
```

Final JSX:

```jsx
<p>Apple</p>
<p>Banana</p>
<p>Mango</p>
```

React renders them to DOM.

---

### Rendering Objects (Most Common Case)

Real data usually contains **objects**, not strings.

Example:

```js
const users = [
  { id: 1, name: "Tanish" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Neha" },
];
```

React code:

```jsx
function App() {
  const users = [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Neha" },
  ];

  return (
    <div>
      {users.map((user) => {
        // user.name will appear in UI
        return <p>{user.name}</p>;
      })}
    </div>
  );
}
```

UI:

```
Tanish
Ravi
Neha
```

---

### Rendering Complex UI Components

Often we render **components instead of plain HTML**.

Example:

```jsx
function UserCard({ name }) {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
```

Now render list.

```jsx
function App() {
  const users = [
    { id: 1, name: "Tanish" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Neha" },
  ];

  return (
    <div>
      {users.map((user) => {
        return <UserCard name={user.name} />;
      })}
    </div>
  );
}
```

Now each user becomes a **component instance**.

---

### Rendering Cards Example

```jsx
function ProductCard({ name, price }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>{name}</h2>

      <p>Price: {price}</p>
    </div>
  );
}
```

Render list:

```jsx
function App() {
  const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Tablet", price: 30000 },
  ];

  return (
    <div>
      {products.map((product) => {
        return <ProductCard name={product.name} price={product.price} />;
      })}
    </div>
  );
}
```

---

### Real Application Pattern

Almost every page uses this pattern:

```
API → state → map() → UI
```

Example:

```
API response
↓
setState(products)
↓
products.map()
↓
ProductCard
↓
UI
```

---

### Common Mistakes Beginners Make

#### 1. Forgetting return

Wrong:

```jsx
{
  fruits.map((fruit) => {
    <p>{fruit}</p>;
  });
}
```

Correct:

```jsx
{
  fruits.map((fruit) => {
    return <p>{fruit}</p>;
  });
}
```

OR shorter:

```jsx
{
  fruits.map((fruit) => <p>{fruit}</p>);
}
```

---

#### 2. Using for loop instead of map

React prefers **map()** because it directly returns JSX arrays.

---

### Tradeoffs

Advantages

- dynamic UI
- scalable
- data driven
- reusable components

Disadvantages

- requires proper keys (next topic)
- re-rendering large lists may affect performance

---

### Real World Use Cases

Rendering lists is used in almost every screen.

Examples:

```
Ecommerce products
Blog posts
User dashboards
Admin panels
Chat messages
Notification feeds
Comment sections
Todo lists
```

---

### Mental Model

Always think:

```
Data Array
   ↓
map()
   ↓
JSX Elements
   ↓
React renders UI
```

Example:

```
users[]
   ↓
users.map()
   ↓
<UserCard />
   ↓
UI
```

---

### Synthesis Questions

1. What does rendering mean in React?

2. Why do we use `map()` for list rendering?

3. What happens internally when `map()` runs in JSX?

4. Why is list rendering essential for real applications?

5. What type of data usually gets rendered in lists?

---

## 30. Keys in React

### Problem

When we render lists in React using `map()`, multiple elements are created.

Example:

```jsx
{
  users.map((user) => <p>{user.name}</p>);
}
```

This works, but React shows a warning:

```
Each child in a list should have a unique "key" prop
```

Why does React complain?

Because React must **track each element in the list** when the UI changes.

Without keys, React cannot efficiently determine:

- which item changed
- which item moved
- which item was added
- which item was removed

So React requires a **key**.

---

### What is a Key in React

A **key** is a unique identifier assigned to elements in a list.

It helps React identify **which element corresponds to which data item**.

Example:

```jsx
{
  users.map((user) => <p key={user.id}>{user.name}</p>);
}
```

Here:

```
key = user.id
```

React uses this to track elements during updates.

---

### Why Keys Exist

React uses a system called **Reconciliation**.

Reconciliation means:

> React compares the previous UI with the new UI and updates only what changed.

Without keys, React must **re-render everything**.

With keys, React updates **only the changed element**.

---

### Example Without Keys (Problem)

Initial UI:

```jsx
["A", "B", "C"];
```

Rendered UI:

```
A
B
C
```

Now we add an item at the beginning:

```jsx
["X", "A", "B", "C"];
```

React sees:

```
X
A
B
C
```

Without keys React thinks:

```
A → changed to X
B → changed to A
C → changed to B
```

React updates **all elements**, which is inefficient.

---

### Example With Keys

Data:

```js
[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
```

Rendered:

```
A
B
C
```

New data:

```js
[
  { id: 4, name: "X" },
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];
```

React compares keys:

```
key 4 → new element
key 1 → same
key 2 → same
key 3 → same
```

So React **only inserts one element** instead of re-rendering everything.

---

### Basic Example

```jsx
function App() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
  ];

  return (
    <div>
      {fruits.map((fruit) => {
        return <p key={fruit.id}>{fruit.name}</p>;
      })}
    </div>
  );
}
```

Key points:

- `key` must be **unique**
- `key` must be **stable**

---

### Rendering Components with Keys

Keys are often used when rendering components.

Example:

```jsx
function UserCard({ name }) {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
```

Now rendering list:

```jsx
function App() {
  const users = [
    { id: 101, name: "Tanish" },
    { id: 102, name: "Ravi" },
    { id: 103, name: "Neha" },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </div>
  );
}
```

Here the key is applied to the **component instance**.

---

### Where the Key Should Be Placed

The key must be placed on the **top level element returned by map()**.

Correct:

```jsx
{
  users.map((user) => (
    <div key={user.id}>
      <p>{user.name}</p>
    </div>
  ));
}
```

Wrong:

```jsx
{
  users.map((user) => (
    <div>
      <p key={user.id}>{user.name}</p>
    </div>
  ));
}
```

React expects the key on the **outer element of the list item**.

---

### Using Index as Key (Not Recommended)

Example:

```jsx
{
  users.map((user, index) => <p key={index}>{user.name}</p>);
}
```

This works but can cause bugs.

Why?

Because indexes change when:

- items are inserted
- items are removed
- items are reordered

Example:

```
index 0 → A
index 1 → B
index 2 → C
```

Add new element at start:

```
index 0 → X
index 1 → A
index 2 → B
index 3 → C
```

Now React thinks:

```
A changed to X
B changed to A
C changed to B
```

This causes incorrect updates.

---

### When Index Keys Are Acceptable

Index keys are acceptable when:

- list is static
- items never reorder
- items never get inserted in middle
- items never get deleted

Example:

```jsx
const days = ["Mon", "Tue", "Wed"];
```

---

### Good Key Sources

Best keys come from **unique IDs in data**.

Examples:

```
database id
uuid
slug
email
product id
```

Example:

```jsx
key={product.id}
```

---

### Real Application Example

API response:

```json
[
  { "id": 101, "name": "Laptop" },
  { "id": 102, "name": "Phone" },
  { "id": 103, "name": "Tablet" }
]
```

Rendering:

```jsx
{
  products.map((product) => (
    <ProductCard key={product.id} name={product.name} />
  ));
}
```

React now efficiently updates UI.

---

### Internal Mental Model

React stores something like:

```
previous list
```

```
key1 → component1
key2 → component2
key3 → component3
```

When new render happens:

React compares keys.

```
same key → update
new key → create
missing key → remove
```

This is how **React diffing algorithm works efficiently**.

---

### Performance Impact

Without keys:

```
Full re-render
```

With keys:

```
Minimal DOM updates
```

This becomes critical in:

- large lists
- dashboards
- chat apps
- feeds
- tables

---

### Real World Use Cases

Keys appear everywhere in React apps.

Examples:

```
product lists
comment lists
chat messages
notifications
tables
dropdown menus
todo lists
```

Every list rendered with `map()` requires keys.

---

### Mental Model

Think like this:

```
Data array
   ↓
map()
   ↓
Each element gets a key
   ↓
React tracks each item
   ↓
Efficient updates
```

---

### Common Beginner Mistakes

#### Missing key

```
Warning: Each child in a list should have a unique key
```

---

#### Duplicate keys

Wrong:

```jsx
key = "item";
key = "item";
key = "item";
```

Keys must be **unique within the list**.

---

#### Using unstable values

Bad example:

```jsx
key={Math.random()}
```

This breaks React optimization because keys change every render.

---

### Tradeoffs

Advantages

- faster updates
- minimal DOM changes
- stable component identity

Disadvantages

- incorrect keys can cause bugs
- requires unique identifiers

---

### Synthesis Questions

1. Why does React require keys when rendering lists?

2. What happens if keys are missing?

3. Why is using array index as key dangerous?

4. How do keys help React's reconciliation process?

5. Where should the key be placed in JSX?

---
