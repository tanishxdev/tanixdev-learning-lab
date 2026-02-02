# **Pointers**

## **1. Memory Addressing in Computers**

* **Memory (RAM):** Temporary storage for data and instructions while programs run.
* **Memory Address:** Each memory cell has a unique address, like a house number.
* **How CPU uses addresses:**

  * CPU reads/writes data using addresses.
  * Variables are stored at unique addresses.

**Example:**

```cpp
int a = 10;
int b = 20;

// Visualized memory
// Address   Value
// 0x1000    10   // a
// 0x1004    20   // b
```

* Integers typically take **4 bytes**, so addresses increment by 4.

---

## **2. Introduction to Pointers**

* **Pointer:** A variable that stores the **memory address** of another variable.
* **Dereference Operator (`*`):** Access the value at the address stored in a pointer.

```cpp
#include <iostream>
using namespace std;

int main() {
    int var = 10;
    int* ptr = &var; // ptr stores address of var

    cout << "Value of var: " << var << endl;       // 10
    cout << "Address of var: " << &var << endl;    // 0x7ff...
    cout << "Address stored in ptr: " << ptr << endl; 
    cout << "Value pointed by ptr: " << *ptr << endl; // 10

    return 0;
}
```

**Key Concepts:**

* `int* ptr;` → Pointer to integer.
* `ptr = &var;` → Store address of variable.
* `*ptr` → Dereference to get value at address.

---

## **3. Pointer Operations**

### **3.1 Pointer Arithmetic**

Pointers can be incremented, decremented, added/subtracted with constants. Operations respect the **size of the data type**.

* **Increment / Decrement**

```cpp
int n = 27;
int* ptr = &n;

cout << "Before Increment: " << ptr << endl;
ptr++;
cout << "After Increment: " << ptr << endl; // addr + sizeof(int)
ptr--;
cout << "After Decrement: " << ptr << endl; // addr - sizeof(int)
```

* **Add / Subtract Constant**

```cpp
int* ptr = &n;
ptr = ptr + 5; // new address = old + 5*sizeof(int)
ptr = ptr - 2; // new address = old - 2*sizeof(int)
```

* **Pointer Subtraction**

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* ptr1 = &arr[2];
int* ptr2 = &arr[4];

cout << "Difference: " << ptr2 - ptr1; // 2 elements between
```

* **Pointer Comparison:** Compare addresses using `==, !=, >, <`.

```cpp
if(ptr1 == ptr2) { ... }
```

* **Comparison to NULL**

```cpp
int* ptr = NULL;
if(ptr == NULL) { cout << "No value pointed"; }
```

---

### **3.2 Special Types of Pointers**

| Pointer Type         | Description                                                                | Example                               |
| -------------------- | -------------------------------------------------------------------------- | ------------------------------------- |
| **Wild Pointer**     | Uninitialized pointer holding random address.                              | `int *ptr;`                           |
| **NULL Pointer**     | Pointer pointing to nothing.                                               | `int *ptr = NULL;`                    |
| **Dangling Pointer** | Pointer pointing to memory already freed.                                  | `int* ptr = getPointer();`            |
| **Void Pointer**     | Pointer with no type, can point to any type. Must typecast to dereference. | `void* ptr = &x; cout << *(int*)ptr;` |

---

### **3.3 Pointer to Pointer (Double Pointer)**

```cpp
int var = 10;
int* ptr1 = &var;
int** ptr2 = &ptr1;

cout << *ptr1 << endl;  // 10
cout << **ptr2 << endl; // 10
```

---

### **3.4 Function Pointers**

* Pointers can store the address of a function.
* Useful for **callback functions** or **dynamic function invocation**.

---

### **3.5 Smart Pointers**

* Wrappers around pointers.
* Automatically manage memory, prevent leaks.
* Example: `std::unique_ptr`, `std::shared_ptr` in C++11.

---

### **3.6 Pointers vs References**

| Aspect         | Pointer                         | Reference                 |
| -------------- | ------------------------------- | ------------------------- |
| Initialization | Can be after declaration        | Must be at declaration    |
| Nullability    | Can be NULL                     | Cannot be NULL            |
| Reassignment   | Can point to another object     | Cannot be reassigned      |
| Use            | Dynamic memory, multiple levels | Alias for existing object |

---

## **4. Uses of Pointers**

1. **Dynamic Memory Allocation** → `new` and `delete`.
2. **Implement Data Structures** → Linked lists, trees, graphs.
3. **Function Arguments** → Pass by pointer to modify original variable.
4. **Pointer to Pointer** → Multilevel data structures, 2D arrays.
5. **Function Pointers** → Dynamic function calls.
6. **Smart Pointers** → Automatic memory management.

---

## **5. Dry Run Example of Pointer Arithmetic**

```cpp
int arr[3] = {10, 20, 30};
int* ptr = arr; // points to arr[0]

ptr++; // points to arr[1]
cout << *ptr << endl; // 20

ptr += 1; // points to arr[2]
cout << *ptr << endl; // 30

ptr--; // back to arr[1]
cout << *ptr << endl; // 20
```

**Explanation:** Pointer arithmetic moves by `sizeof(data type)` automatically.

---

## **6. Pointer Size**

* Independent of data type, depends on CPU architecture:

  * 64-bit system → 8 bytes
  * 32-bit system → 4 bytes

```cpp
int* p1;
char* p2;
cout << sizeof(p1) << " " << sizeof(p2); // 8 8 on 64-bit
```

---

## **7. Best Practices**

1. Always **initialize pointers** (NULL or valid address).
2. Avoid **wild and dangling pointers**.
3. Use **smart pointers** for dynamic memory when possible.
4. Validate **pointer before dereferencing**.
5. Be careful with **pointer arithmetic** to stay in valid memory range.
