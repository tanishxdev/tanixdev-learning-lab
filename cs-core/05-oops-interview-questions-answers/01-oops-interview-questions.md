# **Object-Oriented Programming (OOP) Interview Questions Sheet**

---

## **I. OOP FUNDAMENTALS**

### **1. Core OOP Concepts**

1. What is Object-Oriented Programming (OOP)?
2. What is the difference between procedural and Object-Oriented programming?
3. What is encapsulation?
4. What is polymorphism? Explain overriding and overloading.
5. What is inheritance? Name some types of inheritance.
6. What is an abstraction? Name some abstraction techniques.
7. What is a class in OOP?
8. What is an object in OOP?
9. How do access specifiers work and what are they typically?
10. Name some ways to overload a method.
11. What is cohesion in OOP?
12. What is coupling in OOP?

### **2. Class Relationships and Design**

13. What is a constructor and how is it used?
14. Describe the concept of destructor or finalizer in OOP.
15. Compare inheritance vs. mixin vs. composition.
16. Explain the concept of an interface and how it differs from an abstract class.
17. Can a class have multiple parents in a single-inheritance system?
18. How would you design a class to prevent it from being subclassed?
19. Explain the ‘is-a’ vs ‘has-a’ relationship in OOP.
20. Explain how aggregation relationship is represented in OOP.
21. What is method overriding, and what rules apply to it?
22. Describe the use of static methods and when they are appropriate.

---

## **II. ADVANCED OOP CONCEPTS**

### **3. Inheritance & Polymorphism**

23. What is multiple inheritance and what are some of its disadvantages?
24. Can you explain the ‘diamond problem’ in multiple inheritance?
25. How does OOP languages support polymorphism under the hood?
26. What are generics, and how can they be useful in OOP?

### **4. Composition & Design Principles**

27. Explain the concept of object composition and its benefits.
28. What is Liskov Substitution Principle (LSP)? Provide some examples of violation and adherence.
29. What is the dependency inversion principle?
30. How can the open/closed principle guide object-oriented design?
31. Describe how the Interface Segregation Principle affects system design.
32. What is a mixin, and how does it differ from traditional inheritance?

---

## **III. PRACTICAL USE AND PATTERNS**

### **5. Design Patterns**

33. How would you refactor a class that has too many responsibilities?
34. Describe a singleton pattern and discuss its pros and cons.
35. What is a factory method, and when should it be used?
36. Explain the builder pattern and where you might apply it.
37. What is the prototype pattern, and how does it relate to OOP?
38. When would you use the Adapter pattern?
39. Can you explain the use of the Decorator pattern?
40. Describe the Observer pattern and a scenario in which you might use it.
41. What are the advantages of using the Command pattern?
42. How does the Strategy pattern provide flexibility in objects?

### **6. OOP Best Practices**

43. What are some common OOP design anti-patterns?
44. How do you ensure that your objects are properly encapsulated?
45. Name some techniques for reducing coupling between classes.
46. How does immutability help in object-oriented design, and how can it be implemented?
47. What tools or techniques would you use to document an object-oriented design?
48. How do you address circular dependencies in an OOP system?
49. Explain how to apply unit testing to object-oriented code.
50. What strategies can be used to safely refactor legacy object-oriented code?
51. How can the principles of OOP help in achieving a modular and maintainable codebase?
52. How do you balance the use of OOP principles with performance considerations in a system design?

---

## **IV. KEY DIFFERENCES (COMPARISON QUESTIONS)**

1. **Procedural vs Object-Oriented Programming**
2. **Class vs Object**
3. **Inheritance vs Composition**
4. **Abstract Class vs Interface**
5. **Overloading vs Overriding**
6. **Static Method vs Instance Method**
7. **Encapsulation vs Abstraction**
8. **Cohesion vs Coupling**
9. **Aggregation vs Composition**
10. **Polymorphism: Compile-time vs Runtime**
11. **Shallow Copy vs Deep Copy**
12. **Singleton vs Static Class**
13. **Factory vs Builder Pattern**
14. **Adapter vs Decorator Pattern**
15. **Strategy vs State Pattern**

---

## **V. IMPORTANT PRINCIPLES & PATTERNS TO KNOW**

### **SOLID Principles:**

1. **Single Responsibility Principle (SRP)**
2. **Open/Closed Principle (OCP)**
3. **Liskov Substitution Principle (LSP)**
4. **Interface Segregation Principle (ISP)**
5. **Dependency Inversion Principle (DIP)**

### **Design Patterns:**

6. **Singleton Pattern**
7. **Factory Method Pattern**
8. **Abstract Factory Pattern**
9. **Builder Pattern**
10. **Prototype Pattern**
11. **Adapter Pattern**
12. **Decorator Pattern**
13. **Observer Pattern**
14. **Strategy Pattern**
15. **Command Pattern**

### **Concepts:**

16. **Encapsulation**
17. **Inheritance**
18. **Polymorphism**
19. **Abstraction**
20. **Composition over Inheritance**

---

## **VI. PRACTICAL PROBLEMS & SCENARIOS**

### **Implementation Questions:**

1. Implement a Singleton class (thread-safe).
2. Implement a Factory Method for creating different types of vehicles.
3. Implement a Builder for a complex object (e.g., Computer).
4. Implement an Observer pattern for a weather station.
5. Implement a Strategy pattern for different sorting algorithms.
6. Implement a Decorator pattern for adding functionalities to a text editor.
7. Implement an Adapter pattern for integrating incompatible interfaces.
8. Implement a Command pattern for a simple remote control.

### **Scenario-Based Questions:**

9. How would you design a parking lot system using OOP?
10. How would you model a library management system?
11. Design an elevator system using OOP principles.
12. How would you structure a chess game using OOP?
13. Design a vending machine system.
14. How would you model an online shopping cart?
15. Design a restaurant reservation system.
16. How would you implement a file system hierarchy using OOP?

---

## **VII. OOP METRICS & QUALITY INDICATORS**

1. **Cohesion** – How closely related are the methods of a class?
2. **Coupling** – How dependent is one class on another?
3. **Depth of Inheritance Tree (DIT)** – How deep is the inheritance hierarchy?
4. **Number of Children (NOC)** – How many subclasses does a class have?
5. **Response For a Class (RFC)** – Number of methods that can be executed in response to a message.
6. **Lack of Cohesion in Methods (LCOM)** – Measures how well the methods of a class are related.
7. **Cyclomatic Complexity** – Measures the complexity of a method.
8. **Class Size (LOC)** – Lines of code per class.

---

## **VIII. LANGUAGE-SPECIFIC OOP FEATURES**

### **Java:**

1. What is the `Object` class in Java?
2. Explain `equals()` vs `==` in Java.
3. What are access modifiers in Java?
4. Explain `final`, `finally`, and `finalize()`.
5. What are Java annotations and how are they used?

### **C++:**

6. What are virtual functions in C++?
7. Explain copy constructor and assignment operator.
8. What is RAII (Resource Acquisition Is Initialization)?
9. Explain `const` correctness in C++.
10. What are friend functions and classes?

### **Python:**

11. How does Python handle multiple inheritance?
12. What are Python’s magic methods (`__init__`, `__str__`, etc.)?
13. Explain Python’s property decorators.
14. How does Python implement encapsulation without access modifiers?
15. What are mixins in Python?

### **C#:**

16. What are properties in C#?
17. Explain `struct` vs `class` in C#.
18. What are delegates and events in C#?
19. Explain LINQ and its relation to OOP.
20. What are extension methods in C#?

---

## **IX. PREPARATION CHECKLIST**

### **Must Know:**

- Four pillars of OOP (Encapsulation, Inheritance, Polymorphism, Abstraction)
- Class vs Object
- Constructors and Destructors
- Access Modifiers
- Method Overloading vs Overriding
- Basic SOLID principles

### **Should Know:**

- Design Patterns (Singleton, Factory, Observer, etc.)
- Interface vs Abstract Class
- Composition over Inheritance
- Coupling and Cohesion
- Common anti-patterns

### **Good to Know:**

- Advanced SOLID principles
- Multiple inheritance issues (Diamond Problem)
- Reflection and Metaprogramming
- Memory management in OOP
- Performance implications of OOP designs

---

**Total Questions: 52+ (with extended sections covering principles, patterns, scenarios, and language specifics)**

This comprehensive sheet covers OOP from basic concepts to advanced design patterns and practical scenarios, ensuring thorough preparation for any OOP-related interview.
