## C++ Loops and Jump Statements

### Loops in C++

#### Overview
- **Definition**: Loops allow repeated execution of a code block multiple times based on a condition or iteration count.
- **Purpose**: Simplifies repetitive tasks, reducing code duplication compared to manual repetition.
- **Example (Manual vs. Loop)**:
  - **Manual**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        cout << "Hello World\n";
        cout << "Hello World\n";
        cout << "Hello World\n";
        cout << "Hello World\n";
        cout << "Hello World";
        return 0;
    }
    ```
    - **Output**:
      ```
      Hello World
      Hello World
      Hello World
      Hello World
      Hello World
      ```
  - **Using Loop**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        for (int i = 0; i < 5; i++) {
            cout << "Hello World\n";
        }
        return 0;
    }
    ```
    - **Output**: Same as above, but with less code.

#### Types of Loops

1. **for Loop**:
   - **Purpose**: Entry-controlled loop that checks a condition before each iteration, ideal when the number of iterations is known.
   - **Syntax**:
     ```cpp
     for (initialization; condition; update) {
         // Loop body
     }
     ```
   - **Components**:
     - **Initialization**: Sets initial value of loop variable (e.g., `int i = 1`).
     - **Condition**: Evaluates to `true` to execute loop body; `false` terminates loop.
     - **Update**: Modifies loop variable after each iteration (e.g., `i++`).
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         for (int i = 1; i <= 5; i++) {
             cout << i << " "; // Output: 1 2 3 4 5
         }
         return 0;
     }
     ```

2. **Range-based for Loop**:
   - **Purpose**: Iterates over elements of a container (e.g., array, vector) without explicit indexing.
   - **Syntax**:
     ```cpp
     for (type variable : container) {
         // Loop body
     }
     ```
   - **By Value vs. By Reference**:
     - **By Value** (`auto it`): Works on a copy, modifications don’t affect the original.
     - **By Reference** (`auto &it`): Modifies original elements.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <vector>
     using namespace std;
     int main() {
         vector<int> arr = {1, 2, 3, 4, 5};
         cout << "Iterating by value\n";
         for (auto it : arr) {
             cout << it << " "; // Output: 1 2 3 4 5
         }
         cout << "\nIterating with reference\n";
         for (auto &it : arr) {
             cout << it << " "; // Output: 1 2 3 4 5
         }
         return 0;
     }
     ```

3. **while Loop**:
   - **Purpose**: Entry-controlled loop used when the number of iterations is unknown, relying solely on a condition.
   - **Syntax**:
     ```cpp
     while (condition) {
         // Loop body
         // Update expression
     }
     ```
   - **Note**: Initialization and update must be handled manually.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int i = 1;
         while (i <= 5) {
             cout << i << " "; // Output: 1 2 3 4 5
             i++;
         }
         return 0;
     }
     ```

4. **do-while Loop**:
   - **Purpose**: Exit-controlled loop that executes at least once, checking the condition after the loop body.
   - **Syntax**:
     ```cpp
     do {
         // Loop body
         // Update expression
     } while (condition);
     ```
   - **Note**: Requires a semicolon after the condition.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int i = 1;
         do {
             cout << i << " "; // Output: 1 2 3 4 5
             i++;
         } while (i <= 5);
         return 0;
     }
     ```

5. **Infinite Loops**:
   - **Definition**: Loops that run indefinitely due to a condition that always evaluates to `true`.
   - **Note**: Usually an error, but can be intentional (e.g., event loops).
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         for (;;) {
             cout << "This loop will run forever.\n"; // Runs indefinitely
         }
         return 0;
     }
     ```

6. **Nested Loops**:
   - **Purpose**: Places one loop inside another, where the inner loop completes all iterations for each outer loop iteration.
   - **Use Case**: Useful for multi-dimensional data (e.g., 2D arrays).
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         for (int i = 0; i < 3; i++) {
             for (int j = 0; j < 2; j++) {
                 cout << "i = " << i << ", j = " << j << endl;
             }
         }
         return 0;
     }
     ```
     - **Output**:
       ```
       i = 0, j = 0
       i = 0, j = 1
       i = 1, j = 0
       i = 1, j = 1
       i = 2, j = 0
       i = 2, j = 1
       ```

#### Loop Control Statements
- **Purpose**: Modify the normal flow of loops.
- **Types**:
  - **break**: Terminates the loop entirely.
    - **Example**:
      ```cpp
      #include <iostream>
      using namespace std;
      int main() {
          for (int i = 0; i < 5; i++) {
              if (i == 2) break;
              cout << "Hi" << endl; // Output: Hi\nHi
          }
          return 0;
      }
      ```
  - **continue**: Skips the current iteration and proceeds to the next.
    - **Example**:
      ```cpp
      #include <iostream>
      using namespace std;
      int main() {
          for (int i = 0; i < 5; i++) {
              if (i == 2) continue;
              cout << "Hi" << endl; // Output: Hi\nHi\nHi\nHi
          }
          return 0;
      }
      ```

---

### Jump Statements in C++

#### Overview
- **Definition**: Jump statements alter the normal flow of a program, often used within loops or functions to control execution.
- **Types**: `continue`, `break`, `return`, `goto`.

#### Jump Statement Types

1. **continue Statement**:
   - **Purpose**: Skips the remaining code in the current loop iteration and proceeds to the next iteration.
   - **Use Case**: Used within loops (`for`, `while`, `do-while`) with a condition.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         for (int i = 1; i < 10; i++) {
             if (i == 5) continue;
             cout << i << " "; // Output: 1 2 3 4 6 7 8 9
         }
         return 0;
     }
     ```

2. **break Statement**:
   - **Purpose**: Terminates the entire loop or `switch` statement, transferring control to the next statement.
   - **Use Case**: Used within loops or `switch` with a condition.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         for (int i = 1; i < 10; i++) {
             if (i == 5) break;
             cout << i << " "; // Output: 1 2 3 4
         }
         return 0;
     }
     ```

3. **return Statement**:
   - **Purpose**: Exits a function, optionally returning a value to the caller. Terminates function execution.
   - **Use Case**: Used in functions to return results or end execution early.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     void findNum(int n) {
         for (int i = 0; i <= 100; i++) {
             if (i == n) {
                 cout << "Number in Range [0, 100]";
                 return; // Exits function
             }
         }
         cout << "Number not in Range [0, 100]";
         return;
     }
     int main() {
         findNum(10); // Output: Number in Range [0, 100]
         return 0;
     }
     ```

4. **goto Statement**:
   - **Purpose**: Transfers control to a labeled statement unconditionally.
   - **Note**: Avoided in modern programming due to reduced readability and error-proneness.
   - **Syntax**:
     ```cpp
     label:
         // Code
     goto label;
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int n = 4;
         if (n % 2 == 0) {
             goto label1;
         } else {
             goto label2;
         }
     label1:
         cout << "Even"; // Output: Even
         return 0;
     label2:
         cout << "Odd";
         return 0;
     }
     ```

---

### Integration with Previous Notes

#### Connection to Data Types and Variables
- **Loops**:
  - Loop variables (e.g., `int i`) are typically `int` but can be other types (e.g., `float` in `while` loops).
  - Range-based `for` loops use container element types (e.g., `int` for `vector<int>`).
- **Jump Statements**:
  - Conditions in `break` and `continue` use variables (e.g., `if (i == 5)`).
  - `return` can return any data type or `void`.

#### Connection to Constants
- **Constants in Loops**:
  - Constants define loop boundaries (e.g., `const int max = 5; for (int i = 0; i < max; i++)`).
- **Constants in Jump Statements**:
  - Conditions for `break` or `continue` may use constants (e.g., `if (i == max)`).

#### Connection to Type Inference
- **Type Inference in Loops**:
  - `auto` simplifies loop variable declarations, especially in range-based `for` loops.
  - Example: `for (auto it : vector<int>{1, 2, 3})`.
- **Type Inference in Jump Statements**:
  - `auto` can deduce return types in functions using `return`.
  - Example: `auto func() { return 42; } // int`.

#### Connection to Input/Output
- **I/O in Loops**:
  - `cout` outputs loop results; `cin` captures loop input.
  - Example: `for (int i = 0; i < n; i++) { cin >> x; cout << x; }`.
- **I/O in Jump Statements**:
  - `cout` displays results before `return` or after `goto`.

#### Connection to Operators
- **Operators in Loops**:
  - Loop conditions use relational (`<`, `==`) and logical (`&&`) operators.
  - Update expressions use arithmetic operators (e.g., `i++`).
- **Operators in Jump Statements**:
  - Conditions for `break`, `continue`, and `goto` use relational/logical operators.
  - Example: `if (i % 2 == 0) continue;`.

#### Connection to Decision Making and Switch
- **Decision Making in Loops**:
  - `if` statements within loops control `break` or `continue`.
  - Example: `for (int i = 0; i < 5; i++) { if (i == 3) break; }`.
- **Switch in Loops**:
  - `switch` can be used inside loops for multi-case logic.
  - Example: `for (int i = 0; i < n; i++) { switch (i) { case 1: ... } }`.
- **Jump Statements**:
  - `break` and `continue` are integral to loop control, also used in `switch`.
  - `return` aligns with function-based decision making.

#### Connection to Escape Sequences
- **Formatting Loop Output**:
  - Escape sequences (e.g., `\n`) format loop output.
  - Example: `for (int i = 0; i < 5; i++) { cout << i << "\n"; }`.
- **Formatting Jump Statement Output**:
  - `cout` with escape sequences used before `return` or `goto`.

#### Connection to Operator Precedence
- **Loop Conditions**:
  - Precedence affects condition evaluation (e.g., `i < 5 && j > 0` evaluates `&&` last).
- **Jump Conditions**:
  - Precedence ensures correct condition evaluation in `if` statements for `break`, `continue`, or `goto`.

---

### Summary
- **Loops**:
  - Types: `for`, range-based `for`, `while`, `do-while`.
  - **for**: Known iteration count, entry-controlled.
  - **Range-based for**: Iterates containers, supports value or reference.
  - **while**: Unknown iterations, entry-controlled.
  - **do-while**: Executes at least once, exit-controlled.
  - **Infinite Loops**: Run indefinitely if condition never fails.
  - **Nested Loops**: Inner loop runs fully for each outer loop iteration.
- **Jump Statements**:
  - **continue**: Skips current loop iteration.
  - **break**: Terminates loop or `switch`.
  - **return**: Exits function, optionally returns a value.
  - **goto**: Jumps to a labeled statement (avoid in modern code).
- **Best Practices**:
  - Use `for` for known iteration counts, `while`/`do-while` for condition-based loops.
  - Prefer range-based `for` for containers.
  - Use `break` and `continue` for precise loop control.
  - Avoid `goto` for better readability.
  - Ensure conditions prevent infinite loops.
