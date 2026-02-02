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