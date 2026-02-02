#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}
/*
🔹 Step 1: Save the file

Save it as program.cpp.

🔹 Step 2: Compile the code

Now you need a compiler.

In Windows → g++ (comes with MinGW or CodeBlocks).

In Linux/Mac → already installed (g++).

Command (Terminal / CMD):

g++ program.cpp -o program.exe


👉 Here:

g++ = GNU C++ compiler

program.cpp = your source code

-o program.exe = output file (executable)

🔹 Step 3: Run the executable

Now run the output file:

On Windows:

program.exe


On Linux/Mac:

./program


👉 Output:

Hello World!

🔹 What happens inside the compiler (behind the scenes)?

When you typed g++ program.cpp -o program.exe, actually 4 phases happen:

Preprocessing

Handles #include, #define, macros.

Example: #include <iostream> is expanded to actual library code.

Command to see:

g++ -E program.cpp -o program.i


Compilation

Converts .i file → Assembly code (.s).

Assembly = human-readable low-level instructions.

Command:

g++ -S program.i -o program.s


Assembly

Assembler converts .s → Object code (.o).

This is machine instructions but still incomplete (not linked with libraries).

Command:

g++ -c program.s -o program.o


Linking

Links your .o file with library files (like iostream functions).

Produces final .exe (Windows) or binary (Linux/Mac).

Command:

g++ program.o -o program.exe

🔹 Final Recap

Write code → program.cpp

Preprocessor expands macros → program.i

Compiler translates to assembly → program.s

Assembler makes object file → program.o

Linker combines everything → program.exe

Run the exe → Output shown 🎉
*/