## C++ Functions

### Overview
- **Definition**: A function is a reusable block of code designed to perform a specific task, enhancing modularity, readability, and maintainability.
- **Purpose**: Breaks down large programs into smaller, manageable parts.
- **Key Features**: Supports parameters, return values, default arguments, lambda expressions, and call stack management (advanced features like function overloading are covered in later sections).
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void hello() {
      cout << "GeeksforGeeks" << endl;
  }

  int square(int x) {
      return x * x;
  }

  int main() {
      hello(); // Output: GeeksforGeeks
      int result = square(5);
      cout << "Square of 5 is: " << result; // Output: Square of 5 is: 25
      return 0;
  }
  ```

### Function Structure and Usage
- **Syntax**:
  ```cpp
  return_type function_name(parameter_list) {
      // Function body
  }
  ```
  - **Return Type**: Specifies the type of value returned (`void` if none).
  - **Function Name**: Identifier used to call the function.
  - **Parameter List**: Inputs (optional, can be empty).
  - **Function Body**: Code executed when the function is called.

- **Function Declaration vs. Definition**:
  - **Declaration**: Introduces function to the compiler (return type, name, parameters) without implementation.
    - Example: `int add(int, int);`
  - **Definition**: Provides the actual implementation.
    - Example:
      ```cpp
      int add(int a, int b) {
          return a + b;
      }
      ```
  - **Purpose of Declaration**: Required if the function is defined after its use or in another file, ensuring the compiler recognizes it.

- **Calling a Function**:
  - Invoke using `function_name(arguments);`.
  - Pass arguments matching the parameter list in type and number.
  - Example:
    ```cpp
    #include <iostream>
    using namespace std;

    void greet() {
        cout << "Welcome to C++ Programming!" << endl;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    int main() {
        greet(); // Output: Welcome to C++ Programming!
        int result = multiply(4, 5);
        cout << "Multiplication result: " << result; // Output: Multiplication result: 20
        return 0;
    }
    ```

### Types of Functions
1. **Based on Origin**:
   - **Library Functions**: Built-in functions from C++ standard libraries (e.g., `sqrt()`, `abs()`, `cout`).
     - Require headers like `<cmath>`, `<iostream>`.
   - **User-Defined Functions**: Programmer-created functions for specific tasks.

2. **Based on Input and Return Type**:
   - **No Parameters, No Return**: Performs a task without input or output (e.g., `void greet()`).
   - **Parameters, No Return**: Takes input but no return (e.g., `void printNum(int n)`).
   - **No Parameters, Return Value**: Returns a value without input (e.g., `int getValue()`).
   - **Parameters and Return Value**: Takes input and returns output (e.g., `int square(int x)`).

### Parameters or Arguments
- **Definition**: Parameters are placeholder variables in the function definition; arguments are actual values passed during a call.
- **Syntax**:
  ```cpp
  return_type function_name(type1 param1, type2 param2) {
      // Use param1, param2
      return value;
  }
  ```
- **Rules**:
  - Number and type of arguments must match the parameter list.
  - Parameters are accessed by their names in the function body, not the argument names.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void printNum(int n) {
      cout << n << endl;
  }

  int main() {
      int num1 = 10, num2 = 99;
      printNum(num1); // Output: 10
      printNum(num2); // Output: 99
      return 0;
  }
  ```

### Default Arguments
- **Definition**: Values assigned to function parameters in the declaration, used if no argument is provided during the call.
- **Syntax**:
  ```cpp
  return_type function_name(type1 param1 = value1, type2 param2 = value2);
  ```
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void f(int a = 10) {
      cout << a << endl;
  }

  int main() {
      f(); // Output: 10 (default)
      f(221); // Output: 221 (provided)
      return 0;
  }
  ```
- **Rules**:
  - Default values must be specified in the function declaration, not the definition.
    - Example:
      ```cpp
      void func(int x = 10); // Declaration
      void func(int x) { cout << "Value: " << x << endl; } // Definition
      ```
  - Default values cannot be modified in the definition (causes compilation error).
  - Default arguments must be assigned from right to left (all parameters to the right of a default parameter must also have defaults).
    - Valid: `void func(int x, int y = 20);`
    - Invalid: `void func(int x = 10, int y);`
  - Avoid ambiguity in function overloading with default arguments.
    - Example (Invalid):
      ```cpp
      void f(int a = 10, int b = 20);
      void f(int a); // Error: Ambiguous
      ```
- **Examples**:
  - **Rectangle Area with Optional Height**:
    ```cpp
    #include <iostream>
    using namespace std;

    double calcArea(double l, double h = 10.0) {
        return l * h;
    }

    int main() {
        cout << "Area 1: " << calcArea(5) << endl; // Output: Area 1: 50
        cout << "Area 2: " << calcArea(5, 9); // Output: Area 2: 45
        return 0;
    }
    ```
  - **Default Arguments in Constructors**:
    ```cpp
    #include <iostream>
    using namespace std;

    class A {
    public:
        int data;
        A(int x = 5) { data = x; }
    };

    int main() {
        A a1; // Uses default x = 5
        A a2(25); // Uses provided x = 25
        cout << a1.data << endl; // Output: 5
        cout << a2.data; // Output: 25
        return 0;
    }
    ```
- **Advantages**:
  - Enhances function flexibility by allowing optional parameters.
  - Reduces code size by avoiding multiple overloaded functions.
  - Simplifies programming for common use cases.
  - Improves code consistency.
- **Disadvantages**:
  - Poor documentation can lead to confusion about default values.
  - Overloading with default arguments may cause ambiguity.
  - Increases execution time due to compiler substituting default values.

### Lambda Expressions
- **Definition**: Inline, anonymous functions introduced in C++11, used for short, non-reusable code snippets, often as callbacks in STL algorithms.
- **Syntax**:
  ```cpp
  [capture-clause] (parameters) -> return-type {
      // Definition
  };
  ```
  - **Capture Clause**: Specifies how external variables are accessed.
  - **Parameters**: Similar to function parameters.
  - **Return Type**: Optional; compiler deduces it unless complex (e.g., conditional statements).
- **Capture Clause Options**:
  - `[&]`: Capture all external variables by reference.
  - `[=]`: Capture all external variables by value (const by default unless `mutable` is used).
  - `[a, &b]`: Capture `a` by value, `b` by reference.
  - `[]`: No capture, only local variables accessible.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      auto res = [](int x) {
          return x + x;
      };
      cout << res(5); // Output: 10
      return 0;
  }
  ```
- **Example with Capture**:
  ```cpp
  #include <iostream>
  #include <vector>
  using namespace std;

  void print(vector<int> v) {
      for (auto x : v) cout << x << " ";
      cout << endl;
  }

  int main() {
      vector<int> v1, v2;
      auto byRef = [&](int m) {
          v1.push_back(m);
          v2.push_back(m);
      };
      byRef(20);
      print(v1); // Output: 20
      print(v2); // Output: 20
      return 0;
  }
  ```
- **Applications**:
  - **Inline Functions**: Define small functions directly without naming.
  - **STL Algorithms**: Use as comparators or predicates (e.g., `sort`, `find_if`).
  - **Callbacks/Event Handling**: Pass to asynchronous operations or event handlers.
  - **Threading**: Use in threads for quick tasks.
  - **Custom Comparators**: For containers like `priority_queue`, `set`.
- **Examples**:
  - **Sort Vector in Descending Order**:
    ```cpp
    #include <iostream>
    #include <vector>
    #include <algorithm>
    using namespace std;

    int main() {
        vector<int> v = {5, 1, 8, 3, 9, 2};
        sort(v.begin(), v.end(), [](const int& a, const int& b) {
            return a > b;
        });
        for (int x : v) cout << x << " "; // Output: 9 8 5 3 2 1
        return 0;
    }
    ```
  - **Find First Number Divisible by 3**:
    ```cpp
    #include <iostream>
    #include <vector>
    #include <algorithm>
    using namespace std;

    int main() {
        vector<int> v = {5, 1, 8, 3, 9, 2};
        auto it = find_if(v.begin(), v.end(), [](const int& a) {
            return a % 3 == 0;
        });
        if (it != v.end()) cout << *it; // Output: 3
        else cout << "No such element";
        return 0;
    }
    ```

### Function Call Stack
- **Definition**: A data structure used to manage function calls, storing information to track execution and return control.
- **Components**:
  - **Stack Frame (Activation Record)**:
    - **Function Parameters**: Values passed to the function.
    - **Local Variables**: Variables declared within the function.
    - **Return Address**: Location to resume after the function completes.
  - **Stack Pointer (SP)**: Tracks the top of the stack for efficient memory management.
- **Process**:
  - When a function is called, its stack frame is pushed onto the call stack.
  - Upon completion, the stack frame is popped, and control returns to the stored return address.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void D() {
      float d = 40.5f;
      cout << "In function D\n";
  }

  void C() {
      double c = 30.5;
      cout << "In function C\n";
  }

  void B() {
      int b = 20;
      C();
      cout << "In function B\n";
  }

  void A() {
      int a = 10;
      B();
      cout << "In function A\n";
  }

  int main() {
      A();
      D();
      return 0;
  }
  ```
  - **Output**:
    ```
    In function C
    In function B
    In function A
    In function D
    ```
  - **Explanation**:
    - `main()` calls `A()`, pushing `A`’s stack frame.
    - `A()` calls `B()`, pushing `B`’s stack frame.
    - `B()` calls `C()`, pushing `C`’s stack frame.
    - `C()` executes, prints, and pops.
    - `B()` continues, prints, and pops.
    - `A()` continues, prints, and pops.
    - `main()` calls `D()`, pushing and popping `D`’s stack frame.

---

### Integration with Previous Notes

#### Connection to Data Types and Variables
- **Functions**:
  - Parameters and return values use specific data types (e.g., `int square(int x)`).
  - Variables store function results (e.g., `int result = square(5);`).
- **Default Arguments**:
  - Default values are tied to parameter types (e.g., `int a = 10`).
- **Lambda Expressions**:
  - Parameters and return types align with data types (e.g., `int` for `[](int x)`).
- **Call Stack**:
  - Stores local variables and parameters with their data types in stack frames.

#### Connection to Constants
- **Functions**:
  - Constants can be parameters or return values (e.g., `const int max = 10; printNum(max);`).
- **Default Arguments**:
  - Default values are often constants (e.g., `int a = 10`).
- **Lambda Expressions**:
  - Captured constants can be used in lambda bodies.
- **Call Stack**:
  - Constants as parameters are stored in the stack frame.

#### Connection to Type Inference
- **Functions**:
  - `auto` deduces return types or parameter types (e.g., `auto square(int x) { return x * x; }`).
- **Default Arguments**:
  - `auto` can be used in modern C++ for function declarations with defaults.
- **Lambda Expressions**:
  - `auto` commonly used to store lambdas (e.g., `auto res = [](int x) { return x + x; };`).
  - Return type is deduced unless explicitly specified.
- **Call Stack**:
  - `auto` variables in functions are stored in the stack frame.

#### Connection to Input/Output
- **Functions**:
  - `cout` outputs function results; `cin` captures inputs for parameters.
  - Example: `cin >> num; printNum(num);`.
- **Default Arguments**:
  - Output results of functions with default arguments (e.g., `f();` outputs default value).
- **Lambda Expressions**:
  - Often used with I/O in STL algorithms (e.g., `for_each` with `cout`).
- **Call Stack**:
  - I/O operations occur within function bodies, managed by the call stack.

#### Connection to Operators
- **Functions**:
  - Use operators in function bodies (e.g., `return a * b;`).
  - Parameters may involve operator expressions (e.g., `multiply(x + 1, y)`).
- **Default Arguments**:
  - Default values can result from operator expressions (e.g., `int x = 5 + 5`).
- **Lambda Expressions**:
  - Use operators in lambda bodies (e.g., `return a > b;` in sorting).
- **Call Stack**:
  - Operator results are stored in local variables or parameters in stack frames.

#### Connection to Decision Making and Switch
- **Functions**:
  - Decision-making constructs (`if`, `switch`) are used in function bodies.
  - Example: `if (x > 0) return x; else return -x;`.
- **Default Arguments**:
  - Decisions may determine when to use default values.
- **Lambda Expressions**:
  - Use decision-making for logic (e.g., `return a % 3 == 0;`).
- **Call Stack**:
  - Decision-making logic is executed within stack frames.

#### Connection to Loops and Jump Statements
- **Functions**:
  - Loops and jump statements (`break`, `continue`, `return`, `goto`) control function flow.
  - Example: `return` exits a function early within a loop.
- **Default Arguments**:
  - Loops may process default arguments (e.g., iterating with a default limit).
- **Lambda Expressions**:
  - Used in loops for STL algorithms (e.g., `for_each`).
  - Jump statements like `return` are common in lambda bodies.
- **Call Stack**:
  - Loops and jump statements affect stack frame creation and destruction.

#### Connection to Scope of Variables
- **Functions**:
  - Parameters and local variables have local scope; global variables are accessible unless shadowed.
- **Default Arguments**:
  - Default values are defined in function scope, accessible within the function.
- **Lambda Expressions**:
  - Capture clause controls variable scope (local, by value, by reference).
- **Call Stack**:
  - Manages local variable scope within stack frames, popped upon function exit.

#### Connection to Escape Sequences
- **Functions**:
  - Escape sequences format function output (e.g., `cout << "Result: " << result << "\n";`).
- **Default Arguments**:
  - Used in output formatting for default cases.
- **Lambda Expressions**:
  - Output formatting in lambda-driven algorithms (e.g., `cout << x << "\n";`).
- **Call Stack**:
  - Output occurs within stack frame execution.

#### Connection to Operator Precedence
- **Functions**:
  - Operator precedence affects expressions in function bodies or parameters.
  - Example: `return a + b * c;` evaluates `b * c` first.
- **Default Arguments**:
  - Precedence affects default value expressions (e.g., `int x = 5 + 5`).
- **Lambda Expressions**:
  - Precedence governs lambda body logic (e.g., `a > b && c < d`).
- **Call Stack**:
  - Expressions in stack frame variables respect operator precedence.

---

### Summary
- **Functions**:
  - Reusable code blocks with optional parameters and return values.
  - Types: Library (built-in) and user-defined (various input/return combinations).
  - Declaration informs the compiler; definition provides implementation.
- **Default Arguments**:
  - Allow optional parameters with predefined values.
  - Must be declared from right to left, only in function declarations.
  - Enhance flexibility but may cause ambiguity in overloading.
- **Lambda Expressions**:
  - Inline, anonymous functions for short, non-reusable tasks.
  - Support capture by value, reference, or mixed; used heavily in STL algorithms.
- **Function Call Stack**:
  - Manages function execution via stack frames containing parameters, local variables, and return addresses.
  - Ensures proper call/return flow with stack pointer management.
- **Best Practices**:
  - Use functions to modularize code and avoid repetition.
  - Declare functions before use in large programs.
  - Ensure parameters match argument types and counts.
  - Use default arguments for optional parameters but document clearly.
  - Leverage lambda expressions for concise STL algorithm logic.
  - Understand call stack behavior to debug function call issues.
  - Manage variable scope to prevent unintended access or errors.
