// File: IdentifierDemo.java

public class IdentifierDemo {

    public static void main(String[] args) {

        // Variable declaration using valid identifiers

        int age = 20;          // normal identifier
        int _count = 5;        // underscore allowed
        int $price = 100;      // dollar allowed
        int totalSum = 50;     // camelCase (recommended)

        // Printing values
        System.out.println("Age: " + age);
        System.out.println("Count: " + _count);
        System.out.println("Price: " + $price);
        System.out.println("Total: " + totalSum);
    }
}