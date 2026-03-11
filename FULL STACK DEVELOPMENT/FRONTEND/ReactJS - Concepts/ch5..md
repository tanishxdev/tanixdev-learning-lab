# SECTION 5 — Rendering Lists

Rendering lists is one of the **most fundamental React skills** because most UI is **data-driven**.

Examples:

- product lists
- notifications
- messages
- todo lists
- search results
- comments

React apps **rarely render static UI**. Instead they render **lists generated from data**.

Example data:

```
products = [
 { id:1, name:"Laptop" },
 { id:2, name:"Phone" },
 { id:3, name:"Tablet" }
]
```

We convert this **data → UI components**.

That is the idea of **Rendering Lists**.

---

# 29 — Rendering Lists

## Problem

Imagine building a UI like:

```
• Apple
• Banana
• Mango
• Orange
```

If you write manually:

```jsx
<li>Apple</li>
<li>Banana</li>
<li>Mango</li>
<li>Orange</li>
```

This is **not scalable**.

If the list comes from **API with 1000 items**, you cannot write manually.

React solves this by:

```
Data → map() → JSX components
```

---

# Core Idea

React uses **JavaScript map()** to convert **arrays into UI elements**.

Concept:

```
Array.map(item => JSX)
```

Example mental model:

```
Data array
   ↓
map() iteration
   ↓
JSX element returned
   ↓
React renders list
```

---

# Example 1 — Basic List Rendering

### Data

```
const fruits = ["Apple","Banana","Mango"]
```

### UI Goal

```
• Apple
• Banana
• Mango
```

---

### Code Example

```jsx
// App.jsx

import React from "react";

function App() {
  // Array data
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h2>Fruit List</h2>

      <ul>
        {
          // map() loops through each element
          fruits.map((fruit) => {
            // For each element we return JSX
            return <li>{fruit}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;
```

---

### Output

```
Fruit List

• Apple
• Banana
• Mango
```

---

# Example 2 — Using Arrow Function Shortcut

We can simplify map.

```jsx
fruits.map((fruit) => <li>{fruit}</li>);
```

Full code:

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {
        // arrow function implicit return
        fruits.map((fruit) => (
          <li>{fruit}</li>
        ))
      }
    </ul>
  );
}
```

---

# Example 3 — Rendering Objects

Most real lists contain **objects**.

### Data

```
users = [
 {id:1, name:"John"},
 {id:2, name:"Alice"},
 {id:3, name:"Bob"}
]
```

---

### Code

```jsx
function App() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
  ];

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {
          // iterate user objects
          users.map((user) => {
            return <li>{user.name}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;
```

---

# Example 4 — Rendering Components

Often we render **components instead of simple HTML**.

Example:

```
<ProductCard />
```

### Data

```
products = [
 {id:1, name:"Laptop", price:800},
 {id:2, name:"Phone", price:400}
]
```

---

### ProductCard Component

```jsx
// ProductCard.jsx

function ProductCard({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductCard;
```

---

### Rendering List

```jsx
import ProductCard from "./ProductCard";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 400 },
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard name={product.name} price={product.price} />
      ))}
    </div>
  );
}
```

---

# Common Real-World Examples

Rendering lists appears everywhere.

### Example 1 — Notifications

```
notifications.map()
```

### Example 2 — Comments

```
comments.map()
```

### Example 3 — Search Results

```
results.map()
```

### Example 4 — Product Grid

```
products.map()
```

---

# Important Rule

When rendering lists React requires:

```
Each element must have a key
```

Otherwise React will show warning:

```
Each child in a list should have a unique "key" prop
```

Which leads us to the next topic.

---

# 30 — Keys in React

## Problem

Consider a list:

```
A
B
C
```

Then user deletes **B**.

New list:

```
A
C
```

React must determine:

```
What changed?
```

Without keys React might:

```
Replace everything
```

Which causes:

- performance issues
- UI bugs
- wrong component updates

Keys solve this.

---

# Concept of Keys

A **key is a unique identifier** for list elements.

Example:

```
<li key={id}>
```

Keys help React **track items between renders**.

---

# Example Without Keys (Bad)

```jsx
users.map((user) => <li>{user.name}</li>);
```

React warning:

```
Each child in a list should have unique key
```

---

# Correct Version

```jsx
users.map((user) => <li key={user.id}>{user.name}</li>);
```

Now React knows:

```
User 1
User 2
User 3
```

---

# Why Keys Matter (Reconciliation)

React uses a **diffing algorithm** called **Reconciliation**.

Process:

```
Old UI
↓

Compare with

↓

New UI

↓

Update minimal DOM
```

Keys help React detect:

```
item added
item removed
item updated
```

Without keys React must **re-render entire list**.

---

# Visual Example

### Old List

```
A
B
C
```

### New List

```
A
C
```

With keys React knows:

```
B removed
```

Without keys React might think:

```
B became C
```

Which causes bugs.

---

# Correct Key Choice

Best keys are **stable unique IDs**.

Example:

```
database id
uuid
product id
user id
```

Example:

```jsx
<li key={user.id}>
```

---

# Bad Keys

Avoid:

### Using array index

```
key={index}
```

Example:

```jsx
users.map((user, index) => <li key={index}>{user.name}</li>);
```

This breaks when:

- sorting
- deleting
- inserting

Example bug:

```
Wrong component state preserved
```

---

# When Index Is Acceptable

Index key can be used only if:

```
list never changes
list never reordered
list static
```

Example:

```
static menu
static navigation
```

---

# Full Correct Example

```jsx
function App() {
  const users = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" },
    { id: 103, name: "Bob" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
```

---

# Real Production Pattern

Typical React list:

```jsx
items.map((item) => <Component key={item.id} data={item} />);
```

Example:

```
ProductCard
UserCard
CommentItem
MessageBubble
```

---

# Edge Cases

### Case 1 — API Data Without ID

You must generate key.

Example:

```
uuid
timestamp
```

Example:

```
key={crypto.randomUUID()}
```

But avoid generating on every render.

---

### Case 2 — Nested Lists

Each level must have keys.

---

# Performance Impact

Keys allow React to perform:

```
minimal DOM updates
```

Which makes React **fast**.

---

# Tradeoffs

| Method    | Problem          |
| --------- | ---------------- |
| No key    | React warnings   |
| Index key | UI bugs possible |
| Unique id | Best practice    |

---

# Real Applications

Rendering lists appears in:

```
Ecommerce product grids
Social media feeds
Chat messages
Todo lists
Comment threads
Search results
```

---

# Mini Example — Todo List

```jsx
function App() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build project" },
    { id: 3, text: "Apply for jobs" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

---

# Mental Model Summary

```
Data Array
   ↓
map()
   ↓
JSX Elements
   ↓
Each element must have key
   ↓
React reconciliation updates minimal DOM
```

---

# Synthesis Questions

1. Why does React use `map()` for rendering lists?
2. What problem do keys solve?
3. Why should array index not be used as key?
4. How does React reconciliation use keys?
5. What happens if keys are missing?
6. Why must keys be unique?

---

If you want, next I can also explain **two extremely important real React patterns related to this topic**:

1. **Filtering + Mapping UI Lists**
2. **Sorting + Rendering Lists**
3. **Conditional List Rendering**
4. **Empty List UI Pattern**

These appear in **almost every real React project**.
Below we will learn **three real patterns used in almost every React application**.

1. **Filtering + Mapping UI Lists**
2. **Sorting + Rendering Lists**
3. **Conditional List Rendering**

After that we will do **two detailed practical examples**

- Example A → **Array dataset**
- Example B → **Object dataset**

Each example will include **multiple queries / search patterns** such as

- find all persons
- find one person
- filter salary
- filter department
- filter by name character
- filter by location
- combination filters

All examples will follow a **decision-making mindset**.

Problem → Why → Logic → Code → Result.

---

# 1. Filtering + Mapping UI Lists

## Problem

Real applications rarely display **all data**.

Example scenarios:

```
Show employees with salary > 50000
Show products under ₹1000
Show users from Delhi
Show IT department employees
Show search results containing "an"
```

So we must first:

```
Filter the data
```

Then:

```
Render filtered data in UI
```

---

## Mental Model

```
Data Array
   ↓
filter()
   ↓
Filtered Array
   ↓
map()
   ↓
JSX UI
```

---

## Example — Filter High Salary Employees

### Dataset

```javascript
const employees = [
  { id: 1, name: "Ankit", salary: 40000, department: "HR", city: "Delhi" },
  { id: 2, name: "Rahul", salary: 70000, department: "IT", city: "Mumbai" },
  { id: 3, name: "Simran", salary: 80000, department: "IT", city: "Delhi" },
  { id: 4, name: "Aman", salary: 35000, department: "HR", city: "Pune" },
];
```

---

## Step 1 — Filter Logic

```
salary > 50000
```

---

## React Code

```jsx
function App() {
  const employees = [
    { id: 1, name: "Ankit", salary: 40000, department: "HR", city: "Delhi" },
    { id: 2, name: "Rahul", salary: 70000, department: "IT", city: "Mumbai" },
    { id: 3, name: "Simran", salary: 80000, department: "IT", city: "Delhi" },
    { id: 4, name: "Aman", salary: 35000, department: "HR", city: "Pune" },
  ];

  // Step 1: filter employees with salary > 50000
  const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 50000;
  });

  return (
    <div>
      <h2>High Salary Employees</h2>

      <ul>
        {
          // Step 2: render filtered employees
          highSalaryEmployees.map((employee) => (
            <li key={employee.id}>
              {employee.name} — ₹{employee.salary}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
```

---

## Output

```
Rahul — ₹70000
Simran — ₹80000
```

---

# 2. Sorting + Rendering Lists

## Problem

Often we want to display data in **sorted order**.

Examples:

```
Sort products by price
Sort students by marks
Sort employees by salary
Sort names alphabetically
```

---

## Mental Model

```
Data Array
   ↓
sort()
   ↓
Sorted Array
   ↓
map()
   ↓
Render UI
```

---

## Example — Sort Employees by Salary

### Dataset

```javascript
const employees = [
  { id: 1, name: "Ankit", salary: 40000 },
  { id: 2, name: "Rahul", salary: 70000 },
  { id: 3, name: "Simran", salary: 50000 },
];
```

---

### Code

```jsx
function App() {
  const employees = [
    { id: 1, name: "Ankit", salary: 40000 },
    { id: 2, name: "Rahul", salary: 70000 },
    { id: 3, name: "Simran", salary: 50000 },
  ];

  // Sort employees by salary (ascending order)
  const sortedEmployees = [...employees].sort((a, b) => {
    // comparison logic
    return a.salary - b.salary;
  });

  return (
    <div>
      <h2>Employees Sorted by Salary</h2>

      <ul>
        {sortedEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} — ₹{employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Output

```
Ankit — ₹40000
Simran — ₹50000
Rahul — ₹70000
```

---

# 3. Conditional List Rendering

## Problem

Sometimes list may be:

```
empty
loading
partially filtered
```

Example:

```
Search results
Shopping cart
Notifications
```

If list empty, UI should show:

```
"No data found"
```

---

## Example

```jsx
function App() {
  const employees = [];

  return (
    <div>
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <li key={emp.id}>{emp.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

# PRACTICAL EXAMPLES

Now we will build **two real datasets**.

---

# Example A — Array Dataset (Employee System)

### Dataset

```javascript
const employees = [
  { id: 1, name: "Ankit", salary: 45000, department: "HR", city: "Delhi" },
  { id: 2, name: "Rahul", salary: 80000, department: "IT", city: "Mumbai" },
  { id: 3, name: "Simran", salary: 60000, department: "IT", city: "Delhi" },
  { id: 4, name: "Aman", salary: 35000, department: "HR", city: "Pune" },
  { id: 5, name: "Priya", salary: 75000, department: "Finance", city: "Delhi" },
];
```

---

# Case 1 — Find All Employees

```javascript
employees.map((emp) => emp.name);
```

---

# Case 2 — Find Employees Salary > 60000

```javascript
const highSalary = employees.filter((emp) => emp.salary > 60000);
```

---

# Case 3 — Find IT Department Employees

```javascript
const itEmployees = employees.filter((emp) => emp.department === "IT");
```

---

# Case 4 — Find Employees From Delhi

```javascript
const delhiEmployees = employees.filter((emp) => emp.city === "Delhi");
```

---

# Case 5 — Find Employee Name Contains "a"

```javascript
const nameMatch = employees.filter((emp) =>
  emp.name.toLowerCase().includes("a"),
);
```

---

# Case 6 — Find One Employee

Use **find()**

```javascript
const employee = employees.find((emp) => emp.name === "Rahul");
```

---

# Case 7 — Sort Employees by Salary

```javascript
const sorted = [...employees].sort((a, b) => a.salary - b.salary);
```

---

# React Rendering

```jsx
<ul>
  {employees
    .filter((emp) => emp.salary > 50000)
    .map((emp) => (
      <li key={emp.id}>
        {emp.name} — {emp.department}
      </li>
    ))}
</ul>
```

---

# Example B — Object Dataset

Sometimes data comes as **object instead of array**.

Example:

```javascript
const employees = {
  e1: { name: "Ankit", salary: 40000, department: "HR", city: "Delhi" },
  e2: { name: "Rahul", salary: 80000, department: "IT", city: "Mumbai" },
  e3: { name: "Simran", salary: 60000, department: "IT", city: "Delhi" },
};
```

Objects cannot use `.map()` directly.

We convert them into arrays.

---

# Step 1 — Convert Object to Array

```javascript
Object.values(employees);
```

---

# Example

```javascript
const employeeArray = Object.values(employees);
```

Now we can:

```
filter
map
sort
```

---

# React Code

```jsx
function App() {
  const employees = {
    e1: { name: "Ankit", salary: 40000, department: "HR", city: "Delhi" },
    e2: { name: "Rahul", salary: 80000, department: "IT", city: "Mumbai" },
    e3: { name: "Simran", salary: 60000, department: "IT", city: "Delhi" },
  };

  // Convert object to array
  const employeeArray = Object.values(employees);

  // Filter IT employees
  const itEmployees = employeeArray.filter((emp) => emp.department === "IT");

  return (
    <div>
      <h2>IT Employees</h2>

      <ul>
        {itEmployees.map((emp, index) => (
          <li key={index}>
            {emp.name} — {emp.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

# Output

```
Rahul — Mumbai
Simran — Delhi
```

---

# Combined Example Pattern (Most Common)

Real React code often looks like:

```jsx
data
  .filter(condition)
  .sort(logic)
  .map((item) => <Component key={item.id} data={item} />);
```

---

# Decision Making Guide

| Goal                   | Method        |
| ---------------------- | ------------- |
| Find all items         | map           |
| Filter items           | filter        |
| Find one item          | find          |
| Sort items             | sort          |
| Convert object → array | Object.values |

---

# Final Mental Model

```
Raw Data
   ↓
Filter (optional)
   ↓
Sort (optional)
   ↓
Map
   ↓
React UI
```

---

# Synthesis Questions

1. Why must filter run before map?
2. Why do we clone array before sorting?
3. Difference between find() and filter()?
4. Why objects cannot use map() directly?
5. When should we use Object.values()?

---

If you want, I can also explain **4 extremely important React list patterns used in real production apps**:

1. **Search Filter UI Pattern**
2. **Pagination + List Rendering**
3. **Infinite Scroll Lists**
4. **Dynamic Table Filtering (like dashboards)**

These are used in **most real React products**.

These four patterns appear in **real production React apps** almost everywhere:

- Admin dashboards
- Ecommerce product lists
- Job portals
- Social media feeds
- Analytics dashboards

Understanding these patterns means you can build **real frontend systems**, not just basic components.

We will follow the same system:

Problem → Why → Logic → Code → Edge Cases → Use Cases

---

# 1. Search Filter UI Pattern

## Problem

Users often need to **search data** inside a list.

Examples:

```
Search employee by name
Search product by title
Search user by email
Search city
```

Example UI:

```
[ search box ]

Ankit
Rahul
Simran
Aman
```

Typing **"an"** should show:

```
Ankit
Aman
```

---

# Mental Model

```
User Input
     ↓
store in state
     ↓
filter dataset
     ↓
render filtered list
```

---

# Example Dataset

```
employees = [
 { id:1, name:"Ankit", department:"HR" },
 { id:2, name:"Rahul", department:"IT" },
 { id:3, name:"Simran", department:"Finance" },
 { id:4, name:"Aman", department:"HR" }
]
```

---

# React Code

```jsx
import { useState } from "react";

function App() {
  // dataset
  const employees = [
    { id: 1, name: "Ankit", department: "HR" },
    { id: 2, name: "Rahul", department: "IT" },
    { id: 3, name: "Simran", department: "Finance" },
    { id: 4, name: "Aman", department: "HR" },
  ];

  // state to store search text
  const [searchTerm, setSearchTerm] = useState("");

  // filtering logic
  const filteredEmployees = employees.filter((employee) => {
    // convert both strings to lowercase for case-insensitive search
    return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>Employee Search</h2>

      <input
        type="text"
        placeholder="Search employee..."
        value={searchTerm}
        onChange={(event) => {
          // update search state when user types
          setSearchTerm(event.target.value);
        }}
      />

      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} — {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# Output Behavior

Typing:

```
an
```

Result:

```
Ankit
Aman
```

---

# Edge Cases

### Case-insensitive search

Use:

```
toLowerCase()
```

### Empty input

Show **all results**

### No match

Show:

```
No results found
```

---

# Real Use Cases

```
Job search
Employee directory
Product catalog
User search
```

---

# 2. Pagination + List Rendering

## Problem

APIs may return **thousands of records**.

Example:

```
10,000 products
20,000 users
100,000 transactions
```

Rendering all items causes:

```
Slow UI
Heavy DOM
Poor performance
```

Solution → **Pagination**

---

# Pagination Concept

Instead of showing everything:

```
Page 1 → items 1-10
Page 2 → items 11-20
Page 3 → items 21-30
```

---

# Mental Model

```
dataset
    ↓
currentPage
    ↓
slice()
    ↓
render items
```

---

# Example Dataset

```
100 employees
```

We display **5 per page**

---

# React Code

```jsx
import { useState } from "react";

function App() {
  // sample dataset
  const employees = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: "Employee " + (index + 1),
  }));

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // calculate start and end index
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // get items for current page
  const currentEmployees = employees.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Employee List</h2>

      <ul>
        {currentEmployees.map((emp) => (
          <li key={emp.id}>{emp.name}</li>
        ))}
      </ul>

      <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>

      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}

export default App;
```

---

# Output

```
Page 1
Employee 1
Employee 2
Employee 3
Employee 4
Employee 5
```

Next → Page 2

---

# Real Applications

```
Google search results
Ecommerce product pages
Admin dashboards
GitHub repositories
```

---

# 3. Infinite Scroll Lists

## Problem

Pagination sometimes breaks **user experience**.

Example:

```
Instagram
Twitter
LinkedIn
YouTube
```

They use **infinite scrolling**.

User scrolls → new data loads automatically.

---

# Concept

```
Scroll event
      ↓
check scroll position
      ↓
fetch more data
      ↓
append to list
```

---

# React Implementation Pattern

We store **items in state**.

When user scrolls → append more items.

---

# Example Code

```jsx
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  // simulate API call
  function loadMore() {
    const newItems = Array.from({ length: 5 }, (_, index) => ({
      id: page * 5 + index,
      name: "Item " + (page * 5 + index),
    }));

    setItems((prev) => [...prev, ...newItems]);
  }

  useEffect(() => {
    loadMore();
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h2>Infinite Scroll List</h2>

      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;
```

---

# Real Use Cases

```
Social media feeds
News feeds
Comment sections
Video feeds
```

---

# 4. Dynamic Table Filtering (Dashboard Pattern)

This pattern appears in **admin dashboards**.

Example:

```
Employee Table

Name     Dept    City
Ankit    HR      Delhi
Rahul    IT      Mumbai
Simran   IT      Delhi
```

Users filter by:

```
department
city
salary
search
```

---

# Dataset

```
employees = [
 { id:1, name:"Ankit", dept:"HR", city:"Delhi", salary:40000 },
 { id:2, name:"Rahul", dept:"IT", city:"Mumbai", salary:80000 },
 { id:3, name:"Simran", dept:"IT", city:"Delhi", salary:60000 }
]
```

---

# React Code

```jsx
import { useState } from "react";

function App() {
  const employees = [
    { id: 1, name: "Ankit", dept: "HR", city: "Delhi", salary: 40000 },
    { id: 2, name: "Rahul", dept: "IT", city: "Mumbai", salary: 80000 },
    { id: 3, name: "Simran", dept: "IT", city: "Delhi", salary: 60000 },
  ];

  const [departmentFilter, setDepartmentFilter] = useState("");

  const filteredEmployees = employees.filter((emp) => {
    if (!departmentFilter) return true;

    return emp.dept === departmentFilter;
  });

  return (
    <div>
      <h2>Employee Dashboard</h2>

      <select onChange={(e) => setDepartmentFilter(e.target.value)}>
        <option value="">All</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
      </select>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
              <td>{emp.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

---

# Dashboard Filter Logic

Typical dashboard filtering combines multiple filters:

```
search
department
salary
location
```

Flow:

```
data
 ↓
filter search
 ↓
filter department
 ↓
filter location
 ↓
render table
```

---

# Final Mental Model

Most React data UIs follow this pipeline:

```
Raw Data
   ↓
Search
   ↓
Filter
   ↓
Sort
   ↓
Pagination
   ↓
Render UI
```

---

# Synthesis Questions

1. Why should filtering happen before mapping?
2. Why is pagination important for performance?
3. Difference between pagination and infinite scroll?
4. Why dashboards use multiple filters?
5. How does search filtering work internally?

---

If you want, next I can show **3 real React production patterns companies use with lists**:

```
Debounced Search (very important)
Server-side pagination
Virtualized lists (for 100k+ items)
```

These are **extremely important for real frontend engineering**.
