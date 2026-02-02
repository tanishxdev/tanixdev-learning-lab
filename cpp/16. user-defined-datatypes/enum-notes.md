# **Enumeration in C++**

## **1. What is an Enum?**

* An **enum (enumeration)** is a **user-defined data type** that consists of a set of **named integer constants**.
* **Purpose:** To assign meaningful names to integer values for **better readability and maintainability**.

**Example:**

```cpp
enum Direction {
    EAST,   // 0
    NORTH,  // 1
    WEST,   // 2
    SOUTH   // 3
};
```

* Default behavior: **first constant = 0**, others increment by 1.
* Enum variable can only store one of its defined constants:

```cpp
Direction dir = NORTH;
cout << dir; // Output: 1
```

---

## **2. Why Use Enum?**

### **Advantages:**

1. **Readability:** Instead of using numbers, you can use meaningful names.
2. **Maintainability:** Easy to modify or add new constants.
3. **Type Safety:** Avoid invalid values (especially with `enum class` in C++11).
4. **Error Prevention:** Helps prevent using arbitrary numbers in code.

**Use Cases:**

* Days of the week
* Direction constants
* Status codes
* Modes of operation

---

## **3. How Enum Works**

### **Default Values**

* By default, the first constant is 0, and subsequent constants increment by 1.

```cpp
enum Fruit { APPLE, BANANA, ORANGE };
cout << APPLE << " " << BANANA << " " << ORANGE;
// Output: 0 1 2
```

### **Custom Values**

* You can manually assign values to constants:

```cpp
enum Fruit { APPLE = 1, BANANA = 5, ORANGE }; 
cout << APPLE << " " << BANANA << " " << ORANGE;
// Output: 1 5 6
```

* **Unassigned constants increment from previous value.**

---

## **4. Enum Class (Scoped Enum) [C++11]**

C++11 introduced **`enum class`**, providing **better type safety** and **avoiding name conflicts**.

### **Syntax:**

```cpp
enum class Day {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
};
```

### **Access Enum Class Members**

```cpp
Day today = Day::Thursday;
cout << static_cast<int>(today); // Output: 5
```

**Important Points:**

1. Cannot directly assign without the scope (`Day::`).
2. Cannot implicitly convert enum class to `int` (requires `static_cast`).

### **Wrong Way Example**

```cpp
Day today = Thursday; // ❌ Error
```

* Compiler Error: `'Thursday' was not declared in this scope; did you mean 'Day::Thursday'?`

---

## **5. How to Use Enum in Code**

### **Switch Case Example**

```cpp
enum Color { RED, GREEN, BLUE };

Color c = GREEN;

switch(c) {
    case RED: cout << "Red"; break;
    case GREEN: cout << "Green"; break;
    case BLUE: cout << "Blue"; break;
}
```

### **Enum with Functions**

* Pass enums as **function arguments** or **return type**.

```cpp
enum Status { SUCCESS, FAILURE };

Status checkStatus() {
    return SUCCESS;
}

int main() {
    Status s = checkStatus();
    if(s == SUCCESS) cout << "Operation successful";
}
```

---

## **6. Memory Considerations**

* Enums are typically stored as **`int`** by default.
* In C++11, you can specify **underlying type** to save memory:

```cpp
enum class SmallEnum : unsigned char { A, B, C };
```

---

## **7. Enum vs Enum Class**

| Feature             | Enum         | Enum Class (C++11)   |
| ------------------- | ------------ | -------------------- |
| Scope               | Global       | Scoped to enum class |
| Type Safety         | No           | Yes                  |
| Implicit Conversion | Yes (to int) | No                   |
| Name Conflicts      | Possible     | Avoided              |
| Best for Modern C++ | ❌            | ✅                    |

---

## **8. Problems & Best Practices**

### **Problem 1:** Avoid Magic Numbers

```cpp
int status = 2; // ❌ unclear
```

Better with enum:

```cpp
enum Status { SUCCESS, FAILURE, PENDING };
Status status = FAILURE; // ✅ readable
```

### **Problem 2:** Use Enum Class for Type Safety

```cpp
enum class Day { Mon, Tue };
Day d = Mon; // ❌ ❌
Day d = Day::Mon; // ✅
```

### **Problem 3:** Avoid Implicit Conversions

* Always use `static_cast<int>` to convert enum class to integer if needed.

---

## ✅ **Summary**

1. **Enum** is a **user-defined type of named integer constants**.
2. Provides **readable code** instead of magic numbers.
3. Default starts at 0, can manually assign values.
4. **Enum class** provides **scoped, type-safe** constants (C++11).
5. Enums are often used in **switch statements**, **flags**, and **state machines**.
6. Enum memory is **same as underlying type**, can be customized in C++11.

---
