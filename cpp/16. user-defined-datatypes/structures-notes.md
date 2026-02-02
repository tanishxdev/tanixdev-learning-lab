# **Structures in C++**

**Definition:**
A **structure** is a user-defined data type in C++ that groups **variables of different types** under a single name.

---

## **1. Defining a Structure**

```cpp
#include <iostream>
using namespace std;

struct Point {
    int x;
    int y;
};
```

* `Point` is the structure name.
* `x` and `y` are **members** of the structure.

---

## **2. Creating Structure Variables**

```cpp
Point p1; // Variable of type Point
Point p2 = {10, 20}; // Initialize with curly braces
```

* Before C++20, members **cannot be initialized in the struct definition**.
* From C++20, **designated initializers** can be used.

---

## **3. Accessing & Modifying Members**

Use the **dot (.) operator**:

```cpp
p1.x = 5;
p1.y = 10;

cout << p1.x << " " << p1.y << endl;
```

**Output:**

```
5 10
```

---

## **4. Member Functions in Structures**

C++ allows functions inside structures, making them **similar to classes**.

```cpp
struct Point {
    int x, y;

    int sum() { // Member function
        return x + y;
    }
};

int main() {
    Point p = {2, 3};
    cout << p.sum(); // Output: 5
}
```

---

## **5. Constructor & Destructor in Structure**

### **Constructor in Structure**

A **constructor** is a **special member function** that is automatically called when a structure (or class) object is created.

**Key points:**

* Same name as the structure.
* No return type (not even `void`).
* Can take parameters (parameterized constructor) or none (default constructor).
* Used to **initialize members** of the structure.

**Example:**

```cpp
#include <iostream>
using namespace std;

struct Point {
    int x, y;

    // Constructor
    Point(int a, int b) {
        x = a;
        y = b;
        cout << "Constructor called\n";
    }

    void show() {
        cout << x << " " << y << endl;
    }
};

int main() {
    Point p1(5, 10);  // Constructor is called automatically
    p1.show();         // Output: 5 10
}
```

**Output:**

```
Constructor called
5 10
```

---

### **Destructor in Structure**

A **destructor** is a **special member function** that is automatically called when a structure object goes out of scope or is deleted.

**Key points:**

* Same name as the structure preceded by `~`.
* No parameters and no return type.
* Used to **release resources** (memory, files, etc.).
* Only **one destructor per structure**.

**Example:**

```cpp
#include <iostream>
using namespace std;

struct Point {
    int x, y;

    // Constructor
    Point(int a, int b) { x = a; y = b; }

    void show() { cout << x << " " << y << endl; }

    // Destructor
    ~Point() { cout << "Destructor called for Point\n"; }
};

int main() {
    Point p1(5, 10);
    p1.show(); // Output: 5 10

    Point p2(20, 30);
    p2.show(); // Output: 20 30

    // Destructor will be called automatically at the end of main
}
```

**Output:**

```
5 10
20 30
Destructor called for Point
Destructor called for Point
```

---

✅ **Summary:**

* **Constructor** → initializes structure members at creation.
* **Destructor** → cleans up when the object is destroyed.
* Both are **optional**, but very useful for **resource management**.
#### Constructor and Destructor in code

----

```cpp
struct Point {
private:
    int x, y;

public:
    Point(int a, int b) { x = a; y = b; } // Constructor
    void show() { cout << x << " " << y << endl; }
    ~Point() { cout << "Destroyed Point\n"; } // Destructor
};

int main() {
    Point p1(1,1), p2(99,100);
    p1.show();
    p2.show();
}
```

**Output:**

```
1 1
99 100
Destroyed Point
Destroyed Point
```

---

## **6. Size of a Structure**

* Determined by sum of member sizes + **padding** for memory alignment.
* **Member functions do not contribute** to size.

```cpp
struct GfG {
    char c;
    int x, y;
};

cout << sizeof(GfG); // Output: 12 (padding included)
```

---

## **7. Typedef with Structure**

```cpp
typedef struct Geeks {
    int x, y;
} GfG;

GfG s = {0, 1};
cout << s.x << " " << s.y << endl; // Output: 0 1
```

* `typedef` allows **aliasing the struct name**.

---

## **8. Nested Structures**

* One structure can contain another as a **member**.

```cpp
struct Inner {
    int a, b;
};

struct Outer {
    Inner in;
    int x, y;
};

Outer obj = {{1, 2}, 10, 20};
cout << obj.in.a << " " << obj.in.b << endl; // Inner: 1 2
cout << obj.x << " " << obj.y << endl;       // Outer: 10 20
```

---

## **9. Pointer to Structure**

* Use `->` operator to access members via pointer.

```cpp
struct GfG {
    int count;
    void showCount() { cout << count << endl; }
};

GfG gfg = {224};
GfG* ptr = &gfg;
ptr->showCount(); // Output: 224
```

---

## **10. Self-Referential Structures**

* Structure can have a **pointer to itself**.
* Useful for **linked lists, trees**, etc.

```cpp
struct Node {
    int val;
    Node* next; // Pointer to same type
};
```

* Cannot directly include a member of the same type (infinite size problem).

---

## **11. Structures with Functions**

* Structures can be **passed to functions** or **returned from functions**.
* Recommended to **pass by reference** to avoid copying overhead.

```cpp
void printPoint(const Point &p) { 
    cout << p.x << " " << p.y << endl; 
}
```

---

## **12. Bit Fields in Structures**

* Define **number of bits** for a member.
* Useful in **memory-critical applications**.

```cpp
struct Flags {
    unsigned int a : 1; // 1 bit
    unsigned int b : 3; // 3 bits
};
```

---

## **13. Structure vs Class**

| Feature        | Structure                                               | Class             |
| -------------- | ------------------------------------------------------- | ----------------- |
| Default Access | Public                                                  | Private           |
| Can have       | Constructors, Destructors, Functions, Access Specifiers | Same as struct    |
| Use case       | Simple data grouping                                    | Full OOP features |

---