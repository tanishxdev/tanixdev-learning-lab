# Lambda Expressions in C++:

#### 1. The Basics: Your First Lambda
Lambdas let you create inline functions without a name. Store one in a variable (`auto`), then call it like a function.

**Simple Explanation**: Here, we make a lambda that takes a number `x` and returns `x + x` (doubles it). Call it with 5, get 10!

**Code with Comments**:
```cpp
#include <iostream>
using namespace std;

int main() {
    // Define lambda: Takes int x, returns x + x (no name needed!)
    // Store in 'res' using auto - compiler figures out the type
    auto res = [](int x) {  // [] = empty capture (no outer vars yet)
        return x + x;  // Body: Double the input
    };
    
    // Call the lambda like a function
    cout << res(5);  // Passes 5, gets back 10
    
    return 0;
}
```

**Output**:
```
10
```

**Dry Run**:
1. Program starts: Lambda defined and stored in `res`.
2. Enter `main()`: Call `res(5)` → Lambda runs: `x=5`, computes `5+5=10`, returns 10.
3. `cout` prints 10.
4. End: Quick and nameless—done!

---

#### 2. Syntax Breakdown: The Blueprint
The full lambda recipe:
```cpp
[capture] (params) -> returnType { body; }
```
- **Capture**: How it grabs outer vars (more below).
- **Params**: Like function args, e.g., `(int x)`.
- **Return Type**: Often auto (compiler guesses), but specify if tricky (e.g., conditionals).
- **Body**: The code inside `{}`—ends with `return` if needed.
- **Semicolon**: Add `;` at the end if assigning to a var.

**Simple Explanation**: Compiler usually auto-detects return type (e.g., from `return x+y;`). Params work just like regular functions.

**Pro Tip**: Empty capture `[]` means no outer access—keeps it simple and safe.

---

#### 3. Capture Clause: Borrowing from Outside
Lambdas shine by "capturing" vars from the surrounding code (enclosing scope). Without capture, they're isolated.

**Ways to Capture**:
- `[]`: Nothing—local only.
- `[&]`: All by **reference** (changes affect original—careful!).
- `[=]`: All by **value** (copies—safe, but originals unchanged; use `mutable` to modify copies).
- `[a, &b]`: Mix—`a` by value, `b` by reference.

**Simple Explanation**: Reference (`&`) links to the real var (like a shortcut). Value (`=`) makes a photocopy. Fixes from discussions: The article's example had bugs (all used `&` by mistake). We'll use a corrected one with ints for clarity.

**Corrected Code with Comments** (Shows Differences):
```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 10;  // Outer var 1
    int b = 20;  // Outer var 2
    
    cout << "Before: a=" << a << ", b=" << b << endl;
    
    // 1. Capture ALL by REFERENCE [&] - changes originals!
    auto byRef = [&]() {  // No params, just modify
        a += 1;  // Affects real a
        b += 1;  // Affects real b
    };
    byRef();  // Run it
    cout << "After byRef: a=" << a << ", b=" << b << endl;
    
    // 2. Capture ALL by VALUE [=] - copies, originals safe (but mutable lets us change copy)
    auto byVal = [=]() mutable {  // mutable: Allow changing the copy
        a += 10;  // Changes copy only
        b += 10;
    };
    byVal();  // Run it
    cout << "After byVal: a=" << a << ", b=" << b << endl;  // Originals unchanged
    
    // 3. MIXED: a by VALUE (copy), b by REFERENCE (real)
    auto mixed = [a, &b]() mutable {  // a copied, b linked
        a += 100;  // Changes copy
        b += 100;  // Changes real b
    };
    mixed();  // Run it
    cout << "After mixed: a=" << a << ", b=" << b << endl;  // a original, b changed
    
    return 0;
}
```

**Output**:
```
Before: a=10, b=20
After byRef: a=11, b=21
After byVal: a=11, b=21
After mixed: a=11, b=121
```

**Dry Run**:
1. Start: `a=10`, `b=20`. Print "Before: a=10, b=20".
2. `byRef()`: Captures `&` → `a=10+1=11` (real), `b=20+1=21` (real). Print "After byRef: a=11, b=21".
3. `byVal()`: Captures `=` (copies: copy_a=11, copy_b=21) + mutable → copy_a=11+10=21, copy_b=21+10=31 (copies only). Originals stay 11/21. Print "After byVal: a=11, b=21".
4. `mixed()`: Captures `a` (copy=11), `&b` (real=21) + mutable → copy_a=11+100=111 (ignored), b=21+100=121 (real). Print "After mixed: a=11, b=121".
5. End: See how captures control changes? Reference for edits, value for safety!

**Note on Vectors (Article's Intent)**: For big things like vectors, `&` modifies the original list; `=` copies it (expensive—avoid for large data). Use `mutable` only with `=` if you wanna tweak the copy.

---

#### 4. Real Examples: Lambdas in Action with STL
Lambdas love STL (Standard Template Library) algorithms—like `sort` or `find_if`. Pass them as "callbacks" for custom logic.

##### a. Sort a Vector Descending
**Simple Explanation**: Default sort is ascending; lambda flips it to descending by saying "a > b".

**Code with Comments**:
```cpp
#include <iostream>
#include <vector>
#include <algorithm>  // For sort
using namespace std;

int main() {
    vector<int> v = {5, 1, 8, 3, 9, 2};  // Unsorted list
    
    // Sort with lambda comparator: Return true if a should come before b (descending)
    sort(v.begin(), v.end(), [](const int& a, const int& b) {  // Empty capture, params by ref for efficiency
        return a > b;  // If a bigger, put it first
    });
    
    // Print the sorted vector
    for (int x : v)
        cout << x << " ";
    
    return 0;
}
```

**Output**:
```
9 8 5 3 2 1
```

**Dry Run**:
1. Vector: {5,1,8,3,9,2}.
2. `sort()` calls lambda repeatedly: E.g., compare 5 and 1 → 5>1? Yes, so 5 before 1.
3. Bubbles largest (9) to front, then 8, etc. Final: {9,8,5,3,2,1}.
4. Loop prints each. End: Descending magic!

##### b. Find First Number Divisible by 3
**Simple Explanation**: `find_if` scans the list; lambda checks "is a % 3 == 0?".

**Code with Comments**:
```cpp
#include <iostream>
#include <vector>
#include <algorithm>  // For find_if
using namespace std;

int main() {
    vector<int> v = {5, 1, 8, 3, 9, 2};  // List to search
    
    // find_if: Returns iterator to first match, or end() if none
    auto it = find_if(v.begin(), v.end(), [](const int& a) {  // Lambda test: Div by 3?
        return a % 3 == 0;  // True if divisible
    });
    
    // Check and print
    if (it != v.end()) 
        cout << *it;  // Dereference to get value
    else 
        cout << "No such element";
    
    return 0;
}
```

**Output**:
```
3
```

**Dry Run**:
1. Vector: {5,1,8,3,9,2}.
2. `find_if` starts at begin():
   - 5 % 3 = 2 ≠0 → False.
   - 1 % 3 =1 ≠0 → False.
   - 8 % 3 =2 ≠0 → False.
   - 3 % 3 =0 → True! Iterator points here.
3. `it != end()` true → `*it` is 3, print it.
4. End: Stops at first match—efficient!

---

#### 5. Where Lambdas Rock: Real-World Apps
- **Inline Helpers**: Quick calcs without full functions.
- **STL Boost**: Custom sorts, filters (e.g., `for_each`, `transform`).
- **Callbacks**: For events or async (e.g., button clicks in GUIs).
- **Threads**: Pass tasks to `std::thread` without extra files.
- **Containers**: Custom comparators for `set`, `priority_queue`.

**Pro Tip**: Lambdas keep code tight—great for competitive coding. But for reuse? Stick to named functions.

---

### Wrapping Up
Lambdas = Compact power for one-off code. Start with empty `[]`, add captures as needed. Fixed the article's capture bugs for clarity—now it shows real differences!
