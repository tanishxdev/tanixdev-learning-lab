#include <bits/stdc++.h>
using namespace std;

// 1. Creating a Union
union my_union
{
    // define a union
    int age;
    char grade;
    float gpa;
};
// 2. 
// 3. Nested Union inside Structure
// Structure with nested union
struct Employee {
    char name[50];
    int id;

    union Pay {
        float hourlyRate;
        float salary;
    } payment;
};


// anonymous union
struct Temperature {
    int day;

    // Anonymous union (no name)
    union {
        float celsius;
        float fahrenheit;
    };
};
int main()
{   
    // 1. Creating a Union
    // declaring a union variable
    my_union student;

    // assign values
    student.age = 20;
    student.grade = 'A';
    student.gpa = 3.5;

    // print values
    cout << "Age: " << student.age << endl;
    cout << "Grade: " << student.grade << endl;
    cout << "GPA: " << student.gpa << endl;
    
    // 👉 Note: Only the last assigned value (gpa) remains valid. Earlier values get overwritten because memory is shared.

    // 2. Size of Union
    cout << "Size of union: " << sizeof(student) << endl;
    cout << "Size of age: " << sizeof(student.age) << endl;
    cout << "Size of grade: " << sizeof(student.grade) << endl;
    cout << "Size of gpa: " << sizeof(student.gpa) << endl;

    // 3. Nested Union inside Structure
    Employee e1;
    e1.id = 101;

    // Using union member
    e1.payment.hourlyRate = 300.0;

    cout << "Employee ID: " << e1.id << endl;
    cout << "Hourly Rate: Rs " << e1.payment.hourlyRate << endl;

    // 👉 Useful when you want to store either salary OR hourly rate (not both).

    // 4. Anonymous Union
     Temperature t1;
    t1.day = 1;

    // Store temperature in Celsius
    t1.celsius = 36.6;

    cout << "Day: " << t1.day << endl;
    cout << "Temperature (Celsius): " << t1.celsius << endl;

    // Now overwrite with Fahrenheit
    t1.fahrenheit = 97.9;

    cout << "Temperature (Fahrenheit): " << t1.fahrenheit << endl;

    return 0;
}