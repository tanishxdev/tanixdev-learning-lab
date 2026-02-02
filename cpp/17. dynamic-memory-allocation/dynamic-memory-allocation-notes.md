## Memory Layout of a C++ Program

### Overview
- **Definition**: The organization of a C++ program’s memory during execution, divided into distinct regions for efficient management.
- **Purpose**: Understanding memory layout helps optimize memory usage and avoid issues like leaks or stack overflows.
![Memory layout](https://media.geeksforgeeks.org/wp-content/uploads/20250122155858092295/Memory-Layout-of-C-Program.webp)

### Memory Regions
1. **Text Segment (Code Segment)**:
   - Stores compiled machine code (functions and methods).
   - Read-only for safety.
   - Size depends on code complexity.
   - **Example**: Function definitions reside here.
2. **Data Segment**:
   - Stores global and static variables.
   - Divided into:
     - **Initialized Data Segment**:
       - Holds global/static variables with explicit initial values.
       - **Example**:
         ```cpp
         int a = 50; // Global, initialized
         static int b = 100; // Static, initialized
         ```
     - **Uninitialized Data Segment (BSS)**:
       - Holds global/static variables without explicit initialization, set to zero at runtime.
       - **Example**:
         ```cpp
         int c; // Global, uninitialized
         static int d; // Static, uninitialized
         ```
3. **Heap Segment**:
   - Used for dynamic memory allocation at runtime (via `new`, `delete`, `malloc`, `free`).
   - Managed manually by the programmer.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     int main() {
         int* arr = new int[10]; // Allocated on heap
         delete[] arr; // Deallocated
         return 0;
     }
     ```
4. **Stack Segment**:
   - Stores local variables, function parameters, and return addresses.
   - Each function call creates a stack frame, pushed onto the stack and popped upon return.
   - Grows downward (toward lower memory addresses).
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     void foo() {
         int local = 42; // Stored on stack
         cout << local << endl; // Output: 42
     }

     int main() {
         foo();
         return 0;
     }
     ```

### Practical Example
- **Code**:
  ```cpp
  #include <iostream>
  using namespace std;

  int g = 77; // Initialized data segment

  void show() {
      int local = 5; // Stack
      cout << "Local address: " << &local << endl;
  }

  int main() {
      int* heapVar = new int; // Heap
      cout << "Function address: " << (void*)&show << endl; // Text segment
      cout << "Global address: " << &g << endl; // Initialized data segment
      cout << "Heap address: " << heapVar << endl; // Heap
      show();
      delete heapVar;
      return 0;
  }
  ```
- **Output** (example addresses):
  ```
  Function address: 0x400c00
  Global address: 0x6012c0
  Heap address: 0x94d4c20
  Local address: 0x7fff9e84be8c
  ```

---

## new and delete Operators in C++ for Dynamic Memory

### Overview
- **Definition**: C++ provides `new` and `delete` operators for dynamic memory allocation and deallocation on the heap, offering flexibility when memory size is unknown at compile time.
- **Purpose**: Enables variable-sized arrays and dynamic data structures (e.g., linked lists, trees).

### new Operator
- **Function**: Allocates memory from the heap’s free store and initializes it based on the data type.
- **Syntax**:
  - Single variable: `new data_type;`
  - Array: `new data_type[size];`
- **Behavior**:
  - Returns a pointer to the allocated memory.
  - Throws `std::bad_alloc` if memory allocation fails (unless `nothrow` is used, returning `nullptr`).
- **Example (Single Variable)**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int* nptr = new int(6); // Allocate and initialize
      cout << *nptr << endl; // Output: 6
      cout << nptr; // Output: e.g., 0xb52dc20
      delete nptr;
      return 0;
  }
  ```
- **Example (Array)**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int* nptr = new int[5]{1, 2, 3, 4, 5}; // Allocate and initialize array
      for (int i = 0; i < 5; i++) {
          cout << nptr[i] << " "; // Output: 1 2 3 4 5
      }
      delete[] nptr;
      return 0;
  }
  ```
- **Handling Allocation Failure**:
  ```cpp
  int* p = new (nothrow) int;
  if (!p) {
      cout << "Memory allocation failed\n";
  }
  ```

### delete Operator
- **Function**: Deallocates memory previously allocated with `new`.
- **Syntax**:
  - Single variable: `delete ptr;`
  - Array: `delete[] ptr;`
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int* ptr = new int(10); // Allocate single integer
      cout << "Value of *p: " << *ptr << endl; // Output: 10
      delete ptr; // Deallocate

      ptr = new int[3]; // Allocate array
      ptr[0] = 33; ptr[1] = 22; ptr[2] = 11;
      cout << "Array: ";
      for (int i = 0; i < 3; i++) {
          cout << ptr[i] << " "; // Output: 33 22 11
      }
      delete[] ptr; // Deallocate array
      return 0;
  }
  ```

### Placement new
- **Definition**: Constructs an object in a pre-allocated memory block without allocating new memory.
- **Use Case**: Separates allocation and construction for precise control.
- **Note**: Not covered in detail in provided content but mentioned as a variant.

### Errors in Dynamic Memory
1. **Memory Leaks**:
   - Allocated memory not released, remaining allocated until program ends.
   - **Solution**: Use `delete`/`delete[]` or smart pointers (`std::unique_ptr`, `std::shared_ptr`).
2. **Dangling Pointers**:
   - Accessing memory after deallocation, causing undefined behavior.
   - **Solution**: Set pointers to `nullptr` after deletion.
3. **Double Deletion**:
   - Deleting the same memory twice, leading to crashes or corruption.
   - **Solution**: Set pointers to `nullptr` after deletion.
4. **Mixing new/delete with malloc()/free()**:
   - Incompatible allocation/deallocation methods.
   - **Solution**: Use `new` with `delete` and `malloc()` with `free()`.

---

## Memory Leaks in C++

### Overview
- **Definition**: Occurs when dynamically allocated memory is not released after use, consuming system memory and potentially causing slowdowns or crashes.
- **Context**: Applies to heap memory (allocated with `new`/`new[]` in C++, `malloc`/`calloc` in C).

### Example
- **Code**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int* ptr = new int; // Allocate memory
      *ptr = 20;
      cout << *ptr << endl; // Output: 20
      // Memory not deleted, causing a leak
      return 0;
  }
  ```

### Common Causes
- Failing to call `delete`/`delete[]` after `new`/`new[]`.
- Overwriting a pointer before deallocating its memory.
- Pointer going out of scope without deallocation.
- Cumulative effect in long-running programs.

### Avoiding Memory Leaks
- **Manual Deallocation**: Always use `delete`/`delete[]` after `new`/`new[]`.
- **Prevent Overwriting**: Deallocate memory before reassigning pointers.
- **Smart Pointers**: Use `std::unique_ptr` or `std::shared_ptr` for automatic memory management.
  - **Example**:
    ```cpp
    #include <iostream>
    #include <memory>
    using namespace std;

    int main() {
        unique_ptr<int> ptr = make_unique<int>(20);
        cout << *ptr << endl; // Output: 20
        // Automatically deallocated when ptr goes out of scope
        return 0;
    }
    ```
- **Tools**: Use Valgrind or similar tools to detect leaks during testing.

---

## Integration with Provided C++ Concepts

### Connection to Arrays
- **Memory Layout**:
  - Arrays are stored in contiguous memory, typically in the stack (local arrays) or heap (dynamic arrays via `new`).
  - **Example**: `int arr[5]` (stack); `int* arr = new int[5]` (heap).
- **new/delete**:
  - Dynamic arrays use `new[]` and `delete[]`.
  - **Example**: `int* arr = new int[5]; delete[] arr;`
- **Memory Leaks**:
  - Failing to `delete[]` dynamic arrays causes leaks.
  - **Solution**: Use `std::vector` for dynamic arrays with automatic memory management.

### Connection to Multidimensional Arrays
- **Memory Layout**:
  - Multidimensional arrays (e.g., `int arr[2][3]`) are stored contiguously in the stack or heap, with row-major order.
  - Dynamic multidimensional arrays use nested `new` (e.g., `int** arr = new int*[rows];` for 2D).
- **new/delete**:
  - Allocate 2D arrays with nested `new` and deallocate with nested `delete[]`.
  - **Example**:
    ```cpp
    int** arr = new int*[2];
    for (int i = 0; i < 2; i++) arr[i] = new int[3];
    for (int i = 0; i < 2; i++) delete[] arr[i];
    delete[] arr;
    ```
- **Memory Leaks**:
  - Forgetting to deallocate nested arrays causes leaks.
  - **Solution**: Use `std::vector<std::vector<int>>` for safer management.

### Connection to References
- **Memory Layout**:
  - References alias variables in any memory segment (stack, data, heap).
  - **Example**: `int& ref = *new int(10);` (heap variable with reference).
- **new/delete**:
  - References can alias dynamically allocated memory, but `delete` must use the pointer.
  - **Example**:
    ```cpp
    int* ptr = new int(10);
    int& ref = *ptr;
    delete ptr; // Deallocate via pointer, not reference
    ```
- **Memory Leaks**:
  - References to heap memory don’t prevent leaks if the pointer is lost.
  - **Solution**: Track pointers separately or use smart pointers.

### Connection to Value Types
- **Memory Layout**:
  - **Lvalues**: Variables in stack (local), data segment (global/static), or heap (dynamic).
  - **Rvalues/Prvalues**: Temporary values, often on stack or registers, not directly in heap.
  - **Xvalues**: Used in move semantics for heap-allocated objects (e.g., `std::move`).
  - **Glvalues**: Encompass lvalues and xvalues, applicable to any memory segment.
- **new/delete**:
  - `new` creates lvalues (pointers to heap memory); dereferenced values are lvalues.
  - **Example**: `int* p = new int(5);` (`p` is lvalue, `*p` is lvalue).
- **Memory Leaks**:
  - Forgetting to `delete` lvalues on the heap causes leaks.
  - Move semantics (`xvalues`) can transfer ownership to avoid copying heap data.

---

### Summary
- **Memory Layout**:
  - **Text Segment**: Stores read-only machine code.
  - **Data Segment**: Holds initialized (global/static with values) and uninitialized (BSS, zeroed) variables.
  - **Heap**: Manages dynamic memory allocation.
  - **Stack**: Stores local variables, parameters, and return addresses, using stack frames.
- **new and delete Operators**:
  - `new`: Allocates and initializes heap memory, returning a pointer.
  - `delete`: Deallocates single variables; `delete[]` for arrays.
  - Handles allocation failures with `std::bad_alloc` or `nothrow` (`nullptr`).
  - Placement `new` constructs objects in pre-allocated memory.
- **Memory Leaks**:
  - Occur when heap memory is not deallocated.
  - Caused by forgetting `delete`, overwriting pointers, or scope loss.
  - Avoided with manual deallocation, smart pointers, or tools like Valgrind.
- **Best Practices**:
  - Always pair `new` with `delete` and `new[]` with `delete[]`.
  - Set pointers to `nullptr` after deletion to avoid dangling pointers.
  - Use smart pointers (`std::unique_ptr`, `std::shared_ptr`) for automatic memory management.
  - Avoid mixing `new`/`delete` with `malloc`/`free`.
  - Test with tools to detect leaks early.
