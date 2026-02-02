# References in C++
## First, What is a Reference?

👉 A **reference** is just another name (alias) for an existing variable.
When you modify the reference, you are modifying the original variable directly.

Example:

```cpp
int x = 10;
int& ref = x;   // ref is another name for x
ref = 20;       // changes x
cout << x;      // 20
```

---

## Code Walkthrough

### 1. Reference as an Alias

```cpp
int x = 10;
int& ref = x; 

cout << x << endl;   // 10
cout << ref << endl; // 10

ref = 20;  
cout << x << endl;   // 20
cout << ref << endl; // 20
```

✅ Both `x` and `ref` point to the same memory. Changing one changes the other.

---

### 2. Passing by Reference

```cpp
void passByReference(int &ref) {
    ref += 10;  // modifies original variable
}

int byRefVar = 30;
passByReference(byRefVar);
cout << byRefVar << endl; // 40
```

✅ Function directly modifies the original variable (no copy made).

---

### 3. Returning a Reference

```cpp
int& returnRef(int &ref1, int &ref2) {
    return (ref1 > ref2) ? ref1 : ref2;
}

int a = 50, b = 60;
int &maxValu = returnRef(a, b); // maxValu = reference to b

maxValu += 10; // modifies b
cout << a << endl; // 50
cout << b << endl; // 70
```

✅ The function returns a reference to the bigger variable. We then change it **through the reference**.

---

### 4. References in Loops

```cpp
vector<int> vec = {1, 2, 3, 4, 5};

for (int &num : vec) {  // num is reference to each element
    num *= 2;           // modifies elements directly
}

for (const int &num : vec) {
    cout << num << " "; // 2 4 6 8 10
}
```

✅ Without references, the loop would just modify a copy, not the original array.

---

## Limitations of References

* Must be initialized when declared.
* Can’t be `NULL`.
* Can’t be reassigned to another variable after initialization.

👉 That’s why **pointers** are needed in some cases (like linked lists, trees).

---

## Advantages

* Simpler syntax than pointers (no `*` or `->` needed).
* Safer, avoids wild/null issues.
* Required in some cases (copy constructor, operator overloading).

---

## Final Program Output (step by step)

```
10
10
20
20
Before passByReference, byRefVar: 30
After passByReference, byRefVar: 40
returingRefVarA: 50
returingRefVarB: 70
2 4 6 8 10
```


# Type of Values in C++

## Easy Definitions

* **Lvalue (Locator value)** → jiska **memory address hota hai**. Example: variables (`x`, `y`).
* **Rvalue (Right value)** → jiska **memory address nahi hota** (temporary value). Example: `5+3`, literals.
* **Prvalue (Pure Rvalue)** → ek **temporary value** jo ek expression ka result hota hai. Example: `10`, `a+5`.
* **Xvalue (Expiring value)** → ek object jo apni life ke end pe hai aur uska resource **move** kiya ja sakta hai. Example: `std::move(a)`.
* **Glvalue (Generalized Lvalue)** → common word jo **lvalue + xvalue** dono ko include karta hai (matlab jiska memory address ho).

---

## Tumhara Code Explained

```cpp
int lvalue = 10;  
lvalue = 20; // ✅ valid
cout<<"Value of lvalue: "<<lvalue<<endl;
```

👉 `lvalue` ek **variable** hai → iska memory address hota hai, isliye yeh **lvalue** hai.

---

```cpp
int rvalue = 5+3;  
int z = rvalue;  
z = 10; // ✅ valid
cout<<"Value of rvalue: "<<rvalue<<endl;
```

👉 `5+3` ek temporary value hai → iska apna memory address nahi hota → **rvalue** hai.
👉 Tumne ise `rvalue` variable me store kiya, ab woh ek lvalue ban gaya (kyunki variable ka address hota hai).

---

```cpp
int prvalue = 10;  
int b = prvalue + 5;  
```

👉 `10` ek **prvalue** hai (pure rvalue literal).
👉 `prvalue + 5` bhi ek temporary expression hai → **prvalue**.

---

```cpp
int xvalue = 28;  
int &&rvalue_ref = std::move(lvalue);
```

👉 `std::move(lvalue)` ek **xvalue** hai, kyunki yeh batata hai ki `lvalue` ka resource **move** ho sakta hai.
👉 `rvalue_ref` ek **rvalue reference** hai jo is xvalue ko capture kar raha hai.

---

```cpp
int genvalue = 30;  
genvalue = 40;  
```

👉 `genvalue` ek variable hai → iska memory address hai → isliye **glvalue**.
👉 Actually `glvalue = lvalue + xvalue` ka union hota hai.

---

## Output of Your Code

Agar input-output samjhe bina run karo to yeh print karega:

```
Value of lvalue: 20
Value of rvalue: 8
Value of prvalue: 10
Value of b: 15
Value of xvalue: 28
Value of glvalue: 40
```

---

## Visually (Example)

* `int a = 10;` → **a is Lvalue** (memory address hai), `10 is Prvalue` (temporary literal).
* `int b = a + 5;` → `(a+5)` is **Prvalue**.
* `int &&c = std::move(a);` → `std::move(a)` is **Xvalue**.
* `a` or `c` dono **Glvalue** ke examples hai (kyunki memory location identifiable hai).

