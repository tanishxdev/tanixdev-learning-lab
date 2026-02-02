## C++ Data Types, Variables, Constants, and Type Inference

### Data Types in C++

#### Overview
- **Definition**: Data types specify the type of data a variable can store, determining the memory allocated and operations allowed.
- **Purpose**: The C++ compiler uses data types to allocate appropriate memory and ensure type safety.
- **Classification**: C++ data types are categorized into:
  - **Primitive Data Types**: Basic types like `char`, `int`, `bool`, `float`, `double`, and `void`.
  - **Derived/Composite Types**: Arrays, pointers, structures, etc.
  - **User-Defined Types**: Classes, structs, enums, etc.

#### Primitive Data Types

* **Definition**: Basic building blocks (int, float, char, bool, etc.).

* **Storage**:
  * Usually stored in the stack (fast, fixed-size).
  * Their memory size is fixed (int = 4 bytes, char = 1 byte, etc.).
* Access: Directly hold the value (e.g., int x = 5; → stack stores 5 directly).
* Lifecycle: Automatically destroyed when the variable goes out of scope.
* Efficiency: Very fast (close to machine-level).

Example:

```cpp
int x = 10;   // Stored in stack directly
```

1. **Character (`char`)**:
   - Stores a single character (e.g., `'A'`) using 1 byte.
   - Supports up to 256 characters based on ASCII codes.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         char c = 'A';
         cout << c; // Output: A
         return 0;
     }
     ```
2. **Integer (`int`)**:
   - Stores whole numbers (no decimal points) using 4 bytes (on 64-bit systems).
   - Range: -2,147,483,648 to 2,147,483,647.
   - Supports binary, octal, decimal, and hexadecimal bases.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int x = 25;
         cout << x << endl; // Output: 25
         x = 0x15; // Hexadecimal
         cout << x; // Output: 21
         return 0;
     }
     ```
3. **Boolean (`bool`)**:
   - Stores logical values: `true` (1) or `false` (0) using 1 byte.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         bool isTrue = true;
         cout << isTrue; // Output: 1
         return 0;
     }
     ```
4. **Floating Point (`float`)**:
   - Stores numbers with decimal points using 4 bytes.
   - Range: 1.2e-38 to 3.4e+38.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         float f = 36.5;
         cout << f; // Output: 36.5
         return 0;
     }
     ```
5. **Double (`double`)**:
   - Stores high-precision decimal numbers using 8 bytes.
   - Range: 1.7e-308 to 1.7e+308.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         double pi = 3.1415926535;
         cout << pi; // Output: 3.14159
         return 0;
     }
     ```
6. **Void (`void`)**:
   - Represents the absence of a value; used in functions or pointers.
   - Cannot be used to create variables.
   - Example: Used in function declarations like `void functionName();`.

🔹 Non-Primitive Data Types

* **Definition**: Derived/user-defined types (arrays, strings, structs, classes, pointers, vectors, etc.).

* Storage:
  * May live in stack (reference/pointer part) and heap (actual data part).
  * For example:

    * string s = "hello"; → pointer/reference on stack, characters "hello" on heap.
    * struct or class objects → stack if created normally, heap if created with new.
  * Access: Usually stored as a reference (address) in stack pointing to actual data in heap.
  * Lifecycle: Must be managed (especially when using new/delete).
  * Efficiency: Slightly slower because of indirection (stack → heap lookup).

Example:

```cpp
string s = "hello";  // Reference in stack, actual string chars in heap
int* p = new int(5); // Pointer in stack, integer in heap
````
⚡ Key Difference 
* Primitive → Value stored directly in stack (fast, fixed).
* Non-Primitive → Reference in stack + data in heap (dynamic, flexible).

#### Type Safety
- **Strong Typing**: C++ requires variables to be declared with a specific data type, which cannot change during execution.
- **Error Handling**: Assigning incompatible types (e.g., `float` to `bool`) may cause data corruption, runtime errors, or undefined behavior.
  - **Example**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        bool a = 10.248f;
        cout << a; // Output: 1 (truncates float to bool)
        return 0;
    }
    ```

#### Data Type Conversion
- **Definition**: Converting one data type to another compatible type without losing meaning.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int n = 3;
      char c = 'C';
      cout << (int)c << endl; // Output: 67 (ASCII value of 'C')
      int sum = n + c; // Implicit conversion of char to int
      cout << sum; // Output: 70 (3 + 67)
      return 0;
  }
  ```

#### Size of Data Types
- **Variability**: Sizes depend on system architecture (e.g., 32-bit vs. 64-bit) and compiler.
- **Checking Size**: Use the `sizeof` operator to determine the memory size of a data type.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      cout << "Size of int: " << sizeof(int) << " bytes" << endl; // Output: 4 bytes
      cout << "Size of char: " << sizeof(char) << " byte" << endl; // Output: 1 byte
      cout << "Size of float: " << sizeof(float) << " bytes" << endl; // Output: 4 bytes
      cout << "Size of double: " << sizeof(double) << " bytes"; // Output: 8 bytes
      return 0;
  }
  ```

#### Data Type Modifiers
- **Purpose**: Modify the size or range of primitive data types using keywords: `short`, `long`, `signed`, `unsigned`.
- **Examples**:
  - `int var1; // 4 bytes`
  - `long int var2; // 8 bytes`
  - Other modifiers: `long double`, `long long int`, `unsigned int`.

---

### Variables in C++

#### Overview
- **Definition**: A variable is a named memory location that stores data, which can be accessed or modified during program execution.
- **Purpose**: Serves as the basic unit of storage in a program.

#### Creating Variables
- **Syntax**:
  ```cpp
  type name;
  // or
  type name1, name2, name3;
  ```
- **Example**:
  ```cpp
  int num; // Declares an integer variable
  ```

#### Initializing Variables
- **Definition**: Assigning an initial value to a variable.
- **Methods**:
  - Separate declaration and initialization:
    ```cpp
    int num;
    num = 3;
    ```
  - Combined declaration and initialization:
    ```cpp
    int num = 3;
    ```
- **Note**: Uninitialized variables contain garbage values; initialization ensures meaningful data.

#### Accessing and Updating Variables
- **Accessing**: Use the variable name to retrieve its value.
- **Updating**: Use the assignment operator (`=`) to change the value.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int num = 3;
      cout << num << endl; // Output: 3
      num = 7; // Update value
      cout << num; // Output: 7
      return 0;
  }
  ```

#### Using Variables
- **Purpose**: Variables allow operations using stored values instead of literals.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int num1 = 10, num2 = 20;
      cout << num1 + num2; // Output: 30
      return 0;
  }
  ```

#### Variable Naming Rules
- **Rules**:
  - Can contain letters (A-Z, a-z), digits (0-9), and underscores (`_`).
  - Must start with a letter or underscore.
  - Case-sensitive (e.g., `Num` and `num` are different).
  - No whitespace or special characters (e.g., `#`, `$`, `%`).
  - Cannot use C++ keywords (e.g., `float`, `double`, `class`).
- **Example**:
  ```cpp
  int myVar; // Valid
  int 2var; // Invalid (starts with digit)
  int my_var; // Valid
  int float; // Invalid (keyword)
  ```

#### Constant Variables
- **Definition**: Variables whose values cannot be changed after initialization, declared using the `const` keyword.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      const int num = 10;
      cout << num; // Output: 10
      // num = 20; // Error: cannot modify const variable
      return 0;
  }
  ```

#### Scope of Variables
- **Definition**: The region in a program where a variable can be accessed using its name.
- **Note**: Understanding scope requires knowledge of functions and blocks (covered in advanced topics).

#### Memory Management
- **Allocation**: Declaring a variable reserves a fixed-size memory block based on its data type.
- **Initialization**: Assigns a meaningful value, replacing the default garbage value.
- **Storage**: Variables may reside in different memory segments (e.g., stack, heap) based on their storage class.

---

### Constants in C++

#### Overview
- **Definition**: Constants are variables or values whose values cannot be modified after initialization, ensuring data integrity.
- **Purpose**: Protects critical values from accidental changes, improving program reliability.

#### Types of Constants
1. **Using `const` Keyword**:
   - **Syntax**: `const DATATYPE variable_name = value;`
   - **Characteristics**: Must be initialized at declaration; stored in read-only memory.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         const int c = 24;
         cout << c; // Output: 24
         // c = 0; // Error: cannot modify const variable
         return 0;
     }
     ```
2. **Using `constexpr` Keyword**:
   - **Syntax**: `constexpr DATATYPE variable_name = value;`
   - **Characteristics**: Evaluated at compile time; requires a constant expression for initialization.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         constexpr int hoursInDay = 24;
         cout << hoursInDay; // Output: 24
         return 0;
     }
     ```
3. **Using `#define` Preprocessor**:
   - **Syntax**: `#define MACRO_NAME replacement_value`
   - **Characteristics**: Creates macro constants; lacks type safety; value substituted during preprocessing.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     #define Side 5
     int main() {
         double area = Side * Side;
         cout << area; // Output: 25
         return 0;
     }
     ```

#### Real-World Examples
- **ATM Daily Withdrawal Limit**: `const int dailyLimit = 20000;`
- **Mobile App Max Login Attempts**: `const int maxLoginAttempts = 3;`
- **Mathematical Constant (Pi)**: `const float pi = 3.14159;`
- **HR System Leave Days**: `const int maxLeaveDays = 15;`

#### Constants vs. Literals
- **Constants**:
  - Variables with fixed values, declared using `const` or `constexpr`.
  - Have a memory address (lvalues).
  - Example: `const int c = 20;`
- **Literals**:
  - Fixed values (e.g., `24`, `15.5`, `'a'`, `"Geeks"`).
  - No memory address (rvalues, except string literals).
  - Example: `24`, `'a'`.

#### Important Points
- Constants must be initialized at declaration.
- `const` and `constexpr` provide type safety; `#define` does not.
- Constants enhance code reliability by preventing unintended modifications.

---

### Type Inference in C++ (`auto` and `decltype`)

#### Overview
- **Definition**: Type inference allows the compiler to automatically deduce the data type of a variable, function, or expression, introduced in C++11.
- **Purpose**: Simplifies code, improves readability, and reduces explicit type declarations.
- **Tools**: Uses `auto` for variable/function type deduction and `decltype` for type extraction.

#### `auto` Keyword
- **Purpose**: Deduce the type of a variable or function return type from its initializer at compile time.
- **Usage**:
  - Simplifies declarations for complex types (e.g., iterators, pointers).
  - Requires initialization at declaration to avoid compile-time errors.
- **Example**:
  ```cpp
  #include <iostream>
  #include <typeinfo>
  using namespace std;
  int main() {
      auto x = 4; // int
      auto y = 3.37; // double
      auto z = 3.37f; // float
      auto c = 'a'; // char
      auto ptr = &x; // int*
      auto pptr = &ptr; // int**
      cout << typeid(x).name() << endl // i
           << typeid(y).name() << endl // d
           << typeid(z).name() << endl // f
           << typeid(c).name() << endl // c
           << typeid(ptr).name() << endl // Pi
           << typeid(pptr).name(); // PPi
      return 0;
  }
  ```
- **Note**: `typeid(x).name()` returns compiler-dependent type names (e.g., `i` for `int`, `Pi` for `int*`).
- **Iterator Example**:
  ```cpp
  #include <iostream>
  #include <set>
  #include <string>
  using namespace std;
  int main() {
      set<string> st;
      st.insert({"geeks", "for", "geeks", "org"});
      for (auto it = st.begin(); it != st.end(); it++)
          cout << *it << " "; // Output: for geeks org
      return 0;
  }
  ```
- **Reference Note**: Use `auto&` for reference types; `auto` alone deduces non-reference types.
  - Example: `auto m = fun(); // int`, `auto& n = fun(); // int&`.

#### `decltype` Keyword
- **Purpose**: Extracts the type of an expression or variable, useful for defining new variables or function return types.
- **Example**:
  ```cpp
  #include <iostream>
  #include <typeinfo>
  using namespace std;
  int fun1() { return 10; }
  char fun2() { return 'g'; }
  int main() {
      decltype(fun1()) x; // int
      decltype(fun2()) y; // char
      cout << typeid(x).name() << endl // i
           << typeid(y).name(); // c
      return 0;
  }
  ```
- **Variable Example**:
  ```cpp
  #include <iostream>
  #include <typeinfo>
  using namespace std;
  int main() {
      int x = 5;
      decltype(x) j = x + 5; // int
      cout << typeid(j).name(); // i
      return 0;
  }
  ```

#### Combined `auto` and `decltype` Example
- **Generic Function**:
  ```cpp
  #include <iostream>
  using namespace std;
  template <class A, class B>
  auto findMin(A a, B b) -> decltype(a < b ? a : b) {
      return (a < b) ? a : b;
  }
  int main() {
      cout << findMin(4, 3.44) << endl; // Output: 3.44 (double)
      cout << findMin(5.4, 3) << endl; // Output: 3 (double)
      return 0;
  }
  ```

#### `decltype` vs. `typeid`
- **decltype**:
  - Provides type information at compile time.
  - Example: Deduce type of an expression for variable declaration.
- **typeid**:
  - Provides type information at runtime.
  - Useful for dynamic type checking (e.g., base vs. derived class).
- **Key Difference**: `decltype` deduces base class type for references/pointers to derived objects; `typeid` identifies the actual derived type.

---

### Summary
- **Data Types**: Define the type and size of data a variable can store (e.g., `char`, `int`, `float`, `double`, `bool`, `void`).
- **Variables**: Named memory locations for storing and manipulating data, with strict naming rules and type safety.
- **Constants**: Immutable values defined using `const`, `constexpr`, or `#define`, ensuring data integrity.
- **Type Inference**: `auto` deduces variable/function types; `decltype` extracts types from expressions, simplifying code since C++11.
- **Best Practices**: Initialize variables, use constants for fixed values, and leverage type inference for complex types to enhance readability and maintainability.
