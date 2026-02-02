# **Unions in C++**

## **1. What is a Union?**

A **union** is a **user-defined data type** in C++ similar to a structure.

* A union can store **different data types** in the **same memory location**.
* **Only one member can hold a value at a time**.
* The **size of a union** is equal to the **largest member**.

**Key Idea:** All members **share the same memory**.

### **Syntax:**

```cpp
union UnionName {
    int a;
    float b;
    char c;
};
```

### **Creating a Union Variable:**

```cpp
UnionName u;   // variable of union type
```

---

## **2. Why Use Unions?**

### **Advantages:**

1. **Memory Efficiency:**
   Only the largest member’s memory is used, unlike structures where memory for all members is allocated.
2. **Hardware Register Mapping:**
   Useful in low-level programming (embedded systems) where a memory location can represent multiple things.
3. **Flexibility:**
   Can represent **different types of data at different times** (but not simultaneously).

**Example Use Case:**

* Message packet might contain **either an integer ID or a string**.
* Embedded systems: status registers might have multiple interpretations.

---

## **3. How Unions Work**

### **Memory Representation:**

If we have:

```cpp
union Example {
    int x;   // 4 bytes
    float y; // 4 bytes
    char z;  // 1 byte
};
```

* Total memory used: **4 bytes** (size of largest member, `int` or `float`)
* Writing `x` and then `y` overwrites the same memory location.

---

## **4. Accessing and Modifying Union Members**

### **Access Members:**

* Use **dot operator** if normal variable:

```cpp
u.x = 10;
cout << u.x;
```

* Only **one member can be active** at a time.

### **Example:**

```cpp
#include <iostream>
using namespace std;

union Student {
    int rollNo;
    float height;
    char firstLetter;
};

int main() {
    Student s;

    s.rollNo = 21;
    cout << "Roll No: " << s.rollNo << endl;

    s.height = 5.2;  // Overwrites rollNo
    cout << "Height: " << s.height << endl;

    s.firstLetter = 'N';  // Overwrites height
    cout << "First Letter: " << s.firstLetter << endl;

    return 0;
}
```

**Output:**

```
Roll No: 21
Height: 5.2
First Letter: N
```

---

## **5. Nested Unions**

A union can be **nested inside a structure, class, or another union**.

### **Syntax:**

```cpp
struct Employee {
    char name[50];
    int id;
    
    union Pay {
        float hourlyRate;
        float salary;
    } payment; 
};
```

### **Example:**

```cpp
Employee e;
e.payment.hourlyRate = 300.0;
cout << e.payment.hourlyRate;
```

**Note:** Memory is shared between `hourlyRate` and `salary`.

---

## **6. Anonymous Unions**

* A union without a name is called an **anonymous union**.
* Members can be accessed directly without a union variable name.
* Used in **nested structures** for **memory-efficient design**.

### **Example:**

```cpp
struct Employee {
    int id;
    union {
        float hourlyRate;
        float salary;
    };
};

int main() {
    Employee e;
    e.hourlyRate = 300;
    cout << e.hourlyRate;

    e.salary = 50000;
    cout << e.salary;
}
```

**Output:**

```
300
50000
```

---

## **7. Size of Union**

* Memory = **largest member**.
* Example:

```cpp
union A {
    int x;       // 4 bytes
    char y;      // 1 byte
    double z;    // 8 bytes
};
cout << sizeof(A);  // Output: 8
```

**Reason:** All members **share memory**, so union size = **largest data type size**.

---

## **8. Self-Referential Union (Rare)**

* A union can contain **pointers to its own type** for advanced memory operations.
* Not commonly used but useful in **embedded systems**.

---

## **9. Problems & Use Cases**

### **Problem 1:** Memory-efficient storage

```cpp
// Store either int or char
union Data {
    int num;
    char letter;
};
Data d;
d.num = 100;
cout << d.num;
d.letter = 'A'; // num overwritten
cout << d.letter;
```

### **Problem 2:** Hardware register mapping

```cpp
union Register {
    int status;
    struct {
        bool error : 1;
        bool ready : 1;
    } flags;
};
Register r;
r.status = 0;
r.flags.ready = 1;
```

### **Problem 3:** Nested union in structure

```cpp
struct Employee {
    char name[50];
    int id;
    union {
        float salary;
        float hourlyRate;
    };
};
```

---

## **10. Key Differences Between Structure & Union**

| Feature           | Structure                      | Union                             |
| ----------------- | ------------------------------ | --------------------------------- |
| Memory Allocation | Each member has its own memory | All members share the same memory |
| Size              | Sum of all members             | Size of largest member            |
| Usage             | Store all members at once      | Store one member at a time        |
| Access            | All members accessible         | Only one member valid at a time   |

---

## ✅ **Summary**

* **Union:** Multiple data types share memory; only **one member active** at a time.
* **Use Case:** Memory optimization, hardware mapping, variant types.
* **Nested & Anonymous unions:** Provide **flexibility** in structures.
* **Size:** Determined by **largest member**.
* **Caution:** Changing one member **overwrites** others.
