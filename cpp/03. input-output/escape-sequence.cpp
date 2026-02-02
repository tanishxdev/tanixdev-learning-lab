#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Escape Sequences in C++\n\n";

    // Backslash
    cout << "1. Backslash: \\" << endl;

    // Single Quote
    cout << "2. Single Quote: \'" << endl;

    // Double Quote
    cout << "3. Double Quote: \"" << endl;

    // Question Mark
    cout << "4. Question Mark: \?" << endl;

    // Alert (Bell) → Some terminals will make a beep sound
    cout << "5. Alert (Bell): \a" << endl;

    // Backspace → Deletes previous character (output may vary)
    cout << "6. Backspace: ABC\bD (B is erased)" << endl;

    // Form feed → Very rare, may act as whitespace/new page
    cout << "7. Form feed: Hello\fWorld" << endl;

    // New line
    cout << "8. New Line: Line1\nLine2" << endl;

    // Carriage Return → Cursor goes to start of line (overwrites text)
    cout << "9. Carriage Return: Hello\rWorld" << endl;

    // Horizontal Tab
    cout << "10. Horizontal Tab: Start\tEnd" << endl;

    // Vertical Tab → Rare, may act like newline
    cout << "11. Vertical Tab: Line1\vLine2" << endl;

    // Null Character → Acts like string terminator
    cout << "12. Null Character: Hello\0World (after \\0 text may not print)" << endl;

    // Octal number
    cout << "13. Octal Number (A as octal 101): \101" << endl;

    // Hexadecimal number
    cout << "14. Hexadecimal Number (A as hex 41): \x41" << endl;

    // ⚠️ Note: Some (like \a, \f, \v, \0) may behave differently depending on your terminal/IDE.
    return 0;
}
