# **Arrays in C++**

### Overview
- **Definition**: A collection of elements of the same data type stored in contiguous memory locations, accessible via indices.
- **Purpose**: Stores multiple values under a single name, enabling efficient data management.
- **Key Features**: Fixed size, zero-based indexing, contiguous memory, and pointer arithmetic support.

### Creating an Array
- **Syntax**:
  ```cpp
  data_type array_name[size];
  ```
  - `data_type`: Type of elements (e.g., `int`, `char`).
  - `size`: Number of elements (fixed at declaration).
- **Example**:
  ```cpp
  int arr[5]; // Array of 5 integers
  ```

### Initializing an Array
- **Full Initialization**:
  - Assign values using curly braces `{}`.
  - **Example**:
    ```cpp
    int arr[5] = {2, 4, 8, 12, 16};
    ```
- **Partial Initialization**:
  - Fewer values than size; remaining elements are zero-initialized.
  - **Example**:
    ```cpp
    int arr[5] = {2, 4, 8}; // arr = {2, 4, 8, 0, 0}
    ```
- **Omitted Size**:
  - Size inferred from initializer list.
  - **Example**:
    ```cpp
    int arr[] = {2, 4, 8, 12, 16}; // Size = 5
    ```
- **Zero Initialization**:
  - Initialize all elements to 0.
  - **Example**:
    ```cpp
    int arr[5] = {0}; // arr = {0, 0, 0, 0, 0}
    ```
- **Note**: Values must match the array’s data type; non-zero single-value initialization is not supported.

### Accessing Array Elements
- **Syntax**:
  ```cpp
  array_name[index];
  ```
  - `index`: Integer from `0` to `size - 1`.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[] = {2, 4, 8, 12, 16};
      cout << arr[3] << " "; // Output: 12
      cout << arr[0]; // Output: 2
      return 0;
  }
  ```
- **Note**: Invalid indices (negative or ≥ size) cause undefined behavior (e.g., segmentation fault).

### Updating Array Elements
- **Syntax**:
  ```cpp
  array_name[index] = value;
  ```
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[] = {2, 4, 8, 12, 16};
      arr[0] = 90;
      cout << arr[0]; // Output: 90
      return 0;
  }
  ```

### Traversing an Array
- **Definition**: Visiting each element sequentially, typically using a loop.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[5] = {2, 4, 8, 12, 16};
      for (int i = 0; i < 5; i++) {
          cout << arr[i] << " "; // Output: 2 4 8 12 16
      }
      return 0;
  }
  ```
- **Other Methods**: Range-based for loops, `std::for_each`, etc. (refer to external resources for details).

### Size of an Array
- **Definition**: Number of elements an array can store.
- **Calculation**:
  - Use `sizeof` operator: `sizeof(array) / sizeof(array[0])`.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      char arr[] = {'a', 'b', 'c', 'd', 'f'};
      cout << "Size of arr[0]: " << sizeof(arr[0]) << endl; // 1
      cout << "Size of arr: " << sizeof(arr) << endl; // 5
      cout << "Length of an array: " << sizeof(arr) / sizeof(arr[0]); // 5
      return 0;
  }
  ```

### Arrays and Pointers
- **Relationship**: Array name is a constant pointer to the first element’s address.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[5];
      cout << arr << endl; // Address of first element
      cout << &arr[0]; // Same address
      return 0;
  }
  ```
  - **Output** (example addresses):
    ```
    0x7ffd57920530
    0x7ffd57920530
    ```
- **Pointer Arithmetic**:
  - Access elements using pointer to the first element.
  - **Example**:
    ```cpp
    #include <iostream>
    using namespace std;

    int main() {
        int arr[] = {2, 4, 8, 12, 16};
        int* ptr = arr;
        for (int i = 0; i < 5; i++) {
            cout << *(ptr + i) << " "; // Output: 2 4 8 12 16
        }
        return 0;
    }
    ```

### Passing Arrays to Functions
- **Mechanism**: Arrays decay to a pointer to the first element; size must be passed separately.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void printArray(int arr[], int n) {
      for (int i = 0; i < n; i++) {
          cout << arr[i] << " ";
      }
  }

  int main() {
      int arr[] = {2, 4, 8, 12, 16};
      int n = sizeof(arr) / sizeof(arr[0]);
      printArray(arr, n); // Output: 2 4 8 12 16
      return 0;
  }
  ```

### Properties of Arrays
- Same data type for all elements.
- Contiguous memory allocation.
- Zero-based indexing (`0` to `size - 1`).
- Fixed size after declaration.
- Size in bytes via `sizeof(array)`.
- Element size via `sizeof(array[0])` or adjacent address subtraction.
- Supports multiple dimensions.

### Array Practice Problems
- Print Array in Reverse
- Count Zeros in an Array
- Search an Element
- Find First Repeating Element
- Sum of All Elements
- Count Elements Smaller Than X
- Find Largest Element

---

## Multidimensional Arrays in C++

### Overview
- **Definition**: Arrays with more than one dimension, growing in multiple directions (e.g., 2D for rows/columns, 3D for depth/rows/columns).
- **Common Types**: 2D (table-like), 3D (cuboid-like).
- **Complexity**: Operations grow exponentially with dimensions.

### Syntax
- **General Form**:
  ```cpp
  data_type array_name[s1][s2]...[sn];
  ```
  - `s1, s2, ..., sn`: Sizes of each dimension.

### Size of Multidimensional Arrays
- **Total Elements**: Product of dimension sizes (e.g., `s1 * s2 * ... * sn`).
- **Size in Bytes**: `total_elements * sizeof(data_type)` or `sizeof(array)`.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[2][4];
      cout << sizeof(arr) << " bytes"; // Output: 32 bytes (2 * 4 * 4)
      return 0;
  }
  ```

### Two-Dimensional (2D) Arrays

#### Overview
- **Definition**: Organized as rows and columns, visualized as a table or grid.
- **Syntax**:
  ```cpp
  data_type array_name[rows][columns];
  ```

#### Creating a 2D Array
- **Example**:
  ```cpp
  int arr[2][4]; // 2 rows, 4 columns
  ```

#### Initializing a 2D Array
- **Nested Braces**:
  ```cpp
  int arr[2][4] = {{0, 1, 2, 3}, {4, 5, 6, 7}};
  ```
- **Sequential**:
  ```cpp
  int arr[2][4] = {0, 1, 2, 3, 4, 5, 6, 7};
  ```
- **Zero Initialization**:
  ```cpp
  int arr[2][4] = {0}; // All elements set to 0
  ```
- **Note**: Number of values must not exceed total elements (`rows * columns`).

#### Accessing and Updating Elements
- **Syntax**:
  ```cpp
  array_name[i][j]; // Access element at row i, column j
  array_name[i][j] = new_value; // Update element
  ```
  - Indices: `0 ≤ i < rows`, `0 ≤ j < columns`.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[2][4] = {0, 1, 2, 3, 4, 5, 6, 7};
      cout << arr[0][2] << endl; // 2
      cout << arr[1][0] << endl; // 4
      arr[0][2] = 22;
      arr[1][0] = 99;
      cout << arr[0][2] << endl; // 22
      cout << arr[1][0]; // 99
      return 0;
  }
  ```

#### Traversing a 2D Array
- **Method**: Use nested loops (outer for rows, inner for columns).
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[2][4] = {0, 1, 2, 3, 4, 5, 6, 7};
      for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 4; j++) {
              cout << arr[i][j] << " ";
          }
          cout << endl;
      }
      return 0;
  }
  ```
  - **Output**:
    ```
    0 1 2 3
    4 5 6 7
    ```

#### Passing a 2D Array to a Function
- **Syntax**: Specify column size in function signature.
  ```cpp
  void function_name(data_type array[rows][columns]);
  ```
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void print2DArray(int arr[2][3]) {
      for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 3; j++) {
              cout << arr[i][j] << " ";
          }
          cout << endl;
      }
  }

  int main() {
      int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};
      print2DArray(arr);
      return 0;
  }
  ```
  - **Output**:
    ```
    1 2 3
    4 5 6
    ```

### Three-Dimensional (3D) Arrays

#### Overview
- **Definition**: Organized as depth, rows, and columns, visualized as stacked 2D arrays.
- **Syntax**:
  ```cpp
  data_type array_name[depth][rows][columns];
  ```

#### Creating a 3D Array
- **Example**:
  ```cpp
  int arr[2][2][3]; // 2 layers, 2 rows, 3 columns
  ```

#### Initializing a 3D Array
- **Nested Braces**:
  ```cpp
  int arr[2][2][3] = {{{0, 1, 2}, {3, 4, 5}}, {{6, 7, 8}, {9, 10, 11}}};
  ```
- **Sequential**:
  ```cpp
  int arr[2][2][3] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
  ```
- **Zero Initialization**:
  ```cpp
  int arr[2][2][3] = {0}; // All elements set to 0
  ```

#### Accessing and Updating Elements
- **Syntax**:
  ```cpp
  array_name[i][j][k]; // Access element at depth i, row j, column k
  array_name[i][j][k] = new_value; // Update element
  ```
  - Indices: `0 ≤ i < depth`, `0 ≤ j < rows`, `0 ≤ k < columns`.
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[2][2][3] = {{{0, 1, 2}, {3, 4, 5}}, {{6, 7, 8}, {9, 10, 11}}};
      cout << arr[0][1][2] << endl; // 5
      cout << arr[1][0][1] << endl; // 7
      arr[0][1][2] = 22;
      arr[1][0][1] = 99;
      cout << arr[0][1][2] << endl; // 22
      cout << arr[1][0][1]; // 99
      return 0;
  }
  ```

#### Traversing a 3D Array
- **Method**: Use three nested loops (depth, rows, columns).
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  int main() {
      int arr[2][2][3] = {{{0, 1, 2}, {3, 4, 5}}, {{6, 7, 8}, {9, 10, 11}}};
      for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 2; j++) {
              for (int k = 0; k < 3; k++) {
                  cout << arr[i][j][k] << " ";
              }
              cout << endl;
          }
      }
      return 0;
  }
  ```
  - **Output**:
    ```
    0 1 2
    3 4 5
    6 7 8
    9 10 11
    ```

#### Passing a 3D Array to a Function
- **Syntax**: Specify sizes of second and third dimensions.
  ```cpp
  void function_name(data_type array[depth][rows][columns]);
  ```
- **Example**:
  ```cpp
  #include <iostream>
  using namespace std;

  void print3DArray(int arr[2][3][4]) {
      for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 3; j++) {
              for (int k = 0; k < 4; k++) {
                  cout << arr[i][j][k] << " ";
              }
              cout << endl;
          }
      }
  }

  int main() {
      int arr[2][3][4] = {{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}},
                          {{13, 14, 15, 16}, {17, 18, 19, 20}, {21, 22, 23, 24}}};
      print3DArray(arr);
      return 0;
  }
  ```
  - **Output**:
    ```
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16
    17 18 19 20
    21 22 23 24
    ```

---

### Integration with C++ Concepts

#### Connection to Data Types
- Arrays store elements of the same data type (e.g., `int`, `char`).
- Multidimensional arrays use the same data type across all dimensions.

#### Connection to Variables
- Arrays are variables holding multiple elements.
- Array name acts as a constant pointer to the first element.

#### Connection to Input/Output
- Arrays use `cout` to print elements and `cin` to read values.
- Multidimensional arrays often format output with newlines (`\n`) for readability.

#### Connection to Loops
- Loops (e.g., `for`) are essential for traversing arrays (1D: single loop, 2D: nested loops, 3D: triple-nested loops).
- Range-based for loops can simplify 1D array traversal.

#### Connection to Pointers
- Array name is a constant pointer to the first element.
- Pointer arithmetic enables array element access (e.g., `*(arr + i)`).
- Multidimensional arrays use pointer arithmetic for accessing elements (e.g., `arr[i][j]`).

#### Connection to Functions
- Arrays are passed to functions as pointers, requiring size parameters for 1D arrays.
- Multidimensional arrays require dimension sizes (except first) in function signatures.

#### Connection to Memory Addressing
- Arrays use contiguous memory, with each element at a predictable address.
- Size of elements and total array size are calculated using `sizeof`.

---

### Summary
- **Arrays**:
  - Store elements of the same type in contiguous memory.
  - Created with `data_type array_name[size]`.
  - Initialized fully, partially, or with zeros.
  - Accessed/updated via zero-based indices.
  - Traversed using loops or pointer arithmetic.
  - Size calculated with `sizeof(array) / sizeof(array[0])`.
  - Passed to functions as pointers with size parameter.
- **Multidimensional Arrays**:
  - Extend arrays to multiple dimensions (e.g., 2D for rows/columns, 3D for depth/rows/columns).
  - Declared with multiple size specifiers (e.g., `int arr[2][4]`).
  - Initialized with nested or sequential lists.
  - Accessed/updated with multiple indices (e.g., `arr[i][j][k]`).
  - Traversed with nested loops (one per dimension).
  - Passed to functions with dimension sizes specified.
- **Properties**:
  - Contiguous memory, zero-based indexing, fixed size.
  - Arrays decay to pointers; multidimensional arrays require dimension sizes.
- **Best Practices**:
  - Ensure indices are within bounds to avoid undefined behavior.
  - Pass array size to functions to prevent errors.
  - Use nested braces for clear multidimensional array initialization.
  - Leverage pointer arithmetic for efficient access when needed.
