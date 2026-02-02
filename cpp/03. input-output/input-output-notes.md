## C++ Input/Output and Escape Sequences

### Basic Input/Output in C++

#### Overview
- **Definition**: Input and output (I/O) in C++ involve streams, which are sequences of bytes transferred between devices (e.g., keyboard, display) and memory.
- **Streams**:
  - **Input Stream**: Data flows from a device (e.g., keyboard) to main memory (e.g., using `cin`).
  - **Output Stream**: Data flows from main memory to a device (e.g., display) (e.g., using `cout`).
- **Header File**: `<iostream>` contains standard I/O tools, including `cin`, `cout`, `cerr`, and `clog`.
- **Namespace**: `using namespace std;` allows direct use of `cin` and `cout` without `std::` prefix.

#### Standard Output Stream (`cout`)
- **Purpose**: Outputs data to the standard output device (typically the display screen).
- **Class**: Instance of `ostream` class.
- **Operator**: Uses the insertion operator (`<<`) to send data to the output stream.
- **Syntax**:
  ```cpp
  cout << value/variable;
  ```
- **Examples**:
  - **Text Output**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        cout << "GeeksforGeeks"; // Output: GeeksforGeeks
        return 0;
    }
    ```
  - **Variable Output**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        int a = 22;
        cout << a; // Output: 22
        return 0;
    }
    ```

#### Standard Input Stream (`cin`)
- **Purpose**: Reads input from the standard input device (typically the keyboard).
- **Class**: Instance of `istream` class.
- **Operator**: Uses the extraction operator (`>>`) to extract data from the input stream and store it in a variable.
- **Syntax**:
  ```cpp
  cin >> variable;
  ```
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;
  int main() {
      int age;
      cin >> age; // User enters: 18
      cout << "Age entered: " << age; // Output: Age entered: 18
      return 0;
  }
  ```
- **Note**: Input type must match the variable’s data type to avoid errors or undefined behavior.
- **Limitation**: `cin` stops reading at whitespace (space, tab, newline), capturing only the first word for strings.
  - **Example**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        string name;
        cin >> name; // User enters: Vishal Kumar
        cout << "Name entered: " << name; // Output: Name entered: Vishal
        return 0;
    }
    ```

#### Standard Error Streams
1. **Unbuffered Error Stream (`cerr`)**:
   - **Purpose**: Outputs error messages immediately without buffering.
   - **Class**: Instance of `ostream` class.
   - **Use Case**: Immediate error display, not redirected to files with `cout` redirection.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         cerr << "An error occurred"; // Error: An error occurred
         return 0;
     }
     ```
2. **Buffered Error Stream (`clog`)**:
   - **Purpose**: Outputs error messages to a buffer, displayed when the buffer is full or explicitly flushed.
   - **Class**: Instance of `ostream` class.
   - **Example**:
     ```cpp
     #include <iostream>
     using namespace std;
     int main() {
         clog << "An error occurred"; // Error: An error occurred
         return 0;
     }
     ```

#### Key Differences
- **cout vs. cerr**: `cout` is buffered and can be redirected to files; `cerr` is unbuffered and outputs immediately to the console.
- **cerr vs. clog**: `cerr` outputs errors without buffering; `clog` buffers errors until full or flushed.

---

### C++ Escape Sequences

#### Overview
- **Definition**: Special character sequences starting with a backslash (`\`) used in strings or characters to represent characters that cannot be typed directly or to control formatting.
- **Purpose**: Enable special symbols, formatting, or control characters in output.

#### Common Escape Sequences
- **List**:
  - `\`: Backslash (displays `\`).
  - `\'`: Single quote (displays `'`).
  - `\"`: Double quote (displays `"`).
  - `\?`: Question mark (displays `?`).
  - `\a`: Alert (generates a bell sound, compiler-dependent).
  - `\b`: Backspace (moves cursor one position backward).
  - `\f`: Form feed (moves cursor to the start of the next logical page, compiler-dependent).
  - `\n`: New line (moves cursor to the start of the next line).
  - `\r`: Carriage return (moves cursor to the start of the current line).
  - `\t`: Horizontal tab (inserts whitespace and moves cursor).
  - `\v`: Vertical tab (inserts vertical space, compiler-dependent).
  - `\0`: Null character (represents end of string).
  - `\ooo`: Octal number (represents a character by its octal ASCII value).
  - `\xhh`: Hexadecimal number (represents a character by its hexadecimal ASCII value).
- **Note**: Output behavior of some escape sequences (e.g., `\a`, `\f`, `\v`) depends on the compiler.

#### Examples
1. **Alert (`\a`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "My mobile number is 7\a8\a7\a3\a9\a2\a3\a4\a0\a8\a"; // Output: My mobile number is 7873923408
       return 0;
   }
   ```
2. **Backspace (`\b`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello \b\b\b\b\b\bHi Geeks"; // Output: Hi Geeks
       return 0;
   }
   ```
3. **New Line (`\n`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello\nGeeksforGeeks"; // Output: Hello\nGeeksforGeeks
       return 0;
   }
   ```
4. **Horizontal Tab (`\t`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello \t GFG"; // Output: Hello      GFG
       return 0;
   }
   ```
5. **Vertical Tab (`\v`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello friends\vWelcome to GFG"; // Output: Hello friends\n           Welcome to GFG
       return 0;
   }
   ```
6. **Carriage Return (`\r`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello   Geeks \rGeeksfor"; // Output: GeeksforGeeks
       return 0;
   }
   ```
7. **Backslash (`\`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello\\GFG"; // Output: Hello\GFG
       return 0;
   }
   ```
8. **Single and Double Quotes (`\'`, `\"`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "\' Hello Geeks\n\" Hello Geeks"; // Output: ' Hello Geeks\n" Hello Geeks
       return 0;
   }
   ```
9. **Question Mark (`\?`)**:
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "\?\?!"; // Output: ??!
       return 0;
   }
   ```
10. **Octal Number (`\ooo`)**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        char* s = "A\072\065"; // Octal 072 = :, 065 = 5
        cout << s; // Output: A:5
        return 0;
    }
    ```
11. **Hexadecimal Number (`\xhh`)**:
    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        char* s = "B\x4a"; // Hex 4a = J
        cout << s; // Output: BJ
        return 0;
    }
    ```

---

### Integration with Previous Notes

#### Connection to Data Types and Variables
- **Input/Output with Variables**:
  - `cin` and `cout` work with variables of specific data types (e.g., `int`, `string`, `float`).
  - Type safety ensures input matches the variable’s type to prevent errors.
  - Example: Using `cin` to store user input in an `int` variable ensures only integer input is valid.
- **Escape Sequences in Strings**:
  - Escape sequences are used within `string` or `char` variables to format output.
  - Example: A `string` variable can include `\n` for line breaks when output via `cout`.

#### Connection to Constants
- **Constants in I/O**:
  - Constants (e.g., `const int maxAttempts = 3;`) can be output using `cout` or used to validate `cin` input.
  - Example: A constant like `const float pi = 3.14159;` can be displayed with formatting controlled by escape sequences.
- **Escape Sequences as Constants**:
  - Escape sequences like `\n` or `\t` are constant values within strings, ensuring consistent formatting.

#### Connection to Type Inference
- **Type Inference in I/O**:
  - `auto` can simplify variable declarations for I/O operations.
  - Example: `auto input = 0; cin >> input;` deduces `input` as `int`.
- **Escape Sequences with Inferred Types**:
  - `auto` can be used for variables holding strings with escape sequences.
  - Example: `auto str = "Hello\nWorld";` deduces `str` as `string`.

---

### Summary
- **Input/Output**:
  - **Streams**: `cin` (input), `cout` (output), `cerr` (unbuffered errors), and `clog` (buffered errors) handle data flow.
  - **Operators**: `<<` for output, `>>` for input.
  - **Limitations**: `cin` stops at whitespace for strings; type mismatches cause errors.
- **Escape Sequences**:
  - Special characters (e.g., `\n`, `\t`, `\a`) control formatting or represent special symbols.
  - Behavior may vary by compiler for some sequences (e.g., `\a`, `\v`).
- **Best Practices**:
  - Use `cin` and `cout` for basic I/O, ensuring type safety.
  - Use escape sequences for formatted output (e.g., newlines, tabs).
  - Leverage `cerr` for immediate error reporting and `clog` for buffered error logging.
