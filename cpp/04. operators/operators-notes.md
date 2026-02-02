## C++ Operators and Precedence

### Operators in C++

#### Overview
- **Definition**: Operators are symbols that perform specific mathematical, logical, or other operations on operands (values or variables).
- **Purpose**: Form the foundation of computations in C++ programs.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int a = 10 + 20;
      cout << a; // Output: 30
      return 0;
  }
  ```

#### Operator Types
Operators in C++ are classified based on the type of operation they perform:

1. **Arithmetic Operators**:
   - Perform mathematical operations.
   - **List**:
     - `+` (Addition): Adds two operands.
     - `-` (Subtraction): Subtracts second operand from the first.
     - `*` (Multiplication): Multiplies two operands.
     - `/` (Division): Divides first operand by the second.
     - `%` (Modulo): Returns remainder of integer division (integers only).
     - `++` (Increment): Increases operand value by 1.
     - `--` (Decrement): Decreases operand value by 1.
   - **Notes**:
     - `%` is only for integers; other operators support floating-point values.
     - `++a` (pre-increment): Increments first, then uses value.
     - `a++` (post-increment): Uses value, then increments.
     - Similarly for `--a` (pre-decrement) and `a--` (post-decrement).
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int a = 8, b = 3;
         cout << "a + b = " << (a + b) << endl; // 11
         cout << "a - b = " << (a - b) << endl; // 5
         cout << "a * b = " << (a * b) << endl; // 24
         cout << "a / b = " << (a / b) << endl; // 2
         cout << "a % b = " << (a % b) << endl; // 2
         cout << "++a = " << ++a << endl; // 9
         cout << "b-- = " << b--; // 3 (then b becomes 2)
         return 0;
     }
     ```

2. **Relational Operators**:
   - Compare values of two operands, returning `true` (1) or `false` (0).
   - **List**:
     - `==` (Equal): Checks if operands are equal.
     - `>` (Greater Than): Checks if first operand is greater than second.
     - `>=` (Greater Than or Equal): Checks if first operand is greater than or equal to second.
     - `<` (Less Than): Checks if first operand is less than second.
     - `<=` (Less Than or Equal): Checks if first operand is less than or equal to second.
     - `!=` (Not Equal): Checks if operands are not equal.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int a = 6, b = 4;
         cout << "a == b is " << (a == b) << endl; // 0
         cout << "a > b is " << (a > b) << endl; // 1
         cout << "a >= b is " << (a >= b) << endl; // 1
         cout << "a < b is " << (a < b) << endl; // 0
         cout << "a <= b is " << (a <= b) << endl; // 0
         cout << "a != b is " << (a != b); // 1
         return 0;
     }
     ```

3. **Logical Operators**:
   - Combine or modify conditions, returning `true` (1) or `false` (0).
   - **List**:
     - `&&` (Logical AND): Returns `true` if all operands are true/non-zero.
     - `||` (Logical OR): Returns `true` if any operand is true/non-zero.
     - `!` (Logical NOT): Returns `true` if operand is false/zero.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int a = 6, b = 4;
         cout << "a && b is " << (a && b) << endl; // 1
         cout << "a || b is " << (a || b) << endl; // 1
         cout << "!b is " << (!b); // 0
         return 0;
     }
     ```

4. **Bitwise Operators**:
   - Operate on bits of integer or char operands.
   - **List**:
     - `&` (Binary AND): Copies bit if it exists in both operands.
     - `|` (Binary OR): Copies bit if it exists in either operand.
     - `^` (Binary XOR): Copies bit if it exists in one operand but not both.
     - `<<` (Left Shift): Shifts bits left by specified number.
     - `>>` (Right Shift): Shifts bits right by specified number.
     - `~` (One’s Complement): Inverts all bits (1 to 0, 0 to 1).
   - **Note**: Only applicable to `char` and `int` data types.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int a = 6, b = 4; // a = 110, b = 100 in binary
         cout << "a & b is " << (a & b) << endl; // 4 (100)
         cout << "a | b is " << (a | b) << endl; // 6 (110)
         cout << "a ^ b is " << (a ^ b) << endl; // 2 (010)
         cout << "a << 1 is " << (a << 1) << endl; // 12 (1100)
         cout << "a >> 1 is " << (a >> 1) << endl; // 3 (011)
         cout << "~a is " << (~a); // -7 (inverts bits)
         return 0;
     }
     ```

5. **Assignment Operators**:
   - Assign values to variables or modify them based on operations.
   - **List**:
     - `=` (Assignment): Assigns right operand to left operand.
     - `+=` (Add and Assign): Adds right operand to left and assigns result.
     - `-=` (Subtract and Assign): Subtracts right operand from left and assigns result.
     - `*=` (Multiply and Assign): Multiplies left by right and assigns result.
     - `/=` (Divide and Assign): Divides left by right and assigns result.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int a = 6, b = 4;
         cout << "a = " << a << endl; // 6
         cout << "a += b is " << (a += b) << endl; // 10
         cout << "a -= b is " << (a -= b) << endl; // 6
         cout << "a *= b is " << (a *= b) << endl; // 24
         cout << "a /= b is " << (a /= b); // 6
         return 0;
     }
     ```

6. **Ternary (Conditional) Operator**:
   - Evaluates a condition and returns one of two values based on it.
   - **Syntax**: `Expression1 ? Expression2 : Expression3`
     - If `Expression1` is true, evaluates `Expression2`.
     - If `Expression1` is false, evaluates `Expression3`.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int a = 3, b = 4;
         int result = (a < b) ? b : a;
         cout << "The greatest number is " << result; // Output: The greatest number is 4
         return 0;
     }
     ```

7. **Miscellaneous Operators**:
   - **sizeof**: Returns the size of a variable or type in bytes (unary).
     - Example: `sizeof(int)` returns 4 (on 64-bit systems).
   - **Comma (`,`)**: Evaluates multiple expressions, returning the last one’s value (binary).
     - Example: `int b = (a+1, a-2, a+5); // b = a+5`
   - **Address-of (`&`)**: Returns the memory address of a variable or creates a reference (unary).
     - Example: `&var_name`
   - **Dot (`.`)**: Accesses members of a structure or class object (binary).
     - Example: `obj.member`
   - **Arrow (`->`)**: Accesses members of a structure or class via a pointer (binary).
     - Example: `sptr->member`
   - **Casting Operators**: Convert one data type to another (e.g., `(float)x`, `static_cast<float>(x)`).

#### Operator Classification by Operands
- **Unary**: Operates on one operand (e.g., `++`, `--`, `!`, `~`, `sizeof`).
- **Binary**: Operates on two operands (e.g., `+`, `-`, `*`, `/`, `&`, `|`, `,`, `.`).
- **Ternary**: Operates on three operands (e.g., `?:`).

---

### Operator Precedence and Associativity in C++

#### Overview
- **Operator Precedence**: Determines which operator is evaluated first in an expression with multiple operators.
- **Operator Associativity**: Determines the order of evaluation (left-to-right or right-to-left) when operators have the same precedence.

#### Operator Precedence
- **Definition**: Higher-precedence operators are evaluated before lower-precedence ones.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int result = 10 + 20 * 30; // * has higher precedence than +
      cout << "Result: " << result; // Output: Result: 610 (20 * 30 + 10)
      return 0;
  }
  ```

#### Operator Associativity
- **Definition**:
  - **Left-to-Right**: Operators with the same precedence are evaluated from left to right (e.g., `/`, `%`, `*`).
  - **Right-to-Left**: Operators are evaluated from right to left (e.g., `=`, `?:`).
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int result = 100 / 10 * 10; // / and * have same precedence, evaluated left-to-right
      cout << "Result: " << result; // Output: Result: 100 ((100 / 10) * 10)
      return 0;
  }
  ```

#### Combined Example
- **Expression**: `exp = 100 + 200 / 10 - 3 * 10`
  - `/` and `*` have higher precedence than `+` and `-`, evaluated left-to-right.
  - Then, `+` and `-` are evaluated left-to-right.
  - **Evaluation**: `(200 / 10) = 20`, `(3 * 10) = 30`, `100 + 20 = 120`, `120 - 30 = 90`.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int result = 100 + 200 / 10 - 3 * 10;
      cout << "Result: " << result; // Output: Result: 90
      return 0;
  }
  ```

#### Operator Precedence and Associativity Table
- Operators are listed in descending order of precedence (higher to lower).
- **Table**:
  - **Parentheses/Access (`(), [], ->, .`)**: Left-to-right
  - **Increment/Decrement (`++, --`)**: Right-to-left
  - **Logical/Bitwise NOT, Unary Plus/Minus (`!, ~, -, +`)**: Right-to-left
  - **Multiplication, Division, Modulus (`*, /, %`)**: Left-to-right
  - **Addition, Subtraction (`+, -`)**: Left-to-right
  - **Bitwise Shift (`<<, >>`)**: Left-to-right
  - **Relational (`<, <=, >, >=`)**: Left-to-right
  - **Equality (`==, !=`)**: Left-to-right
  - **Bitwise AND (`&`)**: Left-to-right
  - **Bitwise XOR (`^`)**: Left-to-right
  - **Bitwise OR (`|`)**: Left-to-right
  - **Logical AND (`&&`)**: Left-to-right
  - **Logical OR (`||`)**: Left-to-right
  - **Ternary Conditional (`?:`)**: Right-to-left
  - **Assignment and Compound Assignment (`=, +=, -=, *=, /=, %=, &=, ^=, |=, <<=, >>=`)**: Right-to-left
  - **Comma (`,`)**: Left-to-right

---

### Integration with Previous Notes

#### Connection to Data Types and Variables
- **Operators and Data Types**:
  - Arithmetic operators like `%` are restricted to `int` and `char`; others work with `float` and `double`.
  - Relational and logical operators return `bool` values (1 or 0).
  - Bitwise operators are limited to `int` and `char`.
- **Variables in Operations**:
  - Operators manipulate variable values (e.g., `int a = 5; a += 3;`).
  - Type safety ensures operands match expected types to avoid errors.

#### Connection to Constants
- **Constants in Expressions**:
  - Constants (e.g., `const int max = 10;`) can be used as operands in operator expressions.
  - Example: `int result = max + 5;`.
- **Immutable Operands**:
  - Constants cannot be modified by assignment operators (e.g., `max += 5;` causes an error).

#### Connection to Type Inference
- **Type Inference with Operators**:
  - `auto` deduces the type of results from operator expressions.
  - Example: `auto result = 5 + 3.14; // double`.
  - `decltype` can extract the type of an operator’s result.
  - Example: `decltype(5 + 3) x = 8; // x is int`.

#### Connection to Input/Output
- **I/O with Operators**:
  - `cout` uses `<<` (insertion operator) to output results of operator expressions.
  - `cin` uses `>>` (extraction operator) to input values for operator computations.
  - Example: `int a; cin >> a; cout << (a + 5);`.
- **Formatting Output**:
  - Escape sequences (e.g., `\n`) format output of operator results.
  - Example: `cout << "Result: " << (a + b) << endl;`.

#### Connection to Escape Sequences
- **Formatting Operator Output**:
  - Escape sequences like `\n`, `\t` are used to format the output of operator results.
  - Example: `cout << "Sum: " << (a + b) << "\nDifference: " << (a - b);`.

---

### Summary
- **Operators**:
  - Types: Arithmetic, relational, logical, bitwise, assignment, ternary, and miscellaneous (e.g., `sizeof`, `,`, `&`, `.`, `->`, casting).
  - Classified by operands: Unary (1 operand), binary (2 operands), ternary (3 operands).
  - Enable mathematical, logical, and memory operations.
- **Precedence and Associativity**:
  - **Precedence**: Determines which operators are evaluated first (e.g., `*` before `+`).
  - **Associativity**: Determines evaluation order for same-precedence operators (left-to-right or right-to-left).
  - Use parentheses to override default precedence for clarity.
- **Best Practices**:
  - Use appropriate operators for data types (e.g., `%` for integers only).
  - Ensure type safety in operations to avoid errors.
  - Use parentheses in complex expressions to ensure correct evaluation order and improve readability.