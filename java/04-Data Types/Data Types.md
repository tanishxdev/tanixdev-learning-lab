# JAVA DATA TYPES (FULL MASTER NOTE)

---

# 1. CONCEPT (What + Why + Mental Model)

## What are Data Types?

> Data Type = **type of data a variable can store**

---

## Example

```java
int age = 20;
```

- `int` → data type
- `age` → identifier
- `20` → value

---

## Why Data Types Exist?

- Memory manage karne ke liye
- Type safety (wrong assignment prevent)

```java
int x = "Hello";   // ❌ ERROR
```

---

## Mental Model

Think like:

- Variable = **box**
- Data type = **box ka type**

---

## Real Life Analogy

| Data Type | Example           |
| --------- | ----------------- |
| int       | number box        |
| char      | single letter box |
| boolean   | true/false switch |
| String    | text box          |

---

# 2. TYPES OF DATA TYPES

---

## 2.1 Primitive Data Types

> Store **actual values directly in memory**

---

### List of 8 Primitive Types

| Type    | Size    | Use              |
| ------- | ------- | ---------------- |
| boolean | JVM     | true/false       |
| byte    | 1 byte  | small numbers    |
| short   | 2 bytes | medium numbers   |
| int     | 4 bytes | default integer  |
| long    | 8 bytes | large numbers    |
| float   | 4 bytes | decimals         |
| double  | 8 bytes | precise decimals |
| char    | 2 bytes | single character |

---

## 2.2 Non-Primitive (Reference)

> Store **reference (address), not actual value**

---

Examples:

- String
- Array
- Class
- Object
- Interface

---

# 3. PRIMITIVE DATA TYPES (DEEP)

---

## 3.1 boolean

```java
boolean isActive = true;
```

- Only: true / false

---

## 3.2 byte

```java
byte age = 25;
```

- Range: -128 to 127

---

## 3.3 short

```java
short num = 2000;
```

---

## 3.4 int (MOST USED)

```java
int salary = 50000;
```

---

## 3.5 long

```java
long population = 7800000000L; // L important
```

---

## 3.6 float

```java
float pi = 3.14f; // f important
```

---

## 3.7 double (DEFAULT DECIMAL)

```java
double value = 3.14159;
```

---

## 3.8 char

```java
char grade = 'A';
```

---

# 4. NON-PRIMITIVE TYPES

---

## 4.1 String

```java
String name = "Tanish";
```

- Immutable (change nahi hota)

---

## 4.2 Array

```java
int[] arr = {1,2,3};
```

---

## 4.3 Class & Object

```java
class Car {
    String model;
}
```

---

## 4.4 Interface

- Contract define karta hai

---

# 5. CODE (2 VERSIONS)

---

## V1 — Basic Example

```java
int a = 10;
double b = 3.14;
char c = 'A';
boolean flag = true;
```

---

## V2 — Full Program (with explanation)

```java
// File: DataTypeDemo.java

public class DataTypeDemo {

    public static void main(String[] args) {

        // Integer type
        int age = 20;

        // Long type (L required)
        long population = 7800000000L;

        // Float type (f required)
        float pi = 3.14f;

        // Double type
        double preciseValue = 3.1415926535;

        // Character type
        char grade = 'A';

        // Boolean type
        boolean isJavaFun = true;

        // String (non-primitive)
        String name = "Tanish";

        // Printing all values
        System.out.println(age);
        System.out.println(population);
        System.out.println(pi);
        System.out.println(preciseValue);
        System.out.println(grade);
        System.out.println(isJavaFun);
        System.out.println(name);
    }
}
```

---

# 6. DRY RUN / OUTPUT

```text
20
7800000000
3.14
3.1415926535
A
true
Tanish
```

---

# 7. CORE DIFFERENCE (VERY IMPORTANT)

---

## Primitive vs Non-Primitive

| Feature  | Primitive | Non-Primitive |
| -------- | --------- | ------------- |
| Stores   | Value     | Reference     |
| Size     | Fixed     | Dynamic       |
| Speed    | Fast      | Slower        |
| Examples | int, char | String, Array |

---

# 8. IMPORTANT NOTES (INTERVIEW GOLD)

---

## Point 1

```java
float x = 3.14;   ❌
float x = 3.14f;  ✅
```

---

## Point 2

```java
long x = 10000000000;   ❌
long x = 10000000000L;  ✅
```

---

## Point 3

- `double` is default for decimals

---

## Point 4

- `char` uses Unicode (2 bytes)

---

# 9. COMMON MISTAKES

---

### Mistake 1

```java
int x = "10";   ❌
```

---

### Mistake 2

```java
char c = "A";   ❌
```

---

### Mistake 3

```java
float f = 3.14;   ❌
```

---

# 10. INTERVIEW QUESTIONS

---

### Basic

1. What are data types?
2. Difference between primitive and non-primitive?

---

### Intermediate

3. Why `float` needs `f`?
4. Why `long` needs `L`?

---

### Advanced

5. Memory difference between primitive & reference?
6. Why String is not primitive?

---

# 11. MINI PROBLEM

---

### Task

Create program:

- Store:
  - name (String)
  - age (int)
  - marks (float)
  - grade (char)
  - pass (boolean)

- Print all values

---

# 12. SUMMARY (1-MIN REVISION)

- Data type = type of data
- Two types:
  - Primitive (value)
  - Non-Primitive (reference)

- Most used:
  - int, double, String

---
