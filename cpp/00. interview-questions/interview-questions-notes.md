## 1. How does C++ enable both high-level and low-level programming, and what features make it suitable for systems-level development?

## 2. Whats is 'namespace std'?

## 3. What are references in C++?

## 4. Define the Block scope variable. 

## 5. What does the "auto" keyword do?


## 6. What do you mean by Pass by Value and Pass by Reference?

## 7. Define token in C++


## 8. What is the difference between C and C++?

## 9. What happens if you use cout without using namespace std or std::cout? Why is namespace resolution important in large C++ projects?

### 1️⃣ What happens if you don’t use `using namespace std;`?

In C++, many standard library features like `cout`, `cin`, `vector`, etc., are **inside the `std` namespace**.

If you try to do this:

```cpp
#include <iostream>

int main() {
    cout << "Hello\n";  // ❌ Compiler error!
    return 0;
}
```

You’ll get an error like:

```
error: 'cout' was not declared in this scope
```

**Why?**
Because the compiler only knows `cout` as **`std::cout`**, not as `cout` in the global namespace.

---

### 2️⃣ How to fix it

There are **two ways**:

**Option 1: Use the full name with the namespace**

```cpp
#include <iostream>

int main() {
    std::cout << "Hello\n";  // ✅ Works
    return 0;
}
```

**Option 2: Bring everything from `std` into the global namespace**

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello\n";  // ✅ Works
    return 0;
}
```

---

### 3️⃣ Why namespace resolution is important in **large projects**

* **Avoids name conflicts**: Imagine you and some library both define a function `print()`.

  * If you used `using namespace std;` globally, compiler might get confused which `print()` you mean.
* **Keeps code modular**: Namespaces let you organize functions, classes, and variables.
* **Prevents global namespace pollution**: Using `std::` explicitly ensures only what you want is used.

✅ In large codebases, explicitly writing `std::` is **safer and cleaner**.

---

### 4️⃣ Key takeaway

* `cout` is **inside `std`**, so you either need:

  1. `std::cout` → preferred in large projects
  2. `using namespace std;` → okay for small/simple programs

---

If you want, I can make a **small diagram showing namespace usage and collisions** so it’s visually easy to understand.


## 10. What is the difference between const and #define?

### 1️⃣ What they are:

**`const`** → Think of it as a **locked box** with a label saying what type of thing is inside:

```cpp
const int x = 10; // x is an int, and you can't change it
```

* You know it’s an integer.
* The compiler **protects it** from mistakes.
* It has a **scope**, like inside a function or globally.

---

**`#define`** → Think of it as a **sticky note** that says “replace this word with a value everywhere”:

```cpp
#define y 10
```

* No type: the compiler doesn’t know if it’s an int, float, or something else.
* No scope: it just blindly replaces `y` with `10` **before the code even compiles**.
* Can cause errors if misused.

---

### 2️⃣ Why `const` is better

* Type safe ✅ → Compiler knows it’s an `int`.
* Scope safe ✅ → Only visible where you want it.
* Debug friendly ✅ → You see it in debugging.

`#define` is old-style, risky, and **can cause weird bugs** in big projects.

---

### 3️⃣ Quick analogy:

| Thing   | `const`                  | `#define`         |
| ------- | ------------------------ | ----------------- |
| Type    | Knows the type           | Doesn’t know type |
| Scope   | Limited to where defined | Global everywhere |
| Safety  | Safe                     | Risky             |
| Example | `const int x = 10;`      | `#define y 10`    |

---

💡 **Tip:** In modern C++, always prefer `const` or `constexpr` instead of `#define` for values.

---

If you want, I can draw a **tiny visual diagram showing const vs #define** which makes it **super easy to remember**.
