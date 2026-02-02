# **LLD Answer Template (Object-Oriented + Class Design)**

A universal structure to answer any LLD question: Parking Lot, Logger, Rate Limiter, Elevator, Splitwise, BookMyShow, Cache, etc.

This template ensures your answer is always:

* Modular
* Extensible
* Clean OOP
* Fully compliant with SOLID principles
* Interviewer-friendly

---

# **0. Problem Summary**

Write a crisp 1–2 sentence description.

Example:

```
Design a system to do X, supporting Y features and Z constraints.
```

---

# **1. Requirements Gathering**

## **1.1 Functional Requirements**

List exactly what the system MUST support.

Example:

* Create users
* Process payments
* Split bills
* Manage inventory

## **1.2 Non-Functional Requirements**

Examples:

* Scalability
* Concurrency handling
* Data integrity
* Modularity
* Extensibility
* Thread-safety

## **1.3 Constraints / Assumptions**

Example:

* System runs in memory
* Use OOP concepts only
* Persistence optional

---

# **2. Identify Core Entities (Classes)**

List main objects in the system.

Example for Splitwise:

* User
* Expense
* Split
* Group

Example for Parking Lot:

* Vehicle
* ParkingSpot
* Ticket
* Payment

This is the *foundation* of your design.

---

# **3. Responsibilities of Each Class (Very Important)**

Define what each class does (SRP — Single Responsibility Principle).

Example:

### **User**

* Holds identity
* Participates in groups and expenses

### **Expense**

* Stores amount, payer, participants
* Creates splits based on strategy

### **PaymentService**

* Handles settlement

Clearly defining responsibilities makes your design clean.

---

# **4. Relationships Between Classes**

Identify:

* 1–1
* 1–many
* many–many
* inheritance
* composition
* aggregation

Example:

```
Group has many Users  
Expense has many Splits  
ParkingLot has many Floors  
```

Use composition where objects "own" others.

---

# **5. Apply SOLID Principles**

### **S — Single Responsibility**

Each class should only do one thing.

### **O — Open/Closed**

System should support new types without modifying old code.

### Example:

Add new ExpenseSplitStrategy without editing existing logic.

### **L — Liskov Substitution**

Child classes must be usable wherever parent is expected.

### **I — Interface Segregation**

Prefer small focused interfaces.

### **D — Dependency Inversion**

High-level modules depend on abstractions, not concrete classes.

---

# **6. Define Key Interfaces and Abstractions**

LLD interviewers love abstraction.

Example:

### **interface SplitStrategy**

```
calculateSplits(Expense expense): List<Split>
```

### **interface PaymentProcessor**

```
processPayment(User from, User to, double amount)
```

This allows new behaviors without rewriting existing code.

---

# **7. Class Diagram (Describe Verbally)**

Even without drawing tools, describe structure:

```
User → participates in → Expense
Expense → uses → SplitStrategy
SplitStrategy → returns → list of Splits
Group → contains → Users and Expenses
```

This alone makes your LLD look professional.

---

# **8. Workflow / Sequence (How System Behaves)**

Example for Splitwise:

```
User creates expense → chooses split strategy →
Strategy computes splits → Balances updated → Summary generated
```

Example for Parking Lot:

```
Vehicle arrives → Allocate spot → Issue ticket →
On exit calculate fee → Payment → Free spot
```

This proves that your design actually *works*.

---

# **9. Thread-Safety & Concurrency (If Required)**

Mention if important:

* synchronized blocks
* locks
* atomic operations
* concurrent collections
* avoiding race conditions

Example:

```
ParkingLot allocation must be synchronized to avoid double-booking spots.
```

---

# **10. Extensibility (Future Features)**

Mention 2–4 extension points.

Example:

* Add more billing strategies
* Add support for VIP parking
* Add surge pricing
* Add caching layer

Shows your system is future-proof.

---

# **11. Sample Code (Very Clean OOP Skeleton)**

Provide class skeletons, not full implementation.

Example:

```java
class Expense {
    private User paidBy;
    private double amount;
    private List<User> participants;
    private SplitStrategy splitStrategy;

    public List<Split> calculateSplits() {
        return splitStrategy.split(this);
    }
}

interface SplitStrategy {
    List<Split> split(Expense expense);
}

class EqualSplitStrategy implements SplitStrategy {
    public List<Split> split(Expense expense) { ... }
}
```

This is enough to convince an interviewer.

---

# **12. Testing and Edge Cases**

Mention:

* invalid inputs
* zero division
* empty user list
* payment rounding

LLD interviews rarely ask for unit tests, but **thinking about them shows maturity**.

---

# **13. Final Summary (30 seconds)**

End with:

```
This design is modular, clean, follows SOLID principles, supports extensibility via strategies and interfaces, prevents duplication of responsibility, and can evolve as new requirements appear.
```

Perfect professional finish.

---

# **14. Optional Add-On: Persistence Design**

If asked:

* add repository classes
* add DAO interfaces
* add in-memory storage map
* add DB schema

But only when interviewer asks.

---

# **15. Optional Add-On: API Layer**

If LLD question touches API:

* add controller
* add service layer
* explain request → service → repository flow

But keep LLD centered around classes and OOP.

---
