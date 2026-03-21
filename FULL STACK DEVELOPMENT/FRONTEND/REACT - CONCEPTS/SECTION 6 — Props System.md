# SECTION 6 — Props System

## 31. Props Basics

### Problem — Why Props Exist

When building UI with components, **components rarely live alone**.
They are **composed together** to form larger interfaces.

Example real application:

**E-commerce product page**

```
ProductPage
 ├─ ProductImage
 ├─ ProductInfo
 ├─ Price
 └─ AddToCartButton
```

Now imagine the product data comes from an API:

```json
{
  "name": "iPhone 15",
  "price": 799,
  "rating": 4.7
}
```

Question:

How does **ProductInfo** know the product name?
How does **Price** know the product price?

The data is fetched in the **parent component**.

So the problem becomes:

> How do we send data from one component to another?

This is exactly the problem **Props solve**.

---

### Real Application Scenario

Imagine a **User Card UI**

```
UserCard
 ├─ Avatar
 ├─ Username
 └─ Bio
```

Data comes from API:

```
{
 name: "Tanish",
 avatar: "avatar.png",
 bio: "Backend developer"
}
```

Each component needs **different parts of the same data**.

Without props:

- Components become **isolated**
- Data cannot flow
- UI cannot be dynamic

So React introduces **Props (Properties)**.

---

### Concept — What Props Are

Props are **inputs to a component**.

Think of components like **functions**.

Example function:

```javascript
function greet(name) {
  return "Hello " + name;
}

greet("Tanish");
```

`name` is an **input parameter**.

Similarly in React:

```
Component(props)
```

Props are simply **data passed into a component**.

---

### Core Idea

Props allow:

```
Parent Component
      ↓
Pass Data
      ↓
Child Component
```

Important rule:

Props are **read-only**.

A child **cannot modify props**.

---

### Simple Mental Model

Think of components like **machines**.

```
Input → Component → Output (UI)
```

Example:

```
name = "Tanish"
```

Input goes into component:

```
<User name="Tanish" />
```

Component produces UI.

---

### Basic Syntax

Passing props:

```jsx
<ComponentName propName={value} />
```

Receiving props:

```jsx
function ComponentName(props) {
  // use props
}
```

---

### Example 1 — Basic Props

#### Parent Component

```jsx
// App.jsx

function App() {
  // Data that belongs to parent component
  const username = "Tanish";

  return (
    <div>
      {/* Passing data to child component using props */}
      <User name={username} />
    </div>
  );
}

export default App;
```

---

#### Child Component

```jsx
// User.jsx

function User(props) {
  return (
    <div>
      {/* Accessing data passed from parent */}
      <h2>User Name: {props.name}</h2>
    </div>
  );
}

export default User;
```

---

### Output

```
User Name: Tanish
```

Flow:

```
App → passes name → User component
```

---

### Example 2 — Multiple Props

Real apps pass **multiple values**.

#### Parent Component

```jsx
function App() {
  const user = {
    name: "Tanish",
    age: 22,
    role: "Full Stack Developer",
  };

  return (
    <div>
      {/* Passing multiple props */}
      <User name={user.name} age={user.age} role={user.role} />
    </div>
  );
}

export default App;
```

---

#### Child Component

```jsx
function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

export default User;
```

---

### Output

```
Name: Tanish
Age: 22
Role: Full Stack Developer
```

---

### Example 3 — Props with Arrays

React often renders **lists of data**.

Example: product list.

#### Parent Component

```jsx
function App() {
  const products = ["Laptop", "Phone", "Tablet"];

  return (
    <div>
      <ProductList items={products} />
    </div>
  );
}

export default App;
```

---

#### Child Component

```jsx
function ProductList(props) {
  return (
    <ul>
      {/* Rendering list using map */}
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ProductList;
```

---

### Output

```
Laptop
Phone
Tablet
```

---

### Props Flow Diagram

```
Parent Component
       │
       │ passes props
       ▼
Child Component
       │
       │ renders UI using props
       ▼
DOM
```

Props flow is **always one-directional**.

```
Parent → Child
```

This is called:

**Unidirectional Data Flow**

A core React principle.

---

### Real Application Use Cases

Props are used everywhere.

#### 1. Product Cards

```
<ProductCard
 name="iPhone 15"
 price={799}
 rating={4.7}
/>
```

---

#### 2. Buttons

```
<Button
 text="Login"
 color="blue"
/>
```

---

#### 3. Navigation Links

```
<NavItem
 title="Dashboard"
 link="/dashboard"
/>
```

---

### Why Props Are Important

Without props:

- Components cannot receive data
- UI cannot update dynamically
- Reusable components become impossible

Props enable:

- **Reusable components**
- **Dynamic UI**
- **Clean architecture**

---

### Important Rule — Props Are Read Only

Child components **cannot modify props**.

Bad example:

```javascript
props.name = "Rahul";
```

React will not allow this.

Reason:

React wants **predictable UI flow**.

Only parent should change data.

---

### Tradeoffs / Limitations

Props work well for **small component trees**.

But problems appear when the tree becomes deep.

Example:

```
App
 └─ Page
     └─ Layout
         └─ Sidebar
             └─ UserAvatar
```

To pass user data to `UserAvatar`, you must pass props through every level.

This becomes:

```
App → Page → Layout → Sidebar → Avatar
```

This problem is called:

**Prop Drilling**

We will study this in **Topic 34**.

---

### Real Architecture Pattern

Typical React flow:

```
API → Parent component → Props → Child components
```

Example:

```
API
 ↓
ProductsPage
 ↓
ProductCard
 ↓
Price
 ↓
AddToCartButton
```

---

### Common Beginner Mistakes

#### Mistake 1

Forgetting curly braces for JavaScript.

Wrong:

```jsx
<User name="username" />
```

Correct:

```jsx
<User name={username} />
```

---

#### Mistake 2

Trying to modify props.

Wrong:

```javascript
props.age = 30;
```

Props must stay immutable.

---

### Props vs State (Preview)

| Feature   | Props     | State                |
| --------- | --------- | -------------------- |
| Ownership | Parent    | Component itself     |
| Mutable   | No        | Yes                  |
| Purpose   | Pass data | Manage internal data |

We will deeply study **state later**.

---

### Synthesis Questions

1. What problem do props solve in React architecture?
2. Why is data flow in React **unidirectional**?
3. Why are props **read-only**?
4. What happens if a component tries to modify props?
5. How would you pass an **object as props**?
6. What real-world UI patterns rely heavily on props?

---

## 32. Props Destructuring

### Problem — Why Props Destructuring Exists

In the previous topic, we accessed props like this:

```jsx
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.role}</p>
    </div>
  );
}
```

This works fine for small components.

But real React components often receive **many props**.

Example in a real application:

```jsx
<ProductCard
  title="MacBook Pro"
  price={1999}
  rating={4.8}
  category="Laptop"
  stock={23}
/>
```

Inside the component you must write:

```jsx
props.title;
props.price;
props.rating;
props.category;
props.stock;
```

Problem:

1. Code becomes **repetitive**
2. Readability becomes **poor**
3. JSX becomes **noisy**
4. Harder to maintain

Example:

```jsx
<h2>{props.title}</h2>
<p>{props.price}</p>
<p>{props.rating}</p>
```

React developers prefer **clean components**.

So we need a cleaner way to extract values from props.

That solution is **Props Destructuring**.

---

### Concept — What Destructuring Means

Destructuring is a **JavaScript feature** that extracts values from objects.

Props in React are simply an **object**.

Example props object:

```javascript
props = {
  name: "Tanish",
  age: 22,
  role: "Developer",
};
```

Instead of writing:

```javascript
props.name;
props.age;
props.role;
```

We extract values like this:

```javascript
const { name, age, role } = props;
```

Now we can directly use:

```javascript
name;
age;
role;
```

This is called **Object Destructuring**.

React components use this **very heavily**.

---

### Mental Model

Think of props as a **data box**.

```text
props
 ├─ name
 ├─ age
 └─ role
```

Destructuring **opens the box** and pulls values out.

```text
name
age
role
```

Now the component can use them directly.

---

### Example 1 — Without Destructuring

```jsx
function User(props) {
  return (
    <div>
      {/* Accessing properties using props object */}
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}
```

Problems:

- Repeated `props`
- Less readable
- Harder to scan visually

---

### Example 2 — Destructuring Inside Component

We destructure props at the beginning.

```jsx
function User(props) {
  /* Extracting values from props object */
  const { name, age, role } = props;

  return (
    <div>
      {/* Now we can directly use variables */}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}
```

Advantages:

- Cleaner code
- Easier to read
- Less repetition

---

### Example 3 — Destructuring Directly in Function Parameters

This is the **most common React pattern**.

Instead of writing:

```jsx
function User(props) {
  const { name, age } = props;
}
```

We destructure directly inside the function parameters.

```jsx
function User({ name, age, role }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}
```

This is considered **cleaner and modern React style**.

---

### Parent Component Example

```jsx
function App() {
  const user = {
    name: "Tanish",
    age: 22,
    role: "Full Stack Developer",
  };

  return (
    <div>
      {/* Passing props */}
      <User name={user.name} age={user.age} role={user.role} />
    </div>
  );
}

export default App;
```

Child component receives props and destructures them.

---

### Example 4 — Destructuring with Arrays

Example:

```jsx
function ProductList({ items }) {
  return (
    <ul>
      {/* Rendering products */}
      {items.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}
```

Here we destructure:

```javascript
items;
```

directly from props.

---

### Example 5 — Nested Object Props

Sometimes props contain **objects**.

Example parent component:

```jsx
function App() {
  const user = {
    name: "Tanish",
    location: "Delhi",
    profession: "Engineer",
  };

  return <Profile user={user} />;
}
```

Child component:

```jsx
function Profile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.location}</p>
      <p>{user.profession}</p>
    </div>
  );
}
```

Even deeper destructuring is possible.

```jsx
function Profile({ user: { name, location, profession } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{profession}</p>
    </div>
  );
}
```

But deep destructuring should be used carefully.

---

### Real Application Use Case

Example: **Product Card**

Parent component:

```jsx
<ProductCard title="MacBook" price={2000} rating={4.7} />
```

Child component:

```jsx
function ProductCard({ title, price, rating }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>Price: ${price}</p>

      <p>Rating: {rating}</p>
    </div>
  );
}
```

Clean and readable.

---

### Tradeoffs

Destructuring improves readability but also introduces some considerations.

#### Advantage

1. Cleaner syntax
2. Less repetition
3. Easier to read
4. Standard React practice

#### Potential Problem

If props are missing:

```jsx
<User />
```

Then destructured values become:

```javascript
undefined;
```

Example:

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

If `name` isn't passed → `undefined`.

We solve this using **default props**, which is the next topic.

---

### Common Beginner Mistakes

#### Mistake 1 — Forgetting curly braces

Wrong:

```jsx
function User(name, age)
```

Correct:

```jsx
function User({ name, age })
```

---

#### Mistake 2 — Mixing props and destructuring

Wrong:

```jsx
function User({ name }) {
  return <h2>{props.name}</h2>;
}
```

Correct:

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

---

### When Not to Destructure

If component uses **many props with dynamic access**.

Example:

```jsx
props[key];
```

In those rare cases you may keep the `props` object.

---

### Synthesis Questions

1. Why does React encourage props destructuring?
2. What problem does destructuring solve?
3. Why are props essentially **JavaScript objects**?
4. What is the difference between:

```javascript
props.name;
```

and

```javascript
const { name } = props;
```

5. Why do most modern React components destructure props directly in the function parameters?

## 33. Default Props

### Problem — Why Default Props Exist

In real applications, components often **expect certain props**.

Example:

```jsx
<ProductCard title="MacBook Pro" price={1999} />
```

Inside the component we render:

```jsx
<h2>{title}</h2>
<p>Price: ${price}</p>
```

But what happens if the parent forgets to send a prop?

Example:

```jsx
<ProductCard title="MacBook Pro" />
```

Now inside the component:

```javascript
price = undefined;
```

UI becomes:

```text
MacBook Pro
Price: $undefined
```

This is **bad user experience**.

In real applications, missing props can cause:

- Broken UI
- Unexpected values
- Runtime errors
- Hard-to-debug bugs

Example problem in production:

```jsx
<UserCard />
```

But component expects:

```jsx
name;
avatar;
role;
```

Result:

```text
undefined
undefined
undefined
```

We need a **fallback value** when props are missing.

That is the purpose of **Default Props**.

---

### Concept — What Default Props Are

Default props provide **fallback values** for props.

Meaning:

```text
If parent DOES NOT send a prop
       ↓
React uses a DEFAULT value
```

Example logic:

```text
title = provided value OR default value
```

Think of it like:

```javascript
value = props.value || "Default";
```

Default props make components **safer and more predictable**.

---

### Mental Model

Component input:

```text
Parent → Props → Component
```

But if input is missing:

```text
Parent → Missing prop → Component breaks
```

Default props solve this by providing:

```text
Parent → Missing prop → Default value → Component works
```

---

### Method 1 — Default Parameters (Modern React Way)

Modern React uses **JavaScript default parameters**.

Example component:

```jsx
function User({ name = "Guest", role = "Visitor" }) {
  return (
    <div>
      {/* If parent does not pass props, defaults will be used */}
      <h2>Name: {name}</h2>

      <p>Role: {role}</p>
    </div>
  );
}
```

---

### Parent Component Example

Parent sends only one prop.

```jsx
function App() {
  return (
    <div>
      {/* role is missing */}
      <User name="Tanish" />
    </div>
  );
}

export default App;
```

---

### Output

```text
Name: Tanish
Role: Visitor
```

Even though `role` was not provided.

Default value was used.

---

### Example 2 — Multiple Default Props

```jsx
function ProductCard({
  title = "Unknown Product",
  price = 0,
  rating = "No rating",
}) {
  return (
    <div>
      <h2>{title}</h2>

      <p>Price: ${price}</p>

      <p>Rating: {rating}</p>
    </div>
  );
}
```

Parent component:

```jsx
<ProductCard title="MacBook" />
```

Output:

```text
MacBook
Price: $0
Rating: No rating
```

---

### Example 3 — Default Props for Arrays

Example: product list.

```jsx
function ProductList({ items = [] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

Why this matters:

If `items` is undefined:

```javascript
items.map();
```

will crash.

Error:

```text
Cannot read property 'map' of undefined
```

Default value prevents this.

---

### Example 4 — Default Props for Objects

Example:

```jsx
function Profile({
  user = {
    name: "Anonymous",
    role: "Guest",
  },
}) {
  return (
    <div>
      <h2>{user.name}</h2>

      <p>{user.role}</p>
    </div>
  );
}
```

---

### Older React Method — defaultProps

Older React used `defaultProps`.

Example:

```jsx
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>{props.role}</p>
    </div>
  );
}
```

Then default values were defined:

```jsx
User.defaultProps = {
  name: "Guest",
  role: "Visitor",
};
```

React automatically applied them if props were missing.

However:

Modern React prefers **JavaScript default parameters**.

---

### Real Application Use Cases

Default props are common in **reusable components**.

Example: Button component.

```jsx
function Button({ text = "Click", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}
```

Usage:

```jsx
<Button />
```

Output:

```text
Click
```

Another usage:

```jsx
<Button text="Login" color="green" />
```

---

### Real Example — Avatar Component

```jsx
function Avatar({ image = "/default-avatar.png", size = 50 }) {
  return <img src={image} width={size} height={size} />;
}
```

If user has no profile image, a **default avatar appears**.

---

### Tradeoffs

#### Advantages

1. Prevents undefined values
2. Safer UI rendering
3. Improves reusable components
4. Cleaner developer experience

---

#### Possible Issue

Sometimes developers hide bugs using default props.

Example:

Parent forgets to pass required prop.

Instead of noticing the mistake, default value silently appears.

So developers should decide carefully:

```text
Is this prop optional or required?
```

---

### Common Beginner Mistakes

#### Mistake 1 — Forgetting destructuring

Wrong:

```jsx
function User(props = { name: "Guest" })
```

Correct:

```jsx
function User({ name = "Guest" })
```

---

#### Mistake 2 — Default values inside JSX

Wrong:

```jsx
<h2>{name || "Guest"}</h2>
```

This works but becomes messy.

Better solution:

```jsx
function User({ name = "Guest" })
```

---

### Real Production Pattern

React developers often combine:

- Props destructuring
- Default props

Example:

```jsx
function ProductCard({ title = "Unknown", price = 0, rating = 0 }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>${price}</p>

      <p>⭐ {rating}</p>
    </div>
  );
}
```

This makes components **robust and reusable**.

---

### Synthesis Questions

1. What problem do default props solve?
2. Why is `undefined` dangerous for UI rendering?
3. What happens if we call `.map()` on undefined?
4. Why are default parameters preferred over `defaultProps` in modern React?
5. When should we use default props vs required props?

---

## 34. Prop Drilling Problem

### Problem — Why Prop Drilling Becomes a Serious Issue

Props work very well when components are **close to each other**.

Example:

```text
App
 └─ UserCard
```

Here passing props is simple.

```jsx
<UserCard name="Tanish" />
```

But real applications rarely have such small component trees.

Real UI structures look like this:

```text
App
 └─ Dashboard
      └─ Layout
           └─ Sidebar
                └─ UserAvatar
```

Now imagine the **user data is stored in App**.

Example data:

```javascript
const user = {
  name: "Tanish",
  avatar: "avatar.png",
};
```

But the component that actually needs the data is **UserAvatar**.

Problem:

The data must travel through **every intermediate component**.

```text
App → Dashboard → Layout → Sidebar → UserAvatar
```

Even though those components **do not need the data**, they still must receive and forward it.

This is called:

**Prop Drilling**

---

### Definition — What Prop Drilling Is

Prop drilling is the process of **passing props through multiple components that do not use them**, only to deliver them to deeper components.

Example chain:

```text
App
 ↓
Dashboard
 ↓
Layout
 ↓
Sidebar
 ↓
UserAvatar
```

Only **UserAvatar** needs the user data, but every component must pass it.

---

### Real Application Example

Imagine a **social media application**.

Structure:

```text
App
 └─ HomePage
      └─ FeedLayout
           └─ PostList
                └─ Post
                     └─ LikeButton
```

User data exists at the top.

```javascript
const user = {
  id: 101,
  name: "Tanish",
};
```

But **LikeButton** needs the user ID.

So props must pass through:

```text
App → HomePage → FeedLayout → PostList → Post → LikeButton
```

Even though:

- HomePage doesn't need user
- FeedLayout doesn't need user
- PostList doesn't need user

They must pass it.

---

### Example — Prop Drilling in Code

#### Top Component

```jsx
function App() {
  /* User data stored at top level */
  const user = {
    name: "Tanish",
    avatar: "avatar.png",
  };

  return <Dashboard user={user} />;
}
```

---

#### Dashboard Component

```jsx
function Dashboard({ user }) {
  /* Dashboard does not use user data */
  /* but must pass it down */

  return <Layout user={user} />;
}
```

---

#### Layout Component

```jsx
function Layout({ user }) {
  /* Again this component doesn't need user */

  return <Sidebar user={user} />;
}
```

---

#### Sidebar Component

```jsx
function Sidebar({ user }) {
  /* Passing again */

  return <UserAvatar user={user} />;
}
```

---

#### Final Component That Actually Needs the Data

```jsx
function UserAvatar({ user }) {
  return (
    <div>
      {/* Finally using the prop */}
      <img src={user.avatar} width="40" />

      <p>{user.name}</p>
    </div>
  );
}
```

---

### Visualizing the Problem

```text
Component Tree

App
 │
 ▼
Dashboard
 │
 ▼
Layout
 │
 ▼
Sidebar
 │
 ▼
UserAvatar
```

User data travels through **4 unnecessary components**.

---

### Why Prop Drilling Is Bad

#### 1. Unnecessary Complexity

Components become harder to understand.

Example:

```jsx
function Layout({ user })
```

But Layout does **not even use user**.

Developers reading code get confused.

---

#### 2. Harder Maintenance

If a new prop must be added:

Example:

```text
userTheme
```

You must modify:

```text
App
Dashboard
Layout
Sidebar
UserAvatar
```

Even though only the last component needs it.

---

#### 3. Tight Coupling

Intermediate components become tightly coupled to parent data.

This reduces **component reusability**.

---

#### 4. Fragile Architecture

If someone removes a prop accidentally in the chain:

```jsx
<Layout />
```

Then deeper components break.

---

### Real Example — E-commerce App

Component tree:

```text
App
 └─ ProductPage
      └─ ProductLayout
           └─ ProductInfo
                └─ AddToCartButton
```

`AddToCartButton` needs:

```javascript
productId;
```

But it must pass through **three components** first.

---

### When Prop Drilling Is Acceptable

Prop drilling is fine when:

- Component tree is **small**
- Props travel **1–2 levels**
- Components are **closely related**

Example:

```text
App
 └─ Header
      └─ Logo
```

Passing props here is completely fine.

---

### When Prop Drilling Becomes a Problem

When component depth becomes large.

Example:

```text
App
 └─ Layout
      └─ Dashboard
           └─ Sidebar
                └─ Widget
                     └─ UserMenu
```

This is where architecture starts breaking.

---

### Modern Solutions to Prop Drilling

React introduced several solutions.

---

#### 1. Context API

Allows components to access global data **without passing props manually**.

Example flow:

```text
Context Provider
       ↓
Any Component Can Access Data
```

Instead of:

```text
App → A → B → C → D
```

We get:

```text
App
 │
Context
 │
D directly accesses data
```

---

#### 2. Global State Libraries

Used in large applications.

Examples:

- Redux Toolkit
- Zustand
- Recoil
- MobX

These allow components to access shared state **from anywhere**.

---

### Mental Model

Think of prop drilling like **passing a package through many people**.

```text
Person A → B → C → D → E
```

Even if only **E** needs the package.

Context API works like a **shared locker**.

```text
Everyone can directly access locker
```

No middle people needed.

---

### Important Insight

React intentionally designed props this way.

Why?

Because **explicit data flow is predictable**.

Prop drilling becomes a problem **only in large apps**.

That is why React introduced **Context API later**.

---

### Real Architecture Pattern

Typical React apps use:

```text
Small component trees → props
Large shared data → context / global state
```

---

### Common Beginner Mistakes

#### Mistake 1 — Overusing global state

Some developers immediately use Redux for everything.

This is unnecessary.

Use props when possible.

---

#### Mistake 2 — Ignoring architecture early

Developers pass props through **10 components** instead of introducing context.

---

### Synthesis Questions

1. What is prop drilling?
2. Why does prop drilling increase complexity in large apps?
3. Why do intermediate components become harder to maintain?
4. When is prop drilling acceptable?
5. What architectural tools solve prop drilling?

---
