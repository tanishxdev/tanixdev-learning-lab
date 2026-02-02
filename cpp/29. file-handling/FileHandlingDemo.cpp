// File: FileHandlingDemo.cpp
// Description: Complete C++ File Handling Examples with Comments

#include <iostream>
#include <fstream>   // For file streams: ifstream, ofstream, fstream
#include <cstdio>    // For remove()
#include <string>    // For std::string

using namespace std;

int main() {

    // ==============================
    // 1. Writing to a Text File
    // ==============================
    ofstream outFile("example.txt"); // Open file in write mode
    if (!outFile) {
        cerr << "Error opening file for writing!" << endl;
        return 1;
    }
    outFile << "Hello, GeeksforGeeks!" << endl;
    outFile << "C++ File Handling is easy." << endl;
    outFile.close(); // Always close after use

    // ==============================
    // 2. Reading from a Text File
    // ==============================
    ifstream inFile("example.txt"); // Open file in read mode
    if (!inFile) {
        cerr << "Error opening file for reading!" << endl;
        return 1;
    }
    string line;
    cout << "Reading File Content:" << endl;
    while (getline(inFile, line)) { // Read line by line
        cout << line << endl;
    }
    inFile.close();

    // ==============================
    // 3. Appending to an Existing File
    // ==============================
    ofstream appendFile("example.txt", ios::app); // Open in append mode
    if (!appendFile) {
        cerr << "Error opening file for appending!" << endl;
        return 1;
    }
    appendFile << "This line is appended." << endl;
    appendFile.close();

    // Verify append
    ifstream checkAppend("example.txt");
    cout << "\nAfter Appending:" << endl;
    while (getline(checkAppend, line)) {
        cout << line << endl;
    }
    checkAppend.close();

    // ==============================
    // 4. Copying File Content
    // ==============================
    ifstream source("example.txt");
    ofstream dest("example_copy.txt");
    if (!source || !dest) {
        cerr << "Error opening files for copy!" << endl;
        return 1;
    }
    while (getline(source, line)) {
        dest << line << endl; // Write each line to destination
    }
    source.close();
    dest.close();
    cout << "\nFile copied to 'example_copy.txt' successfully." << endl;

    // ==============================
    // 5. Deleting a File
    // ==============================
    if (remove("example_copy.txt") == 0) {
        cout << "File 'example_copy.txt' deleted successfully." << endl;
    } else {
        perror("Error deleting file");
    }

    // ==============================
    // 6. Handling Binary Files
    // ==============================
    string str = "Binary File Data";
    ofstream binaryOut("binaryFile.bin", ios::binary);
    if (!binaryOut) {
        cerr << "Error opening binary file for writing!" << endl;
        return 1;
    }
    // Write string length and string content
    size_t len = str.size();
    binaryOut.write(reinterpret_cast<char*>(&len), sizeof(len));
    binaryOut.write(str.c_str(), len);
    binaryOut.close();

    // Reading Binary File
    ifstream binaryIn("binaryFile.bin", ios::binary);
    if (!binaryIn) {
        cerr << "Error opening binary file for reading!" << endl;
        return 1;
    }
    size_t readLen;
    binaryIn.read(reinterpret_cast<char*>(&readLen), sizeof(readLen));
    char* buffer = new char[readLen + 1]; // +1 for null-terminator
    binaryIn.read(buffer, readLen);
    buffer[readLen] = '\0'; // Null-terminate
    cout << "\nBinary File Content: " << buffer << endl;
    delete[] buffer;
    binaryIn.close();

    // ==============================
    // 7. Error Handling Example
    // ==============================
    ifstream errorFile("nonexistent.txt");
    if (!errorFile.is_open()) {
        cerr << "\nError: File does not exist!" << endl;
    }

    return 0;
}
