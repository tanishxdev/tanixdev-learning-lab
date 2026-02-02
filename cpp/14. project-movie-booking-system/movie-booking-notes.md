# Cinema Booking System

## Developer Mindset for Any Project (Step-by-Step)

### 1. Start with the Real-World Problem

Don’t think “I need to code something” — think “What problem am I solving?”

**Example here:**

> People need to book seats for a movie. They want to see which seats are free, book them, cancel if needed, and keep data safe for next time.

So before code, visualize the real-world process.

Picture it in your head:

* A cinema has rows and seats.
* Some seats are booked; some are available.
* People can see layout, book, or cancel.
* Data should not disappear when app closes.

That’s your core user flow.
You’ve now defined the purpose and requirements — that’s always Step 1.

---

### 2. Break It Down Into Mini Features (Functional Thinking)

Now think like a product designer:

> “What actions can the user perform?”

**Core actions (for this project):**

* View all seats
* Book a single seat
* Book a group (block) of seats
* Cancel a booking
* View only available seats
* Save & load data

Each of these is one functionality, and therefore one function or method in code.

This mindset = Feature Thinking.

---

### 3. Think in Terms of Data

After features, ask:

> “What data do I need to represent this world?”

**Here:**

* We need rows and columns → seating grid
* Each seat can have a state → available/booked

Hence, `0` and `1` → perfect minimal model.

**Step done** → we’ve identified core data model:
`seat[i][j] = 0 or 1`

This thinking is called Data Modeling — it’s how you represent reality in code.

---

### 4. Think About the User’s Perspective

Ask:

> “How will the user interact with my system?”

**In this case:**

* Through a console (CLI)
* Via menu options and inputs
* Should be intuitive and simple

That gives you:

* A `while(true)` loop → continuous interaction
* A menu → choices (1-6)
* Input validation → to prevent invalid booking

This is UX thinking for developers.

---

### 5. Organize the Logic (Code Design Thinking)

Once you have your features, data, and UX planned — decide how to structure your code:

* For small scripts → procedural (functions)
* For real projects → OOP (classes & methods)

Ask:

> “Should everything be global, or should I encapsulate things?”

**Correct choice:**
Encapsulate inside a CinemaBooking class.
This gives:

* Reusability (create multiple cinemas)
* Maintainability (easy to add features)
* Safety (no global mess)

This is Architectural Thinking — deciding how to structure your program cleanly.

---

### 6. Plan for Scalability and Persistence

Now think long-term:

> “What happens when the app closes? Can I restore state?”
> “Can I handle different cinemas or shows?”

That’s where file handling comes in.
You design save/load logic early → not as an afterthought.

This is System Design Mindset (on a small scale).

---

### 7. Build Incrementally (Developer Discipline)

You never code everything at once.
You think → code → test → fix → improve.

**Step-by-step roadmap you should follow:**

| Stage  | Focus                      |
|--------|----------------------------|
| Step 1 | Display seat layout only   |
| Step 2 | Add single seat booking    |
| Step 3 | Add block booking          |
| Step 4 | Add cancel                 |
| Step 5 | Add file save/load         |
| Step 6 | Refactor into class        |
| Step 7 | Improve UI (user messages) |

This is called Incremental Development — like building a house brick by brick, testing each wall.

---

### 8. Refactor and Polish

Once it works, a real dev asks:

> “Can this be cleaner, more readable, or extensible?”

**Examples:**

* Move logic into methods
* Use helper functions like `isValidSeat()`
* Replace 0-based with 1-based indexing for UX
* Add file persistence
* Improve visuals or feedback (`[OK]`, `[ERROR]`)

This is Refactoring Mindset — clean, reusable, human-readable code.

---

### 9. Think About Future Improvements

A real dev always thinks forward.

**Ideas:**

* Add seat categories (VIP, Regular)
* Add pricing & total bill
* Support multiple movies
* Use a file or DB for shows
* Create a GUI (like in C++ with Qt or web app)

That’s Product Growth Thinking — you build version 1 but imagine version 2.

---

### 10. Document & Reflect

After finishing:

* Add comments
* Write README
* Explain what’s improved and why
* Reflect: “What did I learn from this?”

That reflection helps you grow developer maturity — understanding design trade-offs and better patterns.

---

## TL;DR — The Developer Thinking Flow

| Stage           | Question to Ask                         | Outcome            |
|-----------------|-----------------------------------------|--------------------|
| 1. Understand  | What real-world problem am I solving?   | Purpose            |
| 2. Break Down  | What are the core features?             | Functional clarity |
| 3. Data Model  | What data structure represents it best? | Logical structure  |
| 4. UX          | How will users interact?                | Interface          |
| 5. Design      | How to organize my code cleanly?        | Architecture       |
| 6. Persistence | Should my data survive?                 | File/DB plan       |
| 7. Build       | What’s my first small milestone?        | Incremental dev    |
| 8. Refactor    | Can I make it cleaner?                  | Maintainability    |
| 9. Extend      | What’s next?                            | Scalability        |
| 10. Reflect    | What did I learn?                       | Growth             |

## Step-by-Step Thinking for the First Version (Procedural, Beginner-Style Mindset)

At this stage, your goal is to make it work — not perfect.

### 1. Understanding the Problem

You start by asking yourself:

> “How can I represent a cinema seating system in code?”

You identify:

* Each seat can be booked or free
* There are rows and columns

So you create a 2D array:

```cpp
int seats[ROWS][COLS] = {0};
```

Simple and effective.

---

### 2. Thinking Procedurally (Step-by-Step Actions)

Then, you think:

> “What can the user do with this system?”

You list actions:

* View seats
* Book single seat
* Book multiple seats
* Cancel booking
* Show available seats

So, naturally, you create functions for each.
You’re not yet thinking in objects or states — just in operations.

Each function is like a button action.

---

### 3. Thinking in If-Else Logic

You realize users can make mistakes (invalid input, seat already booked).
So your next thought is:

> “How do I make sure my code handles bad inputs gracefully?”

That’s where you write validation checks:

```cpp
if (r >= 0 && r < ROWS && c >= 0 && c < COLS)
```

and logic to check if a seat is already taken.

This is basic defensive programming thinking.

---

### 4. Thinking About User Flow (Interaction Loop)

Then you think:

> “I need to keep showing the menu until the user exits.”

So you wrap everything inside:

```cpp
while (true) {
   // menu + switch-case
}
```

That’s how you simulate an interactive system.

---

### 5. Outcome

* Program works, features are separate functions.
* But… it’s rigid:
  * Fixed seat size (5×7)
  * Global variables
  * No data persistence
  * Not modular
  * Not easy to extend

That’s okay — this is the foundation mindset.

At this stage, you’re learning to control flow and state in C++.

---

## Step-Up Thinking for the Second Version (Object-Oriented, Developer-Style Mindset)

Now, your goal is not just to make it work — but to make it scalable, maintainable, and realistic.

This is how your thought process evolves.

### 1. Problem Reframing (OOP Mindset)

You think:

> “A cinema is an object with properties (rows, seats) and actions (book, cancel, view).”

So, instead of having multiple free functions and global variables,
you encapsulate everything inside a class:

```cpp
class CinemaBooking {
   int rows, cols;
   vector<vector<int>> seats;
   ...
};
```

This makes your code modular and real-world-like.
Each cinema can be a separate instance.

---

### 2. Dynamic Thinking (Scalability)

You realize:

> “What if the cinema size changes later?”

Hardcoding rows/cols doesn’t scale.
So you move to dynamic allocation using:

```cpp
vector<vector<int>> seats;
```

and initialize it in the constructor.

Now, the system adapts to any size — not just 5×7.

---

### 3. Persistence Thinking (Real-World Behavior)

You think:

> “In a real system, if I close the program, data shouldn’t vanish.”

So you add file handling:

* `saveToFile()` → saves seat states
* `loadFromFile()` → restores them at startup

This turns your toy program into a mini persistent application.

You’re now thinking like a software engineer, not a student.

---

### 4. Reusability & Clean Code Thinking

You spot repetitive code (seat validation).
So you create a helper method:

```cpp
bool isValidSeat(int r, int c)
```

This improves code reuse and readability.
Your brain is shifting from code writing → code designing.

---

### 5. User Experience Thinking

You think:

> “I want this to be more user-friendly.”

So you make:

* 1-based indexing (for humans)
* `[OK]` and `[ERROR]` messages
* Layout auto-refresh after booking/canceling

You’re thinking like a user, not just a coder.
That’s real development maturity.

---

### 6. File-IO Design Thinking

Instead of dumping raw data, you carefully format it row by row.
You also ensure that the system can gracefully handle missing files (`if (!in) return;`).

That’s robustness thinking.

---

### 7. Encapsulation and Responsibility Thinking

Now every function in the class has a clear responsibility:

* `viewSeats()` → display
* `bookSingleSeat()` → user booking logic
* `bookBlockSeats()` → advanced booking
* `cancelSeat()` → reversal
* `displayAvailableSeats()` → filtered view

Your brain is now wired for modular programming.

---

### 8. Maintenance & Future-Proofing Thinking

You realize:

> “I can easily add features now without breaking existing ones.”

**Ideas like:**

* Seat pricing
* Multiple shows
* Different cinema halls
* GUI front-end

…can be added naturally.
Because your design now supports extension, not modification.

This is SOLID principle thinking (especially the Open/Closed Principle).

---

## Summary of Mindset Evolution

| Stage               | Beginner Code    | Developer Code                |
|---------------------|------------------|-------------------------------|
| **Approach**        | Procedural       | Object-Oriented               |
| **State**           | Global array     | Class with encapsulated data  |
| **Seats**           | Fixed size       | Dynamic vector                |
| **Persistence**     | None             | File-based (seats.txt)        |
| **Validation**      | Inline if checks | Helper method (`isValidSeat`) |
| **User Experience** | Raw inputs       | Cleaner messages, 1-based UI  |
| **Maintenance**     | Hard to scale    | Easy to extend                |
| **Thinking Style**  | “Make it work”   | “Make it last”                |

---

## Procedural Approach vs OOP + Persistent Approach

### 1. First Version — Procedural Approach

#### Structure

* Uses global 2D array `seats[ROWS][COLS]`.
* Everything is implemented as separate functions (`viewSeats`, `bookSingleSeat`, etc.).
* Driven by a menu loop in `main()`.

#### Key Traits

| Feature               | Description                                                  |
|-----------------------|--------------------------------------------------------------|
| **Programming Style** | Procedural (functions + global state)                        |
| **Data Storage**      | In-memory only (resets every run)                            |
| **Seat Coordinates**  | 0-based (less intuitive for user)                            |
| **Seat Data**         | Global static array `int seats[ROWS][COLS]`                  |
| **Scalability**       | Hardcoded `ROWS` and `COLS` constants                        |
| **File Handling**     | No persistence (all bookings lost after program ends)        |
| **User Interface**    | Simple console printouts, no validation beyond bounds        |
| **Reusability**       | Difficult — all functions depend on global array             |
| **Extensibility**     | Adding new features (like multiple shows or pricing) is hard |

---

### 2. Second Version — OOP + Persistent Approach

#### Structure

* Uses a `CinemaBooking` class to encapsulate all data and operations.
* Stores seat data in a 2D `vector<vector<int>>`, allowing dynamic size.
* Includes file persistence (`saveToFile` & `loadFromFile`).
* Uses helper functions and better UX (like 1-based input).

#### Key Traits

| Feature               | Description                                                             |
|-----------------------|-------------------------------------------------------------------------|
| **Programming Style** | Object-Oriented (class-based encapsulation)                             |
| **Data Storage**      | Stored in memory and saved to `seats.txt`                               |
| **Seat Coordinates**  | 1-based (user-friendly)                                                 |
| **Seat Data**         | Private member `vector<vector<int>> seats`                              |
| **Scalability**       | Dynamic rows & columns through constructor                              |
| **File Handling**     | Persistent (loads/saves seat layout)                                    |
| **User Interface**    | Cleaner, with `[OK]` and `[ERROR]` feedback                             |
| **Reusability**       | High — multiple cinema halls or shows possible by creating more objects |
| **Extensibility**     | Easy to add price, show time, seat type, etc.                           |
| **Code Organization** | No globals, better encapsulation, maintainable                          |

---

### 3. Summary of Improvements

| Area                | Old Version             | New Version                            |
|---------------------|-------------------------|----------------------------------------|
| **Code Style**      | Procedural              | Object-Oriented                        |
| **Globals**         | Uses global `seats[][]` | No globals (encapsulated in class)     |
| **Flexibility**     | Fixed 5x7               | Customizable via constructor           |
| **Persistence**     | None                    | Saves & loads from `seats.txt`         |
| **User Input**      | 0-based indices         | 1-based indices                        |
| **UX / Output**     | Basic                   | Clearer feedback and seat view         |
| **Maintainability** | Low                     | High                                   |
| **Extensibility**   | Difficult to extend     | Easy to scale up features              |
| **Memory Safety**   | Static array            | Dynamic `vector` memory-safe           |
| **Data Validation** | Manual in each function | Centralized via helper `isValidSeat()` |

---

### 4. Why the Second Version is Better

* Cleaner, modular, and scalable design
* Real-world persistence using file I/O
* Follows OOP principles: encapsulation, abstraction
* Easier to test, maintain, and extend
* User experience improved with better feedback and visuals

---

### 5. When to Use Which

| Situation                                             | Recommended Version                                    |
|-------------------------------------------------------|--------------------------------------------------------|
| **Small learning project / demo**                     | Procedural (first)                                     |
| **Realistic app / project assignment / OOP practice** | Class-based (second)                                   |
| **When persistence required**                         | Class-based (second)                                   |
| **When performance over structure**                   | Procedural (first, slightly faster due to no file I/O) |

Perfect — this is the exact kind of reflection a good developer should do.
Let’s go deep into the thinking process behind both versions — the why and how you should think when evolving from the first to the second.

---


## What You Should Learn to Think Like This

When you see a problem next time, your thought process should be:

1. **What is the real-world entity here?** → make it a class.
2. **What are its properties?** → data members.
3. **What are its actions?** → methods.
4. **What are the inputs & constraints?** → validation logic.
5. **How does it interact with users?** → menu/UI design.
6. **What happens when the app closes?** → persistence logic.
7. **What could go wrong?** → error handling.
8. **Can I extend it easily later?** → modular design.

That’s the software engineer’s thinking pattern.

---

## Version 1 Code (Procedural Approach)

```cpp
#include <iostream>
using namespace std;

const int ROWS = 5, COLS = 7;
int seats[ROWS][COLS] = {0}; // 0 = available, 1 = booked

// Shows the full seating layout
void viewSeats() {
    cout << "\n--- Seat Layout (0 = Available, 1 = Booked) ---\n";
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            cout << seats[i][j] << " ";
        }
        cout << "\n";
    }
}

// Books a single seat if it's available
void bookSingleSeat() {
    int r, c;
    cout << "Enter row and column to book (0-based): ";
    cin >> r >> c;

    if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
        if (seats[r][c] == 0) {
            seats[r][c] = 1;
            cout << "✅ Seat (" << r << "," << c << ") booked successfully.\n";
        } else {
            cout << "❌ Seat already booked.\n";
        }
    } else {
        cout << "❌ Invalid row/column.\n";
    }
}

// Books a group of adjacent seats in a row
void bookBlockSeats() {
    int row, startCol, count;
    cout << "Enter row, starting column, and number of seats to book (0-based): ";
    cin >> row >> startCol >> count;

    if (row >= 0 && row < ROWS && startCol >= 0 && startCol + count <= COLS) {
        bool canBook = true;
        for (int i = 0; i < count; i++) {
            if (seats[row][startCol + i] == 1) {
                canBook = false;
                break;
            }
        }

        if (canBook) {
            for (int i = 0; i < count; i++) {
                seats[row][startCol + i] = 1;
            }
            cout << "✅ Block of " << count << " seats booked successfully.\n";
        } else {
            cout << "❌ One or more seats already booked in this block.\n";
        }
    } else {
        cout << "❌ Invalid row or seat range.\n";
    }
}

// Cancels a booking
void cancelSeat() {
    int r, c;
    cout << "Enter row and column to cancel (0-based): ";
    cin >> r >> c;

    if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
        if (seats[r][c] == 1) {
            seats[r][c] = 0;
            cout << "✅ Booking for seat (" << r << "," << c << ") cancelled.\n";
        } else {
            cout << "❌ Seat is not booked.\n";
        }
    } else {
        cout << "❌ Invalid row/column.\n";
    }
}

// Shows only available seats
void displayAvailableSeats() {
    cout << "\n--- Available Seats ---\n";
    bool found = false;

    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            if (seats[i][j] == 0) {
                cout << "Seat (" << i << "," << j << ") is available\n";
                found = true;
            }
        }
    }

    if (!found)
        cout << "❌ No seats are available.\n";
}

// Menu-driven system
int main() {
    int choice;

    while (true) {
        cout << "\n====== Cinema Seat Booking Menu ======\n";
        cout << "1. View Seat Layout\n";
        cout << "2. Book a Single Seat\n";
        cout << "3. Book a Block of Seats\n";
        cout << "4. Cancel a Seat Booking\n";
        cout << "5. Display Available Seats Only\n";
        cout << "6. Exit\n";
        cout << "Enter your choice (1-6): ";
        cin >> choice;

        switch (choice) {
            case 1: viewSeats(); break;
            case 2: bookSingleSeat(); break;
            case 3: bookBlockSeats(); break;
            case 4: cancelSeat(); break;
            case 5: displayAvailableSeats(); break;
            case 6:
                cout << "👋 Exiting system. Thank you!\n";
                return 0;
            default:
                cout << "❌ Invalid choice. Please try again.\n";
        }
    }
}
```

## Version 2 Code (OOP + Persistent Approach)

```cpp
#include <iostream>
#include <vector>
#include <fstream>
using namespace std;

class CinemaBooking {
    int rows, cols;
    vector<vector<int>> seats; // 0 = free, 1 = booked

public:
    // Constructor (with dynamic size)
    CinemaBooking(int r, int c) : rows(r), cols(c) {
        seats.assign(rows, vector<int>(cols, 0));
        loadFromFile(); // try loading previous data
    }

    // --- Save & Load from File ---
    void saveToFile() {
        ofstream out("seats.txt");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                out << seats[i][j] << " ";
            }
            out << "\n";
        }
        out.close();
    }

    void loadFromFile() {
        ifstream in("seats.txt");
        if (!in) return; // file doesn't exist
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                in >> seats[i][j];
            }
        }
        in.close();
    }

    // --- Helper: Check if seat valid ---
    bool isValidSeat(int r, int c) {
        return (r >= 0 && r < rows && c >= 0 && c < cols);
    }

    // --- View Seats ---
    void viewSeats() {
        cout << "\n--- Seat Layout (0 = Free, 1 = Booked) ---\n   ";
        for (int j = 0; j < cols; j++) cout << j + 1 << " ";
        cout << "\n";

        for (int i = 0; i < rows; i++) {
            cout << i + 1 << " | ";
            for (int j = 0; j < cols; j++) {
                cout << seats[i][j] << " ";
            }
            cout << "\n";
        }
    }

    // --- Book Single Seat ---
    void bookSingleSeat() {
        int r, c;
        cout << "Enter row and column (1-based): ";
        cin >> r >> c;
        r--, c--; // convert to 0-based

        if (isValidSeat(r, c) && seats[r][c] == 0) {
            seats[r][c] = 1;
            cout << "[OK] Seat booked successfully.\n";
            saveToFile();
        } else {
            cout << "[ERROR] Invalid or already booked.\n";
        }
        viewSeats();
    }

    // --- Book Block of Seats ---
    void bookBlockSeats() {
        int row, startCol, count;
        cout << "Enter row, starting column, and number of seats (1-based): ";
        cin >> row >> startCol >> count;
        row--, startCol--; // convert to 0-based

        if (row >= 0 && row < rows && startCol >= 0 && startCol + count <= cols) {
            bool canBook = true;
            for (int i = 0; i < count; i++) {
                if (seats[row][startCol + i] == 1) {
                    canBook = false;
                    break;
                }
            }
            if (canBook) {
                for (int i = 0; i < count; i++) seats[row][startCol + i] = 1;
                cout << "[OK] Block booked successfully.\n";
                saveToFile();
            } else {
                cout << "[ERROR] Some seats already booked.\n";
            }
        } else {
            cout << "[ERROR] Invalid input.\n";
        }
        viewSeats();
    }

    // --- Cancel Booking ---
    void cancelSeat() {
        int r, c;
        cout << "Enter row and column to cancel (1-based): ";
        cin >> r >> c;
        r--, c--;

        if (isValidSeat(r, c) && seats[r][c] == 1) {
            seats[r][c] = 0;
            cout << "[OK] Booking cancelled.\n";
            saveToFile();
        } else {
            cout << "[ERROR] Invalid seat or not booked.\n";
        }
        viewSeats();
    }

    // --- Show Available Seats ---
    void displayAvailableSeats() {
        cout << "\n--- Available Seats ---\n";
        bool found = false;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (seats[i][j] == 0) {
                    cout << "Seat (" << i + 1 << "," << j + 1 << ") is free\n";
                    found = true;
                }
            }
        }
        if (!found) cout << "No seats available.\n";
    }
};

int main() {
    int rows = 5, cols = 7;
    CinemaBooking cinema(rows, cols);

    int choice;
    while (true) {
        cout << "\n====== Cinema Seat Booking Menu ======\n";
        cout << "1. View Seat Layout\n";
        cout << "2. Book a Single Seat\n";
        cout << "3. Book a Block of Seats\n";
        cout << "4. Cancel a Seat Booking\n";
        cout << "5. Display Available Seats Only\n";
        cout << "6. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: cinema.viewSeats(); break;
            case 2: cinema.bookSingleSeat(); break;
            case 3: cinema.bookBlockSeats(); break;
            case 4: cinema.cancelSeat(); break;
            case 5: cinema.displayAvailableSeats(); break;
            case 6:
                cout << "Exiting system. Thank you!\n";
                return 0;
            default:
                cout << "[ERROR] Invalid choice. Try again.\n";
        }
    }
}

/**
 * [OK] What Improved Here?

Class-based → no global variables, cleaner code.

File persistence → bookings saved in seats.txt (reopens later with same data).

1-based indexing → user-friendly.

Auto layout refresh → after booking/cancel.

Helper function (isValidSeat) → reduces repetition.

UX upgrade → clear messages, [OK] / [ERROR] icons.
 */
```