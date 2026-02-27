## 1. What is Object-Oriented Programming (OOP)?

![OOP](https://assets.bytebytego.com/diagrams/0197-4-fundamental-pillars-of-object-oriented-programming.png)

### Concepts

Object-Oriented Programming (OOP) is a programming paradigm where we design programs using **objects and classes** instead of just functions and procedures.

In OOP:

- A **class** is a blueprint.
- An **object** is a real-world instance of that blueprint.
- Data and functions that operate on that data are bundled together.

Main goal of OOP:

- Model real-world entities
- Improve code reusability
- Improve maintainability
- Improve modularity

Four Pillars of OOP:

1. Encapsulation – Binding data and methods together.
2. Abstraction – Hiding internal implementation.
3. Inheritance – Reusing existing class properties.
4. Polymorphism – Same interface, different behavior.

Why OOP is used:

- Large systems become easier to manage.
- Code becomes modular.
- Changes in one class don’t break entire system.
- Real-world modeling becomes easier.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

// Class definition
class Car {
private:
    // Data members (state)
    string brand;
    int speed;

public:
    // Constructor to initialize object
    Car(string b, int s) {
        brand = b;
        speed = s;
    }

    // Member function (behavior)
    void drive() {
        cout << brand << " is driving at " << speed << " km/h" << endl;
    }
};

int main() {

    // Creating object of class Car
    Car c1("BMW", 120);

    // Calling method using object
    c1.drive();

    return 0;
}
```

---

### Interview Ready Answer (Easy Language)

Object-Oriented Programming is a programming style where we organize code using classes and objects.

Instead of writing only functions, we create classes that contain both data and methods. This helps us model real-world entities like Car, Student, BankAccount, etc.

OOP is based on four main principles:

- Encapsulation – bundling data and methods together.
- Abstraction – hiding internal details.
- Inheritance – reusing code from another class.
- Polymorphism – same function behaving differently.

OOP improves modularity, reusability, and maintainability, which makes it suitable for large-scale software systems.

## 2. What is the difference between procedural and Object-Oriented programming?

### Concepts

Procedural Programming:

- Program is divided into functions.
- Focus is on procedures or functions.
- Data and functions are separate.
- Follows a top-down approach.
- Example languages: C.

Object-Oriented Programming:

- Program is divided into classes and objects.
- Focus is on objects (data + behavior).
- Data and functions are bundled together.
- Follows a bottom-up approach.
- Example languages: C++, Java.

Key Differences:

1. Structure
   Procedural → Functions
   OOP → Classes & Objects

2. Data Handling
   Procedural → Data is exposed and passed between functions.
   OOP → Data is protected inside classes using encapsulation.

3. Security
   Procedural → Less secure.
   OOP → More secure due to access modifiers.

4. Reusability
   Procedural → Limited reusability.
   OOP → Supports inheritance and polymorphism.

5. Real-world Modeling
   Procedural → Harder to model real-world entities.
   OOP → Easier to model real-world systems.

---

### Code Example (C++)

Procedural Style:

```cpp
#include <iostream>
using namespace std;

// Function working on data
void drive(string brand, int speed) {
    cout << brand << " is driving at " << speed << " km/h" << endl;
}

int main() {
    string brand = "BMW";
    int speed = 120;

    drive(brand, speed);

    return 0;
}
```

Object-Oriented Style:

```cpp
#include <iostream>
using namespace std;

class Car {
private:
    string brand;
    int speed;

public:
    Car(string b, int s) {
        brand = b;
        speed = s;
    }

    void drive() {
        cout << brand << " is driving at " << speed << " km/h" << endl;
    }
};

int main() {
    Car c1("BMW", 120);
    c1.drive();
    return 0;
}
```

---

### Interview Ready Answer (Easy Language)

Procedural programming is based on functions. Data and functions are separate, and functions operate on data passed to them. It follows a top-down approach.

Object-Oriented programming is based on classes and objects. Data and methods are bundled together inside classes. It follows a bottom-up approach.

OOP provides better security through encapsulation, supports code reuse using inheritance, and models real-world systems more naturally compared to procedural programming.

## 2.1 Concrete Class vs Abstract Class vs Virtual (C++ Concepts)

### Concepts

Let’s clear everything step by step.

In C++, confusion usually happens between:

- Concrete class
- Abstract class
- Virtual function
- Pure virtual function
- Interface (C++ style)

---

### 1. Concrete Class

Definition:

A normal class that has complete implementation and can be instantiated.

Meaning:

- You can create objects of it.
- All functions are implemented.

Example:

```cpp
#include <iostream>
using namespace std;

class Car {
public:
    void start() {
        cout << "Car started" << endl;
    }
};

int main() {
    Car c;      // Object allowed
    c.start();
}
```

Here:
Car is a concrete class.

---

### 2. Virtual Function

Definition:

A function declared using the keyword virtual in base class.

Purpose:

To enable runtime polymorphism.

Without virtual:
Function call is decided at compile time.

With virtual:
Function call is decided at runtime.

Example:

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* ptr = new Dog();
    ptr->sound();   // Calls Dog's sound (runtime decision)
}
```

Key:
Virtual enables dynamic binding.

---

### 3. Pure Virtual Function

Definition:

A virtual function with = 0.

Syntax:

```cpp
virtual void func() = 0;
```

Meaning:

- No implementation in base class.
- Derived class must implement it.

---

### 4. Abstract Class

Definition:

A class that contains at least one pure virtual function.

Rules:

- Cannot create object.
- Used as base class.
- Enforces derived classes to implement certain functions.

Example:

```cpp
#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() = 0;   // Pure virtual function
};

class Rectangle : public Shape {
private:
    double length, width;

public:
    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    double area() override {
        return length * width;
    }
};

int main() {

    // Shape s;   // ERROR: cannot create object of abstract class

    Rectangle r(10, 5);
    cout << r.area() << endl;
}
```

Here:
Shape is abstract class.
Rectangle is concrete class.

---

### 5. Interface in C++ (Concept)

C++ does not have keyword "interface" like Java.

But we simulate interface by:

- All functions are pure virtual.
- No data members.
- Usually only public functions.

Example:

```cpp
class IPrinter {
public:
    virtual void print() = 0;
};
```

This behaves like an interface.

---

#### Clear Mental Model

Think like this:

Concrete class
→ Fully implemented
→ Object allowed

Abstract class
→ At least one pure virtual function
→ Object NOT allowed

Virtual function
→ Enables runtime polymorphism

Pure virtual function
→ Forces derived class to implement

Interface (C++ style)
→ Abstract class with only pure virtual functions

---

### Interview Ready Answer (Easy Language)

A concrete class is a normal class with full implementation, and we can create objects of it.

A virtual function is used to enable runtime polymorphism, meaning the function call is decided at runtime using dynamic binding.

A pure virtual function is declared using = 0 and has no implementation in the base class.

A class that contains at least one pure virtual function is called an abstract class. We cannot create objects of abstract classes.

In C++, interfaces are implemented using abstract classes that contain only pure virtual functions.

Simple summary:

Virtual → runtime polymorphism
Pure virtual → forces implementation
Abstract class → cannot instantiate
Concrete class → can instantiate

## 3. What is encapsulation?

### Concepts

Encapsulation means **binding data and methods together inside a class** and **restricting direct access to the internal data**.

It is also called **data hiding**.

Main idea:

- Variables (data) should not be accessed directly from outside.
- Access should be controlled using public methods.

In C++, we achieve encapsulation using:

- Access specifiers:
  - private
  - protected
  - public

- Getter and Setter functions

Why encapsulation is important:

1. Protects data from unauthorized access.
2. Prevents accidental modification.
3. Improves maintainability.
4. Makes code more secure and modular.

Real-world example:

Think of a bank account.
You cannot directly change your balance.
You must use deposit() or withdraw() methods.

That is encapsulation.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class BankAccount {
private:
    // Private data member (cannot be accessed directly)
    double balance;

public:
    // Constructor
    BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    // Setter method (controlled modification)
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // Getter method (controlled access)
    double getBalance() {
        return balance;
    }
};

int main() {

    BankAccount acc(1000);

    // acc.balance = 5000;  // ERROR: cannot access private member

    acc.deposit(500);

    cout << "Current Balance: " << acc.getBalance() << endl;

    return 0;
}
```

---

### Interview Ready Answer (Easy Language)

Encapsulation is the concept of wrapping data and methods together inside a class and restricting direct access to the data.

In C++, we achieve encapsulation using private variables and public methods. The data is hidden from outside, and it can only be accessed through controlled methods like getters and setters.

This improves security, prevents accidental modification, and makes the system more maintainable.

In short, encapsulation means data hiding with controlled access.

## 4. What is polymorphism? Explain overriding and overloading.

### Concepts

Polymorphism means **“many forms”**.

In OOP, polymorphism means:

> Same function name, different behavior.

In C++, polymorphism is of two types:

### 1. Compile-Time Polymorphism (Static Polymorphism)

Achieved using:

- Function Overloading
- Operator Overloading

The function call is resolved at compile time.

### 2. Runtime Polymorphism (Dynamic Polymorphism)

Achieved using:

- Function Overriding
- Virtual functions

The function call is resolved at runtime using dynamic binding.

---

### Function Overloading

Definition:

Same function name but different parameter list (different type or number of parameters).

Rules:

- Must differ in parameter list.
- Return type alone cannot differentiate functions.

---

### Function Overriding

Definition:

Derived class provides a new implementation of a function that already exists in base class.

Rules:

- Same function signature.
- Base class function must be marked virtual.
- Happens through inheritance.

---

### Code Example (C++)

#### Function Overloading (Compile-Time)

```cpp
#include <iostream>
using namespace std;

class Calculator {
public:
    // Function 1
    int add(int a, int b) {
        return a + b;
    }

    // Function 2 (same name, different parameters)
    double add(double a, double b) {
        return a + b;
    }
};

int main() {

    Calculator obj;

    cout << obj.add(5, 3) << endl;       // Calls int version
    cout << obj.add(5.5, 2.3) << endl;   // Calls double version

    return 0;
}
```

---

#### Function Overriding (Runtime)

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal makes sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {

    Animal* ptr;
    Dog obj;

    ptr = &obj;

    // Runtime polymorphism
    ptr->sound();   // Calls Dog's sound()

    return 0;
}
```

---

### Interview Ready Answer (Easy Language)

Polymorphism means one function name having multiple behaviors.

In C++, there are two types:

1. Compile-time polymorphism – achieved using function overloading. The decision is made at compile time.
2. Runtime polymorphism – achieved using function overriding and virtual functions. The decision is made at runtime.

Function overloading means same function name but different parameters.

Function overriding means derived class provides its own version of a base class function, and it works through inheritance and virtual functions.

Polymorphism improves flexibility and extensibility of code.

## 5. What is inheritance? Name some types of inheritance.

### Concepts

Inheritance is an OOP concept where one class (derived class) acquires the properties and behaviors of another class (base class).

It allows code reuse and establishes a relationship between classes.

In simple words:

> A child class can reuse and extend the features of a parent class.

Syntax in C++:

```cpp
class Derived : access_specifier Base {
    // additional members
};
```

Why inheritance is used:

- Code reuse
- Logical hierarchy
- Method overriding
- Runtime polymorphism

---

### Types of Inheritance in C++

1. Single Inheritance
   One derived class inherits from one base class.

2. Multiple Inheritance
   One derived class inherits from more than one base class.

3. Multilevel Inheritance
   A class is derived from a class which is already derived from another class.

4. Hierarchical Inheritance
   Multiple classes inherit from a single base class.

5. Hybrid Inheritance
   Combination of two or more types of inheritance.

---

### Code Example (C++)

#### Single Inheritance Example

```cpp id="rq7n2k"
#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    void eat() {
        cout << "Animal is eating" << endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking" << endl;
    }
};

int main() {

    Dog d;

    // Inherited method
    d.eat();

    // Own method
    d.bark();

    return 0;
}
```

Output:
Animal is eating
Dog is barking

---

#### Multiple Inheritance Example

```cpp id="k9x3lm"
#include <iostream>
using namespace std;

class Father {
public:
    void showFather() {
        cout << "Father class" << endl;
    }
};

class Mother {
public:
    void showMother() {
        cout << "Mother class" << endl;
    }
};

// Inheriting from two classes
class Child : public Father, public Mother {
};

int main() {

    Child c;
    c.showFather();
    c.showMother();

    return 0;
}
```

---

### Interview Ready Answer (Easy Language)

Inheritance is a mechanism in OOP where one class acquires the properties and behaviors of another class.

It helps in code reuse and creates a hierarchical relationship between classes.

In C++, inheritance is implemented using the colon operator with an access specifier.

There are five main types of inheritance:

- Single
- Multiple
- Multilevel
- Hierarchical
- Hybrid

Inheritance is important because it enables polymorphism and reduces code duplication.

## 6. What is abstraction? Name some abstraction techniques.

### Concepts

Abstraction means **hiding implementation details and showing only essential features**.

Main idea:

> User should know what an object does, not how it does it.

Real-world example:

When you drive a car:

- You use steering, brake, accelerator.
- You don’t know internal engine working.

That is abstraction.

Difference from Encapsulation:

- Encapsulation → Hides data using access control.
- Abstraction → Hides internal logic and shows only required functionality.

---

### Abstraction Techniques in C++

1. Using Abstract Classes
2. Using Pure Virtual Functions
3. Using Interfaces (via pure virtual functions)
4. Using Access Specifiers (public interface, private implementation)

---

### 1. Abstract Class in C++

A class that contains at least one pure virtual function.

Pure virtual function syntax:

```cpp
virtual void functionName() = 0;
```

Such a class cannot be instantiated.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
    // Pure virtual function
    virtual double area() = 0;
};

// Derived class
class Rectangle : public Shape {
private:
    double length;
    double width;

public:
    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    // Providing implementation
    double area() override {
        return length * width;
    }
};

int main() {

    Shape* s;
    Rectangle r(10, 5);

    s = &r;

    cout << "Area: " << s->area() << endl;

    return 0;
}
```

Output:
Area: 50

Here:

- User calls area().
- User does not know internal calculation.
- That is abstraction.

---

### Interview Ready Answer (Easy Language)

Abstraction is the concept of hiding internal implementation details and showing only necessary features to the user.

In C++, abstraction is mainly achieved using abstract classes and pure virtual functions.

An abstract class contains at least one pure virtual function and cannot be instantiated. The derived class provides the implementation.

Abstraction improves security, reduces complexity, and makes systems easier to maintain.

In simple words, abstraction means showing what an object does, not how it does it.

## 7. What is a class in OOP?

### Concepts

A class is a **blueprint or template** used to create objects.

It defines:

- Data members (variables → state)
- Member functions (methods → behavior)

A class does not occupy memory until an object is created.

Think of it like:

- Class → Design of a house
- Object → Actual constructed house

In C++, a class contains:

- Access specifiers (private, public, protected)
- Data members
- Member functions
- Constructors / Destructors

General Structure:

```cpp
class ClassName {
private:
    // data members

public:
    // member functions
};
```

Key Points:

- Class groups related data and functions.
- Improves modularity.
- Supports encapsulation.
- Helps in abstraction.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

// Class definition
class Student {
private:
    string name;
    int age;

public:
    // Constructor
    Student(string n, int a) {
        name = n;
        age = a;
    }

    // Member function
    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {

    // Creating object of class Student
    Student s1("Rahul", 20);

    // Calling method
    s1.display();

    return 0;
}
```

Output:
Name: Rahul
Age: 20

Here:

- Student is a class.
- s1 is an object.
- Class defines structure.
- Object uses that structure.

---

### Interview Ready Answer (Easy Language)

A class is a user-defined data type in OOP that acts as a blueprint for creating objects.

It contains data members and member functions that define the state and behavior of objects.

In C++, a class helps implement encapsulation by keeping data private and providing public methods to access it.

In simple words, a class defines what an object will look like and what it can do.

## 8. What is an object in OOP?

### Concepts

An object is an **instance of a class**.

It represents a real-world entity and contains:

- State (data members)
- Behavior (member functions)

If class is a blueprint,
then object is the real implementation created from that blueprint.

Important points:

- Object occupies memory.
- Each object has its own copy of data members.
- Multiple objects can be created from one class.

Example:

Class → Car
Objects → BMW, Audi, Tesla

Each car has:

- Different color
- Different speed
  But same structure.

Memory concept:

- Class → No memory allocated.
- Object → Memory allocated when created.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int speed;

    void drive() {
        cout << brand << " is driving at " << speed << " km/h" << endl;
    }
};

int main() {

    // Creating object
    Car c1;

    // Assigning values to object data members
    c1.brand = "BMW";
    c1.speed = 120;

    // Calling member function using object
    c1.drive();

    return 0;
}
```

Output:
BMW is driving at 120 km/h

Here:

- Car is a class.
- c1 is an object.
- c1 stores actual data.
- c1 can call class functions.

---

### Interview Ready Answer (Easy Language)

An object is an instance of a class.

It represents a real-world entity and contains actual data and behavior defined by the class.

Memory is allocated when an object is created, and each object has its own copy of data members.

In simple words, a class is a blueprint, and an object is the real thing created from that blueprint.

## 9. How do access specifiers work and what are they typically?

### Concepts

Access specifiers define **who can access the members (data and functions) of a class**.

In C++, there are three main access specifiers:

1. `private`
2. `protected`
3. `public`

They control visibility and help in implementing encapsulation.

---

### 1. private

- Members are accessible only inside the same class.
- Not accessible outside the class.
- Not directly accessible in derived class.

Default access specifier in class is `private`.

Used for:

- Data hiding
- Security

---

### 2. public

- Members are accessible from anywhere.
- Accessible outside the class using object.
- Accessible in derived class.

Used for:

- Interface methods
- Public APIs

---

### 3. protected

- Accessible inside the class.
- Accessible in derived class.
- Not accessible outside using object.

Used when:

- You want child classes to access data,
- But restrict outside access.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Person {
private:
    int salary;   // Only inside class

protected:
    int age;      // Inside class + derived class

public:
    string name;  // Accessible everywhere

    Person() {
        salary = 50000;
        age = 30;
        name = "Rahul";
    }

    void showSalary() {
        cout << "Salary: " << salary << endl;
    }
};

class Employee : public Person {
public:
    void showAge() {
        // Accessible because age is protected
        cout << "Age: " << age << endl;
    }
};

int main() {

    Person p;

    // p.salary;   // ERROR: private
    // p.age;      // ERROR: protected

    cout << p.name << endl;  // OK: public
    p.showSalary();          // OK: public method

    Employee e;
    e.showAge();             // OK: protected accessible in derived

    return 0;
}
```

---

### How They Work Internally

Compiler checks access at compile time.

If you try to access a private or protected member incorrectly,
you get a compilation error.

Access specifiers enforce encapsulation.

---

### Interview Ready Answer (Easy Language)

Access specifiers control the visibility of class members.

In C++, there are three:

- private → Accessible only inside the class.
- protected → Accessible inside the class and derived classes.
- public → Accessible everywhere.

They help implement encapsulation by protecting data from unauthorized access.

By default, members of a class are private.

In short, access specifiers define who can access what inside a class.

## 10. Name some ways to overload a method.

### Concepts

Method overloading means:

> Same function name but different parameter list.

It is an example of **compile-time polymorphism**.

In C++, we can overload a method in the following ways:

---

### 1. Changing the Number of Parameters

Same function name, but different number of arguments.

Example:

- add(int a, int b)
- add(int a, int b, int c)

---

### 2. Changing the Type of Parameters

Same function name, same number of parameters, but different data types.

Example:

- add(int a, int b)
- add(double a, double b)

---

### 3. Changing the Order of Parameters (if types differ)

Same function name, same number of parameters, but different order of types.

Example:

- display(int a, double b)
- display(double a, int b)

---

Important Rule:

Return type alone cannot differentiate overloaded functions.

This is invalid:

```cpp
int add(int a, int b);
double add(int a, int b);   // ERROR
```

Because compiler decides based on parameters, not return type.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Calculator {
public:

    // 1. Different number of parameters
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    // 2. Different type of parameters
    double add(double a, double b) {
        return a + b;
    }

    // 3. Different order of parameters
    void display(int a, double b) {
        cout << "int, double version" << endl;
    }

    void display(double a, int b) {
        cout << "double, int version" << endl;
    }
};

int main() {

    Calculator obj;

    cout << obj.add(2, 3) << endl;          // 5
    cout << obj.add(2, 3, 4) << endl;       // 9
    cout << obj.add(2.5, 3.5) << endl;      // 6.0

    obj.display(5, 3.2);   // int, double version
    obj.display(3.2, 5);   // double, int version

    return 0;
}
```

---

### Interview Ready Answer (Easy Language)

Method overloading means defining multiple functions with the same name but different parameter lists.

In C++, we can overload a method by:

1. Changing the number of parameters.
2. Changing the data types of parameters.
3. Changing the order of parameters (if types are different).

Return type alone cannot be used for overloading.

Overloading is resolved at compile time, so it is called compile-time polymorphism.

## 11. What is cohesion in OOP?

### Concepts

Cohesion refers to **how closely related and focused the responsibilities of a single class are**.

In simple words:

> Cohesion measures how well the methods of a class work together to perform a single task.

High cohesion is good.  
Low cohesion is bad.

---

### High Cohesion

- Class has one clear responsibility.
- All methods are related to that responsibility.
- Easy to maintain.
- Easy to test.
- Follows Single Responsibility Principle (SRP).

Example:

A `BankAccount` class that only handles:

- deposit()
- withdraw()
- getBalance()

All methods are related to account management.

---

### Low Cohesion

- Class handles multiple unrelated tasks.
- Hard to maintain.
- Changes in one feature may break others.
- Hard to test.

Example:

A `Manager` class that:

- Manages employees
- Sends emails
- Handles database
- Prints reports
- Calculates salary

Too many unrelated responsibilities.

---

### Code Example (C++)

#### High Cohesion Example

```cpp
#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount(double b) {
        balance = b;
    }

    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }

    double getBalance() {
        return balance;
    }
};
```

Here:
All methods are related to bank account behavior.
This is high cohesion.

---

#### Low Cohesion Example

```cpp
#include <iostream>
using namespace std;

class Utility {
public:
    void calculateSalary() {
        cout << "Calculating salary" << endl;
    }

    void sendEmail() {
        cout << "Sending email" << endl;
    }

    void printReport() {
        cout << "Printing report" << endl;
    }
};
```

This class mixes unrelated responsibilities.
This is low cohesion.

---

### Interview Ready Answer (Easy Language)

Cohesion refers to how closely related the responsibilities of a class are.

If a class has a single, well-defined responsibility and all its methods are related to that responsibility, it has high cohesion.

High cohesion is desirable because it improves readability, maintainability, and testability.

Low cohesion occurs when a class performs many unrelated tasks, which makes the system harder to manage.

In short, cohesion means how focused and related a class is internally.

## 23. What is multiple inheritance and what are some of its disadvantages?

### Concepts

Multiple inheritance means:

A class inherits from more than one base class.

Syntax:

```cpp
class Derived : public Base1, public Base2 {
};
```

Advantages:

- Code reuse from multiple classes.
- Combine multiple behaviors.

Disadvantages:

1. Diamond problem.
2. Increased complexity.
3. Ambiguity in method resolution.
4. Tight coupling.
5. Harder maintenance.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class A {
public:
    void show() {
        cout << "Class A" << endl;
    }
};

class B {
public:
    void display() {
        cout << "Class B" << endl;
    }
};

class C : public A, public B {
};

int main() {
    C obj;
    obj.show();
    obj.display();
}
```

---

### Interview Ready Answer (Easy Language)

Multiple inheritance means a class inherits from more than one base class.

While it allows combining behaviors, it increases complexity and can cause ambiguity issues like the diamond problem.

It should be used carefully.

---

## 24. Can you explain the ‘diamond problem’ in multiple inheritance?

### Concepts

Diamond problem occurs when:

Two classes inherit from same base class,
and another class inherits from both of them.

Structure:

```
    A
   / \
  B   C
   \ /
    D
```

Now D has two copies of A.

This causes ambiguity.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class A {
public:
    void show() {
        cout << "A" << endl;
    }
};

class B : public A {};
class C : public A {};

class D : public B, public C {};

int main() {
    D obj;

    // obj.show();  // ERROR: ambiguous
}
```

Solution:

Use virtual inheritance.

```cpp
class B : virtual public A {};
class C : virtual public A {};
```

---

### Interview Ready Answer (Easy Language)

The diamond problem occurs in multiple inheritance when two classes inherit from the same base class, and another class inherits from both of them.

This creates ambiguity because the derived class gets two copies of the base class.

In C++, it is solved using virtual inheritance.

---

## 25. How does OOP languages support polymorphism under the hood?

### Concepts

Polymorphism works using:

1. Function overloading → Compile-time binding.
2. Virtual functions → Runtime binding.

Runtime polymorphism is implemented using:

- vtable (Virtual Table)
- Dynamic binding
- Base class pointer/reference

When a class has virtual functions:

- Compiler creates a vtable.
- Object stores pointer to vtable.
- Function call resolved at runtime.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    virtual void show() {
        cout << "Base" << endl;
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived" << endl;
    }
};

int main() {
    Base* ptr = new Derived();
    ptr->show();   // Runtime decision
}
```

---

### Interview Ready Answer (Easy Language)

Polymorphism is supported through compile-time and runtime mechanisms.

Compile-time polymorphism uses function overloading.

Runtime polymorphism uses virtual functions and dynamic binding. Internally, C++ uses a virtual table (vtable) to resolve function calls at runtime based on the actual object.

---

## 26. What are generics, and how can they be useful in OOP?

### Concepts

Generics allow writing:

- Type-independent code.
- Reusable components.

In C++, generics are implemented using templates.

Benefits:

- Code reusability.
- Type safety.
- Avoid duplication.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

template <typename T>
class Calculator {
public:
    T add(T a, T b) {
        return a + b;
    }
};

int main() {
    Calculator<int> intCalc;
    cout << intCalc.add(2, 3) << endl;

    Calculator<double> doubleCalc;
    cout << doubleCalc.add(2.5, 3.5) << endl;
}
```

---

### Interview Ready Answer (Easy Language)

Generics allow writing type-independent code. In C++, generics are implemented using templates.

Templates enable creating classes and functions that work with different data types without rewriting code.

This improves reusability and type safety.

---

## 27. Explain the concept of object composition and its benefits.

### Concepts

Composition means:

A class contains an object of another class.

Represents strong has-a relationship.

Lifetime dependency:
Contained object is destroyed when container is destroyed.

Benefits:

- Low coupling.
- Better flexibility.
- Reusable components.
- Composition over inheritance principle.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Engine {
public:
    void start() {
        cout << "Engine started" << endl;
    }
};

class Car {
private:
    Engine engine;   // Strong ownership

public:
    void startCar() {
        engine.start();
    }
};

int main() {
    Car c;
    c.startCar();
}
```

---

### Interview Ready Answer (Easy Language)

Object composition means a class contains another class as a member.

It represents a strong has-a relationship where the contained object's lifetime depends on the container.

Composition provides better flexibility and lower coupling compared to inheritance.

## 28. What is Liskov Substitution Principle (LSP)? Provide some examples of violation and adherence.

### Concepts

Liskov Substitution Principle states:

> A derived class should be substitutable for its base class without altering correctness of the program.

Meaning:

If class B is derived from class A,
we should be able to use B wherever A is expected.

If replacing base class with derived class breaks behavior, then LSP is violated.

---

### LSP Violation Example

```cpp
#include <iostream>
using namespace std;

class Rectangle {
protected:
    int width, height;

public:
    virtual void setWidth(int w) {
        width = w;
    }

    virtual void setHeight(int h) {
        height = h;
    }

    int getArea() {
        return width * height;
    }
};

class Square : public Rectangle {
public:
    void setWidth(int w) override {
        width = height = w;
    }

    void setHeight(int h) override {
        width = height = h;
    }
};
```

Here:

Square changes expected behavior of Rectangle.
This violates LSP.

---

### Interview Ready Answer (Easy Language)

Liskov Substitution Principle states that a derived class should be usable in place of its base class without changing the correctness of the program.

If replacing a base class object with a derived class object breaks logic, then LSP is violated.

---

## 29. What is the dependency inversion principle?

### Concepts

Dependency Inversion Principle (DIP):

> High-level modules should not depend on low-level modules. Both should depend on abstractions.

Also:

> Abstractions should not depend on details. Details should depend on abstractions.

Goal:

- Reduce coupling.
- Increase flexibility.

---

### Code Example (C++)

Without DIP:

```cpp
class Keyboard {
};

class Computer {
private:
    Keyboard keyboard;
};
```

Computer directly depends on Keyboard.

With DIP:

```cpp
class IInputDevice {
public:
    virtual void connect() = 0;
};

class Keyboard : public IInputDevice {
public:
    void connect() override {}
};

class Computer {
private:
    IInputDevice* device;

public:
    Computer(IInputDevice* d) {
        device = d;
    }
};
```

Now Computer depends on abstraction.

---

### Interview Ready Answer (Easy Language)

Dependency Inversion Principle states that high-level classes should depend on abstractions, not concrete implementations.

This reduces coupling and makes the system flexible and extensible.

---

## 30. How can the open/closed principle guide object-oriented design?

### Concepts

Open/Closed Principle (OCP):

> Classes should be open for extension but closed for modification.

Meaning:

- You should be able to extend behavior.
- Without modifying existing code.

Usually achieved using:

- Inheritance
- Interfaces
- Polymorphism

---

### Code Example (C++)

```cpp
class Shape {
public:
    virtual double area() = 0;
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) {
        radius = r;
    }

    double area() override {
        return 3.14 * radius * radius;
    }
};
```

To add new shape:

Just create new derived class.
No modification needed in existing code.

---

### Interview Ready Answer (Easy Language)

Open/Closed Principle means software entities should be open for extension but closed for modification.

We should add new functionality by extending code rather than modifying existing code.

---

## 31. Describe how the Interface Segregation Principle affects system design.

### Concepts

Interface Segregation Principle (ISP):

> Clients should not be forced to depend on methods they do not use.

Meaning:

Instead of one large interface, create smaller specific interfaces.

---

### Bad Design

```cpp
class IMachine {
public:
    virtual void print() = 0;
    virtual void scan() = 0;
};
```

If simple printer cannot scan, ISP is violated.

---

### Good Design

```cpp
class IPrinter {
public:
    virtual void print() = 0;
};

class IScanner {
public:
    virtual void scan() = 0;
};
```

Now classes implement only required interface.

---

### Interview Ready Answer (Easy Language)

Interface Segregation Principle states that classes should not be forced to implement methods they do not use.

Instead of large interfaces, we create smaller, specific interfaces.

---

## 32. What is a mixin, and how does it differ from traditional inheritance?

### Concepts

Mixin is a class that provides additional functionality to other classes.

It is used to add behavior without forming a strict is-a relationship.

Difference:

Inheritance → Strong is-a relationship
Mixin → Adds functionality, not necessarily logical hierarchy

C++ implements mixin using:

- Multiple inheritance
- Templates

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Logger {
public:
    void log(string msg) {
        cout << "Log: " << msg << endl;
    }
};

class User : public Logger {
public:
    void createUser() {
        log("User created");
    }
};

int main() {
    User u;
    u.createUser();
}
```

Here Logger acts like a mixin.

---

### Interview Ready Answer (Easy Language)

A mixin is a class that provides additional functionality to other classes without forming a strict is-a relationship.

It is used to reuse behavior across multiple classes.

Unlike traditional inheritance, mixins focus on adding functionality rather than modeling a hierarchy.

## 32.1 What are SOLID Principles?

![SOLID Principles](https://substackcdn.com/image/fetch/$s_!nRrX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7136a64a-5300-4eed-852f-cdaf6cf73c6a_3000x3900.png)

### Concepts

SOLID is an acronym for five object-oriented design principles that improve:

- Maintainability
- Scalability
- Flexibility
- Testability

They help write clean and robust OOP code.

SOLID stands for:

S – Single Responsibility Principle (SRP)
O – Open/Closed Principle (OCP)
L – Liskov Substitution Principle (LSP)
I – Interface Segregation Principle (ISP)
D – Dependency Inversion Principle (DIP)

---

### 1. Single Responsibility Principle (SRP)

A class should have only one reason to change.

Meaning:

- One class → One responsibility.

Bad:
A class handling database + email + business logic.

Good:
Separate classes for each responsibility.

---

### 2. Open/Closed Principle (OCP)

Classes should be open for extension but closed for modification.

Meaning:

- Add new behavior by extending.
- Do not modify existing tested code.

Usually achieved using inheritance and polymorphism.

---

### 3. Liskov Substitution Principle (LSP)

Derived class should be replaceable with base class without breaking functionality.

If derived class changes expected behavior → LSP violation.

---

### 4. Interface Segregation Principle (ISP)

Clients should not depend on methods they do not use.

Prefer small, focused interfaces instead of one large interface.

---

### 5. Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules.

Both should depend on abstractions.

Depend on interface, not concrete class.

---

### Code Example (C++ – Demonstrating DIP + OCP)

```cpp
#include <iostream>
using namespace std;

// Abstraction
class IShape {
public:
    virtual double area() = 0;
};

// Concrete implementation
class Circle : public IShape {
private:
    double radius;

public:
    Circle(double r) {
        radius = r;
    }

    double area() override {
        return 3.14 * radius * radius;
    }
};

// High-level module depends on abstraction
class AreaCalculator {
public:
    double calculate(IShape* shape) {
        return shape->area();
    }
};

int main() {
    Circle c(5);
    AreaCalculator calc;

    cout << calc.calculate(&c) << endl;
}
```

Here:

- OCP → New shapes can be added without modifying AreaCalculator.
- DIP → AreaCalculator depends on IShape, not Circle.

---

### Interview Ready Answer (Easy Language)

SOLID principles are five design principles that help create maintainable and scalable object-oriented systems.

S – Single Responsibility: One class, one responsibility.
O – Open/Closed: Extend behavior without modifying existing code.
L – Liskov Substitution: Derived class should behave like base class.
I – Interface Segregation: Prefer small, specific interfaces.
D – Dependency Inversion: Depend on abstractions, not concrete classes.

Following SOLID makes code flexible, reusable, and easy to maintain.

## 33. How would you refactor a class that has too many responsibilities?

### Concepts

If a class has too many responsibilities:

- It violates Single Responsibility Principle (SRP).
- It becomes hard to maintain and test.
- Changes in one feature may break others.

Refactoring Strategy:

1. Identify separate responsibilities.
2. Split into multiple smaller classes.
3. Use composition to connect them.
4. Move unrelated methods to dedicated classes.

---

### Code Example (C++)

Bad Design:

```cpp
class Manager {
public:
    void calculateSalary() {}
    void sendEmail() {}
    void saveToDatabase() {}
};
```

Refactored Design:

```cpp
class SalaryCalculator {
public:
    void calculateSalary() {}
};

class EmailService {
public:
    void sendEmail() {}
};

class DatabaseService {
public:
    void saveToDatabase() {}
};
```

---

### Interview Ready Answer (Easy Language)

If a class has too many responsibilities, I would first identify separate concerns and split them into smaller focused classes.

This follows the Single Responsibility Principle and improves maintainability, readability, and testability.

---

## 34. Describe a singleton pattern and discuss its pros and cons.

### Concepts

Singleton Pattern ensures:

- Only one instance of a class exists.
- Global access point to that instance.

Used for:

- Logger
- Configuration manager
- Database connection

---

### Code Example (Thread-safe C++11)

```cpp
#include <iostream>
using namespace std;

class Singleton {
private:
    Singleton() {}

public:
    static Singleton& getInstance() {
        static Singleton instance;  // Thread-safe in C++11
        return instance;
    }

    void show() {
        cout << "Singleton instance" << endl;
    }
};

int main() {
    Singleton& s = Singleton::getInstance();
    s.show();
}
```

---

### Pros

- Controlled access.
- Only one instance.
- Useful for shared resources.

### Cons

- Hard to test.
- Global state.
- Can increase coupling.

---

### Interview Ready Answer

Singleton ensures only one instance of a class exists and provides a global access point.

It is useful for shared resources like logging or configuration but may introduce tight coupling and testing difficulties.

---

## 35. What is a factory method, and when should it be used?

### Concepts

Factory Method Pattern:

- Creates objects without exposing creation logic.
- Returns object through base class pointer/reference.

Used when:

- Object creation logic is complex.
- Need flexibility in object type creation.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Vehicle {
public:
    virtual void drive() = 0;
};

class Car : public Vehicle {
public:
    void drive() override {
        cout << "Driving Car" << endl;
    }
};

class Bike : public Vehicle {
public:
    void drive() override {
        cout << "Driving Bike" << endl;
    }
};

class VehicleFactory {
public:
    static Vehicle* createVehicle(string type) {
        if (type == "car") return new Car();
        if (type == "bike") return new Bike();
        return nullptr;
    }
};

int main() {
    Vehicle* v = VehicleFactory::createVehicle("car");
    v->drive();
    delete v;
}
```

---

### Interview Ready Answer

Factory method is a creational design pattern that creates objects without exposing the object creation logic.

It is useful when object creation is complex or when the exact type of object is determined at runtime.

---

## 36. Explain the builder pattern and where you might apply it.

### Concepts

Builder Pattern:

- Used to construct complex objects step-by-step.
- Separates object construction from representation.

Useful when:

- Object has many optional parameters.
- Constructor becomes too complex.

---

### Code Example (C++ Simplified)

```cpp
#include <iostream>
using namespace std;

class Computer {
private:
    string CPU;
    string RAM;

public:
    void setCPU(string cpu) { CPU = cpu; }
    void setRAM(string ram) { RAM = ram; }

    void show() {
        cout << "CPU: " << CPU << ", RAM: " << RAM << endl;
    }
};

int main() {
    Computer pc;
    pc.setCPU("i7");
    pc.setRAM("16GB");
    pc.show();
}
```

---

### Interview Ready Answer

Builder pattern is used to construct complex objects step by step.

It separates object creation logic from its representation and is useful when objects have many optional parameters.

---

## 37. What is the prototype pattern, and how does it relate to OOP?

### Concepts

Prototype Pattern:

- Creates new objects by copying existing object.
- Avoids expensive object creation.

Uses:

- Clone method.
- Copy constructor.

---

### Code Example (C++)

```cpp
#include <iostream>
using namespace std;

class Prototype {
public:
    int value;

    Prototype(int v) {
        value = v;
    }

    Prototype(const Prototype& obj) {
        value = obj.value;
    }
};

int main() {
    Prototype p1(10);
    Prototype p2 = p1;   // Copy constructor

    cout << p2.value << endl;
}
```

---

### Interview Ready Answer

Prototype pattern creates new objects by copying existing ones instead of creating from scratch.

In C++, it is implemented using copy constructors or clone functions.

It is useful when object creation is expensive.
