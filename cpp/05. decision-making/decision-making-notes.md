## C++ Decision Making and Switch Statement

### Decision Making in C++

#### Overview
- **Definition**: Decision making involves using conditional statements to determine which code block executes based on specific conditions.
- **Purpose**: Controls program flow by executing code selectively based on condition evaluation.
- **Types**: C++ provides multiple decision-making constructs, including `if`, `if-else`, `if-else-if` ladder, nested `if-else`, `switch`, ternary operator, and jump statements.

#### Types of Decision-Making Statements

1. **if Statement**:
   - **Purpose**: Executes a code block if a condition evaluates to `true`.
   - **Syntax**:
     ```cpp
     if (condition) {
         // Code to execute if condition is true
     }
     ```
   - **Note**: Curly braces `{}` are optional for a single statement.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int age = 19;
         if (age > 18)
             cout << "allowed to vote"; // Output: allowed to vote
         return 0;
     }
     ```

2. **if-else Statement**:
   - **Purpose**: Executes one block if the condition is `true`, and another if it is `false`.
   - **Syntax**:
     ```cpp
     if (condition) {
         // Code if condition is true
     } else {
         // Code if condition is false
     }
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int n = 5;
         if (n > 0) {
             cout << "number is positive."; // Output: number is positive.
         } else {
             cout << "number is non-positive.";
         }
         return 0;
     }
     ```

3. **if-else-if Ladder**:
   - **Purpose**: Checks multiple conditions sequentially, executing the first `true` condition’s block or an optional `else` block if none are true.
   - **Syntax**:
     ```cpp
     if (condition1) {
         // Code if condition1 is true
     } else if (condition2) {
         // Code if condition2 is true
     } else {
         // Code if no condition is true
     }
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int age = 18;
         if (age < 13) {
             cout << "child";
         } else if (age >= 1 && age <= 18) {
             cout << "Growing stage"; // Output: Growing stage
         } else {
             cout << "adult";
         }
         return 0;
     }
     ```

4. **Nested if-else Statement**:
   - **Purpose**: Places an `if` or `if-else` statement inside another `if` or `else` block for complex condition checking.
   - **Syntax**:
     ```cpp
     if (condition1) {
         if (condition2) {
             // Code if both conditions are true
         } else {
             // Code if condition1 is true but condition2 is false
         }
     } else {
         // Code if condition1 is false
     }
     ```
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int n = 44;
         if (n > 0) {
             if (n % 2 == 0) {
                 cout << "positive and even number"; // Output: positive and even number
             } else {
                 cout << "positive and odd number";
             }
         } else if (n == 0) {
             cout << "the number is zero";
         } else {
             cout << "the number is negative";
         }
         return 0;
     }
     ```

5. **Switch Statement**:
   - **Purpose**: Executes a block of code based on the value of an expression, serving as an alternative to multiple `if-else` statements.
   - **Details**: Covered in detail in the next section.

6. **Ternary Operator (`?:`)**:
   - **Purpose**: A concise alternative to `if-else` for simple conditional assignments.
   - **Syntax**: `expression ? value_if_true : value_if_false`
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         int num1 = 10, num2 = 40;
         int max = (num1 > num2) ? num1 : num2;
         cout << max; // Output: 40
         return 0;
     }
     ```

7. **Jump Statements**:
   - **Purpose**: Alter the normal flow of program execution.
   - **Types**:
     - **break**:
       - Terminates a loop or `switch` statement, transferring control to the next statement.
       - **Example**:
         ```cpp
         #include <iostream>
         using namespace std;
         int main() {
             for (int i = 0; i < 5; i++) {
                 if (i == 3) {
                     break;
                 }
                 cout << i << endl; // Output: 0, 1, 2
             }
             return 0;
         }
         ```
     - **continue**:
       - Skips the current iteration of a loop and proceeds to the next iteration.
       - **Example**:
         ```cpp
         #include <iostream>
         using namespace std;
         int main() {
             for (int i = 0; i < 5; i++) {
                 if (i == 3) {
                     continue;
                 }
                 cout << i << endl; // Output: 0, 1, 2, 4
             }
             return 0;
         }
         ```
     - **goto**:
       - Transfers control to a labeled statement unconditionally.
       - **Note**: Avoided in modern programming due to reduced readability and error-proneness.
       - **Example**:
         ```cpp
         #include <iostream>
         using namespace std;
         int main() {
             int age = 17;
             if (age < 18) {
                 goto Noteligible;
             } else {
                 cout << "You can vote!";
             }
         Noteligible:
             cout << "You are not eligible to vote!"; // Output: You are not eligible to vote!
             return 0;
         }
         ```
     - **return**:
       - Exits a function, optionally returning a value to the caller.
       - **Example**:
         ```cpp
         #include <iostream>
         using namespace std;
         int add(int a, int b) {
             return a + b; // Returns sum
         }
         int main() {
             int res = add(3, 5);
             cout << "The sum is: " << res; // Output: The sum is: 8
             return 0;
         }
         ```

---

### Switch Statement in C++

#### Overview
- **Definition**: A flow control statement that executes different code blocks based on the value of an expression, providing a cleaner alternative to `if-else-if` ladders.
- **Syntax**:
  ```cpp
  switch (expression) {
      case value_1:
          // Code to execute
          break;
      case value_2:
          // Code to execute
          break;
      default:
          // Code if no case matches
  }
  ```
- **Components**:
  - **expression**: Evaluates to a constant value (must be `int` or `char`).
  - **case**: Specifies a value to match against the expression.
  - **break**: Exits the `switch` to prevent fall-through to subsequent cases.
  - **default**: Optional block executed if no case matches.

#### Working of Switch Statement
1. Evaluate the `switch` expression.
2. Compare the result with each `case` value.
3. Execute the matching `case` block.
4. If no match, execute the `default` block (if provided).
5. Use `break` to exit the `switch`; without it, execution continues to subsequent cases (fall-through).
6. Proceed to statements after the `switch`.

#### Rules
- Case values must be `int` or `char` constants (no floating-point or variable expressions).
- Duplicate case values are not allowed.
- `break` is optional but recommended to avoid fall-through.
- `default` can appear anywhere in the `switch` but is executed only if no case matches.

#### Examples
1. **Basic Switch**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       char x = 'A';
       switch (x) {
           case 'A':
               cout << "A"; // Output: A
               break;
           case 'B':
               cout << "B";
               break;
           default:
               cout << "Other than A and B";
       }
       return 0;
   }
   ```

2. **Print Day Name**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       int day = 4;
       switch (day) {
           case 1: cout << "Monday"; break;
           case 2: cout << "Tuesday"; break;
           case 3: cout << "Wednesday"; break;
           case 4: cout << "Thursday"; break; // Output: Thursday
           case 5: cout << "Friday"; break;
           case 6: cout << "Saturday"; break;
           case 7: cout << "Sunday"; break;
           default: cout << "Invalid day number";
       }
       return 0;
   }
   ```

3. **Simple Calculator**:
   ```cpp
   #include <iostream>
   #include <stdlib.h>
   using namespace std;
   int main() {
       char c;
       int x, y;
       cout << "Enter the two numbers: ";
       cin >> x >> y;
       cout << "Enter the Operator (+,-,*,/)\nEnter any other to exit\n";
       cin >> c;
       switch (c) {
           case '+': cout << x << " + " << y << " = " << x + y; break;
           case '-': cout << x << " - " << y << " = " << x - y; break;
           case '*': cout << x << " * " << y << " = " << x * y; break;
           case '/': cout << x << " / " << y << " = " << x / y; break;
           default: cout << "Exiting";
       }
       return 0;
   }
   ```
   - **Sample Output**:
     ```
     Enter the two numbers: 10 2
     Enter the Operator (+,-,*,/)\nEnter any other to exit
     +
     10 + 2 = 12
     ```

4. **Nested Switch Statements**:
   - **Note**: A `switch` can be nested inside another, but this is rare due to complexity and reduced readability.
   - **Example** (hypothetical):
     ```cpp
     switch (outer) {
         case 1:
             switch (inner) {
                 case 1: cout << "Nested case"; break;
             }
             break;
     }
     ```

#### Switch vs. if-else-if
- **Switch**:
  - Evaluates `int` or `char` expressions.
  - Faster and cleaner for multiple conditions.
  - Limited to constant value comparisons.
- **if-else-if**:
  - Supports any expression type (e.g., `float`, complex conditions).
  - More flexible but can be verbose for many conditions.

---

### Integration with Previous Notes

#### Connection to Data Types and Variables
- **Decision Making**:
  - Conditions in `if`, `switch`, or ternary operators often use variables of specific data types (e.g., `int`, `char` for `switch`).
  - Type safety ensures conditions evaluate correctly (e.g., `int age = 19; if (age > 18)`).
- **Switch**:
  - Requires `int` or `char` expressions, aligning with primitive data types.
  - Variables store case values or results (e.g., `char c = 'A'; switch (c)`).

#### Connection to Constants
- **Constants in Conditions**:
  - Constants (e.g., `const int votingAge = 18;`) are used in decision-making conditions.
  - Example: `if (age >= votingAge)`.
- **Switch Case Values**:
  - Case values in `switch` must be constants (e.g., `case 1:` or `case 'A':`).

#### Connection to Type Inference
- **Type Inference in Conditions**:
  - `auto` can deduce types for variables used in decision-making.
  - Example: `auto x = 5; if (x > 0)`.
  - `decltype` can extract types for complex expressions in conditions.
  - Example: `decltype(x + y) result;`.

#### Connection to Input/Output
- **I/O in Decision Making**:
  - `cin` captures user input for conditions (e.g., `cin >> age; if (age > 18)`).
  - `cout` displays results of decision-making (e.g., `cout << "allowed to vote";`).
- **Switch with I/O**:
  - Example: Calculator program uses `cin` for operator and operands, `cout` for results.

#### Connection to Operators
- **Operators in Conditions**:
  - Relational (`>`, `<`, `==`) and logical (`&&`, `||`, `!`) operators form conditions.
  - Example: `if (age >= 18 && citizen)`.
- **Switch Expressions**:
  - Arithmetic operators (e.g., `x + y`) can be used in `switch` if they evaluate to `int` or `char`.
  - Example: `switch (x + y)`.

#### Connection to Escape Sequences
- **Formatting Output**:
  - Escape sequences like `\n` format output in decision-making blocks.
  - Example: `cout << "Result: " << max << "\n";`.

#### Connection to Operator Precedence
- **Condition Evaluation**:
  - Precedence and associativity determine how complex conditions are evaluated.
  - Example: `if (x + y * z > 0)` evaluates `y * z` first due to higher precedence.
- **Switch**:
  - Expressions in `switch` must resolve to a single `int` or `char` value, respecting operator precedence.

---

### Summary
- **Decision Making**:
  - Constructs: `if`, `if-else`, `if-else-if` ladder, nested `if-else`, `switch`, ternary operator (`?:`), and jump statements (`break`, `continue`, `goto`, `return`).
  - Controls program flow based on conditions.
  - Jump statements alter execution flow (e.g., `break` exits loops, `continue` skips iterations).
- **Switch Statement**:
  - Evaluates an `int` or `char` expression to execute matching case blocks.
  - Uses `break` to prevent fall-through; `default` handles unmatched cases.
  - Cleaner than `if-else-if` for multiple constant comparisons.
- **Best Practices**:
  - Use `if` for flexible conditions, `switch` for multiple `int`/`char` comparisons.
  - Include `break` in `switch` cases to avoid fall-through.
  - Avoid `goto` for better code readability.
  - Use parentheses in complex conditions to ensure correct operator precedence.
