# Overloading / Overriding / Compile-time / Runtime polymorphism

## 1️⃣ Function Overloading

**Definition (one line):**
Same function name, different parameters (number/type/order).

### Type:

Compile-time Polymorphism (Build time)

### Example (C++)

```cpp
#include <iostream>
using namespace std;

class Math {
public:
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
};
```

### Why compile-time?

Compiler decides which function to call before execution.

---

## 2️⃣ Operator Overloading

**Definition:**
Giving special meaning to operators for user-defined types.

### Type:

Compile-time Polymorphism

### Example

```cpp
class Complex {
public:
    int real, imag;

    Complex(int r, int i) {
        real = r;
        imag = i;
    }

    Complex operator + (Complex obj) {
        return Complex(real + obj.real, imag + obj.imag);
    }
};
```

---

## 3️⃣ Function Overriding

**Definition:**
Child class redefining a function already defined in parent class.

### Type:

Runtime Polymorphism

### Important:

Needs **inheritance**

### Example

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {   // virtual is important
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Bark" << endl;
    }
};
```

### Why runtime?

Decision happens at execution using dynamic binding.

---

## 4️⃣ Polymorphism (Big Concept)

**Meaning:**
One name, many forms.

Two Types:

| Type         | Happens When |
| ------------ | ------------ |
| Compile-time | Overloading  |
| Runtime      | Overriding   |

---

## 5️⃣ Compile-Time Polymorphism

Also called:

- Static Binding
- Early Binding

Examples:

- Function Overloading
- Operator Overloading

---

## 6️⃣ Runtime Polymorphism

Also called:

- Dynamic Binding
- Late Binding

Example:

- Function Overriding
- Using `virtual` keyword

---

## 7️⃣ Quick Comparison Table

| Feature               | Overloading  | Overriding          |
| --------------------- | ------------ | ------------------- |
| Inheritance needed?   | No           | Yes                 |
| Parameters different? | Yes          | No (same signature) |
| Keyword needed?       | No           | virtual             |
| Binding time          | Compile-time | Runtime             |

---

## 🔥 Interview Trick Question

Q: Can we override a static function?
Answer: No, static functions are not runtime polymorphic.

Q: Can we overload main()?
Yes in C++, but only one main is entry point.

---

## 🔥 Most Important Concept

If no `virtual` → no runtime polymorphism.

---

# Static Methods (OOP)

### One-line Definition

**Static methods are class-level functions that belong to the class itself, not to any object.**

---

## What does that mean?

Normal methods → object ke through call hote hain.
Static methods → class ke through call hote hain.

---

## Example (C++)

```cpp
#include <iostream>
using namespace std;

class Math {
public:
    // Static method
    static int add(int a, int b) {
        return a + b;
    }
};

int main() {

    // No object created
    cout << Math::add(5, 3);  // Calling using class name

    return 0;
}
```

### Key Point:

- No object needed
- Called using `ClassName::methodName()`

---

## Rules of Static Methods

1. Cannot access non-static variables directly
2. Cannot use `this` pointer
3. Can access only static data members

---

## When Are Static Methods Appropriate?

### 1️⃣ Utility / Helper Functions

When logic does not depend on object state.

Example:

- Math operations
- String helpers
- Validation functions

---

### 2️⃣ Shared Logic Across All Objects

When behavior is common and not object-specific.

Example:

- Counter of total objects created
- Configuration settings

---

### 3️⃣ Factory Methods

When you want controlled object creation.

Example:

```cpp
class User {
public:
    static User createAdmin() {
        return User();
    }
};
```

---

### 4️⃣ Performance & Clarity

If method does not modify object state → make it static
Clear intent: “This does not depend on instance.”

---

## Static vs Non-Static Quick Comparison

| Feature                    | Static | Non-Static |
| -------------------------- | ------ | ---------- |
| Belongs to                 | Class  | Object     |
| Needs object?              | No     | Yes        |
| Access instance variables? | No     | Yes        |
| Uses `this`?               | No     | Yes        |

---

## Interview Answer (Short & Clean)

“Static methods are class-level methods that do not depend on object state and are used for utility functions, shared logic, or factory methods.”

---

I will answer in Candidate mode.

---

# Runtime vs Compile-Time Polymorphism

Clear Mental Model (From Basic → Complete Understanding)

---

## 1. First Understand the Core Difference in One Line

Compile-time polymorphism
→ Decision is made during compilation.

Runtime polymorphism
→ Decision is made during execution.

Now let’s build the mental model properly.

---

# PART 1 — Compile-Time Polymorphism (Static Binding)

### Level 1: Basic Understanding

The compiler knows exactly which function to call **before the program runs**.

There is no confusion at runtime.

Example mechanisms in C++:

- Function Overloading
- Operator Overloading

---

### Level 2: Mental Model

Think like this:

At compile time, the compiler looks at:

- Function name
- Parameter list

And decides:

"Okay, I know exactly which function to call."

There is no inheritance-based dynamic decision.

Everything is resolved early.

---

### Example (Function Overloading)

```cpp
#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    Calculator obj;

    cout << obj.add(5, 3) << endl;       // Calls int version
    cout << obj.add(5.5, 2.5) << endl;   // Calls double version

    return 0;
}
```

#### What Happens Internally?

When compiler sees:

```
obj.add(5, 3);
```

It checks:

- Parameters are int, int
- Calls int add(int, int)

Decision done at compile time.

No runtime decision.

---

### Level 3: Deep Mental Model

Compile-time polymorphism uses:

- Static binding
- Early binding
- No virtual table (vtable)
- No dynamic dispatch

Performance:

- Faster
- No runtime overhead

Limitation:

- Cannot change behavior dynamically via base class pointer.

---

# PART 2 — Runtime Polymorphism (Dynamic Binding)

### Level 1: Basic Understanding

Here the function call is decided during runtime.

It happens when:

- Inheritance is used
- Function is marked virtual
- Base class pointer/reference is used

---

### Level 2: Mental Model

Imagine:

You have a base class pointer:

```
Animal* ptr;
```

At runtime, ptr may point to:

- Dog
- Cat
- Cow

The compiler does NOT know which object it will point to.

So the decision must be delayed until runtime.

That is runtime polymorphism.

---

## Example (Function Overriding + Virtual)

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* ptr;
    Dog d;

    ptr = &d;

    ptr->sound();  // Runtime decision

    return 0;
}
```

---

## What Happens Internally?

Because sound() is virtual:

- Compiler creates a virtual table (vtable).
- Object stores pointer to its vtable.
- At runtime, correct function is selected.

This is called:

- Dynamic binding
- Late binding
- Dynamic dispatch

---

# PART 3 — Side-by-Side Comparison

| Feature           | Compile-Time       | Runtime              |
| ----------------- | ------------------ | -------------------- |
| Binding           | Early              | Late                 |
| When decided      | During compilation | During execution     |
| Mechanism         | Overloading        | Overriding + virtual |
| Uses inheritance? | Not required       | Required             |
| Uses virtual?     | No                 | Yes                  |
| Performance       | Faster             | Slight overhead      |
| Flexibility       | Less               | More                 |

---

# PART 4 — Strong Interview Mental Model

If interviewer asks:

"When does runtime polymorphism happen?"

Answer structure:

1. Inheritance must exist.
2. Function must be virtual.
3. Base class pointer/reference must point to derived object.
4. Then dynamic binding happens.

Without virtual → no runtime polymorphism.

---

# PART 5 — Real Intuition

Think like this:

Compile-time:
You decide restaurant menu before entering.

Runtime:
You decide food after seeing what is available.

Compile-time:
Fixed behavior.

Runtime:
Flexible behavior.

---

## PART 6 — Most Common Mistake

Many students think:

Overriding automatically means runtime polymorphism.

Wrong.

If function is not virtual:

```cpp
Animal* ptr = new Dog();
ptr->sound();
```

Without virtual keyword → base version is called.

So virtual is mandatory.

---

# Final Interview-Ready Explanation

Compile-time polymorphism happens when the compiler resolves the function call during compilation, typically using function overloading or operator overloading.

Runtime polymorphism happens when the function call is resolved at execution time using inheritance and virtual functions. It allows a base class pointer to call a derived class method dynamically.

Compile-time polymorphism provides better performance. Runtime polymorphism provides better flexibility and extensibility.

---
