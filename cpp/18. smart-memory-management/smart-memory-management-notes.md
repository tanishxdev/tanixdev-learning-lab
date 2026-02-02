# Smart Memory Management

## Risks of Using Raw Pointers in C++

### Overview
- **Definition**: Raw pointers are basic variables that store memory addresses, providing direct control over memory.
- **Purpose**: Used to access and manipulate memory locations, but prone to errors if mismanaged.
- **Syntax**:
  ```cpp
  data_type* pointer_name = &variable;
  ```
  - **Example**:
    ```cpp
    int x = 10;
    int* ptr = &x; // ptr holds address of x
    ```

### Common Risks
1. **Memory Leaks**:
   - **Issue**: Forgetting to deallocate memory allocated with `new` or `new[]` using `delete` or `delete[]`.
   - **Impact**: Consumes system resources, potentially causing slowdowns or crashes in long-running programs.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     int main() {
         int* p = new int(42);
         cout << "Value: " << *p; // Output: 42
         // Forgot delete p; — memory leak
         return 0;
     }
     ```
2. **Dangling Pointers**:
   - **Issue**: Pointers referencing deallocated or out-of-scope memory.
   - **Impact**: Causes undefined behavior (crashes, data corruption).
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     int main() {
         int* p = new int(99);
         delete p;
         cout << "Dangling value (undefined): " << *p; // Undefined behavior
         return 0;
     }
     ```
3. **Double Deletion**:
   - **Issue**: Deleting the same memory twice.
   - **Impact**: Undefined behavior, often crashes or memory corruption.
   - **Example**:
     ```cpp
     #include <iostream>
     int main() {
         int* p = new int(7);
         delete p; // OK
         delete p; // Undefined behavior (double deletion)
         return 0;
     }
     ```
     - **Output**: May result in crash (e.g., `double free or corruption`).
4. **Wild Pointers**:
   - **Issue**: Uninitialized pointers used without valid addresses.
   - **Impact**: Writing to unknown memory causes undefined behavior.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     int main() {
         int* p; // Uninitialized (wild)
         *p = 10; // Dangerous: undefined behavior
         cout << "Written to wild pointer";
         return 0;
     }
     ```
5. **Ownership Confusion / Aliasing**:
   - **Issue**: Multiple pointers pointing to the same memory without clear ownership, leading to double deletion or dangling pointers.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     int main() {
         int* p1 = new int(100);
         int* p2 = p1; // Both point to same memory
         delete p1; // Memory freed
         cout << "p2 value (undefined): " << *p2; // Dangling pointer
         delete p2; // Double deletion, undefined behavior
         return 0;
     }
     ```
     - **Output**: May crash (e.g., `double free or corruption`).
6. **No Bounds Checking**:
   - **Issue**: Accessing arrays beyond their bounds using pointers.
   - **Impact**: Corrupts adjacent memory or crashes.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;

     int main() {
         int* arr = new int[3]{1, 2, 3};
         cout << "arr[0]: " << arr[0] << endl; // 1
         arr[5] = 42; // Out-of-bounds, undefined behavior
         cout << "Out-of-bounds write done";
         delete[] arr;
         return 0;
     }
     ```

### Mitigation
- Use smart pointers (`std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`) for automatic memory management.
- Initialize pointers to `nullptr`.
- Set pointers to `nullptr` after deletion.
- Use containers like `std::vector` or `std::string` for safer array/string management.

---

## Smart Pointers in C++

### Overview
- **Definition**: Smart pointers are classes in the `<memory>` header that wrap raw pointers, automatically managing memory to prevent leaks and other issues.
- **Purpose**: Enhance safety and efficiency in dynamic memory management.
- **Types**:
  - `auto_ptr` (deprecated post-C++11, removed in C++17).
  - `unique_ptr` (exclusive ownership).
  - `shared_ptr` (shared ownership with reference counting).
  - `weak_ptr` (non-owning reference to `shared_ptr`).

### Types of Smart Pointers
1. **auto_ptr** (Deprecated):
   - Manages a single object, deletes it when out of scope.
   - Transfers ownership on copy, making original pointer invalid.
   - **Syntax**:
     ```cpp
     auto_ptr<type> name(new type);
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     #include <memory>
     using namespace std;

     int main() {
         auto_ptr<int> ptr1(new int(10));
         cout << *ptr1 << endl; // 10
         auto_ptr<int> ptr2 = ptr1; // Ownership transferred
         cout << *ptr2 << endl; // 10
         // ptr1 is now invalid
         return 0;
     }
     ```
   - **Note**: Avoid due to deprecation; use `unique_ptr` instead.
2. **unique_ptr**:
   - Exclusive ownership; cannot be copied, only moved using `std::move`.
   - Deletes object when out of scope.
   - **Syntax**:
     ```cpp
     unique_ptr<type> name(new type);
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     #include <memory>
     using namespace std;

     class Rectangle {
         int length, breadth;
     public:
         Rectangle(int l, int b) : length(l), breadth(b) {}
         int area() { return length * breadth; }
     };

     int main() {
         unique_ptr<Rectangle> P1(new Rectangle(10, 5));
         cout << P1->area() << endl; // 50
         unique_ptr<Rectangle> P2 = move(P1); // Transfer ownership
         cout << P2->area() << endl; // 50
         // P1 is now null
         return 0;
     }
     ```
3. **shared_ptr**:
   - Multiple pointers share ownership; uses reference counting via `use_count()`.
   - Deletes object when last `shared_ptr` is destroyed.
   - **Syntax**:
     ```cpp
     shared_ptr<type> name(new type);
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     #include <memory>
     using namespace std;

     class Rectangle {
         int length, breadth;
     public:
         Rectangle(int l, int b) : length(l), breadth(b) {}
         int area() { return length * breadth; }
     };

     int main() {
         shared_ptr<Rectangle> P1(new Rectangle(10, 5));
         cout << P1->area() << endl; // 50
         shared_ptr<Rectangle> P2 = P1; // Shared ownership
         cout << P2->area() << endl; // 50
         cout << P1->area() << endl; // 50
         cout << P1.use_count(); // 2
         return 0;
     }
     ```
4. **weak_ptr**:
   - Non-owning reference to a `shared_ptr` object; does not increment reference count.
   - Prevents circular dependencies.
   - Access via `lock()` to get a `shared_ptr`.
   - **Syntax**:
     ```cpp
     weak_ptr<type> name(shared_ptr<type>);
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     #include <memory>
     using namespace std;

     class Rectangle {
         int length, breadth;
     public:
         Rectangle(int l, int b) : length(l), breadth(b) {}
         int area() { return length * breadth; }
     };

     int main() {
         shared_ptr<Rectangle> P1(new Rectangle(10, 5));
         weak_ptr<Rectangle> P2(P1);
         cout << P1->area() << endl; // 50
         cout << P2.use_count(); // 1
         return 0;
     }
     ```

### Pointers vs Smart Pointers
| Feature                | Pointer                     | Smart Pointer                     |
|------------------------|-----------------------------|-----------------------------------|
| **Definition**         | Variable storing address    | Class wrapping pointer            |
| **Memory Management**  | Manual (prone to leaks)     | Automatic (deletes when out of scope) |
| **Efficiency**         | Basic, no extra features    | Memory management features        |
| **Usage**              | Manual, error-prone         | Pre-programmed, safer             |

---

## Move Semantics in C++

### Overview
- **Definition**: A C++ feature (introduced in C++11) that transfers ownership of resources (e.g., memory, files) from one object to another, avoiding costly copies.
- **Benefits**:
  - Faster performance.
  - Reduced memory usage.
  - Efficient for large objects (e.g., `std::vector`, `std::string`).
- **Mechanism**: Uses rvalue references (`T&&`) to "move" resources, leaving the source in a valid but unspecified (moved-from) state.

### Copy vs Move
| Feature            | Copy                        | Move                              |
|--------------------|-----------------------------|-----------------------------------|
| **Action**         | Creates full duplicate      | Transfers ownership              |
| **Speed**          | Slower (copies data)        | Faster (moves pointers)          |
| **Old Object**     | Retains valid copy          | Becomes empty/moved-from         |
| **Use Case**       | Original needed             | Original temporary/disposable     |

- **Example**:
  ```cpp
  #include <iostream>
  #include <string>
  using namespace std;

  int main() {
      string original = "Hello, World!";
      string copy = original; // Copy
      string moved = move(original); // Move
      cout << "Original: '" << original << "'" << endl; // ''
      cout << "Copy:     '" << copy << "'" << endl; // Hello, World!
      cout << "Moved:    '" << moved << "'" << endl; // Hello, World!
      return 0;
  }
  ```

### Expression Types
1. **Lvalue Reference (`T&`)**:
   - Refers to named objects with stable memory locations.
   - **Example**:
     ```cpp
     int x = 10;
     int& ref = x; // Lvalue reference
     ref = 20; // Modifies x
     ```
2. **Rvalue Reference (`T&&`)**:
   - Binds to temporary objects (rvalues) about to be destroyed.
   - Enables move semantics.
   - **Example**:
     ```cpp
     int&& rref = 5; // Binds to temporary
     int x = 10;
     int&& rref2 = x + 2; // Binds to temporary result
     ```

### Why Move Semantics Apply to Rvalues
- **Rvalues**: Temporary, safe to move since they’re about to be destroyed.
- **Lvalues**: May still be needed, so copying is safer.
- **Differences**:
  | Feature            | Lvalue Reference (`T&`)   | Rvalue Reference (`T&&`)   |
  |--------------------|---------------------------|----------------------------|
  | **Binds To**       | Named objects (lvalues)   | Temporary objects (rvalues) |
  | **Syntax**         | Single `&`                | Double `&&`                |
  | **Usage**          | Reference existing vars   | Enable move semantics      |
  | **Modifies**       | Original object           | Steals resources           |

### Move Semantics in STL Containers
- **Use Cases**:
  1. **Reallocation**: Moves elements during container growth (e.g., `std::vector` resizing).
  2. **Insertion**: Uses `push_back(std::move(x))` or `emplace_back(args...)` to avoid copying.
- **Example**:
  ```cpp
  #include <iostream>
  #include <vector>
  #include <string>
  using namespace std;

  int main() {
      vector<string> names;
      string temp = "Alice";
      names.push_back(move(temp)); // Moves temp
      names.emplace_back("Bob"); // Constructs in-place
      cout << names[0] << endl; // Alice
      cout << names[1] << endl; // Bob
      cout << temp << endl; // Empty (moved-from)
      return 0;
  }
  ```

---

## Integration with Provided C++ Concepts

### Connection to Arrays
- **Raw Pointers**:
  - Arrays often use raw pointers (e.g., `int* arr = new int[5]`).
  - Risks: Memory leaks, dangling pointers, no bounds checking.
  - **Example**:
    ```cpp
    int* arr = new int[5];
    delete[] arr; // Must deallocate to avoid leak
    ```
- **Smart Pointers**:
  - `unique_ptr` for single arrays, `shared_ptr` for shared arrays.
  - **Example**:
    ```cpp
    unique_ptr<int[]> arr(new int[5]);
    // Automatically deallocated
    ```
- **Move Semantics**:
  - Arrays in containers (e.g., `std::vector`) use move semantics for efficient reallocation.
  - **Example**: `vector<int> v; v.push_back(move(x));`

### Connection to Multidimensional Arrays
- **Raw Pointers**:
  - Dynamic 2D arrays use pointers (e.g., `int** arr = new int*[rows]`).
  - Risks: Complex manual deallocation, potential leaks.
  - **Example**:
    ```cpp
    int** arr = new int*[2];
    for (int i = 0; i < 2; i++) arr[i] = new int[3];
    for (int i = 0; i < 2; i++) delete[] arr[i];
    delete[] arr;
    ```
- **Smart Pointers**:
  - Use `unique_ptr` or `vector<vector<int>>` for safer management.
  - **Example**:
    ```cpp
    unique_ptr<int*[]> arr(new int*[2]);
    for (int i = 0; i < 2; i++) arr[i] = new int[3];
    // Automatically deallocates
    ```
- **Move Semantics**:
  - `std::vector<std::vector<int>>` uses move semantics for efficient resizing.

### Connection to References
- **Raw Pointers**:
  - Pointers store addresses; references alias variables.
  - Risks apply to pointers, not references.
  - **Example**: `int& ref = *new int(10); delete &ref;` (invalid, needs pointer).
- **Smart Pointers**:
  - Can be used with references to manage dynamic memory.
  - **Example**:
    ```cpp
    unique_ptr<int> ptr(new int(10));
    int& ref = *ptr; // Reference to managed object
    ```
- **Move Semantics**:
  - Rvalue references (`T&&`) enable move semantics.
  - Lvalue references (`T&`) used for copying or modifying existing objects.

### Connection to Value Types
- **Raw Pointers**:
  - Pointers are lvalues; dereferenced values are lvalues.
  - Risks apply to dynamic memory (heap) lvalues.
  - **Example**: `int* p = new int(5);` (`p` and `*p` are lvalues).
- **Smart Pointers**:
  - Smart pointers are lvalues; managed objects are lvalues.
  - **Example**: `unique_ptr<int> p(new int(5));` (`p` is lvalue, `*p` is lvalue).
- **Move Semantics**:
  - Uses rvalue references (`T&&`) to transfer resources.
  - Moved-from objects are xvalues (valid but unspecified).

### Connection to Memory Layout
- **Raw Pointers**:
  - Point to memory in stack, heap, or data segment.
  - Risks: Leaks and dangling pointers in heap.
  - **Example**: `int* p = new int;` (heap), `int x; int* p = &x;` (stack).
- **Smart Pointers**:
  - Manage heap memory, stored in stack (smart pointer object) with heap data.
  - **Example**: `unique_ptr<int> p(new int);` (stack object, heap data).
- **Move Semantics**:
  - Transfers heap resources (e.g., `std::string` data) without copying.
  - **Example**: `string s = move(t);` (transfers heap data).

### Connection to Dynamic Memory
- **Raw Pointers**:
  - Use `new`/`delete` for heap allocation; prone to leaks and errors.
  - **Example**: `int* p = new int; delete p;`
- **Smart Pointers**:
  - Automate `new`/`delete`, preventing leaks.
  - **Example**: `unique_ptr<int> p(new int);` (auto-deallocated).
- **Move Semantics**:
  - Avoids copying heap data in dynamic allocations.
  - **Example**: `vector<string> v; v.push_back(move(s));`

### Connection to Strings
- **Raw Pointers**:
  - Used for C-style strings (`char*`) or dynamic `std::string` objects.
  - Risks: Leaks, dangling pointers with `new char[]`.
  - **Example**:
    ```cpp
    char* s = new char[10];
    strcpy(s, "Hello");
    delete[] s;
    ```
- **Smart Pointers**:
  - `unique_ptr<char[]>` or `std::string` for safer string management.
  - **Example**:
    ```cpp
    unique_ptr<char[]> s(new char[10]);
    strcpy(s.get(), "Hello");
    ```
- **Move Semantics**:
  - Efficient for `std::string` (moves heap data).
  - **Example**: `string s = move(t);` (transfers string data).

### Connection to getline
- **Raw Pointers**:
  - Risky with C-style strings due to buffer size issues.
  - **Example**: `char s[100]; cin.getline(s, 100);`
- **Smart Pointers**:
  - Use with `std::string` for safe, dynamic resizing.
  - **Example**:
    ```cpp
    unique_ptr<string> s(new string);
    getline(cin, *s);
    ```
- **Move Semantics**:
  - `getline` with `std::string` benefits from move semantics in containers.
  - **Example**: `vector<string> v; string s; getline(cin, s); v.push_back(move(s));`

---

### Summary
- **Risks of Raw Pointers**:
  - **Issues**: Memory leaks, dangling pointers, double deletion, wild pointers, ownership confusion, no bounds checking.
  - **Mitigation**: Use smart pointers, initialize to `nullptr`, set to `nullptr` after deletion, use containers.
- **Smart Pointers**:
  - **Types**: `auto_ptr` (deprecated), `unique_ptr` (exclusive), `shared_ptr` (shared), `weak_ptr` (non-owning).
  - Automatically manage memory, reducing risks.
  - **Example**: `unique_ptr<int> p(new int);` (auto-deallocated).
- **Move Semantics**:
  - Transfers resources using rvalue references (`T&&`), avoiding copies.
  - Used in STL containers (`std::vector`, `std::string`) for efficient reallocation and insertion.
  - **Example**: `string s = move(t);` (transfers heap data).
- **Best Practices**:
  - Prefer `unique_ptr` or `shared_ptr` over raw pointers.
  - Use `std::move` for temporary or disposable objects.
  - Use `weak_ptr` to avoid circular dependencies.
  - Leverage STL containers (`std::vector`, `std::string`) for safe management.
  - Ensure `cin.ignore()` with `getline` to avoid input issues.
