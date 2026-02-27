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
