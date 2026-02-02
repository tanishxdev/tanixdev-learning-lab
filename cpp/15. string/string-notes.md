## Strings in C++

### Overview
- **Definition**: Strings in C++ are objects of the `std::string` class, defined in the `<string>` header, used to represent and manipulate sequences of characters.
- **Key Features**:
  - Automatic memory management (unlike C-style char arrays).
  - Dynamic resizing as characters are added or removed.
  - Rich set of built-in functions for manipulation (e.g., concatenation, searching, substring extraction).
- **Purpose**: Simplifies string handling compared to C-style character arrays.

### Syntax
- **Declaration**:
  ```cpp
  string str;
  ```
- **Initialization**:
  ```cpp
  string str = "text"; // Direct initialization
  string str("text");  // Constructor syntax
  ```

### Basic Operations
1. **Initialization**:
   - Assign characters at creation using `=` or constructor.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         cout << str; // Output: Hello Geeks
         return 0;
     }
     ```
2. **Accessing Characters**:
   - Use `[]` (index operator) or `.at()` function.
   - Time complexity: O(1).
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         cout << "First character: " << str[0] << endl; // H
         cout << "Fifth character: " << str[4] << endl; // o
         cout << "Character at index 6: " << str.at(6) << endl; // G
         return 0;
     }
     ```
3. **String Length**:
   - Use `size()` or `length()` (equivalent).
   - Time complexity: O(1).
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         cout << "Length using size(): " << str.size() << endl; // 11
         cout << "Length using length(): " << str.length() << endl; // 11
         return 0;
     }
     ```
4. **Concatenation**:
   - Use `+` operator (creates new string) or `append()` (modifies in place).
   - Time complexity: O(n + m), where n and m are string lengths.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str1 = "Hello";
         string str2 = " Geeks";
         string result1 = str1 + str2; // + operator
         cout << "Concatenation using +: " << result1 << endl; // Hello Geeks
         string result2 = str1;
         result2.append(str2); // append
         cout << "Concatenation using append(): " << result2 << endl; // Hello Geeks
         return 0;
     }
     ```
5. **Modifying Strings**:
   - **push_back(char)**: Adds a character to the end (O(1)).
   - **pop_back()**: Removes the last character (O(1)).
   - **insert(pos, str)**: Inserts string at position (O(n)).
   - **erase(pos, len)**: Removes substring (O(n)).
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         str.push_back('!'); // Hello Geeks!
         cout << "After push_back: " << str << endl;
         str.pop_back(); // Hello Geeks
         cout << "After pop_back: " << str << endl;
         str.insert(5, " C++"); // Hello C++ Geeks
         cout << "After insert: " << str << endl;
         str.erase(5, 4); // Hello Geeks
         cout << "After erase: " << str << endl;
         return 0;
     }
     ```
6. **Substring Extraction**:
   - Use `substr(pos, len)` to extract a substring.
   - Time complexity: O(len).
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         string sub1 = str.substr(0, 5); // Hello
         cout << "Substring 1: " << sub1 << endl;
         string sub2 = str.substr(6, 5); // Geeks
         cout << "Substring 2: " << sub2 << endl;
         return 0;
     }
     ```
7. **Searching**:
   - Use `find(str)` to locate a substring, returns index or `string::npos` if not found.
   - Time complexity: O(n * m), where n is string length, m is substring length.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         size_t pos = str.find("Geeks");
         if (pos < str.size()) {
             cout << "\"Geeks\" found at index: " << pos << endl; // 6
         }
         return 0;
     }
     ```
8. **Traversing Strings**:
   - Methods: Index-based loop, range-based for loop, or iterators.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str = "Hello Geeks";
         cout << "Using index: ";
         for (int i = 0; i < str.size(); i++) {
             cout << str[i]; // Hello Geeks
         }
         cout << endl;
         cout << "Using range-based for loop: ";
         for (char ch : str) {
             cout << ch; // Hello Geeks
         }
         cout << endl;
         cout << "Using iterator: ";
         for (auto it = str.begin(); it != str.end(); it++) {
             cout << *it; // Hello Geeks
         }
         cout << endl;
         return 0;
     }
     ```

### String Functions
- **Common Functions**:
  - `length()`, `size()`: Return string length.
  - `swap(str)`: Swaps contents with another string.
  - `resize(n)`: Resizes string to n characters.
  - `clear()`: Removes all characters.
  - `strncmp(str1, str2, n)`: Compares first n bytes of two strings.
  - `strncpy(dst, src, n)`: Copies n bytes from src to dst.
  - `strrchr(str, c)`: Finds last occurrence of character c.
  - `strcat(dst, src)`: Appends src to dst (C-style).
  - `find(str)`: Finds first occurrence of substring.
  - `replace(pos, len, str)`: Replaces substring with str.
  - `compare(str)`: Compares strings, returns integer.
  - `erase(pos, len)`: Removes substring.
  - `rfind(str)`: Finds last occurrence of substring.

---

## Array of Characters vs std::string in C++

### Array of Characters (C-style Strings)
- **Definition**: A sequence of characters stored in a `char` array, terminated by a null character (`'\0'`).
- **Syntax**:
  ```cpp
  char charArrayName[size];
  ```
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      char greeting[] = "Hello, Geek!";
      cout << greeting; // Output: Hello, Geek!
      return 0;
  }
  ```
- **Characteristics**:
  - **Memory Management**: Static, fixed size at declaration.
  - **Null-Termination**: Requires `'\0'` to mark end.
  - **Functionality**: Manual handling with C-style functions (e.g., `strcpy`, `strlen`).
  - **Ease of Use**: Error-prone, requires manual bounds checking.
  - **Compatibility**: Works in both C and C++.
  - **Portability**: Highly portable due to C compatibility.

### std::string in C++
- **Definition**: A class in the C++ Standard Template Library (STL) for dynamic string management.
- **Syntax**:
  ```cpp
  string stringName = "text";
  ```
- **Example**:
  ```cpp
  #include <iostream>
  #include <string>
  using namespace std;

  int main() {
      string greeting = "Hello, Geek!";
      cout << greeting << endl; // Hello, Geek!
      greeting += " How are you?";
      cout << greeting << endl; // Hello, Geek! How are you?
      cout << "Length: " << greeting.length() << endl; // 25
      return 0;
  }
  ```
- **Characteristics**:
  - **Memory Management**: Dynamic, resizes automatically.
  - **Null-Termination**: Internally managed, supports null-terminated representation.
  - **Functionality**: Rich set of member functions (e.g., `append`, `find`, `substr`).
  - **Ease of Use**: Intuitive, safer with built-in bounds checking.
  - **Compatibility**: C++-specific, not always compatible with C-style functions.
  - **Portability**: Standardized in C++ environments, less portable in C contexts.

### Differences
| Feature                | Char Array                          | std::string                         |
|------------------------|-------------------------------------|-------------------------------------|
| **Memory Management**  | Static, fixed size                 | Dynamic, resizes automatically      |
| **Null-Termination**   | Requires `'\0'`                   | Internally managed                  |
| **Functionality**      | Manual, C-style functions          | Rich STL member functions           |
| **Ease of Use**        | Error-prone, manual handling       | Intuitive, safer                    |
| **Compatibility**      | C and C++ compatible               | C++-specific                        |
| **Portability**        | Highly portable (C and C++)        | Limited to C++ environments         |

### Conclusion
- **Char Arrays**: Preferred for simplicity and C compatibility in low-level or performance-critical scenarios.
- **std::string**: Preferred for ease of use, safety, and dynamic resizing in modern C++ programming.

---

## getline (string) in C++

### Overview
- **Definition**: A standard library function in `<string>` to read a string or line from an input stream until a delimiter (default: newline `'\n'`) is encountered.
- **Purpose**: Reads entire lines, including spaces, unlike `cin >>` which stops at whitespace.

### Syntax
```cpp
getline(stream, str, delim);
```
- **Parameters**:
  - `stream`: Input stream (e.g., `cin`, `stringstream`).
  - `str`: `std::string` to store the input.
  - `delim` (optional): Delimiter character (default: `'\n'`).
- **Return Value**: Reference to the input stream.

### Examples
1. **Basic Input**:
   ```cpp
   #include <bits/stdc++.h>
   using namespace std;

   int main() {
       string name;
       getline(cin, name);
       cout << name; // Output: [user input, e.g., Geeks]
       return 0;
   }
   ```
2. **Space-Separated Input**:
   - `getline` reads entire line; `cin >>` stops at whitespace.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string str;
         getline(cin, str);
         cout << "Hello, " << str << " welcome to GFG !";
         // Input: Harsh Agarwal
         // Output: Hello, Harsh Agarwal welcome to GFG !
         return 0;
     }
     ```
3. **Tokenizing a String**:
   - Use with `stringstream` to split a string by a delimiter.
   - **Example**:
     ```cpp
     #include <bits/stdc++.h>
     using namespace std;

     int main() {
         string S, T;
         getline(cin, S); // Input: Hello Students, Welcome to GFG!
         stringstream X(S);
         while (getline(X, T, ' ')) {
             cout << T << endl;
         }
         // Output:
         // Hello
         // Students,
         // Welcome
         // to
         // GFG!
         return 0;
     }
     ```
4. **Newline Issue with cin**:
   - `cin >>` leaves a newline in the buffer, causing `getline` to read an empty line.
   - **Solution**: Use `cin.ignore()` to clear the buffer.
   - **Example**:
     ```cpp
     #include <iostream>
     #include <string>
     using namespace std;

     int main() {
         string name;
         int id;
         cout << "Please enter your id: ";
         cin >> id;
         cin.ignore(); // Clear newline
         cout << "Please enter your name: ";
         getline(cin, name);
         cout << "Your id: " << id << endl;
         cout << "Hello, " << name << " welcome to GfG !";
         // Input: 10 [Enter], Geek [Enter]
         // Output: Your id: 10
         //         Hello, Geek welcome to GfG !
         return 0;
     }
     ```

---

## String Functions in C++

### Overview
- **Definition**: The `std::string` class provides a rich set of member functions for string manipulation, unlike C-style strings which rely on manual handling or C functions.
- **Header**: Defined in `<string>`.

### Common String Functions
1. **String Length**:
   - `length()`, `size()`: Return number of characters (O(1)).
   - **Example**:
     ```cpp
     string text = "geeksforGeeks";
     cout << text.length(); // 13
     ```
2. **Accessing Characters**:
   - `[]`, `at(index)`: Access character at index (O(1)).
   - **Example**:
     ```cpp
     string str = "GEEKSFORGEEKS";
     cout << str.at(3); // K
     ```
3. **Concatenation**:
   - `+`: Combines strings, creates new string (O(n + m)).
   - `append(str)`: Adds str to end, modifies in place (O(n + m)).
   - **Example**:
     ```cpp
     string first = "Geeks";
     string last = "forGeeks";
     string full = first + " " + last; // Geeks forGeeks
     first.append(" forGeeks"); // Geeks forGeeks
     ```
4. **Comparison**:
   - `==`: Checks equality (O(n)).
   - `compare(str)`: Returns 0 (equal), >0 (str1 > str2), <0 (str1 < str2) (O(n)).
   - **Example**:
     ```cpp
     string str1 = "apple";
     string str2 = "banana";
     if (str1 == str2) cout << "Equal"; else cout << "Not equal"; // Not equal
     cout << str1.compare(str2); // < 0
     ```
5. **Substring**:
   - `substr(start, len)`: Extracts substring (O(len)).
   - **Example**:
     ```cpp
     string text = "Hello, World!";
     string sub = text.substr(7, 5); // World
     ```
6. **Searching**:
   - `find(var)`: Returns index of first occurrence or `string::npos` (O(n * m)).
   - **Example**:
     ```cpp
     string text = "C++ Programming";
     size_t pos = text.find("Programming"); // 4
     ```
7. **Modifying Strings**:
   - `insert(index, str)`: Inserts str at index (O(n)).
   - `replace(index, len, str)`: Replaces len characters from index with str (O(n)).
   - `erase(start, len)`: Removes len characters from start (O(n)).
   - **Example**:
     ```cpp
     string text = "I like dogs.";
     text.replace(7, 4, "cats"); // I like cats.
     text.insert(6, " black"); // I like black cats.
     text.erase(6, 6); // I like cats.
     ```
8. **Conversion to C-string**:
   - `c_str()`: Returns pointer to null-terminated char array (O(1)).
   - **Example**:
     ```cpp
     string str = "C++";
     const char* cstr = str.c_str(); // C++
     ```

### Comprehensive Example
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string greeting = "Hello, World!";
    cout << greeting << endl; // Hello, World!
    
    cout << "Enter your name: ";
    string name;
    cin >> name;
    cout << name << endl; // Geeks
    
    cout << greeting.length() << endl; // 13
    cout << greeting[0] << " " << greeting.at(1) << endl; // H e
    
    string first = "Geek", last = "Geeks";
    string full = first + " " + last; // Geek Geeks
    cout << full << endl;
    
    string base = "Hello";
    base.append(" World!"); // Hello World!
    cout << base << endl;
    
    string str1 = "apple", str2 = "banana";
    cout << (str1 == str2 ? "Equal" : "Not equal") << endl; // Not equal
    cout << (str1.compare(str2) < 0 ? "str1 before str2" : "str1 after str2") << endl; // str1 before str2
    
    string text = "Hello, World!";
    cout << text.substr(7, 5) << endl; // World
    
    string searchIn = "C++ Programming";
    size_t pos = searchIn.find("Programming");
    cout << (pos != string::npos ? "Found at " + to_string(pos) : "Not found") << endl; // Found at 4
    
    string modify = "I like dogs.";
    modify.replace(7, 4, "cats"); // I like cats.
    modify.insert(6, " black"); // I like black cats.
    modify.erase(6, 6); // I like cats.
    cout << modify << endl;
    
    const char* cstr = modify.c_str();
    cout << cstr << endl; // I like cats.
    return 0;
}
```

---

## Integration with Provided C++ Concepts

### Connection to Arrays
- **Char Arrays**:
  - C-style strings are arrays of `char` with a null terminator (`'\0'`).
  - Stored in contiguous memory (stack or heap).
  - **Example**: `char str[] = "Hello";` (stack, fixed size).
- **std::string**:
  - Internally manages a dynamic array of characters on the heap.
  - **Example**: `string str = "Hello";` (dynamic resizing).
- **Comparison**:
  - Arrays: Fixed size, manual management, error-prone.
  - `std::string`: Dynamic, automatic memory management, safer.
- **Memory Layout**:
  - Char arrays in stack (local) or data segment (global/static).
  - `std::string` data on heap, managed by the class.

### Connection to Multidimensional Arrays
- **Char Arrays**:
  - Can represent arrays of strings (e.g., `char arr[5][10]` for 5 strings of up to 9 characters).
  - **Example**:
    ```cpp
    char arr[2][10] = {"Hello", "World"};
    ```
- **std::string**:
  - Use `std::vector<std::string>` or `std::string` arrays for similar functionality.
  - **Example**:
    ```cpp
    string arr[2] = {"Hello", "World"};
    ```
- **Memory Layout**:
  - Multidimensional char arrays are contiguous (stack or heap).
  - `std::string` arrays store objects with pointers to heap-allocated data.

### Connection to References
- **std::string with References**:
  - References can alias `std::string` objects, useful in functions to avoid copying.
  - **Example**:
    ```cpp
    void modify(string& s) { s += " World"; }
    string str = "Hello";
    modify(str); // str = "Hello World"
    ```
- **Char Arrays with References**:
  - References to char arrays are less common but possible.
  - **Example**:
    ```cpp
    char arr[] = "Hello";
    char (&ref)[6] = arr;
    ```
- **Memory Layout**:
  - References alias memory in any segment (stack, heap, data).

### Connection to Value Types
- **Lvalues**:
  - `std::string` objects and char arrays are lvalues (have identifiable memory locations).
  - **Example**: `string str = "Hello";` (lvalue), `char arr[] = "Hello";` (lvalue).
- **Rvalues/Prvalues**:
  - String literals (`"Hello"`) are prvalues, used to initialize `std::string` or char arrays.
  - **Example**: `string str = "Hello";` (`"Hello"` is prvalue).
- **Xvalues**:
  - Move semantics with `std::string` (e.g., `std::move(str)`) create xvalues for efficient resource transfer.
  - **Example**:
    ```cpp
    string str = "Hello";
    string str2 = std::move(str); // str becomes empty
    ```
- **Glvalues**:
  - `std::string` objects and char arrays are glvalues (lvalues or xvalues).

### Connection to Memory Layout
- **Char Arrays**:
  - Stored in stack (local), data segment (global/static), or heap (dynamic).
  - **Example**: `char arr[] = "Hello";` (stack), `static char arr[] = "Hello";` (data segment).
- **std::string**:
  - Object on stack, but character data on heap.
  - **Example**: `string str = "Hello";` (object on stack, data on heap).
- **Memory Leaks**:
  - Char arrays on heap (e.g., `new char[10]`) require manual deletion.
  - `std::string` handles heap memory automatically, reducing leak risk.

### Connection to Dynamic Memory
- **Char Arrays**:
  - Dynamic allocation with `new char[size]` or `malloc`.
  - Requires `delete[]` or `free` to avoid leaks.
  - **Example**:
    ```cpp
    char* arr = new char[10];
    strcpy(arr, "Hello");
    delete[] arr;
    ```
- **std::string**:
  - Internally uses dynamic memory (`new`/`delete`) but managed automatically.
  - **Example**: `string str = "Hello";` (no manual deallocation needed).
- **Memory Leaks**:
  - Char arrays risk leaks if not deallocated.
  - `std::string` avoids leaks through automatic management.
- **getline**:
  - Reads into `std::string`, dynamically resizing as needed.
  - No manual memory management required, unlike char arrays.

### Connection to getline
- **std::string**:
  - `getline` reads into `std::string`, handling dynamic resizing.
  - **Example**: `getline(cin, str);` (reads entire line).
- **Char Arrays**:
  - Requires fixed-size buffer and manual handling (e.g., `fgets` in C).
  - **Example**:
    ```cpp
    char arr[100];
    cin.getline(arr, 100); // C-style alternative
    ```
- **Advantages of getline with std::string**:
  - No buffer size issues.
  - Safer and more flexible than char array input.

---

### Summary
- **Strings in C++**:
  - `std::string` is a dynamic, safe, STL class for character sequences.
  - Supports initialization, character access (`[]`, `at`), length (`size`, `length`), concatenation (`+`, `append`), modification (`push_back`, `pop_back`, `insert`, `erase`), substring extraction (`substr`), and searching (`find`).
  - Traversable via index, range-based for loop, or iterators.
- **Array of Characters vs std::string**:
  - **Char Arrays**: Static, null-terminated, C-compatible, error-prone.
  - **std::string**: Dynamic, safer, C++-specific, rich functionality.
- **getline**:
  - Reads lines into `std::string` from streams, handling spaces and dynamic resizing.
  - Requires `cin.ignore()` after `cin >>` to avoid newline issues.
  - Useful for tokenizing with `stringstream`.
- **String Functions**:
  - Comprehensive set for length, access, concatenation, comparison, searching, modification, and conversion (`c_str`).
  - Time complexities: O(1) for length/access, O(n + m) for concatenation/comparison, O(n * m) for searching, O(n) for modification, O(len) for substring.
- **Best Practices**:
  - Use `std::string` over char arrays for safety and ease.
  - Handle newline issues with `cin.ignore()` when mixing `cin >>` and `getline`.
  - Use `string::npos` to check `find` results.
  - Prefer `at()` over `[]` for bounds checking.
  - Use `std::string` with smart pointers or automatic management to avoid leaks.